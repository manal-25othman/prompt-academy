import { CHANNEL_URL } from '../data';

export default function Channel() {
  return (
    <section id="channel" data-screen-label="09 قناة الواتساب" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div
        className="panel"
        style={{
          border: '1px solid #4B3F8A',
          background: 'linear-gradient(135deg, #1E1A42, #221d47)',
          padding: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '58ch' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.12em',
              color: '#fff',
              background: 'var(--accent-gradient)',
              padding: '4px 10px',
              borderRadius: 999,
              marginBottom: 14,
            }}
          >
            جديد
          </span>
          <h2 className="h2" style={{ fontSize: 26, marginBottom: 10 }}>
            قناة منال على واتساب لتعليم الذكاء الاصطناعي
          </h2>
          <p className="muted" style={{ fontSize: 15.5, lineHeight: 1.9, color: 'var(--muted)', margin: 0 }}>
            انضمي لقناة واتساب مجانية فيها محتوى دوري مبسّط عن الذكاء الاصطناعي وهندسة البرومبت — نصائح، أدوات،
            وتحديثات أول بأول.
          </p>
        </div>
        <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="wa-btn-solid" style={{ flex: 'none' }}>
          انضم للقناة ↗
        </a>
      </div>
    </section>
  );
}
