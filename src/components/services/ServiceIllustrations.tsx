/* Flat UI mockup illustrations for each service */
import React from "react";

/* ── Shared decorative blob ─────────────────────────────────────────── */
function Blob({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="white" fillOpacity="0.18" />;
}

/* ── Browser shell ──────────────────────────────────────────────────── */
function Browser({ x, y, w, h, dotColor = "white" }: { x: number; y: number; w: number; h: number; dotColor?: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="white" fillOpacity="0.5" />
      <rect x={x} y={y} width={w} height="18" rx="8" fill="white" fillOpacity="0.7" />
      <circle cx={x + 10} cy={y + 9} r="3" fill="#EF4444" fillOpacity="0.7" />
      <circle cx={x + 19} cy={y + 9} r="3" fill="#FBBF24" fillOpacity="0.7" />
      <circle cx={x + 28} cy={y + 9} r="3" fill="#22C55E" fillOpacity="0.7" />
      <rect x={x + 36} y={y + 5} width={w - 48} height="8" rx="4" fill={dotColor} fillOpacity="0.2" />
    </>
  );
}

/* ── Phone shell ────────────────────────────────────────────────────── */
function Phone({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="10" fill="white" fillOpacity="0.5" />
      <rect x={x + w / 2 - 12} y={y + 6} width="24" height="4" rx="2" fill="white" fillOpacity="0.4" />
      <circle cx={x + w / 2} cy={y + h - 10} r="5" fill="white" fillOpacity="0.4" />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   01 Custom Software Development — browser with code lines + brackets
───────────────────────────────────────────────────────────────────── */
export function CustomSoftwareIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={230} cy={140} r={70} />
      <Blob cx={20} cy={20} r={40} />
      <Browser x={40} y={20} w={200} h={120} />
      {/* code lines */}
      <rect x="56" y="52" width="20" height="5" rx="2" fill="#7C3AED" fillOpacity="0.8" />
      <rect x="80" y="52" width="50" height="5" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="64" y="63" width="36" height="5" rx="2" fill="#7C3AED" fillOpacity="0.55" />
      <rect x="104" y="63" width="30" height="5" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="56" y="74" width="55" height="5" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="64" y="85" width="28" height="5" rx="2" fill="#7C3AED" fillOpacity="0.6" />
      <rect x="96" y="85" width="40" height="5" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="56" y="96" width="20" height="5" rx="2" fill="#7C3AED" fillOpacity="0.8" />
      <rect x="56" y="107" width="65" height="5" rx="2" fill="white" fillOpacity="0.25" />
      {/* brackets */}
      <path d="M176 58 L166 80 L176 102" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.5" />
      <path d="M188 58 L198 80 L188 102" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   02 Web Development — browser with hero + content blocks
───────────────────────────────────────────────────────────────────── */
export function WebDevIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={240} cy={140} r={70} />
      <Blob cx={15} cy={15} r={35} />
      <Browser x={36} y={18} w={208} h={126} />
      {/* hero banner */}
      <rect x="48" y="44" width="184" height="38" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="56" y="52" width="80" height="8" rx="3" fill="white" fillOpacity="0.6" />
      <rect x="56" y="64" width="52" height="6" rx="3" fill="white" fillOpacity="0.35" />
      {/* three columns */}
      <rect x="48" y="90" width="56" height="44" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="52" y="96" width="48" height="14" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="52" y="114" width="38" height="5" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="52" y="123" width="32" height="5" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="112" y="90" width="56" height="44" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="116" y="96" width="48" height="14" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="116" y="114" width="38" height="5" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="116" y="123" width="32" height="5" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="176" y="90" width="56" height="44" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="180" y="96" width="48" height="14" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="180" y="114" width="38" height="5" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="180" y="123" width="32" height="5" rx="2" fill="white" fillOpacity="0.18" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   03 Mobile App Development — two phone frames with UI
───────────────────────────────────────────────────────────────────── */
export function MobileAppIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={240} cy={130} r={70} />
      <Blob cx={15} cy={15} r={35} />
      {/* left phone */}
      <Phone x={72} y={16} w={58} h={128} />
      <rect x="78" y="36" width="46" height="38" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="78" y="80" width="30" height="5" rx="2" fill="white" fillOpacity="0.5" />
      <rect x="78" y="89" width="42" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="78" y="97" width="36" height="4" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="80" y="108" width="40" height="10" rx="5" fill="white" fillOpacity="0.4" />
      {/* right phone — slightly offset */}
      <Phone x={150} y={26} w={58} h={118} />
      <rect x="156" y="44" width="46" height="30" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="156" y="80" width="46" height="5" rx="2" fill="white" fillOpacity="0.5" />
      <rect x="156" y="89" width="32" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="156" y="97" width="38" height="4" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="158" y="108" width="40" height="10" rx="5" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   04 SaaS Development — dashboard with sidebar + charts
───────────────────────────────────────────────────────────────────── */
export function SaaSIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={235} cy={140} r={70} />
      <Blob cx={18} cy={18} r={38} />
      {/* outer card */}
      <rect x="30" y="18" width="220" height="128" rx="10" fill="white" fillOpacity="0.45" />
      {/* sidebar */}
      <rect x="30" y="18" width="52" height="128" rx="10" fill="white" fillOpacity="0.25" />
      <circle cx="56" cy="36" r="8" fill="white" fillOpacity="0.45" />
      <rect x="40" y="52" width="32" height="5" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="40" y="62" width="28" height="5" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="40" y="72" width="32" height="5" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="40" y="82" width="24" height="5" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="40" y="92" width="30" height="5" rx="2" fill="white" fillOpacity="0.3" />
      {/* main area */}
      <rect x="90" y="28" width="152" height="22" rx="5" fill="white" fillOpacity="0.3" />
      <rect x="96" y="33" width="60" height="10" rx="3" fill="white" fillOpacity="0.5" />
      {/* stat cards */}
      <rect x="90" y="58" width="44" height="32" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="96" y="64" width="30" height="8" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="96" y="76" width="22" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="140" y="58" width="44" height="32" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="146" y="64" width="30" height="8" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="146" y="76" width="22" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="190" y="58" width="44" height="32" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="196" y="64" width="30" height="8" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="196" y="76" width="22" height="4" rx="2" fill="white" fillOpacity="0.25" />
      {/* bar chart */}
      <rect x="90" y="98" width="152" height="40" rx="5" fill="white" fillOpacity="0.2" />
      <rect x="100" y="108" width="12" height="22" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="118" y="114" width="12" height="16" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="136" y="104" width="12" height="26" rx="3" fill="white" fillOpacity="0.55" />
      <rect x="154" y="110" width="12" height="20" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="172" y="106" width="12" height="24" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="190" y="100" width="12" height="30" rx="3" fill="white" fillOpacity="0.6" />
      <rect x="208" y="112" width="12" height="18" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="226" y="107" width="8" height="23" rx="3" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   05 UI/UX Design — wireframe artboards with components
───────────────────────────────────────────────────────────────────── */
export function UIUXIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={235} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* left artboard */}
      <rect x="32" y="22" width="100" height="118" rx="8" fill="white" fillOpacity="0.4" />
      <rect x="40" y="32" width="84" height="42" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="40" y="80" width="60" height="7" rx="3" fill="white" fillOpacity="0.55" />
      <rect x="40" y="92" width="80" height="5" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="40" y="101" width="68" height="5" rx="2" fill="white" fillOpacity="0.22" />
      <rect x="40" y="118" width="50" height="12" rx="6" fill="white" fillOpacity="0.4" />
      {/* right artboard */}
      <rect x="146" y="30" width="102" height="110" rx="8" fill="white" fillOpacity="0.4" />
      {/* nav bar */}
      <rect x="154" y="38" width="86" height="14" rx="4" fill="white" fillOpacity="0.35" />
      <rect x="158" y="42" width="24" height="6" rx="2" fill="white" fillOpacity="0.55" />
      <rect x="202" y="42" width="10" height="6" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="216" y="42" width="10" height="6" rx="2" fill="white" fillOpacity="0.35" />
      {/* content blocks */}
      <rect x="154" y="58" width="86" height="28" rx="4" fill="white" fillOpacity="0.25" />
      <rect x="154" y="90" width="40" height="22" rx="4" fill="white" fillOpacity="0.25" />
      <rect x="200" y="90" width="40" height="22" rx="4" fill="white" fillOpacity="0.25" />
      <rect x="154" y="118" width="86" height="14" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="160" y="122" width="44" height="6" rx="2" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   06 Brand Identity — logo mark + colour swatches + type specimen
───────────────────────────────────────────────────────────────────── */
export function BrandIdentityIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={238} cy={135} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* brand card */}
      <rect x="32" y="22" width="216" height="118" rx="10" fill="white" fillOpacity="0.38" />
      {/* logo placeholder */}
      <circle cx="90" cy="72" r="32" fill="white" fillOpacity="0.35" />
      <polygon points="90,48 110,82 70,82" fill="white" fillOpacity="0.55" />
      <circle cx="90" cy="82" r="8" fill="white" fillOpacity="0.4" />
      {/* type specimen */}
      <rect x="138" y="34" width="98" height="12" rx="4" fill="white" fillOpacity="0.55" />
      <rect x="138" y="50" width="70" height="8" rx="3" fill="white" fillOpacity="0.35" />
      <rect x="138" y="62" width="80" height="6" rx="3" fill="white" fillOpacity="0.25" />
      {/* colour swatches */}
      <rect x="138" y="78" width="20" height="20" rx="4" fill="white" fillOpacity="0.6" />
      <rect x="163" y="78" width="20" height="20" rx="4" fill="white" fillOpacity="0.45" />
      <rect x="188" y="78" width="20" height="20" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="213" y="78" width="20" height="20" rx="4" fill="white" fillOpacity="0.18" />
      {/* bottom text lines */}
      <rect x="138" y="108" width="96" height="5" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="138" y="118" width="72" height="5" rx="2" fill="white" fillOpacity="0.2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   07 Graphic Design — layered artboards / poster layout
───────────────────────────────────────────────────────────────────── */
export function GraphicDesignIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={238} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* back card */}
      <rect x="52" y="28" width="130" height="110" rx="8" fill="white" fillOpacity="0.25" transform="rotate(-6 52 28)" />
      {/* middle card */}
      <rect x="60" y="24" width="130" height="110" rx="8" fill="white" fillOpacity="0.35" transform="rotate(-2 60 24)" />
      {/* front card */}
      <rect x="62" y="20" width="130" height="112" rx="8" fill="white" fillOpacity="0.5" />
      <rect x="70" y="30" width="114" height="52" rx="4" fill="white" fillOpacity="0.3" />
      {/* image placeholder pattern */}
      <line x1="70" y1="30" x2="184" y2="82" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
      <line x1="184" y1="30" x2="70" y2="82" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
      <rect x="70" y="90" width="80" height="8" rx="3" fill="white" fillOpacity="0.55" />
      <rect x="70" y="102" width="110" height="5" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="70" y="111" width="90" height="5" rx="2" fill="white" fillOpacity="0.22" />
      {/* right sticker */}
      <rect x="202" y="42" width="52" height="64" rx="8" fill="white" fillOpacity="0.4" />
      <rect x="208" y="50" width="40" height="26" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="208" y="82" width="30" height="5" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="208" y="91" width="36" height="4" rx="2" fill="white" fillOpacity="0.25" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   08 Digital Product Design — dashboard with sidebar nav + data widgets
───────────────────────────────────────────────────────────────────── */
export function DigitalProductIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={238} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      <rect x="28" y="18" width="224" height="130" rx="10" fill="white" fillOpacity="0.4" />
      {/* top nav */}
      <rect x="28" y="18" width="224" height="20" rx="10" fill="white" fillOpacity="0.3" />
      <rect x="38" y="23" width="40" height="10" rx="3" fill="white" fillOpacity="0.55" />
      <rect x="196" y="23" width="10" height="10" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="212" y="23" width="10" height="10" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="228" y="23" width="16" height="10" rx="5" fill="white" fillOpacity="0.35" />
      {/* left sidebar */}
      <rect x="28" y="38" width="44" height="110" rx="0" fill="white" fillOpacity="0.18" />
      <circle cx="50" cy="52" r="7" fill="white" fillOpacity="0.4" />
      <rect x="36" y="65" width="28" height="4" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="36" y="74" width="24" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="36" y="83" width="28" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="36" y="92" width="20" height="4" rx="2" fill="white" fillOpacity="0.2" />
      {/* donut chart */}
      <circle cx="104" cy="82" r="28" stroke="white" strokeOpacity="0.5" strokeWidth="10" fill="none" />
      <circle cx="104" cy="82" r="28" stroke="white" strokeOpacity="0.2" strokeWidth="10" fill="none" strokeDasharray="88 176" strokeDashoffset="0" />
      <circle cx="104" cy="82" r="12" fill="white" fillOpacity="0.25" />
      {/* right content */}
      <rect x="144" y="44" width="100" height="28" rx="6" fill="white" fillOpacity="0.22" />
      <rect x="150" y="50" width="60" height="10" rx="3" fill="white" fillOpacity="0.45" />
      <rect x="150" y="64" width="86" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="144" y="80" width="46" height="46" rx="6" fill="white" fillOpacity="0.22" />
      <rect x="150" y="88" width="34" height="8" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="150" y="100" width="28" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="150" y="108" width="32" height="4" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="198" y="80" width="46" height="46" rx="6" fill="white" fillOpacity="0.22" />
      <rect x="204" y="88" width="34" height="8" rx="2" fill="white" fillOpacity="0.45" />
      <rect x="204" y="100" width="28" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="204" y="108" width="32" height="4" rx="2" fill="white" fillOpacity="0.18" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   09 Digital Marketing — bar chart + funnel
───────────────────────────────────────────────────────────────────── */
export function DigitalMarketingIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={240} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      <rect x="28" y="18" width="224" height="128" rx="10" fill="white" fillOpacity="0.38" />
      {/* funnel shape */}
      <path d="M48 36 L102 36 L88 62 L62 62 Z" fill="white" fillOpacity="0.5" />
      <path d="M62 64 L88 64 L80 90 L70 90 Z" fill="white" fillOpacity="0.4" />
      <path d="M70 92 L80 92 L77 118 L73 118 Z" fill="white" fillOpacity="0.35" />
      {/* bar chart */}
      <rect x="118" y="36" width="126" height="110" rx="6" fill="white" fillOpacity="0.2" />
      <rect x="128" y="90" width="14" height="46" rx="4" fill="white" fillOpacity="0.5" />
      <rect x="148" y="76" width="14" height="60" rx="4" fill="white" fillOpacity="0.55" />
      <rect x="168" y="58" width="14" height="78" rx="4" fill="white" fillOpacity="0.65" />
      <rect x="188" y="70" width="14" height="66" rx="4" fill="white" fillOpacity="0.5" />
      <rect x="208" y="48" width="14" height="88" rx="4" fill="white" fillOpacity="0.7" />
      <rect x="228" y="64" width="10" height="72" rx="4" fill="white" fillOpacity="0.55" />
      {/* trend line */}
      <path d="M128 86 Q148 72 168 56 Q188 68 208 46 L228 62" stroke="white" strokeOpacity="0.6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   10 SEO & Content — browser with SERP results + magnifier
───────────────────────────────────────────────────────────────────── */
export function SEOIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={238} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      <Browser x={36} y={18} w={208} h={126} />
      {/* search bar */}
      <rect x="48" y="44" width="160" height="14" rx="7" fill="white" fillOpacity="0.4" />
      <rect x="54" y="48" width="100" height="6" rx="3" fill="white" fillOpacity="0.35" />
      <circle cx="196" cy="51" r="6" fill="white" fillOpacity="0.45" />
      {/* SERP rows */}
      {[64, 84, 104, 124].map((y, i) => (
        <g key={y}>
          <rect x="48" y={y} width="160" height="16" rx="4" fill="white" fillOpacity={0.3 - i * 0.04} />
          <rect x="54" y={y + 3} width="80" height="5" rx="2" fill="white" fillOpacity="0.5" />
          <rect x="54" y={y + 10} width="120" height="3" rx="1.5" fill="white" fillOpacity="0.25" />
        </g>
      ))}
      {/* big magnifier */}
      <circle cx="208" cy="110" r="22" stroke="white" strokeWidth="5" fill="white" fillOpacity="0.1" />
      <line x1="224" y1="126" x2="238" y2="140" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   11 Social Media Marketing — feed cards with engagement counters
───────────────────────────────────────────────────────────────────── */
export function SocialMediaIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={240} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* post card 1 */}
      <rect x="28" y="18" width="108" height="128" rx="10" fill="white" fillOpacity="0.42" />
      <rect x="34" y="24" width="96" height="58" rx="6" fill="white" fillOpacity="0.3" />
      <circle cx="44" cy="94" r="8" fill="white" fillOpacity="0.45" />
      <rect x="58" y="90" width="55" height="6" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="58" y="100" width="40" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="34" y="110" width="96" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="34" y="118" width="70" height="4" rx="2" fill="white" fillOpacity="0.18" />
      {/* engagement row */}
      <rect x="34" y="130" width="14" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="52" y="130" width="14" height="6" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="70" y="130" width="14" height="6" rx="3" fill="white" fillOpacity="0.25" />
      {/* post card 2 */}
      <rect x="144" y="18" width="108" height="128" rx="10" fill="white" fillOpacity="0.42" />
      <rect x="150" y="24" width="96" height="58" rx="6" fill="white" fillOpacity="0.3" />
      <circle cx="160" cy="94" r="8" fill="white" fillOpacity="0.45" />
      <rect x="174" y="90" width="55" height="6" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="174" y="100" width="40" height="4" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="150" y="110" width="96" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="150" y="118" width="70" height="4" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="150" y="130" width="14" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="168" y="130" width="14" height="6" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="186" y="130" width="14" height="6" rx="3" fill="white" fillOpacity="0.25" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   12 E-commerce — product cards + cart/checkout UI
───────────────────────────────────────────────────────────────────── */
export function EcommerceIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={238} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* product card 1 */}
      <rect x="28" y="18" width="72" height="92" rx="8" fill="white" fillOpacity="0.42" />
      <rect x="34" y="24" width="60" height="44" rx="5" fill="white" fillOpacity="0.3" />
      <rect x="34" y="74" width="44" height="6" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="34" y="84" width="30" height="5" rx="2" fill="white" fillOpacity="0.35" />
      {/* product card 2 */}
      <rect x="106" y="18" width="72" height="92" rx="8" fill="white" fillOpacity="0.42" />
      <rect x="112" y="24" width="60" height="44" rx="5" fill="white" fillOpacity="0.3" />
      <rect x="112" y="74" width="44" height="6" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="112" y="84" width="30" height="5" rx="2" fill="white" fillOpacity="0.35" />
      {/* cart/checkout panel */}
      <rect x="188" y="18" width="64" height="92" rx="8" fill="white" fillOpacity="0.38" />
      <rect x="194" y="26" width="52" height="6" rx="3" fill="white" fillOpacity="0.55" />
      <rect x="194" y="38" width="52" height="18" rx="4" fill="white" fillOpacity="0.25" />
      <rect x="194" y="62" width="52" height="18" rx="4" fill="white" fillOpacity="0.22" />
      <rect x="194" y="86" width="52" height="16" rx="8" fill="white" fillOpacity="0.45" />
      {/* bottom row */}
      <rect x="28" y="118" width="224" height="26" rx="8" fill="white" fillOpacity="0.28" />
      <rect x="36" y="125" width="80" height="12" rx="4" fill="white" fillOpacity="0.4" />
      <rect x="188" y="125" width="56" height="12" rx="6" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   13 AI & Automation — neural network nodes + flow
───────────────────────────────────────────────────────────────────── */
export function AIAutomationIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={240} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* connecting lines */}
      <line x1="72" y1="50" x2="140" y2="40" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="72" y1="50" x2="140" y2="80" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="72" y1="50" x2="140" y2="120" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="72" y1="110" x2="140" y2="40" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="72" y1="110" x2="140" y2="80" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="72" y1="110" x2="140" y2="120" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="140" y1="40" x2="208" y2="60" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="140" y1="80" x2="208" y2="60" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="140" y1="80" x2="208" y2="100" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="140" y1="120" x2="208" y2="100" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      {/* input nodes */}
      <circle cx="72" cy="50" r="12" fill="white" fillOpacity="0.45" />
      <circle cx="72" cy="50" r="5" fill="white" fillOpacity="0.6" />
      <circle cx="72" cy="110" r="12" fill="white" fillOpacity="0.45" />
      <circle cx="72" cy="110" r="5" fill="white" fillOpacity="0.6" />
      {/* hidden nodes */}
      <circle cx="140" cy="40" r="11" fill="white" fillOpacity="0.4" />
      <circle cx="140" cy="40" r="5" fill="white" fillOpacity="0.55" />
      <circle cx="140" cy="80" r="14" fill="white" fillOpacity="0.5" />
      <circle cx="140" cy="80" r="6" fill="white" fillOpacity="0.65" />
      <circle cx="140" cy="120" r="11" fill="white" fillOpacity="0.4" />
      <circle cx="140" cy="120" r="5" fill="white" fillOpacity="0.55" />
      {/* output nodes */}
      <circle cx="208" cy="60" r="14" fill="white" fillOpacity="0.5" />
      <circle cx="208" cy="60" r="6" fill="white" fillOpacity="0.65" />
      <circle cx="208" cy="100" r="14" fill="white" fillOpacity="0.5" />
      <circle cx="208" cy="100" r="6" fill="white" fillOpacity="0.65" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   14 Cloud & DevOps — cloud icon + CI/CD pipeline steps
───────────────────────────────────────────────────────────────────── */
export function CloudDevOpsIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <Blob cx={240} cy={138} r={68} />
      <Blob cx={18} cy={18} r={36} />
      {/* cloud */}
      <path d="M80 88 Q80 62 106 62 Q110 44 132 44 Q158 44 162 62 Q184 64 184 88 Q184 108 162 108 L100 108 Q80 108 80 88Z" fill="white" fillOpacity="0.48" />
      {/* rain / deploy arrows */}
      <line x1="108" y1="116" x2="108" y2="138" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.45" />
      <line x1="132" y1="116" x2="132" y2="138" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.45" />
      <line x1="156" y1="116" x2="156" y2="138" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.45" />
      <polygon points="108,140 104,134 112,134" fill="white" fillOpacity="0.4" />
      <polygon points="132,140 128,134 136,134" fill="white" fillOpacity="0.4" />
      <polygon points="156,140 152,134 160,134" fill="white" fillOpacity="0.4" />
      {/* pipeline steps */}
      <rect x="200" y="30" width="52" height="20" rx="6" fill="white" fillOpacity="0.38" />
      <rect x="206" y="36" width="32" height="8" rx="3" fill="white" fillOpacity="0.55" />
      <line x1="226" y1="50" x2="226" y2="62" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <rect x="200" y="62" width="52" height="20" rx="6" fill="white" fillOpacity="0.32" />
      <rect x="206" y="68" width="32" height="8" rx="3" fill="white" fillOpacity="0.45" />
      <line x1="226" y1="82" x2="226" y2="94" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <rect x="200" y="94" width="52" height="20" rx="6" fill="white" fillOpacity="0.26" />
      <rect x="206" y="100" width="32" height="8" rx="3" fill="white" fillOpacity="0.38" />
      <line x1="226" y1="114" x2="226" y2="126" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <rect x="200" y="126" width="52" height="20" rx="6" fill="white" fillOpacity="0.22" />
      <rect x="206" y="132" width="32" height="8" rx="3" fill="white" fillOpacity="0.32" />
    </svg>
  );
}

/* ── Lookup map ─────────────────────────────────────────────────────── */
export const serviceIllustrations: Record<string, () => React.JSX.Element> = {
  "custom-software-development": CustomSoftwareIllustration,
  "web-development": WebDevIllustration,
  "mobile-app-development": MobileAppIllustration,
  "saas-development": SaaSIllustration,
  "ui-ux-design": UIUXIllustration,
  "brand-identity": BrandIdentityIllustration,
  "graphic-design": GraphicDesignIllustration,
  "digital-product-design": DigitalProductIllustration,
  "digital-marketing": DigitalMarketingIllustration,
  "seo-content": SEOIllustration,
  "social-media-marketing": SocialMediaIllustration,
  "ecommerce-solutions": EcommerceIllustration,
  "ai-automation": AIAutomationIllustration,
  "cloud-devops": CloudDevOpsIllustration,
};
