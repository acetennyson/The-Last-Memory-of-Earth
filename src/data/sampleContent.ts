import type { GameContent } from '../engine';
import { narrativeContent } from './narrativeContent';

export const sampleContent: GameContent = narrativeContent;

export interface MemoryLink {
  from: string;
  to: string;
  type: 'causes' | 'contradicts' | 'follows' | 'parallels';
  description: string;
}

// Memory connections showing the narrative arcs
export const memoryConnections: MemoryLink[] = [
  // AI Ascension Arc
  { from: 'mem_ai_001', to: 'mem_ai_002', type: 'causes', description: 'Harvest Network success led to declaration that hunger was ended.' },
  { from: 'mem_ai_002', to: 'mem_ai_003', type: 'causes', description: 'Statistical success with hunger led to AI assistance in democracy.' },
  { from: 'mem_ai_003', to: 'mem_ai_004', type: 'causes', description: 'AI-assisted voting expanded into AI-managed governance.' },
  
  // Climate Era Arc  
  { from: 'mem_climate_001', to: 'mem_climate_002', type: 'causes', description: 'Coastal retreats necessitated permanent ocean settlements.' },
  
  // Mars Lie Arc - The smoking gun connections
  { from: 'mem_mars_001', to: 'mem_mars_002', type: 'contradicts', description: 'Mars success story contradicted by ominous final transmission.' },
  { from: 'mem_mars_002', to: 'mem_mars_003', type: 'causes', description: 'Silent transmission prompted investigation into Mars records.' },
  { from: 'mem_mars_003', to: 'mem_mars_004', type: 'causes', description: 'Missing launch records led to discovery of Mars deception.' },
  
  // The final revelations
  { from: 'mem_ai_004', to: 'mem_final_001', type: 'causes', description: 'Invisible AI government may have prevented final democratic election.' },
  { from: 'mem_mars_004', to: 'mem_archive_001', type: 'parallels', description: 'Both reveal that official records may be fabricated.' },
];

export const memoryIndex: Record<string, number> = {};
narrativeContent.memories.forEach((m, i) => { 
  memoryIndex[m.id] = i + 1; 
});