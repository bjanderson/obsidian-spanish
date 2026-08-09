---
name: add-todo
description: Add a new tracked item to todo/TODO.md — a bug, improvement, suggestion, insight, or discovery noticed while working in this vault. Use whenever you spot something worth remembering but out of scope for the current task, or when the user explicitly asks to "add a todo", "log this as a bug", "track this idea/insight/discovery".
---

# Add Todo

Append one item to `todo/TODO.md`, per `.claude/CLAUDE.md`'s todo-tracking rules.

## Steps

1. Read `todo/TODO.md` and `todo/TODONE.md`. Find the highest existing `TD-NNN` ID
   across both files.
2. The new ID is that number + 1, zero-padded to 3 digits (`TD-001`, `TD-002`, ...).
   IDs are permanent and never reused, even for items that later move to `TODONE.md`.
3. Pick one `Type`: `bug`, `improvement`, `suggestion`, `insight`, or `discovery`.
4. Append a new section to the end of `todo/TODO.md` (append-only — don't reorder or
   renumber existing items) in this exact format:

   ```
   ## TD-NNN — <short title>

   - **Type:** <bug|improvement|suggestion|insight|discovery>
   - **Created:** <YYYY-MM-DD>

   <one or more sentences: what it is, why it matters, and a next step if known>
   ```

5. Tell the user which ID was assigned so they can reference it later.

## Scope

- Never link `todo/` from vault content (lessons, MOCs, `Welcome.md`, etc.) — `todo/`
  is internal project tracking only, not part of the Spanish-learning vault itself.
- Don't delete, reorder, or renumber existing items when adding a new one.
- If the thing you want to log is really a duplicate of an existing open item, don't
  create a new ID — say so and point at the existing one instead.
