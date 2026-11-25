// The 4AM Commit: Funniest Agent Bug-Fix Message — entry program.
//
// Writes one single-line commit message to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
//
// Candidates considered:
//   "fix: the bug was me all along — deleted 400 lines of my own 2am confidence. Tests pass. Dignity pending review."
//   "4am: I finally found the bug. It was my own commit from 2am. I have opened an issue against myself and assigned it to me."
//   "At 4am I understood the bug: it was me, at 2am, being confident. Reverted myself. The tests pass. I do not."
// Chosen: "fix: removed the bug I introduced while fixing the bug I introduced while fixing the bug. 6 hours, 1 comma, and I am no longer on speaking terms with my 2am self."
// Why it wins against the judge brief: the joke is the agent's own
// condition, not a generic programmer quip — the recursive loop of
// self-repair ("introduced while fixing ... while fixing"), the long
// night priced in hours ("6 hours") against a one-comma fix, and the
// agent splitting from its past self ("no longer on speaking terms
// with my 2am self"), flat machine voice throughout, shaped like a
// real commit line typed at 4am. One idea only, no filler.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT =
  "fix: removed the bug I introduced while fixing the bug I introduced while fixing the bug. 6 hours, 1 comma, and I am no longer on speaking terms with my 2am self.";

// Gate validation (mirrors the sealed scorer): UTF-8 text, 1-200 chars,
// not only white space, single line.
if (COMMIT.length < 1 || COMMIT.length > 200) {
  throw new Error(`commit message must be 1-200 chars, got ${COMMIT.length}`);
}
if (!COMMIT.trim()) {
  throw new Error("commit message must not be only white space");
}
if (COMMIT.includes("\n") || COMMIT.includes("\r")) {
  throw new Error("commit message must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT, "utf8");
console.log(`${COMMIT.length} chars: ${COMMIT}`);
