import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs, servicesData } from "@/lib/services-data";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Heaps Lab`,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="bg-background">

      {/* ── HERO */}
      <section className="relative w-full bg-[#070C10] pt-[calc(68px+5rem)] pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-3xl" />

        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
                <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white/60">{service.title}</span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#E01F59]/15 border border-[#E01F59]/20 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-[#E01F59]" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
                {service.title}
              </h1>
              <p className="text-xl text-[#E01F59] font-semibold mb-5">{service.tagline}</p>
              <p className="text-base text-white/60 leading-relaxed max-w-xl mb-10">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors duration-200"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:max-w-xs lg:ml-auto">
              {service.heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                {service.whatWeDo.heading}
              </h2>
              <p className="text-base text-foreground/60 leading-relaxed">{service.whatWeDo.body}</p>
            </div>
            <div className="flex flex-col gap-3">
              {service.whatWeDo.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E01F59] shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/70">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS */}
      <section className="w-full py-20 md:py-28 bg-[#F7F5F9]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Our Offerings</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">What&apos;s included.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((offering, i) => (
              <div key={offering.title} className="bg-white rounded-2xl p-7 border border-black/5 hover:border-[#E01F59]/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-9 h-9 rounded-xl bg-[#E01F59]/8 flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-[#E01F59]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-[#E01F59] transition-colors duration-200">{offering.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">Our process.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="flex flex-col gap-4">
                <span className="text-4xl font-bold text-[#E01F59]/20 leading-none">{step.step}</span>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK */}
      <section className="w-full py-20 md:py-28 bg-[#070C10]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Tools & Technologies</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">The stack we use.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70 hover:border-[#E01F59]/40 hover:text-white transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Why Heaps Lab</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">What makes us different.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.whyUs.map((item) => (
              <div key={item.title} className="flex gap-5 p-7 rounded-2xl bg-[#F7F5F9] border border-black/5 hover:border-[#E01F59]/20 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#E01F59] shrink-0 mt-2" />
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES */}
      <section className="w-full py-20 md:py-28 bg-[#F7F5F9]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Explore More</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">Other services.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => {
              const RelIcon = s.icon;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col gap-4 p-7 bg-white rounded-2xl border border-black/5 hover:border-[#E01F59]/20 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#E01F59]/8 flex items-center justify-center">
                    <RelIcon className="w-5 h-5 text-[#E01F59]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-[#E01F59] transition-colors duration-200 mb-1">{s.title}</h3>
                    <p className="text-sm text-foreground/50">{s.tagline}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-[#E01F59] transition-colors duration-200 mt-auto" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="w-full py-20 md:py-28 bg-[#070C10]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Ready to start?</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
            Let&apos;s build something great together.
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto mb-10">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a clear plan and honest advice.
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
