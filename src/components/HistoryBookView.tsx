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

  const deception = book.deceptionChapter;
  const hasInherited = !!deception && deception.inheritedLies.length > 0;
  const hasCaught = !!deception && deception.caughtFabrications.length > 0;

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

      {/* Centerpiece chapter: The Archive's Deceptions */}
      {deception && (
        <div style={{
          ...pageStyle,
          border: hasInherited ? '1px solid rgba(214,40,57,0.3)' : '1px solid rgba(46,196,182,0.3)',
          background: hasInherited
            ? 'linear-gradient(135deg, rgba(214,40,57,0.06) 0%, #0D1120 100%)'
            : 'linear-gradient(135deg, rgba(46,196,182,0.06) 0%, #0D1120 100%)',
        }}>
          <h3 style={{ fontSize: 13, color: '#E9C46A', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
            {deception.title}
          </h3>
          <p style={{ fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', marginBottom: 14 }}>
            {deception.summary}
          </p>

          <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 600, color: hasInherited ? '#D62839' : '#6B7280' }}>
                {Math.round(deception.deceptionRate * 100)}%
              </div>
              <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase' }}>
                of preserved memories were lies
              </div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 600, color: deception.discernmentRate >= 0.6 ? '#2EC4B6' : '#E9C46A' }}>
                {Math.round(deception.discernmentRate * 100)}%
              </div>
              <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase' }}>
                of fabrications were caught
              </div>
            </div>
          </div>

          {deception.paragraphs.map((p: string, j: number) => (
            <p key={j} style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.8, marginBottom: 8 }}>
              {p}
            </p>
          ))}

          {hasInherited && (
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(214,40,57,0.15)' }}>
              <div style={{ fontSize: 10, color: '#D62839', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
                Inherited Lies — Now Load-Bearing History
              </div>
              {deception.inheritedLies.map((lie: { title: string; summary: string }, i: number) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 13, color: '#F5F7FA', fontWeight: 500 }}>"{lie.title}"</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.6 }}>{lie.summary}</div>
                </div>
              ))}
            </div>
          )}

          {hasCaught && (
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(46,196,182,0.15)' }}>
              <div style={{ fontSize: 10, color: '#2EC4B6', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
                Fabrications Caught — Released Before They Could Root
              </div>
              {deception.caughtFabrications.map((c: { title: string; summary: string }, i: number) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 13, color: '#F5F7FA', fontWeight: 500 }}>"{c.title}"</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.6 }}>{c.summary}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

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
