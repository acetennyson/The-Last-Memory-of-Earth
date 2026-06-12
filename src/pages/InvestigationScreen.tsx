import type { GameHook } from '../hooks/useGame';
import PowerMeter from '../components/PowerMeter';
import { CorruptionSystem } from '../utils/corruption';

const tierColors: Record<string, string> = {
  SURFACE: '#6CCBFF',
  CONTEXT: '#9B5DE5',
  COMPLICATION: '#F4A261',
  REVELATION: '#D62839',
};

export default function InvestigationScreen({ game }: { game: GameHook }) {
  if (game.evidenceRecords.length === 0 && game.contradictions.length === 0) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
        <div style={{ fontSize: 13, color: '#6B7280', marginBottom: 20 }}>No findings from this investigation.</div>
        <button onClick={game.backFromInvestigation} style={{
          padding: '10px 32px', background: 'transparent', color: '#6CCBFF',
          border: '1px solid rgba(108,203,255,0.25)', borderRadius: 6,
          fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
        }}>Return to Archive</button>
      </div>
    );
  }

  const hasMoreEvidence = game.investigationStep < game.totalInvestigationSteps - 1;
  const showContradictions = game.contradictionsRevealed && game.contradictions.length > 0;
  const currentEvidence = game.evidenceRecords[game.investigationStep];

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      padding: 24, maxWidth: 640, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 10, color: '#6CCBFF', letterSpacing: 2, textTransform: 'uppercase' }}>
          Investigation · {game.investigationStep + 1} / {game.totalInvestigationSteps}
        </span>
        <PowerMeter current={game.power} total={100} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Show all evidence for this memory together to create conflicts */}
        {game.evidenceRecords.length > 1 && !showContradictions && (
          <div>
            <div style={{
              textAlign: 'center', marginBottom: 24,
              fontSize: 11, color: '#F4A261', letterSpacing: 2,
              textTransform: 'uppercase', fontWeight: 600,
            }}>
              Multiple Sources Found
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {game.evidenceRecords.map((evidence, index) => {
                const reliabilityColor = evidence.reliability > 80 ? '#2EC4B6' : 
                                       evidence.reliability > 60 ? '#F4A261' : '#D62839';
                return (
                  <div key={evidence.id} style={{
                    background: 'linear-gradient(135deg, #111627 0%, #0D1120 100%)',
                    border: `1px solid ${reliabilityColor}20`,
                    borderRadius: 12,
                    padding: 24,
                    position: 'relative',
                  }}>
                    {/* Reliability indicator */}
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      background: reliabilityColor,
                      color: '#000',
                      padding: '4px 8px',
                      borderRadius: 4,
                      fontSize: 10,
                      fontWeight: 700,
                    }}>
                      {evidence.reliability}%
                    </div>
                    
                    <div style={{
                      fontSize: 11, 
                      color: tierColors[evidence.tier] || '#6B7280',
                      fontWeight: 600, 
                      letterSpacing: 1, 
                      textTransform: 'uppercase', 
                      marginBottom: 4,
                    }}>
                      {evidence.tier} Evidence
                    </div>
                    <div style={{ 
                      fontSize: 12, 
                      color: '#6B7280', 
                      marginBottom: 16,
                      paddingRight: 60, // Space for reliability badge
                    }}>
                      {CorruptionSystem.corruptTitle(evidence.title, Math.max(0, 3 - (evidence.reliability / 30)))}
                    </div>
                    <p style={{
                      fontSize: 14, 
                      color: '#D1D5DB', 
                      lineHeight: 1.8,
                      fontFamily: "'SF Mono','Fira Code',monospace",
                      padding: 16, 
                      background: 'rgba(0,0,0,0.2)', 
                      borderRadius: 8,
                    }}>
                      "{CorruptionSystem.corruptEvidence(evidence.content, evidence.reliability)}"
                    </p>
                    
                    {/* Source credibility indicator */}
                    <div style={{
                      marginTop: 12,
                      fontSize: 10,
                      color: '#6B7280',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                      <span>Source: {evidence.sourceType.replace(/_/g, ' ')}</span>
                      <span>Completeness: {evidence.completeness}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Analysis prompt */}
            <div style={{
              marginTop: 20,
              padding: 16,
              background: 'rgba(108,203,255,0.05)',
              border: '1px solid rgba(108,203,255,0.15)',
              borderRadius: 8,
              fontSize: 12,
              color: '#9CA3AF',
              fontStyle: 'italic',
              textAlign: 'center',
            }}>
              These sources present different versions of the same events. 
              What really happened?
            </div>
          </div>
        )}

        {/* Single evidence view for cases with only one source */}
        {game.evidenceRecords.length === 1 && !showContradictions && (
          <div style={{
            background: 'linear-gradient(135deg, #111627 0%, #0D1120 100%)',
            border: '1px solid rgba(108,203,255,0.1)',
            borderRadius: 12,
            padding: 28,
          }}>
            <div style={{
              fontSize: 11, color: tierColors[currentEvidence.tier] || '#6B7280',
              fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4,
            }}>
              {currentEvidence.tier} Evidence
            </div>
            <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 16 }}>
              {currentEvidence.sourceType.replace(/_/g, ' ')} · Reliability: {currentEvidence.reliability}%
            </div>
            <p style={{
              fontSize: 14, color: '#D1D5DB', lineHeight: 1.8,
              fontFamily: "'SF Mono','Fira Code',monospace",
              padding: 16, background: 'rgba(0,0,0,0.2)', borderRadius: 8,
            }}>
              {currentEvidence.content}
            </p>
          </div>
        )}

        {showContradictions && (
          <div>
            <div style={{
              textAlign: 'center', marginBottom: 24,
              fontSize: 11, color: '#F4A261', letterSpacing: 3,
              textTransform: 'uppercase', fontWeight: 600,
            }}>
              Contradiction Detected
            </div>
            {game.contradictions.map(c => (
              <div key={c.id} style={{
                background: 'rgba(244,162,97,0.06)',
                border: '1px solid rgba(244,162,97,0.2)',
                borderRadius: 8, padding: 20, marginBottom: 12,
              }}>
                <div style={{ fontSize: 12, color: '#F4A261', fontWeight: 600, marginBottom: 8 }}>
                  {c.contradictionType.replace(/_/g, ' ')}
                </div>
                <p style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.7 }}>
                  {c.explanation}
                </p>
                <div style={{ marginTop: 12, fontSize: 11, color: '#6B7280', fontStyle: 'italic' }}>
                  Severity: {c.severity}/5
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          {hasMoreEvidence && (
            <button
              onClick={game.nextEvidenceStep}
              style={{
                padding: '10px 40px', background: 'transparent', color: '#6CCBFF',
                border: '1px solid rgba(108,203,255,0.25)', borderRadius: 6,
                fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,203,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              Continue
            </button>
          )}
          {!hasMoreEvidence && game.contradictions.length > 0 && game.evidenceRecords.length > 0 && !game.contradictionsRevealed && (
            <button
              onClick={game.nextEvidenceStep}
              style={{
                padding: '10px 40px', background: 'transparent', color: '#F4A261',
                border: '1px solid rgba(244,162,97,0.3)', borderRadius: 6,
                fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(244,162,97,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              Review Contradictions
            </button>
          )}
          {(showContradictions || (game.contradictions.length === 0 && !hasMoreEvidence) || game.evidenceRecords.length === 0) && (
            <button
              onClick={game.backFromInvestigation}
              style={{
                padding: '10px 40px', background: 'transparent', color: '#6CCBFF',
                border: '1px solid rgba(108,203,255,0.25)', borderRadius: 6,
                fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,203,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              Return to Archive
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
