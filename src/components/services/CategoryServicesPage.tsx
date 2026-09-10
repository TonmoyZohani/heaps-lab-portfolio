import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServiceData, ServiceCategory } from "@/lib/services-data";
import { serviceIllustrations } from "./ServiceIllustrations";

interface Props {
  category: ServiceCategory;
  services: ServiceData[];
  meta: { label: string; description: string };
}

const cardColors: Record<ServiceCategory, string[]> = {
  development: [
    "bg-[#C4B5FD]", "bg-[#BAE6FD]", "bg-[#A7F3D0]",
    "bg-[#FDE68A]", "bg-[#C4B5FD]", "bg-[#BAE6FD]", "bg-[#FDE68A]",
  ],
  design: [
    "bg-[#C4B5FD]", "bg-[#FDE68A]", "bg-[#A7F3D0]", "bg-[#BFDBFE]",
  ],
  marketing: [
    "bg-[#FDE68A]", "bg-[#A7F3D0]", "bg-[#BAE6FD]",
  ],
};

export default function CategoryServicesPage({ category, services, meta }: Props) {
  const colors = cardColors[category];

  return (
    <main className="bg-background">

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

      {/* ── ILLUSTRATED CARD GRID */}
      <section className="w-full py-20 md:py-28 bg-[#F7F5F9]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => {
              const Illustration = serviceIllustrations[service.slug];
              const bg = colors[idx % colors.length];
              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="flex flex-col gap-5 group cursor-pointer"
                >
                  {/* Card */}
                  <div className={`relative w-full h-52 rounded-2xl ${bg} overflow-hidden`} aria-hidden="true">
                    <span className="absolute top-4 left-5 text-xs font-bold text-foreground/40 tracking-widest z-10">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-0">
                      {Illustration ? <Illustration /> : null}
                    </div>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#E01F59] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">
                      {service.heroDescription.slice(0, 110)}...
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
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
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
                  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
                  "linear-gradient(135deg, #fd7043 0%, #ff8a65 100%)",
                ];
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {service.offerings.map((offering, i) => (
                      <div
                        key={offering.title}
                        className="relative rounded-2xl p-6 overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                        style={{ background: offeringGradients[i % offeringGradients.length] }}
                      >
                        {/* Decorative blob */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/15 pointer-events-none" />
                        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10 pointer-events-none" />
                        <span className="relative text-xs font-bold text-white/50 mb-3 block tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                        <h4 className="relative text-sm font-bold text-white mb-2">{offering.title}</h4>
                        <p className="relative text-xs text-white/75 leading-relaxed">{offering.description}</p>
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-black/10 bg-transparent text-xs font-medium text-foreground/50 hover:border-[#E01F59]/30 hover:text-foreground/80 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
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
