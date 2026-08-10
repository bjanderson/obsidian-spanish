---
name: new-lesson
description: Create a new Spanish lesson in this Obsidian vault — numbering, template, YouTube video search, lesson body, practice-sheet PDF, and MOC linking. Use whenever the user asks to "create a lesson on X", "add a lesson about X", or references a CEFR code (e.g. "add A1.3.2 as a lesson").
---

# New Lesson

Create one lesson end to end, following `.claude/CLAUDE.md` exactly. That file is the
source of truth for frontmatter fields, folder layout, and language rules — re-read it
if this skill and CLAUDE.md ever disagree, CLAUDE.md wins.

Do **not** generate flashcards as part of this skill — flashcards happen only after the
lesson is finalized, via the separate `add-flashcards` skill.

## Steps

1. **Resolve the CEFR code.** The user gives a code directly (e.g. `A1.3.2`) or a topic
   to look up in `CEFR/CEFR-Outline.md`. A lesson lives at the most granular (4th-segment)
   code, e.g. `A1.3.2.1`. If the user only gave a 3-segment code (a subsection, e.g.
   `A1.3.2`), find or pick the right 4th-segment leaf under it in the outline. Never
   reuse an existing code for a different topic, and never renumber/rename a lesson once
   created.

2. **Resolve the folder path and category.** Use `CEFR/CEFR-Folder-Structure.md` for the
   exact nested naming pattern: `01 Lessons/<Level Code Name>/<Section Code Name>/<Subsection Code Name>/`.
   Create any of those folders that don't exist yet — only branches with actual lessons
   need to exist on disk. Pick `category` from the list in CLAUDE.md's "Categories
   currently in use" section. If nothing fits, add the new category to that list in
   CLAUDE.md AND create a matching MOC — don't invent a category silently.

3. **Copy the template.** `00 Templates/Lesson Template.md` → `01 Lessons/<nested path>/<code> Title.md`.

4. **Fill in frontmatter** using the template's real field names — `code` (the CEFR
   code), `title`, `status: draft`, `category` (array), `tags`, `created` (today's
   date), `related` (links to related lessons if any exist). The Anki deck itself is
   set later, on the flashcard file's `#anki/` tag (see `add-flashcards`) — not here.

5. **Find a YouTube video.** Pick one from a channel listed in
   `CEFR/CEFR-Outline.md`'s companion file `CEFR/CEFR-YouTube-Channels.md` — use its
   CEFR-stage mapping table to shortlist channels matching this lesson's level, then
   search that channel for a video teaching this exact grammar point (not
   native-speaker content). Put the URL in the `youtube` field. If nothing solid turns
   up on a listed channel, leave it blank and tell the user — never fabricate a link,
   and don't reach for a channel outside the list without asking first. If you notice
   a channel elsewhere that fits the list's pattern, suggest it to the user rather
   than using or adding it yourself.

6. **Write the body**: Explanation, a table of at least 5 varied Examples
   (different subjects/contexts), Common Mistakes. Follow the Spanish Language and
   English Language rules in CLAUDE.md (neutral Latin American Spanish, no Spain forms,
   personal *a*, *al*/*del* contractions, no redundant subject pronouns, American English).
   If drawing on `Qroo/beginner-course/` source material, strip any vosotros forms or
   other Spain-specific Spanish before it goes in the lesson.

7. **Generate the practice PDF.** `md-to-pdf` has no `--dest` flag and no bare
   `none` value for `--stylesheet` — don't use either; it always writes the PDF
   next to the source file, using the default stylesheet unless you pass a real
   stylesheet path.
   - Write the practice sheet as a temporary Markdown file (fill-in-the-blank,
     translation, and sentence-construction exercises — a mix of all three).
   - **Always end with an Answer Key on its own separate last page** — a page break
     (`<div style="page-break-before: always;"></div>`) before an "## Answer Key"
     heading, then the answers in the same order as the exercises. Every practice PDF
     gets this, no exceptions.
   - Convert it with: `npx md-to-pdf "<temp>.md" --pdf-options '{"format":"Letter","margin":"1in"}'`
     Run this from the vault root (where `package.json` / `node_modules` live). This
     produces `<temp>.pdf` next to the source Markdown file.
   - Copy that PDF into place: `cp "<temp>.pdf" "03 Attachments/<nested path>/<code> Title/<code> Title - Practice.pdf"`
     (same nested path as the lesson file). Use `cp`, not `mv` — `guard-lesson-renames.js`
     blocks `mv`/`rm` under `03 Attachments/` even for a brand-new destination file.
   - Delete the temp Markdown and PDF once the copy exists (they're outside the
     guarded folders, so plain `rm` is fine there).
   - In the lesson's `## Practice` section, point the embed at the real path:
     `![[03 Attachments/<nested path>/<code> Title/<code> Title - Practice.pdf]]` —
     the template's placeholder is a pattern, not a real path; replace it.

8. **Link into the MOC(s).** For each category, open `02 MOCs/<Category>.md`. If it
   doesn't exist yet, create it (heading + a bullet list of lesson links). Add a link to
   the new lesson.

9. **Review before handing back.** Dispatch the `spanish-style-reviewer` agent on the
   new lesson file (and practice-sheet source Markdown) to catch dialect/style slips —
   Spain forms, missing personal *a*, missing *al*/*del*, stray subject pronouns. Fix
   anything it flags before reporting the lesson as done.

## Report back

State the lesson number/path, whether a video was found, and confirm the PDF was
generated. Do not mark `status` as anything other than `draft` — that's the user's call.
