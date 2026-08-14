# TODONE

Completed items moved here from `TODO.md` by the `complete-todo` skill. Same rules
apply: not vault content, never link to this file from lessons, MOCs, `Welcome.md`, or
any other note.

IDs, titles, types, and original descriptions are preserved exactly as they were in
`TODO.md` — only a `Completed` date and a `Resolution` line are added.

---

## TD-001 — `npm install` isn't writing a package-lock.json

- **Type:** discovery
- **Created:** 2026-08-09
- **Completed:** 2026-08-09

Ran `npm install` twice in the vault root (for the `md-to-pdf` dependency used by the
`new-lesson` skill's practice-PDF step) and no `package-lock.json` was generated either
time, even though `package.json` and `node_modules/` were created normally. Likely an
`.npmrc` setting (local or global) with `package-lock=false`, or an npm config default
on this machine. Worth tracking down so installs stay reproducible — right now a fresh
`npm install` could silently resolve different transitive versions of `md-to-pdf`.

- **Resolution:** Created `.npmrc` at the vault root with `package-lock=false` — this
  project intentionally never commits a lockfile, per the user's explicit decision.
  Verified with a clean `rm -rf node_modules && npm install`: `md-to-pdf` reinstalled
  correctly and no `package-lock.json` was written. Documented the setting in
  `.claude/CLAUDE.md`'s "Tooling set up for this vault" section so it reads as an
  intentional choice, not an unexplained gap.

## TD-002 — `new-lesson` skill's md-to-pdf command uses flags that don't exist

- **Type:** bug
- **Created:** 2026-08-09
- **Completed:** 2026-08-09

Step 7 of `.claude/skills/new-lesson/SKILL.md` gives a conversion command using
`--dest` and `--stylesheet none`. Neither flag exists: `npx md-to-pdf --help` shows
no `--dest` option (it always writes the PDF next to the source `.md` file — the
output has to be moved/copied to the real destination afterward), and
`--stylesheet none` throws `ENOENT: no such file or directory, open 'none'` (must
omit the flag entirely to use the default stylesheet, or pass a real path).
Discovered while generating 3 split practice PDFs during the CEFR folder migration.
Fix: update step 7 to drop `--stylesheet none` and change the workflow to
convert-then-move instead of relying on `--dest`.

- **Resolution:** Rewrote step 7 of `.claude/skills/new-lesson/SKILL.md`: dropped
  the nonexistent `--dest` and `--stylesheet none` flags, and changed the workflow
  to `npx md-to-pdf "<temp>.md" --pdf-options '...'` (writes next to the source)
  followed by `cp` — not `mv` — into the real `03 Attachments/` destination, since
  `guard-lesson-renames.js` blocks `mv`/`rm` there even for brand-new files. Verified
  by running the corrected command against a scratch markdown file and confirming a
  PDF was produced with no error.

## TD-003 — Simple Anki Sync isn't creating cards in Anki

- **Type:** bug
- **Created:** 2026-08-09
- **Completed:** 2026-08-09

The user reported that running Simple Anki Sync in Obsidian creates no cards in Anki.
Confirmed via AnkiConnect: before working around it, the "Obsidian Flashcards" Anki
profile had zero cards in the entire collection, and none of the `ANKI_NOTE_ID` values
already embedded in the vault's 3 existing flashcard files matched any real Anki note
(stale/orphaned IDs, likely left over from before the CEFR folder migration or from a
different profile). Worked around it for those 3 files by creating the 20 notes
directly via AnkiConnect's `addNotes` (Basic model, Front/Back fields,
`obsidian_simple_anki_sync_created` tag, deck path matching the sanitized `#anki/` tag
with `/` -> `::`), then wrote the real returned note IDs back into the flashcard files.
This is a one-off manual fix, not a permanent process change — the `add-flashcards`
skill still assumes Simple Anki Sync works. Next step: diagnose why the plugin itself
isn't creating notes (check Obsidian's console/plugin settings, AnkiConnect config,
correct Anki profile selected) so future lessons don't need this manual workaround.

- **Resolution:** Obsolete — the user uninstalled Simple Anki Sync entirely, so the
  "plugin creates no cards" bug no longer applies. Flashcards are now created
  exclusively via direct AnkiConnect calls (`.claude/rules/anki-connect.md`), which
  `add-flashcards` runs as its own step; there's no plugin left to diagnose or fix.
  Removed all remaining references to Simple Anki Sync from `.claude/CLAUDE.md`,
  `.claude/skills/add-flashcards/SKILL.md`, and `.claude/rules/anki-connect.md`, and
  renamed the Anki note tag from `obsidian_simple_anki_sync_created` to
  `obsidian_flashcards_synced` on all 20 existing notes via AnkiConnect's
  `replaceTagsInAllNotes`.

## TD-004 — Long-form possessive pronouns never taught (_mío, tuyo, suyo, nuestro_)

- **Type:** suggestion
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

A1.3.5.1 only teaches short-form possessive adjectives (_mi, tu, su, nuestro_ before a
noun). The long-form possessive pronouns/adjectives (_el mío, la tuya, los suyos_ —
used after the noun or standalone, e.g. "Es mío" / "el libro mío") never appear
anywhere in the outline. Suggest a new lesson, likely A2 (e.g. a new A1.3.5.3 or an
A2.4 addition), covering form and the after-noun/standalone uses.

- **Resolution:** Built as a new lesson **A1.3.5.3 Long Form Possessive Pronouns**
  (user chose this placement — directly extending A1.3.5 rather than a new A2
  section — over an AskUserQuestion prompt). Added the row to
  `CEFR/CEFR-Outline.md` and `CEFR/CEFR-Folder-Structure.md`, then ran the full
  `new-lesson` workflow: lesson body (form, standalone/after-noun uses, _suyo_
  ambiguity), practice PDF, `05 Conversations` file (4 pattern groups), linked into
  `02 MOCs/Grammar-Structures.md`, backlinked from `A1.3.5.1 Short Form
  Possessives`, passed `spanish-style-reviewer` on all three content files, and
  pushed 13 flashcards to Anki (deck
  `Spanish::A1-Breakthrough-Absolute-Beginner::A1-3-Essential-Verbs-Present-Indicative::A1-3-5-Possessive-Demonstrative-Adjectives::A1-3-5-3-Long-Form-Possessive-Pronouns`,
  verified 13/13 via `findCards`). Marked `status: complete`, outline status ✅, and
  committed as `A1.3.5.3`.

## TD-006 — Ordinal numbers (_primero, segundo... décimo_) not covered

- **Type:** suggestion
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

A1.5.2.1 covers cardinal numbers (0–100+) but ordinal numbers never appear anywhere
in the outline. Suggest adding a lesson alongside A1.5.2 (e.g. A1.5.2.4), covering
ordinals 1st–10th+ and their agreement/truncation rules (_primer, tercer_ before
masculine singular nouns).

- **Resolution:** Built as a new lesson **A1.5.2.4 Ordinal Numbers**, added directly
  to `CEFR/CEFR-Outline.md` at the suggested slot. Ran the full `new-lesson`
  workflow: video found on SpanishPod101 (approved channel), lesson body
  (1st-10th forms, gender agreement, _primer/tercer_ truncation before masculine
  singular nouns, note on cardinals replacing ordinals past 10th in speech),
  practice PDF, `05 Conversations` file (5 pattern groups, 25 sentences), linked
  into `02 MOCs/Vocabulary.md`, passed `spanish-style-reviewer` on all three
  content files, and pushed 20 flashcards to Anki (deck
  `Spanish::A1-Breakthrough-Absolute-Beginner::A1-5-Functional-Vocabulary-Survival-Expressions::A1-5-2-Numbers-Dates-Time::A1-5-2-4-Ordinal-Numbers`,
  verified 20/20 via `findCards`). Marked `status: complete`, outline status ✅.

## TD-010 — No clothing, general shopping, or money/prices vocabulary

- **Type:** suggestion
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

A1.5.3 is titled "Immediate Needs, Directions & Basic Shopping/Dining" but its actual
subsections only cover basic needs phrasing, ordering food, and directions — clothing
vocabulary, general shopping (sizes, trying things on, colors of clothing), and
money/prices/bargaining phrasing never appear anywhere in the outline despite being
named in the section title. Suggest a new A1.5.4 or A2.4 subsection covering clothing
items, shopping phrases, and prices/money.

- **Resolution:** Added a new **A1.5.4 Clothing, General Shopping & Money/Prices**
  subsection to `CEFR/CEFR-Outline.md` and `CEFR/CEFR-Folder-Structure.md`, with
  three lessons built end to end via the `new-lesson` workflow: **A1.5.4.1 Clothing
  Items, Colors, and Sizes**, **A1.5.4.2 General Shopping Phrases**, and **A1.5.4.3
  Money, Prices, and Bargaining**. Each has a video (SpanishPod101, verified live on
  the channel via browser search), lesson body, practice PDF, `05 Conversations`
  file, MOC link (`Vocabulary.md` for A1.5.4.1, `Sentence-Formulas.md` for A1.5.4.2
  and A1.5.4.3), passed `spanish-style-reviewer` on all lesson/conversation/flashcard
  files (one redundant-subject-pronoun fix and one stale note-text fix applied), and
  56 flashcards pushed to Anki total (20 + 18 + 18, verified via `findCards`). All
  three marked `status: complete`, outline status ✅, committed as three separate
  commits (`A1.5.4.1`, `A1.5.4.2`, `A1.5.4.3`).

## TD-017 — No food/cooking vocabulary beyond restaurant ordering

- **Type:** suggestion
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

A1.5.3.2 covers ordering food and asking for the check, but there's no lesson for
food vocabulary itself — fruits, vegetables, meats, common cooking verbs (_hervir,
freír, picar, hornear_), or grocery-shopping vocabulary. Suggest a new A1 or A2
subsection under A2.4 (Practical Vocabulary) covering food items and basic cooking
verbs.

**Resolution:** Added new subsection **A2.4.4 Food & Cooking Vocabulary** to the
outline (user chose the two-lesson split over a single combined lesson), with two
new lessons: **A2.4.4.1 Fruits, Vegetables, Meats, and Grocery-Shopping Vocabulary**
and **A2.4.4.2 Common Cooking Verbs**. Each has a lesson body, practice PDF, `05
Conversations` file, MOC link (`Vocabulary.md`), and passed `spanish-style-reviewer`
on all lesson/conversation/flashcard files (one subject-verb agreement fix applied
to A2.4.4.2's conversations file). No approved YouTube channel (per
`CEFR-YouTube-Channels.md`) had a confirmed matching video for either topic after
multiple searches, so both lessons' `youtube` fields were left blank per the
no-fabrication rule. 38 flashcards pushed to Anki total (19 + 19, verified via
`findCards`). Both lessons marked `status: complete`, outline status ✅, committed
as two separate commits (`A2.4.4.1`, `A2.4.4.2`).

## TD-007 — _Hace/desde/desde hace_ and _llevar_ + gerund duration expressions: flagged in the outline itself but never built

- **Type:** discovery
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

The outline's own Qroo Source note for A1.5.2.3 explicitly says `Summary-23.md`
(_hace/desde/desde hace_) was held back "for A1.5.2.3 extension or reuse at B1" — but
no lesson anywhere in the outline (A1 through C2) actually covers these duration
expressions, or the closely related _llevar_ + gerund construction (_Llevo tres años
viviendo aquí_). This is a genuine, pre-existing gap the outline author already
noticed and never resolved. Suggest a new B1 lesson (e.g. under B1.1, alongside the
other advanced-past-tense material) covering all three constructions together.

**Resolution:** Split into two lessons rather than combining all constructions into
one, per the vault's "one grammar point per lesson" rule — added B1.1.4 as a new
subsection under B1.1: B1.1.4.1 (_hace_, _desde_, and _desde hace_) and B1.1.4.2
(_llevar_ + gerund). B1.1.4.1 found a matching video on Spanishland School; no
approved-channel video was found for the _llevar_ + gerund topic specifically, so
that field was left blank per the no-fabrication rule. 37 flashcards pushed to Anki
total (19 + 18, verified via `findCards`). Both lessons marked `status: complete`,
outline status ✅, committed as two separate commits (`B1.1.4.1`, `B1.1.4.2`).

## TD-008 — No dedicated lesson on false friends (_falsos amigos_)

- **Type:** suggestion
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

High-value for English-speaking learners (_embarazada_ ≠ embarrassed, _éxito_ ≠ exit,
_actualmente_ ≠ actually, _realizar_ ≠ realize, _sopa_ ≠ soap, _carpeta_ ≠ carpet) but
no lesson anywhere addresses false friends as a category. Suggest a new A2 or B1
vocabulary lesson (e.g. a new A2.4 subsection) collecting the highest-frequency
false-friend pairs.

**Resolution:** Added a new A2.4.5 "False Friends (_Falsos Amigos_)" subsection to
`CEFR/CEFR-Outline.md` with two lessons: A2.4.5.1 (near-total mismatches —
_embarazada, éxito, sopa, carpeta, librería, pie, ropa, molestar_) and A2.4.5.2
(partial/tricky overlaps — _actualmente, realizar, atender, asistir, introducir,
discutir_). Both lessons fully built (body, practice PDF, conversations file, MOC
link) and marked `status: complete`, outline status ✅. 20 and 17 flashcards
respectively pushed to Anki (verified via `findCards`). No approved-channel YouTube
video was found for either lesson despite searching Spanish With Qroo Paul, The
Spanish Dude, Butterfly Spanish, Spanishland School, and others — left blank per the
no-fabrication rule. Committed as a single commit (`A2.4.5.1, A2.4.5.2`).

## TD-009 — No health, body-parts, or doctor's-office vocabulary anywhere

- **Type:** suggestion
- **Created:** 2026-08-14
- **Completed:** 2026-08-14

A2.4 (Practical Vocabulary & Situational Usage) covers family/home, work/weather, and
transportation/travel, but has no subsection for body parts, symptoms, illness, or a
doctor/pharmacy visit — a core practical-Spanish domain that's currently entirely
absent. Suggest a new A2.4.4 subsection: body parts, common symptoms/illness
vocabulary, and doctor/pharmacy interaction phrases.

**Resolution:** Added a new A2.4.6 "Health, Body, & Doctor's Office" subsection to
`CEFR/CEFR-Outline.md` (A2.4.4 and A2.4.5 were already taken by the time this was
built) with two lessons: A2.4.6.1 (Body Parts and Common Symptoms/Illness Vocabulary
— _doler_/_gustar_-pattern agreement, definite article for body parts, _tener
fiebre/tos/náuseas/gripe_, _estar resfriado/mareado/enfermo_) and A2.4.6.2 (Doctor
and Pharmacy Interaction Phrases — _sacar una cita_, _desde hace_ + duration,
_recetar/receta_, formal _usted_ commands, pharmacy phrases). Both lessons fully
built (body, practice PDF, conversations file, MOC link) and marked `status:
complete`, outline status ✅. 17 and 16 flashcards respectively pushed to Anki
(verified via `findCards`). No approved-channel YouTube video was found for either
lesson despite an extensive search — left blank per the no-fabrication rule.
Committed as a single commit (`A2.4.6.1, A2.4.6.2`).
