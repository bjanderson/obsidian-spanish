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
