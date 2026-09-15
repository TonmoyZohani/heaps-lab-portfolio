import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    category: "Software Development",
    headline: "Custom software built to handle real growth",
    description:
      "Custom software, web applications, and mobile apps built to handle real growth — not just launch day.",
    items: [
      "Custom Web Applications",
      "SaaS Development",
      "Mobile App Development",
      "ERP & CRM Development",
      "API & Backend Development",
      "AI/ML Solutions",
    ],
    href: "/services/software-development",
  },
  {
    number: "02",
    category: "3D & Digital Experiences",
    headline: "Make the unseen easier to understand",
    description:
      "3D animation, product visualization, and interactive experiences that help people understand a product before it exists.",
    items: [
      "Architectural Visualization",
      "3D Walkthroughs",
      "Product Animation",
      "3D Modeling",
      "Explainer Animation",
      "Character Animation & VFX",
    ],
    href: "/services/3d-digital-experiences",
  },
  {
    number: "03",
    category: "Digital Solutions",
    headline: "Digital solutions that make operations better",
    description:
      "UI/UX, business automation, and digital transformation work that makes existing operations run better.",
    items: [
      "UI/UX & Web Design",
      "Branding",
      "Digital Marketing & SEO",
      "Business Automation",
      "Cloud Solutions",
      "IT Consulting",
    ],
    href: "/services/digital-solutions",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-[#070C10] py-20 md:py-28 overflow-hidden rounded-b-[7rem]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="/images/background1.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070C10]/60 via-[#070C10]/50 to-[#070C10]/70" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-bold text-white/40 mb-2">
            Everything you need to grow.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Digital solutions for{" "}
            <span className="text-[#E01F59]">your growth.</span>
          </h2>
        </div>

        {/* Three-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              {/* Number + category */}
              <p className="text-xs font-semibold text-[#E07820] tracking-widest uppercase mb-5">
                {service.number} — {service.category}
              </p>

              {/* Headline */}
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                {service.headline}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Service items */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07820] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-white/10 pt-5">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
