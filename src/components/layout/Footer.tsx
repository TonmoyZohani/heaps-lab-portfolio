import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const serviceLinks = [
  { label: "Software Development", href: "/services/development" },
  { label: "Design",               href: "/services/design" },
  { label: "Marketing",            href: "/services/marketing" },
  { label: "View all services",    href: "/services" },
];

const companyLinks = [
  { label: "About",    href: "/about" },
  { label: "Work",     href: "/work" },
  { label: "Blogs",    href: "/blog" },
  { label: "Careers",  href: "/careers" },
  { label: "Contact",  href: "/contact" },
];

const workLinks = [
  { label: "Portfolio",   href: "/work" },
  { label: "Industries",  href: "/industries" },
];

const contact = {
  email: "hello@heapslab.io",
  offices: [
    {
      country: "United States",
      flag: "🇺🇸",
      address: "75-77 King Street, CT 06010, Farmington, USA",
      phone: "+1 860-676-4957",
      tel: "tel:+18606764957",
    },
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      address: "Mohammadpur, Dhaka 1207",
      phone: "+880 1953-38 07 76",
      tel: "tel:+8801953380776",
    },
  ],
};

const socials = [
  { label: "LinkedIn",   href: "https://www.linkedin.com/company/heapslab/?viewAsMember=true", icon: Linkedin },
  { label: "Facebook",   href: "https://www.facebook.com/heapslab", icon: Facebook },
  { label: "Instagram",  href: "https://instagram.com", icon: Instagram },
  { label: "X",          href: "https://x.com", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0F14] text-white">

      {/* ── Main content ── */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Col 1 – Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/heaps_lab_logo_dark.png"
                alt="Heaps Lab"
                width={130}
                height={44}
                className="object-contain h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-white/45 leading-relaxed max-w-[240px]">
              A Dhaka-based technology and creative studio: software, design, and digital solutions under one roof, for clients who plan to stick around.
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/15 hover:border-[#E01F59] hover:text-[#E01F59] flex items-center justify-center text-white/50 transition-colors duration-200"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 – Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-[#E01F59] transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-[#E01F59] transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Work */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Work
            </h4>
            <ul className="flex flex-col gap-3">
              {workLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-[#E01F59] transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 – Get in touch */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Get in touch
            </h4>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-white/60 hover:text-[#E01F59] transition-colors duration-150"
              >
                {contact.email}
              </a>

              {/* Offices */}
              {contact.offices.map((office) => (
                <div key={office.country} className="flex items-start gap-2">
                  <span className="text-base mt-0.5" aria-label={office.country}>{office.flag}</span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-white/70">{office.country}</p>
                    <p className="text-xs text-white/40 leading-snug">{office.address}</p>
                    <a
                      href={office.tel}
                      className="text-xs text-[#E01F59] font-semibold hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Heaps Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
