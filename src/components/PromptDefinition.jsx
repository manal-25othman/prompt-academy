export default function PromptDefinition() {
  return (
    <section id="prompt" data-screen-label="02 ما هو البرومت" style={{ padding: '48px 0', borderTop: '1px solid #CFDFEE' }}>
      <div className="eyebrow">02 — WHAT IS A PROMPT</div>
      <h2 className="h2" style={{ marginBottom: 20 }}>
        ما هو البرومت؟
      </h2>
      <p className="muted" style={{ fontSize: 17, lineHeight: 1.95, color: '#4A6479', maxWidth: '66ch', margin: '0 0 14px', textWrap: 'pretty' }}>
        البرومت هو التعليمات التي تكتبها للنموذج لتحصل على نتيجة. تخيّله تكليفًا تُسلّمه لمساعد سريع ودقيق، لكنه لا
        يعرف عنك ولا عن سياقك شيئًا إلا ما تقوله له. لهذا تعتمد جودة الإجابة على ثلاثة أشياء: وضوح الهدف، كفاية
        السياق، وتحديد شكل المخرج.
      </p>
      <p className="muted" style={{ fontSize: 15, lineHeight: 1.9, color: '#647C90', maxWidth: '66ch', margin: '0 0 30px' }}>
        لا تحتاج خبرة تقنية — المهارة هنا مهارة تفكير وصياغة.
      </p>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="panel" style={{ border: '1px solid #E7C9C4', background: '#FFF7F5', overflow: 'hidden' }}>
          <div
            style={{
              borderBottom: '1px solid #EED6D1',
              padding: '10px 14px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#B04638',
              letterSpacing: '0.1em',
            }}
          >
            ✕ vague.txt
          </div>
          <div className="code" style={{ padding: '20px 18px', fontSize: 14, lineHeight: 2, color: '#6B4A44', direction: 'rtl' }}>
            اكتب لي عن التسويق.
          </div>
        </div>
        <div className="panel" style={{ border: '1px solid #A6D7CF', background: '#F3FBFA', overflow: 'hidden' }}>
          <div
            style={{
              borderBottom: '1px solid #C7E7E2',
              padding: '10px 14px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#0D9488',
              letterSpacing: '0.1em',
            }}
          >
            ✓ specific.txt
          </div>
          <div className="code" style={{ padding: '20px 18px', fontSize: 14, lineHeight: 2, color: '#1B4A43', direction: 'rtl' }}>
            أنت مسؤول تسويق لمقهى صغير في جدة. اكتب ٣ أفكار منشورات إنستغرام للأسبوع القادم، كل فكرة في سطرين، بنبرة
            ودّية، وبدون رموز تعبيرية.
          </div>
        </div>
      </div>
    </section>
  );
}
