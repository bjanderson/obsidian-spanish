#!/usr/bin/env node
// PreToolUse hook (Write|Edit matcher). Blocks vault notes from linking to todo/.
// Enforces CLAUDE.md: todo/ is internal tracking, never linked from vault content.
const fs = require("fs");

let data;
try {
  data = JSON.parse(fs.readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}

const filePath = (data.tool_input && data.tool_input.file_path) || "";
if (!filePath.endsWith(".md")) process.exit(0);

// Skip Claude config files and the todo/ folder itself — links are fine there.
if (/[\\/]\.claude[\\/]/.test(filePath)) process.exit(0);
if (/[\\/]todo[\\/]/i.test(filePath) || /^todo[\\/]/i.test(filePath)) process.exit(0);

const content =
  (data.tool_input && (data.tool_input.content || data.tool_input.new_string)) || "";

// Matches [[todo/..., [[./todo/..., ](todo/..., ](../todo/..., etc. — real link
// syntax pointing into the folder, not incidental use of the common Spanish word "todo".
const linkPattern = /(\[\[|\]\()\s*(\.{1,2}\/)?todo\//i;

if (linkPattern.test(content)) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason:
          "The todo/ folder must not be linked from vault content (see CLAUDE.md) — it's internal project tracking, referenced only from Claude config docs (CLAUDE.md, skills, rules, agents), never from lessons, MOCs, or Welcome.md.",
      },
    })
  );
}
