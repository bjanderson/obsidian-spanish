# TODO

Internal tracking for this vault's tooling — bugs, improvements, suggestions, insights,
and discoveries. This is **not** vault content: never link to this file (or anything in
`todo/`) from lessons, MOCs, `Welcome.md`, or any other note. Reference it only from
Claude config docs (`CLAUDE.md`, skills, rules, agents).

IDs are `TD-NNN`, 3-digit zero-padded, permanent once assigned, and never reused — not
even after an item moves to `TODONE.md`. To find the next unused ID, check the highest
ID across this file and `TODONE.md`.

Add items with the `add-todo` skill. Mark items done with the `complete-todo` skill,
which moves them to `TODONE.md`.

---

## TD-001 — `npm install` isn't writing a package-lock.json

- **Type:** discovery
- **Created:** 2026-08-09

Ran `npm install` twice in the vault root (for the `md-to-pdf` dependency used by the
`new-lesson` skill's practice-PDF step) and no `package-lock.json` was generated either
time, even though `package.json` and `node_modules/` were created normally. Likely an
`.npmrc` setting (local or global) with `package-lock=false`, or an npm config default
on this machine. Worth tracking down so installs stay reproducible — right now a fresh
`npm install` could silently resolve different transitive versions of `md-to-pdf`.
