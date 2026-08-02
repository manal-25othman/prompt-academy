import { useMemo, useState } from 'react';
import { FIELDS } from '../data';

function buildPrompt(sel) {
  const v = (key) => FIELDS.find((f) => f.key === key).options[sel[key]];
  return `أنت ${v('role')}.\n\n${v('task')}.\n\nالسياق: ${v('context')}.\n\nشكل المخرج: ${v('format')}.\n\nالقيود: ${v('tone')}.`;
}

export default function Builder({ copiedKey, copy }) {
  const [sel, setSel] = useState({ role: 0, task: 0, context: 0, format: 0, tone: 0 });
  const prompt = useMemo(() => buildPrompt(sel), [sel]);

  const label =
    copiedKey === 'builder' ? 'تم النسخ ✓' : copiedKey === 'fail:builder' ? 'حدّده وانسخه يدويًا' : 'انسخ';

  return (
    <section id="builder" data-screen-label="04 مُنشئ البرومت" style={{ padding: '48px 0', borderTop: '1px solid #CFDFEE' }}>
      <div className="eyebrow">04 — BUILDER</div>
      <h2 className="h2" style={{ marginBottom: 12 }}>
        مُنشئ البرومت
      </h2>
      <p className="muted" style={{ fontSize: 16, lineHeight: 1.9, color: '#5B7386', maxWidth: '62ch', margin: '0 0 30px' }}>
        اختر عنصرًا من كل صف، وسيتكوّن البرومت في المحرر جاهزًا للنسخ.
      </p>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 22 }}>
          {FIELDS.map((field) => (
            <div key={field.key}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#22394D' }}>{field.label}</span>
                <span
                  className="muted"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5,
                    letterSpacing: '0.14em',
                    color: '#7C93A8',
                    textTransform: 'uppercase',
                  }}
                >
                  {field.en}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {field.options.map((opt, i) => (
                  <button
                    key={opt}
                    type="button"
                    className={`chip-btn${sel[field.key] === i ? ' active' : ''}`}
                    onClick={() => setSel((s) => ({ ...s, [field.key]: i }))}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="panel" style={{ position: 'sticky', top: 88, overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              padding: '10px 14px',
              borderBottom: '1px solid #C6D9EC',
              background: '#FFFFFF',
            }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#647C90', letterSpacing: '0.12em' }}>
              my-prompt.txt
            </span>
            <button type="button" className={`mini-btn${copiedKey === 'builder' ? ' done' : ''}`} onClick={() => copy(prompt, 'builder')}>
              {label}
            </button>
          </div>
          <div className="code" style={{ padding: '20px 18px', fontSize: 14, lineHeight: 2.05, color: '#143C36', whiteSpace: 'pre-wrap', minHeight: 260 }}>
            {prompt}
          </div>
        </div>
      </div>
    </section>
  );
}
