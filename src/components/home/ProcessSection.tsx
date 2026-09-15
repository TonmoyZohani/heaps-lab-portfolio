import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─── SVG Illustrations ───────────────────────────────────────────────────── */

function DiscoveryIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* bg blobs */}
      <circle cx="270" cy="150" r="80" fill="#7C3AED" fillOpacity="0.12" />
      <circle cx="30" cy="30" r="50" fill="#7C3AED" fillOpacity="0.08" />
      {/* browser card */}
      <rect x="60" y="30" width="180" height="124" rx="12" fill="white" fillOpacity="0.7" />
      <rect x="60" y="30" width="180" height="26" rx="12" fill="white" fillOpacity="0.9" />
      <circle cx="78" cy="43" r="4.5" fill="#EF4444" fillOpacity="0.6" />
      <circle cx="93" cy="43" r="4.5" fill="#FBBF24" fillOpacity="0.6" />
      <circle cx="108" cy="43" r="4.5" fill="#22C55E" fillOpacity="0.6" />
      {/* content lines */}
      <rect x="76" y="68" width="80" height="7" rx="3" fill="#C4B5FD" fillOpacity="0.7" />
      <rect x="76" y="82" width="120" height="5" rx="2" fill="#DDD6FE" fillOpacity="0.6" />
      <rect x="76" y="93" width="100" height="5" rx="2" fill="#DDD6FE" fillOpacity="0.5" />
      {/* magnifier */}
      <circle cx="188" cy="108" r="28" stroke="#7C3AED" strokeWidth="6" fill="white" fillOpacity="0.5" />
      <line x1="210" y1="130" x2="228" y2="148" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" />
      <line x1="178" y1="100" x2="198" y2="100" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="178" y1="109" x2="194" y2="109" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="178" y1="118" x2="196" y2="118" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
      {/* sparkles */}
      <circle cx="56" cy="110" r="5" fill="#A78BFA" fillOpacity="0.5" />
      <circle cx="270" cy="55" r="7" fill="#C4B5FD" fillOpacity="0.5" />
      <circle cx="42" cy="140" r="4" fill="#DDD6FE" fillOpacity="0.6" />
    </svg>
  );
}

function WireframeIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="280" cy="155" r="80" fill="#059669" fillOpacity="0.10" />
      <circle cx="20" cy="20" r="45" fill="#059669" fillOpacity="0.07" />
      {/* phone */}
      <rect x="118" y="20" width="60" height="110" rx="10" fill="white" fillOpacity="0.75" stroke="#6EE7B7" strokeWidth="1.5" />
      <rect x="126" y="34" width="44" height="72" rx="5" fill="#D1FAE5" fillOpacity="0.6" />
      <rect x="129" y="37" width="38" height="10" rx="2" fill="#059669" fillOpacity="0.4" />
      <rect x="129" y="52" width="17" height="18" rx="2" fill="#059669" fillOpacity="0.3" />
      <rect x="150" y="52" width="17" height="8" rx="2" fill="#059669" fillOpacity="0.3" />
      <rect x="150" y="64" width="17" height="6" rx="2" fill="#059669" fillOpacity="0.2" />
      <rect x="129" y="74" width="38" height="5" rx="2" fill="#059669" fillOpacity="0.25" />
      <rect x="129" y="83" width="26" height="5" rx="2" fill="#059669" fillOpacity="0.2" />
      <circle cx="148" cy="120" r="4.5" fill="#059669" fillOpacity="0.4" />
      {/* flow connectors */}
      <rect x="50" y="62" width="54" height="36" rx="8" fill="white" fillOpacity="0.55" stroke="#6EE7B7" strokeWidth="1.5" />
      <rect x="218" y="62" width="54" height="36" rx="8" fill="white" fillOpacity="0.55" stroke="#6EE7B7" strokeWidth="1.5" />
      <path d="M104 80 C108 80 112 80 118 80" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
      <path d="M178 80 C184 80 188 80 218 80" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
      {/* lines in side boxes */}
      <rect x="58" y="74" width="36" height="5" rx="2" fill="#6EE7B7" fillOpacity="0.6" />
      <rect x="58" y="83" width="26" height="5" rx="2" fill="#6EE7B7" fillOpacity="0.4" />
      <rect x="226" y="74" width="36" height="5" rx="2" fill="#6EE7B7" fillOpacity="0.6" />
      <rect x="226" y="83" width="26" height="5" rx="2" fill="#6EE7B7" fillOpacity="0.4" />
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="270" cy="145" r="80" fill="#D97706" fillOpacity="0.10" />
      <circle cx="25" cy="25" r="45" fill="#D97706" fillOpacity="0.07" />
      {/* palette */}
      <ellipse cx="155" cy="95" rx="62" ry="54" fill="white" fillOpacity="0.55" />
      <circle cx="130" cy="74" r="12" fill="#F87171" fillOpacity="0.75" />
      <circle cx="162" cy="67" r="12" fill="#FBBF24" fillOpacity="0.8" />
      <circle cx="185" cy="87" r="12" fill="#34D399" fillOpacity="0.75" />
      <circle cx="178" cy="115" r="12" fill="#60A5FA" fillOpacity="0.75" />
      <circle cx="150" cy="124" r="12" fill="#A78BFA" fillOpacity="0.75" />
      <circle cx="124" cy="110" r="12" fill="#F472B6" fillOpacity="0.75" />
      {/* thumb hole */}
      <circle cx="170" cy="100" r="9" fill="white" fillOpacity="0.8" />
      {/* brush */}
      <rect x="208" y="30" width="9" height="52" rx="5" fill="white" fillOpacity="0.8" transform="rotate(35 208 30)" />
      <ellipse cx="232" cy="42" rx="7" ry="12" fill="#D97706" fillOpacity="0.85" transform="rotate(35 232 42)" />
      {/* sparkles */}
      <circle cx="60" cy="55" r="5" fill="#FDE68A" fillOpacity="0.7" />
      <circle cx="280" cy="50" r="7" fill="#FDE68A" fillOpacity="0.5" />
    </svg>
  );
}

function DevelopmentIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="272" cy="148" r="80" fill="#0284C7" fillOpacity="0.10" />
      <circle cx="22" cy="22" r="45" fill="#0284C7" fillOpacity="0.07" />
      {/* monitor */}
      <rect x="55" y="24" width="188" height="120" rx="12" fill="white" fillOpacity="0.65" />
      <rect x="67" y="36" width="164" height="90" rx="7" fill="#0284C7" fillOpacity="0.12" />
      {/* code lines */}
      <rect x="77" y="50" width="36" height="6" rx="2" fill="#38BDF8" fillOpacity="0.9" />
      <rect x="118" y="50" width="60" height="6" rx="2" fill="#BAE6FD" fillOpacity="0.6" />
      <rect x="88" y="64" width="24" height="6" rx="2" fill="#7DD3FC" fillOpacity="0.8" />
      <rect x="116" y="64" width="72" height="6" rx="2" fill="#BAE6FD" fillOpacity="0.5" />
      <rect x="77" y="78" width="48" height="6" rx="2" fill="#38BDF8" fillOpacity="0.7" />
      <rect x="130" y="78" width="36" height="6" rx="2" fill="#BAE6FD" fillOpacity="0.5" />
      <rect x="88" y="92" width="66" height="6" rx="2" fill="#BAE6FD" fillOpacity="0.4" />
      <rect x="77" y="106" width="44" height="6" rx="2" fill="#7DD3FC" fillOpacity="0.75" />
      {/* code tag badge */}
      <rect x="196" y="96" width="42" height="28" rx="8" fill="#0284C7" fillOpacity="0.18" />
      <text x="204" y="116" fontSize="16" fill="#0EA5E9" fillOpacity="0.8" fontFamily="monospace" fontWeight="bold">{`</>`}</text>
      {/* stand */}
      <rect x="140" y="144" width="36" height="10" rx="5" fill="white" fillOpacity="0.55" />
      <rect x="152" y="138" width="12" height="10" rx="3" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

function QAIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="270" cy="150" r="80" fill="#7C3AED" fillOpacity="0.10" />
      <circle cx="22" cy="22" r="45" fill="#7C3AED" fillOpacity="0.07" />
      {/* checklist card */}
      <rect x="70" y="22" width="160" height="130" rx="12" fill="white" fillOpacity="0.65" />
      {/* header bar */}
      <rect x="70" y="22" width="160" height="26" rx="12" fill="#A78BFA" fillOpacity="0.25" />
      <circle cx="86" cy="35" r="5" fill="#A78BFA" fillOpacity="0.6" />
      {/* check items */}
      {[58, 82, 106].map((y) => (
        <g key={y}>
          <rect x="84" y={y} width="18" height="18" rx="5" fill="#7C3AED" fillOpacity="0.18" />
          <polyline points={`87,${y + 9} ${91},${y + 13} ${99},${y + 5}`} stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="108" y={y + 4} width="100" height="8" rx="3" fill="#DDD6FE" fillOpacity="0.7" />
        </g>
      ))}
      {/* unchecked */}
      <rect x="84" y="130" width="18" height="18" rx="5" fill="#EDE9FE" fillOpacity="0.5" />
      <rect x="108" y="134" width="60" height="8" rx="3" fill="#EDE9FE" fillOpacity="0.5" />
      {/* bug icon */}
      <circle cx="254" cy="72" r="22" fill="#A78BFA" fillOpacity="0.18" />
      <circle cx="254" cy="72" r="12" fill="#7C3AED" fillOpacity="0.25" />
      <circle cx="254" cy="72" r="6" fill="#7C3AED" fillOpacity="0.5" />
      <line x1="254" y1="50" x2="254" y2="60" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <line x1="254" y1="84" x2="254" y2="94" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <line x1="232" y1="72" x2="242" y2="72" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <line x1="266" y1="72" x2="276" y2="72" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HandoverIllustration() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="272" cy="148" r="80" fill="#2563EB" fillOpacity="0.10" />
      <circle cx="22" cy="22" r="45" fill="#2563EB" fillOpacity="0.07" />
      {/* rocket */}
      <ellipse cx="160" cy="82" rx="22" ry="40" fill="#BFDBFE" fillOpacity="0.8" />
      <ellipse cx="160" cy="82" rx="14" ry="28" fill="#2563EB" fillOpacity="0.35" />
      <circle cx="160" cy="74" r="9" fill="white" fillOpacity="0.75" />
      {/* fins */}
      <polygon points="138,110 148,90 148,115" fill="#93C5FD" fillOpacity="0.7" />
      <polygon points="172,110 172,90 182,110" fill="#93C5FD" fillOpacity="0.7" />
      {/* flame */}
      <ellipse cx="160" cy="126" rx="10" ry="16" fill="#FBBF24" fillOpacity="0.8" />
      <ellipse cx="160" cy="130" rx="6" ry="10" fill="#F97316" fillOpacity="0.7" />
      {/* clouds / smoke */}
      <ellipse cx="130" cy="138" rx="18" ry="12" fill="white" fillOpacity="0.45" />
      <ellipse cx="190" cy="142" rx="15" ry="10" fill="white" fillOpacity="0.45" />
      {/* chart card */}
      <rect x="210" y="32" width="80" height="60" rx="10" fill="white" fillOpacity="0.65" />
      <polyline points="220,80 234,62 248,70 262,48 278,56" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* sparkles */}
      <circle cx="52" cy="60" r="6" fill="#BFDBFE" fillOpacity="0.7" />
      <circle cx="46" cy="110" r="4" fill="#93C5FD" fillOpacity="0.6" />
      <circle cx="278" cy="115" r="5" fill="#BFDBFE" fillOpacity="0.6" />
    </svg>
  );
}

/* ─── Step data ───────────────────────────────────────────────────────────── */

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We get under the skin of your business — your goals, your users, your market. The output is a clear strategic direction, not a vague mood board.",
    bg: "bg-[#D4C9FF]",
    numberColor: "text-[#7C3AED] bg-[#BFB2F5]",
    linkColor: "text-[#7C3AED] hover:text-[#6D28D9]",
    href: "/services",
    Illustration: DiscoveryIllustration,
  },
  {
    number: "02",
    title: "User Flows & Wireframes",
    description:
      "Before a single pixel is designed, we map every screen and decision point. Structure first — so the experience feels effortless when it's built.",
    bg: "bg-[#B2EDD6]",
    numberColor: "text-[#059669] bg-[#6EE7B7]",
    linkColor: "text-[#059669] hover:text-[#047857]",
    href: "/services",
    Illustration: WireframeIllustration,
  },
  {
    number: "03",
    title: "UI Design & Visual Identity",
    description:
      "Wireframes become interfaces that look and feel unmistakably yours. We sweat the details — typography, colour, motion — so your brand lands with impact.",
    bg: "bg-[#FDDFA0]",
    numberColor: "text-[#D97706] bg-[#FBD060]",
    linkColor: "text-[#D97706] hover:text-[#B45309]",
    href: "/services",
    Illustration: DesignIllustration,
  },
  {
    number: "04",
    title: "Engineering & Build",
    description:
      "Clean code, modern stack, zero shortcuts. We turn designs into fast, accessible, production-ready products that scale with your ambitions.",
    bg: "bg-[#B6E4FA]",
    numberColor: "text-[#0284C7] bg-[#7DD3FC]",
    linkColor: "text-[#0284C7] hover:text-[#0369A1]",
    href: "/services",
    Illustration: DevelopmentIllustration,
  },
  {
    number: "05",
    title: "Testing & Launch",
    description:
      "We stress-test across devices, browsers, and edge cases before anything ships. You get a confident launch, not a crossed-fingers one.",
    bg: "bg-[#D4C9FF]",
    numberColor: "text-[#7C3AED] bg-[#BFB2F5]",
    linkColor: "text-[#7C3AED] hover:text-[#6D28D9]",
    href: "/services",
    Illustration: QAIllustration,
  },
  {
    number: "06",
    title: "Handover & Growth Support",
    description:
      "Launch is the beginning, not the end. We hand over everything you need to own it, and stay close to help you grow, iterate, and improve.",
    bg: "bg-[#BFDBFE]",
    numberColor: "text-[#2563EB] bg-[#93C5FD]",
    linkColor: "text-[#2563EB] hover:text-[#1D4ED8]",
    href: "/services",
    Illustration: HandoverIllustration,
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function ProcessSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
            From brief to launch — no guesswork.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Our Process, <span className="text-[#E01F59]">Uncovered.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => {
            const { Illustration } = step;
            return (
              <div
                key={step.number}
                className="group flex flex-col rounded-2xl overflow-hidden border border-foreground/8 bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Illustration area */}
                <div className={`relative w-full h-48 ${step.bg} overflow-hidden`}>
                  {/* Step number pill */}
                  <span className={`absolute top-4 left-4 z-10 text-xs font-bold px-2.5 py-1 rounded-full ${step.numberColor}`}>
                    {step.number}
                  </span>
                  <div className="absolute inset-0">
                    <Illustration />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-1 p-6 gap-2.5">
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
