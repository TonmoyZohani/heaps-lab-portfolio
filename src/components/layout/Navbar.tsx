"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Nav data ─────────────────────────────────────────────────────── */
const navLinks = [
  {
    label: "Expertise",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO & Content", href: "/services/seo-content" },
      { label: "Brand Strategy", href: "/services/brand-strategy" },
    ],
  },
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
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

/* ─── Dropdown ──────────────────────────────────────────────────────── */
function DropdownItem({
  item,
  scrolled,
}: {
  item: (typeof navLinks)[number] & {
    children: readonly { label: string; href: string }[];
  };
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <button
        className={cn(
          "flex items-center gap-1 text-[1.15rem] font-bold px-5 py-1.5 rounded-full transition-all duration-200 hover:bg-[#E01F59] hover:text-white",
          scrolled ? "text-foreground/70" : "text-white/80"
        )}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div className="bg-background rounded-2xl shadow-xl border border-[#333333]/10 overflow-hidden min-w-[200px]">
          {item.children.map((child, i) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between px-5 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-[#EFEDF0] transition-colors group",
                i !== 0 && "border-t border-[#333333]/5"
              )}
            >
              {child.label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full h-[68px] flex transition-all duration-300",
      scrolled ? "bg-white shadow-sm" : "bg-transparent"
    )}>

      {/* ── LEFT ZONE — dark, matches hero left panel (28%) ── */}
      <div className={cn(
        "hidden lg:flex items-start pt-3 shrink-0 pl-8 xl:pl-18 pr-16 transition-all duration-300",
        scrolled ? "bg-white w-[28%]" : "bg-[#070C10] w-[28%]"
      )}>
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo7.png"
            alt="Heaps Lap"
            width={128}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* ── RIGHT ZONE — transparent over video (72%) ── */}
      <div className="flex-1 flex items-center justify-end px-10 xl:px-16 bg-transparent">

        {/* Mobile: logo + hamburger */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/heaps_lab_logo_dark.png" alt="Heaps Lap" width={100} height={116} className="object-contain" />
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
            const hasChildren = "children" in item;
            return (
              <li key={item.label}>
                {hasChildren ? (
                  <DropdownItem
                    item={item as typeof item & { children: readonly { label: string; href: string }[] }}
                    scrolled={scrolled}
                  />
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[1.15rem] font-bold px-5 py-1.5 rounded-full transition-all duration-200",
                      scrolled
                        ? "text-foreground/70 hover:bg-[#E01F59] hover:text-white"
                        : "text-white/80 hover:bg-[#E01F59] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-background border-t border-[#333333]/5 shadow-lg z-50 lg:hidden">
          <div className="px-6 py-5 flex flex-col gap-1">
            {navLinks.map((item) => {
              const hasChildren = "children" in item;
              return (
                <div key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded((v) =>
                            v === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between py-3 text-sm font-bold text-foreground/80 hover:text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            mobileExpanded === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200",
                          mobileExpanded === item.label
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="pl-4 flex flex-col gap-0.5 pb-2">
                          {(item as typeof item & { children: readonly { label: string; href: string }[] }).children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-2 text-sm text-foreground/60 hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm font-bold text-foreground/80 hover:text-foreground border-t border-[#333333]/5 first:border-0"
                    >
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
  );
}
