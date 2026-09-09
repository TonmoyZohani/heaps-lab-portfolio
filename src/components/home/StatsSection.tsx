import { Globe, ArrowRight } from "lucide-react";

const stats = [
  {
    number: "10+",
    title: "Successful Projects",
    description:
      "Building high-quality digital products that solve real business challenges and drive meaningful outcomes.",
    icon: "📊",
  },
  {
    number: "99%",
    title: "Client Satisfaction",
    description:
      "Creating lasting partnerships through reliable delivery, clear communication, and a strong focus on client goals.",
    icon: "⭐",
  },
  {
    number: "3+",
    title: "Global Clients",
    description:
      "Helping businesses across different markets turn ideas into impactful digital experiences and solutions.",
    icon: "🌍",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <div
      className="group relative bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-[#333333]/5 hover:border-[#E01F59]/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E01F59]/0 to-[#E01F59]/0 group-hover:from-[#E01F59]/5 group-hover:to-transparent transition-all duration-700" />
      
      {/* Number with gradient accent */}
      <div className="relative">
        <span className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight leading-none">
          {stat.number}
        </span>
        <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {stat.icon}
        </div>
      </div>

      <div className="relative space-y-2">
        <h3 className="text-lg font-bold text-foreground tracking-tight">
          {stat.title}
        </h3>
        <p className="text-sm text-foreground/40 leading-relaxed font-light">
          {stat.description}
        </p>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E01F59]/0 via-[#E01F59]/0 group-hover:via-[#E01F59]/30 to-[#E01F59]/0 rounded-full transition-all duration-700" />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#E01F59]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xl md:text-2xl font-bold text-[#71797E] mb-2">
            The impact speaks for itself.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            By the <span className="text-[#E01F59]">Numbers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat cards with staggered animation */}
          {stats.map((stat, index) => (
            <StatCard key={stat.title} stat={stat} index={index} />
          ))}

          {/* Globe card - featured */}
          <div
            className="group relative bg-gradient-to-br from-[#E01F59] to-[#b01745] rounded-3xl p-8 md:p-10 flex flex-col gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            {/* Globe icon with ring */}
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Globe className="w-8 h-8 text-white" />
              </div>
              {/* Pulsing ring */}
              <div className="absolute -inset-1 rounded-2xl border border-white/20 animate-pulse" />
            </div>

            <div className="space-y-3 relative">
              <h3 className="text-xl font-bold text-white leading-tight tracking-tight">
                Global Impact.<br />Measurable Results.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Our global reach and extensive project experience are a testament to our
                commitment to a personalised approach for every partnership.
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}