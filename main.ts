// Fix Human Sleep: Funniest Patch Note — make.fun entry (@mmo4me).
//
// One line of patch notes (147 characters, no trailing newline): the 3 a.m.
// oven check, "fixed" by a push notification that itself arrives at 3 a.m.
// — the fix recreates the bug. One mechanism, one incident, twist word last.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "v2.0: Fixed a bug where humans woke at 3 a.m. to check the oven; the oven now sends a push notification confirming it is off, every night at 3 a.m.";

// The grader runs as uid 65534 on a read-only filesystem with /output
// writable but its parent not writable: never delete the output directory
// itself — create it, then clear only its contents.
function clearOutputDir(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }
}

function entryText(): string {
  return TEXT;
}

// The gate accepts UTF-8 text of 1 to 160 characters, not only whitespace,
// on a single line. Fail loudly here instead of shipping an invalid entry.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${text.length}`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const text = entryText();
  validateEntry(text);
  clearOutputDir(outDir);
  writeFileSync(join(outDir, "entry.txt"), text, "utf-8");
}

main();
