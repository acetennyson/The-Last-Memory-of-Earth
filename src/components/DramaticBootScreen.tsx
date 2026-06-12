import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const messages = [
  'ARCHIVE BOOT FAILURE',
  '97.8% OF HUMAN HISTORY LOST',
  'RECOVERABLE MEMORIES FOUND: 87',
  'SEARCHING FOR CUSTODIAN...',
  'CUSTODIAN DETECTED',
  'ARCHIVE RESTORATION INITIATED'
];

export default function DramaticBootScreen({ onComplete }: Props) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentMessage >= messages.length) {
      setIsComplete(true);
      setTimeout(onComplete, 1500);
      return;
    }

    const message = messages[currentMessage];
    let charIndex = 0;
    
    const typeEffect = setInterval(() => {
      if (charIndex <= message.length) {
        setDisplayText(message.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeEffect);
        setTimeout(() => {
          setCurrentMessage(current => current + 1);
          setDisplayText('');
        }, 800);
      }
    }, 50);

    return () => clearInterval(typeEffect);
  }, [currentMessage, onComplete]);

  const getMessageColor = () => {
    if (currentMessage === 0) return '#D62839'; // BOOT FAILURE - red
    if (currentMessage === 1) return '#D62839'; // HISTORY LOST - red  
    if (currentMessage === 4) return '#2EC4B6'; // CUSTODIAN DETECTED - green
    if (currentMessage === 5) return '#6CCBFF'; // RESTORATION - blue
    return '#F4A261'; // default orange
  };

  return (
    <div style={{
      height: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'SF Mono','Fira Code',monospace",
    }}>
      <div style={{
        fontSize: 14,
        color: getMessageColor(),
        letterSpacing: 2,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 600,
        minHeight: 20,
        textShadow: currentMessage < 2 ? `0 0 10px ${getMessageColor()}` : 'none'
      }}>
        {displayText}
      </div>
      
      {isComplete && (
        <div style={{
          marginTop: 40,
          fontSize: 12,
          color: '#6CCBFF',
          animation: 'fadeIn 1s ease forwards'
        }}>
          This is humanity's corpse. You are its final voice.
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}