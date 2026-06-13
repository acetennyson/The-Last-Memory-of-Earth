import React, { useRef } from 'react';
import type { GameHook } from '../hooks/useGame';
import HistoryBookView from '../components/HistoryBookView';

export default function HistoryBookScreen({ game }: { game: GameHook }) {
  const bookRef = useRef<HTMLDivElement>(null);

  const exportAsImage = () => {
    if (!bookRef.current) return;
    
    // Create a temporary canvas to render the book content
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size for high quality
    canvas.width = 800;
    canvas.height = 1200;
    
    // Set background
    ctx.fillStyle = '#0D1120';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add title and content (simplified text rendering)
    ctx.fillStyle = '#F5F7FA';
    ctx.font = '24px serif';
    ctx.textAlign = 'center';
    ctx.fillText(game.ending?.book.title || 'History Book', canvas.width / 2, 100);
    
    ctx.fillStyle = '#6CCBFF';
    ctx.font = '12px monospace';
    ctx.fillText('Archive Unit A-01 — Final Report', canvas.width / 2, 60);
    
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    
    // Add some basic content (simplified)
    const lines = [
      'Civilization: ' + (game.ending?.book.civilizationName || 'Unknown'),
      'Memories Preserved: ' + game.preservedCount,
      'Memories Released: ' + game.discardedCount,
      '',
      'This archive was curated by humanity\'s final archivist.',
      'These fragments are all that remain of our species.',
      '',
      '"What you chose to remember became what we became."'
    ];
    
    let y = 200;
    lines.forEach(line => {
      ctx.fillText(line, 50, y);
      y += 24;
    });
    
    // Download the canvas as image
    const link = document.createElement('a');
    link.download = `humanity-archive-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const exportAsText = () => {
    if (!game.ending) return;
    
    const book = game.ending.book;
    let content = `THE LAST MEMORY OF EARTH\n`;
    content += `Archive Unit A-01 — Final Report\n\n`;
    content += `${book.title}\n`;
    content += `Civilization: ${book.civilizationName}\n`;
    content += `Archetype: ${book.archetype}\n\n`;
    content += `═══════════════════════════════════════\n\n`;
    
    content += `ARCHIVE STATISTICS:\n`;
    content += `• Memories Preserved: ${game.preservedCount}\n`;
    content += `• Memories Released: ${game.discardedCount}\n`;
    content += `• Total Investigated: ${game.processed}\n\n`;
    
    book.chapters.forEach((chapter: any, i: number) => {
      content += `CHAPTER ${i + 1}: ${chapter.title.toUpperCase()}\n`;
      content += `${chapter.summary}\n\n`;
      chapter.paragraphs.forEach((paragraph: any) => {
        content += `${paragraph}\n\n`;
      });
      content += `───────────────────────────────────────\n\n`;
    });
    
    content += `EPILOGUE:\n${book.epilogue}\n\n`;
    content += `═══════════════════════════════════════\n`;
    content += `"Humanity is remembered. Not as it was.\nBut as you chose to preserve it."\n`;
    content += `\nGenerated: ${new Date().toLocaleDateString()}\n`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = `humanity-archive-${Date.now()}.txt`;
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  if (!game.ending) return null;

  return (
    <div style={{
      height: '100vh', padding: 40, maxWidth: 640,
      margin: '0 auto', display: 'flex', flexDirection: 'column',
    }}>
      {/* Trophy Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: 24,
        padding: 16,
        background: 'linear-gradient(135deg, rgba(108,203,255,0.05) 0%, rgba(233,196,106,0.05) 100%)',
        border: '1px solid rgba(108,203,255,0.2)',
        borderRadius: 8,
      }}>
        <div style={{
          fontSize: 24,
          marginBottom: 8,
        }}>🏆</div>
        <div style={{
          fontSize: 12,
          color: '#E9C46A',
          letterSpacing: 2,
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: 4,
        }}>
          Archive Achievement Unlocked
        </div>
        <div style={{
          fontSize: 13,
          color: '#F5F7FA',
          fontStyle: 'italic',
        }}>
          You have completed humanity's final archive
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }} ref={bookRef}>
        <HistoryBookView book={game.ending.book} />
      </div>

      {/* Trophy Actions */}
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <div style={{
          fontSize: 12, color: '#F5F7FA', fontStyle: 'italic', marginBottom: 20,
          lineHeight: 1.7,
        }}>
          "Humanity is remembered. Not as it was. But as you chose to preserve it."
        </div>
        
        {/* Export Options */}
        <div style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginBottom: 16,
          padding: 12,
          background: 'rgba(17,22,39,0.4)',
          borderRadius: 8,
          border: '1px solid rgba(108,203,255,0.1)'
        }}>
          <button
            onClick={exportAsText}
            style={{
              padding: '8px 16px', background: 'transparent', color: '#E9C46A',
              border: '1px solid rgba(233,196,106,0.3)', borderRadius: 4,
              fontSize: 10, letterSpacing: 1, textTransform: 'uppercase',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,196,106,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            📄 Export as Text
          </button>
          <button
            onClick={exportAsImage}
            style={{
              padding: '8px 16px', background: 'transparent', color: '#E9C46A',
              border: '1px solid rgba(233,196,106,0.3)', borderRadius: 4,
              fontSize: 10, letterSpacing: 1, textTransform: 'uppercase',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,196,106,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            🖼️ Export as Image
          </button>
        </div>
        
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button
            onClick={game.viewHistoryBook}
            style={{
              padding: '10px 24px', background: 'transparent', color: '#6B7280',
              border: '1px solid rgba(108,203,255,0.15)', borderRadius: 6,
              fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
            }}
          >
            Read Again
          </button>
          <button
            onClick={game.restart}
            style={{
              padding: '10px 24px', background: 'transparent', color: '#6CCBFF',
              border: '1px solid rgba(108,203,255,0.3)', borderRadius: 6,
              fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,203,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Begin New Archive
          </button>
        </div>
      </div>
    </div>
  );
}
