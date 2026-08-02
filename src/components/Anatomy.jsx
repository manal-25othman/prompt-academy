const PARTS = [
  { title: 'الدور', en: 'ROLE', desc: 'من يكون النموذج وبأي خبرة يتحدث — يضبط المفردات ومستوى التفصيل.', example: 'أنت مدقّق لغوي عربي بخبرة عشر سنوات.' },
  { title: 'المهمة', en: 'TASK', desc: 'فعل واحد واضح: اكتب، لخّص، صنّف، راجع، حوّل، اقترح.', example: 'لخّص المقال أدناه في خمس نقاط.' },
  { title: 'السياق', en: 'CONTEXT', desc: 'الجمهور والمجال والمواد المرفقة — أكثر عنصر يُهمَل، وأكبر عنصر يُحسّن النتيجة.', example: 'الجمهور طلاب جامعيون بلا خلفية في الاقتصاد.' },
  { title: 'شكل المخرج والقيود', en: 'FORMAT', desc: 'بنية الإجابة وحدودها: جدول أم نقاط، عدد الكلمات، النبرة، وما يجب تجنّبه.', example: 'جدول بعمودين، ولا تتجاوز ١٥٠ كلمة.' },
];

export default function Anatomy() {
  return (
    <section id="anatomy" data-screen-label="03 مكوّنات البرومت" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">03 — ANATOMY</div>
      <h2 className="h2" style={{ marginBottom: 26 }}>
        مكوّنات البرومت الأربعة
      </h2>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {PARTS.map((p) => (
          <div key={p.en} className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 19, fontWeight: 600 }}>{p.title}</span>
              <span className="accent" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.12em' }}>
                {p.en}
              </span>
            </div>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', margin: '0 0 14px' }}>{p.desc}</p>
            <div
              className="code"
              style={{
                fontSize: 13,
                lineHeight: 1.9,
                color: 'var(--link)',
                background: 'var(--bg-panel-alt)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: '12px 14px',
              }}
            >
              {p.example}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
