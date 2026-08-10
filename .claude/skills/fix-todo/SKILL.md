---
name: fix-todo
description: Implement the fix for a tracked todo/TODO.md item, then mark it done. Use when the user says "fix TD-NNN" / "fix TDNNN" (with or without the dash), or otherwise asks to resolve a specific tracked item by its ID.
---

# Fix Todo

Resolve one item from `todo/TODO.md` end to end: understand it, fix it, verify it,
then hand off to `complete-todo` to record it.

## Steps

1. **Find the item.** Normalize the ID the user gave (`TD001`, `td-1`, etc.) to
   `TD-NNN` and find its `## TD-NNN — ...` section in `todo/TODO.md`. If it's not
   there, check `todo/TODONE.md` — if it's already done, tell the user and stop. If
   the ID doesn't exist anywhere, say so and stop.

2. **Understand the fix.** Read the item's `Type` and description. `bug` and
   `improvement` items usually have a concrete next step already spelled out —
   follow it. `suggestion`, `insight`, and `discovery` items are often observations,
   not fixes — if it's not obvious what "fixed" means for this item, ask the user to
   clarify before doing anything, rather than guessing at scope.

3. **Implement it**, following this vault's normal rules — `.claude/CLAUDE.md`,
   `.claude/rules/spanish-language.md` when touching vault content, and the relevant
   skill (`new-lesson`, `add-flashcards`) if the fix touches lesson/flashcard
   structure or generation logic. Keep the change scoped to what the item describes;
   don't use it as license to refactor unrelated things.

4. **Verify the fix** before declaring it done — re-run whatever failed, re-read the
   edited section, or otherwise confirm the described problem is actually gone.

5. **Mark it done.** Use the `complete-todo` skill to move the item to
   `todo/TODONE.md`, with a `**Resolution:**` line describing what was actually
   changed (file paths, not just "fixed it").

## Scope

- If the fix turns out to need a decision the user should make (multiple valid
  approaches, unclear scope, touches something destructive), stop and ask instead of
  picking a default — per `.claude/CLAUDE.md`'s Collaboration rules.
- If, on inspection, the item is already resolved, a duplicate, or no longer valid,
  say so and use `complete-todo` (or tell the user to remove it) rather than doing
  unnecessary work.
- Never link `todo/` from vault content — see `.claude/CLAUDE.md`.
