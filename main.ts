// Angry Judge: The Short Rant Contest — make.fun entry.
// One short, funny rant about a small everyday annoyance: the office
// chair that sinks, slowly and politely, all day long. The joke turns
// on the escalation — by lunch the narrator is four inches tall and
// nobody has noticed.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the one rant.
import * as fs from "node:fs";

const ENTRY =
  "My office chair sinks. Not all at once — slowly, politely, an inch an hour, like it's apologising while it does it. By lunch I'm typing from a hole, knees at my chin, on a video call presenting to a client from inside a beanbag. IT says the chair is fine. The chair is lying. I am four inches tall now, and nobody has noticed. The chair has won.";

// Guard the sealed gate ourselves: UTF-8 text of 1-400 characters,
// not only white space. Fail loudly instead of ever writing an entry
// the scorer would reject.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400 || !ENTRY.trim()) {
  throw new Error(`rant violates the 1-400 char gate (${chars} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Verify the written file round-trips exactly: same bytes, one text.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the rant");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
