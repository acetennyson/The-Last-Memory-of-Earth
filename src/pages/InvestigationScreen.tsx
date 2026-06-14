import React from 'react';
import type { GameHook } from '../hooks/useGame';
import PowerMeter from '../components/PowerMeter';
import ReactMarkdown from 'react-markdown';
import { parseArchiveBlocks } from '../components/ArchiveBlocks';
import { historicalContent } from '../data/historicalContent';

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
        }}>
          Return to Archive
        </button>
      </div>
    );
  }

  const showContradictions = game.contradictionsRevealed && game.contradictions.length > 0;

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      padding: 24, maxWidth: 1200, margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 10, color: '#6CCBFF', letterSpacing: 2, textTransform: 'uppercase' }}>
          Investigation · {game.investigationStep + 1} / {game.totalInvestigationSteps}
        </span>
        <PowerMeter current={game.power} total={100} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Carousel-style Evidence Display */}
        {game.evidenceRecords.length > 0 && !showContradictions && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            height: '70vh',
            padding: '20px 0'
          }}>
            {/* Previous Button */}
            <button
              onClick={() => game.investigationStep > 0 && game.previousEvidenceStep()}
              disabled={game.investigationStep === 0}
              style={{
                background: 'transparent',
                border: '2px solid #6CCBFF',
                color: game.investigationStep === 0 ? '#444' : '#6CCBFF',
                padding: '12px',
                borderRadius: '50%',
                fontSize: '20px',
                cursor: game.investigationStep === 0 ? 'not-allowed' : 'pointer',
                opacity: game.investigationStep === 0 ? 0.3 : 1
              }}
            >
              ‹
            </button>

            {/* Evidence Carousel */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 16,
              overflow: 'hidden'
            }}>
              {game.evidenceRecords.map((evidence, index) => {
                const isActive = index === game.investigationStep;
                const reliabilityColor = evidence.reliability > 80 ? '#2EC4B6' : 
                                       evidence.reliability > 60 ? '#F4A261' : '#D62839';
                
                return (
                  <div
                    key={evidence.id}
                    style={{
                      flex: isActive ? '3' : '0.8',
                      height: isActive ? '500px' : '180px',
                      background: 'linear-gradient(135deg, #111627 0%, #0D1120 100%)',
                      border: isActive ? `2px solid ${reliabilityColor}` : '1px solid rgba(108,203,255,0.1)',
                      borderRadius: '12px',
                      padding: isActive ? '24px' : '16px',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: isActive ? 1 : 0.6,
                      transform: isActive ? 'scale(1)' : 'scale(0.9)',
                      overflow: 'auto'
                    }}
                  >
                    {/* Evidence Tier & Title */}
                    <div style={{
                      fontSize: isActive ? 11 : 9,
                      color: tierColors[evidence.tier] || '#6B7280',
                      fontWeight: 600,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      marginBottom: 8
                    }}>
                      {evidence.tier} Evidence
                    </div>
                    
                    <div style={{
                      fontSize: isActive ? 14 : 10,
                      color: '#D1D5DB',
                      marginBottom: 12,
                      fontWeight: isActive ? 600 : 400
                    }}>
                      {evidence.title}
                    </div>

                    {/* Reliability/Completeness/Bias indicators */}
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      display: 'flex',
                      gap: isActive ? 8 : 4,
                      flexDirection: isActive ? 'row' : 'column'
                    }}>
                      <div style={{
                        background: reliabilityColor,
                        color: '#000',
                        padding: isActive ? '4px 8px' : '2px 4px',
                        borderRadius: 4,
                        fontSize: isActive ? 10 : 8,
                        fontWeight: 700,
                      }}>
                        REL: {evidence.reliability}%
                      </div>
                      <div style={{
                        background: evidence.completeness > 80 ? '#2EC4B6' : 
                                   evidence.completeness > 60 ? '#F4A261' : '#D62839',
                        color: '#000',
                        padding: isActive ? '4px 8px' : '2px 4px',
                        borderRadius: 4,
                        fontSize: isActive ? 10 : 8,
                        fontWeight: 700,
                      }}>
                        COM: {evidence.completeness}%
                      </div>
                      <div style={{
                        background: evidence.bias < 20 ? '#2EC4B6' : 
                                   evidence.bias < 50 ? '#F4A261' : '#D62839',
                        color: '#000',
                        padding: isActive ? '4px 8px' : '2px 4px',
                        borderRadius: 4,
                        fontSize: isActive ? 10 : 8,
                        fontWeight: 700,
                      }}>
                        BIAS: {evidence.bias}%
                      </div>
                    </div>

                    {/* Content - only show full content for active item */}
                    {isActive && (
                      <div style={{
                        fontSize: 12,
                        color: '#D1D5DB',
                        lineHeight: 1.6,
                        fontFamily: "'SF Mono','Fira Code',monospace",
                        marginTop: 16,
                        maxHeight: '350px',
                        overflowY: 'auto'
                      }}>
                        {React.createElement(ReactMarkdown, {
                          children: parseArchiveBlocks(evidence.content)
                        })}
                      </div>
                    )}

                    {/* Thumbnail preview for inactive items */}
                    {!isActive && (
                      <div style={{
                        fontSize: 8,
                        color: '#6B7280',
                        lineHeight: 1.4,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {evidence.content.substring(0, 200)}...
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => game.investigationStep < game.evidenceRecords.length - 1 && game.nextEvidenceStep()}
              disabled={game.investigationStep >= game.evidenceRecords.length - 1}
              style={{
                background: 'transparent',
                border: '2px solid #6CCBFF',
                color: game.investigationStep >= game.evidenceRecords.length - 1 ? '#444' : '#6CCBFF',
                padding: '12px',
                borderRadius: '50%',
                fontSize: '20px',
                cursor: game.investigationStep >= game.evidenceRecords.length - 1 ? 'not-allowed' : 'pointer',
                opacity: game.investigationStep >= game.evidenceRecords.length - 1 ? 0.3 : 1
              }}
            >
              ›
            </button>
          </div>
        )}

        {/* Contradictions */}
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
                borderRadius: 8,
                padding: 16,
                marginBottom: 12,
              }}>
                <div style={{ fontSize: 12, color: '#F4A261', fontWeight: 600 }}>
                  {c.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
        <button
          onClick={game.backFromInvestigation}
          style={{
            padding: '10px 40px', background: 'transparent', color: '#6CCBFF',
            border: '1px solid rgba(108,203,255,0.25)', borderRadius: 6,
            fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
          }}
        >
          Return to Archive
        </button>
      </div>
    </div>
  );
}