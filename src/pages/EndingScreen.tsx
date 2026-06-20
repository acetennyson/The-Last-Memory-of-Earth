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

  const legacy = (game.ending as any)?.legacy;
  const identity = (game.ending as any)?.identity;
  const book = (game.ending as any)?.book;
  const definingMemory = legacy?.definingMemories?.[0];
  const totalFabricationsSeen = (legacy?.fabricatedPreserved?.length ?? 0) + (legacy?.fabricatedDiscarded?.length ?? 0);

  useEffect(() => {
    const weightText = identity
      ? `You were the last voice. The final judge.\n\nWhat emerged became known as ${identity.name}.`
      : 'You were the last voice. The final judge.\n\nWhat humanity becomes... depends on what you chose to remember.';

    const sequence = [
      { phase: EndingPhase.SILENCE, duration: 1500, text: '' },
      { phase: EndingPhase.FINAL_POWER, duration: 2500, text: 'Archive power... depleted.' },
      { phase: EndingPhase.REFLECTION, duration: 3000, text: 'In the silence that follows, you realize what you have done.' },
      { phase: EndingPhase.WEIGHT, duration: 3500, text: weightText },
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
  }, [identity]);

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

  // Final results — identity and the one sentence that hurts come first.
  // Statistics are demoted to the bottom, supporting the identity rather
  // than leading with it, per the director's note that the player's first
  // thought should be "what have I done," not "I got 82%."
  const { civilization: civ } = game.ending as any;
  const civName = identity?.name || civ.civilization.civilizationName || 'Unknown Civilization';
  const values = civ.civilization.values;
  const sorted = Object.entries(values).sort(([, a], [, b]) => (b as number) - (a as number));
  const coreValues = sorted.slice(0, 3);
  const discernmentPct = legacy ? Math.round(legacy.discernmentRate * 100) : null;

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-start',
      padding: '40px 40px 60px', maxWidth: 640, margin: '0 auto',
      textAlign: 'center', overflowY: 'auto',
    }}>
      <div style={{ fontSize: 10, color: '#6B7280', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>
        Your civilization has emerged
      </div>

      <h1 style={{
        fontSize: 28, fontWeight: 600, color: '#F5F7FA',
        letterSpacing: 0.5, marginBottom: 8, lineHeight: 1.3,
      }}>
        {civName}
      </h1>

      {identity && (
        <div style={{ fontSize: 13, color: '#6CCBFF', fontStyle: 'italic', marginBottom: 36 }}>
          {identity.tagline}
        </div>
      )}

      {/* The one sentence that hurts — large, centered, the actual emotional
          payload of finishing the game, before any numbers appear at all. */}
      {book?.finalLine && (
        <div style={{
          fontSize: 20, lineHeight: 1.6, color: '#F5F7FA', fontWeight: 500,
          maxWidth: 480, marginBottom: 40, fontStyle: 'italic',
          opacity: 0, animation: 'finalLineFade 1.8s ease forwards',
        }}>
          "{book.finalLine}"
        </div>
      )}

      {identity && (
        <div style={{
          width: '100%', textAlign: 'left',
          background: 'rgba(17,22,39,0.5)', borderRadius: 12,
          border: '1px solid rgba(108,203,255,0.12)',
          padding: 22, marginBottom: 28,
        }}>
          <div style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.8 }}>
            {identity.description}
          </div>
        </div>
      )}

      {definingMemory && (
        <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 28, lineHeight: 1.6, fontStyle: 'italic' }}>
          Its founding myth traces back to a single choice: <em style={{ color: '#6CCBFF' }}>"{definingMemory.title}"</em>
        </div>
      )}

      {/* Statistics — demoted, supporting evidence rather than the headline */}
      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center', gap: 28,
        marginBottom: 28, padding: '16px 0',
        borderTop: '1px solid rgba(108,203,255,0.08)',
        borderBottom: '1px solid rgba(108,203,255,0.08)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#2EC4B6' }}>{game.preservedCount}</div>
          <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>
            Memories Saved
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#D62839' }}>{game.discardedCount}</div>
          <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>
            Let Go
          </div>
        </div>
        {totalFabricationsSeen > 0 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#E9C46A' }}>{discernmentPct}%</div>
            <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>
              Lies Detected
            </div>
          </div>
        )}
      </div>

      <div style={{
        width: '100%',
        background: 'rgba(17,22,39,0.6)', borderRadius: 12,
        border: '1px solid rgba(108,203,255,0.1)',
        padding: 20, marginBottom: 28, textAlign: 'left',
      }}>
        <div style={{ fontSize: 11, color: '#6B7280', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
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
        Read the Chronicle
      </button>

      <style>{`
        @keyframes finalLineFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
