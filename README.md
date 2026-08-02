# Artificial Intelligence Course Notebook

Public GitHub Pages notebook for an Artificial Intelligence course.

The first version is a bilingual presentation in a dark neon futuristic style, guided by `template.pptx`. English is the primary language and Spanish is available from the language switch in the page header.

## Topics

- Introduction to Artificial Intelligence
- Search
- Knowledge
- Uncertainty
- Optimization
- Learning
- Neural Networks
- Language
- Generative Artificial Intelligence
- Large Language Models (LLMs)
- Vibe Coding
- Repository workflow for class notes

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static server.

## GitHub Pages

This repository is intended to publish from the `main` branch root:

```bash
gh repo create IA --public --source=. --push
gh api repos/:owner/IA/pages -X POST -f source[branch]=main -f source[path]=/
```

If Pages already exists, update the source instead:

```bash
gh api repos/:owner/IA/pages -X PUT -f source[branch]=main -f source[path]=/
```

## Class Branch Workflow

Keep `main` stable and deployable. For each new class or subtopic, create a topic branch:

```bash
git switch -c class-02-search
```

Add or edit pages, slides, exercises, or notes. Commit the work:

```bash
git add .
git commit -m "Add class 02 search notes"
git push -u origin class-02-search
```

Open a pull request, review the material, and merge into `main` when it is ready to publish.

## Suggested Structure For Future Classes

- `index.html`, `styles.css`, `script.js`: published presentation app.
- `assets/template/`: visual assets extracted from the PPTX template.
- `classes/`: optional future folder for deeper class notes.
- `labs/`: optional future folder for exercises and notebooks.
