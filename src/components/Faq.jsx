import { useState } from 'react';
import { FAQ } from '../data';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" data-screen-label="11 أسئلة شائعة" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">11 — FAQ</div>
      <h2 className="h2" style={{ marginBottom: 12 }}>
        أسئلة شائعة
      </h2>
      <p className="muted" style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--muted)', maxWidth: '62ch', margin: '0 0 24px' }}>
        أكثر الأسئلة تكرارًا حول الموقع والمحتوى.
      </p>
      <div style={{ display: 'grid', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
        {FAQ.map((item, i) => {
          const open = openIdx === i;
          return (
            <div key={item.q} style={{ background: 'var(--bg-panel)' }}>
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 14,
                  padding: '16px 18px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'start',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-strong)' }}>{item.q}</span>
                <span
                  style={{
                    flex: 'none',
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--link)',
                    border: '1px solid var(--border-strong)',
                    fontSize: 14,
                    transform: open ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.15s ease',
                  }}
                >
                  +
                </span>
              </button>
              {open && (
                <p className="muted" style={{ margin: 0, padding: '0 18px 18px', fontSize: 14.5, lineHeight: 1.9, color: 'var(--muted)' }}>
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
