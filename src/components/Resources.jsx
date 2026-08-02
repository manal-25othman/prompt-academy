import { RESOURCES } from '../data';

export default function Resources() {
  return (
    <section id="resources" data-screen-label="08 أدوات ومواقع مفيدة" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">08 — TOOLS &amp; RESOURCES</div>
      <h2 className="h2" style={{ marginBottom: 12 }}>
        أدوات ومواقع مفيدة
      </h2>
      <p className="muted" style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--muted)', maxWidth: '62ch', margin: '0 0 24px' }}>
        مواقع تساعدك تكتشف أو تولّد برومتات جاهزة بدل ما تبدأ من الصفر.
      </p>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {RESOURCES.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ padding: 20, textDecoration: 'none', display: 'block' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-strong)' }}>{r.name}</span>
              <span style={{ color: 'var(--link)', fontSize: 15 }}>↗</span>
            </div>
            <p className="muted" style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--muted)', margin: 0 }}>{r.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
