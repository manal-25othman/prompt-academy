import { useState } from 'react';
import { EXAMPLES } from '../data';

export default function Examples({ copiedKey, copy }) {
  const [activeKey, setActiveKey] = useState('edu');
  const active = EXAMPLES.find((e) => e.key === activeKey) || EXAMPLES[0];

  const label = copiedKey === 'ex' ? 'تم النسخ ✓' : 'انسخ';

  return (
    <section id="examples" data-screen-label="06 قبل وبعد" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">06 — BEFORE / AFTER</div>
      <h2 className="h2" style={{ marginBottom: 22 }}>
        أمثلة قبل وبعد
      </h2>
      <div className="no-print" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        {EXAMPLES.map((e) => (
          <button
            key={e.key}
            type="button"
            className={`chip-btn${activeKey === e.key ? ' active' : ''}`}
            onClick={() => setActiveKey(e.key)}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="panel" style={{ border: '1px solid #5C3A3A', background: '#2A1A1C', overflow: 'hidden' }}>
          <div
            style={{
              borderBottom: '1px solid #4A2E2E',
              padding: '10px 14px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#E8897A',
              letterSpacing: '0.1em',
            }}
          >
            before.txt
          </div>
          <div className="code" style={{ padding: '20px 18px', fontSize: 14, lineHeight: 2, color: '#D9B3AC', whiteSpace: 'pre-wrap' }}>
            {active.before}
          </div>
          <div className="muted" style={{ borderTop: '1px solid #4A2E2E', padding: '14px 18px', fontSize: 14, lineHeight: 1.85, color: '#C29891' }}>
            {active.problem}
          </div>
        </div>
        <div className="panel" style={{ border: '1px solid #4B3F8A', background: '#1E1A42', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderBottom: '1px solid var(--border)', padding: '8px 14px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--link)', letterSpacing: '0.1em' }}>
              after.txt
            </span>
            <button type="button" className={`mini-btn${copiedKey === 'ex' ? ' done' : ''}`} onClick={() => copy(active.after, 'ex')}>
              {label}
            </button>
          </div>
          <div className="code" style={{ padding: '20px 18px', fontSize: 14, lineHeight: 2, color: '#E4DFFB', whiteSpace: 'pre-wrap' }}>
            {active.after}
          </div>
          <div className="muted" style={{ borderTop: '1px solid var(--border)', padding: '14px 18px', fontSize: 14, lineHeight: 1.85, color: 'var(--muted)' }}>
            {active.fix}
          </div>
        </div>
      </div>
    </section>
  );
}
