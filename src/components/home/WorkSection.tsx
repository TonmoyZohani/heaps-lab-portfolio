import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const featuredProjects = [
 {
name: "Marexis Italy — Industrial Machinery & Equipment",
type: "Web Development",
description:
"A modern corporate website showcasing industrial machinery, generators, compressors, forklifts, and technical services.",
image: "/images/work7.png",
href: "https://marexisitaly.com",
accentColor: "text-[#E01F59]",
badgeBg: "bg-[#E01F59]/10 text-[#E01F59]",
},
  {
name: "Indian Claypit — Indian Restaurant & Catering",
type: "Web Development",
description:
"A modern restaurant website featuring an interactive menu, online ordering, table reservations, promotions, and catering services.",
image: "/images/work13.png",
href: "https://www.indianclaypit.com/",
accentColor: "text-[#E01F59]",
badgeBg: "bg-[#E01F59]/10 text-[#E01F59]",
},
 {
name: "Sonnet Guru — Online Learning Platform",
type: "Software Development",
description:
"A modern learning platform designed to deliver online courses, manage students, and provide a structured digital learning experience.",
image: "/images/work8.png",
href: "https://sonnetguru.com/",
accentColor: "text-[#E07820]",
badgeBg: "bg-[#E07820]/10 text-[#E07820]",
},
];

function ProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-foreground/8 bg-card shadow-sm hover:shadow-xl transition-shadow duration-500">
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Category badge */}
        <span
          className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${project.badgeBg}`}
        >
          {project.type}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-foreground/55 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Footer */}
        <div className="pt-3 border-t border-foreground/8 mt-1">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${project.accentColor} hover:gap-2.5 transition-all duration-200`}
          >
            See Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-[#E01F59]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
            Building what&apos;s next for ambitious businesses.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Explore the{" "}
            <span className="text-[#E01F59]">work we&apos;ve built.</span>
          </h2>
        </div>

        {/* 3-column project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-foreground/20 text-foreground font-semibold text-sm hover:bg-[#E01F59] hover:text-white hover:border-[#E01F59] transition-all duration-300"
          >
            Show all our work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
