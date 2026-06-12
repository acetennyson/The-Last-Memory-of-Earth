import React, { useState, useEffect } from 'react';

interface SignalReconstructionProps {
  memoryTitle: string;
  onComplete: () => void;
}

export default function SignalReconstruction({ memoryTitle, onComplete }: SignalReconstructionProps) {
  const [phase, setPhase] = useState(0);
  const [signalStrength, setSignalStrength] = useState(0);
  const [reconstructedText, setReconstructedText] = useState('');
  const [corruption, setCorruption] = useState(1);

  // Phase 0: Detecting signal
  // Phase 1: Boosting signal
  // Phase 2: Reconstructing data
  // Phase 3: Complete

  useEffect(() => {
    if (phase === 0) {
      // Detecting phase - random signal noise
      const interval = setInterval(() => {
        setSignalStrength(Math.random() * 30);
      }, 100);
      
      setTimeout(() => {
        setPhase(1);
        clearInterval(interval);
      }, 1500);
      
      return () => clearInterval(interval);
    }
    
    if (phase === 1) {
      // Boosting phase - signal grows stronger
      const interval = setInterval(() => {
        setSignalStrength(prev => Math.min(85, prev + Math.random() * 10));
      }, 150);
      
      setTimeout(() => {
        setPhase(2);
        setSignalStrength(75);
        clearInterval(interval);
      }, 2000);
      
      return () => clearInterval(interval);
    }
    
    if (phase === 2) {
      // Reconstruction phase - text appears with corruption
      const chars = memoryTitle.split('');
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < chars.length) {
          const corruptedChar = Math.random() < corruption * 0.3 
            ? ['█', '░', '▒', '▓', '◊', '▪'][Math.floor(Math.random() * 6)]
            : chars[currentIndex];
          
          setReconstructedText(prev => prev + corruptedChar);
          currentIndex++;
          
          // Gradually reduce corruption
          setCorruption(prev => Math.max(0, prev - 0.03));
        } else {
          clearInterval(interval);
          
          // Clean up corruption after a brief pause
          setTimeout(() => {
            setReconstructedText(memoryTitle);
            setTimeout(() => {
              setPhase(3);
              onComplete();
            }, 500);
          }, 800);
        }
      }, 60);
      
      return () => clearInterval(interval);
    }
  }, [phase, memoryTitle, onComplete, corruption]);

  const getPhaseText = () => {
    switch (phase) {
      case 0: return 'DETECTING ARCHIVE SIGNAL...';
      case 1: return 'BOOSTING SIGNAL STRENGTH...';
      case 2: return 'RECONSTRUCTING MEMORY DATA...';
      case 3: return 'RECONSTRUCTION COMPLETE';
      default: return '';
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0A0E1A',
      padding: 40,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(108,203,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(108,203,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: signalStrength / 100,
      }} />

      {/* Central interface */}
      <div style={{
        background: 'rgba(17,22,39,0.9)',
        border: '1px solid rgba(108,203,255,0.2)',
        borderRadius: 12,
        padding: '40px 60px',
        maxWidth: 500,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Scanning line effect */}
        {phase < 3 && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent, rgba(108,203,255,${signalStrength / 100}), transparent)`,
            animation: 'scan 2s linear infinite',
          }} />
        )}

        {/* Phase indicator */}
        <div style={{
          fontSize: 10,
          color: '#6B7280',
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 30,
        }}>
          {getPhaseText()}
        </div>

        {/* Signal strength indicator */}
        <div style={{
          width: '100%',
          height: 8,
          background: 'rgba(108,203,255,0.1)',
          borderRadius: 4,
          marginBottom: 30,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${signalStrength}%`,
            background: `linear-gradient(90deg, #6CCBFF, #2EC4B6)`,
            transition: 'width 0.2s ease-out',
            borderRadius: 4,
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            fontSize: 9,
            color: '#9CA3AF',
            letterSpacing: 1,
          }}>
            {Math.round(signalStrength)}%
          </div>
        </div>

        {/* Memory reconstruction area */}
        <div style={{
          minHeight: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {phase < 2 && (
            <div style={{
              fontSize: 14,
              color: '#4B5563',
              fontFamily: 'monospace',
              letterSpacing: 1,
            }}>
              ░░░░░░░░░░░░░░░░░░░░
            </div>
          )}
          
          {phase >= 2 && (
            <div style={{
              fontSize: 16,
              color: '#F5F7FA',
              fontWeight: 500,
              lineHeight: 1.4,
              fontFamily: 'monospace',
              minHeight: 40,
            }}>
              {reconstructedText}
            </div>
          )}
        </div>

        {/* Glitch effect for corruption */}
        {phase === 2 && corruption > 0.3 && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, transparent, rgba(255,0,0,${corruption * 0.1}), transparent)`,
            animation: 'glitch 0.1s linear infinite',
            pointerEvents: 'none',
          }} />
        )}
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
      `}</style>
    </div>
  );
}