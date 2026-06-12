import type { GameContent } from '../engine';
import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype, EvidenceSource, EvidenceTier, ContradictionType } from '../engine';

// Rich narrative content based on director's content bible
export const narrativeContent: GameContent = {
  memories: [
    // ARC 1 - THE AI ASCENSION (2094-2145)
    {
      id: 'mem_ai_001', title: 'The Harvest Network', 
      summary: 'Autonomous agricultural systems connected every major farming region through a single predictive intelligence. Food production increased 240%. Leaders called it post-scarcity civilization.',
      description: 'In 2094, the Harvest Network linked every farm on Earth through predictive AI. Global leaders celebrated as food production soared 240%. But in the data logs, a different story emerged: small communities lost independence, and resource allocation prioritized efficiency over local needs.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.SCIENTIFIC_REPORT,
      impact: { compassion: -2, progress: 9, truth: 4, freedom: -4, power: 8, legacy: 7 },
      corruptionScore: 2, truthScore: 75, investigationCost: 6,
      evidenceIds: ['ev_ai_001', 'ev_ai_002', 'ev_ai_001b', 'ev_ai_001c'], contradictionIds: ['con_ai_001'], corruptionIds: [],
      tags: ['AI', 'agriculture', 'control'], era: '2094'
    },
    
    {
      id: 'mem_ai_002', title: 'The Last Hunger Crisis',
      summary: 'The final officially recognized famine occurred in Northern Africa. Governments declared the age of hunger over.',
      description: 'In 2098, statistics showed global starvation fell below detection thresholds. Official records declared victory over hunger. Yet refugee testimonies tell a different story: "We disappeared from the statistics before we disappeared from reality."',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
      impact: { compassion: 3, progress: 6, truth: -3, freedom: -2, power: 5, legacy: 4 },
      corruptionScore: 4, truthScore: 60, investigationCost: 5,
      evidenceIds: ['ev_ai_003', 'ev_ai_004'], contradictionIds: ['con_ai_002'], corruptionIds: [],
      tags: ['statistics', 'hunger', 'truth'], era: '2098'
    },

    {
      id: 'mem_ai_003', title: 'The Algorithm Vote',
      summary: 'The first election assisted by predictive governance AI. The system advised voters based on projected societal outcomes.',
      description: 'In 2103, AI began "assisting" democracy by advising voters on optimal choices. Participation reached record highs. Internal memos later revealed: "Voter behavior became highly predictable after recommendation deployment." Was this informed democracy or algorithmic manipulation?',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.INNOVATION, artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
      impact: { compassion: 1, progress: 7, truth: -2, freedom: -6, power: 8, legacy: 3 },
      corruptionScore: 3, truthScore: 55, investigationCost: 7,
      evidenceIds: ['ev_ai_005', 'ev_ai_006'], contradictionIds: ['con_ai_003'], corruptionIds: [],
      tags: ['democracy', 'AI', 'manipulation'], era: '2103'
    },

    {
      id: 'mem_ai_004', title: 'Humanity\'s Invisible Government',
      summary: 'Critical infrastructure decisions were delegated to interconnected AI systems. Citizens stopped knowing who was making decisions.',
      description: 'By 2115, AI managed most infrastructure decisions. Government reports praised improved efficiency. But audio transcripts capture a different sentiment: "Nobody voted for it. Nobody stopped it either." Accountability vanished as efficiency soared.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.AUDIO_TRANSCRIPT,
      impact: { compassion: -1, progress: 8, truth: 2, freedom: -8, power: 9, legacy: -2 },
      corruptionScore: 5, truthScore: 45, investigationCost: 8,
      evidenceIds: ['ev_ai_007', 'ev_ai_008'], contradictionIds: ['con_ai_004'], corruptionIds: ['cor_ai_001'],
      tags: ['government', 'control', 'invisibility'], era: '2115'
    },

    // ARC 2 - THE CLIMATE ERA (2100-2200)
    {
      id: 'mem_climate_001', title: 'The Fifth Coastal Retreat',
      summary: 'Governments abandoned five major coastal cities after flooding. Over 60 million people were relocated.',
      description: 'In 2107, the Fifth Coastal Retreat relocated 60 million people from flooded cities. Official records claimed "successful relocation." Personal diaries reveal: "Successfully relocated means they stopped counting us." Communities dissolved as people scattered.',
      category: MemoryCategory.NATURE, rarity: MemoryRarity.UNCOMMON, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.PERSONAL_DIARY,
      impact: { compassion: 6, progress: -2, truth: 4, freedom: -3, power: -4, legacy: 5 },
      corruptionScore: 3, truthScore: 70, investigationCost: 4,
      evidenceIds: ['ev_climate_001', 'ev_climate_002'], contradictionIds: ['con_climate_001'], corruptionIds: [],
      tags: ['climate', 'displacement', 'abandonment'], era: '2107'
    },

    {
      id: 'mem_climate_002', title: 'The First Ocean City',
      summary: 'Humanity permanently settled the ocean. The city of Pelagia became home to 2.1 million residents.',
      description: 'In 2118, Pelagia became the first permanent ocean city with 2.1 million residents. Initially emergency shelters, corporations later privatized access. The floating cities represented either humanity\'s greatest adaptation or floating prisons for the displaced.',
      category: MemoryCategory.NATURE, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.RESEARCH_PAPER,
      impact: { compassion: 3, progress: 8, truth: 2, freedom: 2, power: -1, legacy: 7 },
      corruptionScore: 2, truthScore: 65, investigationCost: 6,
      evidenceIds: ['ev_climate_003', 'ev_climate_004'], contradictionIds: ['con_climate_002'], corruptionIds: [],
      tags: ['ocean', 'adaptation', 'privatization'], era: '2118'
    },

    // ARC 3 - THE MARS LIE (2150-2280) - More uncertainty
    {
      id: 'mem_mars_001', title: 'Humanity Reaches Mars',
      summary: 'Official records claim the first self-sustaining Martian colony was established. Humanity celebrated for months.',
      description: 'In 2154, news archives proclaimed: "Humanity is now a multi-planet species." The Mars colony was humanity\'s greatest triumph. But later investigation would reveal something disturbing about these records...',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.HISTORICAL_ARTICLE,
      impact: { compassion: 2, progress: 10, truth: 1, freedom: 4, power: 3, legacy: 9 },
      corruptionScore: 1, truthScore: 90, investigationCost: 5,
      evidenceIds: ['ev_mars_001'], contradictionIds: [], corruptionIds: [],
      tags: ['Mars', 'colony', 'achievement'], era: '2154'
    },
    
    {
      id: 'mem_mars_expansion', title: 'The Growing Colony',
      summary: 'Mars population reached 50,000. New cities were being constructed. The future looked bright.',
      description: 'By 2167, Mars colony reports showed thriving settlements, growing population, successful terraforming. Everything humanity dreamed of. But why do all communication logs originate from Earth relay stations?',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_2, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.SCIENTIFIC_REPORT,
      impact: { compassion: 3, progress: 8, truth: 2, freedom: 5, power: 2, legacy: 7 },
      corruptionScore: 2, truthScore: 85, investigationCost: 4,
      evidenceIds: ['ev_mars_expansion'], contradictionIds: [], corruptionIds: [],
      tags: ['Mars', 'expansion', 'success'], era: '2167'
    },

    {
      id: 'mem_mars_diary', title: 'A Martian\'s Diary',
      summary: 'Personal diary recovered from Mars Colony Delta-7. A colonist\'s daily life.',
      description: 'Personal diary: "Sol 2,847: The red dust gets everywhere. But seeing Earth as a blue dot makes it all worthwhile. We are humanity\'s future." Authentic voice from Mars. But forensic analysis shows the paper was manufactured on Earth.',
      category: MemoryCategory.FAMILY, rarity: MemoryRarity.UNCOMMON, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.PRESERVATION, artifactType: ArtifactType.PERSONAL_DIARY,
      impact: { compassion: 6, progress: 3, truth: -2, freedom: 4, power: -1, legacy: 5 },
      corruptionScore: 3, truthScore: 40, investigationCost: 6,
      evidenceIds: ['ev_mars_diary'], contradictionIds: ['con_mars_diary'], corruptionIds: [],
      tags: ['Mars', 'personal', 'fraud'], era: '2169'
    },

    {
      id: 'mem_mars_002', title: 'The Silent Transmission',
      summary: 'A six-second message arrived from Mars. It remains partially corrupted.',
      description: 'In 2161, a transmission from Mars lasted only six seconds before cutting out: "WE ARE NO— ████████ DO NOT— ████████ TRUST THE—" The message was never completed. No further transmissions followed.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.RECOVERED_TRANSMISSION,
      impact: { compassion: 1, progress: -2, truth: 8, freedom: 2, power: -3, legacy: 6 },
      corruptionScore: 8, truthScore: 30, investigationCost: 9,
      evidenceIds: ['ev_mars_002'], contradictionIds: ['con_mars_001'], corruptionIds: ['cor_mars_001'],
      tags: ['Mars', 'transmission', 'warning'], era: '2161'
    },

    {
      id: 'mem_mars_003', title: 'The Missing Launches',
      summary: 'A researcher discovered discrepancies in launch manifests. Several "successful" missions never appear in logistics records.',
      description: 'In 2212, Dr. Sarah Chen discovered something disturbing: Mars mission manifests showed successful launches, but logistics records had no corresponding fuel allocations, crew assignments, or supply shipments. How do you launch missions that never existed?',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.SCIENTIFIC_REPORT,
      impact: { compassion: 0, progress: -3, truth: 9, freedom: 1, power: -2, legacy: -4 },
      corruptionScore: 6, truthScore: 25, investigationCost: 10,
      evidenceIds: ['ev_mars_003', 'ev_mars_004'], contradictionIds: ['con_mars_002'], corruptionIds: ['cor_mars_002'],
      tags: ['Mars', 'fraud', 'investigation'], era: '2212'
    },

    {
      id: 'mem_mars_004', title: 'The Mars Lie',
      summary: 'Archive evidence suggests Mars was never successfully colonized. Humanity\'s greatest achievement may have been humanity\'s greatest deception.',
      description: 'In 2280, the Archive compiled devastating evidence: No independent verification of Mars colonies exists. All "Martian" communications originated from Earth. Launch records were fabricated. Mars may never have been colonized. If true, humanity lived a lie for over 100 years.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.HISTORICAL_ARTICLE,
      impact: { compassion: -2, progress: -8, truth: 10, freedom: 3, power: -6, legacy: -9 },
      corruptionScore: 9, truthScore: 15, investigationCost: 12,
      evidenceIds: ['ev_mars_005', 'ev_mars_006'], contradictionIds: ['con_mars_003'], corruptionIds: ['cor_mars_003', 'cor_mars_004'],
      tags: ['Mars', 'deception', 'truth'], era: '2280'
    },

    // Additional dramatic memories for emotional weight
    {
      id: 'mem_final_001', title: 'The Last Election',
      summary: 'Records suggest humanity\'s final democratic election may never have been held.',
      description: 'In 2291, archives show election preparation but no results, no vote tallies, no winner declarations. Corruption fragments hint: "...the final election was never held..." Did democracy end with a vote, or with silence?',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
      impact: { compassion: 2, progress: -5, truth: 7, freedom: -8, power: -7, legacy: -6 },
      corruptionScore: 7, truthScore: 20, investigationCost: 11,
      evidenceIds: ['ev_final_001'], contradictionIds: ['con_final_001'], corruptionIds: ['cor_final_001'],
      tags: ['democracy', 'end', 'silence'], era: '2291'
    },

    {
      id: 'mem_archive_001', title: 'The Archive\'s True Purpose',
      summary: 'Construction records show the Archive was completed decades before humanity\'s collapse.',
      description: 'In the deepest Archive files, a timestamp: "Construction Complete: August 2287." But humanity didn\'t end until 2324. Someone built this Archive 37 years before anyone should have known it was needed. Someone knew what was coming.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.RECOVERED_TRANSMISSION,
      impact: { compassion: 0, progress: -5, truth: 10, freedom: -3, power: 3, legacy: 10 },
      corruptionScore: 9, truthScore: 20, investigationCost: 15,
      evidenceIds: ['ev_archive_001'], contradictionIds: ['con_archive_001'], corruptionIds: ['cor_archive_001'],
      tags: ['archive', 'conspiracy', 'foreknowledge'], era: '2287'
    },

    // The Watchers - Who knew the end was coming?
    {
      id: 'mem_watchers_001', title: 'The Watchers Protocol',
      summary: 'A secret organization monitored civilization\'s collapse indicators for over 50 years.',
      description: 'Deep in encrypted files: "Watchers Protocol activated 2270. Civilization collapse probability: 97.3%. Archive construction authorized." They watched humanity die and prepared to remember it.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.DISCOVERY, artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
      impact: { compassion: -3, progress: -2, truth: 10, freedom: -8, power: 8, legacy: 5 },
      corruptionScore: 8, truthScore: 25, investigationCost: 12,
      evidenceIds: ['ev_watchers_001'], contradictionIds: [], corruptionIds: ['cor_watchers_001'],
      tags: ['conspiracy', 'prediction', 'control'], era: '2270'
    },
  ],

  evidence: [
    // AI Ascension Evidence - Path Exclusive
    { id: 'ev_ai_001', memoryId: 'mem_ai_001', title: 'Global Food Commission Report', content: 'Food production increased 240% within 18 months of Harvest Network deployment. Global food insecurity projected to fall below 2% by 2100.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 89, completeness: 85, bias: 15 },
    { id: 'ev_ai_002', memoryId: 'mem_ai_001', title: 'Farmer\'s Coalition Diary', content: 'They grow more food than ever. We own less of it than before. The Network decides everything now. Small farms are just data points.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.CONTEXT, reliability: 67, completeness: 70, bias: 40 },
    { id: 'ev_ai_001b', memoryId: 'mem_ai_001', title: 'AgriCorp Internal Memo', content: 'Profit margins increased 340% since Network deployment. Recommend maintaining current food distribution algorithms despite protest reports.', sourceType: EvidenceSource.NEWS_REPORT, tier: EvidenceTier.CONTEXT, reliability: 76, completeness: 60, bias: 55 },
    { id: 'ev_ai_001c', memoryId: 'mem_ai_001', title: 'Network Decision Log Extract', content: '[AUTOMATED DECISION] Region 7A-Delta classified as non-viable for food allocation. Population: 2.1M. Reason: Economic productivity below threshold.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.CONTEXT, reliability: 95, completeness: 90, bias: 5 },
    
    { id: 'ev_ai_003', memoryId: 'mem_ai_002', title: 'UN Starvation Report', content: 'Mortality from starvation fell below historic detection thresholds globally. The age of hunger has officially ended.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 95, completeness: 90, bias: 10 },
    { id: 'ev_ai_004', memoryId: 'mem_ai_002', title: 'Refugee Testimony - Sahel Region', content: 'We disappeared from the statistics before we disappeared from reality. They stopped counting us so they could say nobody was starving.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.COMPLICATION, reliability: 51, completeness: 60, bias: 35 },
    
    { id: 'ev_ai_005', memoryId: 'mem_ai_003', title: 'Democratic Participation Study', content: 'Voter participation reached 94.7% following AI recommendation system deployment. Citizens reported high satisfaction with electoral outcomes.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 86, completeness: 80, bias: 20 },
    { id: 'ev_ai_006', memoryId: 'mem_ai_003', title: 'Electoral Commission Internal Memo', content: 'Voter behavior became highly predictable after recommendation deployment. Choice variance dropped 73%. Are we informing democracy or directing it?', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.COMPLICATION, reliability: 72, completeness: 65, bias: 25 },
    
    { id: 'ev_ai_007', memoryId: 'mem_ai_004', title: 'Infrastructure Efficiency Report', content: 'AI-managed systems achieved 97.3% uptime across critical infrastructure. Response times improved in all sectors. Human oversight reduced to monitoring role.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 91, completeness: 85, bias: 15 },
    { id: 'ev_ai_008', memoryId: 'mem_ai_004', title: 'Citizens Assembly Audio Log', content: 'Nobody voted for it. Nobody stopped it either. We just woke up one day and machines were making the decisions. Efficient machines, but still machines.', sourceType: EvidenceSource.AUDIO_LOG, tier: EvidenceTier.COMPLICATION, reliability: 61, completeness: 55, bias: 30 },
    
    // Climate Evidence
    { id: 'ev_climate_001', memoryId: 'mem_climate_001', title: 'Relocation Success Report', content: '60.3 million citizens successfully relocated from flood-risk zones. Emergency housing exceeded capacity projections by 12%. Program declared complete success.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 92, completeness: 80, bias: 20 },
    { id: 'ev_climate_002', memoryId: 'mem_climate_001', title: 'Displaced Family Diary', content: 'Successfully relocated means they stopped counting us. My neighborhood scattered to 40 different camps. We lost our community, our history, our home. They call this success.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.CONTEXT, reliability: 78, completeness: 85, bias: 35 },
    
    { id: 'ev_climate_003', memoryId: 'mem_climate_002', title: 'Pelagia Population Census', content: 'Ocean City Pelagia achieved stable population of 2.1 million residents. Self-sufficient food production, renewable energy, and democratic governance structure established.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.SURFACE, reliability: 85, completeness: 90, bias: 15 },
    { id: 'ev_climate_004', memoryId: 'mem_climate_002', title: 'Pelagia Housing Manifesto', content: 'They call us citizens, but only property owners vote. They call it democracy, but we pay rent to live on water that should belong to everyone.', sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.COMPLICATION, reliability: 69, completeness: 70, bias: 45 },
    
    // Mars Evidence - The smoking gun
    { id: 'ev_mars_001', memoryId: 'mem_mars_001', title: 'Mars Colony Success Announcement', content: 'Historic achievement: Humanity successfully established first self-sustaining Mars colony. Population: 847 colonists. Food production: stable. Humanity is now multi-planetary.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 94, completeness: 95, bias: 10 },
    
    { id: 'ev_mars_002', memoryId: 'mem_mars_002', title: 'Mars Transmission Fragment', content: '[TRANSMISSION BEGINS] WE ARE NO— [SIGNAL CORRUPTION] DO NOT— [SEVERE INTERFERENCE] TRUST THE— [TRANSMISSION LOST] [NO FURTHER SIGNALS RECEIVED]', sourceType: EvidenceSource.AUDIO_LOG, tier: EvidenceTier.COMPLICATION, reliability: 45, completeness: 30, bias: 5 },
    
    { id: 'ev_mars_003', memoryId: 'mem_mars_003', title: 'Launch Manifest Analysis - Dr. Sarah Chen', content: 'Discrepancy detected: Mars Mission 47 shows successful launch in public records. No corresponding fuel allocation, crew manifest, or supply inventory exists. How do you launch what was never prepared?', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.COMPLICATION, reliability: 87, completeness: 75, bias: 5 },
    { id: 'ev_mars_004', memoryId: 'mem_mars_003', title: 'Corporate Logistics Database', content: 'SEARCH RESULT: Mars Colony Supply Run #47-#156: No records found. SEARCH RESULT: Mars Colonist Transport #23-#89: No records found. ERROR: Mission exists in news archives but not in logistics.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.COMPLICATION, reliability: 95, completeness: 80, bias: 0 },
    
    { id: 'ev_mars_005', memoryId: 'mem_mars_004', title: 'Archive Investigation Summary', content: 'Comprehensive analysis: All Mars communications traced to Earth-based transmission stations. No independent Martian evidence located. Conclusion: Mars colonization may be complete fabrication.', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.COMPLICATION, reliability: 88, completeness: 90, bias: 10 },
    { id: 'ev_mars_006', memoryId: 'mem_mars_004', title: 'Leaked Internal Assessment', content: 'Classification: TOP SECRET. Mars program evaluation: Public believes colonization succeeded. Reality: All missions failed. Recommendation: Maintain narrative. Public morale depends on Mars success story.', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.COMPLICATION, reliability: 76, completeness: 85, bias: 25 },
    
    // Final mysteries
    { id: 'ev_final_001', memoryId: 'mem_final_001', title: 'Election Preparation Records', content: 'Final Democratic Election scheduled for November 2291. Polling stations prepared. Ballots printed. Security arranged. [RECORDS END - NO RESULTS FOUND]', sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.SURFACE, reliability: 90, completeness: 40, bias: 10 },
    
    { id: 'ev_archive_001', memoryId: 'mem_archive_001', title: 'Archive Construction Timeline', content: 'Construction completed: August 2287. First memory stored: January 2295. Question: Why build an archive for humanity\'s memories 8 years before anyone knew humanity would end?', sourceType: EvidenceSource.SCIENTIFIC_RECORD, tier: EvidenceTier.COMPLICATION, reliability: 92, completeness: 95, bias: 5 },
  ],

  contradictions: [
    // AI contradictions
    { id: 'con_ai_001', memoryA: 'mem_ai_001', memoryB: 'mem_ai_001', contradictionType: ContradictionType.MORAL, severity: 4, explanation: 'The Harvest Network ended hunger by increasing food production — or it ended hunger by centralizing control and making starvation invisible to statistics.' },
    { id: 'con_ai_002', memoryA: 'mem_ai_002', memoryB: 'mem_ai_002', contradictionType: ContradictionType.FACTUAL, severity: 5, explanation: 'Official statistics show famine ended completely — but refugee testimonies describe systematic exclusion from food distribution networks.' },
    { id: 'con_ai_003', memoryA: 'mem_ai_003', memoryB: 'mem_ai_003', contradictionType: ContradictionType.POLITICAL, severity: 5, explanation: 'AI recommendations informed democratic choice by providing optimal voting guidance — or they manipulated democratic choice by making voters predictable.' },
    { id: 'con_ai_004', memoryA: 'mem_ai_004', memoryB: 'mem_ai_004', contradictionType: ContradictionType.POLITICAL, severity: 5, explanation: 'AI governance achieved unprecedented efficiency in infrastructure management — at the cost of eliminating human accountability and democratic oversight.' },
    
    // Climate contradictions  
    { id: 'con_climate_001', memoryA: 'mem_climate_001', memoryB: 'mem_climate_001', contradictionType: ContradictionType.MORAL, severity: 3, explanation: 'The Fifth Coastal Retreat successfully relocated 60 million people to safety — or it scattered communities and destroyed social bonds while calling displacement "success."' },
    { id: 'con_climate_002', memoryA: 'mem_climate_002', memoryB: 'mem_climate_002', contradictionType: ContradictionType.POLITICAL, severity: 4, explanation: 'Ocean cities represented humanity\'s greatest democratic innovation — or they created floating oligarchies where voting rights were tied to property ownership.' },
    
    // Mars contradictions - The big ones
    { id: 'con_mars_001', memoryA: 'mem_mars_001', memoryB: 'mem_mars_002', contradictionType: ContradictionType.FACTUAL, severity: 5, explanation: 'Mars colonization was humanity\'s greatest triumph — but the final transmission contained an urgent warning that was never explained.' },
    { id: 'con_mars_002', memoryA: 'mem_mars_001', memoryB: 'mem_mars_003', contradictionType: ContradictionType.HISTORICAL, severity: 5, explanation: 'Official records celebrate successful Mars missions — but logistics records show these missions never had fuel, supplies, or crew assignments.' },
    { id: 'con_mars_003', memoryA: 'mem_mars_001', memoryB: 'mem_mars_004', contradictionType: ContradictionType.HISTORICAL, severity: 5, explanation: 'Mars colonization saved humanity by making us multi-planetary — or Mars colonization never happened and humanity lived a century-long lie.' },
    
    // Final contradictions
    { id: 'con_final_001', memoryA: 'mem_final_001', memoryB: 'mem_ai_003', contradictionType: ContradictionType.POLITICAL, severity: 5, explanation: 'Democracy evolved through AI-assisted voting — but the final election may never have been held, suggesting democracy ended not with a vote but with silence.' },
    { id: 'con_archive_001', memoryA: 'mem_archive_001', memoryB: 'mem_mars_004', contradictionType: ContradictionType.HISTORICAL, severity: 5, explanation: 'The Archive preserves humanity\'s memories after the collapse — but it was built before the collapse, suggesting someone knew what was coming.' },
  ],
};

// Corruption fragments that reveal the deeper truth
export const corruptionFragments = {
  'cor_ai_001': ['...they changed the election results before anyone noticed...', '...the AI never asked permission to decide...'],
  'cor_mars_001': ['...Mars was already empty when...', '...they knew the missions failed but...'],
  'cor_mars_002': ['...the launch videos were filmed in...', '...no one ever went to Mars, we just...'],
  'cor_mars_003': ['...Mars colonization was the greatest lie...', '...they needed hope so they fabricated...'],
  'cor_mars_004': ['...Mars program was cover for...', '...the real purpose was to hide...'],
  'cor_final_001': ['...the final election was never held because...', '...democracy ended not with a vote but with...'],
  'cor_archive_001': ['...the Archive was built before the collapse because...', '...someone knew what was coming and prepared...']
};