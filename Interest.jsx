import { useState } from 'react';

export default function Interest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const ready = name.trim() && email.trim() && phone.trim();

  async function onSubmit(e) {
    e.preventDefault();
    if (!ready || status === 'sending') return;

    setStatus('sending');
    setError(null);

    try {
      const res = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'تعذّر إرسال الطلب');
      setStatus('sent');
    } catch (err) {
      setError(err.message || 'حدث خطأ، حاول مرة أخرى');
      setStatus('error');
    }
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '11px 14px',
    fontSize: 14.5,
    fontFamily: 'inherit',
    background: 'var(--bg-panel-alt)',
    color: 'var(--text)',
  };

  return (
    <section id="interest" data-screen-label="12 مهتم بالدورات؟" style={{ padding: '48px 0', borderTop: '1px solid var(--border-soft)' }}>
      <div className="eyebrow">12 — COURSES</div>
      <div
        className="panel"
        style={{ border: '1px solid #4B3F8A', background: 'linear-gradient(160deg, #1E1A42, #191536)', padding: 32, maxWidth: 640 }}
      >
        <h2 className="h2" style={{ fontSize: 26, marginBottom: 10 }}>
          مهتم بالدورات القادمة؟
        </h2>
        <p className="muted" style={{ fontSize: 15.5, lineHeight: 1.9, color: 'var(--muted)', margin: '0 0 22px' }}>
          سجّل بياناتك بالأسفل، وراح يوصلك تأكيد فوري على إيميلك، وتواصل مباشر أول ما يُفتح التسجيل في دورة كتابة البرومبت.
        </p>

        {status === 'sent' ? (
          <div style={{ fontSize: 14.5, color: 'var(--text-strong)', background: 'var(--bg-panel-alt)', border: '1px solid var(--border)', borderRadius: 8, padding: '14px 16px' }}>
            تم تسجيل اهتمامك ✓ — تحقق من بريدك الإلكتروني لرسالة التأكيد.
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم"
              required
              style={inputStyle}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              required
              style={inputStyle}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="رقم الواتساب"
              required
              style={{ ...inputStyle, direction: 'ltr', textAlign: 'end' }}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="أي ملاحظة أو مجال تهتم فيه؟ (اختياري)"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
            />
            <button
              type="submit"
              className="wa-btn-solid"
              disabled={status === 'sending' || !ready}
              style={{
                border: 'none',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.6 : 1,
                justifySelf: 'start',
              }}
            >
              {status === 'sending' ? 'جارٍ الإرسال...' : 'سجّل اهتمامي'}
            </button>
            {error && <div style={{ fontSize: 13, color: '#FCA5A5' }}>{error}</div>}
          </form>
        )}
      </div>
    </section>
  );
}
