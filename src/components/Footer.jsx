export default function Footer() {
  return (
    <footer
      className="no-print"
      style={{
        marginTop: 56,
        borderTop: '1px solid #CFDFEE',
        padding: '24px 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span className="muted" style={{ fontSize: 13, color: '#8199AE' }}>
        منال عثمان · دليل الذكاء الاصطناعي والبرومت · محتوى تعليمي مجاني
      </span>
      <span className="muted" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#8199AE', direction: 'ltr' }}>
        wa.me/966596280672
      </span>
    </footer>
  );
}
