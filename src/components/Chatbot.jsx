import { useEffect, useRef, useState } from 'react';

const WELCOME = 'أهلًا! أنا مساعد ذكي مرتبط بمحتوى هذا الموقع. اسألني أي شيء عن الذكاء الاصطناعي أو هندسة البرومبت.';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'تعذّر الحصول على رد');
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message || 'حدث خطأ، حاول مرة أخرى');
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      <button
        type="button"
        className="no-print"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'إغلاق المحادثة' : 'افتح المحادثة'}
        style={{
          position: 'fixed',
          insetInlineStart: 24,
          insetBlockEnd: 24,
          zIndex: 46,
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: 'none',
          background: 'var(--accent-gradient, #6d5ce8)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
          cursor: 'pointer',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {open && (
        <div
          className="panel no-print"
          style={{
            position: 'fixed',
            insetInlineStart: 24,
            insetBlockEnd: 92,
            zIndex: 46,
            width: 340,
            maxWidth: 'calc(100vw - 48px)',
            height: 460,
            maxHeight: 'calc(100vh - 140px)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '14px 16px',
              background: 'var(--accent-gradient, #6d5ce8)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            مساعد البرومبت الذكي
          </div>

          <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Bubble role="assistant" text={WELCOME} />
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} text={m.content} />
            ))}
            {loading && <Bubble role="assistant" text="…يكتب" muted />}
            {error && (
              <div style={{ fontSize: 12.5, color: '#FCA5A5', background: 'rgba(185,28,28,0.18)', border: '1px solid #7F1D1D', borderRadius: 6, padding: '8px 10px' }}>
                {error}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, padding: 10, borderTop: '1px solid var(--border, #c6d9ec)' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="اكتب سؤالك هنا..."
              disabled={loading}
              style={{
                flex: 1,
                border: '1px solid var(--border, #c6d9ec)',
                borderRadius: 6,
                padding: '9px 12px',
                fontSize: 14,
                fontFamily: 'inherit',
                background: 'var(--bg-panel-alt, #221d47)',
                color: 'var(--text, #ede9fb)',
              }}
            />
            <button
              type="button"
              onClick={send}
              disabled={loading || !input.trim()}
              className="wa-btn-solid"
              style={{ border: 'none', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer', opacity: loading || !input.trim() ? 0.6 : 1 }}
            >
              إرسال
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Bubble({ role, text, muted }) {
  const isUser = role === 'user';
  return (
    <div
      style={{
        alignSelf: isUser ? 'flex-start' : 'flex-end',
        maxWidth: '85%',
        background: isUser ? 'var(--bg-panel-alt, #221d47)' : 'var(--sidebar-bg, #191536)',
        border: '1px solid var(--border, #332c5e)',
        borderRadius: 10,
        padding: '9px 12px',
        fontSize: 14,
        lineHeight: 1.7,
        color: muted ? 'var(--muted, #a79fd1)' : 'var(--text-strong, #f7f5ff)',
        whiteSpace: 'pre-wrap',
      }}
    >
      {text}
    </div>
  );
}
