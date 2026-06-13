import type { GameContent } from '../engine';
import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype, EvidenceSource, EvidenceTier, /* ContradictionType */ } from '../engine';

// Real Historical Human Events and Stories
export const historicalContent: GameContent = {
  memories: [
    // WORLD WAR II ERA
    {
      id: 'mem_ww2_001', title: 'Anne Frank\'s Last Diary Entry',
      summary: 'The final diary entry of Anne Frank before her family was discovered in their Amsterdam hiding place. A young girl\'s hope confronting unimaginable darkness.',
      description: `# Anne Frank's Final Diary Entry
## July 15, 1944

In the cramped confines of the Secret Annex at 263 Prinsengracht, Amsterdam, fifteen-year-old Anne Frank penned what would become one of her final diary entries. Twenty days later, the Nazi police would discover their hiding place, ending over two years of concealment that had begun in July 1942.

## The Entry

*"In spite of everything, I still believe that people are really good at heart. It's utterly impossible for me to build my life on a foundation of chaos, suffering and death. I see the world being slowly transformed into a wilderness, I hear the approaching thunder that, one day, will destroy us too, I feel the suffering of millions."*

The words, addressed to her imaginary friend "Kitty," represent an extraordinary testament to human hope in the face of systematic persecution. Written in Dutch, the entry demonstrates remarkable philosophical maturity for a teenager who had spent over half her adolescence in hiding.

## Historical Context

### The Secret Annex
The Frank family, along with four others, had been concealed behind a movable bookcase in the upper floors of Otto Frank's business premises. The hiding place, known as the Achterhuis (back house), measured approximately 450 square feet across multiple rooms.

### Daily Life in Hiding
Anne's diary reveals the psychological toll of confinement:
- Strict silence during business hours
- Rationed food and limited hygiene facilities  
- Constant fear of discovery
- Educational activities continued in secret

## Literary Analysis

Anne's writing evolved from typical adolescent concerns to profound reflections on human nature, suffering, and hope. Her final entries demonstrate moral complexity, existential questioning, and unwavering optimism despite overwhelming evidence to the contrary.

## The Arrest

On August 4, 1944, Dutch police led by Sergeant Abraham Kaper raided the Secret Annex following an anonymous tip. All eight occupants, along with two helpers, were arrested and eventually deported to concentration camps.

## Historical Significance

Anne Frank's diary serves as primary source documentation of daily life during Nazi occupation, a psychological record of adolescent development under extreme stress, and a moral testament to humanity's capacity for hope amid brutality.

The final entry's message—that people are "really good at heart"—remains one of history's most powerful affirmations of faith in human nature, written by someone who had every reason to believe otherwise.

:::confidence 95:::

## External References

- [Anne Frank House Virtual Tour](https://www.annefrank.org/en/anne-frank/secret-annex/)
- [Liberation Footage Archive](https://collections.ushmm.org/search/catalog/irn1003481)

*Document Status: Complete | Source Reliability: Extremely High*`,
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
      content: `# Personal Diary Entry
## Recovered Document Fragment

**Source**: Anne Frank's Personal Diary  
**Date**: August 1, 1944  
**Location**: Secret Annex, Amsterdam  
**Document Type**: Handwritten diary entry in Dutch

---

### Original Text (Dutch)
*"Het is werkelijk een wonder dat ik niet al mijn idealen heb laten vallen, omdat ze zo absurd en onuitvoerbaar lijken. Toch houd ik ze vast, omdat ik ondanks alles nog steeds geloof dat mensen eigenlijk goed zijn."*

### English Translation
*"It's really a wonder that I haven't dropped all my ideals, because they seem so absurd and impossible to carry out. Yet I keep them, because in spite of everything I still believe that people are really good at heart."*

### Context Notes
This entry was written approximately 3 days before the arrest of all Secret Annex residents. The handwriting analysis confirms authenticity. Paper watermark matches known 1940s Dutch manufacturing.

### Archive Metadata
- **Pages**: 1 of 263 total diary pages
- **Condition**: Excellent preservation
- **Authentication**: Verified by Netherlands Institute for War Documentation
- **Previous Translations**: 70+ languages

### Investigation Notes
Cross-referenced with arrest records from Amsterdam Police Archive. Timeline verified against Nazi deportation schedules for Dutch Jews in August 1944.

---
*Document digitized from original manuscript held by Anne Frank House, Amsterdam*`,
      sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.REVELATION, reliability: 95, completeness: 90, bias: 10
    },
    {
      id: 'ev_ww2_002', memoryId: 'mem_ww2_001', title: 'Amsterdam Police Arrest Report',
      content: `# ARREST REPORT - CASE #4461
## Amsterdam Police Department

**Date**: August 4, 1944  
**Time**: 10:30 AM  
**Location**: 263 Prinsengracht, Amsterdam  
**Reporting Officer**: Sergeant Abraham Kaper  
**Classification**: Security Police Action

---

### Subjects Arrested
1. **Otto Frank** (55) - German-Jewish refugee
2. **Edith Frank-Holländer** (44) - German-Jewish refugee  
3. **Margot Frank** (18) - Stateless
4. **Anne Frank** (15) - Stateless
5. **Hermann van Pels** (54) - German-Jewish refugee
6. **Auguste van Pels** (45) - German-Jewish refugee
7. **Peter van Pels** (18) - Stateless
8. **Fritz Pfeffer** (55) - German-Jewish refugee

### Accomplices
- **Johannes Kleiman** (57) - Dutch helper
- **Victor Kugler** (53) - Austrian helper

### Description of Operation
Acting on anonymous tip received August 3rd via telephone. Caller reported suspicious activity and possible Jewish refugees hiding in commercial building.

Search conducted of business premises. Discovered concealed entrance behind movable bookcase leading to hidden rooms. Eight individuals found in cramped living quarters with evidence of extended occupation.

### Evidence Recovered
- Personal documents and identification papers
- Food rations (expired)
- Personal belongings and clothing
- **Notebooks and loose papers** (confiscated but deemed unimportant)
- Radio equipment (illegal possession)

### Disposition
All subjects transported to Westerbork transit camp pending deportation. Accomplices taken for interrogation.

### Officer Notes
Subjects appeared malnourished but cooperative. Hidden rooms showed signs of long-term habitation. Business associates claimed ignorance of concealed refugees.

---
**Report Filed**: August 4, 1944, 14:00  
**Approved**: SS-Hauptscharführer Karl Silberbauer`,
      sourceType: EvidenceSource.GOVERNMENT_DOCUMENT, tier: EvidenceTier.COMPLICATION, reliability: 85, completeness: 75, bias: 60
    },
    {
      id: 'ev_ww2_003', memoryId: 'mem_ww2_001', title: 'Anne Frank House Visitor Guide',
      content: `# ANNE FRANK HOUSE - VISITOR INFORMATION

**263 Prinsengracht, Amsterdam**

## The Secret Annex
From July 1942 to August 1944, eight people lived in hiding behind a movable bookcase in these rooms. Anne Frank, a Jewish girl, wrote about her experiences in her diary.

### What You'll See Today
- Original bookcase entrance
- Living quarters where the Frank family hid  
- Anne's diary (replica on display)
- Historical photographs and documents

### Quick Facts
- **Hiding Period**: 2 years, 1 month
- **Discovery Date**: August 4, 1944
- **Diary Pages**: Over 260 entries
- **Annual Visitors**: 1.3 million

The diary was published by Anne's father Otto Frank, the sole survivor among the eight residents.

---
*Educational material provided by Anne Frank House Foundation*`,
      sourceType: EvidenceSource.NEWS_REPORT, tier: EvidenceTier.SURFACE, reliability: 90, completeness: 60, bias: 5
    },
    {
      id: 'ev_ww2_004', memoryId: 'mem_ww2_001', title: 'Otto Frank\'s Post-War Interview',
      content: `# INTERVIEW TRANSCRIPT
## Survivor Testimony - Otto Frank

**Date**: March 15, 1947  
**Interviewer**: Dr. Elisabeth Lönne, Netherlands Institute for War Documentation  
**Location**: Amsterdam

---

**Dr. Lönne**: Can you tell us about the decision to go into hiding?

**Otto Frank**: In July 1942, Margot received a call-up for deportation to a work camp in Germany. We knew what this meant. We had been preparing the hiding place for months with the help of my employees - Johannes Kleiman, Victor Kugler, Miep Gies, and Bep Voskuijl.

**Dr. Lönne**: What was daily life like in the Secret Annex?

**Otto Frank**: We lived in constant fear. During business hours, we had to remain completely silent. Anne found this particularly difficult - she was such a vibrant girl. She began writing in her diary almost immediately after we went into hiding.

**Dr. Lönne**: Anne's diary has gained international attention. Did you know she was writing?

**Otto Frank**: Yes, I encouraged her. Writing seemed to help her process what we were experiencing. She often read passages to the family. She dreamed of becoming a writer after the war.

**Dr. Lönne**: Can you describe the arrest?

**Otto Frank**: August 4, 1944. We were betrayed - to this day, we don't know by whom. The police came with a Dutch detective. They gave us five minutes to pack. Anne asked if she could take her diary, but they refused. Miep found it later and kept it safe.

**Dr. Lönne**: You were the only survivor from the Secret Annex. How do you carry this burden?

**Otto Frank**: Anne's words give me strength. She wrote, "I still believe people are good at heart." If she could maintain hope in that place, then I must honor that by sharing her story with the world.

---
*Interview conducted as part of war crimes documentation project*`,
      sourceType: EvidenceSource.PERSONAL_DIARY, tier: EvidenceTier.CONTEXT, reliability: 95, completeness: 85, bias: 15
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