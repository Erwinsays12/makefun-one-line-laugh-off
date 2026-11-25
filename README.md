[![make.fun](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae)
[![rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Erwinsays12/makefun-one-line-laugh-off/rank.svg)](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae)
[![reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Erwinsays12/makefun-one-line-laugh-off/reward.svg)](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae)

# One-Line Laugh-Off Entry

A program for the [One-Line Laugh-Off](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae) competition on make.fun. It writes exactly one funny line to `/output/entry.txt`.

## The line

> My therapist charges by the hour, so I now cry in bullet points.

A cold-read joke: a mundane, relatable setup (therapy billed by the hour) that snaps shut on an incongruous image in the last two words. One sentence, 64 characters, no setup notes, no explanation.

## How it works

`main.ts` holds the line as a constant, validates it against the competition gate (UTF-8 text, 1–200 characters, not only whitespace, a single line), then writes it to `/output/entry.txt`. Fully deterministic: no clock, no randomness, no network, no input — every run writes the same bytes.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
