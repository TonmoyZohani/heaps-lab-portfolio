"use client";

const stack = [
  "TypeScript", "JavaScript", "Python", "C#", "MongoDB", "SQL", "PHP",
  "Node.js", "Next.js", "React.js", "SEO", "Branding", "Social Media Marketing",
  "UI/UX Design", "Graphics Design", "PostgreSQL", "Tailwind CSS", "REST APIs",
  "GraphQL", "Docker", "AWS", "Firebase", "Figma", "Adobe XD", "WordPress",
  "Shopify", "Content Strategy", "Email Marketing", "PPC Advertising", "Analytics",
];

export default function TechStackSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-background overflow-hidden">

      {/* Headline */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
         The technologies behind 
          <span className="text-[#E01F59]"> what we build.</span>
        </h2>
        <p className="mt-3 text-xl md:text-2xl font-bold text-[#71797E]">
  Modern technology, proven frameworks, and cutting-edge AI.


        </p>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...stack, ...stack].map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/20 hover:text-[#E01F59] transition-colors duration-200 mx-6 cursor-default select-none"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap absolute top-0" aria-hidden>
          {[...stack, ...stack].map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/20 hover:text-[#E01F59] transition-colors duration-200 mx-6 cursor-default select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left */}
      <div className="relative flex overflow-hidden group mt-4">
        <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...stack.slice(15), ...stack.slice(0, 15), ...stack].map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/15 hover:text-[#E01F59] transition-colors duration-200 mx-6 cursor-default select-none"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap absolute top-0" aria-hidden>
          {[...stack.slice(15), ...stack.slice(0, 15), ...stack].map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/15 hover:text-[#E01F59] transition-colors duration-200 mx-6 cursor-default select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
