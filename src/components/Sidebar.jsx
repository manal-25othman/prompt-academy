import { SECTIONS, WA_LINKS, WHATSAPP_NUMBER } from '../data';

export default function Sidebar({ active, copiedKey, copy }) {
  const label =
    copiedKey === 'num' ? 'تم نسخ الرقم ✓' : copiedKey === 'fail:num' ? 'حدّده وانسخه يدويًا' : 'انسخ رقم الواتساب';

  return (
    <aside
      className="side no-print"
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        borderInlineStart: '1px solid #C6D9EC',
        background: '#DCE9F7',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #C6D9EC' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: '#0F766E',
              animation: 'pulseDot 2.4s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.16em',
              color: '#647C90',
              textTransform: 'uppercase',
            }}
          >
            AI Studio
          </span>
        </div>
        <div style={{ marginTop: 14, fontSize: 17, fontWeight: 600, color: '#12212F' }}>منال عثمان</div>
        <div style={{ marginTop: 4, fontSize: 12.5, color: '#647C90', lineHeight: 1.7 }}>
          مهندسة ذكاء اصطناعي توليدي
        </div>
      </div>

      <nav className="scroll" style={{ flex: 1, overflowY: 'auto', padding: '14px 12px' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            letterSpacing: '0.18em',
            color: '#7C93A8',
            padding: '8px 10px 10px',
            textTransform: 'uppercase',
          }}
        >
          المسار · Path
        </div>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={`nav-link${active === s.id ? ' active' : ''}`}>
            <span className="num">{s.num}</span>
            {s.label}
          </a>
        ))}
      </nav>

      <div style={{ borderTop: '1px solid #C6D9EC', padding: '14px 16px', display: 'grid', gap: 8 }}>
        <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="wa-btn">
          تواصل عبر واتساب
        </a>
        <button
          type="button"
          className={`mini-btn${copiedKey === 'num' ? ' done' : ''}`}
          onClick={() => copy(`+${WHATSAPP_NUMBER}`, 'num')}
        >
          {label}
        </button>
      </div>
    </aside>
  );
}
