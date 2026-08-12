# Spanish Course Curriculum: Beginner to Expert (A1 → C2)

This is the master lesson plan for the whole vault. Each lesson uses a precise
**alphanumeric code** (e.g., **A1.3.2.1**) so you can tell Claude to _"Add a lesson on
[topic] to section X.Y.Z"_ whenever you discover new material.

Every row below is one lesson file (one CEFR leaf code = one file in `01 Lessons/`). Each
level's tables give, per lesson: the topic, which channel(s) to check first for a
teaching video and which for immersion practice, which Qroo source file (if
any) can seed the draft, and build status.

- **Formula** — the grammar/pattern channel(s) to check first for this lesson's video.
- **Immersion** — a listening/conversation channel to pair with it, once the grammar
  point is understood.
- **Qroo Source** — specific file(s) that already cover this topic and can seed the
  lesson draft. Bare filenames (e.g. `` `Summary-15.md` ``) live in
  `Qroo/beginner-course/`; filenames prefixed `intermediate-course/` live in
  `Qroo/intermediate-course/`. `—` means no Qroo material exists; draft from the
  channel video and general knowledge instead. Spain-specific forms (_vosotros_, etc.)
  must still be stripped per `.claude/rules/spanish-language.md` when drafting from
  these files.
- **Status** — ✅ built, otherwise blank (planned).

Use this document to decide **what lesson to build next**, **what a code covers**, and
**where to pull source material from**. Use the `new-lesson` skill to actually build a
lesson — this file is the plan, not a replacement for the skill's workflow.

---

## Channel Key

| Abbrev. | Channel                | Range |
| ------- | ---------------------- | ----- |
| QP      | Spanish With Qroo Paul | A1–B2 |
| SD      | The Spanish Dude       | A1–B1 |
| LT      | The Language Tutor     | A1–B1 |
| LTr     | Language Transfer      | A1–B1 |
| PS      | Pro Spanish            | A1–B1 |
| BF      | Butterfly Spanish      | A1–B2 |
| SL      | Spanishland School     | B1–C1 |
| LE      | Latin ELE              | A2–C1 |
| WNS     | Why Not Spanish?       | A2–B2 |
| ES      | Easy Spanish           | A2–C2 |
| SG      | Spanish and Go         | A1–B2 |
| DS      | Dreaming Spanish       | A1–C2 |
| SP101   | SpanishPod101          | A1–B1 |

See `CEFR/CEFR-YouTube-Channels.md` for each channel's full focus and the
CEFR-stage-to-channel mapping table.

---

## Methodology

Every lesson goes through the `new-lesson` skill: numbering check → template → video
search (must come from the Channel Key above, matched to the lesson's level) → body →
practice PDF → conversational-sentences file (`05 Conversations/`) → MOC link →
`spanish-style-reviewer` → flashcards generated and synced to Anki. This document
pre-answers two of that skill's steps — which channel to search first, and whether a
Qroo file exists to draft from — so lesson creation goes faster and stays consistent.

Three source tiers, by level:

- **A1–B1**: `Qroo/beginner-course/` is dense here (64 numbered lessons, mostly
  A1.3–B1.4). Where a beginner-course file is listed, treat it as the primary draft
  source, stripped of Spain-specific forms, and confirmed against a formula-channel
  video.
- **B1.2–B2.5**: `Qroo/intermediate-course/` covers subjunctive (present, imperfect,
  triggers), conditional, relative pronouns, reported speech, double object pronouns,
  _por/para_, accidental _se_, and _lo_ — the grammar-heavy backbone of upper-B1 and
  B2. Where an intermediate-course file is listed, treat it the same way as a
  beginner-course one: primary draft source, stripped of Spain-specific forms, and
  confirmed against a formula-channel video.
- **B2.2, most of B2.3–B2.4, C1–C2**: no Qroo material (from either folder) covers
  these. These lean on the channels — especially **Easy Spanish** and **Dreaming
  Spanish (Advanced)** for native-speed immersion, and **Spanishland School** for the
  last of the formula-driven grammar. Past C1, no channel on the approved list teaches
  literary/archaic Spanish or true native sociolinguistic range (C2.1–C2.2) — flag
  those lessons for drafting from grammar references and authentic
  native text/media, with channels used only for accent/register calibration.

Flashcards are generated and pushed to Anki as the last step of `new-lesson` itself,
right after `spanish-style-reviewer` — not a separate later action. `add-flashcards`
still exists standalone for regenerating cards if a lesson's content changes after the
fact.

---

## Current Progress

4 of roughly 172 planned lessons exist:

- ✅ A1.1.1.1 The Spanish Alphabet
- ✅ A1.1.1.2 Pure Vowel Sounds
- ✅ A1.1.1.3 Key Consonant Differences
- ✅ A1.1.1.4 Accent Marks for Stress and Meaning Distinctions

---

## Suggested Pacing

A full A1→C2 progression, self-paced, roughly:

| Level | Leaf lessons | Suggested pace                                               | Rough duration |
| ----- | ------------ | ------------------------------------------------------------ | -------------- |
| A1    | ~46          | 3–4 lessons/week                                             | ~3 months      |
| A2    | ~36          | 3 lessons/week                                               | ~3 months      |
| B1    | ~32          | 2–3 lessons/week                                             | ~3.5 months    |
| B2    | ~25          | 2 lessons/week                                               | ~3 months      |
| C1    | ~18          | 1–2 lessons/week (heavier immersion load per lesson)         | ~3 months      |
| C2    | ~12          | 1 lesson/week + sustained native immersion outside the vault | ~3+ months     |

Total: roughly 17–19 months of steady study to nominal C2 exposure — longer in
practice, since C1–C2 fluency is bounded by immersion hours, not lesson count. Treat
the pace table as a planning default, not a commitment; adjust freely.

---

## Next Steps

1. A1, A2, and B1.1 (Advanced Past Tenses & Aspect Mastery) are complete.
   Continue with B1.2 (Introduction to the Subjunctive Mood) next.
2. Work levels in order — the Qroo source material and the channel progression are
   both sequential, and later lessons assume earlier ones.
3. Revisit the pacing table after the first few weeks of actual lesson-building time
   to recalibrate it against real throughput.

---

## 🟢 Level A1: Breakthrough / Absolute Beginner

Formula default: **LT, PS, LTr**. Immersion default: **BF, DS, SP101**.

### A1.1 Phonetics, Pronunciation & Orthography

Qroo has no phonetics material — this whole subsection drafts from channel videos plus
general phonetics knowledge.

**A1.1.1 The Alphabet, Vowels, Consonants, and Accent Marks (_Tildes_)**

| Code     | Topic                                                                        | Formula   | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------------------------- | --------- | --------- | ----------- | ------ |
| A1.1.1.1 | The Spanish Alphabet (_El Abecedario_) — Letter Names and the Extra Letter Ñ | LT, SP101 | BF        | —           | ✅     |
| A1.1.1.2 | Pure Vowel Sounds (_A, E, I, O, U_)                                          | LT, LTr   | BF, DS    | —           | ✅     |
| A1.1.1.3 | Key Consonant Differences (_C, Z, G, J, H, R, RR, Ñ_)                        | LT, BF    | DS        | —           | ✅     |
| A1.1.1.4 | Accent Marks (_Tildes_) for Stress and Meaning Distinctions (_el_ vs. _él_)  | LT        | SP101     | —           | ✅     |

**A1.1.2 Syllable Stress Rules & Intonation Basics**

| Code     | Topic                                                                 | Formula | Immersion | Qroo Source | Status |
| -------- | --------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| A1.1.2.1 | Natural Stress Rules (Words ending in Vowels, N, or S vs. Consonants) | LT      | DS        | —           | ✅     |
| A1.1.2.2 | Diphthongs (_Diptongos_) and Hiatus (_Hiatos_)                        | LT      | DS        | —           | ✅     |
| A1.1.2.3 | Pitch and Cadence in Statements vs. Questions                         | BF      | DS, ES    | —           | ✅     |

**A1.1.3 Punctuation & Orthographic Conventions**

| Code     | Topic                                                      | Formula | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| A1.1.3.1 | Inverted Punctuation Marks (¿? and ¡!)                     | LT      | SP101     | —           | ✅     |
| A1.1.3.2 | Capitalization Rules (Days, Months, Languages, and Titles) | LT      | SP101     | —           | ✅     |

### A1.2 Nouns, Adjectives & Articles

**A1.2.1 Noun Gender (Masculine/Feminine) & Pluralization Rules**

| Code     | Topic                                             | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------- | ------- | --------- | ----------- | ------ |
| A1.2.1.1 | Standard Gender Endings (_-o_ vs. _-a_)           | LT, PS  | BF        | —           | ✅     |
| A1.2.1.2 | Common Gender Exceptions (_el problema, la mano_) | LT      | BF        | —           | ✅     |
| A1.2.1.3 | Pluralization Rules (Adding _-s_ vs. _-es_)       | LT      | BF        | —           | ✅     |

**A1.2.2 Definite & Indefinite Articles (_El, La, Un, Una_)**

| Code     | Topic                                                  | Formula | Immersion | Qroo Source                                                                     | Status |
| -------- | ------------------------------------------------------ | ------- | --------- | ------------------------------------------------------------------------------- | ------ |
| A1.2.2.1 | Definite Articles (_el, la, los, las_)                 | LT, PS  | BF        | `Summary-21.md` (advanced usage notes — use for context, not the beginner core) | ✅     |
| A1.2.2.2 | Indefinite Articles (_un, una, unos, unas_)            | LT, PS  | BF        | —                                                                               | ✅     |
| A1.2.2.3 | Basic Article Omission (e.g., professions after _ser_) | LT      | BF        | —                                                                               | ✅     |

**A1.2.3 Adjective Agreement & Position**

| Code     | Topic                                                      | Formula | Immersion | Qroo Source                                    | Status |
| -------- | ---------------------------------------------------------- | ------- | --------- | ---------------------------------------------- | ------ |
| A1.2.3.1 | Gender and Number Agreement                                | LT, PS  | BF        | `Summary-28.md` (colors as agreement practice) | ✅     |
| A1.2.3.2 | Standard Noun-First Adjective Placement                    | LT      | BF        | —                                              | ✅     |
| A1.2.3.3 | Common Invariable Adjectives (e.g., _verde, azul, grande_) | LT      | BF        | `Summary-28.md` (_naranja, café_ exceptions)   | ✅     |

### A1.3 Essential Verbs & Present Indicative

Qroo's densest early stretch — most of Master Course Lessons 1–14 land here.

**A1.3.1 The Verb _Ser_ (Identity, Origin, Traits)**

| Code     | Topic                                                                      | Formula | Immersion | Qroo Source                        | Status |
| -------- | -------------------------------------------------------------------------- | ------- | --------- | ---------------------------------- | ------ |
| A1.3.1.1 | Conjugation of _Ser_ in Present Indicative                                 | LT, SD  | BF        | `Summary-13a.md`, `exercise-13.md` | ✅     |
| A1.3.1.2 | Core Uses: Identity, Nationality, Profession, and Physical Characteristics | LT, SD  | BF        | `Summary-13a.md`                   | ✅     |

**A1.3.2 The Verb _Estar_ (Location, States, Conditions)**

| Code     | Topic                                                               | Formula | Immersion | Qroo Source                                                                | Status |
| -------- | ------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------- | ------ |
| A1.3.2.1 | Conjugation of _Estar_ in Present Indicative                        | LT, SD  | BF        | `summary12.md`, `Exercise12.md`                                            | ✅     |
| A1.3.2.2 | Core Uses: Geographic Location, Temporary Physical/Emotional States | LT, SD  | BF        | `summary12.md`, `9-summary.md` (_hay_ vs _estar_ vs prepositions of place) | ✅     |

**A1.3.3 Regular `-AR`, `-ER`, `-IR` Verbs in Present Indicative**

| Code     | Topic                     | Formula | Immersion | Qroo Source                               | Status |
| -------- | ------------------------- | ------- | --------- | ----------------------------------------- | ------ |
| A1.3.3.1 | `-AR` Conjugation Endings | LT, PS  | BF, SP101 | `present-tense-guide.md`, `Summary-31.md` | ✅     |
| A1.3.3.2 | `-ER` Conjugation Endings | LT, PS  | BF, SP101 | `present-tense-guide.md`                  | ✅     |
| A1.3.3.3 | `-IR` Conjugation Endings | LT, PS  | BF, SP101 | `present-tense-guide.md`                  | ✅     |

**A1.3.4 High-Frequency Irregular & Stem-Changing Verbs in Present Indicative**

| Code     | Topic                                                    | Formula | Immersion | Qroo Source                                                                           | Status |
| -------- | -------------------------------------------------------- | ------- | --------- | ------------------------------------------------------------------------------------- | ------ |
| A1.3.4.1 | Stem-Changers (_e➔ie, o➔ue, e➔i_)                        | SD, QP  | BF        | `master3summary.md` (_querer_), `master-4-summary.md`/`master4-exercise.md` (_poder_) | ✅     |
| A1.3.4.2 | "Yo-GO" Irregular Verbs (_tengo, hago, pongo, salgo_)    | QP      | BF        | `master-5-summary.md`/`master5-exercise.md` (_tener_), `Poner-Summary.md`             | ✅     |
| A1.3.4.3 | Irregular Auxiliary Verb _Tener_ and Irregular Verb _Ir_ | QP      | BF        | `master-6-summary.md`, `master-lesson-6-part-two.md`                                  | ✅     |

**A1.3.5 Possessive & Demonstrative Adjectives (_Mi, Tu, Este, Ese_)**

| Code     | Topic                                                     | Formula | Immersion | Qroo Source                      | Status |
| -------- | --------------------------------------------------------- | ------- | --------- | -------------------------------- | ------ |
| A1.3.5.1 | Short-Form Possessives (_mi, tu, su, nuestro_)            | LT      | BF        | `Summary-19.md`/`Exercise-19.md` | ✅     |
| A1.3.5.2 | Demonstrative Adjectives by Distance (_este, ese, aquel_) | LT      | BF        | `master-10.md`/`10-exercise.md`  | ✅     |

### A1.4 Pronouns & Sentence Structure

**A1.4.1 Subject Pronouns & Pronoun Dropping**

| Code     | Topic                                                                  | Formula | Immersion | Qroo Source                              | Status |
| -------- | ---------------------------------------------------------------------- | ------- | --------- | ---------------------------------------- | ------ |
| A1.4.1.1 | Subject Pronouns (_yo, tú, él, ella, usted, nosotros, ustedes, ellos_) | LT, LTr | BF        | `master3summary.md` (tú vs. usted intro) | ✅     |
| A1.4.1.2 | Subject Pronoun Omission (Pro-drop nature of Spanish)                  | LTr     | BF        | —                                        | ✅     |

**A1.4.2 Interrogative Words & Formulating Questions (_¿Qué?, ¿Dónde?, ¿Quién?_)**

| Code     | Topic                                                                    | Formula | Immersion | Qroo Source                                            | Status |
| -------- | ------------------------------------------------------------------------ | ------- | --------- | ------------------------------------------------------ | ------ |
| A1.4.2.1 | Core Question Words (_Qué, Quién, Dónde, Cuándo, Por qué, Cómo, Cuánto_) | LT, QP  | SP101     | —                                                      | ✅     |
| A1.4.2.2 | Word Order in Questions (Subject-Verb Inversion)                         | LT      | SP101     | `summary-60a.md`                                       | ✅     |
| A1.4.2.3 | _Qué_ vs. _Cuál_ Distinction                                             | QP      | SP101     | `34-Summary.md`/`Lesson-34-exercise-revised-472026.md` | ✅     |

**A1.4.3 Negation Rules (_No_, _Nunca_, _Nadie_)**

| Code     | Topic                                                     | Formula | Immersion | Qroo Source | Status |
| -------- | --------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| A1.4.3.1 | Simple Negation using _No_ before the Verb                | LT      | BF        | —           | ✅     |
| A1.4.3.2 | Double Negatives (_No... nada, No... nadie, No... nunca_) | LT      | BF        | —           | ✅     |

### A1.5 Functional Vocabulary & Survival Expressions

**A1.5.1 Greetings, Introductions, Farewells & Courtesy (_Tú_ vs. _Usted_)**

| Code     | Topic                                                            | Formula | Immersion | Qroo Source                          | Status |
| -------- | ---------------------------------------------------------------- | ------- | --------- | ------------------------------------ | ------ |
| A1.5.1.1 | Time-of-Day Greetings and Common Farewells                       | SP101   | SG, BF    | `Summary-36.md` (_qué tal_, partial) | ✅     |
| A1.5.1.2 | Self-Introductions and Asking Names                              | SP101   | SG, BF    | —                                    | ✅     |
| A1.5.1.3 | Pragmatics of Informality (_Tú_) vs. Formality/Respect (_Usted_) | QP      | SG        | `master3summary.md` (partial)        | ✅     |

**A1.5.2 Numbers, Dates, Days of the Week & Telling Time**

| Code     | Topic                                                    | Formula | Immersion | Qroo Source                                                                                                            | Status |
| -------- | -------------------------------------------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------- | ------ |
| A1.5.2.1 | Cardinal Numbers (0–100+)                                | SP101   | SG        | `summary-22.md`/`Exercise-22...`                                                                                       | ✅     |
| A1.5.2.2 | Calendar Vocabulary (Days, Months, Dates)                | SP101   | SG        | `summary-22.md`                                                                                                        | ✅     |
| A1.5.2.3 | Time Expressions (_¿Qué hora es?, Es la..., Son las..._) | SP101   | SG        | `summary-22.md`; `Summary-23.md` (_hace/desde/desde hace_ — more advanced, hold for A1.5.2.3 extension or reuse at B1) | ✅     |

**A1.5.3 Immediate Needs, Directions & Basic Shopping/Dining**

| Code     | Topic                                                                   | Formula | Immersion | Qroo Source                                                                                 | Status |
| -------- | ----------------------------------------------------------------------- | ------- | --------- | ------------------------------------------------------------------------------------------- | ------ |
| A1.5.3.1 | Expressing Basic Needs (_Necesito..., Quiero..., ¿Dónde está...?_)      | QP      | SG        | `9-summary.md` (_hay_), `master3summary.md`/`master-4-summary.md` (_quiero/puedo_ adjacent) | ✅     |
| A1.5.3.2 | Ordering Food and Asking for the Check (_La cuenta, por favor_)         | SP101   | SG        | —                                                                                           | ✅     |
| A1.5.3.3 | Simple Directional Vocabulary (_A la derecha, A la izquierda, Derecho_) | SP101   | SG        | —                                                                                           | ✅     |

---

## 🟡 Level A2: Waystage / Elementary

Formula default: **QP, SD, LT**. Immersion default: **WNS, SG, SP101**.

### A2.1 Past Tenses (Foundations)

Qroo's "Deep Dive" mini-series (separate from the numbered Master Course) targets this
section directly.

**A2.1.1 Preterite Indicative (_Pretérito Indefinido_) – Regular Verbs**

| Code     | Topic                                                         | Formula | Immersion | Qroo Source                                                               | Status |
| -------- | ------------------------------------------------------------- | ------- | --------- | ------------------------------------------------------------------------- | ------ |
| A2.1.1.1 | `-AR` Preterite Conjugation Patterns                          | QP, SD  | WNS       | `preterit-tense-Conjugations.md`, `Summary-39.md`/`Lesson-39-Exercise.md` | ✅     |
| A2.1.1.2 | `-ER` and `-IR` Preterite Conjugation Patterns                | QP, SD  | WNS       | `preterit-tense-Conjugations.md`, `Summary-39.md`                         | ✅     |
| A2.1.1.3 | Time Markers for Preterite (_ayer, anoche, la semana pasada_) | QP      | WNS       | `Summary-39.md`                                                           | ✅     |

**A2.1.2 Preterite Indicative – Common Irregular Verbs**

| Code     | Topic                                                                 | Formula | Immersion | Qroo Source                                               | Status |
| -------- | --------------------------------------------------------------------- | ------- | --------- | --------------------------------------------------------- | ------ |
| A2.1.2.1 | Total Irregulars (_ser/ir, dar, ver_)                                 | QP      | WNS       | `IR-Preterit.md`                                          | ✅     |
| A2.1.2.2 | Root-Changing Irregulars (_hacer, tener, estar, poder, poner, venir_) | QP      | WNS       | `Summary-39.md` (partial coverage — verify against video) | ✅     |
| A2.1.2.3 | Orthographic Preterite Changes (_-car, -gar, -zar_ in _yo_ form)      | QP      | WNS       | `Summary-39.md` (partial — confirm against video)         | ✅     |

**A2.1.3 Imperfect Indicative (_Pretérito Imperfecto_) – Form & Uses**

| Code     | Topic                                                           | Formula | Immersion | Qroo Source                                       | Status |
| -------- | --------------------------------------------------------------- | ------- | --------- | ------------------------------------------------- | ------ |
| A2.1.3.1 | Regular _-aba_ and _-ía_ Endings                                | QP, SD  | WNS       | `imperfect-tense-conjugation.md`, `Summary-40.md` | ✅     |
| A2.1.3.2 | The Three Irregular Imperfect Verbs (_ser, ir, ver_)            | QP      | WNS       | `imperfect-tense-conjugation.md`, `Summary-40.md` | ✅     |
| A2.1.3.3 | Uses: Habits, Routines, Descriptions, Age, and Time in the Past | QP      | WNS       | `Summary-40.md`                                   | ✅     |
| A2.1.3.4 | Habitual Aspect with _Soler_ (Present & Imperfect + Infinitive) | QP      | WNS       | `summary-64.md`                                   | ✅     |

**A2.1.4 Preterite vs. Imperfect: Basic Contrast & Narrative Mechanics**

| Code     | Topic                                                                   | Formula | Immersion | Qroo Source                                                                                  | Status |
| -------- | ----------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------- | ------ |
| A2.1.4.1 | Completed Actions (Preterite) vs. Ongoing Background States (Imperfect) | QP, SD  | LE, WNS   | `Deep-3-Summary-(1).md`, `DD-exercise-3-rev492026.md`, `Exercise-Preterite-and-Imperfect.md` | ✅     |
| A2.1.4.2 | Interrupted Actions (Imperfect verb + _cuando_ + Preterite verb)        | QP, SD  | LE, WNS   | `Deep-3-Summary-(1).md`, `DD-exercise-3-rev492026.md`                                        | ✅     |

### A2.2 Object Pronouns & Reflexive Verbs

**A2.2.1 Direct Object Pronouns (_Me, te, lo, la, nos, los, las_)**

| Code     | Topic                                      | Formula | Immersion | Qroo Source                      | Status |
| -------- | ------------------------------------------ | ------- | --------- | -------------------------------- | ------ |
| A2.2.1.1 | Form and Identification of Direct Objects  | QP      | WNS       | `summary-15.md`/`15-exercise.md` | ✅     |
| A2.2.1.2 | Placement directly before Conjugated Verbs | QP      | WNS       | `summary-15.md`                  | ✅     |

**A2.2.2 Indirect Object Pronouns (_Me, te, le, nos, les_)**

| Code     | Topic                                                                | Formula | Immersion | Qroo Source                                    | Status |
| -------- | -------------------------------------------------------------------- | ------- | --------- | ---------------------------------------------- | ------ |
| A2.2.2.1 | Form and Identification of Indirect Objects                          | QP      | WNS       | `Redundant-LE.md`                              | ✅     |
| A2.2.2.2 | Mandatory Redundant Indirect Object Pronoun Usage (_Le digo a Juan_) | QP      | WNS       | `Redundant-LE.md`, `Redundant-LE-Exercise2.md` | ✅     |

**A2.2.3 Reflexive Verbs & Daily Routines (_Me lavo, se viste_)**

| Code     | Topic                                                                | Formula | Immersion | Qroo Source                                                       | Status |
| -------- | -------------------------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------- | ------ |
| A2.2.3.1 | Reflexive Pronouns (_me, te, se, nos, se_)                           | QP      | WNS       | `Lesson-19-Pronominal-Verbs.md`, `Summary-25.md`/`Exercise-25...` | ✅     |
| A2.2.3.2 | Common Daily Routine Verbs (_despertarse, ducharse, acostarse_)      | QP      | WNS, SG   | `Lesson-19-Pronominal-Verbs.md`                                   | ✅     |
| A2.2.3.3 | Non-Reflexive vs. Reflexive Meaning Shifts (_dormir_ vs. _dormirse_) | QP      | WNS       | `Summary-25.md`, `summary-26.md`/`Lesson-26-Exercise.md`          | ✅     |

### A2.3 Verbal Periphrasis, Modals & Future Intentions

**A2.3.1 Near Future (_Ir + a + Infinitive_)**

| Code     | Topic                                                               | Formula | Immersion | Qroo Source    | Status |
| -------- | ------------------------------------------------------------------- | ------- | --------- | -------------- | ------ |
| A2.3.1.1 | Conjugating _Ir_ + _a_ + Base Verb                                  | QP      | SG        | `Summary-8.md` | ✅     |
| A2.3.1.2 | Time Expressions for Future Planning (_mañana, este fin de semana_) | QP      | SG        | `Summary-8.md` | ✅     |

**A2.3.2 Present Continuous (_Estar + Gerund_)**

| Code     | Topic                                              | Formula | Immersion | Qroo Source                                                                        | Status |
| -------- | -------------------------------------------------- | ------- | --------- | ---------------------------------------------------------------------------------- | ------ |
| A2.3.2.1 | Forming the Gerund (_-ando, -iendo_)               | QP      | WNS       | `Summary-32.md`, `master-present-progressive-exercise.md`, `ejercicio-gerundio.md` | ✅     |
| A2.3.2.2 | Irregular Gerunds (_durmiendo, leyendo, diciendo_) | QP      | WNS       | `Summary-33.md`                                                                    | ✅     |

**A2.3.3 Obligation & Ability Modals (_Tener que, Deber, Poder, Hay que_)**

| Code     | Topic                                                  | Formula | Immersion | Qroo Source                                                                           | Status |
| -------- | ------------------------------------------------------ | ------- | --------- | ------------------------------------------------------------------------------------- | ------ |
| A2.3.3.1 | Personal Obligation (_Tener que_ + Inf, _Deber_ + Inf) | QP      | WNS       | `master-5-summary.md`; `Summary-52.md` (_deber_ tense nuance — advanced, reuse later) | ✅     |
| A2.3.3.2 | Impersonal Obligation (_Hay que_ + Inf)                | QP      | WNS       | `Summary-29.md` (_hay que_ section)                                                   | ✅     |
| A2.3.3.3 | Physical and Circumstantial Ability (_Poder_ + Inf)    | QP      | WNS       | `master-4-summary.md`/`master4-exercise.md`                                           | ✅     |

**A2.3.4 Verbs like _Gustar_ & Emotional Expression Basics (_Encantar, Doler_)**

| Code     | Topic                                                              | Formula | Immersion | Qroo Source     | Status |
| -------- | ------------------------------------------------------------------ | ------- | --------- | --------------- | ------ |
| A2.3.4.1 | Indirect Pronoun + _Gustar_ Mechanics (_Me gusta_ vs. _Me gustan_) | QP, SD  | WNS       | `summary16a.md` | ✅     |
| A2.3.4.2 | Other Indirect Verbs (_encantar, doler, importar, faltar_)         | QP      | WNS       | `summary-17.md` | ✅     |

**A2.3.5 Simple Future Tense (_Futuro Simple_)**

| Code     | Topic                                                                                       | Formula | Immersion | Qroo Source                                                | Status |
| -------- | ------------------------------------------------------------------------------------------- | ------- | --------- | ---------------------------------------------------------- | ------ |
| A2.3.5.1 | Regular Future Endings (_-é, -ás, -á, -emos, -án_)                                          | QP, SD  | WNS       | `future-tense.md`, `Summary-37.md`/`Lesson-37-Exercise.md` | ✅     |
| A2.3.5.2 | Irregular Future Stems (_tendr-, pondr-, har-, dir-, sabr-, querr-, vendr-, saldr-, podr-_) | QP, SD  | WNS       | `future-tense.md`, `Summary-37.md`                         | ✅     |
| A2.3.5.3 | Future for Speculation and Probability (_¿Será...?_)                                        | QP      | WNS       | `Summary-53.md`                                            | ✅     |

### A2.4 Practical Vocabulary & Situational Usage

Thin on Qroo source — mostly channel/immersion-driven vocabulary lessons.

**A2.4.1 Family, Home, & Physical/Personality Descriptions**

| Code     | Topic                                                            | Formula | Immersion | Qroo Source                                                                       | Status |
| -------- | ---------------------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------------------- | ------ |
| A2.4.1.1 | Expanded Family Tree and Extended Relations Vocabulary           | SP101   | SG, WNS   | —                                                                                 | ✅     |
| A2.4.1.2 | Housing Types, Rooms, and Domestic Items                         | SP101   | SG        | `vocabrooms.md`                                                                   | ✅     |
| A2.4.1.3 | Comparative Adjectives (_más... que, menos... que, tan... como_) | QP      | WNS       | `Summary-55.md` (_tan/tanto/mucho/demasiado_ — advanced overlap, use selectively) | ✅     |

**A2.4.2 Work, Professions, & Weather**

| Code     | Topic                                                                              | Formula | Immersion | Qroo Source                                              | Status |
| -------- | ---------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------- | ------ |
| A2.4.2.1 | Occupations and Workplace Contexts                                                 | SP101   | SG        | —                                                        | ✅     |
| A2.4.2.2 | Expressing Weather using _Hacer, Estar,_ and _Haber_ (_Hace frío, Está lloviendo_) | SP101   | SG        | `master-24.md` (heat/cold/spicy _tener_ idioms, partial) | ✅     |

**A2.4.3 Public Transportation, Travel, & Asking for Help**

| Code     | Topic                                                             | Formula | Immersion | Qroo Source | Status |
| -------- | ----------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| A2.4.3.1 | Modes of Transit and Purchasing Tickets                           | SP101   | SG        | —           | ✅     |
| A2.4.3.2 | Hotel Reservations and Travel Logistics                           | SP101   | SG        | —           | ✅     |
| A2.4.3.3 | Emergency Vocabulary (_¡Ayuda!, Perdí mi..., Necesito un médico_) | SP101   | SG        | —           | ✅     |

---

## 🟠 Level B1: Threshold / Intermediate

Formula default: **SL, QP, SD**. Immersion default: **LE, WNS**. This is where Qroo's
Subjunctive Trigger mini-series (Lessons 46–59-ish) becomes the backbone of B1.2,
supplemented by the `intermediate-course/` Deep Dive summaries (Deep-5 through Deep-7)
for subjunctive concept, triggers, and imperfect subjunctive.

### B1.1 Advanced Past Tenses & Aspect Mastery

**A2.1.5 / B1.1.1 Advanced Contrast: Preterite vs. Imperfect in Complex Stories**

| Code     | Topic                                                                           | Formula | Immersion | Qroo Source                                                                                                                | Status |
| -------- | ------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------- | ------ |
| B1.1.1.1 | Verbs that Change Meaning in Preterite vs. Imperfect (_conocer, saber, querer_) | QP, SL  | LE        | `saber-summary2.md`, `saber-como.md`, `saber-conocer-exercise.md`, `DD-exercise-3-rev492026.md` (preterite meaning shifts) | ✅     |
| B1.1.1.2 | Multilayered Narrative Framing in Past Tenses                                   | SL      | LE        | `Deep-3-Summary-(1).md`                                                                                                    | ✅     |

**B1.1.2 Present Perfect Indicative (_Pretérito Perfecto Compuesto_)**

| Code     | Topic                                                                             | Formula | Immersion | Qroo Source                                                             | Status |
| -------- | --------------------------------------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------------- | ------ |
| B1.1.2.1 | Auxiliary _Haber_ Conjugation in Present (_he, has, ha, hemos, han_)              | QP, SL  | LE        | `Summary-29.md`, `haber-exercise.md`                                    | ✅     |
| B1.1.2.2 | Regular and Irregular Past Participles (_hablado, comido, dicho, escrito, hecho_) | QP, SL  | LE        | `Summary-29.md` (partial — participle list not exhaustive, cross-check) | ✅     |
| B1.1.2.3 | Uses: Life Experiences and Open Timeframes (_Nunca he visitado..._)               | SL      | LE        | `Summary-29.md` (partial)                                               | ✅     |

**B1.1.3 Past Perfect / Pluperfect Indicative (_Pretérito Pluscuamperfecto_)**

| Code     | Topic                                                                           | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B1.1.3.1 | Auxiliary _Haber_ in Imperfect (_había, habías..._) + Past Participle           | SL      | LE        | —           | ✅     |
| B1.1.3.2 | Expressing Actions Prior to Another Past Event (_Ya había comido cuando llegó_) | SL      | LE        | —           | ✅     |

### B1.2 Introduction to the Subjunctive Mood

**B1.2.1 Concept: Indicative vs. Subjunctive Mood**

| Code     | Topic                                                                                 | Formula | Immersion | Qroo Source                                                                                                | Status |
| -------- | ------------------------------------------------------------------------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| B1.2.1.1 | Fact, Certainty, Reality (Indicative) vs. Subjectivity, Mood, Unreality (Subjunctive) | SL, QP  | LE        | `intermediate-course/Deep-5-summary.md` (subjunctive mood overview), `parts-of-speech.md`, `summary-46.md` | ✅     |
| B1.2.1.2 | Sentence Structure Mechanics (Main Clause + _Que_ + Subordinate Clause)               | SL, QP  | LE        | `summary-46.md`                                                                                            | ✅     |

**B1.2.2 Present Subjunctive Formation (Regular & Irregular Roots)**

| Code     | Topic                                                                     | Formula | Immersion | Qroo Source                           | Status |
| -------- | ------------------------------------------------------------------------- | ------- | --------- | ------------------------------------- | ------ |
| B1.2.2.1 | Present Subjunctive Stems derived from _Yo_ Form Present Indicative       | SL, QP  | LE        | `Present-Subjunctive-Conjugations.md` | ✅     |
| B1.2.2.2 | Opposite Vowel Ending Patterns (_-AR_ ➔ _-e_, _-ER/-IR_ ➔ _-a_)           | SL, QP  | LE        | `Present-Subjunctive-Conjugations.md` | ✅     |
| B1.2.2.3 | Irregular Subjunctive Stems (DISHES: _Dar, Ir, Ser, Haber, Estar, Saber_) | SL, QP  | LE        | `Present-Subjunctive-Conjugations.md` | ✅     |

**B1.2.3 Subjunctive Triggers: Wishes, Wants & Desires (WEIRDOS)**

| Code     | Topic                                                                   | Formula | Immersion | Qroo Source                                                                                                                  | Status |
| -------- | ----------------------------------------------------------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| B1.2.3.1 | Verbs of Desire and Will (_Querer que, Esperar que, Desear que_)        | QP, SL  | LE        | `summary-47.md`/`Lesson-46-Exercises.md`/`Lesson-47...`, `intermediate-course/Subjunctive-Drill---¿Qué-quieres-que-haga_.md` | ✅     |
| B1.2.3.2 | Requests and Recommendations (_Pedir que, Recomendar que, Sugerir que_) | QP, SL  | LE        | `summary-47.md` (partial), `intermediate-course/Deep-6-summary.md` (subjunctive triggers)                                    | ✅     |

**B1.2.4 Subjunctive Triggers: Emotion, Doubt, Uncertainty & Impersonal Expressions**

| Code     | Topic                                                                            | Formula | Immersion | Qroo Source                                                                                                                                                                            | Status |
| -------- | -------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| B1.2.4.1 | Expressions of Emotion (_Me alegra que, Tengo miedo de que_)                     | QP, SL  | LE        | `Summary-49.md` (_ojalá_, adjacent), `intermediate-course/Deep-6-summary.md` (subjunctive triggers), `intermediate-course/subjunctive-worksheet.md` (indicative vs. subjunctive drill) |        |
| B1.2.4.2 | Expressions of Doubt/Denial (_Dudo que, No creo que_) vs. Certainty (_Creo que_) | QP, SL  | LE        | `Summary-50.md` (indefinite-antecedent subjunctive, adjacent trigger)                                                                                                                  |        |
| B1.2.4.3 | Impersonal Phrases (_Es importante que, Es necesario que_)                       | QP, SL  | LE        | `Summary-48.md` (_para que_ + subjunctive — closely related trigger)                                                                                                                   |        |

### B1.3 Conditional & Imperative Moods

**B1.3.1 Simple Conditional Tense (_Condicional Simple_)**

| Code     | Topic                                                                            | Formula | Immersion | Qroo Source                                                                                                    | Status |
| -------- | -------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------- | ------ |
| B1.3.1.1 | Regular Conditional Endings added to Infinitive (_-ía, -ías, -ía..._)            | QP, SD  | LE        | `Conditional-Conjugations.md`, `Summary-would.md`, `intermediate-course/Deep-4-summary.md`                     |        |
| B1.3.1.2 | Irregular Conditional Stems (Same stems as Future Tense: _tendr-, pondr-, har-_) | QP, SD  | LE        | `Conditional-Conjugations.md`                                                                                  |        |
| B1.3.1.3 | Uses: Politeness (_Me gustaría_), Advice (_Yo que tú, haría..._), Hypotheticals  | QP      | LE        | `Summary-would.md`, `intermediate-course/Dive-conditional-exercise.md` (_¿Podría...?/¿Podrías...?_ politeness) |        |

**B1.3.2 Affirmative Commands (_Tú, Usted, Ustedes_)**

| Code     | Topic                                                                   | Formula | Immersion | Qroo Source                                                        | Status |
| -------- | ----------------------------------------------------------------------- | ------- | --------- | ------------------------------------------------------------------ | ------ |
| B1.3.2.1 | Informal Affirmative _Tú_ Commands (3rd Person Present Indicative form) | QP      | LE        | `Summary-38.md`, `guide-to-imperative.md`, `Lesson-38-Exercise.md` |        |
| B1.3.2.2 | Irregular _Tú_ Commands (_ven, di, sal, haz, ten, ve, pon, sé_)         | QP      | LE        | `guide-to-imperative.md`                                           |        |
| B1.3.2.3 | Formal _Usted / Ustedes_ Commands (Present Subjunctive forms)           | QP      | LE        | `guide-to-imperative.md`                                           |        |

**B1.3.3 Negative Commands & Subjunctive Alignment**

| Code     | Topic                                                                         | Formula | Immersion | Qroo Source              | Status |
| -------- | ----------------------------------------------------------------------------- | ------- | --------- | ------------------------ | ------ |
| B1.3.3.1 | Negative _Tú_ Commands (Present Subjunctive _Tú_ form)                        | QP      | LE        | `guide-to-imperative.md` |        |
| B1.3.3.2 | Negative Formal Commands (Negative Present Subjunctive _Usted/Ustedes_ forms) | QP      | LE        | `guide-to-imperative.md` |        |
| B1.3.3.3 | Pronoun Attachment Rules (Attached to Affirmative, Preceding Negative)        | QP      | LE        | `guide-to-imperative.md` |        |

### B1.4 Pronoun Placement & Syntax Expansion

**B1.4.1 Double Object Pronouns & the "Se" Rule (_Se lo dije_)**

| Code     | Topic                                                               | Formula | Immersion | Qroo Source                                                                                                       | Status |
| -------- | ------------------------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------- | ------ |
| B1.4.1.1 | Order of Pronouns (Indirect Before Direct: "ID")                    | QP, SD  | LE        | `master-18-summary-rev-72125.md`, `intermediate-course/worksheet-IOP.md`, `intermediate-course/Deep-1-summary.md` |        |
| B1.4.1.2 | Converting _Le/Les_ to _Se_ before _Lo/La/Los/Las_                  | QP, SD  | LE        | `master-18-summary-rev-72125.md`                                                                                  |        |
| B1.4.1.3 | Placement with Conjugated Verbs, Infinitives, Gerunds, and Commands | QP, SD  | LE        | `master-18-summary-rev-72125.md`                                                                                  |        |

**B1.4.2 Prepositions (_Por_ vs. _Para_, _A_, _De_, _En_, _Con_)**

| Code     | Topic                                                                                                          | Formula | Immersion | Qroo Source                                                                                        | Status |
| -------- | -------------------------------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------- | ------ |
| B1.4.2.1 | Core Contrast: _Por_ (Cause, Duration, Exchange, Means) vs. _Para_ (Purpose, Destination, Deadline, Recipient) | SD, QP  | LE        | `Summary-30.md`, `intermediate-course/Deep-2-summary.md`, `intermediate-course/Dive-2-exercise.md` |        |
| B1.4.2.2 | Personal _A_ Rule for Direct Human Objects                                                                     | SD, QP  | LE        | `Summary-20.md`                                                                                    |        |
| B1.4.2.3 | Prepositional Pronouns (_mí, ti, él, nosotros, conmigo, contigo_)                                              | SD      | LE        | —                                                                                                  |        |

**B1.4.3 Sentence Connectors & Transition Words (_Sin embargo, Por lo tanto, Además_)**

| Code     | Topic                                                                            | Formula | Immersion | Qroo Source                                             | Status |
| -------- | -------------------------------------------------------------------------------- | ------- | --------- | ------------------------------------------------------- | ------ |
| B1.4.3.1 | Additive and Contrastive Connectors (_Sin embargo, No obstante, Además, Aunque_) | SL      | LE        | —                                                       |        |
| B1.4.3.2 | Causal and Consequential Connectors (_Por lo tanto, Ya que, Por eso_)            | SL      | LE        | —                                                       |        |
| B1.4.3.3 | _Pero_ vs. _Sino_ vs. _Sino que_ (Contrastive Conjunctions after Negation)       | SL, QP  | LE        | `intermediate-course/Práctica_-Pero,-Sino,-Sino-que.md` |        |

**B1.4.4 Basic Relative Pronouns (_Que, Quien, Donde_)**

| Code     | Topic                                         | Formula | Immersion | Qroo Source                                                           | Status |
| -------- | --------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- | ------ |
| B1.4.4.1 | _Que_ as the All-Purpose Relative Pronoun     | SL, QP  | LE        | `intermediate-course/relative-pronouns.md`, `Summary-42.md`           |        |
| B1.4.4.2 | _Quien/Quienes_ for People after Prepositions | SL, QP  | LE        | `intermediate-course/relative-pronouns.md`, `Summary-42.md` (partial) |        |
| B1.4.4.3 | _Donde, Como, Cuando_ as Relative Adverbs     | SL, QP  | LE        | `intermediate-course/relative-pronouns.md`, `Summary-42.md` (partial) |        |

---

## 🔴 Level B2: Vantage / Upper-Intermediate

Formula default: **SL, QP** (QP tapers off after B1 — confirm each video is still
B2-appropriate before using it). Immersion default: **LE, ES**. `intermediate-course/`
covers B2.1 (imperfect subjunctive), B2.2.3 (accidental _se_), B2.3.3 (reported
speech), and B2.5 (_lo_) well; B2.2.1–2.2.2 and most of B2.3–B2.4 still have no Qroo
material — draft those from channel + general grammar reference.

### B2.1 Advanced Subjunctive & Hypothetical Structures

**B2.1.1 Imperfect Subjunctive (_Pretérito Imperfecto de Subjuntivo_)**

| Code     | Topic                                                                         | Formula | Immersion | Qroo Source                                                                                                                               | Status |
| -------- | ----------------------------------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| B2.1.1.1 | Conjugation derived from 3rd Person Plural Preterite (_-ra/-ras/-ra_ endings) | SL      | LE        | `intermediate-course/Imperfect-Subjunctive-Conjugations.md`, `intermediate-course/Deep-7-summary.md`                                      |        |
| B2.1.1.2 | Past Subjunctive Triggers (Past Main Clause + _Que_ + Imperfect Subjunctive)  | SL      | LE        | `intermediate-course/Deep-7-summary.md`, `Summary-49.md` (_ojalá_), `Summary-51.md` (_cuando/en cuanto/una vez que_ time-clause triggers) |        |
| B2.1.1.3 | Polite Requests using _Quisiera_ or _Pudiera_                                 | SL      | LE        | `Summary-would.md` (partial)                                                                                                              |        |

**B2.1.2 Present Perfect Subjunctive (_Pretérito Perfecto de Subjuntivo_)**

| Code     | Topic                                                                              | Formula | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.1.2.1 | Auxiliary _Haber_ in Present Subjunctive (_haya, hayas..._) + Past Participle      | SL      | LE        | —           |        |
| B2.1.2.2 | Subjunctive Evaluation of Completed Past Actions (_Espero que hayas llegado bien_) | SL      | LE        | —           |        |

**B2.1.3 Pluperfect Subjunctive (_Pluscuamperfecto de Subjuntivo_)**

| Code     | Topic                                                                                 | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.1.3.1 | Auxiliary _Haber_ in Imperfect Subjunctive (_hubiera, hubieras..._) + Past Participle | SL      | LE        | —           |        |
| B2.1.3.2 | Expressing Unfulfilled Past Desires and Regrets                                       | SL      | LE        | —           |        |

**B2.1.4 Conditional Clauses & "If" Statements (_Si tuviera..., haría..._)**

| Code     | Topic                                                                           | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.1.4.1 | Real/Possible Conditionals (_Si_ + Present Indicative ➔ Future/Present)         | SL      | LE        | —           |        |
| B2.1.4.2 | Unreal Present Conditionals (_Si_ + Imperfect Subjunctive ➔ Simple Conditional) | SL      | LE        | —           |        |
| B2.1.4.3 | Unreal Past Conditionals (_Si_ + Pluperfect Subjunctive ➔ Conditional Perfect)  | SL      | LE        | —           |        |

### B2.2 Passive Voice, Impersonal Structures & 'Se' Functions

No Qroo coverage for passive voice or impersonal _se_ (B2.2.1–B2.2.2) — draft those
from channel + reference grammar. Accidental _se_ (B2.2.3) has a direct
`intermediate-course/` source, see below.

**B2.2.1 Passive Voice (_Ser + Past Participle_) vs. Active Voice**

| Code     | Topic                                                                           | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.2.1.1 | Form and Agreement of Canonical Passive Voice (_Ser_ + Past Participle + _por_) | SL      | ES        | —           |        |
| B2.2.1.2 | Register Appropriateness (Formal/Written Contexts vs. Spoken Alternatives)      | SL      | ES        | —           |        |

**B2.2.2 Impersonal and Passive _Se_ (_Se habla español, Se venden casas_)**

| Code     | Topic                                                           | Formula | Immersion | Qroo Source | Status |
| -------- | --------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.2.2.1 | Passive _Se_ with Singular and Plural Inanimate Objects         | SL      | ES        | —           |        |
| B2.2.2.2 | Impersonal _Se_ for General Statements ("One does / People do") | SL      | ES        | —           |        |

**B2.2.3 Accidental / Unintentional _Se_ (_Se me olvidó, Se me cayeron_)**

| Code     | Topic                                                         | Formula | Immersion | Qroo Source                                                                                           | Status |
| -------- | ------------------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------- | ------ |
| B2.2.3.1 | Structure: _Se_ + Indirect Pronoun + Verb + Subject           | SL      | ES        | `intermediate-course/Traducciones-con-Olvidársele,-Caérsele,-Rompérsele,-Perdérsele,-y-Acabársele.md` |        |
| B2.2.3.2 | Shifting Fault away from the Speaker (_Se me rompió el vaso_) | SL      | ES        | `intermediate-course/Traducciones-con-Olvidársele,-Caérsele,-Rompérsele,-Perdérsele,-y-Acabársele.md` |        |

### B2.3 Discourse, Registers & Pragmatics

**B2.3.1 Conversational Fillers & Discourse Markers (_Muletillas_)**

| Code     | Topic                                                                | Formula | Immersion | Qroo Source                                                                  | Status |
| -------- | -------------------------------------------------------------------- | ------- | --------- | ---------------------------------------------------------------------------- | ------ |
| B2.3.1.1 | Hesitation Fillers (_O sea, Es decir, Este..., Bueno_)               | SL      | ES, LE    | `Summary-62.md` (_que yo sepa / que yo recuerde_ — sentence-starter fillers) |        |
| B2.3.1.2 | Conversation Steering and Tag Questions (_¿Verdad?, ¿Cierto?, ¿Ya?_) | SL      | ES, LE    | —                                                                            |        |

**B2.3.2 Softening Requests, Debating, & Expressing Nuanced Disagreement**

| Code     | Topic                                                                                | Formula | Immersion | Qroo Source                                                                | Status |
| -------- | ------------------------------------------------------------------------------------ | ------- | --------- | -------------------------------------------------------------------------- | ------ |
| B2.3.2.1 | Softening Demands with Conditional and Subjunctive Forms                             | SL      | ES        | `Summary-56.md` (infinitive-after-preposition softening strategy, partial) |        |
| B2.3.2.2 | Expressing Partial Agreement (_Entiendo tu punto, pero..., Desde mi perspectiva..._) | SL      | ES        | —                                                                          |        |

**B2.3.3 Direct vs. Indirect Reported Speech (_Estilo Indirecto_)**

| Code     | Topic                                                                        | Formula | Immersion | Qroo Source                                      | Status |
| -------- | ---------------------------------------------------------------------------- | ------- | --------- | ------------------------------------------------ | ------ |
| B2.3.3.1 | Tense Shifts in Past Reporting (Present ➔ Imperfect; Preterite ➔ Pluperfect) | SL      | ES        | `intermediate-course/summary-reported-speech.md` |        |
| B2.3.3.2 | Adjusting Pronouns, Time, and Spatial References in Indirect Speech          | SL      | ES        | `intermediate-course/summary-reported-speech.md` |        |

### B2.4 Regional Diversity & Colloquialisms

The vault's target dialect (Bolivian) concentrates here — **Latin ELE** is the
specifically-called-out channel for this per `CEFR-YouTube-Channels.md`.

**B2.4.1 General Neutral Latin American Idioms & Slang**

| Code     | Topic                                                                      | Formula | Immersion | Qroo Source | Status |
| -------- | -------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.4.1.1 | Trans-Regional Idiomatic Expressions (_Dar en el clavo, Tener mala leche_) | SL      | LE        | —           |        |
| B2.4.1.2 | Universal Colloquial Vocabulary across Latin America                       | SL      | LE, ES    | —           |        |

**B2.4.2 Regional Dialects & Vocabulary Focus (e.g., Bolivian _Voseo_, regional slang)**

| Code     | Topic                                                                              | Formula | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| B2.4.2.1 | Mechanics of Regional _Voseo_ (Conjugations and Pragmatics)                        | —       | LE        | —           |        |
| B2.4.2.2 | Bolivian-Specific Colloquial Vocabulary and Expressions (_Choco, Ya pues, Ch'aki_) | —       | LE        | —           |        |
| B2.4.2.3 | Intonation, Cadence, and Phonetic Variations in Andean and Lowland Bolivia         | —       | LE        | —           |        |

### B2.5 The Neuter _Lo_ and Its Functions

**B2.5.1 Lo as a Direct Object Pronoun Review**

| Code     | Topic                                                        | Formula | Immersion | Qroo Source                                          | Status |
| -------- | ------------------------------------------------------------ | ------- | --------- | ---------------------------------------------------- | ------ |
| B2.5.1.1 | _Lo_ Replacing Masculine Nouns and Ideas                     | SL      | LE        | `Summary-57.md`, `intermediate-course/LO-summary.md` |        |
| B2.5.1.2 | _Lo_ Referring Back to Previously Stated Adjectives/Concepts | SL      | LE        | `Summary-57.md`, `intermediate-course/LO-summary.md` |        |

**B2.5.2 Lo + Adjective for Abstract Qualities (_Lo bueno, lo importante_)**

| Code     | Topic                                        | Formula | Immersion | Qroo Source                                          | Status |
| -------- | -------------------------------------------- | ------- | --------- | ---------------------------------------------------- | ------ |
| B2.5.2.1 | Forming Abstract Nouns with _Lo_ + Adjective | SL      | LE        | `Summary-58.md`, `intermediate-course/LO-summary.md` |        |
| B2.5.2.2 | _Lo Que_ as "What/That Which"                | SL      | LE        | `Summary-58.md`                                      |        |

**B2.5.3 Lo in Intensifiers and Idiomatic Expressions**

| Code     | Topic                                               | Formula | Immersion | Qroo Source     | Status |
| -------- | --------------------------------------------------- | ------- | --------- | --------------- | ------ |
| B2.5.3.1 | _Lo_ + Adjective/Adverb + _Que_ for Intensification | SL      | LE        | `Summary-58.md` |        |
| B2.5.3.2 | Common Idiomatic Uses of _Lo_                       | SL      | LE        | `Summary-58.md` |        |

---

## 🟣 Level C1: Effective Operational Proficiency / Advanced

Formula default: **SL** (thins out through this level — expect to draft more from
reference grammar as C1 progresses). Immersion default: **ES, DS (Advanced)**.

### C1.1 Complex Syntax & Relative Clauses

`C1.1.1` covers _advanced_ relative pronouns, building on the basics now taught at
B1.4.4. `Summary-42.md` is the source for both — it's mapped to B1.4.4 above, so treat
it as a prerequisite refresher (not a direct source) when drafting C1.1.1.

**C1.1.1 Advanced Relative Pronouns (_El cual, Cuyo, Quienquiera_)**

| Code     | Topic                                                                                        | Formula | Immersion | Qroo Source                                                             | Status |
| -------- | -------------------------------------------------------------------------------------------- | ------- | --------- | ----------------------------------------------------------------------- | ------ |
| C1.1.1.1 | Restrictive vs. Non-Restrictive Relative Clauses (_El cual, La cual, Los cuales_)            | SL      | ES        | `Summary-42.md` (basic relative pronouns — prerequisite refresher only) |        |
| C1.1.1.2 | Possessive Relative Pronoun _Cuyo/Cuya_ and Indefinite Relatives (_Quienquiera, Cualquiera_) | SL      | ES        | —                                                                       |        |

**C1.1.2 Verb + Preposition Combinations (_Soñar con, Incurrir en, Depender de_)**

| Code     | Topic                                                            | Formula | Immersion | Qroo Source                                     | Status |
| -------- | ---------------------------------------------------------------- | ------- | --------- | ----------------------------------------------- | ------ |
| C1.1.2.1 | Fixed Verb-Preposition Pairs altering Meaning                    | SL      | ES        | `Summary-59.md` (verbs + required prepositions) |        |
| C1.1.2.2 | Prepositional Verbs triggering Subjunctive or Infinitive Clauses | SL      | ES        | `Summary-56.md` (partial)                       |        |

**C1.1.3 Advanced Non-Finite Verbs (Infinitive, Gerund, & Participle Constructions)**

| Code     | Topic                                                            | Formula | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C1.1.3.1 | Absolute Participle Clauses (_Terminada la reunión, nos fuimos_) | SL      | ES        | —           |        |
| C1.1.3.2 | Adverbial Gerund Clauses (_Habiendo considerado todo..._)        | SL      | ES        | —           |        |

### C1.2 Formal, Professional & Academic Register

Qroo's course is entirely conversational — no material here at all.

**C1.2.1 Professional Emailing, Negotiations, & Formal Letters**

| Code     | Topic                                                                    | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------ | ------- | --------- | ----------- | ------ |
| C1.2.1.1 | High-Formal Openings and Closings (_Estimado/a, Sin otro particular..._) | —       | ES        | —           |        |
| C1.2.1.2 | Diplomatic Language in Business Correspondence and Negotiations          | —       | ES        | —           |        |

**C1.2.2 Academic Writing, Essays, & Persuasive Rhetoric**

| Code     | Topic                                                                       | Formula | Immersion | Qroo Source | Status |
| -------- | --------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C1.2.2.1 | Structuring Arguments and Using Academic Connectors (_En suma, A tenor de_) | —       | ES        | —           |        |
| C1.2.2.2 | Maintaining Impersonal Distance and Objectivity in Texts                    | —       | ES        | —           |        |

**C1.2.3 Understanding Technical, Political, & Specialized Media**

| Code     | Topic                                                        | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------ | ------- | --------- | ----------- | ------ |
| C1.2.3.1 | Domain-Specific Vocabulary (Finance, Law, Politics, Science) | —       | ES        | —           |        |
| C1.2.3.2 | Decoding Complex Media Outlets and Editorial Commentary      | —       | ES        | —           |        |

### C1.3 Advanced Cultural & Sociolinguistic Nuance

**C1.3.1 Humor, Irony, Double Entendres, & Sarcasm**

| Code     | Topic                                                                     | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C1.3.1.1 | Linguistic Mechanics of Puns and Wordplay (_Albur_ / Wordplay structures) | —       | ES        | —           |        |
| C1.3.1.2 | Detecting Tone and Subtext in Social Interactions                         | —       | ES        | —           |        |

**C1.3.2 Metaphors, Proverbs, & Cultural Allusions (_Refranes_)**

| Code     | Topic                                                 | Formula | Immersion | Qroo Source                                                                                                    | Status |
| -------- | ----------------------------------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------- | ------ |
| C1.3.2.1 | Traditional Proverbs (_Más vale pajarito en mano..._) | —       | ES, LE    | —                                                                                                              |        |
| C1.3.2.2 | Cultural and Historical Allusions in Daily Speech     | —       | ES, LE    | `2025_04_26-POSTED-Cultural-Differences-Sound-taste-smell.md` (cross-cultural sensory description differences) |        |

**C1.3.3 Rapid Native Speed Auditory Comprehension Across Diverse Accents**

| Code     | Topic                                                                | Formula | Immersion | Qroo Source | Status |
| -------- | -------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C1.3.3.1 | Phonetic Reductions, Elision, and Assimilation in Fast Speech        | —       | ES        | —           |        |
| C1.3.3.2 | Comprehension of Caribbean, Rioplatense, Mexican, and Andean Accents | —       | ES, LE    | —           |        |

Supplementary vocabulary note: `Summary-63.md` (sensory verbs _saber a, oler a, sonar,
parecerse..._) doesn't map to a specific outline code but is useful supporting
vocabulary anywhere in the B2–C1 range where descriptive/sensory language comes up.

---

## 🔵 Level C2: Mastery / Native-Like Proficiency

No channel on the approved list, and no Qroo file, teaches at true C2 depth — literary
tenses, hyperbaton, and total sociolinguistic range require authentic native text and
media, not structured lessons. Channels below are for accent/register calibration
only; the lesson bodies themselves should draft from grammar references and native
source material the user brings in.

### C2.1 Stylistic Perfection & Literary Precision

**C2.1.1 Archaic, Literary, & Rare Tenses (e.g., Future Subjunctive)**

| Code     | Topic                                                             | Formula | Immersion | Qroo Source | Status |
| -------- | ----------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C2.1.1.1 | Future Subjunctive (_Hubiere, Fuere_) in Legal and Historic Texts | —       | —         | —           |        |
| C2.1.1.2 | Preterite Anterior (_Hubo comido_) and Literary Archaisms         | —       | —         | —           |        |

**C2.1.2 Stylistic Inversion & Rhetorical Emphasis**

| Code     | Topic                                                                    | Formula | Immersion | Qroo Source | Status |
| -------- | ------------------------------------------------------------------------ | ------- | --------- | ----------- | ------ |
| C2.1.2.1 | Altering Standard Word Order for Poetic/Rhetorical Effect (_Hyperbaton_) | —       | —         | —           |        |
| C2.1.2.2 | Advanced Emphatic Structures (_Fue por eso que..., Si de algo sirve..._) | —       | —         | —           |        |

**C2.1.3 Fine Tone Adjustment & Nuanced Emotion in Communication**

| Code     | Topic                                                                      | Formula | Immersion | Qroo Source | Status |
| -------- | -------------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C2.1.3.1 | Micro-Adjustments in Register from Hyper-Formal to Ultra-Colloquial        | —       | ES        | —           |        |
| C2.1.3.2 | Projecting Implicit Emotion, Authority, or Deferment through Choice Syntax | —       | ES        | —           |        |

### C2.2 Native Equivalence & Total Adaptability

**C2.2.1 Effortless Code-Switching Between Formal Registers & Local Dialects**

| Code     | Topic                                                                  | Formula | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C2.2.1.1 | Fluid Shift between Standard International Spanish and Regional Slang  | —       | ES, LE    | —           |        |
| C2.2.1.2 | Context-Switching according to Audience, Social Setting, and Hierarchy | —       | ES, LE    | —           |        |

**C2.2.2 Seamless Real-Time Interpretation & Translation**

| Code     | Topic                                                                 | Formula | Immersion | Qroo Source | Status |
| -------- | --------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C2.2.2.1 | Simultaneous Mental Processing and Real-Time Reformulation            | —       | —         | —           |        |
| C2.2.2.2 | Idiomatic Translation of Cultural Concepts lacking Direct Equivalents | —       | —         | —           |        |

**C2.2.3 Complete Mastery of Regional Idiomatic Expressions & Cultural Contexts**

| Code     | Topic                                                                  | Formula | Immersion | Qroo Source | Status |
| -------- | ---------------------------------------------------------------------- | ------- | --------- | ----------- | ------ |
| C2.2.3.1 | Intuitive Understanding of Regional Humor, Satire, and Folklore        | —       | ES, LE    | —           |        |
| C2.2.3.2 | Full Integration into Any Spanish-Speaking Sociolinguistic Environment | —       | —         | —           |        |
