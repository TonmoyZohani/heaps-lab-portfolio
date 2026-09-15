"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  User, Building2, Mail, Wrench, DollarSign,
  AlignLeft, Send, Phone,
} from "lucide-react";

const services = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "SaaS Development",
  "UI/UX Design",
  "Brand Identity",
  "Graphic Design",
  "Digital Marketing",
  "SEO & Content",
  "E-commerce Solutions",
  "AI & Automation",
  "Cloud & DevOps",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

/* Reusable input wrapper */
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground/70">
        {label} {required && <span className="text-[#E01F59]">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputBase =
  "w-full flex items-center gap-2.5 border border-foreground/12 rounded-xl px-4 py-2.5 bg-background text-sm text-foreground placeholder:text-foreground/30 focus-within:border-[#E01F59] transition-colors duration-200";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-[#D6DCE1] py-20 md:py-28 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#E01F59]/6 -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#E01F59]/6 translate-x-1/3 translate-y-1/3 blur-2xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-14 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-8">

            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#E01F59]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E01F59]">
                Get in Touch
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Have an Idea?
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#E01F59] leading-tight">
                Let&apos;s Make it Real.
              </h2>
              <p className="mt-4 text-sm text-foreground/55 leading-relaxed max-w-xs">
                Tell us what you&apos;re building, creating, or trying to solve, we&apos;ll
                discuss your goals, recommend the right approach, and define the next
                steps together.
              </p>
            </div>

            {/* Logo card */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-foreground/5 border border-foreground/8">
                <Image
                  src="/images/heaps_lab_logo_dark.png"
                  alt="Heaps Lab"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Heaps Lab</p>
                <p className="text-xs text-foreground/50">Build. Innovate. Grow.</p>
                <a
                  href="mailto:hello@heapslab.io"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E01F59] font-semibold mt-0.5 hover:underline"
                >
                  <Mail className="w-3 h-3" />
                  hello@heapslab.io
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-foreground/10" />

            {/* Addresses */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-2.5">
                <span className="text-lg mt-0.5" aria-label="United States">🇺🇸</span>
                <div>
                  <p className="text-sm font-bold text-foreground">United States</p>
                  <p className="text-xs text-foreground/50 leading-snug mt-0.5">
                    75-77 King Street, CT 06010<br />Farmington, USA
                  </p>
                  <a
                    href="tel:+16469601891"
                    className="inline-flex items-center gap-1 text-xs text-[#E01F59] font-semibold mt-1 hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    +1 860-676-4957
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-lg mt-0.5" aria-label="Bangladesh">🇧🇩</span>
                <div>
                  <p className="text-sm font-bold text-foreground">Bangladesh</p>
                  <p className="text-xs text-foreground/50 leading-snug mt-0.5">
                    Mohammadpur, Dhaka 1207
                  </p>
                  <a
                    href="tel:+8801956380776"
                    className="inline-flex items-center gap-1 text-xs text-[#E01F59] font-semibold mt-1 hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    +880 1792-52 96 78
                  </a>
                </div>
              </div>
            </div>

            {/* Book a call */}
            <p className="text-xs text-foreground/45">
              Not interested in filling out a form?{" "}
              <Link href="/contact" className="text-[#E01F59] font-semibold hover:underline">
                Book a 30 Mins Session →
              </Link>
            </p>
          </div>

          {/* ── Right: form card ── */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-foreground/6">

            {/* Form header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#E01F59]/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#E01F59]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                  Send us a Message
                </p>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  Let&apos;s Talk About Your Project
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <span className="text-5xl">🎉</span>
                <h3 className="text-2xl font-bold text-foreground">Inquiry sent!</h3>
                <p className="text-sm text-foreground/50 max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Full name */}
                <Field label="Full Name" required>
                  <div className={inputBase}>
                    <User className="w-4 h-4 text-foreground/30 shrink-0" />
                    <input
                      type="text"
                      placeholder="John Cooper"
                      required
                      className="flex-1 bg-transparent outline-none placeholder:text-foreground/30 text-foreground"
                    />
                  </div>
                </Field>

                {/* Company + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company Name">
                    <div className={inputBase}>
                      <Building2 className="w-4 h-4 text-foreground/30 shrink-0" />
                      <input
                        type="text"
                        placeholder="Ex. Tech Inc"
                        className="flex-1 bg-transparent outline-none placeholder:text-foreground/30 text-foreground"
                      />
                    </div>
                  </Field>
                  <Field label="Email" required>
                    <div className={inputBase}>
                      <Mail className="w-4 h-4 text-foreground/30 shrink-0" />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="flex-1 bg-transparent outline-none placeholder:text-foreground/30 text-foreground"
                      />
                    </div>
                  </Field>
                </div>

                {/* Service + Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Service Required" required>
                    <div className={inputBase}>
                      <Wrench className="w-4 h-4 text-foreground/30 shrink-0" />
                      <select
                        required
                        defaultValue=""
                      className="flex-1 bg-transparent outline-none text-foreground/60 cursor-pointer appearance-none"
                      >
                        <option value="" disabled>Select Your Service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </Field>
                  <Field label="Project Budget" required>
                    <div className={inputBase}>
                      <DollarSign className="w-4 h-4 text-foreground/30 shrink-0" />
                      <select
                        required
                        defaultValue=""
                        className="flex-1 bg-transparent outline-none text-foreground/60 cursor-pointer appearance-none"
                      >
                        <option value="" disabled>Select Your Range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </Field>
                </div>

                {/* Project details */}
                <Field label="Project Details" required>
                  <div className={`${inputBase} items-start`}>
                    <AlignLeft className="w-4 h-4 text-foreground/30 shrink-0 mt-0.5" />
                    <textarea
                      placeholder="Tell us more about your idea..."
                      required
                      rows={4}
                      className="flex-1 bg-transparent outline-none placeholder:text-foreground/30 text-foreground resize-none"
                    />
                  </div>
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-center gap-2 bg-[#070C10] hover:bg-[#E01F59] text-white text-sm font-semibold py-3.5 rounded-xl transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
