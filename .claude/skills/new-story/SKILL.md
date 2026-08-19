---
name: new-story
description: Create a new graded reading story in 07 Stories — a short narrative at a target CEFR level, with inline vocabulary links and an English translation. Use whenever the user asks to "write a story", "add a story for [level]", "create a reading story about X", or references a title from Story-Outline.md.
---

# New Story

Create one graded-reader story end to end, following `.claude/CLAUDE.md` and
`.claude/rules/spanish-language.md` for the vault's language rules. Stories are
standalone reading practice in `07 Stories/`, separate from the CEFR lesson
curriculum in `01 Lessons/` — they are not linked to flashcards, attachments, or
Anki.

## Steps

1. **Resolve the level and title.** Check `07 Stories/Story-Outline.md`:
   - If the user gave a title that already has a row, use that row's Audience and
     Theme/Vocab focus — don't invent new ones.
   - If the user gave only a level (e.g. "write an A1 story"), pick the first
     unwritten (no ✅) row in that level's table.
   - If the level's table says "Ideas not yet added," or the user's title isn't in
     the outline yet, ask the user for the audience and theme/vocab focus before
     writing anything (AskUserQuestion, 2-4 concrete options) — don't guess a
     children's-story theme by default when no row exists. Then add a new row for
     it (Title, blank Status, Audience, Theme/Vocab focus, blank Link).

2. **Resolve the file path.** `07 Stories/<Level>/<Title>.md` (e.g.
   `07 Stories/A1/La mascota nueva.md`). Create the level folder if it doesn't
   exist yet.

3. **Copy the template.** `00 Templates/Story Template.md` → the path from step 2.

4. **Fill in frontmatter**: `title`, `status: draft`, `created` (today's date),
   `tags` ending in the CEFR level (e.g. `A1`).

5. **Write the story**, matching the register and grammar complexity established
   by existing stories at that level (e.g. `07 Stories/A1/El perro de Mateo.md` for
   simple present tense, `07 Stories/B2/El pueblo de Ana.md` for compound/
   subjunctive tenses) — when in doubt about what grammar a level assumes, check
   which lessons are marked ✅ in `CEFR/CEFR-Outline.md` up to that level. Keep the
   audience and theme/vocab focus from step 1 in view throughout. Use short
   paragraphs, following `.claude/rules/spanish-language.md` (neutral Latin
   American Spanish, personal *a*, *al*/*del* contractions, no redundant subject
   pronouns).

6. **Link vocabulary inline as you write.** For every word that already has a file
   in `06 Vocabulary/<Part of Speech>/`, wrap it as `[[word]]` (surface form
   matches the vocab filename exactly) or `[[vocab-file-name|surface form]]` (the
   word is conjugated/inflected, e.g. `[[tener|tiene]]`, `[[negro-negra-negros-negras|negro]]`).
   Check the exact filename in `06 Vocabulary/` before linking — don't guess a
   plausible-looking link. **Never link a word that has no matching vocabulary
   file** — leave it as plain text. Don't create new vocabulary files as part of
   this skill.

   Track every content word (noun, verb, adjective, adverb — not proper nouns or
   function words already covered by an existing row) that has no matching
   vocabulary file: add it to the end of the ranked table in
   `06 Vocabulary/Vocabulary-Outline.md`, one row per new word, with the next
   sequential rank number, its POS and English gloss filled in, and blank Status
   and File columns. Skip a word that's already listed there from an earlier
   story (blank or ✅ row) — don't add a duplicate row. Leave the ranked
   placement and file-building for a later `new-vocabulary` pass.

7. **Write the English Translation section** — one paragraph of plain English per
   Spanish paragraph, in the same order, under `## English Translation`.

8. **Review the file.** Dispatch the `spanish-style-reviewer` agent on the new
   file to catch dialect/style slips — Spain forms, missing personal *a*, missing
   *al*/*del*, stray subject pronouns, wrong register. Fix anything it flags.

9. **Mark complete and update the outline, if nothing failed.** If every step
   above ran to completion with no unresolved issue:
   - Set the file's frontmatter `status: complete`.
   - In `07 Stories/Story-Outline.md`, put a ✅ in the Status column for this
     story's row and link the story in the Link column (`[[Title]]`).
   If a step failed or a review finding was left unfixed, leave `status: draft`
   and the outline row unchecked — report what's incomplete instead.

## Report back

State the title, level, file path, whether it was marked complete, and any
words that were left unlinked and added to `Vocabulary-Outline.md` because no
vocabulary file exists for them yet.
