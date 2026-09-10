import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServiceData, ServiceCategory } from "@/lib/services-data";

interface Props {
  category: ServiceCategory;
  services: ServiceData[];
  meta: { label: string; description: string };
}

export default function CategoryServicesPage({ category, services, meta }: Props) {

  return (
    <main className="bg-background" style={{ backgroundImage: "linear-gradient(to bottom, #070C10 280px, transparent 280px)", backgroundRepeat: "no-repeat" }}>

      {/* ── HERO */}
      <section className="relative w-full bg-[#070C10] pt-[calc(68px+5rem)] pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/60">{meta.label}</span>
          </div>
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            {meta.label}
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-2xl">
            {meta.description}
          </p>
        </div>
      </section>

      {/* ── SERVICE DETAIL SECTIONS */}
      {services.map((service, idx) => {
        const Icon = service.icon;
        const isEven = idx % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`w-full py-20 md:py-28 scroll-mt-[68px] ${isEven ? "bg-background" : "bg-[#F7F5F9]"}`}
          >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

              {/* Header */}
              <div className="flex items-start gap-5 mb-12">
                <div className="w-12 h-12 rounded-xl bg-[#E01F59]/10 border border-[#E01F59]/15 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#E01F59]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-base text-[#E01F59] font-semibold mt-1">{service.tagline}</p>
                </div>
              </div>

              {/* What we do */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.whatWeDo.heading}</h3>
                  <p className="text-base text-foreground/60 leading-relaxed">{service.whatWeDo.body}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {service.whatWeDo.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E01F59] shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offerings */}
              {(() => {
                const offeringGradients = [
                  "linear-gradient(135deg, #5e3db8 0%, #8258e0 100%)",
                  "linear-gradient(135deg, #be2980 0%, #e03464 100%)",
                  "linear-gradient(135deg, #1a72b8 0%, #2096e0 100%)",
                  "linear-gradient(135deg, #1a8466 0%, #20b088 100%)",
                  "linear-gradient(135deg, #b84880 0%, #e07020 100%)",
                  "linear-gradient(135deg, #6e3aaa 0%, #9e30b8 100%)",
                  "linear-gradient(135deg, #a86040 0%, #d07e50 100%)",
                  "linear-gradient(135deg, #2460b8 0%, #2e7ce0 100%)",
                  "linear-gradient(135deg, #c44420 0%, #e85e30 100%)",
                ];
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {service.offerings.map((offering, i) => (
                      <div
                        key={offering.title}
                        className="relative rounded-2xl p-6 overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col min-h-[140px]"
                        style={{ background: offeringGradients[i % offeringGradients.length] }}
                      >
                        {/* Decorative blob */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/15 pointer-events-none" />
                        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10 pointer-events-none" />
                        <span className="relative text-sm font-bold text-white/50 mb-3 block tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                        <h4 className="relative text-base font-bold text-white mb-2">{offering.title}</h4>
                        <p className="relative text-sm text-white/75 leading-relaxed">{offering.description}</p>
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Tech stack */}
              <div className={`rounded-2xl p-7 mb-8 ${isEven ? "bg-[#F7F5F9]" : "bg-background"}`}>
                <p className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-4">Tools & Technologies</p>
                <div className="flex flex-wrap gap-2.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-black/8 text-sm font-semibold text-foreground/70 shadow-sm hover:border-[#E01F59]/30 hover:text-[#E01F59] hover:shadow-md transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E01F59]/60 shrink-0" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Start a {service.title} Project
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </section>
        );
      })}

      {/* ── CTA */}
      <section className="w-full py-20 md:py-28 bg-[#070C10]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Ready to start?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
            Let&apos;s build something great together.
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto mb-10">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-base font-semibold px-8 py-4 rounded-full transition-colors duration-200"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
