---
name: add-flashcards
description: Generate the Anki-style flashcard file for an already-finalized lesson in this Obsidian vault. Use when the user asks to "make flashcards for lesson X" or "add flashcards for NNN Topic" — never as part of creating a new lesson (see the new-lesson skill's rule against generating flashcards before the lesson is finalized).
---

# Add Flashcards

Generate `04 Flashcards/NNN Topic.md` for one lesson, per `.claude/CLAUDE.md`.

## Preconditions

- The lesson file in `01 Lessons/` must exist and be finished (not a rough draft with
  placeholder sections). If it still looks unfinished, stop and ask the user to confirm
  before generating cards — don't generate flashcards for content that might still change.
- If `04 Flashcards/NNN Topic.md` already exists, ask before overwriting it.

## Steps

1. Read the lesson file to pull its `number`, `title`, and Examples/Explanation content.
2. Copy `00 Templates/Flashcard Set Template.md` to `04 Flashcards/NNN Topic.md`
   (matching the lesson's number and title exactly).
3. Set frontmatter: `lesson: NNN`, `deck: Spanish::<Title>`.
4. Write 15-20 `Q:` / `A:` card pairs, one grammar concept per card — never combine two
   grammar points into a single card. Mix:
   - recall ("translate this")
   - production ("fill in the correct form")
   - recognition ("why is X wrong here")
5. Apply the language rules in `.claude/rules/spanish-language.md` to every card.
6. Dispatch the `spanish-style-reviewer` agent on the new flashcard file and fix
   anything it flags.

## Report back

State the flashcard file path and card count. Don't touch the lesson's `status` field.
