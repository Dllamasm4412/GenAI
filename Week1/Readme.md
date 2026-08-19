# Build and Publish a Website with Cursor

## Overview

In this workshop, you will use Cursor, an AI-assisted code editor, to design, build, test, version-control, and publish a small website.

You may either:

1. Follow the **sports-score dashboard** example in this guide, or
2. Create a different website based on an interest, hobby, community, research topic, creative project, or portfolio idea.

Possible alternatives include:

- A personal portfolio website
- A music or album-discovery interface using fictional data
- A recipe organizer
- A study-resource directory
- A fictional campus-club site
- A local event guide
- A movie watchlist
- A generative-art gallery
- A research-topic explainer
- A website for a creative project

By the end of the tutorial, you will have:

- Installed Cursor and created a personal account
- Connected Cursor to GitHub
- Accessed the course repository
- Learned essential Cursor features
- Used Cursor to create and revise a website
- Tested the website locally
- Committed your code with Git
- Published your website with GitHub Pages

---

# Learning goals

This activity is not about asking an AI tool to make everything for you. It is about learning a responsible AI-assisted development workflow:

1. Define a clear project goal.
2. Ask the AI to inspect and plan before editing.
3. Review proposed changes.
4. Make small, understandable revisions.
5. Test your website yourself.
6. Save meaningful checkpoints with Git commits.
7. Publish your work online.

You are responsible for the code, content, design choices, and claims in your project, even if Cursor helps generate part of it.

---

# Part 1: Install Cursor and create an account

## 1. Download Cursor

1. Go to [https://cursor.com](https://cursor.com).
2. Select **Download**.
3. Download the version for your computer:
   - macOS
   - Windows
   - Linux
4. Install Cursor.
5. Open Cursor after installation.

## 2. Create a personal Cursor account

Each student must create and use a personal Cursor account.

1. Open Cursor.
2. Select **Sign In** or **Create Account**.
3. Register with an email address you can access throughout the semester.
4. Verify your email address if prompted.
5. Review the available account plans.

Cursor offers free and paid plans.

- The free plan is sufficient for this tutorial.
- Paid plans may provide higher AI-usage limits.
- A paid plan is optional and is not required for this class activity.
- Do not feel pressured to provide payment information.
- You are responsible for monitoring any subscription or usage charges connected to your account.

Review current plan information at:

[https://cursor.com/pricing](https://cursor.com/pricing)

## 3. Connect Cursor to GitHub

Connecting Cursor to GitHub can make it easier to work with repositories and use GitHub-related Cursor features.

1. Open Cursor’s dashboard or account settings.
2. Select **Integrations**.
3. Find **GitHub**.
4. Select **Connect**.
5. Sign in to GitHub when prompted.
6. Read the requested permissions carefully.
7. Choose repository access:
   - **Only select repositories** is recommended for this course.
   - Select the repository or repositories required for your coursework.
8. Complete the authorization in GitHub.

You can disconnect the integration later in Cursor’s integrations settings.

> Important: Connecting Cursor to GitHub does not automatically save or publish your code. You will still use Git commits and `git push` to save your project to GitHub.

---

# Part 2: Install and configure Git

## 1. Check whether Git is installed

Git records the history of changes in a project. GitHub stores Git repositories online.

Open a terminal and run:

```bash
git --version
```

If you see a version number, Git is installed.

If Git is not installed:

- **macOS:** Install Xcode Command Line Tools when prompted, or install Git from [https://git-scm.com](https://git-scm.com).
- **Windows:** Install Git from [https://git-scm.com](https://git-scm.com).
- **Linux:** Install Git through your distribution’s package manager.

## 2. Configure your Git identity

Run these commands in a terminal. Use your own name and the email address connected to GitHub.

```bash
git config --global user.name "Your Name"
```

```bash
git config --global user.email "your-email@example.com"
```

---

# Part 3: Access the course repository

The class repository is:

```text
https://github.com/Dllamasm4412/GenAI
```

The Week 1 materials are located here:

```text
GenAI/
└── Week1/
    └── Readme.md
```

## 1. Create a local course-projects folder

Create a folder where you will keep course repositories.

```bash
mkdir ~/Documents/ai-coding-projects
```

```bash
cd ~/Documents/ai-coding-projects
```

If you prefer a different location, that is fine. Keep it organized and make sure you can find it later.

## 2. Clone the course repository

1. Open the course repository in GitHub:

   ```text
   https://github.com/Dllamasm4412/GenAI
   ```

2. Click the green **Code** button.
3. Make sure **HTTPS** is selected.
4. Copy the repository URL.
5. In Cursor, open the integrated terminal:
   - **macOS:** `Control + backtick`
   - **Windows/Linux:** `Control + backtick`
6. Confirm you are inside your course-projects folder:

```bash
pwd
```

7. Clone the repository:

```bash
git clone https://github.com/Dllamasm4412/GenAI.git
```

8. Move into the repository:

```bash
cd GenAI
```

## 3. Open the repository in Cursor

Use one of these options.

### Option A: Open from the terminal

If the `cursor` command is configured on your computer, run:

```bash
cursor .
```

### Option B: Open from Cursor

1. Open Cursor.
2. Select **File → Open Folder**.
3. Navigate to:

```text
Documents/ai-coding-projects/GenAI
```

4. Select the `GenAI` folder.
5. Select **Open**.

In Cursor’s left file explorer, you should see:

```text
GenAI/
└── Week1/
    └── Readme.md
```

## 4. Read the Week 1 assignment first

1. Expand the `Week1` folder in Cursor’s file explorer.
2. Click `Readme.md`.
3. Read the assignment instructions before asking Cursor to generate code.

> Cursor can help you plan, write, explain, and debug code. It cannot decide what you are supposed to learn or submit. Read the assignment first.

---

# Part 4: Essential Cursor features

Cursor contains many features. This tutorial focuses on the features most useful for beginning an AI-assisted web project.

## File Explorer

The file explorer is usually on the left side of Cursor.

Use it to:

- View all files in your project
- Create new files
- Open and inspect code
- Notice which files changed after an AI request

Before accepting generated code, check which files Cursor wants to create or edit.

## Integrated Terminal

The integrated terminal allows you to run commands without leaving Cursor.

To open it, use:

- **macOS:** `Control + backtick`
- **Windows/Linux:** `Control + backtick`

You will use the terminal for commands such as:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Describe your change"
```

```bash
git push origin main
```

## AI Chat

Use AI Chat when you want to ask questions, understand a file, ask for a plan, or discuss a problem before editing code.

A common shortcut is:

- **macOS:** `Command + L`
- **Windows/Linux:** `Control + L`

Example prompt:

```text
Inspect this project and explain what each file does in plain language. Do not edit any files yet.
```

Give Cursor useful context by naming files, selecting code, or describing the behavior you observe.

For example:

```text
Read Week1/Readme.md. Explain what I need to create for this assignment. Do not edit files.
```

## Agent or multi-file workflow

Use Cursor’s agent or multi-file workflow when you want to create a small project from scratch or make a change affecting several files.

This is useful for requests such as:

- Creating an initial HTML, CSS, and JavaScript website
- Adding a feature that changes multiple files
- Refactoring a small project

Before asking Cursor to make a multi-file change, always ask for a plan first.

Example:

```text
I want to add a light and dark mode toggle to this website. Inspect the current files and propose the smallest plan. Do not edit anything yet.
```

Read the plan. Ask questions. Approve it only when you understand what Cursor will change.

## Inline editing

Use inline editing when you want to make a small, targeted change to selected code.

1. Highlight the code you want to change.
2. Use:
   - **macOS:** `Command + K`
   - **Windows/Linux:** `Control + K`
3. Describe the specific change.

Example:

```text
Make this button more accessible by adding a clear aria-label.
```

Inline editing is best for focused modifications. Avoid using it for large project-wide changes.

## Code completion

Cursor may show a suggested continuation while you type.

- Press `Tab` to accept a suggestion.
- Do not accept a suggestion automatically.
- Read it first.
- Make sure you understand what it adds.

## Reviewing changes

Whenever Cursor proposes changes:

1. Look at every file it wants to edit.
2. Review the difference between the old and new code.
3. Ask Cursor to explain anything unclear.
4. Accept only the files or changes you are prepared to test.
5. Run the website after each meaningful change.

Useful prompt:

```text
Before I accept these changes, explain what changed in each file and how I can test whether the change works.
```

## Best practice: plan before implementation

AI tools work better when a task is small, specific, and clearly defined.

Avoid vague prompts:

```text
Make me a cool website.
```

Use specific prompts:

```text
Create a static website for students to organize study resources. Use only HTML, CSS, and JavaScript. Include a title, category filters, six fictional sample resources, a responsive layout, and a dark/light mode toggle. First propose a plan and do not edit files yet.
```

---

# Part 5: Create your own repository

You will create your own GitHub repository for your website project.

Do not directly edit the main course repository unless your instructor specifically tells you to do so.

## 1. Create a repository on GitHub

1. Go to [https://github.com/new](https://github.com/new).
2. Choose a repository name.

For the sports example:

```text
sports-dashboard
```

For another project, choose a clear name such as:

```text
music-discovery-site
```

```text
campus-events-guide
```

```text
my-portfolio
```

3. Choose **Public**, unless your instructor says otherwise.
4. Check **Add a README file**.
5. Click **Create repository**.

## 2. Clone your project repository

On your new GitHub repository page:

1. Click the green **Code** button.
2. Copy the HTTPS repository URL.
3. Open Cursor’s integrated terminal.
4. Navigate to your local course-projects folder:

```bash
cd ~/Documents/ai-coding-projects
```

5. Clone your new repository:

```bash
git clone PASTE-YOUR-REPOSITORY-URL-HERE
```

For example:

```bash
git clone https://github.com/your-username/sports-dashboard.git
```

6. Open your newly cloned website folder in Cursor:

```bash
cd sports-dashboard
```

```bash
cursor .
```

If `cursor .` does not work:

1. In Cursor, select **File → Open Folder**.
2. Find your website project folder.
3. Select **Open**.

---

# Part 6: Add project instructions in Cursor

You will create a file named `PROJECT_RULES.md` in your own website repository.

This file tells Cursor how to support you during the assignment.

After creating it, your repository will look similar to this:

```text
sports-dashboard/
├── README.md
└── PROJECT_RULES.md
```

Later, you will add your website files:

```text
sports-dashboard/
├── README.md
├── PROJECT_RULES.md
├── index.html
├── styles.css
└── script.js
```

## 1. Confirm that you opened your own repository

Look at the top of the Cursor window and the file explorer.

You should see the name of **your own project repository**, such as:

```text
sports-dashboard
```

You should not be editing the `GenAI` course repository for this step.

In the terminal, run:

```bash
git remote -v
```

You should see the URL of your personal GitHub repository.

Then run:

```bash
git status
```

You should see that you are on the `main` branch and that the working tree is clean.

## 2. Create `PROJECT_RULES.md`

In Cursor’s file explorer:

1. Find the top-level project folder. This is the folder named after your repository.
2. Right-click the project folder.
3. Select **New File**.
4. Name the file exactly:

```text
PROJECT_RULES.md
```

5. Press `Enter`.
6. A new blank editor tab should open.
7. Paste the following into the file:

```md
# Project rules

This is a beginner web-development project for a Generative AI course.

Before editing files:
1. Inspect the current project and explain the file structure in plain language.
2. Propose the smallest implementation plan.
3. Wait for my approval before editing files.

When editing:
- Use simple HTML, CSS, and vanilla JavaScript unless I explicitly approve another tool.
- Do not install packages, frameworks, or browser extensions without asking first.
- Do not delete files or use destructive terminal commands.
- Keep each change focused on one requested feature.
- Use semantic HTML and accessible labels.
- Use original, fictional, public-domain, or properly licensed content.
- Do not copy another organization’s logos, branding, text, images, layouts, or proprietary data.
- Explain how to test each change locally.

After editing:
1. Summarize what changed.
2. Explain how to test it.
3. Name one limitation or possible next improvement.
```

8. Save the file:
   - **macOS:** `Command + S`
   - **Windows/Linux:** `Control + S`

## 3. Confirm that Cursor can see the file

In the file explorer, confirm that you can see:

```text
README.md
PROJECT_RULES.md
```

Click `PROJECT_RULES.md` and make sure the rules appear in the editor.

## 4. Ask Cursor to read the rules

Open Cursor AI Chat:

- **macOS:** `Command + L`
- **Windows/Linux:** `Control + L`

Paste this prompt:

```text
Read README.md and PROJECT_RULES.md in this repository.

Explain:
1. Which files are currently in this project.
2. What rules you must follow before editing files.
3. What you would need from me before proposing a website plan.

Do not create, edit, delete, or run anything yet.
```

Read Cursor’s response.

Before moving on, make sure you understand:

- Why `README.md` is useful
- Why `PROJECT_RULES.md` exists
- Why Cursor should plan before writing website files

## 5. Commit the project-rules file

Open the integrated terminal in Cursor.

First, check the new file:

```bash
git status
```

You should see:

```text
PROJECT_RULES.md
```

Add the file:

```bash
git add PROJECT_RULES.md
```

Create a commit:

```bash
git commit -m "Add Cursor project rules"
```

Push the commit to GitHub:

```bash
git push origin main
```

Refresh your GitHub repository page in a browser.

Confirm that `PROJECT_RULES.md` appears in the repository.

> If `git push` asks you to sign in, follow the GitHub sign-in steps shown in the terminal or browser. Do not share your GitHub password or personal access token with anyone.

---

# Part 7: Choose your website concept

The sports-score dashboard is an example. You may create another small website.

Before generating code, write a short project brief that answers:

1. Who is the audience?
2. What is the purpose of the website?
3. What should a visitor be able to see or do?
4. What are the 2–3 most important features?
5. What text, images, data, or visual assets will you use?
6. Which parts are original, fictional, public-domain, or properly licensed?

## Project constraints

For this first project:

- Build a static website using HTML, CSS, and JavaScript.
- Do not use a framework unless your instructor approves it.
- Do not copy the identity of an existing website or company.
- Do not use copyrighted logos, branding, articles, images, or proprietary data without permission.
- Use original content, fictional sample content, public-domain materials, or properly licensed assets.
- Your website must work on desktop and mobile screen sizes.
- Your website must include at least one interactive JavaScript feature.
- Your website must include clear, accessible labels and readable text.

---

# Part 8: Ask Cursor to plan your site

Before generating your website, use a planning prompt.

```text
I want to build a small static website about [YOUR TOPIC] for [YOUR AUDIENCE].

The website’s purpose is:

[WRITE ONE OR TWO SENTENCES.]

It should include:
1. [FEATURE ONE]
2. [FEATURE TWO]
3. [FEATURE THREE]

I want to use only HTML, CSS, and vanilla JavaScript.

Read PROJECT_RULES.md before responding.

Inspect the repository and propose the smallest implementation plan. Tell me:
- Which files you would create or modify
- What each file would be responsible for
- How I can test the project locally

Do not edit files yet.
```

Read Cursor’s response before continuing.

You should be able to explain:

- Which files will be created
- What HTML is responsible for
- What CSS is responsible for
- What JavaScript is responsible for
- How you will test the website

---

# Part 9: Example project — sports-score dashboard

This example creates a fictional sports-score dashboard. It is inspired by the general idea of a sports-score website, but it must not copy ESPN branding, layout, logos, text, data, or assets.

## Step 1: Ask Cursor for a plan

```text
Read PROJECT_RULES.md before responding.

I want to build a small sports-score dashboard prototype. Inspect the repository and propose a minimal plan. Do not edit files yet.

The site should use only static HTML, CSS, and JavaScript.

The prototype should show fictional sample scores, not live scores. I want a clean, modern sports-news dashboard style without copying ESPN branding, layouts, text, logos, images, or assets.
```

Read the plan before giving permission to continue.

## Step 2: Generate the initial website

After reviewing and approving the plan, copy this prompt into Cursor:

```text
Read PROJECT_RULES.md before responding.

Create a responsive static sports-score dashboard website in this repository.

First, briefly restate the files you will create or modify. Then make the changes.

Technical constraints:
- Use only HTML, CSS, and vanilla JavaScript.
- Do not install packages or use a framework.
- Create these files: index.html, styles.css, and script.js.
- Use semantic HTML and clear comments for major sections.
- The website must run by opening index.html locally in a browser.
- Do not use external images, team logos, ESPN branding, copyrighted text, scraped content, or real-time sports data.
- Use entirely fictional team names.
- Clearly label all games as “Sample Data.”

Design requirements:
- Create a polished, dark-mode sports dashboard.
- Include a header with the title “Scoreboard.”
- Include this subtitle: “Fictional sample games for a web-design exercise.”
- Include sport filter buttons: All, Basketball, Soccer, Baseball, and Hockey.
- Display at least 8 sample game cards across multiple sports.
- Each game card must show:
  - Sport
  - Game status
  - Two fictional team names
  - Each team’s score
  - Game time or final status
- Include a featured-game section at the top.
- Include a visible disclaimer that the website does not display live scores.
- Make the layout responsive for desktop and mobile screens.
- Add an accessible, labeled button that toggles between dark and light mode.
- Make the sport-filter buttons work with JavaScript.
- Store game information in an array of game objects in script.js.
- Use JavaScript to generate game cards instead of hard-coding every game card in index.html.

After creating the website:
1. Explain the role of index.html, styles.css, and script.js.
2. Tell me exactly how to test it locally.
3. List two possible next improvements, but do not implement them yet.
```

## Step 3: Test your website

Open `index.html` in a browser.

Test the following:

- Does the page load?
- Do the fictional game cards appear?
- Do the sport filters work?
- Does the dark/light mode button work?
- Does the layout work on a narrow browser window?
- Does the sample-data disclaimer appear?
- Are buttons and labels easy to understand?

If something does not work, describe the specific behavior you observed.

Good debugging prompt:

```text
When I click the Soccer filter, the game cards do not update. Inspect the relevant code, explain the likely cause, and propose the smallest possible fix. Do not edit files yet.
```

---

# Part 10: Prompt template for your own website

Use this template if you choose a topic other than the sports dashboard:

```text
Read PROJECT_RULES.md before responding.

I want to create a responsive static website about [YOUR TOPIC] for [YOUR AUDIENCE].

The purpose of the site is:

[DESCRIBE THE PURPOSE IN ONE OR TWO SENTENCES.]

The site must include:
1. [FEATURE ONE]
2. [FEATURE TWO]
3. [FEATURE THREE]

Technical constraints:
- Use only HTML, CSS, and vanilla JavaScript.
- Do not install packages or use a framework unless I explicitly approve it.
- Create or modify index.html, styles.css, and script.js as needed.
- Use semantic HTML and accessible labels.
- The site must run locally by opening index.html in a browser.
- Use only original, fictional, public-domain, or properly licensed content.
- Do not copy another organization’s branding, logos, text, images, or proprietary data.

Design direction:
- The visual style should be: [DESCRIBE THE COLOR, MOOD, OR STYLE].
- The site should work on desktop and mobile screens.
- Include a visible title and short description.
- Include at least one interactive JavaScript feature.

First, inspect the project and propose a minimal plan. Do not edit files until I approve the plan.
```

---

# Part 11: Commit your work with Git

## 1. Check changed files

In Cursor’s terminal, run:

```bash
git status
```

You should see the website files you created or changed.

For example:

```text
index.html
styles.css
script.js
PROJECT_RULES.md
```

## 2. Add website files to Git

```bash
git add .
```

## 3. Create a commit

A commit is a saved checkpoint in your project history.

```bash
git commit -m "Build initial website prototype"
```

Write commit messages that describe what changed.

Examples:

```bash
git commit -m "Add responsive navigation"
```

```bash
git commit -m "Fix category filter behavior"
```

```bash
git commit -m "Improve mobile layout"
```

## 4. Push your work to GitHub

```bash
git push origin main
```

Refresh your repository page on GitHub. Your files should now appear online.

---

# Part 12: Deploy your website with GitHub Pages

GitHub Pages can publish static HTML, CSS, and JavaScript files from your GitHub repository.

## 1. Enable GitHub Pages

1. Open your GitHub repository.
2. Click **Settings**.
3. In the left sidebar, select **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Click **Save**.

GitHub will publish your website. This can take a few minutes.

## 2. Find the live website URL

Return to **Settings → Pages**.

GitHub will display a URL for your published website. It usually looks like:

```text
https://your-github-username.github.io/your-repository-name/
```

Open that URL and test the live website.

## 3. Publish one improvement

Choose one small improvement after your first deployment.

Ideas:

- Improve spacing on mobile
- Add another category or section
- Add a search field
- Improve color contrast
- Add a new interactive feature
- Improve instructions for visitors
- Add original visual assets
- Add an accessibility improvement

Ask Cursor to plan the improvement before making changes.

When the improvement works locally, publish it:

```bash
git add .
```

```bash
git commit -m "Improve website usability"
```

```bash
git push origin main
```

Wait a few minutes, refresh the GitHub Pages URL, and confirm that the update appears online.

---

# Part 13: Submit your work

Submit:

- Your GitHub repository URL
- Your deployed GitHub Pages URL
- One screenshot of the working website
- A short reflection answering:

1. What did Cursor help you create?
2. What did you personally test or revise?
3. What prompt did you improve after seeing Cursor’s first result?
4. What is one limitation of your current website?
5. What would you build next if you had more time?

---

# Final checklist

Before submitting, confirm:

- [ ] I created my own Cursor account.
- [ ] I selected a free or paid plan intentionally.
- [ ] I connected Cursor to GitHub or understand how GitHub works with my project.
- [ ] I accessed and read the Week 1 course instructions.
- [ ] I created my own GitHub repository for my website.
- [ ] I created and committed `PROJECT_RULES.md`.
- [ ] I used Cursor to plan before generating or editing code.
- [ ] I reviewed Cursor’s proposed changes.
- [ ] I tested my website locally.
- [ ] I made at least one Git commit.
- [ ] I pushed my work to GitHub.
- [ ] I deployed the website with GitHub Pages.
- [ ] I tested the live URL.
- [ ] My website uses original, fictional, public-domain, or properly licensed content.
- [ ] My reflection explains both Cursor’s contribution and my own verification work.
