import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  { label: "Web Development",            href: "/services" },
  { label: "Mobile App Development",     href: "/services" },
  { label: "SaaS Development",           href: "/services" },
  { label: "UI/UX Design",              href: "/services" },
  { label: "Brand Identity",            href: "/services" },
  { label: "Digital Marketing",         href: "/services" },
  { label: "SEO & Content",             href: "/services" },
  { label: "AI & Automation",           href: "/services" },
  { label: "E-commerce Solutions",      href: "/services" },
  { label: "Cloud & DevOps",            href: "/services" },
];

const quickLinks = [
  { label: "Work",               href: "/work" },
  { label: "Services",           href: "/services" },
  { label: "About",              href: "/about" },
  { label: "Blog",               href: "/blog" },
  { label: "Contact",            href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/heapslab",
    icon: Facebook,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/heapslab/?viewAsMember=true",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#070C10] text-white">

      {/* Main footer grid */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1.6fr_1fr] gap-12 lg:gap-20">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/heaps_lab_logo_dark.png"
                alt="Heaps Lab"
                width={140}
                height={48}
                className="object-contain h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
         A technology studio bringing strategy, design, and development together to build powerful digital products for ambitious businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-full border border-white/30 hover:border-[#E01F59] hover:text-[#E01F59] text-sm font-semibold transition-colors duration-200"
            >
              Contact Us Now
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/15 hover:border-[#E01F59] hover:text-[#E01F59] flex items-center justify-center text-white/60 transition-colors duration-200"
                >
                  {s.icon && <s.icon className="w-4 h-4" />}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2: Services (2 sub-columns) ── */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Services
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="text-sm text-white/60 hover:text-[#E01F59] transition-colors duration-150"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 3: Quick Links ── */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/60 hover:text-[#E01F59] transition-colors duration-150"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Heaps Lab. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with care by{" "}
            <span className="text-[#E01F59]">Heaps Lab</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
