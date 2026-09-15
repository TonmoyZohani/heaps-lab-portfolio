export type WorkCategory = "All work" | "Software Development" | "3D Animation" | "Digital Solutions";

export interface Project {
  slug: string;
  title: string;
  category: Exclude<WorkCategory, "All work">;
  image: string;
  url?: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  industries: string[];
  title: string;
  summary: string;
  outcome: string;
  image: string;
  href: string;
  /* Detail page fields */
  heroImage: string;
  client: string;
  year: string;
  services: string[];
  challenge: string;
  approach: CaseStudySection[];
  results: string[];
  gallery: string[];
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "px-crm",
    title: "PX CRM — Customer Relationship Management",
    category: "Software Development",
    image: "/images/work9.png",
    url: "#",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System (ERP)",
    category: "Software Development",
    image: "/images/work10.png",
    url: "#",
  },
  {
    slug: "school-management",
    title: "School Management System (ERP)",
    category: "Software Development",
    image: "/images/work11.png",
    url: "#",
  },
  {
    slug: "indian-claypit",
    title: "Indian Claypit",
    category: "Digital Solutions",
    image: "/images/work14.png",
    url: "https://indianclaypit.com",
  },
  {
    slug: "bag-bank",
    title: "Bag Bank — E-Commerce Platform",
    category: "Digital Solutions",
    image: "/images/work12.png",
    url: "https://bagbank.com",
  },
  {
    slug: "marexis",
    title: "Marexis — Corporate Website",
    category: "Digital Solutions",
    image: "/images/work7.png",
    url: "https://marexis.com",
  },
  {
    slug: "sonnetguru-lms",
    title: "SonnetGuru LMS — Learning Platform",
    category: "Software Development",
    image: "/images/work8.png",
    url: "https://sonnetguru.com",
  },
  {
    slug: "project-dashboard",
    title: "Project Management Dashboard",
    category: "Software Development",
    image: "/images/work13.png",
    url: "#",
  },
  {
    slug: "course-platform",
    title: "Online Course Platform",
    category: "Digital Solutions",
    image: "/images/course_cover.jpeg",
    url: "#",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-estate-booking",
    industries: ["Real Estate", "Software + 3D"],
    title: "A real estate project combining spatial experience and booking",
    summary:
      "The project paired a cinematic 3D walkthrough with a booking platform so prospective buyers could understand the development before construction.",
    outcome:
      "Qualitative outcome: replaced a disconnected sales explanation with a visual project experience and a clearer booking path.",
    image: "/images/banner_5.png",
    href: "/work/project/real-estate-booking",

    /* Detail */
    heroImage: "/images/banner_5.png",
    client: "Confidential Real Estate Developer",
    year: "2025",
    services: ["3D Visualization", "Web Development", "UI/UX Design", "Booking System"],
    challenge:
      "The client was selling off-plan luxury apartments — units that didn't physically exist yet. Their sales team relied on static floor plans and PDFs, and prospective buyers were struggling to visualise the spaces or feel confident enough to commit. Drop-off in the sales funnel was high and the average time-to-decision was too long.",
    approach: [
      {
        heading: "Cinematic 3D walkthrough",
        body: "We produced a high-fidelity 3D walkthrough of the development — exterior, common areas, and three representative unit types. The walkthrough was embedded directly into the web platform, so buyers could explore the property from any device without downloading anything.",
      },
      {
        heading: "Integrated booking platform",
        body: "Alongside the 3D experience, we built a unit availability and booking system. Buyers could select a unit on an interactive floorplan, view its 3D tour, check pricing and availability, and register their interest or book a formal viewing — all in one seamless flow.",
      },
      {
        heading: "Mobile-first experience",
        body: "Over 70% of the client's prospective buyers were browsing on mobile. We prioritised the mobile experience throughout — optimising 3D asset delivery, keeping forms to a single screen, and ensuring the booking flow worked flawlessly on any device.",
      },
    ],
    results: [
      "Replaced static PDF sales packs with an interactive digital experience",
      "Reduced average time-to-booking-enquiry by cutting friction from the flow",
      "All unit types visualised in 3D before construction completed",
      "Mobile-optimised booking flow accessible on any device",
      "Sales team reported higher quality enquiries from more informed buyers",
    ],
    gallery: [
      "/images/banner_5.png",
      "/images/banner_6.png",
      "/images/banner_7.png",
    ],
    testimonial: {
      quote:
        "The 3D experience completely changed how buyers engaged with our development. We went from explaining the project to showing it — and the difference in conversion quality was immediate.",
      author: "Project Director",
      role: "Real Estate Developer",
    },
  },
  {
    slug: "healthcare-booking",
    industries: ["Healthcare", "Digital Solutions"],
    title: "A healthcare booking experience built for patients, not administrators",
    summary:
      "A full redesign of a healthcare provider's appointment booking flow — reducing drop-off and improving patient satisfaction scores.",
    outcome:
      "Qualitative outcome: simplified a multi-step process into a single, guided flow that patients could complete on any device.",
    image: "/images/project2.jpg",
    href: "/work/project/healthcare-booking",

    /* Detail */
    heroImage: "/images/project2.jpg",
    client: "Healthcare Provider (Confidential)",
    year: "2025",
    services: ["UX Research", "UI/UX Design", "Web Development", "Digital Solutions"],
    challenge:
      "The client's existing booking system was built around internal administrative logic — department codes, provider IDs, and multi-step forms that made sense to staff but were opaque and frustrating for patients. Drop-off during booking was high, and a significant portion of patients were calling reception instead of booking online, creating avoidable load on the team.",
    approach: [
      {
        heading: "Patient-first UX research",
        body: "We started with patient interviews and session recordings from the existing system. The core insight: patients didn't understand the language used in the booking form and couldn't easily identify which service they needed. We redesigned the entry point around symptom and concern selection rather than department selection.",
      },
      {
        heading: "Single-screen guided flow",
        body: "The redesigned booking flow condensed what was previously a five-step process into a single guided page. Progressive disclosure kept the interface uncluttered — only showing the next question once the current one was answered. This dramatically reduced cognitive load and abandonment.",
      },
      {
        heading: "Accessibility and device coverage",
        body: "Healthcare users skew toward older demographics and lower digital confidence. We applied WCAG AA standards throughout, tested with screen readers, and ensured the flow worked on older Android devices and smaller screens. The result was a booking experience that worked for every patient, not just the digitally confident ones.",
      },
    ],
    results: [
      "Multi-step form replaced with a single guided booking flow",
      "Patient language used throughout — no administrative jargon",
      "Significant reduction in booking drop-off vs. the previous system",
      "Reduction in reception calls for appointments after launch",
      "WCAG AA compliant — accessible across all device types",
      "Patient satisfaction scores improved post-launch",
    ],
    gallery: [
      "/images/project2.jpg",
      "/images/mobile.webp",
      "/images/work7.png",
    ],
    testimonial: {
      quote:
        "Our patients were telling us the old system was confusing them. The redesigned flow is something our older patients can actually use — and our reception team has noticed the difference.",
      author: "Operations Manager",
      role: "Healthcare Provider",
    },
  },
];

export const workCategories: WorkCategory[] = [
  "All work",
  "Software Development",
  "3D Animation",
  "Digital Solutions",
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
