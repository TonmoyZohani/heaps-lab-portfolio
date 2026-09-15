"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, workCategories } from "@/lib/work-data";
import type { WorkCategory } from "@/lib/work-data";

/* ── Portfolio project card ─────────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      {/* bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[#E01F59] text-xs font-semibold uppercase tracking-widest mb-1.5">
          {project.category}
        </p>
        <h3 className="text-white text-base font-bold leading-snug">
          {project.title}
        </h3>
      </div>

      {/* external link on hover */}
      {project.url && project.url !== "#" && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </a>
      )}
    </div>
  );
}

/* ── Main page component ─────────────────────────────────────────── */
export default function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All work");

  const filtered =
    activeCategory === "All work"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-background min-h-screen">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#070C10] pt-[calc(68px+4rem)] pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Work</span>
          </div>

          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Portfolio and case studies
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-2xl">
            Portfolio is fast, visual proof — every project we ship gets an entry.
            Case studies go deeper, for projects worth a full problem-to-result walkthrough.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ──────────────────────────────────────── */}
      <section className="pt-14 pb-28 max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {workCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#E01F59] border-[#E01F59] text-white"
                  : "bg-transparent border-foreground/20 text-foreground/60 hover:border-foreground/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
