export default function Footer() {
  return (
    <footer
      className="no-print"
      style={{
        marginTop: 56,
        borderTop: '1px solid var(--border-soft)',
        padding: '24px 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span className="muted" style={{ fontSize: 13, color: 'var(--muted)' }}>
        منال عثمان · دليل الذكاء الاصطناعي والبرومت · محتوى تعليمي مجاني
      </span>
      <span className="muted" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)', direction: 'ltr' }}>
        wa.me/966596280672
      </span>
    </footer>
  );
}
