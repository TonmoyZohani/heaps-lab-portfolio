import {
  Globe, Code2, Smartphone, Palette, Layers, Bot, Cloud,
  ShoppingCart, PenTool, Sparkles, Megaphone, Brush, Search, ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const services = [
  { label: "Custom Software Development", icon: Code2 },
  { label: "Web Development",             icon: Globe },
  { label: "Mobile App Development",      icon: Smartphone },
  { label: "SaaS Development",            icon: Layers },
  { label: "UI/UX Design",               icon: Palette },
  { label: "Brand Identity",             icon: Sparkles },
  { label: "Graphic Design",             icon: Brush },
  { label: "Digital Product Design",     icon: PenTool },
  { label: "Digital Marketing",          icon: Megaphone },
  { label: "SEO & Content",              icon: Search },
  { label: "Social Media Marketing",     icon: ThumbsUp },
  { label: "E-commerce Solutions",       icon: ShoppingCart },
  { label: "AI & Automation",            icon: Bot },
  { label: "Cloud & DevOps",             icon: Cloud },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-[#070C10] py-20 md:py-28 overflow-hidden rounded-b-[7rem]">

      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="/images/background1.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          aria-hidden="true"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070C10]/60 via-[#070C10]/50 to-[#070C10]/70" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── Left: text + service list ── */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-5 max-w-2xl">
           Digital solutions for your growth.
            </h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xl mb-10">
              With a full suite of digital capabilities, we work as an
              extension of your team — delivering strategic, creative, and
              technical solutions that are built to perform and drive real
              results. Here&apos;s how we can help:
            </p>

            {/* Two-column service grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-3 group cursor-default">
                    <Icon className="w-5 h-5 text-[#E01F59] shrink-0" />
                    <span className="text-base md:text-lg text-white/80 group-hover:text-white transition-colors duration-150">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: mobile image ── */}
          <div className="hidden lg:flex items-center justify-end shrink-0 w-[720px]">
            <Image
              src="/images/project2.jpg"
              alt="Mobile experience"
              width={720}
              height={1160}
              className="object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
