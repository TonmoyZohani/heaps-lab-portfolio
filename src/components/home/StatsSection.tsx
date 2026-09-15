import { Rocket, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    number: "10+",
    title: "Successful Projects",
    description:
      "Building high-quality digital products that solve real business challenges and drive meaningful outcomes.",
    icon: Rocket,
    iconBg: "bg-[#EEE9FF]",
    iconColor: "text-[#7C3AED]",
  },
  {
    number: "99%",
    title: "Client Satisfaction",
    description:
      "Creating lasting partnerships through reliable delivery, clear communication, and a strong focus on client goals.",
    icon: Users,
    iconBg: "bg-[#E0F4FF]",
    iconColor: "text-[#0284C7]",
  },
  {
    number: "3+",
    title: "Global Clients",
    description:
      "Helping businesses across different markets turn ideas into impactful digital experiences and solutions.",
    icon: Globe,
    iconBg: "bg-[#E8FBF4]",
    iconColor: "text-[#059669]",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-background pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
            The impact speaks for itself.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            By the <span className="text-[#E01F59]">Numbers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Stat cards */}
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="group flex flex-col justify-between rounded-2xl border border-foreground/8 bg-card p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                    <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>

                  {/* Number */}
                  <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
                    {stat.number}
                  </span>

                  {/* Title + description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-foreground">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Globe / featured card */}
          <div className="group relative flex flex-col justify-between rounded-2xl p-7 overflow-hidden bg-gradient-to-br from-[#2DD4A0] to-[#0E9E6E] shadow-sm hover:shadow-xl transition-shadow duration-300">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/4" />

            <div className="relative flex flex-col gap-4">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>

              {/* Headline */}
              <h3 className="text-xl font-bold text-white leading-snug">
                Global Impact:<br />Measurable Results.
              </h3>

              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed">
                Our global reach and extensive project experience are a testament to our
                commitment to a personalised approach for every partnership.
              </p>
            </div>

            {/* Arrow button */}
            <div className="relative mt-6">
              <Link href="/work">
                <div className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
