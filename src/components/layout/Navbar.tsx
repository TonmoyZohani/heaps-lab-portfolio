"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Code2, Palette, Megaphone, Layers, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Nav data ──────────────────────────────────────────────────────── */

const serviceGroups = [
  {
    heading: "Software Development",
    href: "/services/software-development",
    items: [
      { label: "Custom Web Applications", href: "/services/software-development#custom-web-applications" },
      { label: "SaaS Development", href: "/services/software-development#saas-development" },
      { label: "Mobile App Development", href: "/services/software-development#mobile-app-development" },
      { label: "ERP & CRM Development", href: "/services/software-development#erp-crm-development" },
      { label: "API & Backend Development", href: "/services/software-development#api-backend-development" },
      { label: "AI/ML Solutions", href: "/services/software-development#ai-ml-solutions" },
    ],
  },
  {
    heading: "Design",
    href: "/services/design",
    items: [
      { label: "UI/UX Design", href: "/services/design#ui-ux-design" },
      { label: "Web Design", href: "/services/design#web-design" },
      { label: "Brand Identity", href: "/services/design#brand-identity" },
      { label: "Graphic Design", href: "/services/design#graphic-design" },
      { label: "3D & Product Visualization", href: "/services/design#3d-product-visualization" },
      { label: "Motion & Animation", href: "/services/design#motion-animation" },
    ],
  },
  {
    heading: "Marketing",
    href: "/services/marketing",
    items: [
      { label: "Digital Marketing", href: "/services/marketing#digital-marketing" },
      { label: "Search Engine Optimization", href: "/services/marketing#seo" },
      { label: "Social Media Marketing", href: "/services/marketing#social-media-marketing" },
      { label: "Content Marketing", href: "/services/marketing#content-marketing" },
      { label: "Performance Marketing", href: "/services/marketing#performance-marketing" },
      { label: "Analytics & Growth", href: "/services/marketing#analytics-growth" },
    ],
  },
];

const navLinks = [
  { label: "Services", href: "/services", mega: true },
  { label: "Work", href: "/work" },
  { label: "Blogs", href: "/blog" },
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
  onNavigate,
}: {
  item: { label: string; href: string; children: readonly { label: string; href: string }[] };
  isWhite: boolean;
  onNavigate: () => void;
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

      {/* Dropdown panel */}
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
              onClick={() => { setOpen(false); onNavigate(); }}
              className={cn(
                "flex items-center px-5 py-3 text-sm font-medium text-foreground/65 hover:text-foreground hover:bg-[#F5F3F6] transition-colors",
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
  const [mounted, setMounted] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  const isWhite = scrolled || megaOpen;
  const isHome = pathname === "/";

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileExpanded(null);
    setScrolled(window.scrollY > 40);
  }, [pathname]);

  useLayoutEffect(() => {
    setMounted(true);
    setScrolled(window.scrollY > 40);
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => setMegaOpen(false)}
    >
      {/* ── Navbar bar ── */}
      <header
        className={cn(
          "w-full h-[68px] flex transition-all duration-200",
          isWhite ? "bg-white" : "bg-transparent",
          // Only show shadow when scrolled AND mega is closed, so the shadow
          // never bleeds through the mega panel or through a transparent navbar
          scrolled && !megaOpen ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "shadow-none"
        )}
      >
        {/* LEFT ZONE — dark bg only on home when transparent */}
        <div
          className={cn(
            "hidden lg:flex items-start pt-3 shrink-0 pl-8 xl:pl-18 pr-16 w-[28%] transition-colors duration-200",
            isWhite
              ? "bg-white"
              : mounted && isHome
                ? "bg-[#070C10]"
                : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={isWhite ? "/images/logo8.png" : "/images/logo7.png"}
              alt="Heaps Lab"
              width={128}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* RIGHT ZONE */}
        <div className="flex-1 flex items-center justify-end px-10 xl:px-16">

          {/* Mobile: logo + hamburger */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/heaps_lab_logo_dark.png"
                alt="Heaps Lab"
                width={100}
                height={116}
                className="object-contain"
              />
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop nav links */}
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
                      onNavigate={() => setMegaOpen(false)}
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
          <div className="absolute top-[68px] left-0 right-0 bg-background border-t border-black/5 z-50 lg:hidden max-h-[80vh] overflow-y-auto shadow-xl">
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
                          className="w-full flex items-center justify-between py-3 text-sm font-bold text-foreground/80 hover:text-foreground border-t border-black/5"
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
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold text-foreground/80 hover:text-foreground border-t border-black/5">
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

      {/* ── Mega menu panel ──────────────────────────────────────────────
          The shadow lives on THIS div so it fades with opacity-0.
          Never put shadow on a child when the parent controls visibility.
      ─────────────────────────────────────────────────────────────────── */}
  <div
  className={cn(
    "transition-all duration-300 ease-out",
    megaOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-3 pointer-events-none"
  )}
>
  <div className="relative overflow-hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_-25px_rgba(0,0,0,0.18)]">
    {/* Subtle background decoration */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 right-[12%] h-72 w-72 rounded-full bg-[#E01F59]/[0.035] blur-3xl" />
      <div className="absolute -bottom-40 left-[35%] h-80 w-80 rounded-full bg-[#E01F59]/[0.02] blur-3xl" />
    </div>

    <div className="relative max-w-screen-2xl mx-auto">

      {/* Main content */}
      <div className="grid grid-cols-[280px_1fr]">

        {/* Intro / Sidebar */}
        <div className="relative border-r border-black/[0.06] px-7 py-8">
          <div className="flex flex-col h-full">

            <div>
            

              <h3 className="max-w-[220px] text-[24px] font-semibold tracking-[-0.03em] leading-[1.15] text-foreground">
                Digital products built to move businesses forward.
              </h3>
            </div>

            {/* Category navigation */}
            <div className="mt-6 space-y-0.5">
              {[
                {
                  label: "Development",
                  href: "/services/development",
                  icon: Code2,
                  description: "Web, mobile & custom software",
                },
                {
                  label: "Design",
                  href: "/services/design",
                  icon: Palette,
                  description: "UI/UX, brand & visual identity",
                },
                {
                  label: "Marketing",
                  href: "/services/marketing",
                  icon: Megaphone,
                  description: "Growth & digital marketing",
                },
              ].map(({ label, href, icon: Icon, description }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMegaOpen(false)}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-black/[0.035]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E01F59]/10 transition-all duration-200 group-hover:bg-[#E01F59]/20">
                    <Icon className="h-3.5 w-3.5 text-[#E01F59]" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-bold text-foreground/70 transition-colors group-hover:text-foreground leading-tight">
                      {label}
                    </span>
                    <span className="block mt-0.5 text-[11px] text-foreground/35 leading-tight">
                      {description}
                    </span>
                  </span>

                  <ArrowRight className="shrink-0 ml-auto h-3 w-3 -translate-x-1 text-[#E01F59] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setMegaOpen(false)}
              className="group mt-auto relative overflow-hidden rounded-2xl bg-[#E01F59] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(224,31,89,0.45)]"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />

              <div className="relative flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
                    Have a project?
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Let’s build it.
                  </p>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-200 group-hover:bg-white/20">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="px-8 py-8">
          <div className="grid grid-cols-3 gap-10">

            {serviceGroups.map((group, gi) => {
              const groupIcons = [Code2, Palette, Megaphone];
              const GroupIcon = groupIcons[gi];

              return (
                <div key={group.heading}>

                  {/* Heading */}
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E01F59]/10">
                      <GroupIcon className="h-3.5 w-3.5 text-[#E01F59]" />
                    </span>

                    <div>
                      <Link
                        href={group.href}
                        onClick={() => setMegaOpen(false)}
                        className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#E01F59] hover:underline"
                      >
                        {group.heading}
                      </Link>
                    </div>
                  </div>

                  {/* Service list */}
                  <ul className="space-y-1">
                    {group.items.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          onClick={() => setMegaOpen(false)}
                          className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 -mx-3 transition-all duration-150 hover:bg-black/[0.035]"
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-black/10 transition-all duration-150 group-hover/item:bg-[#E01F59] group-hover/item:scale-125" />

                            <span className="text-[15px] font-semibold text-foreground/60 transition-colors group-hover/item:text-foreground">
                              {svc.label}
                            </span>
                          </span>

                          <ArrowUpRight className="h-3 w-3 text-[#E01F59] opacity-0 transition-all duration-150 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Featured strip */}
          <div className="mt-9 overflow-hidden rounded-2xl border border-black/[0.06] bg-[#FAFAFA]">
            <div className="flex items-center justify-between px-5 py-4">

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/[0.05]">
                  <Sparkles className="h-3.5 w-3.5 text-[#E01F59]" />
                </span>

                <div>
                  <p className="text-xs font-semibold text-foreground/70">
                    Need something custom?
                  </p>
                  <p className="mt-0.5 text-[11px] text-foreground/35">
                    Tell us what you’re building and we’ll figure it out together.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMegaOpen(false)}
                className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-[11px] font-semibold text-foreground/60 shadow-sm ring-1 ring-black/[0.06] transition-all hover:text-[#E01F59] hover:shadow-md"
              >
                Start a conversation
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
