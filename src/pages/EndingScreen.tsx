import React, { useState, useEffect } from 'react';
import type { GameHook } from '../hooks/useGame';

enum EndingPhase {
  SILENCE = 'SILENCE',
  FINAL_POWER = 'FINAL_POWER', 
  REFLECTION = 'REFLECTION',
  WEIGHT = 'WEIGHT',
  COMPLETE = 'COMPLETE'
}

export default function EndingScreen({ game }: { game: GameHook }) {
  const [currentPhase, setCurrentPhase] = useState(EndingPhase.SILENCE);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const sequence = [
      { phase: EndingPhase.SILENCE, duration: 1500, text: '' },
      { phase: EndingPhase.FINAL_POWER, duration: 2500, text: 'Archive power... depleted.' },
      { phase: EndingPhase.REFLECTION, duration: 3000, text: 'In the silence that follows, you realize what you have done.' },
      { phase: EndingPhase.WEIGHT, duration: 3500, text: 'You were the last voice. The final judge.\n\nWhat humanity becomes... depends on what you chose to remember.' },
      { phase: EndingPhase.COMPLETE, duration: 0, text: '' }
    ];

    let currentIndex = 0;
    const progressSequence = () => {
      if (currentIndex >= sequence.length) return;
      
      const step = sequence[currentIndex];
      setCurrentPhase(step.phase);
      setDisplayText(step.text);
      
      if (step.duration > 0) {
        setTimeout(() => {
          currentIndex++;
          progressSequence();
        }, step.duration);
      }
    };

    progressSequence();
  }, []);

  if (!game.ending) return null;

  // Dramatic sequence before results
  if (currentPhase !== EndingPhase.COMPLETE) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        textAlign: 'center',
        background: currentPhase === EndingPhase.SILENCE ? '#000' : 'inherit',
        transition: 'background 2s ease',
      }}>
        {currentPhase === EndingPhase.FINAL_POWER && (
          <div style={{
            fontSize: 10,
            color: '#D62839',
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 24,
            animation: 'blink 1s infinite'
          }}>
            ARCHIVE POWER CRITICAL
          </div>
        )}

        {displayText && (
          <div style={{
            maxWidth: 600,
            fontSize: 18,
            color: currentPhase === EndingPhase.FINAL_POWER ? '#D62839' : '#F5F7FA',
            lineHeight: 1.8,
            fontWeight: currentPhase === EndingPhase.WEIGHT ? 500 : 400,
            textAlign: 'center',
            whiteSpace: 'pre-line',
            opacity: 0,
            animation: 'fadeIn 1.5s ease forwards'
          }}>
            {displayText}
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.3; }
          }
        `}</style>
      </div>
    );
  }

  // Final results with emotional impact
  const { civilization: civ } = game.ending;
  const civName = civ.civilization.civilizationName || 'Unknown Civilization';
  const values = civ.civilization.values;
  const sorted = Object.entries(values).sort(([, a], [, b]) => (b as number) - (a as number));
  const coreValues = sorted.slice(0, 3);

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: 40, maxWidth: 640, margin: '0 auto',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: 22, fontWeight: 500, color: '#F5F7FA',
        letterSpacing: 1, marginBottom: 8
      }}>
        Your Legacy Lives On
      </h2>

      <div style={{
        fontSize: 13,
        color: '#9CA3AF',
        marginBottom: 32,
        fontStyle: 'italic'
      }}>
        From the fragments you preserved, a new civilization emerges...
      </div>

      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center', gap: 32,
        marginBottom: 32, padding: '20px 0',
        borderTop: '1px solid rgba(108,203,255,0.08)',
        borderBottom: '1px solid rgba(108,203,255,0.08)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#2EC4B6' }}>{game.preservedCount}</div>
          <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>
            Memories Saved
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#D62839' }}>{game.discardedCount}</div>
          <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>
            Let Go
          </div>
        </div>
      </div>

      <div style={{
        width: '100%',
        background: 'rgba(17,22,39,0.6)', borderRadius: 12,
        border: '1px solid rgba(108,203,255,0.1)',
        padding: 24, marginBottom: 32, textAlign: 'left',
      }}>
        <div style={{ fontSize: 11, color: '#6B7280', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
          The Civilization You Created
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 500, color: '#F5F7FA', marginBottom: 4 }}>
          {civName}
        </h3>
        <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 16, lineHeight: 1.6 }}>
          {civ.summary || civ.civilization.summary}
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
            Values You Instilled
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {coreValues.map(([key]) => (
              <span key={key} style={{
                fontSize: 11, color: '#6CCBFF',
                border: '1px solid rgba(108,203,255,0.15)',
                borderRadius: 4, padding: '3px 10px',
              }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        style={{
          padding: '12px 40px', background: 'transparent', color: '#6CCBFF',
          border: '1px solid rgba(108,203,255,0.3)', borderRadius: 8,
          fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600,
        }}
        onClick={game.viewHistoryBook}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,203,255,0.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        Preserve Your Legacy
      </button>
    </div>
  );
}