import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const leftProjects = [
  {
    name: "Tour Flow (©2025)",
    type: "App Development",
    image: "/images/work11.png",
  },
  {
    name: "Cybersecurity & AI Industry (©2026)",
    type: "Web Design & Development",
    image: "/images/work12.png",
  },
];

const rightProjects = [
  {
    name: "Marexis (©2025)",
    type: "Website",
    image: "/images/work7.png",
  },
  {
    name: "SonnetGuru LMS (©2026)",
    type: "Web Application",
    image: "/images/work8.png",
  },
];

function ProjectCard({ project }: { project: { name: string; type: string; image: string } }) {
  return (
    <Link href="/work" className="group flex flex-col gap-4">
      {/* Image container with modern overlay and scale effect */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f0edf2] shadow-md hover:shadow-xl transition-shadow duration-500">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        {/* Dark overlay on hover for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Arrow pill – modern, minimal */}
        <div className="absolute bottom-4 right-4 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-medium text-white/90 tracking-wide">View</span>
          <ArrowUpRight className="w-4 h-4 text-white/90" />
        </div>
      </div>

      {/* Text with refined typography */}
      <div className="px-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-[#E01F59] transition-colors duration-200 tracking-tight">
          {project.name}
        </h3>
        <p className="text-sm text-foreground/40 font-medium tracking-wide uppercase mt-0.5">
          {project.type}
        </p>
      </div>
    </Link>
  );
}

export default function WorkSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-[#E01F59]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="mb-16">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
           Building what’s next for ambitious businesses.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight whitespace-nowrap">
            Explore the <span className="text-[#E01F59]">work we&apos;ve built.</span>
          </h2>
        </div>

        {/* Staggered two-column grid with modern gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left column */}
          <div className="flex flex-col gap-12">
            {leftProjects.map((p, idx) => (
              <div key={p.name} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>

          {/* Right column – pushed down, with subtle delay */}
          <div className="flex flex-col gap-12 md:mt-20">
            {rightProjects.map((p, idx) => (
              <div key={p.name} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 2) * 100}ms` }}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
