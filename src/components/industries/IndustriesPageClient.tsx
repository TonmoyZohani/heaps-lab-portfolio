import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries-data";

/* ── Industry card ───────────────────────────────────────────────── */
function IndustryCard({ industry }: { industry: (typeof industries)[number] }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-foreground/8 bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#E01F59]/8 flex items-center justify-center text-2xl mb-6 group-hover:bg-[#E01F59]/15 transition-colors duration-300">
        {industry.icon}
      </div>

      {/* Name & tagline */}
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E01F59] mb-2">
        {industry.tagline}
      </p>
      <h3 className="text-xl font-bold text-foreground leading-snug mb-3">
        {industry.name}
      </h3>
      <p className="text-sm text-foreground/55 leading-relaxed mb-6 flex-1">
        {industry.description}
      </p>

      {/* Services tags */}
      <div className="flex flex-wrap gap-2">
        {industry.services.map((s) => (
          <span
            key={s}
            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-foreground/5 text-foreground/50"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────────── */
export default function IndustriesPageClient() {
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
            <span className="text-white/60">Industries</span>
          </div>

          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">
            Industries we serve
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Built for the sectors that matter most.
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-2xl mb-10">
            We don&apos;t build generic software. Every industry has its own constraints, language, and user expectations — and we build to match.
          </p>

          {/* Industry pills */}
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind.slug}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/60"
              >
                <span>{ind.icon}</span>
                {ind.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ──────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="bg-[#070C10] py-20 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-3">
              Don&apos;t see your industry?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-xl">
              We&apos;ve worked across more sectors than we list here.
            </h2>
            <p className="text-sm text-white/45 mt-3 max-w-lg leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll tell you how we can help.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              View our work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
