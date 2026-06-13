import React from 'react';
import type { GameHook } from '../hooks/useGame';
import { Memory } from '../engine/memory/types';
import PowerMeter from '../components/PowerMeter';
import { CorruptionSystem } from '../utils/corruption';
import MatrixBackground from '../components/MatrixBackground';
import '../styles/cyber.css';

export default function ArchiveScreen({ game, memories }: { game: GameHook, memories: Memory[] }) {
  // Only show memories that haven't been decided on yet
  const undecidedMemories = memories.filter(memory => 
    !game.preservedMemories.has(memory.id) && !game.discardedMemories.has(memory.id)
  );

  return (
    <div className="cyber-container">
      <MatrixBackground />
      
      {/* Manga-style Header Panel */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.2) 0%, rgba(1, 180, 255, 0.1) 100%)',
        borderBottom: '3px solid var(--cyber-primary)',
        padding: '16px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dramatic angle cuts */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '100%',
          background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 159, 0.1) 70%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }} />
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          <div>
            <h1 className="cyber-text--primary" style={{
              fontSize: 24,
              fontWeight: 900,
              marginBottom: 4,
              textTransform: 'uppercase',
              letterSpacing: 3,
            }}>
              ARCHIVE ACCESS
            </h1>
            <div style={{
              background: 'rgba(0, 255, 159, 0.2)',
              color: 'var(--cyber-primary)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              display: 'inline-block',
            }}>
              {memories.length} FRAGMENTS DETECTED
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <PowerMeter current={game.power} total={100} />
          </div>
        </div>
      </div>

      {/* Novel-style Main Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: 0,
        height: 'calc(100vh - 80px)',
      }}>
        
        {/* Left Sidebar - Character Panel Style */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(26, 35, 50, 0.9) 0%, rgba(10, 10, 20, 0.95) 100%)',
          borderRight: '2px solid var(--cyber-border)',
          padding: '24px',
          overflowY: 'auto',
        }}>
          <div className="cyber-terminal" style={{
            marginBottom: 24,
            padding: 16,
            fontSize: 11,
          }}>
            <div>STATUS: <span className="cyber-text--primary">ACTIVE</span></div>
            <div>POWER: <span style={{color: game.power > 50 ? 'var(--cyber-primary)' : 'var(--cyber-danger)'}}>{game.power}%</span></div>
            <div>TOTAL: <span className="cyber-text--accent">{memories.length}</span></div>
            <div>PRESERVED: <span className="cyber-text--primary">{game.preservedCount}</span></div>
            <div>DISCARDED: <span style={{color: 'var(--cyber-danger)'}}>{game.discardedCount}</span></div>
            <div>UNDECIDED: <span className="cyber-text--warning">{undecidedMemories.length}</span></div>
          </div>

          {/* Chapter Navigation Style */}
          <div>
            <div className="cyber-text--accent" style={{
              fontSize: 14,
              fontWeight: 700,
              marginBottom: 16,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              MEMORY CATEGORIES
            </div>
            
            {['GOVERNMENT', 'PERSONAL', 'CORPORATE', 'AI_LOGS'].map((category, i) => (
              <div key={category} style={{
                padding: '12px 16px',
                margin: '8px 0',
                background: 'rgba(0, 255, 159, 0.05)',
                border: '1px solid var(--cyber-border)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                  {category.replace('_', ' ')}
                </div>
                <div style={{ fontSize: 10, color: 'var(--cyber-text-dim)' }}>
                  {Math.floor(memories.length / 4)} fragments
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Panel - Manga Panel Layout */}
        <div style={{
          overflowY: 'auto',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(0, 0, 8, 0.8) 0%, rgba(10, 10, 20, 0.6) 100%)',
        }}>
          
          {/* Memory Grid - Manga Panel Style */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '20px',
            marginTop: '20px',
          }}>
            {undecidedMemories.length === 0 ? (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '60px 20px',
                color: 'var(--cyber-text-dim)',
              }}>
                <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.3 }}>✓</div>
                <div className="cyber-text--primary" style={{ fontSize: 18, marginBottom: 8 }}>
                  ALL MEMORIES PROCESSED
                </div>
                <div style={{ fontSize: 12 }}>
                  You have made decisions on all available memory fragments.
                  <br />
                  {game.preservedCount} preserved • {game.discardedCount} discarded
                </div>
              </div>
            ) : (
              undecidedMemories.map((memory, index) => (
              <div
                key={memory.id}
                onClick={() => game.selectMemory(memory)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: index % 3 === 1 ? 'rotate(1deg)' : index % 3 === 2 ? 'rotate(-0.5deg)' : 'rotate(0deg)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03) rotate(0deg)';
                  e.currentTarget.style.zIndex = '10';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = index % 3 === 1 ? 'scale(1) rotate(1deg)' : index % 3 === 2 ? 'scale(1) rotate(-0.5deg)' : 'scale(1) rotate(0deg)';
                  e.currentTarget.style.zIndex = '1';
                }}
              >
                {/* Manga-style panel border */}
                <div className="cyber-screen" style={{
                  padding: 0,
                  borderWidth: '3px',
                  borderColor: index % 4 === 0 ? 'var(--cyber-primary)' : 
                              index % 4 === 1 ? 'var(--cyber-accent)' : 
                              index % 4 === 2 ? 'var(--cyber-secondary)' : 'var(--cyber-warning)',
                  clipPath: index % 5 === 0 ? 'polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)' : 'none',
                }}>
                  
                  {/* Header with dramatic diagonal */}
                  <div style={{
                    background: `linear-gradient(135deg, ${
                      index % 4 === 0 ? 'rgba(0, 255, 159, 0.2)' : 
                      index % 4 === 1 ? 'rgba(1, 180, 255, 0.2)' : 
                      index % 4 === 2 ? 'rgba(255, 42, 109, 0.2)' : 'rgba(255, 210, 63, 0.2)'
                    } 0%, transparent 70%)`,
                    padding: '16px 20px 12px',
                    position: 'relative',
                    borderBottom: '2px solid var(--cyber-border)',
                  }}>
                    
                    {/* ID Badge - Speech Bubble Style */}
                    <div style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '16px',
                      background: index % 4 === 0 ? 'var(--cyber-primary)' : 
                                 index % 4 === 1 ? 'var(--cyber-accent)' : 
                                 index % 4 === 2 ? 'var(--cyber-secondary)' : 'var(--cyber-warning)',
                      color: '#000',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '10px',
                      fontWeight: 900,
                      letterSpacing: 1,
                    }}>
                      #{memory.id.slice(0, 8).toUpperCase()}
                    </div>
                    
                    <h3 style={{
                      fontSize: 16,
                      fontWeight: 700,
                      marginBottom: 8,
                      lineHeight: 1.2,
                      color: index % 4 === 0 ? 'var(--cyber-primary)' : 
                             index % 4 === 1 ? 'var(--cyber-accent)' : 
                             index % 4 === 2 ? 'var(--cyber-secondary)' : 'var(--cyber-warning)',
                    }}>
                      {CorruptionSystem.corruptText(memory.title, memory.corruptionScore || 0)}
                    </h3>
                    
                    <div style={{
                      fontSize: 10,
                      color: 'var(--cyber-text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}>
                      {memory.category} • {memory.era}
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div style={{ padding: '20px' }}>
                    <div style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      marginBottom: 16,
                      color: 'var(--cyber-text)',
                    }}>
                      {CorruptionSystem.corruptText(memory.summary.substring(0, 120), memory.corruptionScore || 0)}...
                    </div>

                    {/* Stats Bar - Manga Style */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderTop: '1px solid var(--cyber-border)',
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: 16,
                        fontSize: 10,
                        color: 'var(--cyber-text-dim)',
                      }}>
                        <span>TRUTH: {memory.truthScore}%</span>
                        <span>CORRUPTION: {memory.corruptionScore}/5</span>
                      </div>
                      
                      {/* Action Button - Comic Style */}
                      <div style={{
                        background: 'var(--cyber-primary)',
                        color: '#000',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '10px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        boxShadow: '0 0 10px var(--cyber-primary)',
                      }}>
                        ANALYZE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}