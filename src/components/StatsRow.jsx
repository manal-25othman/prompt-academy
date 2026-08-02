const STATS = [
  { value: '08', label: 'وحدات تعليمية' },
  { value: '04', label: 'مكوّنات لبرومت محترف' },
  { value: '06', label: 'تقنيات مجرّبة' },
  { value: '40', label: 'قالب جاهز للنسخ' },
];

export default function StatsRow() {
  return (
    <header style={{ padding: '40px 0' }}>
      <div className="col2" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {STATS.map((s) => (
          <div key={s.label} className="card" style={{ padding: 18 }}>
            <div className="accent" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 26 }}>
              {s.value}
            </div>
            <div className="muted" style={{ fontSize: 13, marginTop: 8, lineHeight: 1.7 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
