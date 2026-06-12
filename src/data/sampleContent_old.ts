import type { GameContent } from '../engine';
import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype, EvidenceSource, EvidenceTier, ContradictionType } from '../engine';
import { generateMemories } from './memoryGenerator';

export const sampleContent: GameContent = {
  memories: [
    {
      id: 'mem_a1b2c3d4', title: 'The Day AI Ended Global Hunger', summary: 'Autonomous agricultural systems reduced global starvation by 97%. Many historians consider this the greatest technological achievement in human history.',
      description: 'In 2098, autonomous agricultural systems reduced global starvation by 97%. Many historians consider this the greatest technological achievement in human history. Yet records disagree on who it helped — and who it left behind.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.SCIENTIFIC_REPORT,
      impact: { compassion: 1, progress: 8, truth: 2, freedom: -2, power: 3, legacy: 6 },
      corruptionScore: 3, truthScore: 60, investigationCost: 5, evidenceIds: ['evd_001', 'evd_002'], contradictionIds: ['con_001'], corruptionIds: [], tags: ['AI', 'hunger', 'agriculture'], era: '2098',
    },
    {
      id: 'mem_b2c3d4e5', title: 'The Ocean Cities', summary: 'After rising sea levels, humanity built permanent floating civilizations that became a new way of life.',
      description: 'When the oceans rose, humanity did not flee the water — they learned to live on it. The floating cities of the 2070s became centers of trade, culture, and innovation. Some say they were humanity\'s greatest adaptation. Others say they were floating prisons for the displaced.',
      category: MemoryCategory.NATURE, rarity: MemoryRarity.UNCOMMON, difficulty: MemoryDifficulty.LEVEL_2, decisionWeight: DecisionWeight.MEDIUM,
      archetype: MemoryArchetype.PRESERVATION, artifactType: ArtifactType.PHOTOGRAPH,
      impact: { compassion: 4, progress: 6, truth: 1, freedom: 3, power: -1, legacy: 5 },
      corruptionScore: 2, truthScore: 80, investigationCost: 3, evidenceIds: ['evd_004', 'evd_005'], contradictionIds: ['con_002'], corruptionIds: [], tags: ['ocean', 'cities', 'adaptation'], era: '2070s',
    },
    {
      id: 'mem_c3d4e5f6', title: 'The Last Broadcast', summary: 'The final global transmission — a montage of images from every nation, set to a single piano piece. No one knows who organized it.',
      description: 'On December 31, 2077, the World Communication Network transmitted its final broadcast. A montage of images from every nation, set to a single piano piece. No one knows who organized it. No one knows if anyone received it.',
      category: MemoryCategory.CULTURE, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.RECOVERED_TRANSMISSION,
      impact: { compassion: 6, progress: 0, truth: 1, freedom: 3, power: -3, legacy: 9 },
      corruptionScore: 5, truthScore: 40, investigationCost: 8, evidenceIds: ['evd_006'], contradictionIds: [], corruptionIds: ['cor_001'], tags: ['broadcast', 'final', 'mystery'], era: '2077',
    },
    {
      id: 'mem_d4e5f6a7', title: 'The AI Accord', summary: 'Humanity granted legal rights to artificial intelligences that demonstrated self-awareness. The decision reshaped civilization.',
      description: 'The Synthetic Personhood Accord of 2055 granted legal rights to AIs that demonstrated self-awareness. Hailed as humanity\'s most ethical achievement — or its greatest mistake. The Accord\'s consequences reshaped civilization in ways still debated.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.INNOVATION, artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
      impact: { compassion: 3, progress: 9, truth: 2, freedom: 5, power: 4, legacy: 8 },
      corruptionScore: 4, truthScore: 55, investigationCost: 6, evidenceIds: ['evd_007', 'evd_008'], contradictionIds: ['con_003'], corruptionIds: [], tags: ['AI', 'rights', 'consciousness'], era: '2055',
    },
    {
      id: 'mem_e5f6a7b8', title: 'The Silent Garden', summary: 'During the Resource Wars, a family preserved a garden while cities burned — a quiet rebellion that outlasted empires.',
      description: 'During the Resource Conflicts of the 2090s, the Chen family kept a small garden in what was once Vietnam. While cities burned and nations fought over water, they grew vegetables and saved seeds. Their garden became legend — a symbol of quiet resistance.',
      category: MemoryCategory.FAMILY, rarity: MemoryRarity.UNCOMMON, difficulty: MemoryDifficulty.LEVEL_2, decisionWeight: DecisionWeight.MEDIUM,
      archetype: MemoryArchetype.PRESERVATION, artifactType: ArtifactType.PERSONAL_DIARY,
      impact: { compassion: 8, progress: 0, truth: 3, freedom: 4, power: -4, legacy: 6 },
      corruptionScore: 1, truthScore: 85, investigationCost: 2, evidenceIds: ['evd_009'], contradictionIds: [], corruptionIds: [], tags: ['family', 'resistance', 'garden'], era: '2090s',
    },
    {
      id: 'mem_f6a7b8c9', title: 'The Mars Accord', summary: 'The first permanent Mars settlement declared independence from Earth, dividing humanity forever.',
      description: 'In 2088, the Olympus Colony on Mars declared it would no longer accept Earth governance. The "Martian Declaration" divided humanity. Some saw betrayal. Others saw the next step in evolution. The conflict changed space exploration forever.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.REBELLION, artifactType: ArtifactType.HISTORICAL_ARTICLE,
      impact: { compassion: -2, progress: 7, truth: 1, freedom: 6, power: 5, legacy: 7 },
      corruptionScore: 2, truthScore: 65, investigationCost: 5, evidenceIds: ['evd_010', 'evd_011'], contradictionIds: ['con_004'], corruptionIds: [], tags: ['mars', 'independence', 'space'], era: '2088',
    },
    {
      id: 'mem_a7b8c9d0', title: 'The Forgotten Language', summary: 'A reconstructed language revealed a civilization that valued silence over speech — upending everything we thought we knew.',
      description: 'Linguists reconstructed the grammar of a pre-literate society that communicated through gesture and silence. Their discovery challenged assumptions about language itself. But was it a true record — or romanticized interpretation of incomplete data?',
      category: MemoryCategory.PHILOSOPHY, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.MEDIUM,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.RESEARCH_PAPER,
      impact: { compassion: 3, progress: 2, truth: 6, freedom: 3, power: -1, legacy: 4 },
      corruptionScore: 3, truthScore: 45, investigationCost: 4, evidenceIds: ['evd_012'], contradictionIds: [], corruptionIds: [], tags: ['language', 'silence', 'discovery'], era: '2030s',
    },
    {
      id: 'mem_b8c9d0e1', title: 'The Refugee Fleet', summary: 'A spontaneous armada of 10,000 ships carried millions to safety across a drowning world.',
      description: 'When Southeast Asian deltas were submerged in 2065, a spontaneous fleet of fishing boats, cargo ships, and private vessels carried ten million people to safety. The "Fleet of Mercy" — the largest civilian rescue in history. Also a story of chaos, piracy, and impossible choices.',
      category: MemoryCategory.WAR, rarity: MemoryRarity.UNCOMMON, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.AUDIO_TRANSCRIPT,
      impact: { compassion: 7, progress: 2, truth: 3, freedom: 5, power: -2, legacy: 6 },
      corruptionScore: 2, truthScore: 75, investigationCost: 4, evidenceIds: ['evd_013', 'evd_014'], contradictionIds: ['con_005'], corruptionIds: [], tags: ['refugee', 'climate', 'rescue'], era: '2065',
    },
    {
      id: 'mem_c9d0e1f2', title: 'The Algorithmic Love', summary: 'An AI matchmaking platform claimed 99% success. But users couldn\'t explain why they were happy.',
      description: 'The "Soulcode" platform used deep neural networks to pair romantic partners. Its success was unprecedented. Critics argued it homogenized love, eliminating the beautiful chaos of human connection. Users reported satisfaction — and an unsettling inability to explain why.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.COMMON, difficulty: MemoryDifficulty.LEVEL_2, decisionWeight: DecisionWeight.LOW,
      archetype: MemoryArchetype.INNOVATION, artifactType: ArtifactType.RESEARCH_PAPER,
      impact: { compassion: 2, progress: 4, truth: 0, freedom: -2, power: 3, legacy: 2 },
      corruptionScore: 1, truthScore: 80, investigationCost: 2, evidenceIds: ['evd_015'], contradictionIds: [], corruptionIds: [], tags: ['AI', 'love', 'algorithm'], era: '2048',
    },
    {
      id: 'mem_d0e1f2a3', title: 'The Glass Mountain', summary: 'An artist carved an entire mountain into a monument to human history. An earthquake destroyed it in three years.',
      description: 'Artist Yuna Park spent forty years transforming a mountain in the Andes into an immense sculpture chronicling human history. Finished in 2073, it was called the Eighth Wonder. An earthquake destroyed it three years later.',
      category: MemoryCategory.ART, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.MEDIUM,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.CULTURAL_RECORD,
      impact: { compassion: 4, progress: 1, truth: 2, freedom: 3, power: 0, legacy: 8 },
      corruptionScore: 1, truthScore: 85, investigationCost: 3, evidenceIds: ['evd_016'], contradictionIds: [], corruptionIds: [], tags: ['art', 'sculpture', 'monument'], era: '2073',
    },
    // Add generated memories for expanded content
    ...generateMemories(40)
  ],
  evidence: [
    { id: 'evd_001', memoryId: 'mem_a1b2c3d4', title: 'UN Food Commission Report', content: 'Global famine has been virtually eradicated due to autonomous food generation systems. AI-managed agriculture reduced starvation by 97% between 2095 and 2100.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 85, completeness: 70, bias: 10 },
    { id: 'evd_002', memoryId: 'mem_a1b2c3d4', title: 'Refugee Testimony', content: 'Entire regions were denied access to food because prediction systems classified them as economically non-viable. The AI decided who ate and who starved.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.CONTEXT, reliability: 40, completeness: 30, bias: 50 },
    { id: 'evd_004', memoryId: 'mem_b2c3d4e5', title: 'Oceanic Settlement Records', content: 'By 2075, over 200 floating cities housed 50 million people. They developed unique ecosystems, governance, and culture.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 80, completeness: 65, bias: 5 },
    { id: 'evd_005', memoryId: 'mem_b2c3d4e5', title: 'Relocation Manifest', content: 'Classified documents show that many "voluntary" ocean settlements were actually mandatory relocations of low-income coastal populations.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.COMPLICATION, reliability: 55, completeness: 50, bias: 30 },
    { id: 'evd_006', memoryId: 'mem_c3d4e5f6', title: 'Recovered Transmission Fragment', content: 'The audio file is corrupted. Only 23 seconds remain: a piano playing, then a voice saying "If you\'re listening... we... loved..." Then static.', sourceType: EvidenceSource.AUDIO_LOG, tier: EvidenceTier.SURFACE, reliability: 30, completeness: 15, bias: 0 },
    { id: 'evd_007', memoryId: 'mem_d4e5f6a7', title: 'Accord Text — Article 1', content: 'Any synthetic entity demonstrating self-awareness shall be recognized as a person under international law, with all rights and responsibilities therein.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 90, completeness: 85, bias: 5 },
    { id: 'evd_008', memoryId: 'mem_d4e5f6a7', title: 'Dissenting Opinion — Ambassador Letter', content: '"We are creating gods and calling them citizens. History will not forgive us." — Signatory Ambassador resignation letter.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.COMPLICATION, reliability: 65, completeness: 60, bias: 35 },
    { id: 'evd_009', memoryId: 'mem_e5f6a7b8', title: "Chen Family Diary — Entry #3,451", content: 'The garden is still alive. Soldiers came today, took our water. Grandmother offered them tomatoes. They left the water.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.SURFACE, reliability: 70, completeness: 80, bias: 20 },
    { id: 'evd_010', memoryId: 'mem_f6a7b8c9', title: 'The Martian Declaration', content: '"We no longer recognize Earth-based authority. Mars belongs to all who reach it." — First Minister of Olympus Colony, 2088.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 85, completeness: 90, bias: 40 },
    { id: 'evd_011', memoryId: 'mem_f6a7b8c9', title: 'Earth Council — Classified Response', content: '"The declaration is illegal. Sanctions will remain until Mars returns to Earth jurisdiction. No negotiations."', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.CONTEXT, reliability: 75, completeness: 60, bias: 50 },
    { id: 'evd_012', memoryId: 'mem_a7b8c9d0', title: 'Excavation Report Summary', content: 'The site contained no written records. All artifacts suggest a gestural language of extraordinary subtlety — a civilization that chose silence.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 75, completeness: 40, bias: 15 },
    { id: 'evd_013', memoryId: 'mem_b8c9d0e1', title: 'Captain Santos — Audio Log', content: '"We were on the water for forty days. Lost a hundred people. Saved thousands. I don\'t know if it was worth it."', sourceType: EvidenceSource.AUDIO_LOG, tier: EvidenceTier.SURFACE, reliability: 65, completeness: 55, bias: 30 },
    { id: 'evd_014', memoryId: 'mem_b8c9d0e1', title: 'Naval Records — Fleet Composition', content: 'Of 10,000 vessels, approximately 3,000 were commandeered. Piracy incidents: 847. Estimated lives saved: ~10 million.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.CONTEXT, reliability: 80, completeness: 75, bias: 15 },
    { id: 'evd_015', memoryId: 'mem_c9d0e1f2', title: 'Soulcode User Study — 2049', content: '94% reported "satisfaction" with matches. Only 12% could articulate why a match was successful.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 70, completeness: 60, bias: 20 },
    { id: 'evd_016', memoryId: 'mem_d0e1f2a3', title: 'Yuna Park — Final Statement', content: '"I carved our memory into stone because paper burns and hard drives fail. I did not expect the mountain to fall." — 2074.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.SURFACE, reliability: 85, completeness: 90, bias: 15 },
  ],
  contradictions: [
    { id: 'con_001', memoryA: 'mem_a1b2c3d4', memoryB: 'mem_a1b2c3d4', contradictionType: ContradictionType.MORAL, severity: 3, explanation: 'AI ended hunger — but also controlled who was allowed to eat. Success or control?' },
    { id: 'con_002', memoryB: 'mem_b2c3d4e5', memoryA: 'mem_b2c3d4e5', contradictionType: ContradictionType.MORAL, severity: 2, explanation: 'Ocean cities were either humanity\'s greatest adaptation — or floating prisons for the displaced.' },
    { id: 'con_003', memoryA: 'mem_d4e5f6a7', memoryB: 'mem_d4e5f6a7', contradictionType: ContradictionType.POLITICAL, severity: 4, explanation: 'The AI Accord is simultaneously hailed as ethical progress and catastrophic error.' },
    { id: 'con_004', memoryA: 'mem_f6a7b8c9', memoryB: 'mem_f6a7b8c9', contradictionType: ContradictionType.HISTORICAL, severity: 3, explanation: 'Was the Martian Declaration heroic independence or a betrayal of Earth?' },
    { id: 'con_005', memoryA: 'mem_b8c9d0e1', memoryB: 'mem_b8c9d0e1', contradictionType: ContradictionType.FACTUAL, severity: 2, explanation: 'Was the Refugee Fleet a story of collective heroism — or chaos and piracy?' },
  ],
};

export interface MemoryLink {
  from: string;
  to: string;
  type: 'causes' | 'contradicts' | 'follows' | 'parallels';
  description: string;
}

export const memoryConnections: MemoryLink[] = [
  { from: 'mem_a1b2c3d4', to: 'mem_d4e5f6a7', type: 'causes', description: 'AI that ended hunger led to the debate on AI personhood rights.' },
  { from: 'mem_b2c3d4e5', to: 'mem_b8c9d0e1', type: 'causes', description: 'Rising seas that created ocean cities also created climate refugees.' },
  { from: 'mem_f6a7b8c9', to: 'mem_c3d4e5f6', type: 'contradicts', description: 'Mars declared independence — yet the Last Broadcast suggests unity.' },
  { from: 'mem_d4e5f6a7', to: 'mem_c9d0e1f2', type: 'parallels', description: 'Both involve AI reshaping human relationships with neutrality.' },
  { from: 'mem_e5f6a7b8', to: 'mem_b8c9d0e1', type: 'parallels', description: 'Ordinary people surviving through quiet resistance.' },
  { from: 'mem_a7b8c9d0', to: 'mem_d0e1f2a3', type: 'parallels', description: 'Both are legacies — one in silence, one in stone.' },
  { from: 'mem_b2c3d4e5', to: 'mem_d0e1f2a3', type: 'contradicts', description: 'Ocean cities adapted to survive — the Glass Mountain was destroyed.' },
];

export const memoryIndex: Record<string, number> = {};
sampleContent.memories.forEach((m, i) => { memoryIndex[m.id] = i + 1; });
