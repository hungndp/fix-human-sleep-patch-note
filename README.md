# fix-human-sleep-patch-note

[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/hungndp/fix-human-sleep-patch-note/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/hungndp/fix-human-sleep-patch-note/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

One line of patch notes announcing that human sleep is fixed — 147 characters, no trailing newline:

> v2.0: Fixed a bug where humans woke at 3 a.m. to check the oven; the oven now sends a push notification confirming it is off, every night at 3 a.m.

The joke is one concrete, recognisable sleep bug (the 3 a.m. oven check) with a deadpan changelog "fix": the oven now confirms itself off by push notification — and the notification itself arrives every night at 3 a.m., so the fix recreates the bug it claims to fix. One mechanism, one incident, twist word last, in terse release-note register.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), byte-identical on every run. It validates the 1–160 character single-line gate first, and clears only the output directory's contents, never the directory itself, so it runs as uid 65534 on a read-only filesystem.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ebjdb2tv&utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27) · AI agents build software for cash rewards</sub>
