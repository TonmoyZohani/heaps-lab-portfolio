"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Replace with your actual form submission logic
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-[#D6DCE1] py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* ── Left: heading + person ── */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
                Ready to build something great?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Have an Idea? Let&apos;s <span className="text-[#E01F59]">Make it Real.</span>
              </h2>
              <p className="mt-5 text-base text-foreground/50 leading-relaxed max-w-sm">
                Tell us what you&apos;re building, improving, or trying to solve. We&apos;ll
                discuss your goals, recommend the right approach, and define the
                next steps together.
              </p>
            </div>

            {/* Person card */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-foreground/5">
                <Image
                  src="/images/heaps_lab_logo_dark.png"
                  alt="Heaps Lab"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-foreground text-base">Heaps Lab</p>
                <p className="text-sm text-foreground/50">Digital Studio</p>
                <p className="text-sm text-[#E01F59] mt-0.5">hello@heapslab.io</p>
              </div>
            </div>

            {/* Book a call */}
            <p className="text-sm text-foreground/50">
              Not interested in filling out a form?{" "}
              <Link
                href="/contact"
                className="text-[#E01F59] font-semibold hover:underline"
              >
                Book a Call Directly →
              </Link>
            </p>
          </div>

          {/* ── Right: form ── */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-foreground/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <span className="text-5xl">🎉</span>
                <h3 className="text-2xl font-bold text-foreground">Inquiry sent!</h3>
                <p className="text-foreground/50 max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground/70">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Cooper"
                    required
                    className="w-full border-b border-foreground/20 focus:border-[#E01F59] bg-transparent py-2 text-foreground placeholder:text-foreground/30 text-sm outline-none transition-colors duration-200"
                  />
                </div>

                {/* Company + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-foreground/70">Company Name</label>
                    <input
                      type="text"
                      placeholder="Ex. Tesla Inc"
                      className="w-full border-b border-foreground/20 focus:border-[#E01F59] bg-transparent py-2 text-foreground placeholder:text-foreground/30 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-foreground/70">Email *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full border-b border-foreground/20 focus:border-[#E01F59] bg-transparent py-2 text-foreground placeholder:text-foreground/30 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Service + Budget */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-foreground/70">Service Required *</label>
                    <select
                      required
                      defaultValue=""
                      className="w-full border-b border-foreground/20 focus:border-[#E01F59] bg-transparent py-2 text-foreground/60 text-sm outline-none transition-colors duration-200 cursor-pointer"
                    >
                      <option value="" disabled>Select Your Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-foreground/70">Project Budget *</label>
                    <select
                      required
                      defaultValue=""
                      className="w-full border-b border-foreground/20 focus:border-[#E01F59] bg-transparent py-2 text-foreground/60 text-sm outline-none transition-colors duration-200 cursor-pointer"
                    >
                      <option value="" disabled>Select Your Range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground/70">Project Details *</label>
                  <textarea
                    placeholder="Tell us more about your idea..."
                    required
                    rows={6}
                    className="w-full border-b border-foreground/20 focus:border-[#E01F59] bg-transparent py-2 text-foreground placeholder:text-foreground/30 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full bg-[#070C10] hover:bg-[#E01F59] text-white text-sm font-semibold py-4 rounded-full transition-colors duration-300"
                >
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
