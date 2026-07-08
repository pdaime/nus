---
description: Start leveling a skill. Builds a progression path (Lv1→Lv10) with daily reps that feed into /quest. Miyagi mode.
---

Start (or check) a skill track: $ARGUMENTS

## If $ARGUMENTS names a skill (e.g. "/level public speaking", "/level java")

1. Read `memory/profile.md` and `goals/goals.md` for context on why they
   want this and their starting point. Ask 1–2 sharp questions if the
   starting level or the goal is unclear (what does "good at X" look like
   for them, by when?).
2. Write `skills/<skill-slug>.md`:
   - **Definition of done:** what Level 10 concretely means for THEM
   - **Level path:** Levels 1–10, each with a name, a concrete bar to clear,
     and the kind of daily rep that gets there (reps must be 20–45 min,
     binary pass/fail, same rules as quests)
   - **Current level** and a progress log section
3. Design it Miyagi-style: early levels should feel almost too easy. The
   point is reps woven into normal days, not heroics. Difficulty compounds
   quietly.
4. Show them Level 1 and today's first rep. Tell them it now feeds
   `/quest` (Quest 3 slot) automatically.

## If $ARGUMENTS is empty

Read `skills/` and show each track: level, streak of reps, next bar to
clear. If no tracks exist, suggest 2–3 based on their profile and goals,
and ask which one to start.
