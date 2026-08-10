---
name: add-flashcards
description: Generate the Anki-style flashcard file for an already-finalized lesson in this Obsidian vault. Use when the user asks to "make flashcards for lesson X" or "add flashcards for NNN Topic" — never as part of creating a new lesson (see the new-lesson skill's rule against generating flashcards before the lesson is finalized).
---

# Add Flashcards

Generate `04 Flashcards/<nested path>/<code> Title.md` for one lesson, per
`.claude/CLAUDE.md`.

## Preconditions

- The lesson file in `01 Lessons/` must exist and be finished (not a rough draft with
  placeholder sections). If it still looks unfinished, stop and ask the user to confirm
  before generating cards — don't generate flashcards for content that might still change.
- If the flashcard file already exists, ask before overwriting it.

## Steps

1. Read the lesson file to pull its `code`, `title`, nested folder path, and
   Examples/Explanation content.
2. Copy `00 Templates/Flashcard Set Template.md` to
   `04 Flashcards/<same nested path as the lesson>/<code> Title.md` (matching the
   lesson's code and title exactly).
3. Set frontmatter: `lesson: <code>` (internal bookkeeping only).
4. Add one `#anki/Spanish/<Level Code Name>/<Section Code Name>/<Subsection Code Name>/<code> Title`
   tag near the top of the file body, mirroring the nested folder path (see
   `CEFR/CEFR-Folder-Structure.md`) — step 8 derives the Anki deck name from this tag.
   Obsidian tags can't contain spaces or periods, so sanitize every segment first:
   replace each space and each period with a hyphen
   (`A1.1 Phonetics Pronunciation Orthography` → `A1-1-Phonetics-Pronunciation-Orthography`;
   `A1.1.1.1 Pure Vowel Sounds` → `A1-1-1-1-Pure-Vowel-Sounds`). An un-sanitized tag
   with spaces or dots won't parse as a real Obsidian tag.
5. Write 15-20 cards, one grammar concept per card — never combine two grammar points
   into a single card. Each card is its own single-column Markdown table: the header
   cell is the front, the one data row is the back:
   ```
   | Front text |
   | ---------- |
   | Back text  |
   ```
   Mix:
   - recall ("translate this")
   - production ("fill in the correct form")
   - recognition ("why is X wrong here")
6. Apply the language rules in `.claude/rules/spanish-language.md` to every card.
7. Dispatch the `spanish-style-reviewer` agent on the new flashcard file and fix
   anything it flags.
8. **Push the cards to Anki directly via AnkiConnect.** Follow
   `.claude/rules/anki-connect.md` exactly: load the `Obsidian Flashcards` profile,
   create the deck from the file's `#anki/` tag, add one note per card (Basic model,
   Front/Back), and write each note's real returned ID back into that card's
   `<!--ANKI_NOTE_ID:...-->` comment. If AnkiConnect isn't reachable, stop and tell
   the user to open Anki rather than skipping this step silently.

## Report back

State the flashcard file path, card count, and confirm the notes were created in
Anki (deck name and count). Don't touch the lesson's `status` field.
