import type { HistoryBook } from '../engine';

interface Props {
  book: HistoryBook;
}

export default function HistoryBookView({ book }: Props) {
  const pageStyle: React.CSSProperties = {
    background: '#0D1120',
    border: '1px solid rgba(108,203,255,0.1)',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  };

  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: 4 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ fontSize: 10, color: '#6B7280', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>
          Archive Unit A-01 — Final Report
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 400, color: '#F5F7FA', letterSpacing: 1 }}>
          {book.title}
        </h2>
        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 8 }}>
          {book.civilizationName} · {book.archetype}
        </div>
      </div>

      {book.chapters.map((ch, i) => (
        <div key={i} style={pageStyle}>
          <h3 style={{ fontSize: 13, color: '#6CCBFF', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
            {ch.title}
          </h3>
          <p style={{ fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', marginBottom: 10 }}>
            {ch.summary}
          </p>
          {ch.paragraphs.map((p, j) => (
            <p key={j} style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.8, marginBottom: 8 }}>
              {p}
            </p>
          ))}
        </div>
      ))}

      <div style={{ ...pageStyle, border: '1px solid rgba(233,196,74,0.15)' }}>
        <h3 style={{ fontSize: 13, color: '#E9C46A', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
          Epilogue
        </h3>
        <p style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.8, fontStyle: 'italic' }}>
          {book.epilogue}
        </p>
      </div>
    </div>
  );
}
