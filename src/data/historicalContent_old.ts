import type { GameContent } from '../engine';
import { communicationMemories } from '../content/memories/communication';
import { aiMemories } from '../content/memories/ai';
import { silenceMemories } from '../content/memories/silence';
import { communicationEvidence } from '../content/evidence/communication';
import { aiEvidence } from '../content/evidence/ai';
import { silenceEvidence } from '../content/evidence/silence';
import { communicationContradictions, aiContradictions, silenceContradictions } from '../content/contradictions/index';

// THE LAST MEMORY OF EARTH - Organized Historical Content
export const historicalContent: GameContent = {
  memories: [
    ...communicationMemories,
    ...aiMemories,
    ...silenceMemories
  ],
  
  evidence: [
    ...communicationEvidence,
    ...aiEvidence,
    ...silenceEvidence
  ],
  
  contradictions: [
    ...communicationContradictions,
    ...aiContradictions,
    ...silenceContradictions
  ]
};