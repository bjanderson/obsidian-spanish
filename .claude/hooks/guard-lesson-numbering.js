#!/usr/bin/env node
// PreToolUse hook (Write|Edit matcher). Blocks creating a lesson/flashcard file whose
// NNN prefix is already used by a different topic in the same directory.
// Enforces CLAUDE.md "Numbering rule: never reuse an existing number."
const fs = require("fs");
const path = require("path");

let data;
try {
  data = JSON.parse(fs.readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}

const filePath = (data.tool_input && data.tool_input.file_path) || "";
const m = filePath.match(/[\\/](01 Lessons|04 Flashcards)[\\/](\d{3}) (.+)\.md$/);
if (!m) process.exit(0);

const dir = path.dirname(filePath);
const number = m[2];
const base = path.basename(filePath);

let entries = [];
try {
  entries = fs.readdirSync(dir);
} catch {
  process.exit(0);
}

const numberPrefix = new RegExp("^" + number + " ");
const collision = entries.find((f) => f !== base && numberPrefix.test(f));

if (collision) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: `Lesson/flashcard number ${number} is already used by "${collision}" in this directory. Lesson numbers must never be reused — pick the next unused number.`,
      },
    })
  );
}
