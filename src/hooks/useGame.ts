import { useState, useCallback, useRef } from 'react';
import { GameEngine } from '../engine/GameEngine';
import type { GameContent, Memory, PlayerProfile, CivilizationResult, HistoryBook, Evidence, Contradiction } from '../engine';
import { memoryConnections, memoryIndex } from '../data/sampleContent';
import { corruptionFragments } from '../data/narrativeContent';

const FRAGS: Record<string, string[]> = {
  // Use rich corruption fragments from narrative content
  'mem_ai_004': corruptionFragments['cor_ai_001'],
  'mem_mars_002': corruptionFragments['cor_mars_001'],
  'mem_mars_003': corruptionFragments['cor_mars_002'],
  'mem_mars_004': corruptionFragments['cor_mars_003'],
  'mem_final_001': corruptionFragments['cor_final_001'],
  'mem_archive_001': corruptionFragments['cor_archive_001'],
};

enum Stage {
  BOOT, INTRO, ARCHIVE, MEMORY, INVESTIGATION, ENDING, HISTORY_BOOK, CORRUPTED
}

export function useGame(content: GameContent) {
  const engineRef = useRef(new GameEngine(content));
  const engine = engineRef.current;

  const [stage, setStage] = useState(Stage.BOOT);
  const [memory, setMemory] = useState<Memory | null>(null);
  const [profile, setProfile] = useState<PlayerProfile>(engine.state.session.profile);
  const [power, setPower] = useState(engine.state.session.powerRemaining);
  const [processed, setProcessed] = useState(0);
  const [evidenceRecords, setEvidenceRecords] = useState<Evidence[]>([]);
  const [contradictions, setContradictions] = useState<Contradiction[]>([]);
  const [ending, setEnding] = useState<{ civilization: CivilizationResult; book: HistoryBook } | null>(null);
  const [message, setMessage] = useState('');

  const [preservedCount, setPreservedCount] = useState(0);
  const [discardedCount, setDiscardedCount] = useState(0);
  const [preservedMemories, setPreservedMemories] = useState<Set<string>>(new Set());
  const [discardedMemories, setDiscardedMemories] = useState<Set<string>>(new Set());
  const [investigationStep, setInvestigationStep] = useState(0);
  const [totalInvestigationSteps, setTotalInvestigationSteps] = useState(0);
  const [contradictionsRevealed, setContradictionsRevealed] = useState(false);
  const [connections, setConnections] = useState<{ label: string; description: string }[]>([]);
  const [corruptionFragments, setCorruptionFragments] = useState<string[]>([]);

  const sync = useCallback(() => {
    const s = engine.state;
    setProfile(s.session.profile);
    setPower(s.session.powerRemaining);
    setProcessed(s.session.processedMemoryIds.length);
  }, [engine]);

  const advance = useCallback(() => {
    sync();
    if (engine.canEnd() || engine.state.session.processedMemoryIds.length >= 10) {
      const end = engine.generateEnding() as any;
      setEnding({ civilization: end.civilization, book: end.book });
      setStage(Stage.ENDING);
      return;
    }
    const m = engine.loadNext(content.memories);
    if (m) {
      const processedCount = engine.state.session.processedMemoryIds.length;
      if (processedCount >= 5 && Math.random() < 0.6) {
        const mid = m.id;
        const frags = FRAGS[String(mid)];
        if (frags) {
          setCorruptionFragments(frags);
          setMemory(m);
          setStage(Stage.CORRUPTED);
          return;
        }
      }
      setMemory(m);
      setEvidenceRecords([]);
      setContradictions([]);
      setConnections([]);
      setInvestigationStep(0);
      setContradictionsRevealed(false);

      const mid = m.id;
      const idx = (k: string) => (memoryIndex as any)[k];
      const related = memoryConnections
        .filter(c => c.from === mid || c.to === mid)
        .map(c => ({
          label: c.type === 'contradicts' ? `Contradicts Memory #${idx(c.from === mid ? c.to : c.from)}` : `Caused by Memory #${idx(c.from === mid ? c.to : c.from)}`,
          description: c.description,
        }));
      setConnections(related);

      setStage(Stage.MEMORY);
    } else {
      const end = engine.generateEnding() as any;
      setEnding({ civilization: end.civilization, book: end.book });
      setStage(Stage.ENDING);
    }
  }, [engine, content.memories, sync]);

  const boot = useCallback(() => setStage(Stage.INTRO), []);
  const start = useCallback(() => {
    sync();
    setStage(Stage.ARCHIVE);
  }, [engine, sync]);

  const selectMemory = useCallback((selectedMemory: Memory) => {
    setMemory(selectedMemory);
    setEvidenceRecords([]);
    setContradictions([]);
    setConnections([]);
    setInvestigationStep(0);
    setContradictionsRevealed(false);

    const mid = selectedMemory.id;
    const idx = (k: string) => (memoryIndex as any)[k];
    const related = memoryConnections
      .filter(c => c.from === mid || c.to === mid)
      .map(c => ({
        label: c.type === 'contradicts' ? `Contradicts Memory #${idx(c.from === mid ? c.to : c.from)}` : `Caused by Memory #${idx(c.from === mid ? c.to : c.from)}`,
        description: c.description,
      }));
    setConnections(related);

    setStage(Stage.MEMORY);
  }, []);

  const backFromInvestigation = useCallback(() => setStage(Stage.MEMORY), []);
  const backToArchive = useCallback(() => setStage(Stage.ARCHIVE), []);

  const preserve = useCallback(() => {
    engine.preserve();
    if (memory) {
      setPreservedMemories(prev => new Set(prev).add(memory.id));
    }
    setPreservedCount(c => c + 1);
    sync();
    setMessage('Memory preserved.');
    setTimeout(() => setMessage(''), 1200);
    setTimeout(() => advance(), 400);
  }, [engine, sync, advance, memory]);

  const discard = useCallback(() => {
    engine.discard();
    if (memory) {
      setDiscardedMemories(prev => new Set(prev).add(memory.id));
    }
    setDiscardedCount(c => c + 1);
    sync();
    setMessage('Memory discarded.');
    setTimeout(() => setMessage(''), 1200);
    setTimeout(() => advance(), 400);
  }, [engine, sync, advance, memory]);

  const investigate = useCallback(() => {
    const result = engine.investigate() as any;
    if (result) {
      const records = result.revelations?.map((r: any) => r.evidence as Evidence) || [];
      const contradictions = result.contradictions || [];
      setEvidenceRecords(records);
      setContradictions(contradictions);
      setContradictionsRevealed(false);
      setInvestigationStep(0);
      setTotalInvestigationSteps(records.length);
      setStage(Stage.INVESTIGATION);
      sync();
    } else {
      setMessage('Insufficient archive power.');
      setTimeout(() => setMessage(''), 1500);
    }
  }, [engine, sync]);

  const investigateWithPath = useCallback((pathId: string) => {
    // ALWAYS generate evidence - bypass engine completely
    const pathEvidence: Record<string, any[]> = {
          'government': [{
            id: `gov_${Date.now()}`,
            memoryId: memory?.id || 'unknown',
            title: 'Classified Government Record',
            content: 'Official documentation regarding the collapse event. Details heavily redacted due to ongoing security concerns.',
            sourceType: 'GOVERNMENT_DOCUMENT',
            tier: 'CONTEXT',
            reliability: 85,
            completeness: 70,
            bias: 15,
          }],
          'testimony': [{
            id: `test_${Date.now()}`,
            memoryId: memory?.id || 'unknown',
            title: 'Survivor Account',
            content: 'Personal testimony from evacuation witness. Emotional trauma clearly affects recollection accuracy.',
            sourceType: 'PERSONAL_DIARY', 
            tier: 'SURFACE',
            reliability: 65,
            completeness: 80,
            bias: 40,
          }],
          'corporate': [{
            id: `corp_${Date.now()}`,
            memoryId: memory?.id || 'unknown',
            title: 'Internal Corporate Memo',
            content: 'Executive briefing on asset protection during crisis. Financial priorities clearly take precedence over civilian welfare.',
            sourceType: 'NEWS_REPORT',
            tier: 'COMPLICATION',
            reliability: 70,
            completeness: 85,
            bias: 60,
          }],
          'ai_logs': [{
            id: `ai_${Date.now()}`,
            memoryId: memory?.id || 'unknown',
            title: 'System Decision Log',
            content: 'Automated response protocols activated. Logic pathways suggest calculated abandonment of affected populations.',
            sourceType: 'SCIENTIFIC_RECORD',
            tier: 'REVELATION',
            reliability: 90,
            completeness: 95,
            bias: 5,
          }]
        };
        
        const records = pathEvidence[pathId] || [pathEvidence['government'][0]];
        const contradictions: any[] = [];
        
        setEvidenceRecords(records);
        setContradictions(contradictions);
        setContradictionsRevealed(false);
        setInvestigationStep(0);
        setTotalInvestigationSteps(records.length);
        setStage(Stage.INVESTIGATION);
        sync();
      
      // Show path-specific message
      const pathMessages: Record<string, string> = {
        'government': 'Accessing classified government archives...',
        'testimony': 'Reviewing personal testimonies and survivor accounts...',
        'corporate': 'Scanning corporate databases and internal communications...',
        'ai_logs': 'Analyzing AI system logs and decision trees...'
      };
      setMessage(pathMessages[pathId] || 'Investigation initiated...');
      setTimeout(() => setMessage(''), 2000);
  }, [memory, sync]);

  const nextEvidenceStep = useCallback(() => {
    if (investigationStep < totalInvestigationSteps - 1) {
      setInvestigationStep(s => s + 1);
    } else if (contradictions.length > 0 && !contradictionsRevealed) {
      setContradictionsRevealed(true);
    }
  }, [investigationStep, totalInvestigationSteps, contradictions.length, contradictionsRevealed]);

  const continueFromCorruption = useCallback(() => {
    setMemory(memory);
    setEvidenceRecords([]);
    setContradictions([]);
    setConnections([]);
    setInvestigationStep(0);
    setContradictionsRevealed(false);

    const m = memory;
    if (m) {
      const mid = m.id;
      const idx = (k: string) => (memoryIndex as any)[k];
      const related = memoryConnections
        .filter(c => c.from === mid || c.to === mid)
        .map(c => ({
          label: c.type === 'contradicts' ? `Contradicts Memory #${idx(c.from === mid ? c.to : c.from)}` : `Caused by Memory #${idx(c.from === mid ? c.to : c.from)}`,
          description: c.description,
        }));
      setConnections(related);
    }

    setStage(Stage.MEMORY);
  }, [memory]);

  const viewHistoryBook = useCallback(() => setStage(Stage.HISTORY_BOOK), []);
  const restart = useCallback(() => window.location.reload(), []);

  return {
    stage, memory, profile, power, processed,
    evidenceRecords, contradictions, ending, message,
    preservedCount, discardedCount, preservedMemories, discardedMemories,
    investigationStep, totalInvestigationSteps, contradictionsRevealed,
    connections, corruptionFragments,
    Stage, boot, start, selectMemory, preserve, discard, investigate, investigateWithPath,
    nextEvidenceStep, backFromInvestigation, backToArchive,
    continueFromCorruption, viewHistoryBook, advance, restart,
  };
}

export type GameHook = ReturnType<typeof useGame>;
