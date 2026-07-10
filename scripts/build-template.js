#!/usr/bin/env node
// Builds template/ from the kit files at the repo root, so the published
// package can never drift from the repo. Runs automatically via `prepack`.
// npm strips .gitignore files from packages at any depth, so the template
// ships it as `gitignore` and the CLI renames it back on scaffold.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "template");

// [source (repo-relative), destination (template-relative)]
const FILES = [
  ["CLAUDE.md", "CLAUDE.md"],
  ["README.md", "README.md"],
  ["LICENSE", "LICENSE"],
  [".gitignore", "gitignore"],
  ["goals/goals.example.md", "goals/goals.example.md"],
  ["school/raw/DROP-SYLLABI-HERE.md", "school/raw/DROP-SYLLABI-HERE.md"],
  [".claude/commands/brief.md", ".claude/commands/brief.md"],
  [".claude/commands/capture.md", ".claude/commands/capture.md"],
  [".claude/commands/due.md", ".claude/commands/due.md"],
  [".claude/commands/level.md", ".claude/commands/level.md"],
  [".claude/commands/quest.md", ".claude/commands/quest.md"],
  [".claude/commands/setup.md", ".claude/commands/setup.md"],
];

fs.rmSync(out, { recursive: true, force: true });

for (const [src, dest] of FILES) {
  const from = path.join(root, src);
  if (!fs.existsSync(from)) {
    console.error(`build-template: missing kit file: ${src}`);
    process.exit(1);
  }
  const to = path.join(out, dest);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

console.log(`build-template: ${FILES.length} files -> template/`);
