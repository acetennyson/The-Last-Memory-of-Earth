import React from 'react';

interface InvestigationPath {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

interface InvestigationPathSelectionProps {
  memoryTitle: string;
  currentPower: number;
  onSelectPath: (pathId: string) => void;
  onCancel: () => void;
}

const INVESTIGATION_PATHS: InvestigationPath[] = [
  {
    id: 'government',
    name: 'Government Records',
    description: 'Official documents, classified files, policy archives',
    color: '#6CCBFF',
    icon: '📋'
  },
  {
    id: 'testimony',
    name: 'Survivor Testimony',
    description: 'Personal accounts, witness statements, diary entries',
    color: '#F4A261',
    icon: '👥'
  },
  {
    id: 'corporate',
    name: 'Corporate Archive',
    description: 'Business records, internal memos, financial data',
    color: '#2EC4B6',
    icon: '🏢'
  },
  {
    id: 'ai_logs',
    name: 'AI System Logs',
    description: 'Machine records, algorithm decisions, data patterns',
    color: '#9B5DE5',
    icon: '🤖'
  }
];

export default function InvestigationPathSelection({ 
  memoryTitle, 
  currentPower,
  onSelectPath, 
  onCancel 
}: InvestigationPathSelectionProps) {
  const isLowPower = currentPower <= 25;
  const isCriticalPower = currentPower <= 10;
  
  const getPowerWarning = () => {
    if (isCriticalPower) return {
      message: "CRITICAL: This may be your final investigation",
      color: "#B91C1C"
    };
    if (isLowPower) return {
      message: "WARNING: Archive power running dangerously low",
      color: "#D62839"
    };
    if (currentPower <= 40) return {
      message: "CAUTION: Limited investigations remaining",
      color: "#F4A261"
    };
    return null;
  };

  const powerWarning = getPowerWarning();

  // Get available evidence from current memory to show only valid paths
  const getAvailablePaths = () => {
    // Check what evidence types this memory actually has based on its properties
    const memoryEvidenceTypes: string[] = [];
    
    // Map memory artifact type to evidence source types
    const artifactToSourceMap: Record<string, string[]> = {
      'SCIENTIFIC_REPORT': ['SCIENTIFIC_RECORD'],
      'GOVERNMENT_DOCUMENT': ['GOVERNMENT_DOCUMENT'],
      'PERSONAL_DIARY': ['PERSONAL_DIARY'],
      'AUDIO_TRANSCRIPT': ['AUDIO_LOG'],
      'CULTURAL_RECORD': ['CULTURAL_RECORD'],
      'HISTORICAL_ARTICLE': ['NEWS_REPORT'],
      'RESEARCH_PAPER': ['SCIENTIFIC_RECORD'],
      'LETTER': ['PERSONAL_DIARY'],
      'PHOTOGRAPH': ['PERSONAL_DIARY'],
      'RECOVERED_TRANSMISSION': ['AUDIO_LOG'],
    };
    
    // For now, assume each memory has evidence for at least 2-3 random paths
    // In a real implementation, this would check the actual evidence data
    const availablePaths = [];
    const randomPaths = Math.floor(Math.random() * 2) + 2; // 2-3 paths
    const allPaths = ['government', 'testimony', 'corporate', 'ai_logs'];
    
    for (let i = 0; i < randomPaths; i++) {
      const pathIndex = Math.floor(Math.random() * allPaths.length);
      const pathId = allPaths.splice(pathIndex, 1)[0];
      
      const pathData = {
        government: {
          name: 'Government Records',
          description: 'Official documents, classified files, policy archives',
          color: '#6CCBFF',
          icon: '📋',
        },
        testimony: {
          name: 'Survivor Testimony',
          description: 'Personal accounts, witness statements, diary entries', 
          color: '#F4A261',
          icon: '👥',
        },
        corporate: {
          name: 'Corporate Archive',
          description: 'Business records, internal memos, financial data',
          color: '#2EC4B6', 
          icon: '🏢',
        },
        ai_logs: {
          name: 'AI System Logs',
          description: 'Machine records, algorithm decisions, data patterns',
          color: '#9B5DE5',
          icon: '🤖',
        }
      }[pathId];
      
      if (pathData) {
        availablePaths.push({
          id: pathId,
          ...pathData,
          count: Math.floor(Math.random() * 3) + 1, // 1-3 pieces of evidence
        });
      }
    }
    
    return availablePaths;
  };

  const availablePaths = getAvailablePaths();
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: 24,
      maxWidth: 640,
      margin: '0 auto',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: 32,
      }}>
        <div style={{
          fontSize: 11,
          color: '#6B7280',
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Investigation Path Selection
        </div>
        <h2 style={{
          fontSize: 18,
          color: '#F5F7FA',
          fontWeight: 500,
          lineHeight: 1.3,
        }}>
          {memoryTitle}
        </h2>
        <p style={{
          fontSize: 12,
          color: '#9CA3AF',
          marginTop: 12,
          lineHeight: 1.6,
        }}>
          Choose your investigation approach. Each path reveals different perspectives and evidence types.
        </p>
        
        {/* Dramatic power warning */}
        {powerWarning && (
          <div style={{
            marginTop: 16,
            padding: '8px 16px',
            background: `${powerWarning.color}15`,
            border: `1px solid ${powerWarning.color}40`,
            borderRadius: 8,
            fontSize: 11,
            color: powerWarning.color,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
            animation: isCriticalPower ? 'blink 1s infinite' : isLowPower ? 'pulse 2s infinite' : 'none',
          }}>
            {powerWarning.message}
          </div>
        )}
        
        {/* Power cost reminder */}
        <div style={{
          marginTop: 12,
          fontSize: 10,
          color: isLowPower ? powerWarning?.color : '#6B7280',
          fontStyle: 'italic',
        }}>
          Investigation Cost: 5 Archive Power ({currentPower}/100 remaining)
        </div>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        {availablePaths.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: 40,
            color: '#6B7280',
            fontStyle: 'italic'
          }}>
            No investigation paths available for this memory.
          </div>
        ) : (
          availablePaths.map(path => (
          <button
            key={path.id}
            onClick={() => onSelectPath(path.id)}
            style={{
              background: 'linear-gradient(135deg, #111627 0%, #0D1120 100%)',
              border: `1px solid ${path.color}20`,
              borderRadius: 12,
              padding: 20,
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.border = `1px solid ${path.color}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, #111627 0%, ${path.color}08 100%)`;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 4px 12px ${path.color}20`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = `1px solid ${path.color}20`;
              e.currentTarget.style.background = 'linear-gradient(135deg, #111627 0%, #0D1120 100%)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              fontSize: 24,
              minWidth: 40,
              textAlign: 'center',
            }}>
              {path.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 14,
                color: path.color,
                fontWeight: 600,
                marginBottom: 4,
              }}>
                {path.name}
              </div>
              <div style={{
                fontSize: 12,
                color: '#9CA3AF',
                lineHeight: 1.5,
              }}>
                {path.description}
              </div>
            </div>
          </button>
        ))
        )}
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: 24,
      }}>
        <button
          onClick={onCancel}
          style={{
            padding: '10px 32px',
            background: 'transparent',
            color: '#6B7280',
            border: '1px solid rgba(107, 114, 128, 0.25)',
            borderRadius: 6,
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(107, 114, 128, 0.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Cancel
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}