# ARCHIVE: THE LAST HISTORIAN OF HUMANITY

A narrative decision simulation game. You are the Last Archivist in humanity's final days — Earth is dying, and you must choose which memories to preserve for the civilizations that will follow.

Each decision shapes your Archive Profile across six value axes (compassion, progress, truth, freedom, power, legacy). The final profile determines what kind of civilization rises from the ashes — its government, economy, culture, military, and historical legacy.

## Game Flow

| Screen | Description |
|---|---|
| **BOOT** | Terminal-style system initialization |
| **INTRO** | Opening narrative — the Archivist's duty |
| **ARCHIVE** | Memory grid hub — browse and unlock memories |
| **MEMORY** | Full-screen memory viewer — read, investigate, preserve or discard |
| **INVESTIGATION** | Evidence carousel — explore a chosen path (government/testimony/corporate/ai_logs) with tier-colored cards, reliability/completeness/bias meters, and contradiction reveals |
| **CORRUPTED** | Glitch event — mid-game signal corruption triggered after processing several memories |
| **ENDING** | Archive statistics, truth confidence, and the civilization that emerged from your choices |
| **HISTORY_BOOK** | The final record — chapters shaped by your preserved memories, a closing quote, and options to re-read or begin a new archive |

## Key Mechanics

- **Preserve / Discard** — each memory can be kept for posterity or discarded. Preserving shifts your profile; discarding does not.
- **Memory Dependencies** — some memories chain behind others. A memory may require specific earlier memories to be preserved before it unlocks (`dependsOn`), or a minimum number of investigations before it becomes available (`minInvestigations`). Discarding a critical dependency permanently locks its chain.
- **Investigation Paths** — each memory can be investigated through one of four lenses: government documents, personal testimony, corporate records, or AI logs. Evidence is filtered by path and revealed step by step.
- **Contradictions** — discovered when evidence across memories conflicts. Each contradiction found increases narrative tension and uncertainty.
- **Profile-Driven Ending** — six value axes (all starting at 50) shift as you preserve memories. The final values determine the civilization that inherits Earth:
  - Highest value → civilization archetype
  - Government, economy, culture, science, military, environment, media, historical events, and stability all derive from the profile
- **Corruption** — signal degradation events introduce glitch text, fragmented titles, and atmospheric distortion mid-game.

## Visual Design

Cyber/manga hybrid aesthetic:
- **Archive Blue** `#6CCBFF` and **Deep Space** `#080B14` as primary palette
- Comic-style panel borders with ink-bleed effects
- Scanned texture overlays and glitch artifacts
- Matrix rain background (BOOT / INTRO screens)
- Particle field with slow orbit animation (ambient background)
- Typewriter text reveals with dramatic line rendering
- Signal reconstruction animation before evidence appears

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 6 |
| Build | Create React App (react-scripts 5) |
| Rendering | ReactMarkdown for narrative content |
| Icons | FontAwesome (investigation paths, memory cards) |
| State | UI state via `useGame` hook; game logic via standalone domain engine |
| Engine | Framework-free TypeScript engine in `src/engine/` (not modified by UI work) |
| Package | pnpm |

## Project Structure

```
apps/web/src/
├── components/     # Reusable UI components (AmbientBackground, MatrixBackground, ArchiveBlocks, SignalReconstruction, etc.)
├── content/        # Narrative content organized by arc, type, and evidence patterns
├── data/           # Content assembly (historicalContent.ts, sampleContent.ts)
├── engine/         # Domain engine — GameEngine, MemorySelector, ProfileService, EvidenceService, CivilizationGenerator, etc.
├── hooks/          # useGame.ts — independent state management bridge between engine and UI
├── pages/          # Screen components (Boot, Intro, Archive, Memory, Investigation, Corrupted, Ending, HistoryBook)
├── styles/         # cyber.css — custom cyber/manga stylesheet
└── utils/          # Utilities (archiveSystem, corruption engine, animations)
```

## Scripts

```bash
pnpm start       # Development server on http://localhost:3000 (ESLint plugin disabled)
pnpm build       # Production build — CI=false DISABLE_ESLINT_PLUGIN=true react-scripts build
pnpm test        # Test runner in interactive watch mode
```

The default CRA ESLint plugin is disabled because the engine under `src/engine/` was authored in a different convention and produces lint warnings that do not affect correctness.

## Development Notes

- The `useGame()` hook manages UI state independently from the engine. Player decisions (preserve/discard) are tracked as Sets in the hook and only replayed onto the engine's profile immediately before ending generation. This keeps a single source of truth for the ending while avoiding direct engine mutation during gameplay.
- Engine files (`src/engine/`) are never modified by UI work — all engine interaction goes through the hook.
- Content is organized in `src/content/` by narrative arc (arc1/arc2/arc3) and type (ordinary/fabricated/ai/communication/silence) with parallel evidence directories.
- Memories are sorted by `era` (ascending) in `historicalContent.ts`.
