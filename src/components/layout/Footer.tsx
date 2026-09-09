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
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    label: "Reddit",
    href: "https://reddit.com",
    // Reddit has no lucide icon — use an SVG inline
    icon: null,
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
                  {s.icon ? (
                    <s.icon className="w-4 h-4" />
                  ) : (
                    /* Reddit SVG */
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                    </svg>
                  )}
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
