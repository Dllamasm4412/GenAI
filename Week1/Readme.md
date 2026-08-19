# Build and Publish a Sports Dashboard with Cursor

## What you will make

In this workshop, you will use Cursor, an AI-assisted code editor, to build and publish a small website.

By the end, you will have:

- Installed and configured Cursor
- Created a GitHub repository
- Used Cursor to generate and revise a website
- Tested the site locally
- Committed your work with Git
- Published the site using GitHub Pages

Your website will be a **sports-score dashboard prototype**. It will display sample games and scores in a polished ESPN-inspired layout. It will not use ESPN content, branding, or a live sports API in this first version.

---

## Learning goals

This activity is not about having AI write everything for you. It is about practicing a responsible workflow:

1. Describe a goal clearly.
2. Ask the AI to inspect and plan before it edits files.
3. Make small, understandable changes.
4. Run and test the code.
5. Save work with Git commits.
6. Publish a working version online.

You are responsible for the code in your repository, even when an AI tool helps create it.

---

# Part 1: Install Cursor

## 1. Download Cursor

1. Go to [https://cursor.com](https://cursor.com).
2. Download the version for your operating system:
   - macOS
   - Windows
   - Linux
3. Install and open Cursor.
4. Create an account or sign in.

Cursor is an AI-enabled code editor. It can read project files, suggest changes, generate code, and help explain code.

## 2. Install Git

Git is the tool that records changes to your project over time. GitHub is a website where you can store Git repositories online.

Open a terminal and check whether Git is installed:

```bash
git --version
```

If the command prints a version number, Git is ready.

If it does not work:

- **macOS:** Install the Xcode Command Line Tools when prompted, or install Git from [https://git-scm.com](https://git-scm.com).
- **Windows:** Install Git from [https://git-scm.com](https://git-scm.com).
- **Linux:** Install Git through your distribution's package manager.

Then configure your identity. Use the email address connected to your GitHub account:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## 3. Create a workspace folder

Create a folder where you will keep class projects.

For example:

```bash
mkdir ai-coding-projects
cd ai-coding-projects
mkdir sports-dashboard
cd sports-dashboard
```

Open this folder in Cursor:

1. Open Cursor.
2. Select **File → Open Folder**.
3. Choose the `sports-dashboard` folder.

---

# Part 2: Learn the Cursor workflow

## Important Cursor features

### File Explorer

The file explorer, on the left side of Cursor, shows every file in your project. Use it to open and inspect your code.

### Integrated Terminal

Open the terminal inside Cursor using:

- **macOS:** `Control + backtick`
- **Windows/Linux:** `Control + backtick`

The terminal lets you run commands such as:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Describe your change"
```

### AI Chat and Agent

Cursor's AI chat can explain code, answer questions, and propose edits.

Use this rule throughout the workshop:

> Ask the AI to explain and plan before asking it to edit files.

Good first prompt:

```text
I am new to this project. Inspect the current folder and explain what files are present and what each one does. Do not create or edit any files yet.
```

Good implementation prompt:

```text
Propose the smallest possible plan for adding this feature. Do not edit files until I approve the plan.
```

### Review changes before accepting them

When Cursor proposes code changes:

1. Read the proposed changes.
2. Check which files will change.
3. Ask what each changed file is responsible for.
4. Accept only changes you understand well enough to test.
5. Run the website after each meaningful change.

Do not approve code just because it looks long or professional.

---

# Part 3: Create a GitHub repository

## 1. Create a GitHub account

If you do not already have one, create a free account at [https://github.com](https://github.com).

## 2. Create a new repository

1. Go to [https://github.com/new](https://github.com/new).
2. Set the repository name to:

```text
sports-dashboard
```

3. Choose **Public**.
4. Check **Add a README file**.
5. Click **Create repository**.

Do not add a `.gitignore` or license yet; Cursor can help with those after cloning the repository.

## 3. Clone the repository

On your GitHub repository page:

1. Click the green **Code** button.
2. Copy the HTTPS repository URL.
3. In the Cursor terminal, move to your class-projects folder.
4. Clone your repository:

```bash
git clone PASTE-YOUR-REPOSITORY-URL-HERE
```

For example:

```bash
git clone https://github.com/your-username/sports-dashboard.git
```

5. Open the cloned `sports-dashboard` folder in Cursor.

## 4. Confirm Git is working

Run:

```bash
git status
```

You should see a message showing the current branch, usually called `main`.

---

# Part 4: Give Cursor project instructions

Create a file named:

```text
PROJECT_RULES.md
```

Paste the following:

```md
# Project rules

This is a beginner web-development project for a course.

Before editing files:
1. Explain the current project structure in plain language.
2. Propose a small implementation plan.
3. Wait for approval before making changes.

When editing:
- Prefer simple HTML, CSS, and JavaScript.
- Do not add frameworks, packages, or APIs unless explicitly requested.
- Do not use copyrighted team logos, ESPN branding, photos, or proprietary data.
- Use fictional or clearly labeled sample sports data.
- Keep the site accessible: readable text, clear labels, and keyboard-friendly controls.
- Explain how to test each change locally.

After editing:
- Summarize what changed.
- State how to test it.
- Name one limitation or next improvement.
```

Then ask Cursor:

```text
Read PROJECT_RULES.md. Explain how these rules will guide your work in this repository. Do not edit any files.
```

---

# Part 5: Generate the sports dashboard

## Step 1: Ask for a plan

Before generating the website, ask Cursor:

```text
I want to build a small sports-score dashboard prototype. First, inspect the repository and propose a minimal plan. The site should use only static HTML, CSS, and JavaScript. Do not edit files yet.

The prototype should show fictional sample scores, not real-time scores. I want a clean, modern sports-news dashboard style without copying ESPN branding, layout, text, logos, or assets.
```

Read Cursor's plan. Ask questions if any part is unclear.

Only continue when you can explain, in your own words, what files the plan will create and why.

## Step 2: Use this implementation prompt

Copy and paste this prompt into Cursor after you approve its plan:

```text
Create a responsive static sports-score dashboard website in this repository.

First, briefly restate the files you will create or modify. Then make the changes.

Technical constraints:
- Use only HTML, CSS, and vanilla JavaScript.
- Do not install packages or use a framework.
- Create these files: index.html, styles.css, and script.js.
- Use semantic HTML and clear comments for major sections.
- The website must run by opening index.html locally in a browser.
- Do not use external images, team logos, ESPN branding, copyrighted text, or scraped content.
- Use entirely fictional team names and clearly label every score as “Sample Data.”

Design requirements:
- Create a polished, dark-mode sports dashboard.
- Include a header with the title “Scoreboard” and a short subtitle: “Fictional sample games for a web-design exercise.”
- Include sport filter buttons: All, Basketball, Soccer, Baseball, and Hockey.
- Display at least 8 sample game cards across multiple sports.
- Each card must show: sport, game status, two fictional team names, each score, and game time or final status.
- Include a small “featured game” section at the top.
- Include a small disclaimer stating that the site does not display live scores.
- Make the layout responsive for desktop and mobile screens.
- Add an accessible, labeled button that toggles between dark and light mode.
- Make filter buttons work with JavaScript.
- Use an array of game objects in script.js to generate the game cards rather than hard-coding every card into HTML.

After creating the website:
1. Explain the role of index.html, styles.css, and script.js.
2. Tell me exactly how to test it locally.
3. List two possible next improvements, but do not implement them yet.
```

## Step 3: Test the site locally

After Cursor finishes:

1. Find `index.html` in the file explorer.
2. Open it in a browser.
3. Check the following:
   - Does the page load?
   - Do all sample games appear?
   - Do the sport filters work?
   - Does the light/dark mode button work?
   - Does the layout still work when the browser window is narrow?
   - Does the disclaimer appear?

If something does not work, do not simply say “fix it.”

Instead, describe the observed problem:

```text
When I click the Soccer filter, the visible game cards do not change. Inspect the relevant code, explain the likely cause, and propose the smallest fix. Do not edit files yet.
```

---

# Part 6: Commit your work to GitHub

## 1. Check what changed

In the Cursor terminal, run:

```bash
git status
```

You should see new files such as:

```text
index.html
styles.css
script.js
PROJECT_RULES.md
```

## 2. Add your files

```bash
git add .
```

## 3. Make your first commit

A commit is a labeled snapshot of your work.

```bash
git commit -m "Build initial sports dashboard prototype"
```

## 4. Push to GitHub

```bash
git push origin main
```

Refresh your GitHub repository page. You should see your website files online.

---

# Part 7: Deploy with GitHub Pages

GitHub Pages can publish a static website directly from files in your GitHub repository.

## 1. Enable GitHub Pages

1. Open your `sports-dashboard` repository on GitHub.
2. Click **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Click **Save**.

GitHub will build and publish the site. This can take a few minutes.

## 2. Find your live website

Return to **Settings → Pages**. GitHub will display your published website URL.

It will usually have a form similar to:

```text
https://your-github-username.github.io/sports-dashboard/
```

Open the URL and test the live version.

## 3. Make and publish one improvement

Choose one small improvement, such as:

- Add another fictional sport.
- Improve mobile spacing.
- Add a “Last updated” sample label.
- Add a simple search field for team names.
- Improve color contrast.

Ask Cursor to plan the change first. Then test it locally.

When it works:

```bash
git add .
git commit -m "Improve dashboard usability"
git push origin main
```

Wait briefly, refresh your GitHub Pages URL, and confirm that your improvement is live.

---

# Submission checklist

Submit:

- Your GitHub repository URL
- Your deployed GitHub Pages URL
- A screenshot of your working site
- A short reflection answering:
  1. What did Cursor help you create?
  2. What did you personally test or revise?
  3. Describe one prompt you improved after seeing Cursor’s result.
  4. What is one limitation of your dashboard prototype?
  5. What would be required to turn sample scores into reliable live scores?

---

# Optional challenge

If you finish early, research a sports-data API. Do not add one to your project until you can answer:

1. Does the API allow public use in a student project?
2. Does it require an API key?
3. What are its rate limits?
4. Which sports and leagues does it cover?
5. How will you protect a private API key from being committed to GitHub?
