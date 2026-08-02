import { JOURNEY } from '../data';
import { useJourney } from '../hooks/useJourney';

const EASE = 'cubic-bezier(.22,.9,.24,1)';

function slideStyles(i, j, dir) {
  const on = i === j;
  const off = on ? '0px' : i < j ? (dir > 0 ? '-42px' : '42px') : dir > 0 ? '42px' : '-42px';
  const transition = (delay) => `opacity .55s ${EASE} ${delay}ms, transform .65s ${EASE} ${delay}ms`;
  const shift = (px) => (on ? 'translateX(0px) translateY(0px)' : `translateX(${off}) translateY(${px}px)`);

  return {
    on,
    layer: {
      gridArea: '1 / 1',
      minWidth: 0,
      opacity: on ? 1 : 0,
      pointerEvents: on ? 'auto' : 'none',
      transition: `opacity .5s ${EASE}`,
    },
    kicker: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: '0.16em',
      color: '#0F766E',
      marginBottom: 12,
      opacity: on ? 1 : 0,
      transform: shift(10),
      transition: transition(40),
    },
    title: {
      fontSize: 27,
      lineHeight: 1.4,
      fontWeight: 700,
      margin: '0 0 14px',
      color: '#12212F',
      opacity: on ? 1 : 0,
      transform: shift(14),
      transition: transition(110),
    },
    body: {
      fontSize: 16.5,
      lineHeight: 1.95,
      color: '#4A6479',
      margin: '0 0 20px',
      maxWidth: '54ch',
      textWrap: 'pretty',
      opacity: on ? 1 : 0,
      transform: shift(16),
      transition: transition(180),
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      opacity: on ? 1 : 0,
      transform: shift(18),
      transition: transition(250),
    },
    visual: {
      display: 'grid',
      gap: 14,
      opacity: on ? 1 : 0,
      transform: `scale(${on ? 1 : 0.94})`,
      transition: `opacity .6s ${EASE} 160ms, transform .7s ${EASE} 160ms`,
    },
    code: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12.5,
      lineHeight: 1.8,
      color: '#205F56',
      background: '#F2F7FC',
      border: '1px solid #C6D9EC',
      borderRadius: 8,
      padding: '11px 13px',
      direction: 'ltr',
      textAlign: 'left',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  };
}

function NodeGraphic() {
  return (
    <svg viewBox="0 0 240 200" width="100%" height="200" role="img" aria-hidden="true">
      <g stroke="#9DBBD6" strokeWidth="1.2" opacity="0.75">
        <line x1="40" y1="46" x2="120" y2="36" />
        <line x1="40" y1="46" x2="120" y2="100" />
        <line x1="40" y1="100" x2="120" y2="36" />
        <line x1="40" y1="100" x2="120" y2="164" />
        <line x1="40" y1="154" x2="120" y2="100" />
        <line x1="40" y1="154" x2="120" y2="164" />
        <line x1="120" y1="36" x2="200" y2="100" />
        <line x1="120" y1="100" x2="200" y2="100" />
        <line x1="120" y1="164" x2="200" y2="100" />
      </g>
      <g fill="#FFFFFF" stroke="#0F766E" strokeWidth="2">
        <circle cx="40" cy="46" r="9" />
        <circle cx="40" cy="100" r="9" />
        <circle cx="40" cy="154" r="9" />
        <circle cx="120" cy="36" r="9" />
        <circle cx="120" cy="100" r="9" />
        <circle cx="120" cy="164" r="9" />
        <circle cx="200" cy="100" r="11" />
      </g>
      <circle cx="200" cy="100" r="18" fill="none" stroke="#0F766E" opacity="0.28" />
    </svg>
  );
}

export default function Journey() {
  const { index: j, dir, playing, next, prev, toggle, goToDot, onPointerDown, onPointerUp, onKeyDown } = useJourney(
    JOURNEY.length,
  );

  return (
    <section id="journey" data-screen-label="رحلة التعلم" style={{ padding: '8px 0 48px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
        <div>
          <div className="eyebrow">LEARNING JOURNEY</div>
          <h2 className="h2">رحلة تعلّم الذكاء الاصطناعي في خمس مراحل</h2>
        </div>
        <div className="no-print" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button type="button" className="round-btn" onClick={prev} aria-label="السابق">
            ›
          </button>
          <button
            type="button"
            style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontSize: 12.5,
              padding: '10px 16px',
              borderRadius: 8,
              cursor: 'pointer',
              border: `1px solid ${playing ? '#0F766E' : '#B3C9DE'}`,
              background: playing ? '#EAF7F5' : '#FFFFFF',
              color: playing ? '#0B5F58' : '#22394D',
            }}
            onClick={toggle}
          >
            {playing ? 'إيقاف' : 'تشغيل'}
          </button>
          <button type="button" className="round-btn" onClick={next} aria-label="التالي">
            ‹
          </button>
        </div>
      </div>

      <div
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
        tabIndex={0}
        style={{
          display: 'grid',
          overflow: 'hidden',
          border: '1px solid #C6D9EC',
          background: 'linear-gradient(150deg, #FFFFFF, #F3F8FE)',
          borderRadius: 12,
          minHeight: 340,
          touchAction: 'pan-y',
          cursor: 'grab',
        }}
      >
        {JOURNEY.map((slide, i) => {
          const st = slideStyles(i, j, dir);
          return (
            <div key={slide.stage} style={st.layer}>
              <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28, alignItems: 'center', padding: '34px 32px' }}>
                <div>
                  <div style={st.kicker}>{slide.stage}</div>
                  <h3 style={st.title}>{slide.title}</h3>
                  <p style={st.body}>{slide.body}</p>
                  <div style={st.chips}>
                    {slide.points.map((pt) => (
                      <span
                        key={pt}
                        style={{
                          fontSize: 13,
                          padding: '7px 13px',
                          borderRadius: 999,
                          border: '1px solid #A6D7CF',
                          background: '#EAF7F5',
                          color: '#0B5F58',
                        }}
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={st.visual}>
                  <NodeGraphic />
                  <div style={st.code}>{slide.code}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="no-print" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 16 }}>
        <div style={{ flex: '1 1 240px', height: 4, borderRadius: 999, background: '#D9E6F3', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${Math.round(((j + 1) / JOURNEY.length) * 100)}%`,
              background: '#0F766E',
              borderRadius: 999,
              transition: `width .5s ${EASE}`,
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {JOURNEY.map((slide, i) => (
            <button
              key={slide.stage}
              type="button"
              onClick={() => goToDot(i)}
              aria-label={slide.stage}
              style={{
                width: i === j ? 26 : 9,
                height: 9,
                borderRadius: 999,
                border: 0,
                cursor: 'pointer',
                padding: 0,
                background: i === j ? '#0F766E' : '#BBD2E7',
                transition: `width .4s ${EASE}, background .3s linear`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
