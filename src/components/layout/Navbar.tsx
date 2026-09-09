"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Nav data ─────────────────────────────────────────────────────── */

const serviceGroups = [
  {
    heading: "Development",
    items: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
    ],
  },
  {
    heading: "Design",
    items: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Digital Product Design", href: "/services/digital-product-design" },
    ],
  },
  {
    heading: "Marketing",
    items: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO & Content", href: "/services/seo-content" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    ],
  },
];

const navLinks = [
  { label: "Services", href: "/services", mega: true },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/blog" },
  {
    label: "Agency",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Culture", href: "/about/culture" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

/* ─── Simple Dropdown ───────────────────────────────────────────────── */
function DropdownItem({
  item,
  isWhite,
}: {
  item: { label: string; href: string; children: readonly { label: string; href: string }[] };
  isWhite: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <button
        className={cn(
          "flex items-center gap-1 text-[1.15rem] font-bold px-5 py-1.5 rounded-full transition-all duration-200 hover:bg-[#E01F59] hover:text-white",
          isWhite ? "text-foreground/70" : "text-white/80"
        )}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden w-[210px]">
          {item.children.map((child, i) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between px-5 py-3 text-sm font-medium text-foreground/65 hover:text-foreground hover:bg-[#F5F3F6] transition-colors",
                i !== 0 && "border-t border-black/5"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Root Navbar ────────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const isWhite = scrolled || megaOpen;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /*
     * Single wrapper that owns the entire hover zone:
     * navbar bar + mega panel live inside one element.
     * onMouseLeave only fires when the cursor leaves the whole thing.
     */
    <div
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => setMegaOpen(false)}
    >
      {/* ── Navbar bar ── */}
      <header
        className={cn(
          "w-full h-[68px] flex transition-all duration-300",
          isWhite ? "bg-white shadow-sm" : "bg-transparent"
        )}
      >
        {/* LEFT ZONE */}
        <div
          className={cn(
            "hidden lg:flex items-start pt-3 shrink-0 pl-8 xl:pl-18 pr-16 transition-all duration-300",
            isWhite ? "bg-white w-[28%]" : "bg-[#070C10] w-[28%]"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/logo7.png" alt="Heaps Lab" width={128} height={40} className="object-contain" />
          </Link>
        </div>

        {/* RIGHT ZONE */}
        <div className="flex-1 flex items-center justify-end px-10 xl:px-16 bg-transparent">

          {/* Mobile: logo + hamburger */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/heaps_lab_logo_dark.png" alt="Heaps Lab" width={100} height={116} className="object-contain" />
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              if ("mega" in item && item.mega) {
                return (
                  <li key={item.label} onMouseEnter={() => setMegaOpen(true)}>
                    <button
                      className={cn(
                        "flex items-center gap-1 text-[1.15rem] font-bold px-5 py-1.5 rounded-full transition-all duration-200",
                        megaOpen
                          ? "bg-[#E01F59] text-white"
                          : isWhite
                            ? "text-foreground/70 hover:bg-[#E01F59] hover:text-white"
                            : "text-white/80 hover:bg-[#E01F59] hover:text-white"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
                    </button>
                  </li>
                );
              }
              if ("children" in item) {
                return (
                  <li key={item.label} onMouseEnter={() => setMegaOpen(false)}>
                    <DropdownItem
                      item={item as { label: string; href: string; children: readonly { label: string; href: string }[] }}
                      isWhite={isWhite}
                    />
                  </li>
                );
              }
              return (
                <li key={item.label} onMouseEnter={() => setMegaOpen(false)}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[1.15rem] font-bold px-5 py-1.5 rounded-full transition-all duration-200",
                      isWhite
                        ? "text-foreground/70 hover:bg-[#E01F59] hover:text-white"
                        : "text-white/80 hover:bg-[#E01F59] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="absolute top-[68px] left-0 right-0 bg-background border-t border-[#333333]/5 shadow-lg z-50 lg:hidden max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-5 flex flex-col gap-1">
              <button
                onClick={() => setMobileExpanded((v) => (v === "Services" ? null : "Services"))}
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-foreground/80 hover:text-foreground"
              >
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileExpanded === "Services" && "rotate-180")} />
              </button>
              <div className={cn("overflow-hidden transition-all duration-200", mobileExpanded === "Services" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="pl-4 flex flex-col pb-2">
                  {serviceGroups.map((group) => (
                    <div key={group.heading} className="mb-3">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[#E01F59] mb-1">{group.heading}</p>
                      {group.items.map((svc) => (
                        <Link key={svc.href} href={svc.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-foreground/60 hover:text-foreground">
                          {svc.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {navLinks.filter((item) => !("mega" in item)).map((item) => {
                const hasChildren = "children" in item;
                return (
                  <div key={item.label}>
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                          className="w-full flex items-center justify-between py-3 text-sm font-bold text-foreground/80 hover:text-foreground border-t border-[#333333]/5"
                        >
                          {item.label}
                          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileExpanded === item.label && "rotate-180")} />
                        </button>
                        <div className={cn("overflow-hidden transition-all duration-200", mobileExpanded === item.label ? "max-h-48 opacity-100" : "max-h-0 opacity-0")}>
                          <div className="pl-4 flex flex-col gap-0.5 pb-2">
                            {(item as typeof item & { children: readonly { label: string; href: string }[] }).children.map((child) => (
                              <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-foreground/60 hover:text-foreground">
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold text-foreground/80 hover:text-foreground border-t border-[#333333]/5">
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* ── Mega menu panel — inside the same wrapper div, no gap ── */}
      <div
        className={cn(
          "transition-all duration-200",
          megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="bg-white border-t border-black/5 shadow-2xl">
          <div className="max-w-screen-2xl mx-auto flex">

            {/* Left sidebar */}
            <div className="w-64 shrink-0 border-r border-black/5 px-8 py-8 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Services.</h3>
                <p className="text-sm text-foreground/50 leading-snug">
                  End-to-end digital solutions, built around your goals.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/services" className="text-sm text-foreground/60 hover:text-foreground transition-colors">All Services</Link>
                <Link href="/work" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Case Studies</Link>
                <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Get a Quote</Link>
              </div>
              <div className="mt-auto pt-4 border-t border-black/5">
                <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E01F59] hover:gap-2.5 transition-all">
                  All Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service groups */}
            <div className="flex-1 grid grid-cols-3 divide-x divide-black/5 py-8">
              {serviceGroups.map((group) => (
                <div key={group.heading} className="px-8 flex flex-col gap-4">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#E01F59] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E01F59] inline-block" />
                    {group.heading}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {group.items.map((svc) => (
                      <li key={svc.href}>
                        <Link href={svc.href} className="text-sm text-foreground/65 hover:text-foreground transition-colors inline-block py-1">
                          {svc.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
