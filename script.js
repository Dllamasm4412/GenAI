const LEAGUE_ID = "4328";
const PUBLIC_TEST_KEY = "123";
const API_ROOT = `https://www.thesportsdb.com/api/v1/json/${PUBLIC_TEST_KEY}`;
const REFRESH_COOLDOWN_MS = 60000;
const LIVE_STATUSES = new Set(["1H", "HT", "2H", "ET", "P"]);
const COMPLETED_STATUSES = new Set(["FT", "AET", "PEN"]);

const statusMessage = document.getElementById("status-message");
const lastRefresh = document.getElementById("last-refresh");
const refreshBtn = document.getElementById("refresh-btn");
const themeToggle = document.getElementById("theme-toggle");
const liveGrid = document.getElementById("live-grid");
const todayGrid = document.getElementById("today-grid");
const recentGrid = document.getElementById("recent-grid");
const liveEmpty = document.getElementById("live-empty");
const todayEmpty = document.getElementById("today-empty");
const recentEmpty = document.getElementById("recent-empty");

let lastSuccessfulRefreshAt = null;
let lastRequestStartedAt = 0;
let cooldownTimer = null;

function getLocalDateStamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeStatus(value) {
  return String(value || "").trim().toUpperCase();
}

function isLiveEvent(event) {
  return LIVE_STATUSES.has(normalizeStatus(event.strStatus));
}

function isCompletedEvent(event) {
  return COMPLETED_STATUSES.has(normalizeStatus(event.strStatus));
}

function formatScore(value) {
  return value === null || value === undefined || value === "" ? "—" : String(value);
}

function formatKickoff(event) {
  if (event.strTimestamp) {
    const parsed = new Date(event.strTimestamp);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toLocaleString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
    }
  }

  const datePart = event.dateEvent || "Date unavailable";
  const timePart = event.strTime || "time unavailable";
  return `${datePart} ${timePart}`;
}

function apiDateLine(event) {
  const datePart = event.dateEvent || "unknown date";
  const timePart = event.strTime || "unknown time";
  return `API listed date/time: ${datePart} ${timePart}`;
}

function statusClass(event) {
  if (isLiveEvent(event)) return "live";
  if (isCompletedEvent(event)) return "final";
  return "upcoming";
}

function statusLabel(event) {
  const status = normalizeStatus(event.strStatus);
  if (isLiveEvent(event)) {
    if (status === "HT") return "Half time";
    if (status === "ET") return "Extra time";
    if (status === "P") return "Penalties";
    return "Live";
  }
  if (isCompletedEvent(event)) return "Final";
  return status || "Scheduled";
}

function clockLabel(event) {
  if (isLiveEvent(event) && event.strProgress) {
    return event.strProgress;
  }
  return formatKickoff(event);
}

function createMatchCard(event, featured) {
  const article = document.createElement("article");
  article.className = featured ? "game-card featured-card" : "game-card";
  const away = event.strAwayTeam || "Away team";
  const home = event.strHomeTeam || "Home team";
  article.setAttribute("aria-label", `${away} versus ${home}`);

  const top = document.createElement("div");
  top.className = "card-top";

  const sport = document.createElement("span");
  sport.className = "sport-label";
  sport.textContent = event.strSport || "Soccer";

  const status = document.createElement("span");
  status.className = `status-label ${statusClass(event)}`;
  status.textContent = statusLabel(event);

  top.append(sport, status);

  function teamRow(name, score) {
    const row = document.createElement("div");
    row.className = "team-row";
    const nameEl = document.createElement("p");
    nameEl.className = "team-name";
    nameEl.textContent = name;
    const scoreEl = document.createElement("p");
    scoreEl.className = "team-score";
    scoreEl.textContent = formatScore(score);
    row.append(nameEl, scoreEl);
    return row;
  }

  const bottom = document.createElement("div");
  bottom.className = "card-bottom";

  const kickoff = document.createElement("span");
  kickoff.className = "kickoff-label";
  kickoff.textContent = clockLabel(event);

  const apiLine = document.createElement("span");
  apiLine.className = "clock";
  apiLine.textContent = apiDateLine(event);

  bottom.append(kickoff, apiLine);
  article.append(
    top,
    teamRow(away, event.intAwayScore),
    teamRow(home, event.intHomeScore),
    bottom
  );
  return article;
}

function renderSection(grid, emptyEl, events, emptyText, featuredFirst) {
  grid.replaceChildren();
  if (!events.length) {
    emptyEl.textContent = emptyText;
    emptyEl.classList.remove("is-hidden");
    return;
  }

  emptyEl.classList.add("is-hidden");
  events.forEach((event, index) => {
    grid.appendChild(createMatchCard(event, Boolean(featuredFirst) && index === 0));
  });
}

function uniqueEvents(eventLists) {
  const byId = new Map();
  eventLists.flat().forEach((event) => {
    if (!event || !event.idEvent || byId.has(event.idEvent)) return;
    byId.set(event.idEvent, event);
  });
  return Array.from(byId.values());
}

function isOnLocalDate(event, localDateStamp) {
  if (event.dateEvent === localDateStamp) return true;
  if (!event.strTimestamp) return false;
  const parsed = new Date(event.strTimestamp);
  if (Number.isNaN(parsed.getTime())) return false;
  return getLocalDateStamp(parsed) === localDateStamp;
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json();
}

function setRefreshAvailability() {
  if (cooldownTimer) {
    window.clearTimeout(cooldownTimer);
    cooldownTimer = null;
  }

  const elapsed = Date.now() - lastRequestStartedAt;
  const remaining = REFRESH_COOLDOWN_MS - elapsed;

  if (remaining > 0) {
    refreshBtn.disabled = true;
    cooldownTimer = window.setTimeout(() => {
      refreshBtn.disabled = false;
    }, remaining);
    return;
  }

  refreshBtn.disabled = false;
}

async function loadMatches() {
  const now = Date.now();
  if (now - lastRequestStartedAt < REFRESH_COOLDOWN_MS && lastRequestStartedAt !== 0) {
    return;
  }

  lastRequestStartedAt = now;
  refreshBtn.disabled = true;
  statusMessage.classList.remove("is-error");
  statusMessage.textContent = "Loading Premier League matches…";

  const localDateStamp = getLocalDateStamp(new Date());
  const dayUrl = `${API_ROOT}/eventsday.php?d=${localDateStamp}&l=${LEAGUE_ID}`;
  const nextUrl = `${API_ROOT}/eventsnextleague.php?id=${LEAGUE_ID}`;
  const pastUrl = `${API_ROOT}/eventspastleague.php?id=${LEAGUE_ID}`;

  try {
    const [dayData, nextData, pastData] = await Promise.all([
      fetchJson(dayUrl),
      fetchJson(nextUrl),
      fetchJson(pastUrl),
    ]);

    const dayEvents = Array.isArray(dayData.events) ? dayData.events : [];
    const nextEvents = Array.isArray(nextData.events) ? nextData.events : [];
    const pastEvents = Array.isArray(pastData.events) ? pastData.events : [];

    const todayPool = uniqueEvents([
      dayEvents,
      nextEvents.filter((event) => isOnLocalDate(event, localDateStamp)),
    ]);

    const liveEvents = todayPool.filter(isLiveEvent);
    const todayFixtures = todayPool.filter(
      (event) => !isLiveEvent(event) && !isCompletedEvent(event)
    );
    const recentEvents = pastEvents.filter(isCompletedEvent);

    renderSection(
      liveGrid,
      liveEmpty,
      liveEvents,
      "No Premier League match is being played right now.",
      true
    );
    renderSection(
      todayGrid,
      todayEmpty,
      todayFixtures,
      `No remaining Premier League fixtures for ${localDateStamp}.`,
      false
    );
    renderSection(
      recentGrid,
      recentEmpty,
      recentEvents,
      "No completed Premier League results were returned.",
      false
    );

    lastSuccessfulRefreshAt = new Date();
    lastRefresh.textContent = `Last successful refresh: ${lastSuccessfulRefreshAt.toLocaleString()}`;
    statusMessage.textContent = `Showing Premier League data for local date ${localDateStamp}.`;
  } catch (error) {
    statusMessage.classList.add("is-error");
    statusMessage.textContent =
      "Could not load Premier League data. Check your connection and try Refresh scores after 60 seconds.";
    if (!lastSuccessfulRefreshAt) {
      liveEmpty.textContent = "Live matches are unavailable until data loads.";
      todayEmpty.textContent = "Today’s fixtures are unavailable until data loads.";
      recentEmpty.textContent = "Recent results are unavailable until data loads.";
    }
    console.error(error);
  } finally {
    setRefreshAvailability();
  }
}

refreshBtn.addEventListener("click", () => {
  loadMatches();
});

themeToggle.addEventListener("click", () => {
  const lightModeOn = document.body.classList.toggle("light-mode");
  themeToggle.setAttribute("aria-pressed", String(lightModeOn));
  themeToggle.setAttribute(
    "aria-label",
    lightModeOn ? "Switch to dark mode" : "Switch to light mode"
  );
  themeToggle.textContent = lightModeOn ? "Dark mode" : "Light mode";
});

loadMatches();
