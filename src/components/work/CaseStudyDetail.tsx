import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/lib/work-data";

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <main className="bg-background">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#070C10] pt-[calc(68px+4rem)] pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white/70 transition-colors">Work</Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1">{study.title}</span>
          </div>

          {/* Industries */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {study.industries.map((ind, i) => (
              <span key={ind} className="flex items-center gap-2">
                <span className="text-[#E01F59] text-xs font-bold uppercase tracking-widest">{ind}</span>
                {i < study.industries.length - 1 && (
                  <span className="text-white/20 text-xs">·</span>
                )}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6 max-w-3xl">
            {study.title}
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-2xl mb-10">
            {study.summary}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Client</p>
              <p className="text-sm font-semibold text-white/80">{study.client}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Year</p>
              <p className="text-sm font-semibold text-white/80">{study.year}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Services</p>
              <p className="text-sm font-semibold text-white/80">{study.services.join(", ")}</p>
            </div>
            {study.liveUrl && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Live</p>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E01F59] hover:underline"
                >
                  View site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 -mt-10 relative z-10 mb-20">
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* ── CHALLENGE ────────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 mb-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#E01F59] mb-2">The Challenge</p>
            <h2 className="text-2xl font-bold text-foreground leading-snug">What needed solving</h2>
          </div>
          <p className="text-base text-foreground/60 leading-relaxed pt-1">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="border-t border-foreground/8 mb-20" />
      </div>

      {/* ── APPROACH ─────────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 mb-20">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#E01F59] mb-2">Our Approach</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-12">
          How we solved it
        </h2>

        <div className="flex flex-col gap-10">
          {study.approach.map((section, i) => (
            <div key={section.heading} className="grid lg:grid-cols-[60px_1fr] gap-6">
              {/* Step number */}
              <div className="w-10 h-10 rounded-xl bg-[#E01F59]/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[#E01F59]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{section.heading}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ── RESULTS ──────────────────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 mb-20">
        <div className="rounded-2xl bg-[#F7F5F9] p-8 md:p-12">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#E01F59] mb-2">Results</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What we delivered</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.results.map((result) => (
              <div key={result} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E01F59] shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70 leading-relaxed">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      {study.testimonial && (
        <section className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 mb-20">
          <div className="rounded-2xl border border-foreground/8 bg-card p-8 md:p-12">
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-6 max-w-3xl">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E01F59]/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[#E01F59]">
                  {study.testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{study.testimonial.author}</p>
                <p className="text-xs text-foreground/45">{study.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#070C10] py-20 md:py-28">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">
            Start a project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
            Want results like these for your business?
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto mb-10">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
