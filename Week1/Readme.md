# Build and Publish a Website with Cursor

## Overview

In this tutorial, you will use Cursor, an AI-assisted code editor, to design, build, test, version-control, and publish a small website.

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

By the end of the workshop, you will have:

- Installed Cursor and created a personal account
- Connected Cursor to GitHub
- Created a GitHub repository
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

You are responsible for the code, content, design choices, and claims in your project—even if Cursor helps generate part of it.

---

# Part 1: Install Cursor and create an account

## 1. Download Cursor

1. Go to [https://cursor.com](https://cursor.com).
2. Select **Download**.
3. Download the correct version for your computer:
   - macOS
   - Windows
   - Linux
4. Install Cursor.
5. Open Cursor after the installation finishes.

## 2. Create a personal Cursor account

Each student must create and use a **personal Cursor account**.

1. Open Cursor.
2. Select **Sign In** or **Create Account**.
3. Sign up with an email address you can access throughout the semester.
4. Verify your email address if prompted.
5. Review the available account plans.

Cursor offers both free and paid plans.

- The free plan is enough for this workshop.
- Paid plans may provide higher AI-usage limits.
- A paid plan is optional and is not required for this class activity.
- Do not feel pressured to provide payment information.
- You are responsible for monitoring any subscription or usage charges connected to your account.

Before choosing a plan, review current details at:

[https://cursor.com/pricing](https://cursor.com/pricing)

## 3. Connect Cursor to GitHub

Connecting Cursor to GitHub can make it easier to work with repositories and use Cursor’s GitHub-related tools.

1. Go to the Cursor dashboard or account settings.
2. Open **Integrations**.
3. Find **GitHub**.
4. Select **Connect**.
5. Sign in to your GitHub account when prompted.
6. Review the permissions request carefully.
7. Choose whether Cursor can access:
   - All repositories, or
   - Only selected repositories.

For this class, selecting only the repository or repositories you use for coursework is a reasonable default.

You can disconnect GitHub later through the Cursor integrations settings.

> Important: Connecting Cursor to GitHub is not the same as publishing code. You will still use Git commits and `git push` to save your project to your repository.

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

# Part 3: Create a project folder

## 1. Create a workspace

Create a folder where you will keep course projects.

In a terminal, run:

```bash
mkdir ai-coding-projects
```

```bash
cd ai-coding-projects
```

## 2. Open a project folder in Cursor

1. Open Cursor.
2. Select **File → Open Folder**.
3. Open your `ai-coding-projects` folder.
4. Later, you will open the specific website repository inside this folder.

> Keep your work in an organized project folder. Avoid creating files in random desktop folders or in a location you cannot find later.

---

# Part 4: Essential Cursor features

Cursor contains many features. This workshop focuses on the features most useful for beginning an AI-assisted web project.

## File Explorer

The file explorer is usually on the left side of Cursor.

Use it to:

- View all files in your project
- Create new files
- Open and inspect code
- Notice which files changed after an AI request

Before accepting any generated code, check which files Cursor wants to create or edit.

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

You can give Cursor better context by mentioning specific files, selecting code, or explaining the behavior you observe.

For example:

```text
Read index.html, styles.css, and script.js. Explain how these files work together to create the website. Do not edit files.
```

## Agent or multi-file workflow

Use Cursor’s agent or multi-file workflow when you want to create a small project from scratch or make a change that will affect several files.

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

A suggestion can be useful, but it can also introduce code you do not need.

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

AI tools work better when the task is small, specific, and clearly defined.

Avoid vague prompts such as:

```text
Make me a cool website.
```

Use specific prompts such as:

```text
Create a static website for students to organize study resources. Use only HTML, CSS, and JavaScript. Include a title, category filters, six fictional sample resources, a responsive layout, and a dark/light mode toggle. First propose a plan and do not edit files yet.
```

---

# Part 5: Create a GitHub repository

## 1. Create or sign in to GitHub

Go to [https://github.com](https://github.com).

Create a free personal GitHub account if you do not already have one.

Use an account you will be able to access throughout the semester.

## 2. Create a repository

1. Go to [https://github.com/new](https://github.com/new).
2. Choose a repository name.

For the sports example, use:

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

3. Choose **Public**, unless your instructor tells you otherwise.
4. Check **Add a README file**.
5. Click **Create repository**.

## 3. Clone your repository

On your new GitHub repository page:

1. Click the green **Code** button.
2. Copy the HTTPS repository URL.
3. Open Cursor’s terminal.
4. Navigate to your class-projects folder:

```bash
cd path/to/ai-coding-projects
```

5. Clone the repository:

```bash
git clone PASTE-YOUR-REPOSITORY-URL-HERE
```

For example:

```bash
git clone https://github.com/your-username/sports-dashboard.git
```

6. Open the cloned project folder in Cursor.

## 4. Confirm that Git works

In the Cursor terminal, run:

```bash
git status
```

You should see a message identifying your current branch, usually named `main`.

---

# Part 6: Add project rules for Cursor

Create a file in the project root called:

```text
PROJECT_RULES.md
```

Copy this content into the file:

```md
# Project rules

This is a beginner web-development project.

Before editing files:
1. Inspect the project and explain the current file structure in plain language.
2. Propose the smallest implementation plan.
3. Wait for my approval before making changes.

When editing:
- Use simple HTML, CSS, and vanilla JavaScript unless I explicitly approve another tool.
- Do not install packages or frameworks without asking first.
- Do not delete files or use destructive terminal commands.
- Keep changes focused on the requested feature.
- Use semantic HTML and accessible labels.
- Explain how to test each change locally.

Content and design:
- Use original, fictional, public-domain, or properly licensed content.
- Do not copy another company’s logos, branding, text, images, layouts, or proprietary data.
- Clearly label fictional examples or sample data.

After editing:
1. Summarize what changed.
2. Explain how to test it.
3. Name one limitation or possible next improvement.
```

Ask Cursor:

```text
Read PROJECT_RULES.md. Explain how these rules will guide your work in this repository. Do not edit files.
```

---

# Part 7: Choose your website concept

The sports-score dashboard is an example. You are welcome to create another small website.

Before generating code, write a short project brief that answers:

1. Who is the audience?
2. What is the purpose of the website?
3. What should a visitor be able to see or do?
4. What are the 2–3 most important features?
5. What data, text, images, or visual assets will you use?
6. Which parts of the content are original, fictional, public-domain, or properly licensed?

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

The website’s purpose is: [WRITE ONE OR TWO SENTENCES].

It should include:
1. [FEATURE ONE]
2. [FEATURE TWO]
3. [FEATURE THREE]

I want to use only HTML, CSS, and vanilla JavaScript.

Inspect the repository and propose the smallest implementation plan. Tell me which files you would create or modify, what each file will do, and how I can test the project. Do not edit files yet.
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
I want to build a small sports-score dashboard prototype. Inspect the repository and propose a minimal plan. Do not edit files yet.

The site should use only static HTML, CSS, and JavaScript.

The prototype should show fictional sample scores, not live scores. I want a clean, modern sports-news dashboard style without copying ESPN branding, layouts, text, logos, images, or assets.
```

Read the plan before giving permission to continue.

## Step 2: Generate the initial website

After reviewing and approving the plan, copy this prompt into Cursor:

```text
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

## 1. Check your changed files

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

## 2. Add files to Git

```bash
git add .
```

## 3. Create your first commit

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
- [ ] I created a GitHub repository.
- [ ] I used Cursor to plan before generating or editing code.
- [ ] I reviewed Cursor’s proposed changes.
- [ ] I tested my website locally.
- [ ] I made at least one Git commit.
- [ ] I pushed my work to GitHub.
- [ ] I deployed the website with GitHub Pages.
- [ ] I tested the live URL.
- [ ] My website uses original, fictional, public-domain, or properly licensed content.
- [ ] My reflection explains both Cursor’s contribution and my own verification work.
