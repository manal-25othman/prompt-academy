// Decorative cover visual for the hero. The original prototype used a
// design-tool-only <image-slot> drag-and-drop placeholder that never
// received an image and can't ship in production, so this renders an
// abstract neural-network illustration tying into the afham/uktub/hassin/
// tabbiq accent colors instead of an empty upload box.
export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 600 520"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      role="img"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, opacity: 0.92 }}
    >
      <defs>
        <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF2FC" />
          <stop offset="45%" stopColor="#EDEAFB" />
          <stop offset="100%" stopColor="#E7F7F2" />
        </linearGradient>
        <radialGradient id="blobTeal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0F766E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blobPurple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C6BC4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7C6BC4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blobOrange" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9863F" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C9863F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="600" height="520" fill="url(#heroWash)" />
      <circle cx="120" cy="120" r="180" fill="url(#blobTeal)" />
      <circle cx="470" cy="150" r="200" fill="url(#blobPurple)" />
      <circle cx="330" cy="420" r="220" fill="url(#blobOrange)" />

      <g stroke="#9DBBD6" strokeWidth="1.2" opacity="0.6">
        <line x1="140" y1="150" x2="300" y2="110" />
        <line x1="140" y1="150" x2="300" y2="260" />
        <line x1="140" y1="150" x2="150" y2="320" />
        <line x1="150" y1="320" x2="300" y2="260" />
        <line x1="150" y1="320" x2="290" y2="410" />
        <line x1="300" y1="110" x2="460" y2="190" />
        <line x1="300" y1="260" x2="460" y2="190" />
        <line x1="300" y1="260" x2="460" y2="340" />
        <line x1="290" y1="410" x2="460" y2="340" />
        <line x1="460" y1="190" x2="460" y2="340" />
      </g>
      <g fill="#FFFFFF" stroke="#0F766E" strokeWidth="2.2">
        <circle cx="140" cy="150" r="11" />
        <circle cx="150" cy="320" r="11" />
        <circle cx="300" cy="110" r="10" />
        <circle cx="300" cy="260" r="13" />
        <circle cx="290" cy="410" r="10" />
        <circle cx="460" cy="190" r="12" />
        <circle cx="460" cy="340" r="12" />
      </g>
      <circle cx="460" cy="265" r="34" fill="none" stroke="#0F766E" opacity="0.25" />
      <circle cx="460" cy="265" r="52" fill="none" stroke="#0F766E" opacity="0.14" />
    </svg>
  );
}
