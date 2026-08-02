import { WHATSAPP_NUMBER } from '../data';

export default function FloatingWhatsApp() {
  return (
    <a
      className="no-print fab-whatsapp"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        insetInlineEnd: 24,
        insetBlockEnd: 24,
        zIndex: 45,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: '#22C35E',
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: 14.5,
        padding: '14px 22px',
        borderRadius: 999,
        textDecoration: 'none',
        boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
      }}
    >
      راسلني على واتساب
    </a>
  );
}
