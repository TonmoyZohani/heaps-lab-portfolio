import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Heaps Lab",
  description: "Get in touch with Heaps Lab. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="bg-background" style={{ backgroundImage: "linear-gradient(to bottom, #070C10 260px, transparent 260px)", backgroundRepeat: "no-repeat" }}>
      {/* Page hero */}
      <section className="w-full bg-[#070C10] pt-[calc(68px+4rem)] pb-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Let&apos;s Build Something<br />
            <span className="text-[#E01F59]">Great Together.</span>
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-xl">
            Tell us about your project, your goals, and what you&apos;re trying to solve. We&apos;ll get back to you within 24 hours with honest advice and a clear plan.
          </p>
        </div>
      </section>

      {/* Contact form section */}
      <ContactSection />
    </main>
  );
}
