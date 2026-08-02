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
        background: '#0F766E',
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: 14.5,
        padding: '14px 22px',
        borderRadius: 999,
        textDecoration: 'none',
        boxShadow: '0 12px 30px rgba(23,56,92,0.16)',
      }}
    >
      راسلني على واتساب
    </a>
  );
}
