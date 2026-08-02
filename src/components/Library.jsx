import { useState } from 'react';
import { CATS, PROMPTS } from '../data';

export default function Library({ copiedKey, copy }) {
  const [cat, setCat] = useState('all');
  const list = PROMPTS.filter((p) => cat === 'all' || p.cat === cat);

  return (
    <section id="library" data-screen-label="07 مكتبة البرومتات" style={{ padding: '48px 0', borderTop: '1px solid #CFDFEE' }}>
      <div className="eyebrow">07 — LIBRARY</div>
      <h2 className="h2" style={{ marginBottom: 12 }}>
        قوالب جاهزة — انسخ وعدّل ما بين الأقواس
      </h2>
      <p className="muted" style={{ fontSize: 16, lineHeight: 1.9, color: '#5B7386', maxWidth: '62ch', margin: '0 0 24px' }}>
        ستة قوالب مختارة تغطي التعليم والتسويق والبرمجة والتصميم.
      </p>
      <div className="no-print" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        {CATS.map((c) => (
          <button key={c.key} type="button" className={`chip-btn${cat === c.key ? ' active' : ''}`} onClick={() => setCat(c.key)}>
            {c.ar}
          </button>
        ))}
      </div>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {list.map((p) => {
          const done = copiedKey === p.title;
          const label = done ? 'تم النسخ ✓' : copiedKey === `fail:${p.title}` ? 'حدّده وانسخه يدويًا' : 'انسخ القالب';
          const catEn = (CATS.find((c) => c.key === p.cat) || {}).en;
          return (
            <div key={p.title} className="panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '12px 16px', borderBottom: '1px solid #CBDCEC' }}>
                <span style={{ fontSize: 15.5, fontWeight: 600, color: '#12212F' }}>{p.title}</span>
                <span className="muted" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.12em', color: '#7C93A8', whiteSpace: 'nowrap' }}>
                  {catEn}
                </span>
              </div>
              <div className="code" style={{ padding: 16, fontSize: 13, lineHeight: 1.95, color: '#28484E', whiteSpace: 'pre-wrap', flex: 1 }}>
                {p.body}
              </div>
              <div className="no-print" style={{ padding: '12px 16px', borderTop: '1px solid #CBDCEC' }}>
                <button type="button" className={`mini-btn${done ? ' done' : ''}`} onClick={() => copy(p.body, p.title)}>
                  {label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p className="muted no-print" style={{ fontSize: 14, color: '#647C90', margin: '18px 0 0' }}>
        عرض {list.length} من {PROMPTS.length} قالبًا مختارًا
      </p>
    </section>
  );
}
