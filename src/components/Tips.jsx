import { TIPS } from '../data';

export default function Tips() {
  return (
    <section id="tips" data-screen-label="10 نصائح سريعة" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">10 — QUICK TIPS</div>
      <h2 className="h2" style={{ marginBottom: 12 }}>
        نصائح سريعة
      </h2>
      <p className="muted" style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--muted)', maxWidth: '62ch', margin: '0 0 24px' }}>
        خمس عادات صغيرة ترفع جودة أي برومت تكتبه.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
        {TIPS.map((t, i) => (
          <div key={t.title} className="card" style={{ padding: 20 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: 'var(--accent-gradient)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: 12,
              }}
            >
              {i + 1}
            </div>
            <div style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 6 }}>{t.title}</div>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--muted)', margin: 0 }}>{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
