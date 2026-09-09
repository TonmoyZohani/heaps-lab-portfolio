import { Search, GitBranch, Palette, Code2, FlaskConical, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Deep Dive & Strategic Discovery",
    description:
      "We begin by immersing ourselves in your business goals, target audience, and market landscape. This phase involves comprehensive research, competitor analysis, and defining the strategic blueprint for your project's success.",
    icon: Search,
    bg: "bg-[#C4B5FD]",
    iconBg: "bg-[#7C3AED]",
  },
  {
    number: "02",
    title: "User Flow & Wireframe Mapping",
    description:
      "We develop robust information architecture, detailed user flows, and foundational wireframes. This ensures a logical, intuitive user journey and content hierarchy before any design work begins.",
    icon: GitBranch,
    bg: "bg-[#6EE7B7]",
    iconBg: "bg-[#059669]",
  },
  {
    number: "03",
    title: "UI/UX & Visual Identity Design",
    description:
      "Our designers translate approved wireframes into stunning, pixel-perfect interfaces. We focus on visual aesthetics, brand consistency, and crafting a memorable digital experience that captures your audience.",
    icon: Palette,
    bg: "bg-[#FDE68A]",
    iconBg: "bg-[#D97706]",
  },
  {
    number: "04",
    title: "Development & Technical Build",
    description:
      "Our engineers bring the designs to life using modern technologies and best practices. We build scalable, performant, and secure solutions — from frontend interfaces to backend systems and APIs.",
    icon: Code2,
    bg: "bg-[#BAE6FD]",
    iconBg: "bg-[#0284C7]",
  },
  {
    number: "05",
    title: "Quality Assurance & Launch Prep",
    description:
      "Every feature is rigorously tested across devices, browsers, and edge cases. We handle performance optimisation, accessibility checks, and staged deployments to ensure a flawless launch.",
    icon: FlaskConical,
    bg: "bg-[#A7F3D0]",
    iconBg: "bg-[#10B981]",
  },
  {
    number: "06",
    title: "Final Handover & Ongoing Support",
    description:
      "We deliver full documentation, training, and a smooth handover. Our relationship doesn't end at launch — we provide ongoing support, monitoring, and iterative improvements as your business grows.",
    icon: Handshake,
    bg: "bg-[#BFDBFE]",
    iconBg: "bg-[#2563EB]",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
            How we turn ideas into results.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            How We Make <span className="text-[#E01F59]">It Happen.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col gap-5">

                {/* Illustration card */}
                <div className={`relative w-full h-52 rounded-2xl ${step.bg} flex items-center justify-center overflow-hidden`}>
                  {/* Step number — top left */}
                  <span className="absolute top-4 left-5 text-xs font-bold text-foreground/40 tracking-widest">
                    {step.number}
                  </span>
                  {/* Icon */}
                  <div className={`${step.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/20" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/15" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
