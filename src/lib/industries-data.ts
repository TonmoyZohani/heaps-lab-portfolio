export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // emoji used as visual accent
  services: string[];
  caseStudyHref: string; // links to /work filtered or a specific case study
}

export const industries: Industry[] = [
  {
    slug: "startups-smes",
    name: "Startups & SMEs",
    tagline: "From zero to product — fast.",
    description:
      "We help early-stage startups and growing SMEs turn ideas into polished digital products. From MVP builds to brand identity, we move at the pace your business demands.",
    icon: "🚀",
    services: ["MVP Development", "Brand Identity", "Web Applications", "SaaS Platforms"],
    caseStudyHref: "/work",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Sell properties before they're built.",
    description:
      "We build digital sales tools for real estate developers — 3D walkthroughs, property listing platforms, and booking systems that convert browsers into buyers.",
    icon: "🏢",
    services: ["3D Visualization", "Booking Systems", "Property Portals", "UI/UX Design"],
    caseStudyHref: "/work/project/real-estate-booking",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    tagline: "Stores built to convert.",
    description:
      "From product catalogue to checkout, we design and build e-commerce experiences that reduce friction, build trust, and drive repeat purchases.",
    icon: "🛒",
    services: ["E-commerce Platforms", "Custom Storefronts", "Payment Integration", "Performance Optimisation"],
    caseStudyHref: "/work",
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Learning experiences that actually work.",
    description:
      "We build LMS platforms, course portals, and school management systems that serve students, teachers, and administrators — without the complexity.",
    icon: "🎓",
    services: ["LMS Platforms", "School ERP", "Course Portals", "Student Dashboards"],
    caseStudyHref: "/work",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Designed for patients, not administrators.",
    description:
      "We simplify healthcare digital experiences — appointment booking, patient portals, and hospital management systems built around the people who use them.",
    icon: "🏥",
    services: ["Booking Systems", "Patient Portals", "Hospital ERP", "Accessibility-First Design"],
    caseStudyHref: "/work/project/healthcare-booking",
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    tagline: "Smarter systems, less manual work.",
    description:
      "We integrate AI and automation into real business workflows — from intelligent chatbots and recommendation engines to process automation that saves your team hours every week.",
    icon: "🤖",
    services: ["AI/ML Integration", "Chatbots & Assistants", "Process Automation", "Data Pipelines"],
    caseStudyHref: "/work",
  },
];
