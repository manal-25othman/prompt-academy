const TECHNIQUES = [
  { title: 'البرومت المباشر', sub: 'ZERO-SHOT', desc: 'تطلب المهمة مباشرة بدون أمثلة. مناسب للمهام البسيطة والواضحة.', example: 'صنّف هذه المراجعة: إيجابية أم سلبية؟' },
  { title: 'الأمثلة القليلة', sub: 'FEW-SHOT', desc: 'تعطي مثالًا أو مثالين للنمط المطلوب قبل السؤال الحقيقي، فيقلّد النموذج النمط.', example: '«ممتاز» → إيجابية · «مضيعة وقت» → سلبية · «لا بأس به» → ؟' },
  { title: 'التفكير خطوة بخطوة', sub: 'CHAIN OF THOUGHT', desc: 'تطلب شرح خطوات الحل قبل النتيجة. يفيد في الحساب والمنطق والتحليل.', example: 'حلّ المسألة موضحًا كل خطوة، ثم اكتب الإجابة النهائية.' },
  { title: 'تحديد الدور', sub: 'ROLE PROMPTING', desc: 'تسند للنموذج هوية مهنية فيتبنّى مفرداتها ومعاييرها.', example: 'أنت مراجع أكاديمي في مجلة محكّمة.' },
  { title: 'تقييد شكل المخرج', sub: 'STRUCTURED OUTPUT', desc: 'تفرض بنية صارمة — جدول، JSON، قالب ثابت — لتسهيل الاستخدام لاحقًا.', example: 'أعد الإجابة كـ JSON بالمفاتيح: title, summary, tags.', ltr: true },
  { title: 'التحسين بالتكرار', sub: 'ITERATIVE REFINEMENT', desc: 'لا تبدأ من الصفر عند الفشل: أضف ما ينقص برومتك، أو اطلب تحسين الإجابة السابقة.', example: 'أعد كتابة النقطة الثالثة بنبرة أقل رسمية وأقصر بالنصف.' },
];

export default function Techniques() {
  return (
    <section id="techniques" data-screen-label="05 التقنيات" style={{ padding: '48px 0', borderTop: '1px solid #CFDFEE' }}>
      <div className="eyebrow">05 — TECHNIQUES</div>
      <h2 className="h2" style={{ marginBottom: 26 }}>
        تقنيات ترفع جودة النتيجة فورًا
      </h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {TECHNIQUES.map((t) => (
          <div key={t.sub} className="card col2" style={{ padding: '20px 22px', display: 'grid', gridTemplateColumns: '0.34fr 1fr', gap: 22 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 600 }}>{t.title}</div>
              <div className="muted" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: '#7C93A8', letterSpacing: '0.12em', marginTop: 5 }}>
                {t.sub}
              </div>
            </div>
            <div>
              <p className="muted" style={{ fontSize: 15.5, lineHeight: 1.9, color: '#52697D', margin: '0 0 8px' }}>{t.desc}</p>
              <p
                className="accent"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.85,
                  margin: 0,
                  ...(t.ltr ? { direction: 'ltr', textAlign: 'right' } : {}),
                }}
              >
                {t.example}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
