# Spanish Course Curriculum: Beginner to Expert (A1 → C2)

This is the master lesson plan for the whole vault, built by combining three sources:

1. **[`CEFR/CEFR-Outline.md`](CEFR/CEFR-Outline.md)** — the authoritative list of every lesson code, topic, and title. This document does not change that outline; it sequences it, sources it, and schedules it.
2. **[`CEFR/CEFR-YouTube-Channels.md`](CEFR/CEFR-YouTube-Channels.md)** — the approved channel list, mapped here to every individual lesson rather than just a per-level bucket.
3. **`Qroo/beginner-course/`** — Qroo Paul's raw course transcripts/summaries, indexed here file-by-file against the CEFR code(s) they can seed. Spain-specific forms (*vosotros*, etc.) must still be stripped per `.claude/rules/spanish-language.md` when drafting from these files.

Use this document to decide **what lesson to build next** and **where to pull source material from**. Use the `new-lesson` skill to actually build it — this file is the plan, not a replacement for the skill's workflow.

---

## How to Read the Tables

Each row is one lesson file (one CEFR leaf code = one file in `01 Lessons/`). Columns:

- **Code / Topic** — from `CEFR-Outline.md`, verbatim.
- **Formula Channel(s)** — the grammar/pattern channel(s) to check first for this lesson's video.
- **Immersion Channel(s)** — a listening/conversation channel to pair with it, once the grammar point is understood.
- **Qroo Source** — specific file(s) in `Qroo/beginner-course/` that already cover this topic and can seed the lesson draft. `—` means no Qroo material exists for this point; draft from the channel video and general knowledge instead.
- **Status** — ✅ built, otherwise blank (planned).

### Channel Key

| Abbrev. | Channel | Range |
|---|---|---|
| QP | Spanish With Qroo Paul | A1–B2 |
| SD | The Spanish Dude | A1–B1 |
| LT | The Language Tutor | A1–B1 |
| LTr | Language Transfer | A1–B1 |
| PS | Pro Spanish | A1–B1 |
| BF | Butterfly Spanish | A1–B2 |
| SL | Spanishland School | B1–C1 |
| LE | Latin ELE | A2–C1 |
| WNS | Why Not Spanish? | A2–B2 |
| ES | Easy Spanish | A2–C2 |
| SG | Spanish and Go | A1–B2 |
| DS | Dreaming Spanish | A1–C2 |
| SP101 | SpanishPod101 | A1–B1 |

---

## Methodology

Every lesson still goes through the `new-lesson` skill: numbering check → template → video search (must come from the Channel Key above, matched to the lesson's level) → body → practice PDF → conversational-sentences file (`05 Conversations/`) → MOC link → `spanish-style-reviewer` → flashcards generated and synced to Anki. This curriculum only pre-answers two of that skill's steps — which channel to search first, and whether a Qroo file exists to draft from — so lesson creation goes faster and stays consistent.

Two source tiers, by level:

- **A1–B1**: Qroo's course is dense here (64 numbered lessons, mostly A1.3–B1.4). Where a Qroo file is listed, treat it as the primary draft source, stripped of Spain-specific forms, and confirmed against a formula-channel video.
- **B2–C2**: Qroo material thins out fast (a handful of files touch B2/C1 edges; nothing touches C2). These levels lean on the channels — especially **Easy Spanish** and **Dreaming Spanish (Advanced)** for native-speed immersion, and **Spanishland School** for the last of the formula-driven grammar. Past C1, no channel on the approved list teaches literary/archaic Spanish or true native sociolinguistic range (C2.1–C2.2) — flag those lessons for drafting from grammar references and authentic native text/media, with channels used only for accent/register calibration.

Flashcards are now generated and pushed to Anki as the last step of `new-lesson` itself, right after `spanish-style-reviewer` — not a separate later action. `add-flashcards` still exists standalone for regenerating cards if a lesson's content changes after the fact.

---

## Current Progress

1 of roughly 172 planned lessons exists:

- ✅ A1.1.1.1 The Spanish Alphabet

The previous three lessons in this subsection (Pure Vowel Sounds, Key Consonant Differences, Accent Marks) were deleted and are planned again, unbuilt, at their new codes A1.1.1.2–A1.1.1.4 below. Everything else in this document is planned, not built.

---

## Suggested Pacing

A full A1→C2 progression, self-paced, roughly:

| Level | Leaf lessons | Suggested pace | Rough duration |
|---|---|---|---|
| A1 | ~46 | 3–4 lessons/week | ~3 months |
| A2 | ~36 | 3 lessons/week | ~3 months |
| B1 | ~32 | 2–3 lessons/week | ~3.5 months |
| B2 | ~25 | 2 lessons/week | ~3 months |
| C1 | ~18 | 1–2 lessons/week (heavier immersion load per lesson) | ~3 months |
| C2 | ~12 | 1 lesson/week + sustained native immersion outside the vault | ~3+ months |

Total: roughly 17–19 months of steady study to nominal C2 exposure — longer in practice, since C1–C2 fluency is bounded by immersion hours, not lesson count. Treat the pace table as a planning default, not a commitment; adjust freely.

---

## A1 — Breakthrough / Absolute Beginner

Formula default: **LT, PS, LTr**. Immersion default: **BF, DS, SP101**.

### A1.1 Phonetics, Pronunciation & Orthography

Qroo has no phonetics material — this whole subsection drafts from channel videos plus general phonetics knowledge.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A1.1.1.1 | The Spanish Alphabet (*El Abecedario*) — Letter Names, Ñ | LT, SP101 | BF | — | ✅ |
| A1.1.1.2 | Pure Vowel Sounds (A, E, I, O, U) | LT, LTr | BF, DS | — | |
| A1.1.1.3 | Key Consonant Differences (C, Z, G, J, H, R, RR, Ñ) | LT, BF | DS | — | |
| A1.1.1.4 | Accent Marks (*Tildes*) for Stress and Meaning | LT | SP101 | — | |
| A1.1.2.1 | Natural Stress Rules | LT | DS | — | |
| A1.1.2.2 | Diphthongs (*Diptongos*) and Hiatus (*Hiatos*) | LT | DS | — | |
| A1.1.2.3 | Pitch and Cadence in Statements vs. Questions | BF | DS, ES | — | |
| A1.1.3.1 | Inverted Punctuation Marks (¿? and ¡!) | LT | SP101 | — | |
| A1.1.3.2 | Capitalization Rules (Days, Months, Languages, Titles) | LT | SP101 | — | |

### A1.2 Nouns, Adjectives & Articles

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A1.2.1.1 | Standard Gender Endings (-o vs. -a) | LT, PS | BF | — | |
| A1.2.1.2 | Common Gender Exceptions (*el problema, la mano*) | LT | BF | — | |
| A1.2.1.3 | Pluralization Rules (-s vs. -es) | LT | BF | — | |
| A1.2.2.1 | Definite Articles (*el, la, los, las*) | LT, PS | BF | `Summary-21.md` (advanced usage notes — use for context, not the beginner core) | |
| A1.2.2.2 | Indefinite Articles (*un, una, unos, unas*) | LT, PS | BF | — | |
| A1.2.2.3 | Basic Article Omission (professions after *ser*) | LT | BF | — | |
| A1.2.3.1 | Gender and Number Agreement | LT, PS | BF | `Summary-28.md` (colors as agreement practice) | |
| A1.2.3.2 | Standard Noun-First Adjective Placement | LT | BF | — | |
| A1.2.3.3 | Common Invariable Adjectives (*verde, azul, grande*) | LT | BF | `Summary-28.md` (*naranja, café* exceptions) | |

### A1.3 Essential Verbs & Present Indicative

Qroo's densest early stretch — most of Master Course Lessons 1–14 land here.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A1.3.1.1 | Conjugation of *Ser* in Present Indicative | LT, SD | BF | `Summary-13a.md`, `exercise-13.md` | |
| A1.3.1.2 | Core Uses: Identity, Nationality, Profession, Traits | LT, SD | BF | `Summary-13a.md` | |
| A1.3.2.1 | Conjugation of *Estar* in Present Indicative | LT, SD | BF | `summary12.md`, `Exercise12.md` | |
| A1.3.2.2 | Core Uses: Location, Temporary States | LT, SD | BF | `summary12.md`, `9-summary.md` (*hay* vs *estar* vs prepositions of place) | |
| A1.3.3.1 | -AR Conjugation Endings | LT, PS | BF, SP101 | `present-tense-guide.md`, `Summary-31.md` | |
| A1.3.3.2 | -ER Conjugation Endings | LT, PS | BF, SP101 | `present-tense-guide.md` | |
| A1.3.3.3 | -IR Conjugation Endings | LT, PS | BF, SP101 | `present-tense-guide.md` | |
| A1.3.4.1 | Stem-Changers (e➔ie, o➔ue, e➔i) | SD, QP | BF | `master3summary.md` (*querer*), `master-4-summary.md`/`master4-exercise.md` (*poder*) | |
| A1.3.4.2 | "Yo-GO" Irregular Verbs (*tengo, hago, pongo, salgo*) | QP | BF | `master-5-summary.md`/`master5-exercise.md` (*tener*), `Poner-Summary.md` | |
| A1.3.4.3 | Irregular Auxiliary *Tener* and Irregular *Ir* | QP | BF | `master-6-summary.md`, `master-lesson-6-part-two.md` | |
| A1.3.5.1 | Short-Form Possessives (*mi, tu, su, nuestro*) | LT | BF | `Summary-19.md`/`Exercise-19.md` | |
| A1.3.5.2 | Demonstrative Adjectives by Distance (*este, ese, aquel*) | LT | BF | `master-10.md`/`10-exercise.md` | |

### A1.4 Pronouns & Sentence Structure

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A1.4.1.1 | Subject Pronouns | LT, LTr | BF | `master3summary.md` (tú vs. usted intro) | |
| A1.4.1.2 | Subject Pronoun Omission (pro-drop) | LTr | BF | — | |
| A1.4.2.1 | Core Question Words (*Qué, Quién, Dónde...*) | LT, QP | SP101 | — | |
| A1.4.2.2 | Word Order in Questions (Subject-Verb Inversion) | LT | SP101 | `summary-60a.md` | |
| A1.4.2.3 | *Qué* vs. *Cuál* Distinction | QP | SP101 | `34-Summary.md`/`Lesson-34-exercise-revised-472026.md` | |
| A1.4.3.1 | Simple Negation using *No* | LT | BF | — | |
| A1.4.3.2 | Double Negatives (*No... nada/nadie/nunca*) | LT | BF | — | |

### A1.5 Functional Vocabulary & Survival Expressions

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A1.5.1.1 | Time-of-Day Greetings and Farewells | SP101 | SG, BF | `Summary-36.md` (*qué tal*, partial) | |
| A1.5.1.2 | Self-Introductions and Asking Names | SP101 | SG, BF | — | |
| A1.5.1.3 | Pragmatics of *Tú* vs. *Usted* | QP | SG | `master3summary.md` (partial) | |
| A1.5.2.1 | Cardinal Numbers (0–100+) | SP101 | SG | `summary-22.md`/`Exercise-22... ` | |
| A1.5.2.2 | Calendar Vocabulary (Days, Months, Dates) | SP101 | SG | `summary-22.md` | |
| A1.5.2.3 | Time Expressions (*¿Qué hora es?*) | SP101 | SG | `summary-22.md`; `Summary-23.md` (*hace/desde/desde hace* — more advanced, hold for A1.5.2.3 extension or reuse at B1) | |
| A1.5.3.1 | Expressing Basic Needs (*Necesito..., Quiero...*) | QP | SG | `9-summary.md` (*hay*), `master3summary.md`/`master-4-summary.md` (*quiero/puedo* adjacent) | |
| A1.5.3.2 | Ordering Food, Asking for the Check | SP101 | SG | — | |
| A1.5.3.3 | Simple Directional Vocabulary | SP101 | SG | — | |

---

## A2 — Waystage / Elementary

Formula default: **QP, SD, LT**. Immersion default: **WNS, SG, SP101**.

### A2.1 Past Tenses (Foundations)

Qroo's "Deep Dive" mini-series (separate from the numbered Master Course) targets this section directly.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A2.1.1.1 | -AR Preterite Conjugation Patterns | QP, SD | WNS | `preterit-tense-Conjugations.md`, `Summary-39.md`/`Lesson-39-Exercise.md` | |
| A2.1.1.2 | -ER and -IR Preterite Conjugation Patterns | QP, SD | WNS | `preterit-tense-Conjugations.md`, `Summary-39.md` | |
| A2.1.1.3 | Time Markers for Preterite (*ayer, anoche...*) | QP | WNS | `Summary-39.md` | |
| A2.1.2.1 | Total Irregulars (*ser/ir, dar, ver*) | QP | WNS | `IR-Preterit.md` | |
| A2.1.2.2 | Root-Changing Irregulars (*hacer, tener, estar...*) | QP | WNS | `Summary-39.md` (partial coverage — verify against video) | |
| A2.1.2.3 | Orthographic Preterite Changes (-car, -gar, -zar) | QP | WNS | `Summary-39.md` (partial — confirm against video) | |
| A2.1.3.1 | Regular -aba and -ía Endings | QP, SD | WNS | `imperfect-tense-conjugation.md`, `Summary-40.md` | |
| A2.1.3.2 | The Three Irregular Imperfect Verbs (*ser, ir, ver*) | QP | WNS | `imperfect-tense-conjugation.md`, `Summary-40.md` | |
| A2.1.3.3 | Uses: Habits, Routines, Descriptions, Age | QP | WNS | `Summary-40.md` | |
| A2.1.3.4 | Habitual Aspect with *Soler* (Present & Imperfect + Infinitive) | QP | WNS | `summary-64.md` | |
| A2.1.4.1 | Completed Actions vs. Background States | QP, SD | LE, WNS | `Deep-3-Summary-(1).md`, `DD-exercise-3-rev492026.md`, `Exercise-Preterite-and-Imperfect.md` | |
| A2.1.4.2 | Interrupted Actions (Imperfect + *cuando* + Preterite) | QP, SD | LE, WNS | `Deep-3-Summary-(1).md`, `DD-exercise-3-rev492026.md` | |

### A2.2 Object Pronouns & Reflexive Verbs

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A2.2.1.1 | Form and Identification of Direct Objects | QP | WNS | `summary-15.md`/`15-exercise.md` | |
| A2.2.1.2 | Placement before Conjugated Verbs | QP | WNS | `summary-15.md` | |
| A2.2.2.1 | Form and Identification of Indirect Objects | QP | WNS | `Redundant-LE.md` | |
| A2.2.2.2 | Mandatory Redundant IO Usage (*Le digo a Juan*) | QP | WNS | `Redundant-LE.md`, `Redundant-LE-Exercise2.md` | |
| A2.2.3.1 | Reflexive Pronouns (*me, te, se, nos, se*) | QP | WNS | `Lesson-19-Pronominal-Verbs.md`, `Summary-25.md`/`Exercise-25...` | |
| A2.2.3.2 | Common Daily Routine Verbs (*despertarse, ducharse...*) | QP | WNS, SG | `Lesson-19-Pronominal-Verbs.md` | |
| A2.2.3.3 | Non-Reflexive vs. Reflexive Meaning Shifts | QP | WNS | `Summary-25.md`, `summary-26.md`/`Lesson-26-Exercise.md` | |

### A2.3 Verbal Periphrasis, Modals & Future Intentions

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A2.3.1.1 | Conjugating *Ir + a* + Base Verb | QP | SG | `Summary-8.md` | |
| A2.3.1.2 | Time Expressions for Future Planning | QP | SG | `Summary-8.md` | |
| A2.3.2.1 | Forming the Gerund (-ando, -iendo) | QP | WNS | `Summary-32.md`, `master-present-progressive-exercise.md`, `ejercicio-gerundio.md` | |
| A2.3.2.2 | Irregular Gerunds (*durmiendo, leyendo, diciendo*) | QP | WNS | `Summary-33.md` | |
| A2.3.3.1 | Personal Obligation (*Tener que, Deber*) | QP | WNS | `master-5-summary.md`; `Summary-52.md` (*deber* tense nuance — advanced, reuse later) | |
| A2.3.3.2 | Impersonal Obligation (*Hay que*) | QP | WNS | `Summary-29.md` (*hay que* section) | |
| A2.3.3.3 | Physical and Circumstantial Ability (*Poder*) | QP | WNS | `master-4-summary.md`/`master4-exercise.md` | |
| A2.3.4.1 | *Gustar* Mechanics (*Me gusta* vs. *Me gustan*) | QP, SD | WNS | `summary16a.md` | |
| A2.3.4.2 | Other Indirect Verbs (*encantar, doler, importar*) | QP | WNS | `summary-17.md` | |
| A2.3.5.1 | Regular Future Endings (-é, -ás, -á, -emos, -án) | QP, SD | WNS | `future-tense.md`, `Summary-37.md`/`Lesson-37-Exercise.md` | |
| A2.3.5.2 | Irregular Future Stems (*tendr-, pondr-, har-...*) | QP, SD | WNS | `future-tense.md`, `Summary-37.md` | |
| A2.3.5.3 | Future for Speculation and Probability (*¿Será...?*) | QP | WNS | `Summary-53.md` | |

### A2.4 Practical Vocabulary & Situational Usage

Thin on Qroo source — mostly channel/immersion-driven vocabulary lessons.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| A2.4.1.1 | Extended Family and Relations Vocabulary | SP101 | SG, WNS | — | |
| A2.4.1.2 | Housing Types, Rooms, Domestic Items | SP101 | SG | `vocabrooms.md` | |
| A2.4.1.3 | Comparative Adjectives (*más... que...*) | QP | WNS | `Summary-55.md` (*tan/tanto/mucho/demasiado* — advanced overlap, use selectively) | |
| A2.4.2.1 | Occupations and Workplace Contexts | SP101 | SG | — | |
| A2.4.2.2 | Expressing Weather | SP101 | SG | `master-24.md` (heat/cold/spicy *tener* idioms, partial) | |
| A2.4.3.1 | Modes of Transit and Purchasing Tickets | SP101 | SG | — | |
| A2.4.3.2 | Hotel Reservations and Travel Logistics | SP101 | SG | — | |
| A2.4.3.3 | Emergency Vocabulary | SP101 | SG | — | |

---

## B1 — Threshold / Intermediate

Formula default: **SL, QP, SD**. Immersion default: **LE, WNS**. This is where Qroo's Subjunctive Trigger mini-series (Lessons 46–59-ish) becomes the backbone of B1.2.

### B1.1 Advanced Past Tenses & Aspect Mastery

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B1.1.1.1 | Verbs that Change Meaning (*conocer, saber, querer*) | QP, SL | LE | `saber-summary2.md`, `saber-como.md`, `saber-conocer-exercise.md`, `DD-exercise-3-rev492026.md` (preterite meaning shifts) | |
| B1.1.1.2 | Multilayered Narrative Framing in Past Tenses | SL | LE | `Deep-3-Summary-(1).md` | |
| B1.1.2.1 | Auxiliary *Haber* Conjugation in Present | QP, SL | LE | `Summary-29.md`, `haber-exercise.md` | |
| B1.1.2.2 | Regular and Irregular Past Participles | QP, SL | LE | `Summary-29.md` (partial — participle list not exhaustive, cross-check) | |
| B1.1.2.3 | Life Experiences and Open Timeframes | SL | LE | `Summary-29.md` (partial) | |
| B1.1.3.1 | Auxiliary *Haber* in Imperfect + Past Participle | SL | LE | — | |
| B1.1.3.2 | Actions Prior to Another Past Event | SL | LE | — | |

### B1.2 Introduction to the Subjunctive Mood

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B1.2.1.1 | Fact/Reality (Indicative) vs. Subjectivity (Subjunctive) | SL, QP | LE | `parts-of-speech.md` (moods overview), `summary-46.md` | |
| B1.2.1.2 | Main Clause + *Que* + Subordinate Clause | SL, QP | LE | `summary-46.md` | |
| B1.2.2.1 | Present Subjunctive Stems from *Yo* Form | SL, QP | LE | `Present-Subjunctive-Conjugations.md` | |
| B1.2.2.2 | Opposite Vowel Ending Patterns (-AR➔-e, -ER/-IR➔-a) | SL, QP | LE | `Present-Subjunctive-Conjugations.md` | |
| B1.2.2.3 | Irregular Subjunctive Stems (DISHES) | SL, QP | LE | `Present-Subjunctive-Conjugations.md` | |
| B1.2.3.1 | Verbs of Desire and Will (*Querer que, Esperar que*) | QP, SL | LE | `summary-47.md`/`Lesson-46-Exercises.md`/`Lesson-47...` | |
| B1.2.3.2 | Requests and Recommendations (*Pedir que...*) | QP, SL | LE | `summary-47.md` (partial) | |
| B1.2.4.1 | Expressions of Emotion (*Me alegra que...*) | QP, SL | LE | `Summary-49.md` (*ojalá*, adjacent) | |
| B1.2.4.2 | Doubt/Denial vs. Certainty (*Dudo que* vs. *Creo que*) | QP, SL | LE | `Summary-50.md` (indefinite-antecedent subjunctive, adjacent trigger) | |
| B1.2.4.3 | Impersonal Phrases (*Es importante que...*) | QP, SL | LE | `Summary-48.md` (*para que* + subjunctive — closely related trigger) | |

### B1.3 Conditional & Imperative Moods

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B1.3.1.1 | Regular Conditional Endings (-ía, -ías...) | QP, SD | LE | `Conditional-Conjugations.md`, `Summary-would.md` | |
| B1.3.1.2 | Irregular Conditional Stems (*tendr-, pondr-, har-*) | QP, SD | LE | `Conditional-Conjugations.md` | |
| B1.3.1.3 | Uses: Politeness, Advice, Hypotheticals | QP | LE | `Summary-would.md` | |
| B1.3.2.1 | Informal Affirmative *Tú* Commands | QP | LE | `Summary-38.md`, `guide-to-imperative.md`, `Lesson-38-Exercise.md` | |
| B1.3.2.2 | Irregular *Tú* Commands (*ven, di, sal, haz...*) | QP | LE | `guide-to-imperative.md` | |
| B1.3.2.3 | Formal *Usted/Ustedes* Commands | QP | LE | `guide-to-imperative.md` | |
| B1.3.3.1 | Negative *Tú* Commands | QP | LE | `guide-to-imperative.md` | |
| B1.3.3.2 | Negative Formal Commands | QP | LE | `guide-to-imperative.md` | |
| B1.3.3.3 | Pronoun Attachment Rules | QP | LE | `guide-to-imperative.md` | |

### B1.4 Pronoun Placement & Syntax Expansion

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B1.4.1.1 | Order of Pronouns (Indirect before Direct: "ID") | QP, SD | LE | `master-18-summary-rev-72125.md` | |
| B1.4.1.2 | Converting *Le/Les* to *Se* before *Lo/La/Los/Las* | QP, SD | LE | `master-18-summary-rev-72125.md` | |
| B1.4.1.3 | Placement with Verbs, Infinitives, Gerunds, Commands | QP, SD | LE | `master-18-summary-rev-72125.md` | |
| B1.4.2.1 | *Por* vs. *Para* Core Contrast | SD, QP | LE | `Summary-30.md` | |
| B1.4.2.2 | Personal *A* Rule for Direct Human Objects | SD, QP | LE | `Summary-20.md` | |
| B1.4.2.3 | Prepositional Pronouns (*mí, ti, conmigo, contigo*) | SD | LE | — | |
| B1.4.3.1 | Additive/Contrastive Connectors (*Sin embargo, Aunque*) | SL | LE | — | |
| B1.4.3.2 | Causal/Consequential Connectors (*Por lo tanto, Ya que*) | SL | LE | — | |
| B1.4.4.1 | *Que* as the All-Purpose Relative Pronoun | SL, QP | LE | `Summary-42.md` | |
| B1.4.4.2 | *Quien/Quienes* for People after Prepositions | SL, QP | LE | `Summary-42.md` (partial) | |
| B1.4.4.3 | *Donde, Como, Cuando* as Relative Adverbs | SL, QP | LE | `Summary-42.md` (partial) | |

---

## B2 — Vantage / Upper-Intermediate

Formula default: **SL, QP** (QP tapers off after B1 — confirm each video is still B2-appropriate before using it). Immersion default: **LE, ES**. Qroo coverage drops sharply here; most lessons draft from channel + general grammar reference.

### B2.1 Advanced Subjunctive & Hypothetical Structures

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B2.1.1.1 | Imperfect Subjunctive Conjugation (-ra/-ras/-ra) | SL | LE | `Summary-49.md`, `Summary-51.md` (partial — trigger context, not full paradigm) | |
| B2.1.1.2 | Past Subjunctive Triggers | SL | LE | `Summary-49.md` (*ojalá*), `Summary-51.md` (*cuando/en cuanto/una vez que* time-clause triggers) | |
| B2.1.1.3 | Polite Requests using *Quisiera*/*Pudiera* | SL | LE | `Summary-would.md` (partial) | |
| B2.1.2.1 | Auxiliary *Haber* in Present Subjunctive | SL | LE | — | |
| B2.1.2.2 | Subjunctive Evaluation of Completed Past Actions | SL | LE | — | |
| B2.1.3.1 | Auxiliary *Haber* in Imperfect Subjunctive | SL | LE | — | |
| B2.1.3.2 | Unfulfilled Past Desires and Regrets | SL | LE | — | |
| B2.1.4.1 | Real/Possible Conditionals | SL | LE | — | |
| B2.1.4.2 | Unreal Present Conditionals | SL | LE | — | |
| B2.1.4.3 | Unreal Past Conditionals | SL | LE | — | |

### B2.2 Passive Voice, Impersonal Structures & 'Se' Functions

No Qroo coverage — draft entirely from channel + reference grammar.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B2.2.1.1 | Canonical Passive Voice (*Ser* + Past Participle + *por*) | SL | ES | — | |
| B2.2.1.2 | Register Appropriateness (Formal vs. Spoken) | SL | ES | — | |
| B2.2.2.1 | Passive *Se* with Inanimate Objects | SL | ES | — | |
| B2.2.2.2 | Impersonal *Se* for General Statements | SL | ES | — | |
| B2.2.3.1 | Accidental/Unintentional *Se* Structure | SL | ES | — | |
| B2.2.3.2 | Shifting Fault away from the Speaker | SL | ES | — | |

### B2.3 Discourse, Registers & Pragmatics

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B2.3.1.1 | Hesitation Fillers (*O sea, Es decir, Bueno*) | SL | ES, LE | `Summary-62.md` (*que yo sepa / que yo recuerde* — sentence-starter fillers) | |
| B2.3.1.2 | Conversation Steering and Tag Questions | SL | ES, LE | — | |
| B2.3.2.1 | Softening Demands with Conditional/Subjunctive | SL | ES | `Summary-56.md` (infinitive-after-preposition softening strategy, partial) | |
| B2.3.2.2 | Expressing Partial Agreement/Disagreement | SL | ES | — | |
| B2.3.3.1 | Tense Shifts in Past Reported Speech | SL | ES | — | |
| B2.3.3.2 | Adjusting Pronouns, Time, Spatial References | SL | ES | — | |

### B2.4 Regional Diversity & Colloquialisms

The vault's target dialect (Bolivian) concentrates here — **Latin ELE** is the specifically-called-out channel for this per `CEFR-YouTube-Channels.md`.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B2.4.1.1 | Trans-Regional Idiomatic Expressions | SL | LE | — | |
| B2.4.1.2 | Universal Colloquial Vocabulary across Latin America | SL | LE, ES | — | |
| B2.4.2.1 | Mechanics of Regional *Voseo* | — | LE | — | |
| B2.4.2.2 | Bolivian-Specific Colloquial Vocabulary | — | LE | — | |
| B2.4.2.3 | Andean/Lowland Bolivia Intonation and Phonetics | — | LE | — | |

### B2.5 The Neuter *Lo* and Its Functions

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| B2.5.1.1 | *Lo* Replacing Masculine Nouns and Ideas | SL | LE | `Summary-57.md` | |
| B2.5.1.2 | *Lo* Referring Back to Stated Adjectives/Concepts | SL | LE | `Summary-57.md` | |
| B2.5.2.1 | Forming Abstract Nouns with *Lo* + Adjective | SL | LE | `Summary-58.md` | |
| B2.5.2.2 | *Lo Que* as "What/That Which" | SL | LE | `Summary-58.md` | |
| B2.5.3.1 | *Lo* + Adjective/Adverb + *Que* for Intensification | SL | LE | `Summary-58.md` | |
| B2.5.3.2 | Common Idiomatic Uses of *Lo* | SL | LE | `Summary-58.md` | |

---

## C1 — Effective Operational Proficiency / Advanced

Formula default: **SL** (thins out through this level — expect to draft more from reference grammar as C1 progresses). Immersion default: **ES, DS (Advanced)**.

### C1.1 Complex Syntax & Relative Clauses

`C1.1.1` covers *advanced* relative pronouns, building on the basics now taught at B1.4.4. `Summary-42.md` is the source for both — it's mapped to B1.4.4 above, so treat it as a prerequisite refresher (not a direct source) when drafting C1.1.1.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| C1.1.1.1 | Restrictive vs. Non-Restrictive Clauses (*el cual...*) | SL | ES | `Summary-42.md` (basic relative pronouns — prerequisite refresher only) | |
| C1.1.1.2 | *Cuyo/Cuya* and Indefinite Relatives | SL | ES | — | |
| C1.1.2.1 | Fixed Verb-Preposition Pairs | SL | ES | `Summary-59.md` (verbs + required prepositions) | |
| C1.1.2.2 | Prepositional Verbs Triggering Subjunctive/Infinitive | SL | ES | `Summary-56.md` (partial) | |
| C1.1.3.1 | Absolute Participle Clauses | SL | ES | — | |
| C1.1.3.2 | Adverbial Gerund Clauses | SL | ES | — | |

### C1.2 Formal, Professional & Academic Register

Qroo's course is entirely conversational — no material here at all.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| C1.2.1.1 | High-Formal Openings/Closings (*Estimado/a...*) | — | ES | — | |
| C1.2.1.2 | Diplomatic Business Correspondence Language | — | ES | — | |
| C1.2.2.1 | Structuring Arguments, Academic Connectors | — | ES | — | |
| C1.2.2.2 | Maintaining Impersonal Distance and Objectivity | — | ES | — | |
| C1.2.3.1 | Domain-Specific Vocabulary (Finance, Law, Science) | — | ES | — | |
| C1.2.3.2 | Decoding Complex Media and Editorial Commentary | — | ES | — | |

### C1.3 Advanced Cultural & Sociolinguistic Nuance

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| C1.3.1.1 | Wordplay, Puns (*Albur*), Humor Mechanics | — | ES | — | |
| C1.3.1.2 | Detecting Tone and Subtext | — | ES | — | |
| C1.3.2.1 | Traditional Proverbs (*Refranes*) | — | ES, LE | — | |
| C1.3.2.2 | Cultural and Historical Allusions | — | ES, LE | `2025_04_26-POSTED-Cultural-Differences-Sound-taste-smell.md` (cross-cultural sensory description differences) | |
| C1.3.3.1 | Fast-Speech Elision and Assimilation | — | ES | — | |
| C1.3.3.2 | Caribbean, Rioplatense, Mexican, Andean Accents | — | ES, LE | — | |

Supplementary vocabulary note: `Summary-63.md` (sensory verbs *saber a, oler a, sonar, parecerse...*) doesn't map to a specific outline code but is useful supporting vocabulary anywhere in the B2–C1 range where descriptive/sensory language comes up.

---

## C2 — Mastery / Native-Like Proficiency

No channel on the approved list, and no Qroo file, teaches at true C2 depth — literary tenses, hyperbaton, and total sociolinguistic range require authentic native text and media, not structured lessons. Channels below are for accent/register calibration only; the lesson bodies themselves should draft from grammar references and native source material the user brings in.

| Code | Topic | Formula | Immersion | Qroo Source | Status |
|---|---|---|---|---|---|
| C2.1.1.1 | Future Subjunctive (*Hubiere, Fuere*) in Legal/Historic Texts | — | — | — | |
| C2.1.1.2 | Preterite Anterior and Literary Archaisms | — | — | — | |
| C2.1.2.1 | Stylistic Inversion (*Hyperbaton*) | — | — | — | |
| C2.1.2.2 | Advanced Emphatic Structures | — | — | — | |
| C2.1.3.1 | Micro-Adjustments: Hyper-Formal to Ultra-Colloquial | — | ES | — | |
| C2.1.3.2 | Projecting Implicit Emotion/Authority through Syntax | — | ES | — | |
| C2.2.1.1 | Fluid Shift: Standard Spanish ↔ Regional Slang | — | ES, LE | — | |
| C2.2.1.2 | Context-Switching by Audience/Setting/Hierarchy | — | ES, LE | — | |
| C2.2.2.1 | Simultaneous Mental Processing/Reformulation | — | — | — | |
| C2.2.2.2 | Idiomatic Translation of Culture-Bound Concepts | — | — | — | |
| C2.2.3.1 | Intuitive Regional Humor, Satire, Folklore | — | ES, LE | — | |
| C2.2.3.2 | Full Sociolinguistic Integration | — | — | — | |

---

## Outline Additions Made for This Curriculum

Five gaps found while cross-referencing the Qroo source material against `CEFR-Outline.md` have been added to the outline (and to `CEFR-Folder-Structure.md`) as new leaf codes, appended after existing siblings so no existing code was renumbered:

- **A1.4.2.3** *Qué* vs. *Cuál* Distinction — was implied but never called out; Qroo source: `34-Summary.md`.
- **A2.1.3.4** Habitual Aspect with *Soler* — no prior slot; Qroo source: `summary-64.md`.
- **A2.3.5** Simple Future Tense (3 leaves) — the outline taught near-future (*ir + a*) and *assumed* future-tense stems existed by B1.3.1.2, but never actually taught the morphological future. Qroo source: `future-tense.md`, `Summary-37.md`, `Summary-53.md`.
- **B1.4.4** Basic Relative Pronouns (3 leaves) — the outline jumped straight to *advanced* relative pronouns at C1.1.1 with no foundational lesson. Qroo source: `Summary-42.md`.
- **B2.5** The Neuter *Lo* (6 leaves) — no prior slot for this high-frequency structure. Qroo source: `Summary-57.md`, `Summary-58.md`.

---

## Next Steps

1. Build A1.1.1.2 Pure Vowel Sounds next, then finish the rest of A1.1 (4 lessons remain after it) before moving to A1.2, so the phonetics foundation is complete before grammar starts stacking on top of it.
2. Work levels in order — the Qroo source material and the channel progression are both sequential, and later lessons assume earlier ones.
3. Revisit the pacing table after the first few weeks of actual lesson-building time to recalibrate it against real throughput.
