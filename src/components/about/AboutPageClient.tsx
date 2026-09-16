import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Users, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-driven",
    description: "We build software that solves real problems, not just technology for technology's sake.",
  },
  {
    icon: Users,
    title: "Collaboration first",
    description: "Your business expertise combined with our technical knowledge creates the best outcomes.",
  },
  {
    icon: Zap,
    title: "Speed & quality",
    description: "Fast delivery doesn't mean cutting corners. We ship quickly without compromising on quality.",
  },
  {
    icon: Heart,
    title: "Built to last",
    description: "We design systems that scale with your business and stand the test of time.",
  },
];

const team = [
  {
    name: "Strategy & Planning",
    description: "Defining project scope, timelines, and success metrics before writing a single line of code.",
  },
  {
    name: "Design & Development",
    description: "Building interfaces people love to use and backends that handle real-world traffic.",
  },
  {
    name: "Testing & Quality",
    description: "Catching issues before they reach production, ensuring reliability at every stage.",
  },
  {
    name: "Launch & Support",
    description: "Deploying with confidence and providing ongoing support as your product evolves.",
  },
];

export default function AboutPageClient() {
  return (
    <main className="bg-background min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#070C10] pt-[calc(68px+4rem)] pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E01F59]/3 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">About</span>
          </div>

          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">
            About Heaps Lab
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-4xl">
            A technology studio building digital products for ambitious businesses.
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-2xl">
            Based in Dhaka, we bring strategy, design, and development together under one roof. 
            We partner with businesses ready to move fast, think clearly, and build something that lasts.
          </p>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image/Visual */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#070C10] to-[#0A0F14]">
            <Image
              src="/images/heaps_lab_logo_dark.png"
              alt="Heaps Lab"
              fill
              className="object-contain p-16"
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#E01F59] mb-4">
              Our story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              Built by developers who understand business.
            </h2>
            <div className="space-y-4 text-base text-foreground/60 leading-relaxed">
              <p>
                Heaps Lab started with a simple observation: too many businesses were struggling 
                with software that didn't fit their needs. Agencies built generic solutions. 
                Freelancers lacked structure. Internal teams moved too slowly.
              </p>
              <p>
                We saw an opportunity to do things differently — to combine the speed of a lean 
                team with the expertise of seasoned developers, designers, and strategists. 
                The result is a studio that understands both technology and business.
              </p>
              <p>
                Today, we work with startups, SMEs, and established companies across industries, 
                helping them build digital products that actually move their business forward.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────── */}
      <section className="bg-[#070C10] py-20 md:py-28">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E01F59] mb-4">
              What drives us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
              How we work and what we stand for.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E01F59]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#E01F59]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 py-20 md:py-28">
        
        <div className="mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E01F59] mb-4">
            Our approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-2xl">
            From idea to launch, we handle it all.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((phase, idx) => (
            <div
              key={phase.name}
              className="flex gap-5 p-7 rounded-2xl border border-foreground/8 bg-card hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-3xl font-bold text-[#E01F59]/20 shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {phase.name}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────── */}
      <section className="bg-[#070C10] py-20 md:py-28">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#E01F59] to-[#b91947] p-12 md:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-4">
                Ready to start?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Let's build something great together.
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-8">
                Tell us about your project, and we'll show you how we can help turn your idea into a product people actually use.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#E01F59] text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
                >
                  View our work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
