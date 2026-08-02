import HeroVisual from './HeroVisual';

const BARS = [
  { label: 'افهم', bg: '#4C6FFF' },
  { label: 'اكتب', bg: '#6D5CE8' },
  { label: 'حسّن', bg: '#9B5DE5' },
  { label: 'طبّق', bg: '#D99A4E' },
];

export default function Hero() {
  return (
    <div
      style={{
        position: 'relative',
        margin: '32px 0 0',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #1a1640 0%, #211a4a 55%, #17133a 100%)',
      }}
    >
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.08fr) minmax(0, 0.92fr)' }}>
        <div style={{ padding: '46px 40px 40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--link)',
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                animation: 'pulseDot 2.4s ease-in-out infinite',
              }}
            />
            تعلّم الذكاء الاصطناعي مع منال
          </div>
          <h1 className="h1">من الصفر إلى احتراف كتابة البرومبتات</h1>
          <p className="muted" style={{ fontSize: 17.5, lineHeight: 1.85, color: 'var(--muted)', margin: '0 0 28px', textWrap: 'pretty' }}>
            تعلّم الذكاء الاصطناعي التوليدي بطريقة عملية ومنظمة. ابدأ بفهم أساسياته، ثم أتقن كتابة البرومبتات
            الاحترافية، واستكشف التقنيات المتقدمة مع مكتبة من القوالب الجاهزة.
          </p>
          <a
            href="#builder"
            className="search-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              borderRadius: 999,
              padding: '13px 16px',
              boxShadow: '0 14px 34px rgba(0,0,0,0.3)',
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--bg-panel-alt)',
                color: 'var(--link)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flex: 'none',
              }}
            >
              ✦
            </span>
            <span style={{ flex: 1, fontSize: 15, color: 'var(--muted)' }}>اكتب مهمتك… ودع البرومت يتكوّن أمامك</span>
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                flex: 'none',
              }}
            >
              ←
            </span>
          </a>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a href="#ai" className="dark-pill">
              ابدأ من الوحدة الأولى
            </a>
            <a href="#journey" className="outline-pill">
              شاهد رحلة التعلم
            </a>
          </div>
        </div>
        <div className="hero-img" style={{ position: 'relative', minWidth: 0, minHeight: 340, borderInlineStart: '1px solid var(--border)' }}>
          <HeroVisual />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border)', borderTop: '1px solid var(--border)' }}>
        {BARS.map((b) => (
          <span
            key={b.label}
            style={{ background: b.bg, color: '#FFFFFF', padding: '16px 12px', textAlign: 'center', fontSize: 15.5, fontWeight: 600 }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}
