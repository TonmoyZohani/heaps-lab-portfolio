import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const leftProjects = [
  {
    name: "Indian Claypit (©2025)",
    type: "Web Application",
    image: "/images/work14.png",
    url: "https://indianclaypit.com",
  },
  {
    name: "Bag Bank (©2026)",
    type: "E-Commerce Website",
    image: "/images/work12.png",
    url: "https://bagbank.com",
  },
];

const rightProjects = [
  {
    name: "Marexis (©2025)",
    type: "Website",
    image: "/images/work7.png",
    url: "https://marexis.com",
  },
  {
    name: "SonnetGuru LMS (©2026)",
    type: "Web Application",
    image: "/images/work8.png",
    url: "https://sonnetguru.com",
  },
];

function ProjectCard({ project }: { project: { name: string; type: string; image: string; url: string } }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Image container – group scoped here so hover only fires on the image */}
      <div className="group relative w-full rounded-2xl overflow-hidden bg-[#f0edf2] shadow-md hover:shadow-xl transition-shadow duration-500">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={600}
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 40vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Top: project info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              {project.type}
            </p>
            <h3 className="text-xl font-bold text-white leading-tight">
              {project.name}
            </h3>
          </div>

          {/* Bottom: Visit Site button */}
          <div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#E01F59] hover:text-white transition-colors duration-200"
            >
              Visit Site
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Text below image */}
      <div className="px-1">
        <h3 className="text-lg font-semibold text-foreground tracking-tight">
          {project.name}
        </h3>
        <p className="text-sm text-foreground/40 font-medium tracking-wide uppercase mt-0.5">
          {project.type}
        </p>
      </div>
    </div>
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
           Building what&apos;s next for ambitious businesses.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight whitespace-nowrap">
            Explore the <span className="text-[#E01F59]">work we&apos;ve built.</span>
          </h2>
        </div>

        {/* Staggered two-column grid with modern gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftProjects.map((p, idx) => (
              <div key={p.name} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>

          {/* Right column – pushed down, with subtle delay */}
          <div className="flex flex-col gap-6 md:mt-20">
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
