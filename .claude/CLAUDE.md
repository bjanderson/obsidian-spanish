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

### Anki

Anki setup details (profile name, AnkiConnect connection, docs links) live in
`.claude/rules/anki-connect.md` (auto-loads whenever Claude works with files under
`04 Flashcards/`).

## Language conventions

American English and neutral Latin American Spanish rules for lesson/flashcard content
live in `.claude/rules/spanish-language.md` (auto-loads whenever Claude works with files
under `01 Lessons/`, `04 Flashcards/`, `03 Attachments/`, `02 MOCs/`, `06 Vocabulary/`,
or `07 Stories/`).

## Folder structure

- Use `./Welcome.md` as the entry point to this vault. Assume that it will be opened first, and make it easy to navigate the rest of the vault from there.
- `00 Templates/` — Lesson Template.md, Flashcard Set Template.md, Vocabulary Template.md,
  Story Template.md
- `01 Lessons/` — nested by CEFR code, one file per lesson at the most granular
  (4th-segment) code. See "Numbering rule" below for the exact folder pattern.
  `02 MOCs/` is the only content folder that does *not* follow this nested pattern.
- `02 MOCs/` — content map: one file per grammar category, manually linking to lessons
- `03 Attachments/<same nested path>/<code> Title/` — PDF practice sheets for that lesson
- `04 Flashcards/<same nested path>/` — one file per lesson, named `<code> Title.md`,
  matching the lesson file's code and title exactly
- `05 Conversations/<same nested path>/` — one file per lesson, named `<code> Title.md`,
  matching the lesson file's code and title exactly. Contains natural, commonly-occurring
  conversational sentences using that lesson's grammar point, grouped by the sentence
  pattern each one follows.
- `CEFR/CEFR-Outline.md` — a leveled (A1-C2) curriculum outline with alphanumeric codes (e.g. `A1.3.2`), plus per-lesson formula/immersion channel picks, Qroo source mapping, pacing, and build status. The user may reference a code and ask to "add a lesson on X to section Y.Z" — use this file to find what that code covers and where to source it from. Use this outline to name and organize files and folders that contain the course content (lessons, attachments, flashcards, etc...)
- `CEFR/CEFR-Folder-Structure.md` — the authoritative pattern for how CEFR codes map
  to nested folder/file names across `01 Lessons/`, `03 Attachments/`, and
  `04 Flashcards/` (and the Anki deck tag). Treat it as a pattern to follow, not a
  fixed list — only the branches for lessons that actually exist need to exist on disk.
- `CEFR/CEFR-YouTube-Channels.md` — the approved list of YouTube channels for a
  lesson's `youtube` field, with each channel's CEFR range and focus, plus a
  CEFR-stage-to-channel mapping table. When finding a video for a lesson (see
  "Creating a new lesson" below), the video must come from a channel on this list —
  match the channel's focus and level to the lesson's CEFR code and topic. If you
  come across a channel that fits this list's pattern but isn't on it, suggest it to
  the user instead of using it or adding it yourself.
- `06 Vocabulary/<Part of Speech, plural>/<word>.md` — standalone word reference
  files (full conjugation paradigm + example sentences), separate from the CEFR
  lesson curriculum. `06 Vocabulary/Vocabulary-Outline.md` tracks which words have a
  file and links to each. Distinct from `02 MOCs/Vocabulary.md`, which tracks
  themed vocabulary *lessons* inside `01 Lessons/`.
- `07 Stories/<Level>/<Title>.md` — standalone graded-reader stories (short
  Spanish narrative, inline vocabulary links, English translation below),
  separate from the CEFR lesson curriculum and not linked to flashcards or
  Anki. `07 Stories/Story-Outline.md` tracks story ideas and build status per
  CEFR level (A1-C2), each with a target audience so a level's stories cover
  a range of ages, not just children.
- `Qroo/beginner-course/` and `Qroo/intermediate-course/` — raw source material (summaries/exercises) imported from a third-party course ("Qroo Paul's Spanish Master Course", skool.com/qroo). Treat as reference input for drafting lessons, not as vault content itself. **Both folders contain Spain-specific forms (vosotros conjugations, etc.) — strip these out per `.claude/rules/spanish-language.md` when pulling material from either into a lesson.**
- `todo/TODO.md` / `todo/TODONE.md` — internal bug/improvement/suggestion/insight/discovery tracking for this vault's Claude Code tooling. **Not vault content — never link to `todo/` from a lesson, MOC, `Welcome.md`, or any other note.** A hook (`.claude/hooks/guard-todo-link.js`) blocks this, but don't rely on it. See "Todo tracking" below.

## Todo tracking

`todo/TODO.md` holds open items; `todo/TODONE.md` holds completed ones. Each item gets
a permanent, never-reused ID (`TD-NNN`).

- To log a bug, improvement, suggestion, insight, or discovery: use the `add-todo` skill.
- To implement the fix for one and mark it done: use the `fix-todo` skill (e.g. "fix
  TD-002"). It handles the fix and then hands off to `complete-todo`.
- To just mark one done without doing the fix yourself (moves it from TODO.md to
  TODONE.md): use the `complete-todo` skill.
- Log things proactively — if you notice a bug, a rough edge, or a good idea while
  doing unrelated work, add a todo item for it rather than letting it drop, then
  continue with the original task.

## Numbering rule

Lessons are identified by their CEFR code (e.g. `A1.1.1.1`), not a sequential
number. Look up the code and title wording in `CEFR/CEFR-Outline.md`; use
`CEFR/CEFR-Folder-Structure.md` for the exact folder/file naming pattern.

- Folder path: `01 Lessons/<Level Code Name>/<Section Code Name>/<Subsection Code Name>/`
  (e.g. `A1 Breakthrough Absolute Beginner/A1.1 Phonetics Pronunciation Orthography/A1.1.1 Vowels Consonants and Accent Marks/`).
- Lesson file: `<code> <Title>.md` inside that folder (e.g. `A1.1.1.1 Pure Vowel Sounds.md`).
- The same nested path and code are reused for the attachment folder
  (`03 Attachments/<same path>/<code> <Title>/`) and the flashcard file
  (`04 Flashcards/<same path>/<code> <Title>.md`).
- Never reuse a CEFR code for a different topic, and never renumber/rename an
  existing lesson's code once created.

## Creating a new lesson

Use the `new-lesson` skill (`.claude/skills/new-lesson/`) — it walks the full
numbering → template → video search → body → practice-PDF →
conversational-sentences → MOC-linking → review →
flashcard-generation-and-Anki-sync workflow. Don't hand-roll this from
scratch; the skill is the source of truth for the exact steps.

## Creating flashcards

Flashcards are generated and pushed to Anki automatically as the last step of
`new-lesson` — not a separate later action. Use the `add-flashcards` skill
(`.claude/skills/add-flashcards/`) directly only to regenerate cards for a
lesson whose content changed after the fact.

## Creating a vocabulary file

Use the `new-vocabulary` skill (`.claude/skills/new-vocabulary/`) to add a standalone
word reference file to `06 Vocabulary/` — full conjugation tables plus example
sentences for a single word, cross-linked to related vocabulary files. This is
separate from `new-lesson`; it doesn't touch `01 Lessons/` or Anki.

## Creating a story

Use the `new-story` skill (`.claude/skills/new-story/`) to add a graded-reader
story to `07 Stories/` — resolves the level/title against
`07 Stories/Story-Outline.md`, writes the story with inline vocabulary links
(only to words that already have a `06 Vocabulary/` file), adds the English
translation, and updates the outline. This is separate from `new-lesson`; it
doesn't touch `01 Lessons/`, `04 Flashcards/`, or Anki.

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
- pronunciation

## What NOT to do

- Don't change an existing lesson's CEFR code, or rename/move a finished
  lesson/flashcard file. A hook (`.claude/hooks/guard-lesson-renames.js`)
  blocks `mv`/`rm` on these paths, but don't rely on the hook — avoid it in
  the first place.
- Don't merge multiple grammar points into a single lesson, even if related.
- Don't fabricate a YouTube link — leave it blank and flag it if no good
  video exists.
- Don't generate flashcards for a lesson whose body is still a rough draft
  with placeholder sections — `new-lesson` only reaches the flashcard step
  after the body is fully written and reviewed.

## Token efficiency

- Don't read a whole lesson, flashcard, or `Qroo/` source file to check one
  detail. Use Grep to find the line first, then read only the relevant
  section with an offset/limit.
- Use the `new-lesson` and `add-flashcards` skills instead of re-deriving the
  workflow step by step. They already encode the numbering, template, and
  MOC-linking steps.
- Let `spanish-style-reviewer` do the language check instead of manually
  re-reading a finished lesson against `.claude/rules/spanish-language.md`.
- When pulling material from `Qroo/beginner-course/` or `Qroo/intermediate-course/`,
  grep for the specific topic instead of reading an entire source file — those files
  are long raw transcripts/summaries and mostly irrelevant to any single lesson.
- For multi-file checks (e.g. "does every lesson in a MOC exist," "which
  flashcard files are missing"), use one Glob/Grep pass over the folder
  instead of opening files one at a time.
- Keep todo entries and MOC descriptions terse — short pointers, not
  restated lesson content (the lesson file is the source of truth).

## Tooling set up for this vault

- **Skills**: `new-lesson` (full lesson creation workflow — includes writing
  the `05 Conversations` sentence file and ends in flashcard generation and
  Anki sync), `add-flashcards` (flashcard regeneration for an
  already-existing lesson; also invoked automatically as the last step of
  `new-lesson`), `new-vocabulary` (standalone word reference file in
  `06 Vocabulary/` — conjugation tables + example sentences), `new-story`
  (graded-reader story in `07 Stories/` — inline vocabulary links + English
  translation), `add-todo` / `fix-todo` / `complete-todo` (see "Todo
  tracking" above).
- **Agent**: `spanish-style-reviewer` — read-only check of lesson/flashcard/
  vocabulary/story content against `.claude/rules/spanish-language.md`.
  `new-lesson`, `add-flashcards`, `new-vocabulary`, and `new-story` all
  dispatch it automatically before reporting done.
- **Rules**: `.claude/rules/spanish-language.md` — path-scoped, auto-loads
  when Claude touches `01 Lessons/`, `04 Flashcards/`, `03 Attachments/`,
  `02 MOCs/`, `06 Vocabulary/`, or `07 Stories/`.
  `.claude/rules/anki-connect.md` — path-scoped to `04 Flashcards/`,
  the exact AnkiConnect protocol `add-flashcards` uses to push cards to Anki
  directly (profile, deck naming, note model, duplicate-avoidance, ID write-back).
- **Hooks**: `guard-lesson-renames.js` (blocks destructive `mv`/`rm` on
  lesson/flashcard/attachment paths), `guard-lesson-numbering.js` (blocks
  writing a lesson/flashcard file whose CEFR code collides with an existing,
  differently-named file in the same folder), and `guard-todo-link.js`
  (blocks linking `todo/` from vault content). All wired in
  `.claude/settings.json`.
- **PDF generation**: `md-to-pdf` (npm, installed via `package.json` in the
  vault root — run `npm install` once after cloning). No system PDF engine
  or sudo install required; it bundles its own headless Chromium.
- **`.npmrc`**: sets `package-lock=false`. This project never commits a
  `package-lock.json` — don't add one back or fight the setting.
