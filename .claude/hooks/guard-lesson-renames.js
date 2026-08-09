#!/usr/bin/env node
// PreToolUse hook (Bash matcher). Blocks mv/rm on existing numbered lesson/flashcard/attachment content.
// Enforces CLAUDE.md "What NOT to do: Don't renumber or rename existing lesson/flashcard files."
const fs = require("fs");

let data;
try {
  data = JSON.parse(fs.readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}

const cmd = (data.tool_input && data.tool_input.command) || "";
const GUARDED_DIRS = ["01 Lessons/", "04 Flashcards/", "03 Attachments/"];

const isDestructive = /(^|[\s;&|])(rm|mv)([\s]|$)/.test(cmd);
const touchesGuarded = GUARDED_DIRS.some((d) => cmd.includes(d));

if (isDestructive && touchesGuarded) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason:
          "This vault's rules forbid renaming/renumbering/deleting existing lesson or flashcard files (see CLAUDE.md 'What NOT to do'). If this is truly intentional, ask the user to do it manually outside Claude Code.",
      },
    })
  );
}
