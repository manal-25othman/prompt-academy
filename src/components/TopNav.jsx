const LINKS = [
  { id: 'ai', label: 'الذكاء الاصطناعي' },
  { id: 'journey', label: 'الرحلة' },
  { id: 'prompt', label: 'البرومت' },
  { id: 'builder', label: 'المُنشئ' },
  { id: 'library', label: 'المكتبة' },
];

export default function TopNav({ active }) {
  return (
    <div
      className="topnav no-print"
      style={{
        display: 'none',
        position: 'sticky',
        top: 0,
        zIndex: 35,
        background: 'rgba(20,17,43,0.94)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
        padding: '10px 20px',
        gap: 8,
        overflowX: 'auto',
      }}
    >
      {LINKS.map((l) => (
        <a key={l.id} href={`#${l.id}`} className={`topnav-link${active === l.id ? ' active' : ''}`}>
          {l.label}
        </a>
      ))}
      <a href="#about" className="topnav-cta">
        تواصل
      </a>
    </div>
  );
}
