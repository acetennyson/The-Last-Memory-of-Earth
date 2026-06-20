import { arc3Part1Memories } from './../content/__tests__/memories/arc3';
import type { GameContent } from '../engine';
import { communicationMemories } from '../content/memories/communication';
import { aiMemories } from '../content/memories/ai';
import { silenceMemories } from '../content/memories/silence';
import { communicationEvidence } from '../content/evidence/communication';
import { aiEvidence } from '../content/evidence/ai';
import { silenceEvidence } from '../content/evidence/silence';
import { broadcastPatternA } from '../content/evidence/broadcast-pattern-a';
import { broadcastPatternB } from '../content/evidence/broadcast-pattern-b';
import { prophetPatternE } from '../content/evidence/prophet-pattern-e';
import { arc1Evidence } from '../content/evidence/arc/arc1-evidence';
import { arc1Part1Memories } from '../content/memories/arc/arc1-part1';
import { arc1Part2Memories } from '../content/memories/arc/arc1-part2';
import { arc2Part1Memories } from '../content/memories/arc/arc2-part1';
import { arc2Part2Memories } from '../content/memories/arc/arc2-part2';
import { arc2Evidence } from '../content/evidence/arc/arc2-evidence';
import { ordinaryBatch1Evidence } from '../content/evidence/ordinary/ordinary-batch1-evidence';
import { ordinaryBatch1Memories } from '../content/memories/ordinary/ordinary-batch-1';
import { arc3Evidence } from '../content/evidence/arc/arc3-evidence';
import { arc3Part2Memories } from '../content/memories/arc/arc3-part2';
import { fabricatedBatch1Evidence } from '../content/evidence/fabricated/fabricated-batch1-evidence';
import { fabricatedBatch1Memories } from '../content/memories/fabricated/fabricated-batch-1';

// THE LAST MEMORY OF EARTH - Organized Historical Content
export const historicalContent: GameContent = {
  memories: [
    ...arc1Part1Memories,
    ...ordinaryBatch1Memories,
    ...arc1Part2Memories,
    ...communicationMemories,
    ...aiMemories,
    ...silenceMemories,
    ...arc2Part1Memories,
    ...arc2Part2Memories,
    ...arc3Part1Memories,
    ...arc3Part2Memories,
    ...fabricatedBatch1Memories,
  ].sort((a, b) => parseInt(a.era) - parseInt(b.era)),
  
  evidence: [
    ...communicationEvidence,
    ...aiEvidence,
    ...silenceEvidence,
    ...broadcastPatternA,
    ...broadcastPatternB,
    ...prophetPatternE,
    ...arc1Evidence,
    ...arc2Evidence,
    ...arc3Evidence,
    ...ordinaryBatch1Evidence,
    ...fabricatedBatch1Evidence
  ],
  
  contradictions: []
};