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

1. **Pick the number.** List `01 Lessons/`. The number is the next unused integer,
   zero-padded to 3 digits. Never reuse or renumber an existing lesson.

2. **Resolve the topic and category.** If the user gave a CEFR code (e.g. `A1.3.2`),
   look it up in `CEFR/CEFR-Outline.md` for the exact grammar point and title wording.
   Pick `category` from the list in CLAUDE.md's "Categories currently in use" section.
   If nothing fits, add the new category to that list in CLAUDE.md AND create a matching
   MOC — don't invent a category silently.

3. **Copy the template.** `00 Templates/Lesson Template.md` → `01 Lessons/NNN Topic.md`.

4. **Fill in frontmatter** using the template's real field names — `number`, `title`,
   `status: draft`, `anki_deck: Spanish::{{title}}`, `category` (array), `tags`,
   `created` (today's date), `related` (links to related lessons if any exist).

5. **Find a YouTube video.** Search for one that teaches this exact grammar point,
   aimed at learners (not native-speaker content). Put the URL in the `youtube` field.
   If nothing solid turns up, leave it blank and tell the user — never fabricate a link.

6. **Write the body**: Explanation, a table of at least 5 varied Examples
   (different subjects/contexts), Common Mistakes. Follow the Spanish Language and
   English Language rules in CLAUDE.md (neutral Latin American Spanish, no Spain forms,
   personal *a*, *al*/*del* contractions, no redundant subject pronouns, American English).
   If drawing on `Qroo/beginner-course/` source material, strip any vosotros forms or
   other Spain-specific Spanish before it goes in the lesson.

7. **Generate the practice PDF.**
   - Write the practice sheet as a temporary Markdown file (fill-in-the-blank,
     translation, and sentence-construction exercises — a mix of all three).
   - Convert it with: `npx md-to-pdf "<temp>.md" --stylesheet none --pdf-options '{"format":"Letter","margin":"1in"}' --dest "03 Attachments/NNN Topic/NNN Topic - Practice.pdf"`
     Run this from the vault root (where `package.json` / `node_modules` live).
   - Delete the temp Markdown file once the PDF exists.
   - In the lesson's `## Practice` section, point the embed at the real path:
     `![[03 Attachments/NNN Topic/NNN Topic - Practice.pdf]]` — the template's
     placeholder embed is a bare filename and will not resolve; replace it.

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
