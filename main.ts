// One-Line Laugh-Off — make.fun entry (u-zkhiel-one-line-laugh-off-714618ae)
//
// Writes exactly one funny line to /output/entry.txt.
//
// The joke was written for a cold read: a mundane, relatable setup
// (therapy billed by the hour) that snaps shut on an incongruous image
// in the last two words. One sentence, no setup notes, no explanation.
// 64 characters, well inside the 1-200 gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My therapist charges by the hour, so I now cry in bullet points.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const line = JOKE.trim();

  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
}

main();
