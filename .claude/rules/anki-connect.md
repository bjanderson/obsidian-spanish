---
paths:
  - "04 Flashcards/**"
---

# Creating Anki notes directly via AnkiConnect

Flashcard files are pushed to Anki directly through AnkiConnect — there is no
Obsidian plugin in this vault that does this automatically, so `add-flashcards` must
do it explicitly as its own step.

## Setup reference

- Anki profile: Obsidian Flashcards
- Anki website: https://apps.ankiweb.net/ — Docs: https://docs.ankiweb.net/
- AnkiConnect addon page: https://ankiweb.net/shared/info/2055492159
- AnkiConnect source/docs: https://git.sr.ht/~foosoft/anki-connect (or GitHub mirrors)
- Connection: http://localhost:8765

## Prerequisites

- Anki must be running with AnkiConnect installed (see addon page above). Check with:
  `curl -s -m 5 http://localhost:8765 -X POST -d '{"action": "version", "version": 6}'`
  If this fails or times out, stop and tell the user to open Anki — don't retry in a
  loop.
- Always explicitly load the correct profile first — don't guess a profile name, and
  don't assume the currently-open one is correct:
  `curl -s http://localhost:8765 -X POST -d '{"action": "loadProfile", "version": 6, "params": {"name": "Obsidian Flashcards"}}'`
  This is the "Obsidian Flashcards" profile above. Never call `loadProfile` with any
  other name without asking the user first — switching profiles changes which
  collection is open in their Anki window.

## Deck name

Take the flashcard file's `#anki/...` tag and drop the leading `anki/` segment; the
rest, with `/` replaced by `::`, is the Anki deck name. Example:

`#anki/Spanish/A1-Breakthrough-Absolute-Beginner/A1-1-Phonetics-Pronunciation-Orthography/A1-1-1-Vowels-Consonants-and-Accent-Marks/A1-1-1-1-Pure-Vowel-Sounds`

→ deck `Spanish::A1-Breakthrough-Absolute-Beginner::A1-1-Phonetics-Pronunciation-Orthography::A1-1-1-Vowels-Consonants-and-Accent-Marks::A1-1-1-1-Pure-Vowel-Sounds`

Create it first (idempotent — safe to call even if it already exists; Anki creates
any missing parent decks automatically):

`{"action": "createDeck", "version": 6, "params": {"deck": "<deck name>"}}`

## Note model

Use the built-in `Basic` model, fields `Front` and `Back`. Front = the card's
front-cell text; Back = the back-cell text with the
`<br><br><!--ANKI_NOTE_ID:...-->` suffix stripped (that suffix is Obsidian-side
bookkeeping, not part of the answer).

## Avoiding duplicates

Before creating a card, check whether its existing `<!--ANKI_NOTE_ID:...-->` comment
(if any) resolves to a real note:

`{"action": "notesInfo", "version": 6, "params": {"notes": [<id>]}}`

An empty `{}` in the result means that ID is stale (points at nothing) — create a
fresh note for that card. A populated result means the note already exists — leave
it alone unless the card content changed (then use `updateNoteFields` on that ID
instead of creating a new one). Never blindly `addNotes` for a card whose ID already
resolves to a real note.

## Creating notes

For each card that needs one, call `addNotes` (batch in one call per flashcard file
where possible) with:

```json
{
  "action": "addNotes",
  "version": 6,
  "params": {
    "notes": [
      {
        "deckName": "<deck name>",
        "modelName": "Basic",
        "fields": { "Front": "<front text>", "Back": "<back text>" },
        "options": { "allowDuplicate": false },
        "tags": ["obsidian_flashcards_synced"]
      }
    ]
  }
}
```

Use the `obsidian_flashcards_synced` tag (not a different one) — it marks every note
this vault's tooling created, so they're easy to find/filter in Anki later.

Because content contains accented Spanish characters and quotes, build the JSON
payload with a script (Python's `json.dumps`, or equivalent) rather than hand-quoting
it in a shell one-liner — quoting mistakes there are easy to make and hard to spot.

## Writing IDs back

`addNotes` returns one ID per note in request order (or `null` for a rejected
duplicate). Write each real ID into that card's
`<br><br><!--ANKI_NOTE_ID:<id>-->` comment in the flashcard file, replacing whatever
was there before.

## Verify

After creating notes, confirm with `findCards` on the deck (or `notesInfo` on the new
IDs) that the expected count exists before reporting the flashcard file as done.
