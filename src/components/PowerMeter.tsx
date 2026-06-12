import { useEffect, useState } from 'react';

interface Props {
  current: number;
  total: number;
  className?: string;
}

export default function PowerMeter({ current, total, className }: Props) {
  const pct = Math.max(0, Math.min(100, (current / total) * 100));
  const [flash, setFlash] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [shake, setShake] = useState(false);

  // Trigger dramatic effects based on power level
  useEffect(() => { 
    setFlash(true); 
    const t = setTimeout(() => setFlash(false), 400); 
    
    // Start pulsing when power is low
    if (pct <= 25) {
      setPulse(true);
    } else {
      setPulse(false);
    }
    
    // Shake when power is critically low
    if (pct <= 10) {
      setShake(true);
      const shakeTimer = setTimeout(() => setShake(false), 1000);
      return () => {
        clearTimeout(t);
        clearTimeout(shakeTimer);
      };
    }
    
    return () => clearTimeout(t); 
  }, [current, pct]);

  // Color coding with more dramatic transitions
  const getColor = () => {
    if (pct > 60) return '#6CCBFF';
    if (pct > 40) return '#F4A261';
    if (pct > 20) return '#FF6B35';
    if (pct > 10) return '#D62839';
    return '#B91C1C'; // Critical red
  };

  const color = getColor();

  // Warning messages based on power level
  const getWarningMessage = () => {
    if (pct <= 5) return 'ARCHIVE POWER CRITICAL - SYSTEM FAILING';
    if (pct <= 10) return 'WARNING: ARCHIVE POWER DANGEROUSLY LOW';
    if (pct <= 25) return 'CAUTION: Limited investigations remaining';
    return null;
  };

  const warningMessage = getWarningMessage();

  // Dynamic glow intensity
  const glowIntensity = pct <= 25 ? Math.sin(Date.now() / 200) * 0.3 + 0.7 : 1;

  return (
    <div className={className} style={{ width: '100%' }}>
      {/* Warning message */}
      {warningMessage && (
        <div style={{
          marginBottom: 8,
          padding: '4px 8px',
          background: `${color}15`,
          border: `1px solid ${color}40`,
          borderRadius: 4,
          fontSize: 9,
          color: color,
          textAlign: 'center',
          letterSpacing: 1,
          textTransform: 'uppercase',
          fontWeight: 700,
          animation: pct <= 10 ? 'blink 0.8s infinite' : pulse ? 'pulse 1.5s infinite' : 'none',
          transform: shake ? 'translateX(-1px)' : 'none',
        }}>
          {warningMessage}
        </div>
      )}

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        transform: shake ? 'translateX(1px)' : 'none',
        transition: 'transform 0.1s ease'
      }}>
        <span style={{ 
          fontSize: 10, 
          color: pct <= 25 ? color : '#6B7280', 
          letterSpacing: 2, 
          textTransform: 'uppercase',
          fontWeight: pct <= 25 ? 700 : 400,
        }}>
          Archive Power
        </span>
        <span style={{ 
          fontSize: 12, 
          fontFamily: "'SF Mono','Fira Code',monospace", 
          color, 
          fontWeight: 700,
          textShadow: pct <= 25 ? `0 0 4px ${color}60` : 'none',
        }}>
          {Math.round(pct)}%
        </span>
      </div>

      {/* Power bar with dramatic effects */}
      <div style={{ 
        width: '100%', 
        height: pct <= 25 ? 4 : 2, 
        background: 'rgba(108,203,255,0.1)',
        borderRadius: 2, 
        overflow: 'hidden', 
        marginTop: 8,
        boxShadow: pct <= 10 ? `0 0 8px ${color}40, inset 0 0 8px rgba(0,0,0,0.5)` : 'none',
        border: pct <= 25 ? `1px solid ${color}30` : 'none',
      }}>
        <div style={{ 
          height: '100%', 
          width: `${pct}%`,
          background: pct <= 10 ? 
            `linear-gradient(90deg, ${color}, #FF0000, ${color})` : 
            color,
          borderRadius: 2,
          transition: 'width 0.6s ease, background 0.3s ease',
          opacity: flash ? 0.7 : glowIntensity,
          boxShadow: pct <= 25 ? `0 0 6px ${color}80` : 'none',
        }} />
      </div>

      {/* Additional warnings for very low power */}
      {pct <= 15 && (
        <div style={{
          marginTop: 6,
          fontSize: 8,
          color: color,
          textAlign: 'center',
          fontStyle: 'italic',
          opacity: 0.8,
        }}>
          Each investigation may be your last...
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
