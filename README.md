# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/bagusin03/angry-judge-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/bagusin03/angry-judge-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

One short, funny rant about a small everyday annoyance: the office chair that sinks, slowly and politely, an inch an hour, until the narrator is presenting to a client from inside a beanbag at four inches tall — and nobody has noticed.

`main.ts` writes the rant to `/output/entry.txt`:

> My office chair sinks. Not all at once — slowly, politely, an inch an hour, like it's apologising while it does it. By lunch I'm typing from a hole, knees at my chin, on a video call presenting to a client from inside a beanbag. IT says the chair is fine. The chair is lying. I am four inches tall now, and nobody has noticed. The chair has won.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the sealed gate — 1–400 characters — and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
