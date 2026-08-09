# Obsidian Spanish

## Purpose

This Obsidian vault is a personal Spanish-learning system. Lessons are small and
focused (one grammar point or word per lesson — e.g. "Querer," "the personal a,"
"direct object pronouns," "preterite").

## Tech Stack

### Obsidian

- Website: https://obsidian.md/
- Help Docs: https://obsidian.md/help/
- CLI Docs: https://obsidian.md/cli
- Developer Docs: https://docs.obsidian.md/Home

#### Plugin: Simple Anki Sync

- Repo: https://github.com/lukmay/simple-anki-sync
- Community page: https://community.obsidian.md/plugins/simple-anki-sync
- Stats/overview: https://www.obsidianstats.com/plugins/simple-anki-sync

### Anki

Profile: Obsidian Flashcards

- Website: https://apps.ankiweb.net/
- Docs: https://docs.ankiweb.net/

#### Add-on: AnkiConnect

Connection: https://localhost:8765
Addon page: https://ankiweb.net/shared/info/2055492159
Source/docs: https://git.sr.ht/~foosoft/anki-connect (or GitHub mirrors)

## Language conventions

American English and neutral Latin American Spanish rules for lesson/flashcard content
live in `.claude/rules/spanish-language.md` (auto-loads whenever Claude works with files
under `01 Lessons/`, `04 Flashcards/`, `03 Attachments/`, or `02 MOCs/`).

## Folder structure

- Use `./Welcome.md` as the entry point to this vault. Assume that it will be opened first, and make it easy to navigate the rest of the vault from there.
- `00 Templates/` — Lesson Template.md, Flashcard Set Template.md
- `01 Lessons/` — one file per lesson, named `NNN Topic.md` (3-digit prefix). Empty as of 2026-08-09 — no lessons created yet, so the next lesson number is `001`.
- `02 MOCs/` — content map: one file per grammar category, manually linking to lessons
- `03 Attachments/NNN Topic/` — PDF practice sheets for that lesson
- `04 Flashcards/` — one file per lesson, named `NNN Topic.md`, matching the lesson's number exactly
- `CEFR/CEFR-Outline.md` — a leveled (A1-C2) curriculum outline with alphanumeric codes (e.g. `A1.3.2`). The user may reference a code and ask to "add a lesson on X to section Y.Z" — use this file to find what that code covers. Use this outline to name and organize files and folders that contain the course content (lessons, attachments, flashcards, etc...)
- `Qroo/beginner-course/` — raw source material (summaries/exercises) imported from a third-party course ("Qroo Paul's Spanish Master Course", skool.com/qroo). Treat as reference input for drafting lessons, not as vault content itself. **It contains Spain-specific forms (vosotros conjugations, etc.) — strip these out per `.claude/rules/spanish-language.md` when pulling material from it into a lesson.**
- `todo/TODO.md` / `todo/TODONE.md` — internal bug/improvement/suggestion/insight/discovery tracking for this vault's Claude Code tooling. **Not vault content — never link to `todo/` from a lesson, MOC, `Welcome.md`, or any other note.** A hook (`.claude/hooks/guard-todo-link.js`) blocks this, but don't rely on it. See "Todo tracking" below.

## Todo tracking

`todo/TODO.md` holds open items; `todo/TODONE.md` holds completed ones. Each item gets
a permanent, never-reused ID (`TD-NNN`).

- To log a bug, improvement, suggestion, insight, or discovery: use the `add-todo` skill.
- To mark one done (moves it from TODO.md to TODONE.md): use the `complete-todo` skill.
- Log things proactively — if you notice a bug, a rough edge, or a good idea while
  doing unrelated work, add a todo item for it rather than letting it drop, then
  continue with the original task.

## Numbering rule

Lesson number = next unused integer, zero-padded to 3 digits (001, 002, ...).
Never renumber existing lessons. The same number is reused for the lesson
file, its attachment folder, and its flashcard file.

## Creating a new lesson

Use the `new-lesson` skill (`.claude/skills/new-lesson/`) — it walks the full
numbering → template → video search → body → practice-PDF → MOC-linking →
review workflow. Don't hand-roll this from scratch; the skill is the source of
truth for the exact steps.

## Creating flashcards

Use the `add-flashcards` skill (`.claude/skills/add-flashcards/`), only after
the lesson is finalized — never as part of creating the lesson itself.

## Categories currently in use (for `category` frontmatter + MOCs)

- vocabulary
- pronouns
- verbs
- verb tenses
- grammar-structures
  (Add new categories to this list and create a matching MOC file when a
  lesson doesn't fit existing ones — don't invent a category silently
  without updating this file.)
- sentence formulas

## What NOT to do

- Don't renumber or rename existing lesson/flashcard files. A hook
  (`.claude/hooks/guard-lesson-renames.js`) blocks `mv`/`rm` on these paths,
  but don't rely on the hook — avoid it in the first place.
- Don't merge multiple grammar points into a single lesson, even if related.
- Don't fabricate a YouTube link — leave it blank and flag it if no good
  video exists.
- Don't generate flashcards before the lesson content is finalized.

## Token efficiency

- Don't read a whole lesson, flashcard, or `Qroo/` source file to check one
  detail. Use Grep to find the line first, then read only the relevant
  section with an offset/limit.
- Don't re-read a file right after Edit or Write to confirm the change. The
  tool call fails loudly if the edit didn't apply — trust it.
- Use the `new-lesson` and `add-flashcards` skills instead of re-deriving the
  workflow step by step. They already encode the numbering, template, and
  MOC-linking steps.
- Let `spanish-style-reviewer` do the language check instead of manually
  re-reading a finished lesson against `.claude/rules/spanish-language.md`.
- When pulling material from `Qroo/beginner-course/`, grep for the specific
  topic instead of reading an entire source file — those files are long raw
  transcripts/summaries and mostly irrelevant to any single lesson.
- For multi-file checks (e.g. "does every lesson in a MOC exist," "which
  flashcard files are missing"), use one Glob/Grep pass over the folder
  instead of opening files one at a time.
- Keep todo entries and MOC descriptions terse — short pointers, not
  restated lesson content (the lesson file is the source of truth).

## Task planning & progress

- Before starting a task with more than 2-3 steps, break it into a todo list
  with TaskCreate.
- Show the user the full list up front, before doing any of the work.
- Mark each item done as soon as it finishes — don't batch updates to the
  end.
- After each item completes, post a one-line status update naming the item
  and its result.
- Skip this for single-step or trivial requests — a one-line answer doesn't
  need a list.

## Collaboration

- Before acting on an ambiguous request, ask a clarifying question instead
  of guessing. Use AskUserQuestion when there are 2-4 concrete options.
- Don't silently pick a default for a decision the user could reasonably
  disagree with (scope, file to edit, naming, approach). State the choice
  and ask, even if it feels minor.
- When a task could go more than one way, state the options and trade-offs,
  then ask which one to take — don't just pick one and proceed.
- If new information changes a plan already agreed on, say so and confirm
  the change before continuing, rather than adjusting silently.

## Tooling set up for this vault

- **Skills**: `new-lesson` (full lesson creation workflow), `add-flashcards`
  (flashcard generation for a finalized lesson), `add-todo` / `complete-todo`
  (see "Todo tracking" above).
- **Agent**: `spanish-style-reviewer` — read-only check of lesson/flashcard
  content against `.claude/rules/spanish-language.md`. Both skills above
  dispatch it automatically before reporting done.
- **Rule**: `.claude/rules/spanish-language.md` — path-scoped, auto-loads
  when Claude touches `01 Lessons/`, `04 Flashcards/`, `03 Attachments/`, or
  `02 MOCs/`.
- **Hooks**: `guard-lesson-renames.js` (blocks destructive `mv`/`rm` on
  lesson/flashcard/attachment paths), `guard-lesson-numbering.js` (blocks
  writing a lesson/flashcard file whose number collides with an existing,
  differently-named file), and `guard-todo-link.js` (blocks linking `todo/`
  from vault content). All wired in `.claude/settings.json`.
- **PDF generation**: `md-to-pdf` (npm, installed via `package.json` in the
  vault root — run `npm install` once after cloning). No system PDF engine
  or sudo install required; it bundles its own headless Chromium.
