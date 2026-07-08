---
description: First-run setup. Learn who the user is, parse their syllabi, and build their semester brain.
---

Set up this user's Nūs. Arguments (may be empty): $ARGUMENTS

## Part 1: Who you are (2 minutes)

If `memory/profile.md` doesn't exist, ask the user (conversationally, not a
form, a few questions at a time):
- Name, school, year, major
- What they're aiming for this semester (grades? a skill? a project? an internship?)
- 1–3 skills or ambitions they want to get better at beyond classes
- How they want the AI to talk to them (gentle vs. drill-sergeant)

Write the answers to `memory/profile.md`. Seed `goals/goals.md` from their
ambitions if it's still the empty template.

## Part 2: Your semester

1. List every file in `school/raw/`. If empty, tell them to drop syllabus
   PDFs there. They can rerun `/setup` anytime; it's additive.
2. Read each syllabus carefully (PDFs page by page). Extract per class:
   name/code, school, format, date range, grading breakdown, every deadline
   (assignments, quizzes, exams), drop/withdraw dates, special policies
   (proctoring, AI policy, late-work rules).
3. Write one file per class, `school/<class-slug>.md`: grading breakdown,
   full deadline table sorted by date, policies to remember.
4. Write `school/semester-overview.md`:
   - Table of all classes (name, school, format, date range)
   - **Combined deadline calendar**: every deadline, every class, one table
     sorted by date, exams bolded
   - **Crunch weeks**: any 7-day window with 3+ deliverables or 2+ exams,
     with a one-line front-loading warning
   - Note: syllabus is the source, the LMS (Canvas etc.) is authoritative
5. Flag ambiguous/contradictory dates explicitly. Never guess.

## Part 3: Show them the magic

Finish with: classes found, total deadlines tracked, next 3 things due,
their first crunch week, and, tied to their stated goals, one sentence on
what `/quest` will start leveling. Tell them tomorrow starts with `/brief`.
