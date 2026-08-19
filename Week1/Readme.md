# Part 6: Add project instructions in Cursor

In this course, each week may have its own folder and instructions.

For Week 1, the course repository uses this structure:

```text
GenAI/
└── Week1/
    └── Readme.md
```

You will add a file named `PROJECT_RULES.md` inside the `Week1` folder:

```text
GenAI/
└── Week1/
    ├── Readme.md
    └── PROJECT_RULES.md
```

This file gives Cursor clear instructions about how it should help you during this activity.

---

## 1. Open the course repository in Cursor

You must first have a local copy of the course repository on your computer.

1. Open the course repository in GitHub:

   ```text
   https://github.com/Dllamasm4412/GenAI
   ```

2. Click the green **Code** button.
3. Copy the repository’s HTTPS URL.
4. Open Cursor.
5. Open the integrated terminal:

   - **macOS:** `Control + backtick`
   - **Windows/Linux:** `Control + backtick`

6. Move to the folder where you keep course projects. For example:

   ```bash
   cd ~/Documents
   ```

7. Clone the repository:

   ```bash
   git clone https://github.com/Dllamasm4412/GenAI.git
   ```

8. Open the repository in Cursor:

   ```bash
   cd GenAI
   ```

   ```bash
   cursor .
   ```

If the `cursor .` command does not work:

1. In Cursor, select **File → Open Folder**.
2. Find the `GenAI` folder you just cloned.
3. Select **Open**.

---

## 2. Open the Week 1 folder

In Cursor’s file explorer, you should see the course repository files.

1. Expand the `Week1` folder.
2. Confirm that you can see:

   ```text
   Readme.md
   ```

3. Click `Readme.md`.
4. Read the assignment instructions before using Cursor’s AI tools.

> Important: Read the assignment before generating code. Cursor can help you implement an idea, but it cannot decide what you should learn or submit.

---

## 3. Create the project-rules file

In Cursor’s file explorer:

1. Right-click the `Week1` folder.
2. Select **New File**.
3. Name the new file exactly:

   ```text
   PROJECT_RULES.md
   ```

4. Press `Enter`.
5. Paste the following content into the file:

```md
# Week 1 project rules

This is a beginner web-development project for a Generative AI course.

Before editing files:
1. Read Readme.md first.
2. Explain the current project structure in plain language.
3. Propose the smallest implementation plan.
4. Wait for my approval before editing files.

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

6. Save the file:

   - **macOS:** `Command + S`
   - **Windows/Linux:** `Control + S`

---

## 4. Ask Cursor to read the assignment and rules

Open Cursor’s AI Chat:

- **macOS:** `Command + L`
- **Windows/Linux:** `Control + L`

Use this prompt:

```text
Read Week1/Readme.md and Week1/PROJECT_RULES.md.

Explain:
1. What I am being asked to create.
2. Which files are currently in the Week1 folder.
3. What rules you must follow before editing any files.

Do not create, edit, delete, or run anything yet.
```

Read Cursor’s answer carefully.

Before moving on, you should be able to explain in your own words:

- What the Week 1 assignment asks you to build
- What files are currently in the project
- Why Cursor must propose a plan before editing files

---

## 5. Ask Cursor for a plan

After you understand the assignment, use this prompt:

```text
Based on Week1/Readme.md and Week1/PROJECT_RULES.md, propose the smallest plan for creating my website.

My website topic is: [WRITE YOUR TOPIC].

My intended audience is: [WRITE YOUR AUDIENCE].

My website should include:
1. [FEATURE ONE]
2. [FEATURE TWO]
3. [FEATURE THREE]

Use only HTML, CSS, and vanilla JavaScript.

Do not edit files yet. First tell me:
- Which files you would create or modify
- What each file would be responsible for
- How I can test the website locally
```

Do not approve the plan automatically.

Read the plan and ask questions if needed. For example:

```text
Explain why I need each file in this plan using beginner-friendly language. Do not edit files yet.
```

---

## 6. Keep your changes inside Week1

For this assignment, create your website files inside the `Week1` folder unless your instructor gives different instructions.

After Cursor creates the site, the folder may look like this:

```text
GenAI/
└── Week1/
    ├── Readme.md
    ├── PROJECT_RULES.md
    ├── index.html
    ├── styles.css
    └── script.js
```

The three website files have different responsibilities:

- `index.html` contains the structure and written content of the webpage.
- `styles.css` controls colors, spacing, typography, and responsive layout.
- `script.js` contains interactive behavior, such as filters, buttons, forms, or dark-mode toggles.

---

## 7. Save the rules file to GitHub

After creating `PROJECT_RULES.md`, open the terminal in Cursor and run:

```bash
git status
```

You should see that `Week1/PROJECT_RULES.md` is a new file.

Add it to Git:

```bash
git add Week1/PROJECT_RULES.md
```

Create a commit:

```bash
git commit -m "Add Week 1 Cursor project rules"
```

Push it to GitHub:

```bash
git push origin main
```

Refresh the course repository page in GitHub and confirm that the file appears inside the `Week1` folder.
