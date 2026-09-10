/* Flat UI mockup SVG illustrations for each blog post */
import React from "react";

/* ── Shared blob ── */
function Blob({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="white" fillOpacity="0.12" />;
}

/* ── 01 Web Development in the AI Era — browser + neural net ── */
export function AIWebDevIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={300} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* Browser */}
      <rect x="30" y="30" width="180" height="140" rx="10" fill="white" fillOpacity="0.18" />
      <rect x="30" y="30" width="180" height="22" rx="10" fill="white" fillOpacity="0.28" />
      <circle cx="46" cy="41" r="4" fill="#EF4444" fillOpacity="0.7" />
      <circle cx="59" cy="41" r="4" fill="#FBBF24" fillOpacity="0.7" />
      <circle cx="72" cy="41" r="4" fill="#22C55E" fillOpacity="0.7" />
      {/* Code lines */}
      <rect x="44" y="64" width="22" height="5" rx="2" fill="white" fillOpacity="0.6" />
      <rect x="70" y="64" width="44" height="5" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="52" y="75" width="30" height="5" rx="2" fill="white" fillOpacity="0.5" />
      <rect x="86" y="75" width="36" height="5" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="44" y="86" width="52" height="5" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="44" y="97" width="22" height="5" rx="2" fill="white" fillOpacity="0.6" />
      <rect x="44" y="108" width="62" height="5" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="44" y="119" width="40" height="5" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="44" y="130" width="28" height="5" rx="2" fill="white" fillOpacity="0.25" />
      {/* Neural net nodes */}
      <circle cx="240" cy="70" r="10" fill="white" fillOpacity="0.35" />
      <circle cx="240" cy="100" r="10" fill="white" fillOpacity="0.35" />
      <circle cx="240" cy="130" r="10" fill="white" fillOpacity="0.35" />
      <circle cx="290" cy="55" r="10" fill="white" fillOpacity="0.3" />
      <circle cx="290" cy="85" r="14" fill="white" fillOpacity="0.42" />
      <circle cx="290" cy="115" r="10" fill="white" fillOpacity="0.3" />
      <circle cx="290" cy="145" r="10" fill="white" fillOpacity="0.3" />
      <circle cx="336" cy="80" r="12" fill="white" fillOpacity="0.4" />
      <circle cx="336" cy="120" r="12" fill="white" fillOpacity="0.4" />
      {/* Connections */}
      {[[240,70,290,55],[240,70,290,85],[240,100,290,85],[240,100,290,115],[240,130,290,115],[240,130,290,145],[290,55,336,80],[290,85,336,80],[290,85,336,120],[290,115,336,120],[290,145,336,120]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

/* ── 02 Website vs Social Media — browser vs phone ── */
export function WebsiteVsSocialIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* Browser */}
      <rect x="24" y="28" width="155" height="144" rx="10" fill="white" fillOpacity="0.18" />
      <rect x="24" y="28" width="155" height="22" rx="10" fill="white" fillOpacity="0.28" />
      <circle cx="38" cy="39" r="3.5" fill="#EF4444" fillOpacity="0.7" />
      <circle cx="49" cy="39" r="3.5" fill="#FBBF24" fillOpacity="0.7" />
      <circle cx="60" cy="39" r="3.5" fill="#22C55E" fillOpacity="0.7" />
      <rect x="34" y="60" width="135" height="30" rx="4" fill="white" fillOpacity="0.2" />
      <rect x="40" y="67" width="70" height="8" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="40" y="79" width="80" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="34" y="98" width="60" height="18" rx="4" fill="white" fillOpacity="0.18" />
      <rect x="34" y="122" width="60" height="18" rx="4" fill="white" fillOpacity="0.18" />
      <rect x="100" y="98" width="66" height="42" rx="4" fill="white" fillOpacity="0.18" />
      <rect x="34" y="148" width="135" height="14" rx="4" fill="white" fillOpacity="0.25" />
      {/* VS divider */}
      <rect x="186" y="60" width="2" height="80" rx="1" fill="white" fillOpacity="0.2" />
      <text x="180" y="106" fontSize="13" fontWeight="bold" fill="white" fillOpacity="0.5" textAnchor="middle">VS</text>
      {/* Phone */}
      <rect x="196" y="28" width="62" height="144" rx="12" fill="white" fillOpacity="0.18" />
      <rect x="212" y="34" width="30" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <circle cx="227" cy="160" r="6" fill="white" fillOpacity="0.3" />
      <rect x="202" y="46" width="50" height="38" rx="4" fill="white" fillOpacity="0.2" />
      <circle cx="212" cy="94" r="8" fill="white" fillOpacity="0.3" />
      <rect x="224" y="89" width="28" height="5" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="224" y="97" width="20" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="202" y="108" width="50" height="4" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="202" y="116" width="38" height="4" rx="2" fill="white" fillOpacity="0.15" />
      {/* Growth arrow */}
      <path d="M270 160 Q290 130 310 110 Q330 90 345 60" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
      <polygon points="345,60 338,72 350,68" fill="white" fillOpacity="0.5" />
      <rect x="265" y="80" width="85" height="60" rx="6" fill="white" fillOpacity="0.1" />
      <rect x="272" y="130" width="8" height="18" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="285" y="120" width="8" height="28" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="298" y="112" width="8" height="36" rx="2" fill="white" fillOpacity="0.5" />
      <rect x="311" y="100" width="8" height="48" rx="2" fill="white" fillOpacity="0.55" />
      <rect x="324" y="88" width="8" height="60" rx="2" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

/* ── 03 SaaS Retention — dashboard with funnel + metrics ── */
export function SaaSRetentionIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* App shell */}
      <rect x="24" y="24" width="312" height="152" rx="10" fill="white" fillOpacity="0.12" />
      {/* Sidebar */}
      <rect x="24" y="24" width="52" height="152" rx="10" fill="white" fillOpacity="0.15" />
      <circle cx="50" cy="44" r="8" fill="white" fillOpacity="0.35" />
      <rect x="34" y="60" width="32" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="34" y="70" width="28" height="4" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="34" y="80" width="32" height="4" rx="2" fill="white" fillOpacity="0.28" />
      <rect x="34" y="90" width="24" height="4" rx="2" fill="white" fillOpacity="0.2" />
      {/* Stats row */}
      <rect x="84" y="32" width="60" height="36" rx="6" fill="white" fillOpacity="0.18" />
      <rect x="90" y="38" width="36" height="10" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="90" y="52" width="24" height="4" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="150" y="32" width="60" height="36" rx="6" fill="white" fillOpacity="0.18" />
      <rect x="156" y="38" width="36" height="10" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="156" y="52" width="24" height="4" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="216" y="32" width="60" height="36" rx="6" fill="white" fillOpacity="0.18" />
      <rect x="222" y="38" width="36" height="10" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="222" y="52" width="24" height="4" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="282" y="32" width="46" height="36" rx="6" fill="white" fillOpacity="0.18" />
      <rect x="288" y="38" width="28" height="10" rx="2" fill="white" fillOpacity="0.4" />
      {/* Retention funnel */}
      <path d="M84 84 L200 84 L186 108 L98 108 Z" fill="white" fillOpacity="0.3" />
      <path d="M98 110 L186 110 L176 132 L108 132 Z" fill="white" fillOpacity="0.22" />
      <path d="M108 134 L176 134 L168 154 L116 154 Z" fill="white" fillOpacity="0.16" />
      <path d="M116 156 L168 156 L162 168 L122 168 Z" fill="white" fillOpacity="0.12" />
      {/* Line chart */}
      <rect x="210" y="78" width="120" height="90" rx="6" fill="white" fillOpacity="0.1" />
      <path d="M220 148 Q240 138 256 122 Q272 108 290 100 Q308 90 325 76" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
      <path d="M220 148 Q240 145 256 140 Q272 136 290 130 Q308 125 325 120" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.3" strokeDasharray="4 3" />
    </svg>
  );
}

/* ── 04 Cheap Website Cost — broken site with error indicators ── */
export function CheapWebsiteIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* Browser */}
      <rect x="40" y="24" width="200" height="152" rx="10" fill="white" fillOpacity="0.16" />
      <rect x="40" y="24" width="200" height="22" rx="10" fill="white" fillOpacity="0.26" />
      <circle cx="56" cy="35" r="4" fill="#EF4444" fillOpacity="0.8" />
      <circle cx="68" cy="35" r="4" fill="#FBBF24" fillOpacity="0.7" />
      <circle cx="80" cy="35" r="4" fill="#22C55E" fillOpacity="0.5" />
      {/* Broken layout lines */}
      <rect x="52" y="56" width="176" height="28" rx="4" fill="white" fillOpacity="0.18" />
      <rect x="52" y="56" width="80" height="28" rx="4" fill="white" fillOpacity="0.1" />
      {/* Crack / broken line */}
      <path d="M132 56 L128 70 L136 80 L130 100" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" fill="none" />
      <rect x="52" y="92" width="84" height="48" rx="4" fill="white" fillOpacity="0.15" />
      <rect x="144" y="92" width="84" height="22" rx="4" fill="white" fillOpacity="0.15" />
      <rect x="144" y="118" width="84" height="22" rx="4" fill="white" fillOpacity="0.1" />
      <rect x="52" y="148" width="176" height="18" rx="4" fill="white" fillOpacity="0.18" />
      {/* Error badge */}
      <circle cx="290" cy="60" r="28" fill="white" fillOpacity="0.15" />
      <text x="290" y="54" fontSize="22" textAnchor="middle" fill="white" fillOpacity="0.7">!</text>
      <rect x="280" y="62" width="20" height="4" rx="2" fill="white" fillOpacity="0.4" />
      {/* Speed indicator — slow */}
      <rect x="262" y="100" width="86" height="44" rx="8" fill="white" fillOpacity="0.12" />
      <rect x="270" y="108" width="60" height="6" rx="3" fill="white" fillOpacity="0.25" />
      <rect x="270" y="118" width="20" height="6" rx="3" fill="#EF4444" fillOpacity="0.6" />
      <rect x="294" y="118" width="36" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="270" y="128" width="40" height="4" rx="2" fill="white" fillOpacity="0.2" />
      {/* Dollar sign */}
      <circle cx="316" cy="155" r="22" fill="white" fillOpacity="0.12" />
      <text x="316" y="163" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white" fillOpacity="0.45">$</text>
    </svg>
  );
}

/* ── 05 Mobile First — phones + responsive grid ── */
export function MobileFirstIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* Desktop (back) */}
      <rect x="160" y="40" width="170" height="110" rx="8" fill="white" fillOpacity="0.14" />
      <rect x="160" y="40" width="170" height="18" rx="8" fill="white" fillOpacity="0.22" />
      <rect x="236" y="150" width="20" height="12" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="210" y="162" width="72" height="6" rx="3" fill="white" fillOpacity="0.18" />
      <rect x="168" y="66" width="154" height="32" rx="4" fill="white" fillOpacity="0.18" />
      <rect x="168" y="104" width="46" height="36" rx="4" fill="white" fillOpacity="0.15" />
      <rect x="220" y="104" width="46" height="36" rx="4" fill="white" fillOpacity="0.15" />
      <rect x="272" y="104" width="46" height="36" rx="4" fill="white" fillOpacity="0.15" />
      {/* Tablet (mid) */}
      <rect x="80" y="30" width="90" height="140" rx="10" fill="white" fillOpacity="0.18" />
      <rect x="90" y="42" width="70" height="96" rx="4" fill="white" fillOpacity="0.15" />
      <rect x="92" y="44" width="66" height="22" rx="3" fill="white" fillOpacity="0.22" />
      <rect x="92" y="70" width="32" height="32" rx="3" fill="white" fillOpacity="0.18" />
      <rect x="128" y="70" width="30" height="12" rx="2" fill="white" fillOpacity="0.28" />
      <rect x="128" y="86" width="24" height="8" rx="2" fill="white" fillOpacity="0.18" />
      <circle cx="125" cy="158" r="5" fill="white" fillOpacity="0.28" />
      {/* Phone (front / largest) */}
      <rect x="22" y="18" width="66" height="164" rx="12" fill="white" fillOpacity="0.32" />
      <rect x="34" y="24" width="42" height="5" rx="2.5" fill="white" fillOpacity="0.28" />
      <circle cx="55" cy="168" r="7" fill="white" fillOpacity="0.28" />
      <rect x="30" y="38" width="50" height="36" rx="4" fill="white" fillOpacity="0.22" />
      <rect x="30" y="80" width="50" height="8" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="30" y="92" width="50" height="5" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="30" y="101" width="38" height="5" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="30" y="114" width="50" height="20" rx="4" fill="white" fillOpacity="0.35" />
      <rect x="30" y="138" width="50" height="20" rx="4" fill="white" fillOpacity="0.18" />
    </svg>
  );
}

/* ── 06 How to Brief an Agency — document + checklist ── */
export function AgencyBriefIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* Main doc */}
      <rect x="40" y="20" width="150" height="160" rx="10" fill="white" fillOpacity="0.2" />
      <rect x="40" y="20" width="150" height="28" rx="10" fill="white" fillOpacity="0.3" />
      <rect x="52" y="30" width="80" height="8" rx="3" fill="white" fillOpacity="0.55" />
      {/* Checklist items */}
      {[58, 76, 94, 112, 130, 148].map((y, i) => (
        <g key={y}>
          <rect x="52" y={y} width="14" height="14" rx="3" fill={i < 4 ? "white" : "white"} fillOpacity={i < 4 ? "0.45" : "0.2"} />
          {i < 4 && <polyline points={`54,${y+7} ${57},${y+11} ${64},${y+4}`} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
          <rect x="72" y={y+3} width={i < 4 ? "100" : "70"} height="8" rx="3" fill="white" fillOpacity={i < 4 ? "0.35" : "0.18"} />
        </g>
      ))}
      {/* Second doc (tilted) */}
      <rect x="204" y="30" width="130" height="160" rx="10" fill="white" fillOpacity="0.16" transform="rotate(4 204 30)" />
      <rect x="204" y="30" width="130" height="22" rx="10" fill="white" fillOpacity="0.24" transform="rotate(4 204 30)" />
      {/* Sketch wireframe on second doc */}
      <rect x="214" y="58" width="108" height="52" rx="4" fill="white" fillOpacity="0.14" />
      <rect x="218" y="62" width="100" height="14" rx="3" fill="white" fillOpacity="0.22" />
      <rect x="218" y="80" width="44" height="22" rx="3" fill="white" fillOpacity="0.16" />
      <rect x="266" y="80" width="52" height="8" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="266" y="92" width="40" height="6" rx="2" fill="white" fillOpacity="0.15" />
      <rect x="214" y="116" width="108" height="6" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="214" y="126" width="80" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="214" y="136" width="90" height="6" rx="3" fill="white" fillOpacity="0.12" />
      <rect x="214" y="150" width="60" height="12" rx="6" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

/* ── 07 Digital Marketing Fails — funnel + channels + graph ── */
export function DigitalMarketingIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* Funnel */}
      <path d="M30 30 L140 30 L118 64 L52 64 Z" fill="white" fillOpacity="0.32" />
      <path d="M52 66 L118 66 L102 96 L68 96 Z" fill="white" fillOpacity="0.24" />
      <path d="M68 98 L102 98 L92 124 L78 124 Z" fill="white" fillOpacity="0.18" />
      <path d="M78 126 L92 126 L88 148 L82 148 Z" fill="white" fillOpacity="0.13" />
      {/* Labels */}
      <rect x="148" y="36" width="50" height="7" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="148" y="72" width="42" height="7" rx="3" fill="white" fillOpacity="0.24" />
      <rect x="148" y="104" width="34" height="7" rx="3" fill="white" fillOpacity="0.18" />
      <rect x="148" y="132" width="26" height="7" rx="3" fill="white" fillOpacity="0.13" />
      {/* Channel icons row */}
      <rect x="214" y="24" width="130" height="80" rx="8" fill="white" fillOpacity="0.1" />
      <circle cx="244" cy="52" r="16" fill="white" fillOpacity="0.22" />
      <rect x="234" y="48" width="20" height="8" rx="2" fill="white" fillOpacity="0.4" />
      <circle cx="290" cy="52" r="16" fill="white" fillOpacity="0.22" />
      <rect x="282" y="46" width="16" height="6" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="282" y="55" width="12" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <circle cx="336" cy="52" r="16" fill="white" fillOpacity="0.22" />
      <text x="336" y="57" fontSize="14" textAnchor="middle" fill="white" fillOpacity="0.5">@</text>
      <rect x="222" y="72" width="110" height="5" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="222" y="81" width="80" height="5" rx="2" fill="white" fillOpacity="0.14" />
      {/* Attribution chart */}
      <rect x="214" y="118" width="130" height="66" rx="8" fill="white" fillOpacity="0.1" />
      <rect x="224" y="128" width="18" height="46" rx="4" fill="white" fillOpacity="0.45" />
      <rect x="248" y="138" width="18" height="36" rx="4" fill="white" fillOpacity="0.38" />
      <rect x="272" y="130" width="18" height="44" rx="4" fill="white" fillOpacity="0.52" />
      <rect x="296" y="144" width="18" height="30" rx="4" fill="white" fillOpacity="0.32" />
      <rect x="320" y="134" width="16" height="40" rx="4" fill="white" fillOpacity="0.42" />
      {/* X axis */}
      <rect x="222" y="174" width="116" height="2" rx="1" fill="white" fillOpacity="0.2" />
      {/* Dashed down arrow on funnel */}
      <path d="M85 150 L85 170" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" strokeOpacity="0.4" />
      <polygon points="85,172 80,164 90,164" fill="white" fillOpacity="0.35" />
    </svg>
  );
}

/* ── 08 Design Systems — component grid ── */
export function DesignSystemIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={310} cy={170} r={90} />
      <Blob cx={20} cy={20} r={45} />
      {/* App frame */}
      <rect x="24" y="20" width="312" height="160" rx="10" fill="white" fillOpacity="0.1" />
      {/* Top nav */}
      <rect x="24" y="20" width="312" height="22" rx="10" fill="white" fillOpacity="0.2" />
      <rect x="34" y="26" width="50" height="10" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="240" y="26" width="16" height="10" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="262" y="26" width="16" height="10" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="284" y="26" width="44" height="10" rx="5" fill="white" fillOpacity="0.4" />
      {/* Left sidebar tokens */}
      <rect x="24" y="42" width="70" height="138" fill="white" fillOpacity="0.12" />
      <rect x="32" y="52" width="54" height="6" rx="3" fill="white" fillOpacity="0.35" />
      {/* Colour tokens */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={36 + i * 13} cy={72} r={5} fill="white" fillOpacity={0.6 - i * 0.08} />
      ))}
      <rect x="32" y="86" width="54" height="6" rx="3" fill="white" fillOpacity="0.25" />
      <rect x="32" y="96" width="46" height="5" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="32" y="105" width="50" height="5" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="32" y="114" width="38" height="5" rx="2" fill="white" fillOpacity="0.15" />
      <rect x="32" y="130" width="54" height="6" rx="3" fill="white" fillOpacity="0.25" />
      <rect x="32" y="140" width="54" height="10" rx="5" fill="white" fillOpacity="0.35" />
      <rect x="32" y="155" width="54" height="10" rx="5" fill="white" fillOpacity="0.22" />
      {/* Component grid */}
      {/* Buttons row */}
      <rect x="102" y="48" width="68" height="20" rx="10" fill="white" fillOpacity="0.4" />
      <rect x="176" y="48" width="68" height="20" rx="10" fill="white" fillOpacity="0.2" />
      <rect x="250" y="48" width="68" height="20" rx="10" fill="white" fillOpacity="0.12" />
      {/* Input fields */}
      <rect x="102" y="78" width="140" height="20" rx="5" fill="white" fillOpacity="0.18" />
      <rect x="248" y="78" width="86" height="20" rx="5" fill="white" fillOpacity="0.18" />
      {/* Card components */}
      <rect x="102" y="108" width="100" height="60" rx="8" fill="white" fillOpacity="0.16" />
      <rect x="108" y="116" width="88" height="18" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="108" y="138" width="60" height="5" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="108" y="147" width="46" height="5" rx="2" fill="white" fillOpacity="0.15" />
      <rect x="108" y="158" width="40" height="8" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="208" y="108" width="126" height="60" rx="8" fill="white" fillOpacity="0.16" />
      <rect x="216" y="116" width="110" height="18" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="216" y="138" width="80" height="5" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="216" y="147" width="60" height="5" rx="2" fill="white" fillOpacity="0.15" />
      <rect x="216" y="158" width="50" height="8" rx="4" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

/* ── Lookup map ── */
export const blogIllustrations: Record<string, () => React.JSX.Element> = {
  "web-development-in-the-ai-era": AIWebDevIllustration,
  "why-your-business-needs-a-website-not-just-social-media": WebsiteVsSocialIllustration,
  "what-makes-a-saas-product-actually-retain-users": SaaSRetentionIllustration,
  "the-real-cost-of-a-cheap-website": CheapWebsiteIllustration,
  "mobile-first-is-not-optional-anymore": MobileFirstIllustration,
  "how-to-brief-a-design-agency": AgencyBriefIllustration,
  "why-most-digital-marketing-fails": DigitalMarketingIllustration,
  "design-systems-why-your-product-team-needs-one": DesignSystemIllustration,
};
