#!/usr/bin/env node
// PreToolUse hook (Write|Edit matcher). Blocks creating a lesson/flashcard file whose
// CEFR code is already used by a different topic in the same folder.
// Enforces CLAUDE.md "Numbering rule: never reuse an existing CEFR code."
const fs = require("fs");
const path = require("path");

let data;
try {
  data = JSON.parse(fs.readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}

const filePath = (data.tool_input && data.tool_input.file_path) || "";
if (!/[\\/](01 Lessons|04 Flashcards)[\\/]/.test(filePath)) process.exit(0);

const base = path.basename(filePath);
const m = base.match(/^([A-C][12](?:\.\d+){3}) (.+)\.md$/);
if (!m) process.exit(0);

const dir = path.dirname(filePath);
const code = m[1];

let entries = [];
try {
  entries = fs.readdirSync(dir);
} catch {
  process.exit(0);
}

const codePrefix = new RegExp("^" + code.replace(/\./g, "\\.") + " ");
const collision = entries.find((f) => f !== base && codePrefix.test(f));

if (collision) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: `CEFR code ${code} is already used by "${collision}" in this folder. Lesson codes must never be reused — pick the correct unused code from CEFR/CEFR-Outline.md.`,
      },
    })
  );
}
