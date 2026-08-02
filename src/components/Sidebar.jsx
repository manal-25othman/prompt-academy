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
        borderInlineStart: '1px solid var(--border)',
        background: 'var(--sidebar-bg)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-strong)' }}>منال عثمان</div>
        <div style={{ marginTop: 4, fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.7 }}>
          مهندسة ذكاء اصطناعي توليدي
        </div>
      </div>

      <nav className="scroll" style={{ flex: 1, overflowY: 'auto', padding: '14px 12px' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            letterSpacing: '0.18em',
            color: 'var(--muted)',
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

      <div style={{ borderTop: '1px solid var(--border)', padding: '14px 16px', display: 'grid', gap: 8 }}>
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
