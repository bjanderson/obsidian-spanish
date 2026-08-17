---
name: new-vocabulary
description: Create a new vocabulary deep-dive file in 06 Vocabulary — full conjugation tables with example sentences for a Spanish word. Use whenever the user asks to "add a vocabulary word", "create a vocabulary file for X", or "add X to the vocabulary outline".
---

# New Vocabulary

Create one vocabulary file end to end, following `.claude/CLAUDE.md` for the vault's
language rules. This is a standalone word reference (full conjugation paradigm +
example sentences), separate from the CEFR lesson curriculum in `01 Lessons/`.

## Steps

1. **Confirm the word and part of speech.** Check `06 Vocabulary/Vocabulary-Outline.md`
   first — if the word is already listed, use its existing English gloss/part of
   speech rather than guessing again. If it's not listed, add a row for it (Word,
   English, blank Status, blank file link) before continuing.

2. **Resolve the folder and file path.** `06 Vocabulary/<Part of Speech, plural,
   Title Case>/<word>.md` (e.g. `06 Vocabulary/Verbs/querer.md`). Create the
   part-of-speech folder if it doesn't exist yet. The template
   (`00 Templates/Vocabulary Template.md`) is written for verbs — for a noun or
   adjective, adapt its tense sections into whatever forms actually vary (gender/
   number, singular/plural) and drop sections that don't apply, per the note at the
   top of the template.

3. **Copy the template.** `00 Templates/Vocabulary Template.md` → the path from step 2.

4. **Fill in frontmatter**: `word`, `part_of_speech`, `english` (one or more plain
   meanings), `status: draft`, `category` (usually `[vocabulary]`), `tags`, `created`
   (today's date), `related` (codes/links for lessons that already teach this word, if
   any — e.g. a modal-verb lesson for *poder*).

5. **Write the Meaning section.** Plain-English meaning(s) first, then a short note on
   secondary senses, stem changes, or irregularities — matches the plain-language-first
   voice from `.claude/rules/spanish-language.md`.

6. **Fill in every conjugation table** in the template: Present Indicative, Preterite,
   Imperfect, Future, Conditional, Present Perfect, Present Subjunctive, Imperfect
   Subjunctive, Commands, and Gerund/Past Participle. Use standard neutral Latin
   American forms — no *vosotros* row, no Spain-specific forms, per CLAUDE.md.

7. **Write example sentences under each table.** For every table, write sentences that
   collectively use every conjugation/form in that table at least once, varied across
   statements, questions, and negatives — not the same sentence shape repeated for each
   person. Follow the neutral-LatAm rules: personal *a*, *al*/*del* contractions, no
   redundant subject pronouns.

8. **Cross-link related vocabulary.** In the `## Related Vocabulary` section, link to
   any other `06 Vocabulary/` word files this one relates to (near-synonyms, common
   pairings, contrastive pairs like *poder* vs *saber*) — and add a reciprocal link
   back from those files' own `## Related Vocabulary` sections so the cross-references
   go both ways.

9. **Review the file.** Dispatch the `spanish-style-reviewer` agent on the new file to
   catch dialect/style slips — Spain forms, missing personal *a*, missing *al*/*del*,
   stray subject pronouns, wrong register. Fix anything it flags.

10. **Mark complete and update the outline, if nothing failed.** If every step above
    ran to completion with no unresolved issue:
    - Set the file's frontmatter `status: complete`.
    - In `06 Vocabulary/Vocabulary-Outline.md`, put a ✅ in the Status column for this
      word's row and link the word in the File column.
    If a step failed or a review finding was left unfixed, leave `status: draft` and
    the outline row unchecked — report what's incomplete instead.

## Report back

State the word, its file path, whether it was marked complete, and which (if any)
other vocabulary files it was cross-linked with.
