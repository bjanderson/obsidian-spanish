---
name: complete-todo
description: Mark a todo/TODO.md item as done by moving it to todo/TODONE.md. Use when the user says an item is fixed/done/resolved, or when you finish work that resolves a tracked item — reference it by its TD-NNN id.
---

# Complete Todo

Move one item from `todo/TODO.md` to `todo/TODONE.md`, by ID.

## Steps

1. Find the `## TD-NNN — ...` section in `todo/TODO.md` matching the given ID. If the
   user didn't give an ID, ask which one — list the current open items if there's more
   than one candidate.
2. Remove that section from `todo/TODO.md`.
3. Append it to the end of `todo/TODONE.md`, inserting a `**Completed:** <YYYY-MM-DD>`
   line right after `**Created:**`, and adding a `**Resolution:**` line at the end
   summarizing what was actually done (a sentence or two — enough that the item makes
   sense on its own without re-reading the original task).
4. Leave the ID, title, type, and original description text exactly as they were —
   only add the two new lines.

## Scope

- Only move items that are genuinely finished. If it's partially done, leave it in
  `TODO.md` and tell the user what's still open.
- Never link `todo/` from vault content — see `.claude/CLAUDE.md`.
