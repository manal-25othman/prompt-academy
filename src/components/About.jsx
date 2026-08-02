import { BOOK_URL, WA_LINKS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data';

export default function About({ copiedKey, copy }) {
  const label = copiedKey === 'num' ? 'تم نسخ الرقم ✓' : copiedKey === 'fail:num' ? 'حدّده وانسخه يدويًا' : 'انسخ رقم الواتساب';

  return (
    <section id="about" data-screen-label="08 عن منال وتواصل" style={{ padding: '48px 0 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">08 — ABOUT &amp; CONTACT</div>
      <div className="col2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 28, alignItems: 'start' }}>
        <div className="panel" style={{ padding: 30 }}>
          <h2 className="h2" style={{ fontSize: 30, marginBottom: 6 }}>
            منال عثمان
          </h2>
          <div className="accent" style={{ fontSize: 15, marginBottom: 20 }}>
            مهندسة ذكاء اصطناعي توليدي
          </div>
          <p className="muted" style={{ fontSize: 16.5, lineHeight: 1.95, color: 'var(--muted)', margin: '0 0 16px', textWrap: 'pretty' }}>
            خريجة علوم حاسب، ومدرّبة في مجال الذكاء الاصطناعي التوليدي، وصانعة محتوى تقني يبسّط المفاهيم للمبتدئين
            والمهنيين. مؤلّفة كتاب{' '}
            <strong style={{ color: 'var(--text-strong)', fontWeight: 600 }}>«الذكاء الاصطناعي: المفتاح إلى المستقبل»</strong>.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn-solid"
            style={{ display: 'inline-block', fontWeight: 600, marginBottom: 26 }}
          >
            اطلب الكتاب ↗
          </a>
          <div style={{ display: 'grid', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg-panel-alt)', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <span className="muted" style={{ fontSize: 13.5, color: 'var(--muted)' }}>المحتوى</span>
              <span style={{ fontSize: 14, color: 'var(--text-strong)' }}>مقالات ومواد تعليمية تقنية</span>
            </div>
            <div style={{ background: 'var(--bg-panel-alt)', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <span className="muted" style={{ fontSize: 13.5, color: 'var(--muted)' }}>التأليف</span>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14 }}>
                كتاب «الذكاء الاصطناعي: المفتاح إلى المستقبل» ↗
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <div className="panel" style={{ border: '1px solid #4B3F8A', background: 'linear-gradient(160deg, #1E1A42, #191536)', padding: 26 }}>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: 'var(--text-strong)' }}>تواصل مباشرة عبر واتساب</div>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--muted)', margin: '0 0 20px' }}>
              اختر سبب التواصل ليُفتح واتساب برسالة مكتوبة مسبقًا.
            </p>
            <div style={{ display: 'grid', gap: 9 }}>
              <a href={WA_LINKS.training} target="_blank" rel="noopener noreferrer" className="wa-btn-solid">
                استفسار عن التدريب
              </a>
              <a href={WA_LINKS.consulting} target="_blank" rel="noopener noreferrer" className="wa-btn-soft">
                طلب استشارة تقنية
              </a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="wa-btn-soft">
                اطلب الكتاب من المتجر ↗
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
              <span className="muted" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)', direction: 'ltr' }}>
                WhatsApp · {WHATSAPP_DISPLAY}
              </span>
              <button type="button" className={`mini-btn${copiedKey === 'num' ? ' done' : ''}`} onClick={() => copy(`+${WHATSAPP_NUMBER}`, 'num')}>
                {label}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
