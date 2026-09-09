import { Search, GitBranch, Palette, Code2, FlaskConical, Handshake } from "lucide-react";

/* ─── Per-step SVG illustrations ─────────────────────────────────────────── */

function DiscoveryIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* background blobs */}
      <circle cx="230" cy="130" r="60" fill="white" fillOpacity="0.18" />
      <circle cx="20" cy="20" r="35" fill="white" fillOpacity="0.12" />
      {/* browser / dashboard card */}
      <rect x="54" y="32" width="172" height="110" rx="10" fill="white" fillOpacity="0.5" />
      <rect x="54" y="32" width="172" height="22" rx="10" fill="white" fillOpacity="0.7" />
      <circle cx="70" cy="43" r="4" fill="#EF4444" fillOpacity="0.7" />
      <circle cx="83" cy="43" r="4" fill="#FBBF24" fillOpacity="0.7" />
      <circle cx="96" cy="43" r="4" fill="#22C55E" fillOpacity="0.7" />
      {/* magnifier */}
      <circle cx="158" cy="96" r="26" stroke="#7C3AED" strokeWidth="5" fill="white" fillOpacity="0.4" />
      <line x1="178" y1="116" x2="196" y2="134" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" />
      {/* data lines inside magnifier */}
      <line x1="146" y1="88" x2="168" y2="88" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="146" y1="96" x2="162" y2="96" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="146" y1="104" x2="164" y2="104" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
    </svg>
  );
}

function WireframeIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="240" cy="140" r="65" fill="white" fillOpacity="0.18" />
      <circle cx="15" cy="15" r="30" fill="white" fillOpacity="0.12" />
      {/* phone outline */}
      <rect x="94" y="24" width="56" height="100" rx="8" fill="white" fillOpacity="0.45" stroke="white" strokeWidth="2" />
      <rect x="100" y="38" width="44" height="62" rx="4" fill="white" fillOpacity="0.3" />
      {/* wireframe blocks */}
      <rect x="103" y="41" width="38" height="10" rx="2" fill="#059669" fillOpacity="0.5" />
      <rect x="103" y="56" width="17" height="17" rx="2" fill="#059669" fillOpacity="0.35" />
      <rect x="124" y="56" width="17" height="7" rx="2" fill="#059669" fillOpacity="0.35" />
      <rect x="124" y="67" width="17" height="6" rx="2" fill="#059669" fillOpacity="0.25" />
      <rect x="103" y="78" width="38" height="5" rx="2" fill="#059669" fillOpacity="0.3" />
      <rect x="103" y="87" width="26" height="5" rx="2" fill="#059669" fillOpacity="0.2" />
      <circle cx="122" cy="130" r="4" fill="#059669" fillOpacity="0.5" />
      {/* arrows / flow */}
      <path d="M60 70 Q80 50 90 70" stroke="white" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" markerEnd="url(#arr)" />
      <path d="M154 70 Q170 50 190 70" stroke="white" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
      <rect x="38" y="58" width="28" height="22" rx="5" fill="white" fillOpacity="0.35" />
      <rect x="192" y="58" width="28" height="22" rx="5" fill="white" fillOpacity="0.35" />
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="240" cy="130" r="65" fill="white" fillOpacity="0.18" />
      <circle cx="20" cy="18" r="30" fill="white" fillOpacity="0.12" />
      {/* palette shape */}
      <ellipse cx="140" cy="82" rx="52" ry="46" fill="white" fillOpacity="0.4" />
      <circle cx="120" cy="64" r="10" fill="#F87171" fillOpacity="0.75" />
      <circle cx="148" cy="58" r="10" fill="#FBBF24" fillOpacity="0.75" />
      <circle cx="168" cy="76" r="10" fill="#34D399" fillOpacity="0.75" />
      <circle cx="162" cy="100" r="10" fill="#60A5FA" fillOpacity="0.75" />
      <circle cx="138" cy="108" r="10" fill="#A78BFA" fillOpacity="0.75" />
      <circle cx="116" cy="96" r="10" fill="#F472B6" fillOpacity="0.75" />
      {/* thumb hole */}
      <circle cx="155" cy="88" r="8" fill="white" fillOpacity="0.6" />
      {/* brush */}
      <rect x="175" y="38" width="8" height="44" rx="4" fill="white" fillOpacity="0.7" transform="rotate(30 175 38)" />
      <ellipse cx="195" cy="48" rx="6" ry="10" fill="#D97706" fillOpacity="0.8" transform="rotate(30 195 48)" />
    </svg>
  );
}

function DevelopmentIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="240" cy="135" r="65" fill="white" fillOpacity="0.18" />
      <circle cx="18" cy="18" r="30" fill="white" fillOpacity="0.12" />
      {/* monitor */}
      <rect x="58" y="28" width="164" height="104" rx="10" fill="white" fillOpacity="0.45" />
      <rect x="68" y="38" width="144" height="78" rx="6" fill="#0284C7" fillOpacity="0.18" />
      {/* code lines */}
      <rect x="76" y="50" width="30" height="5" rx="2" fill="#38BDF8" fillOpacity="0.8" />
      <rect x="110" y="50" width="50" height="5" rx="2" fill="#F8FAFC" fillOpacity="0.5" />
      <rect x="84" y="62" width="20" height="5" rx="2" fill="#A5F3FC" fillOpacity="0.7" />
      <rect x="108" y="62" width="60" height="5" rx="2" fill="#F8FAFC" fillOpacity="0.4" />
      <rect x="76" y="74" width="40" height="5" rx="2" fill="#38BDF8" fillOpacity="0.6" />
      <rect x="120" y="74" width="30" height="5" rx="2" fill="#F8FAFC" fillOpacity="0.4" />
      <rect x="84" y="86" width="55" height="5" rx="2" fill="#F8FAFC" fillOpacity="0.35" />
      <rect x="76" y="98" width="36" height="5" rx="2" fill="#7DD3FC" fillOpacity="0.7" />
      {/* stand */}
      <rect x="126" y="132" width="28" height="8" rx="4" fill="white" fillOpacity="0.5" />
      <rect x="136" y="126" width="8" height="10" rx="2" fill="white" fillOpacity="0.4" />
      {/* brackets decoration */}
      <text x="194" y="95" fontSize="32" fill="#0284C7" fillOpacity="0.3" fontFamily="monospace" fontWeight="bold">{`>`}</text>
    </svg>
  );
}

function QAIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="238" cy="132" r="65" fill="white" fillOpacity="0.18" />
      <circle cx="20" cy="18" r="30" fill="white" fillOpacity="0.12" />
      {/* checklist card */}
      <rect x="70" y="28" width="140" height="108" rx="10" fill="white" fillOpacity="0.45" />
      {/* items */}
      {[44, 68, 92, 116].map((y, i) => (
        <g key={y}>
          <rect x="82" y={y} width="16" height="16" rx="4" fill={i < 3 ? "#10B981" : "#D1FAE5"} fillOpacity={i < 3 ? "0.8" : "0.5"} />
          {i < 3 && (
            <polyline points={`85,${y + 8} ${88},${y + 12} ${95},${y + 5}`} stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          )}
          <rect x="104" y={y + 3} width={i === 3 ? 50 : 88} height="10" rx="3" fill="#10B981" fillOpacity={i < 3 ? "0.3" : "0.15"} />
        </g>
      ))}
      {/* rocket */}
      <g transform="translate(188, 30) rotate(45)">
        <ellipse cx="0" cy="0" rx="10" ry="18" fill="#10B981" fillOpacity="0.8" />
        <polygon points="-10,12 0,26 10,12" fill="#D1FAE5" fillOpacity="0.6" />
        <circle cx="0" cy="-4" r="5" fill="white" fillOpacity="0.7" />
      </g>
    </svg>
  );
}

function HandoverIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="238" cy="132" r="65" fill="white" fillOpacity="0.18" />
      <circle cx="20" cy="18" r="30" fill="white" fillOpacity="0.12" />
      {/* two people */}
      {/* left person */}
      <circle cx="96" cy="55" r="18" fill="white" fillOpacity="0.5" />
      <path d="M68 128 Q68 96 96 96 Q124 96 124 128" fill="white" fillOpacity="0.35" />
      {/* right person */}
      <circle cx="184" cy="55" r="18" fill="white" fillOpacity="0.5" />
      <path d="M156 128 Q156 96 184 96 Q212 96 212 128" fill="white" fillOpacity="0.35" />
      {/* handshake box in middle */}
      <rect x="118" y="70" width="44" height="34" rx="8" fill="#2563EB" fillOpacity="0.25" />
      <path d="M124 87 Q140 78 156 87" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M124 93 Q140 102 156 93" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* star / sparkles */}
      <circle cx="140" cy="40" r="5" fill="#FBBF24" fillOpacity="0.8" />
      <circle cx="155" cy="30" r="3" fill="#FBBF24" fillOpacity="0.6" />
      <circle cx="126" cy="32" r="3" fill="#FBBF24" fillOpacity="0.6" />
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
    icon: Search,
    bg: "bg-[#C4B5FD]",
    iconBg: "bg-[#7C3AED]",
    Illustration: DiscoveryIllustration,
  },
  {
    number: "02",
    title: "User Flows & Wireframes",
    description:
      "Before a single pixel is designed, we map every screen and decision point. Structure first — so the experience feels effortless when it's built.",
    icon: GitBranch,
    bg: "bg-[#6EE7B7]",
    iconBg: "bg-[#059669]",
    Illustration: WireframeIllustration,
  },
  {
    number: "03",
    title: "UI Design & Visual Identity",
    description:
      "Wireframes become interfaces that look and feel unmistakably yours. We sweat the details — typography, colour, motion — so your brand lands with impact.",
    icon: Palette,
    bg: "bg-[#FDE68A]",
    iconBg: "bg-[#D97706]",
    Illustration: DesignIllustration,
  },
  {
    number: "04",
    title: "Engineering & Build",
    description:
      "Clean code, modern stack, zero shortcuts. We turn designs into fast, accessible, production-ready products that scale with your ambitions.",
    icon: Code2,
    bg: "bg-[#BAE6FD]",
    iconBg: "bg-[#0284C7]",
    Illustration: DevelopmentIllustration,
  },
  {
    number: "05",
    title: "Testing & Launch",
    description:
      "We stress-test across devices, browsers, and edge cases before anything ships. You get a confident launch, not a crossed-fingers one.",
    icon: FlaskConical,
    bg: "bg-[#A7F3D0]",
    iconBg: "bg-[#10B981]",
    Illustration: QAIllustration,
  },
  {
    number: "06",
    title: "Handover & Growth Support",
    description:
      "Launch is the beginning, not the end. We hand over everything you need to own it, and stay close to help you grow, iterate, and improve.",
    icon: Handshake,
    bg: "bg-[#BFDBFE]",
    iconBg: "bg-[#2563EB]",
    Illustration: HandoverIllustration,
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function ProcessSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
            From brief to launch — no guesswork.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Our Process, <span className="text-[#E01F59]">Uncovered.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step) => {
            const { Illustration } = step;
            return (
              <div key={step.number} className="flex flex-col gap-5">

                {/* Illustration card */}
                <div
                  className={`relative w-full h-52 rounded-2xl ${step.bg} overflow-hidden`}
                  aria-hidden="true"
                >
                  {/* Step number — top left */}
                  <span className="absolute top-4 left-5 text-xs font-bold text-foreground/40 tracking-widest z-10">
                    {step.number}
                  </span>

                  {/* Full-bleed illustration */}
                  <div className="absolute inset-0">
                    <Illustration />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
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
