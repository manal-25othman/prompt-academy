import HeroVisual from './HeroVisual';

const BARS = [
  { label: 'افهم', bg: '#0F766E' },
  { label: 'اكتب', bg: '#2F6FA8' },
  { label: 'حسّن', bg: '#7C6BC4' },
  { label: 'طبّق', bg: '#C9863F' },
];

export default function Hero() {
  return (
    <div
      style={{
        position: 'relative',
        margin: '32px 0 0',
        border: '1px solid #C6D9EC',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #EDF3FC 0%, #F4F0FB 55%, #E9F7F4 100%)',
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
              color: '#0F766E',
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#0F766E',
                animation: 'pulseDot 2.4s ease-in-out infinite',
              }}
            />
            تعلّم الذكاء الاصطناعي مع منال
          </div>
          <h1 className="h1">من الصفر إلى احتراف كتابة البرومبتات</h1>
          <p className="muted" style={{ fontSize: 17.5, lineHeight: 1.85, color: '#43607A', margin: '0 0 28px', textWrap: 'pretty' }}>
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
              boxShadow: '0 14px 34px rgba(23,56,92,0.12)',
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#EAF7F5',
                color: '#0F766E',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flex: 'none',
              }}
            >
              ✦
            </span>
            <span style={{ flex: 1, fontSize: 15, color: '#7C93A8' }}>اكتب مهمتك… ودع البرومت يتكوّن أمامك</span>
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#0F766E',
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
        <div className="hero-img" style={{ position: 'relative', minWidth: 0, minHeight: 340, borderInlineStart: '1px solid #DCE9F7' }}>
          <HeroVisual />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#CBDCEC', borderTop: '1px solid #CBDCEC' }}>
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
