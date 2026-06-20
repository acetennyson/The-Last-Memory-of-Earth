import React, { useRef } from 'react';
import type { GameHook } from '../hooks/useGame';
import HistoryBookView from '../components/HistoryBookView';

export default function HistoryBookScreen({ game }: { game: GameHook }) {
  const bookRef = useRef<HTMLDivElement>(null);

  const exportAsImage = () => {
    const book = (game.ending as any)?.book;
    if (!book) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 800;
    canvas.width = width;

    const wrapText = (text: string, font: string, maxWidth: number): string[] => {
      ctx.font = font;
      const words = text.split(' ');
      const lines: string[] = [];
      let current = '';
      for (const word of words) {
        const test = current ? `${current} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && current) {
          lines.push(current);
          current = word;
        } else {
          current = test;
        }
      }
      if (current) lines.push(current);
      return lines;
    };

    const marginX = 50;
    const contentWidth = width - marginX * 2;
    const deception = book.deceptionChapter;

    type Line = { text: string; font: string; color: string; gapAfter: number };
    const lines: Line[] = [];

    const pushWrapped = (text: string, font: string, color: string, gapAfter = 8) => {
      wrapText(text, font, contentWidth).forEach(l => lines.push({ text: l, font, color, gapAfter: 4 }));
      if (lines.length) lines[lines.length - 1].gapAfter = gapAfter;
    };

    pushWrapped('Archive Unit A-01 — Final Report', '12px monospace', '#6CCBFF', 28);
    pushWrapped(book.title, '24px serif', '#F5F7FA', 4);
    if (book.identity) {
      pushWrapped(book.identity.name, '18px serif', '#E9C46A', 4);
      pushWrapped(book.identity.tagline, '12px sans-serif', '#9CA3AF', 24);
    }
    pushWrapped(`${book.civilizationName} · ${book.archetype}`, '13px sans-serif', '#9CA3AF', 28);
    pushWrapped(`Memories Preserved: ${game.preservedCount}    Memories Released: ${game.discardedCount}`, '13px monospace', '#9CA3AF', 28);

    if (book.foundingMyth) {
      pushWrapped(book.foundingMyth.eraLabel.toUpperCase(), '12px monospace', '#6B7280', 4);
      pushWrapped('EXCERPT FROM "THE OFFICIAL HISTORY OF THE SECOND HUMAN CIVILIZATION"', '11px monospace', '#E9C46A', 8);
      pushWrapped(`"${book.foundingMyth.retelling}"`, '14px serif', '#F5F7FA', 28);
    }

    if (deception) {
      pushWrapped('THE ARCHIVE\'S DECEPTIONS', '13px monospace', '#E9C46A', 6);
      pushWrapped(
        `${Math.round(deception.deceptionRate * 100)}% of preserved memories were fabricated · ${Math.round(deception.discernmentRate * 100)}% of all fabrications were caught`,
        '12px sans-serif', '#9CA3AF', 10
      );
      deception.paragraphs.forEach((p: string) => pushWrapped(p, '13px sans-serif', '#D1D5DB', 10));
      deception.inheritedLies.forEach((l: any) => pushWrapped(`✗ "${l.title}" — preserved as truth, never real.`, '12px sans-serif', '#D62839', 6));
      deception.caughtFabrications.forEach((c: any) => pushWrapped(`✓ "${c.title}" — caught and released.`, '12px sans-serif', '#2EC4B6', 6));
      if (lines.length) lines[lines.length - 1].gapAfter = 28;
    }

    book.chapters.forEach((chapter: any) => {
      pushWrapped(chapter.title.toUpperCase(), '13px monospace', '#6CCBFF', 6);
      pushWrapped(chapter.summary, '12px sans-serif', '#9CA3AF', 10);
      chapter.paragraphs.forEach((p: string) => pushWrapped(p, '13px sans-serif', '#D1D5DB', 10));
      if (lines.length) lines[lines.length - 1].gapAfter = 22;
    });

    pushWrapped('EPILOGUE', '13px monospace', '#E9C46A', 6);
    pushWrapped(book.epilogue, '13px sans-serif', '#D1D5DB', 10);

    if (book.finalLine) {
      pushWrapped(`"${book.finalLine}"`, '16px serif', '#F5F7FA', 8);
    }

    const topMargin = 40;
    const bottomMargin = 40;
    const lineHeight = 20;
    const totalHeight = topMargin + lines.length * lineHeight + bottomMargin;
    canvas.height = Math.max(1200, totalHeight);

    ctx.fillStyle = '#0D1120';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'left';

    let y = topMargin;
    lines.forEach(line => {
      ctx.font = line.font;
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, marginX, y);
      y += lineHeight + line.gapAfter / 4;
    });

    const link = document.createElement('a');
    link.download = `humanity-archive-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const exportAsText = () => {
    if (!game.ending) return;

    const book = (game.ending as any).book;
    let content = `THE LAST MEMORY OF EARTH\n`;
    content += `Archive Unit A-01 — Final Report\n\n`;
    content += `${book.title}\n`;
    if (book.identity) {
      content += `${book.identity.name}\n`;
      content += `${book.identity.tagline}\n`;
    }
    content += `Civilization: ${book.civilizationName}\n`;
    content += `Archetype: ${book.archetype}\n\n`;
    content += `═══════════════════════════════════════\n\n`;

    content += `ARCHIVE STATISTICS:\n`;
    content += `• Memories Preserved: ${game.preservedCount}\n`;
    content += `• Memories Released: ${game.discardedCount}\n`;
    content += `• Total Investigated: ${game.processed}\n\n`;

    if (book.foundingMyth) {
      content += `═══════════════════════════════════════\n`;
      content += `${book.foundingMyth.eraLabel.toUpperCase()}\n`;
      content += `Excerpt from "The Official History of the Second Human Civilization"\n\n`;
      content += `"${book.foundingMyth.retelling}"\n\n`;
      content += `— source record: "${book.foundingMyth.sourceTitle}"\n\n`;
    }

    const deception = book.deceptionChapter;
    if (deception) {
      content += `═══════════════════════════════════════\n`;
      content += `${deception.title.toUpperCase()}\n`;
      content += `${deception.summary}\n\n`;
      content += `• Fabrications among preserved memories: ${Math.round(deception.deceptionRate * 100)}%\n`;
      content += `• Fabrications correctly caught: ${Math.round(deception.discernmentRate * 100)}%\n\n`;
      deception.paragraphs.forEach((p: string) => { content += `${p}\n\n`; });
      if (deception.inheritedLies.length > 0) {
        content += `INHERITED LIES — NOW LOAD-BEARING HISTORY:\n`;
        deception.inheritedLies.forEach((l: any) => { content += `  ✗ "${l.title}" — ${l.summary}\n`; });
        content += `\n`;
      }
      if (deception.caughtFabrications.length > 0) {
        content += `FABRICATIONS CAUGHT — RELEASED BEFORE THEY COULD ROOT:\n`;
        deception.caughtFabrications.forEach((c: any) => { content += `  ✓ "${c.title}" — ${c.summary}\n`; });
        content += `\n`;
      }
      content += `───────────────────────────────────────\n\n`;
    }

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
    content += `"${book.finalLine ?? 'Humanity is remembered. Not as it was. But as you chose to preserve it.'}"\n`;
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
      <div style={{
        textAlign: 'center',
        marginBottom: 24,
        padding: 16,
        background: 'linear-gradient(135deg, rgba(108,203,255,0.05) 0%, rgba(233,196,106,0.05) 100%)',
        border: '1px solid rgba(108,203,255,0.2)',
        borderRadius: 8,
      }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>📜</div>
        <div style={{
          fontSize: 12, color: '#E9C46A', letterSpacing: 2,
          textTransform: 'uppercase', fontWeight: 600, marginBottom: 4,
        }}>
          The Chronicle Is Complete
        </div>
        <div style={{ fontSize: 13, color: '#F5F7FA', fontStyle: 'italic' }}>
          History was never discovered. It was selected — by you.
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }} ref={bookRef}>
        <HistoryBookView book={(game.ending as any).book} />
      </div>

      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <div style={{
          display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16,
          padding: 12, background: 'rgba(17,22,39,0.4)', borderRadius: 8,
          border: '1px solid rgba(108,203,255,0.1)'
        }}>
          <button
            onClick={exportAsText}
            style={{
              padding: '8px 16px', background: 'transparent', color: '#E9C46A',
              border: '1px solid rgba(233,196,106,0.3)', borderRadius: 4,
              fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', transition: 'all 0.2s'
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
              fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', transition: 'all 0.2s'
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
