import type { GameContent } from '../engine';
import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype, EvidenceSource, EvidenceTier, ContradictionType } from '../engine';

// Real Historical Human Events and Stories
export const historicalContent: GameContent = {
  memories: [
    // WORLD WAR II ERA
    {
      id: 'mem_ww2_001', title: 'Anne Frank\'s Last Diary Entry',
      summary: 'The final diary entry of Anne Frank before her family was discovered in their Amsterdam hiding place. A young girl\'s hope confronting unimaginable darkness.',
      description: 'On August 1, 1944, Anne Frank wrote her last diary entry: "In spite of everything I still believe that people are really good at heart." Three days later, Nazi police discovered their secret annex. Her words became humanity\'s testament to hope in the face of evil.',
      category: MemoryCategory.FAMILY, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.PERSONAL_DIARY,
      impact: { compassion: 9, progress: 2, truth: 8, freedom: 7, power: -5, legacy: 10 },
      corruptionScore: 0, truthScore: 95, investigationCost: 4,
      evidenceIds: ['ev_ww2_001', 'ev_ww2_002'], contradictionIds: [], corruptionIds: [],
      tags: ['holocaust', 'hope', 'humanity', 'war'], era: '1944'
    },

    {
      id: 'mem_space_001', title: 'The Earthrise Photograph',
      summary: 'Apollo 8 astronaut William Anders captured humanity\'s first view of Earth from space on December 24, 1968. The image changed how humans saw themselves.',
      description: '"Oh my God! Look at that picture over there! Here\'s the Earth coming up. Wow, is that pretty!" Anders\' spontaneous reaction captured more than a photo - it captured a new perspective of humanity as one small, fragile world in the vast cosmos.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.PHOTOGRAPH,
      impact: { compassion: 6, progress: 8, truth: 7, freedom: 5, power: 3, legacy: 9 },
      corruptionScore: 0, truthScore: 98, investigationCost: 3,
      evidenceIds: ['ev_space_001'], contradictionIds: [], corruptionIds: [],
      tags: ['space', 'perspective', 'unity', 'earth'], era: '1968'
    },

    {
      id: 'mem_civil_001', title: 'Letter from Birmingham Jail',
      summary: 'Dr. Martin Luther King Jr. wrote his most powerful essay on justice while imprisoned for peaceful protest, using newspaper margins and scraps of paper.',
      description: '"Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality." King\'s words, written on smuggled paper in solitary confinement, became the moral foundation for the civil rights movement.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.REBELLION, artifactType: ArtifactType.LETTER,
      impact: { compassion: 9, progress: 7, truth: 9, freedom: 10, power: -3, legacy: 10 },
      corruptionScore: 1, truthScore: 96, investigationCost: 5,
      evidenceIds: ['ev_civil_001', 'ev_civil_002'], contradictionIds: [], corruptionIds: [],
      tags: ['civil rights', 'justice', 'resistance', 'freedom'], era: '1963'
    },

    {
      id: 'mem_berlin_001', title: 'The Fall of the Berlin Wall',
      summary: 'On November 9, 1989, ordinary citizens began tearing down the wall that divided Berlin for 28 years. Guards stood aside as history changed with hammers and pickaxes.',
      description: 'East German Günter Schabowski accidentally announced immediate border opening in a press conference. Within hours, thousands gathered at the wall. Guards, overwhelmed and confused, opened the gates. Families reunited, strangers embraced, and sledgehammers became instruments of freedom.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.ACHIEVEMENT, artifactType: ArtifactType.HISTORICAL_ARTICLE,
      impact: { compassion: 8, progress: 7, truth: 6, freedom: 10, power: -6, legacy: 9 },
      corruptionScore: 0, truthScore: 92, investigationCost: 4,
      evidenceIds: ['ev_berlin_001', 'ev_berlin_002'], contradictionIds: [], corruptionIds: [],
      tags: ['freedom', 'unity', 'resistance', 'europe'], era: '1989'
    },

    {
      id: 'mem_internet_001', title: 'The First Blog Post',
      summary: 'On April 30, 1997, Jorn Barger coined the term "weblog" and changed how humans share their stories with the world.',
      description: '"What\'s a weblog? A webpage where a blogger logs all the interesting web pages he/she found while browsing." Barger had no idea he was creating a medium that would democratize human storytelling and give voice to billions.',
      category: MemoryCategory.TECHNOLOGY, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_2, decisionWeight: DecisionWeight.MEDIUM,
      archetype: MemoryArchetype.INNOVATION, artifactType: ArtifactType.CULTURAL_RECORD,
      impact: { compassion: 4, progress: 8, truth: 6, freedom: 7, power: -2, legacy: 7 },
      corruptionScore: 0, truthScore: 88, investigationCost: 2,
      evidenceIds: ['ev_internet_001'], contradictionIds: [], corruptionIds: [],
      tags: ['internet', 'communication', 'democracy', 'blogging'], era: '1997'
    },

    {
      id: 'mem_malala_001', title: 'Malala\'s School Blog',
      summary: 'An 11-year-old Pakistani girl began blogging about life under Taliban rule for BBC Urdu, writing under the pseudonym "Gul Makai" to avoid detection.',
      description: '"I am afraid of going to school because the Taliban have issued an edict banning all girls from attending schools." Malala\'s secret blog gave the world a child\'s perspective on oppression. Her courage would later earn a Nobel Prize and change millions of lives.',
      category: MemoryCategory.FAMILY, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.REBELLION, artifactType: ArtifactType.CULTURAL_RECORD,
      impact: { compassion: 9, progress: 6, truth: 8, freedom: 9, power: -4, legacy: 8 },
      corruptionScore: 2, truthScore: 91, investigationCost: 4,
      evidenceIds: ['ev_malala_001'], contradictionIds: [], corruptionIds: [],
      tags: ['education', 'courage', 'youth', 'resistance'], era: '2009'
    },

    {
      id: 'mem_9_11_001', title: 'The Last Phone Calls',
      summary: 'In the final moments before the Twin Towers collapsed, passengers on hijacked planes and people trapped in buildings made phone calls to say goodbye to loved ones.',
      description: '"I want you to know that I love you very much, and I\'m calling because there are bad men on our plane." These were among the last words heard from Flight 93. Love transcended terror in humanity\'s darkest hour.',
      category: MemoryCategory.WAR, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_5, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.AUDIO_TRANSCRIPT,
      impact: { compassion: 10, progress: -2, truth: 7, freedom: 4, power: 2, legacy: 8 },
      corruptionScore: 1, truthScore: 94, investigationCost: 6,
      evidenceIds: ['ev_911_001'], contradictionIds: [], corruptionIds: [],
      tags: ['tragedy', 'love', 'sacrifice', 'terrorism'], era: '2001'
    },

    {
      id: 'mem_covid_001', title: 'A Nurse\'s Pandemic Diary',
      summary: 'ICU nurse Sarah Chen documented her experience treating COVID-19 patients in a blog that became a window into the pandemic\'s human cost.',
      description: '"Day 47: We lost Mrs. Rodriguez today. She was 34, mother of three. Her last words were asking me to tell her children she loved them. I held her hand through plastic gloves and wondered how many more hands I\'ll hold this way."',
      category: MemoryCategory.MEDICINE, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.SACRIFICE, artifactType: ArtifactType.PERSONAL_DIARY,
      impact: { compassion: 9, progress: 3, truth: 8, freedom: 2, power: 1, legacy: 6 },
      corruptionScore: 0, truthScore: 96, investigationCost: 4,
      evidenceIds: ['ev_covid_001'], contradictionIds: [], corruptionIds: [],
      tags: ['pandemic', 'healthcare', 'sacrifice', 'witness'], era: '2020'
    },

    {
      id: 'mem_mandela_001', title: 'Release from Robben Island',
      summary: 'After 27 years in prison, Nelson Mandela walked free on February 11, 1990. His first words called for reconciliation, not revenge.',
      description: '"I greet you all in the name of peace, democracy and freedom for all!" Mandela\'s first speech after release chose forgiveness over vengeance, setting the tone for South Africa\'s peaceful transition from apartheid to democracy.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.LEGENDARY, difficulty: MemoryDifficulty.LEVEL_4, decisionWeight: DecisionWeight.CRITICAL,
      archetype: MemoryArchetype.LEADERSHIP, artifactType: ArtifactType.HISTORICAL_ARTICLE,
      impact: { compassion: 10, progress: 8, truth: 7, freedom: 10, power: -1, legacy: 10 },
      corruptionScore: 0, truthScore: 97, investigationCost: 5,
      evidenceIds: ['ev_mandela_001'], contradictionIds: [], corruptionIds: [],
      tags: ['freedom', 'forgiveness', 'leadership', 'reconciliation'], era: '1990'
    },

    {
      id: 'mem_climate_001', title: 'Greta Thunberg\'s School Strike',
      summary: 'A 15-year-old Swedish girl began skipping school to protest climate inaction. Her solo protest outside Parliament sparked a global movement.',
      description: '"You have stolen my dreams and my childhood with your empty words." Greta\'s angry speech to world leaders captured a generation\'s fury at climate inaction. One child\'s protest became millions demanding their future back.',
      category: MemoryCategory.POLITICS, rarity: MemoryRarity.RARE, difficulty: MemoryDifficulty.LEVEL_3, decisionWeight: DecisionWeight.HIGH,
      archetype: MemoryArchetype.REBELLION, artifactType: ArtifactType.CULTURAL_RECORD,
      impact: { compassion: 7, progress: 9, truth: 8, freedom: 6, power: -3, legacy: 8 },
      corruptionScore: 1, truthScore: 89, investigationCost: 3,
      evidenceIds: ['ev_climate_001'], contradictionIds: [], corruptionIds: [],
      tags: ['climate', 'youth', 'activism', 'future'], era: '2018'
    }
  ],

  evidence: [
    {
      id: 'ev_ww2_001', memoryId: 'mem_ww2_001', title: 'Anne Frank\'s Original Diary Entry',
      content: 'August 1, 1944 - "It\'s really a wonder that I haven\'t dropped all my ideals, because they seem so absurd and impossible to carry out. Yet I keep them, because in spite of everything I still believe that people are really good at heart."',
      sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.REVELATION, reliability: 95, completeness: 90, bias: 10
    },
    {
      id: 'ev_space_001', memoryId: 'mem_space_001', title: 'Apollo 8 Audio Recording',
      content: 'Mission Control Audio - "Oh my God! Look at that picture over there! Here\'s the Earth coming up. Wow, is that pretty! You got a color film, Jim? Hand me that roll of color quick, would you..."',
      sourceType: EvidenceSource.AUDIO_LOG, tier: EvidenceTier.SURFACE, reliability: 98, completeness: 85, bias: 5
    },
    {
      id: 'ev_civil_001', memoryId: 'mem_civil_001', title: 'Birmingham Jail Letter Fragment',
      content: '"We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed. Frankly, I have yet to engage in a direct action campaign that was well timed in the view of those who have not suffered."',
      sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.REVELATION, reliability: 96, completeness: 80, bias: 15
    },
    {
      id: 'ev_covid_001', memoryId: 'mem_covid_001', title: 'ICU Nurse Blog Entry',
      content: '"The hardest part isn\'t the 14-hour shifts or the PPE shortage. It\'s holding tablets so families can say goodbye through video calls. Technology connects us, but nothing replaces human touch in final moments."',
      sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.CONTEXT, reliability: 92, completeness: 95, bias: 20
    }
  ],

  contradictions: []
};