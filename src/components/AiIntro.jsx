const GLOSSARY = [
  {
    term: 'النموذج اللغوي الكبير',
    en: 'LLM',
    enColor: '#0D9488',
    desc: 'نموذج مُدرَّب على نصوص هائلة لتوقّع الكلمة التالية، فيُنتج فقرات متماسكة.',
  },
  {
    term: 'التوكن',
    en: 'Token',
    enColor: '#0D9488',
    desc: 'وحدة صغيرة من النص (جزء كلمة عادة) — بها تُقاس أطوال المدخلات والمخرجات.',
  },
  {
    term: 'نافذة السياق',
    en: 'Context window',
    enColor: '#0D9488',
    desc: 'أقصى ما يستطيع النموذج «رؤيته» في المحادثة الواحدة؛ ما خرج عنها يُنسى.',
  },
  {
    term: 'الهلوسة',
    en: 'Hallucination',
    enColor: '#FCD34D',
    desc: 'معلومة تبدو صحيحة لكنها مُختلقة — تُقاوَم بالسياق الدقيق والمراجعة البشرية.',
  },
];

export default function AiIntro() {
  return (
    <section id="ai" data-screen-label="01 الذكاء الاصطناعي" style={{ padding: '48px 0', borderTop: '1px solid #CFDFEE' }}>
      <div className="eyebrow">01 — WHAT IS AI</div>
      <h2 className="h2" style={{ marginBottom: 20 }}>
        نبذة عن الذكاء الاصطناعي
      </h2>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 32, alignItems: 'start' }}>
        <div>
          <p className="muted" style={{ fontSize: 17, lineHeight: 1.95, color: '#4A6479', margin: '0 0 18px', textWrap: 'pretty' }}>
            الذكاء الاصطناعي هو قدرة الحاسوب على أداء مهام كانت تتطلب إنسانًا: التصنيف، الترجمة، التلخيص، التوليد،
            والتوصية. لا «يفهم» بالمعنى البشري، بل يتعلّم أنماطًا من كميات ضخمة من البيانات ثم يطبّقها على مدخل جديد.
          </p>
          <p className="muted" style={{ fontSize: 17, lineHeight: 1.95, color: '#4A6479', margin: '0 0 18px', textWrap: 'pretty' }}>
            أما <strong style={{ color: '#12212F', fontWeight: 600 }}>الذكاء الاصطناعي التوليدي</strong> فهو النوع الذي
            يُنتج محتوى جديدًا — نصًا أو صورة أو كودًا. تعتمد النماذج اللغوية الكبيرة على مبدأ بسيط في جوهره: تتوقّع
            الجزء التالي الأكثر احتمالًا بناءً على ما أعطيتها. لهذا فإن ما تكتبه أنت — البرومت — هو المتحكم الأول في
            المخرج.
          </p>
          <p className="muted" style={{ fontSize: 17, lineHeight: 1.95, color: '#4A6479', margin: 0, textWrap: 'pretty' }}>
            ولهذا أيضًا تظهر <strong style={{ color: '#12212F', fontWeight: 600 }}>حدود</strong> واضحة: النموذج قد
            يخطئ بثقة، ولا يعرف ما لم تخبره به، وقد تختلف إجابته في كل مرة. مهمتك ليست الثقة العمياء، بل التوجيه الجيد
            ثم المراجعة.
          </p>
        </div>
        <div className="panel" style={{ overflow: 'hidden' }}>
          <div
            style={{
              borderBottom: '1px solid #C6D9EC',
              padding: '10px 14px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#647C90',
              letterSpacing: '0.1em',
            }}
          >
            glossary.md
          </div>
          <div style={{ padding: '6px 0' }}>
            {GLOSSARY.map((g, i) => (
              <div
                key={g.term}
                style={{
                  padding: '14px 16px',
                  borderBottom: i < GLOSSARY.length - 1 ? '1px solid #DDE8F3' : 'none',
                }}
              >
                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#12212F' }}>
                  {g.term}{' '}
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: g.enColor }}>{g.en}</span>
                </div>
                <div className="muted" style={{ fontSize: 13.5, color: '#5B7386', lineHeight: 1.8, marginTop: 5 }}>
                  {g.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
