import {
  Globe, Code2, Smartphone, Layers, Database, Bot,
  Palette, PenTool, Sparkles, Brush, Box, Zap,
  Megaphone, Search, ThumbsUp, FileText, BarChart2, TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  category: "development" | "design" | "marketing";
  title: string;
  tagline: string;
  heroDescription: string;
  icon: LucideIcon;
  accentColor: string;
  heroStats: { value: string; label: string }[];
  whatWeDo: {
    heading: string;
    body: string;
    bullets: string[];
  };
  offerings: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  techStack: string[];
  whyUs: { title: string; description: string }[];
}

export const servicesData: ServiceData[] = [

  /* ── SOFTWARE DEVELOPMENT ──────────────────────────────────────── */

  {
    slug: "custom-web-applications",
    category: "development",
    title: "Custom Web Applications",
    tagline: "Web apps built exactly for the way you work.",
    heroDescription: "Off-the-shelf tools can only take you so far. We design and engineer bespoke web applications that fit your workflows, scale with your growth, and give your business a genuine competitive edge.",
    icon: Code2,
    accentColor: "bg-[#C4B5FD]",
    heroStats: [
      { value: "50+", label: "Custom builds delivered" },
      { value: "99%", label: "On-time delivery rate" },
      { value: "3+", label: "Years of expertise" },
    ],
    whatWeDo: {
      heading: "Software that solves the problem no product can.",
      body: "When your business has a problem that existing tools don't fully solve, custom software is the answer. We work closely with you to understand your processes, constraints, and goals — then engineer a solution that fits precisely.",
      bullets: [
        "Full discovery and requirements workshops",
        "Architecture design and tech stack selection",
        "Agile, iterative development with regular demos",
        "QA, security testing, and performance optimisation",
        "Deployment, documentation, and post-launch support",
      ],
    },
    offerings: [
      { title: "Web Applications", description: "Scalable browser-based tools and platforms built for real workflows and growing teams." },
      { title: "Internal Tooling", description: "Replace messy spreadsheets and manual processes with clean internal systems." },
      { title: "API Development", description: "Robust REST and GraphQL APIs that connect your services reliably and performantly." },
      { title: "System Integration", description: "Connect your existing tools, databases, and third-party services seamlessly." },
      { title: "Legacy Modernisation", description: "Rebuild ageing systems with modern architecture while preserving business logic." },
      { title: "Automation", description: "Eliminate repetitive manual work with intelligent workflow automation that runs 24/7." },
    ],
    process: [
      { step: "01", title: "Discovery", description: "We map your business goals, user needs, and technical constraints before writing a line of code." },
      { step: "02", title: "Architecture", description: "We design the right data model, tech stack, and system boundaries for your problem." },
      { step: "03", title: "Build", description: "Iterative sprints with working software at the end of every cycle." },
      { step: "04", title: "Test & Harden", description: "Automated tests, security audits, and performance checks before anything ships." },
      { step: "05", title: "Deploy", description: "CI/CD pipelines, cloud infrastructure, and a smooth go-live with zero surprises." },
      { step: "06", title: "Support", description: "Ongoing maintenance, monitoring, and feature iterations as your needs evolve." },
    ],
    techStack: ["TypeScript", "Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "Docker", "AWS", "REST APIs", "GraphQL"],
    whyUs: [
      { title: "We own the outcome", description: "We don't just write tickets — we take responsibility for the end result working in your business." },
      { title: "No black-box development", description: "Regular demos, open code, and plain-English updates at every stage." },
      { title: "Built to last", description: "Clean architecture, thorough documentation, and code your next developer won't curse." },
      { title: "Flexible engagement", description: "Fixed-scope projects, ongoing retainers, or staff augmentation — whatever fits your situation." },
    ],
  },

  {
    slug: "saas-development",
    category: "development",
    title: "SaaS Development",
    tagline: "Build the product your market is waiting for.",
    heroDescription: "We help founders and product teams design, build, and scale SaaS products — from zero to launch, and from launch to product-market fit.",
    icon: Layers,
    accentColor: "bg-[#FDE68A]",
    heroStats: [
      { value: "15+", label: "SaaS products launched" },
      { value: "Multi-tenant", label: "Architecture expertise" },
      { value: "Scalable", label: "From day one" },
    ],
    whatWeDo: {
      heading: "SaaS built to scale, not just to ship.",
      body: "Building a SaaS product is different from building a website. It needs multi-tenancy, subscription billing, role-based access, and an architecture that doesn't collapse under growth.",
      bullets: [
        "Multi-tenant architecture design",
        "Subscription billing with Stripe",
        "Role-based access control and team management",
        "Onboarding flows that activate users fast",
        "Admin dashboards and analytics",
      ],
    },
    offerings: [
      { title: "MVP & Prototype", description: "Validate your idea quickly with a focused, functional build before committing to full-scale development." },
      { title: "Full Product Build", description: "End-to-end SaaS development from architecture to production deployment." },
      { title: "Billing & Subscriptions", description: "Stripe integration with plans, trials, upgrades, and invoicing." },
      { title: "Multi-Tenant Systems", description: "Secure per-tenant data isolation and full tenant lifecycle management, built properly from day one." },
      { title: "Dashboards & Analytics", description: "In-app usage metrics, custom reporting, and clear data visualisation dashboards for your users." },
      { title: "API & Integrations", description: "Public APIs, webhooks, and integrations with tools your users already use." },
    ],
    process: [
      { step: "01", title: "Product Strategy", description: "Define your ICP, core value prop, and the minimum viable feature set." },
      { step: "02", title: "Architecture", description: "Design the data model and system architecture that will scale with you." },
      { step: "03", title: "Design", description: "Onboarding flows, dashboards, and UI designed for activation and retention." },
      { step: "04", title: "Build", description: "Iterative development with weekly demos and a live staging environment." },
      { step: "05", title: "Beta & Testing", description: "Private beta, user feedback loops, and performance hardening." },
      { step: "06", title: "Launch & Scale", description: "Production deployment, monitoring setup, and growth iteration." },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS", "TypeScript"],
    whyUs: [
      { title: "We understand SaaS economics", description: "We build for activation, retention, and expansion — not just feature delivery." },
      { title: "Architecture that scales", description: "Multi-tenant from day one, so you don't have to rebuild when you grow." },
      { title: "Billing handled properly", description: "Stripe integration that covers trials, proration, upgrades, and failed payments." },
      { title: "Founder-friendly process", description: "We move fast, communicate clearly, and treat your runway with respect." },
    ],
  },

  {
    slug: "mobile-app-development",
    category: "development",
    title: "Mobile App Development",
    tagline: "Apps your users will actually want to open.",
    heroDescription: "From concept to App Store, we build iOS and Android apps that are fast, intuitive, and built to retain users — not just attract them.",
    icon: Smartphone,
    accentColor: "bg-[#A7F3D0]",
    heroStats: [
      { value: "20+", label: "Apps shipped" },
      { value: "4.8★", label: "Average app store rating" },
      { value: "iOS & Android", label: "Full coverage" },
    ],
    whatWeDo: {
      heading: "Mobile experiences built around how people actually use their phones.",
      body: "Great apps feel effortless. We design and build mobile products with obsessive attention to UX — because the best features in the world don't matter if the app is frustrating to use.",
      bullets: [
        "Native iOS (Swift) and Android (Kotlin) development",
        "Cross-platform with React Native or Flutter",
        "Backend APIs and real-time features",
        "App Store and Google Play submission",
        "Push notifications, analytics, and crash monitoring",
      ],
    },
    offerings: [
      { title: "iOS Apps", description: "Native Swift development following Apple's Human Interface Guidelines for a polished, premium feel." },
      { title: "Android Apps", description: "Performant Kotlin apps built to Google's Material Design standards for a consistent Android experience." },
      { title: "Cross-Platform Apps", description: "Single codebase for both iOS and Android platforms using React Native or Flutter." },
      { title: "MVP Development", description: "Get to market fast with a tightly scoped, well-built first version that validates your idea." },
      { title: "App Redesigns", description: "Modernise the look, feel, and performance of an existing app without rebuilding everything from scratch." },
      { title: "Backend & APIs", description: "The server-side APIs and infrastructure your app needs to work reliably and scale with your users." },
    ],
    process: [
      { step: "01", title: "Product Definition", description: "Define your core user flows, must-have features, and success metrics." },
      { step: "02", title: "UX Design", description: "Wireframes and interactive prototypes tested with real users before building." },
      { step: "03", title: "UI Design", description: "Pixel-perfect visual design that meets platform guidelines and feels premium." },
      { step: "04", title: "Development", description: "Iterative builds with TestFlight/beta distribution so you see progress continuously." },
      { step: "05", title: "QA & Testing", description: "Device testing, edge-case coverage, and performance profiling." },
      { step: "06", title: "Launch & Growth", description: "App store optimisation, analytics setup, and post-launch iteration." },
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Node.js", "AWS"],
    whyUs: [
      { title: "UX-first approach", description: "We prototype and validate flows before writing a line of production code." },
      { title: "Platform expertise", description: "We follow native design guidelines so your app feels right on every device." },
      { title: "End-to-end delivery", description: "Design, development, and App Store submission — all handled by one team." },
      { title: "Post-launch support", description: "OS updates, new devices, and user feedback — we stay with you after launch." },
    ],
  },

  {
    slug: "erp-crm-development",
    category: "development",
    title: "ERP & CRM Development",
    tagline: "Systems that run your operations — not the other way around.",
    heroDescription: "We build custom ERP and CRM systems that fit how your business actually works, replacing fragmented tools with one unified platform built around your processes.",
    icon: Database,
    accentColor: "bg-[#BAE6FD]",
    heroStats: [
      { value: "10+", label: "ERP/CRM systems built" },
      { value: "Custom", label: "Built for your workflows" },
      { value: "Integrated", label: "Across departments" },
    ],
    whatWeDo: {
      heading: "One system that connects every part of your business.",
      body: "Generic ERP and CRM platforms force you to change the way you work. We build systems that adapt to your workflows, integrate with your existing tools, and give you a single source of truth across your entire operation.",
      bullets: [
        "Custom ERP modules for operations, finance, and HR",
        "CRM pipelines, lead tracking, and sales automation",
        "Role-based access and multi-department support",
        "Third-party integrations and data migration",
        "Real-time dashboards and reporting",
      ],
    },
    offerings: [
      { title: "Custom ERP Systems", description: "Unified platforms for operations, inventory, finance, and HR built around your business model." },
      { title: "CRM Development", description: "Lead management, pipeline tracking, and customer communication tools tailored to your sales process." },
      { title: "Sales Automation", description: "Automate follow-ups, proposals, and pipeline stages so your team focuses on closing." },
      { title: "Inventory Management", description: "Real-time stock tracking, purchase orders, and supplier management in one place." },
      { title: "HR & Payroll Modules", description: "Employee records, leave management, and payroll processing integrated with your ERP." },
      { title: "Reporting & Analytics", description: "Custom dashboards and reports that surface the metrics your leadership team actually needs." },
    ],
    process: [
      { step: "01", title: "Process Mapping", description: "We document your current workflows, pain points, and integration requirements." },
      { step: "02", title: "System Design", description: "Design the data model, module structure, and user roles." },
      { step: "03", title: "Development", description: "Iterative build with department-by-department rollout." },
      { step: "04", title: "Migration", description: "Migrate your existing data from spreadsheets or legacy systems." },
      { step: "05", title: "Training", description: "User training and documentation for every role in the system." },
      { step: "06", title: "Support", description: "Ongoing support, enhancements, and new module development." },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript", "REST APIs"],
    whyUs: [
      { title: "Built for your process", description: "We learn how you work before we design a single screen." },
      { title: "No forced upgrades", description: "You own the system — no vendor lock-in or per-seat pricing surprises." },
      { title: "Phased delivery", description: "Core modules first, then expand — so you see value quickly." },
      { title: "Integration expertise", description: "We connect your ERP/CRM to accounting, e-commerce, and communication tools." },
    ],
  },

  {
    slug: "api-backend-development",
    category: "development",
    title: "API & Backend Development",
    tagline: "The engine behind every great product.",
    heroDescription: "We build robust, scalable backend systems and APIs that power your applications — built for performance, security, and long-term maintainability.",
    icon: Globe,
    accentColor: "bg-[#C4B5FD]",
    heroStats: [
      { value: "99.9%", label: "Uptime target" },
      { value: "REST & GraphQL", label: "API expertise" },
      { value: "Secure", label: "By default" },
    ],
    whatWeDo: {
      heading: "Backend systems built to perform at any scale.",
      body: "A great frontend is only as good as the backend powering it. We design and build server-side systems, databases, and APIs that are fast, secure, and built to handle growth.",
      bullets: [
        "RESTful and GraphQL API design and development",
        "Database architecture and optimisation",
        "Authentication, authorisation, and security",
        "Third-party integrations and webhooks",
        "Performance optimisation and caching strategies",
      ],
    },
    offerings: [
      { title: "REST APIs", description: "Well-documented, versioned REST APIs built to integrate with any frontend or third-party service." },
      { title: "GraphQL APIs", description: "Flexible, efficient data fetching for complex frontends and mobile applications." },
      { title: "Database Design", description: "Normalised schemas, query optimisation, and migration strategies for SQL and NoSQL." },
      { title: "Authentication Systems", description: "JWT, OAuth, SSO, and role-based access control implemented securely." },
      { title: "Microservices", description: "Break monoliths into maintainable, independently deployable services." },
      { title: "Webhook & Event Systems", description: "Real-time event-driven architectures that keep your systems in sync." },
    ],
    process: [
      { step: "01", title: "Requirements", description: "Define endpoints, data models, and integration points upfront." },
      { step: "02", title: "Architecture", description: "Design the right backend structure for your scale and team." },
      { step: "03", title: "Development", description: "Build with tests from the start — unit, integration, and load tests." },
      { step: "04", title: "Security Review", description: "OWASP checklist, penetration testing, and secrets management." },
      { step: "05", title: "Documentation", description: "OpenAPI/Swagger docs so any developer can integrate quickly." },
      { step: "06", title: "Deployment", description: "CI/CD pipelines and production deployment with monitoring." },
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GraphQL", "REST", "Prisma"],
    whyUs: [
      { title: "Security first", description: "Every endpoint is designed with authentication, validation, and rate limiting in mind." },
      { title: "Documentation as standard", description: "Every API ships with complete OpenAPI docs — no guessing for your frontend team." },
      { title: "Tested thoroughly", description: "Unit, integration, and load tests before anything goes to production." },
      { title: "Built to grow", description: "Architecture decisions made with your next 10x in mind, not just launch day." },
    ],
  },

  {
    slug: "ai-ml-solutions",
    category: "development",
    title: "AI/ML Solutions",
    tagline: "Work smarter. Scale without headcount.",
    heroDescription: "We help businesses leverage AI and machine learning to eliminate repetitive work, surface better insights, and build capabilities that would otherwise require a much larger team.",
    icon: Bot,
    accentColor: "bg-[#C4B5FD]",
    heroStats: [
      { value: "70%", label: "Avg. time saved on automated tasks" },
      { value: "LLM", label: "+ ML automation" },
      { value: "Custom", label: "AI solutions" },
    ],
    whatWeDo: {
      heading: "AI that solves real problems, not hype-driven experiments.",
      body: "We cut through the noise and focus on where AI and ML can deliver genuine ROI for your business — whether that's a document processing pipeline, an intelligent chatbot, or a fully automated workflow.",
      bullets: [
        "AI strategy and use-case identification",
        "LLM-powered applications and chatbots",
        "Document processing and data extraction",
        "Predictive analytics and ML model development",
        "API integration with AI services",
      ],
    },
    offerings: [
      { title: "AI Chatbots", description: "LLM-powered assistants trained on your data and integrated into your product." },
      { title: "Document Automation", description: "Extract, classify, and process documents without manual review." },
      { title: "Predictive Analytics", description: "Surface patterns and predictions from your data to drive better decisions." },
      { title: "ML Model Development", description: "Custom machine learning models trained on your proprietary data." },
      { title: "AI Integration", description: "Add OpenAI, Anthropic, or custom model capabilities to your existing product." },
      { title: "Workflow Automation", description: "Connect your tools and automate multi-step processes end to end with AI." },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Identify your highest-value automation and AI opportunities." },
      { step: "02", title: "Solution Design", description: "Design the architecture and choose the right AI models and tools." },
      { step: "03", title: "Prototype", description: "Build a working proof of concept to validate the approach before full build." },
      { step: "04", title: "Build", description: "Production-grade implementation with error handling and monitoring." },
      { step: "05", title: "Test", description: "Accuracy testing, edge-case handling, and performance validation." },
      { step: "06", title: "Deploy & Monitor", description: "Production deployment with ongoing monitoring and model improvement." },
    ],
    techStack: ["OpenAI", "Anthropic", "LangChain", "Python", "Node.js", "AWS Lambda", "Pinecone", "TensorFlow", "PyTorch"],
    whyUs: [
      { title: "ROI-first thinking", description: "We only recommend AI where it will genuinely save time or make money." },
      { title: "End-to-end delivery", description: "Strategy, build, and deployment from one team, not three different vendors." },
      { title: "Practical experience", description: "We've built real AI systems in production — not just prototypes." },
      { title: "Responsible AI", description: "We build with appropriate safeguards, oversight, and data governance built in." },
    ],
  },

  /* ── DESIGN ─────────────────────────────────────────────────────── */

  {
    slug: "ui-ux-design",
    category: "design",
    title: "UI/UX Design",
    tagline: "Interfaces that feel obvious to use.",
    heroDescription: "Great design isn't decoration — it's the difference between a product people love and one they abandon. We design digital experiences that are intuitive, accessible, and unmistakably on-brand.",
    icon: Palette,
    accentColor: "bg-[#C4B5FD]",
    heroStats: [
      { value: "60+", label: "Products designed" },
      { value: "UX + UI", label: "End-to-end design" },
      { value: "Figma-first", label: "Handoff ready" },
    ],
    whatWeDo: {
      heading: "Design that solves problems, not just looks good.",
      body: "We approach every design project with user research and business goals in equal measure. The result is an interface that converts, retains, and delights.",
      bullets: [
        "User research and persona development",
        "Information architecture and user flows",
        "Wireframing and interactive prototyping",
        "High-fidelity UI design in Figma",
        "Design system and component library creation",
      ],
    },
    offerings: [
      { title: "Product Design", description: "End-to-end design for web and mobile products, from research to final UI." },
      { title: "UX Audit", description: "Identify friction, drop-off points, and opportunities in your existing product." },
      { title: "Design Systems", description: "A shared component library that keeps your product consistent at scale." },
      { title: "Prototyping", description: "Clickable prototypes for user testing and stakeholder alignment before dev." },
      { title: "Responsive Design", description: "Pixel-perfect layouts that work beautifully across every screen size." },
      { title: "Design-to-Dev Handoff", description: "Developer-ready Figma files with specs, assets, and interaction notes." },
    ],
    process: [
      { step: "01", title: "Research", description: "User interviews, competitor analysis, and heuristic evaluation." },
      { step: "02", title: "Information Architecture", description: "Site maps, user flows, and content hierarchy before design begins." },
      { step: "03", title: "Wireframes", description: "Low-fidelity layouts to validate structure and flows quickly." },
      { step: "04", title: "Visual Design", description: "High-fidelity UI that applies your brand system to every component." },
      { step: "05", title: "Prototype & Test", description: "Interactive prototypes tested with real users and iterated on." },
      { step: "06", title: "Handoff", description: "Annotated Figma files, exported assets, and developer walkthroughs." },
    ],
    techStack: ["Figma", "Adobe XD", "FigJam", "Maze", "Hotjar", "Lottie", "Zeplin"],
    whyUs: [
      { title: "Research-driven decisions", description: "Every design choice traces back to a user need or business goal." },
      { title: "Design and dev alignment", description: "We work alongside developers, so designs are always feasible and implementation-ready." },
      { title: "Systems thinking", description: "We design components, not screens — so your product stays consistent as it grows." },
      { title: "Accessibility by default", description: "WCAG-compliant design that works for every user, on every device." },
    ],
  },

  {
    slug: "web-design",
    category: "design",
    title: "Web Design",
    tagline: "Websites that look sharp and convert.",
    heroDescription: "Your website is your most important sales tool. We design performant, visually sharp web experiences that reflect your brand and drive real business outcomes.",
    icon: Globe,
    accentColor: "bg-[#BAE6FD]",
    heroStats: [
      { value: "40+", label: "Websites designed" },
      { value: "CRO", label: "Built in from day one" },
      { value: "Responsive", label: "Across all devices" },
    ],
    whatWeDo: {
      heading: "Web design engineered to perform, not just to look good.",
      body: "We combine sharp design with conversion thinking to build websites that load fast, rank well, and turn visitors into customers.",
      bullets: [
        "Custom design tailored to your brand",
        "Conversion-focused layouts and CTAs",
        "Fully responsive across all devices",
        "CMS-ready design for easy content updates",
        "Handoff-ready Figma files for development",
      ],
    },
    offerings: [
      { title: "Marketing Websites", description: "Conversion-focused sites that tell your story and generate leads." },
      { title: "Landing Pages", description: "High-performing, conversion-optimised pages built around specific campaigns." },
      { title: "Corporate Websites", description: "Professional, scalable web presence for established and growing businesses." },
      { title: "E-commerce Design", description: "Product pages and checkout flows designed to maximise conversions." },
      { title: "Website Redesigns", description: "Modernise an existing site without losing SEO equity or brand recognition." },
      { title: "Design Systems", description: "Consistent component libraries that keep your web presence cohesive at scale." },
    ],
    process: [
      { step: "01", title: "Strategy", description: "Understand your audience, goals, and the story your site needs to tell." },
      { step: "02", title: "Wireframes", description: "Structure and content hierarchy locked down before visual design begins." },
      { step: "03", title: "Visual Design", description: "High-fidelity designs with your brand applied to every component." },
      { step: "04", title: "Prototype", description: "Interactive prototype for stakeholder sign-off before development." },
      { step: "05", title: "Handoff", description: "Developer-ready Figma files with specs, assets, and notes." },
      { step: "06", title: "Support", description: "Design support through the development phase to catch any gaps." },
    ],
    techStack: ["Figma", "Adobe XD", "FigJam", "Webflow", "Framer", "Lottie"],
    whyUs: [
      { title: "Conversion-led thinking", description: "Every layout decision is made with your business goal in mind." },
      { title: "Design and dev under one roof", description: "No handoff friction — the team that designs it can also build it." },
      { title: "Brand precision", description: "Your brand identity applied consistently across every page and component." },
      { title: "Mobile-first always", description: "Designed for the smallest screen first and scaled up, never the other way." },
    ],
  },

  {
    slug: "brand-identity",
    category: "design",
    title: "Brand Identity",
    tagline: "A brand that people remember — and trust.",
    heroDescription: "Your brand is more than a logo. We build cohesive brand identities that communicate who you are, what you stand for, and why you're different.",
    icon: Sparkles,
    accentColor: "bg-[#FDE68A]",
    heroStats: [
      { value: "30+", label: "Brands built" },
      { value: "Strategy", label: "Led, not logo-first" },
      { value: "Full", label: "Brand system delivery" },
    ],
    whatWeDo: {
      heading: "Brand identity built on strategy, not just aesthetics.",
      body: "A great brand starts with clarity — who you are, who you serve, and what makes you different. We do that strategic work first, then translate it into a visual identity system that's consistent, memorable, and built to last.",
      bullets: [
        "Brand strategy and positioning",
        "Logo design and visual identity",
        "Typography and colour system",
        "Brand guidelines and usage rules",
        "Application across all touchpoints",
      ],
    },
    offerings: [
      { title: "Brand Strategy", description: "Positioning, messaging hierarchy, and the narrative that drives all design decisions." },
      { title: "Logo Design", description: "A mark that works at every size, in every context, in every colour scheme." },
      { title: "Visual Identity System", description: "Colours, typography, iconography, and layout principles that work together." },
      { title: "Brand Guidelines", description: "A comprehensive document that keeps your brand consistent whoever's using it." },
      { title: "Brand Refresh", description: "Modernise an existing brand without losing the equity you've already built." },
      { title: "Brand Collateral", description: "Business cards, decks, email signatures, and every touchpoint applied." },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Brand audit, competitor landscape, and stakeholder interviews." },
      { step: "02", title: "Strategy", description: "Positioning statement, tone of voice, and brand personality definition." },
      { step: "03", title: "Concept", description: "Two or three distinct creative directions presented with rationale." },
      { step: "04", title: "Design", description: "Develop the chosen direction into a full visual identity system." },
      { step: "05", title: "Application", description: "Apply the identity across your key touchpoints to see it in context." },
      { step: "06", title: "Delivery", description: "All files, guidelines, and an internal brand launch if needed." },
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop", "Brandpad"],
    whyUs: [
      { title: "Strategy before execution", description: "We won't sketch a logo until we know what it needs to say and to whom." },
      { title: "Built for application", description: "Every element is tested across real contexts — print, digital, dark backgrounds." },
      { title: "Long-term thinking", description: "We design identities that will still look right in ten years." },
      { title: "Cross-discipline team", description: "Strategists and designers working together, not in sequence." },
    ],
  },

  {
    slug: "graphic-design",
    category: "design",
    title: "Graphic Design",
    tagline: "Visual communication that stops the scroll.",
    heroDescription: "From social assets to pitch decks to print collateral, we create graphics that communicate your message clearly, look unmistakably on-brand, and hold up at any size.",
    icon: Brush,
    accentColor: "bg-[#A7F3D0]",
    heroStats: [
      { value: "500+", label: "Assets delivered" },
      { value: "Fast", label: "Turnaround" },
      { value: "Brand-consistent", label: "Every time" },
    ],
    whatWeDo: {
      heading: "Design that works as hard as you do.",
      body: "Good graphic design isn't just about making things look nice — it's about communicating the right message to the right audience in the right context.",
      bullets: [
        "Social media graphics and content templates",
        "Presentation and pitch deck design",
        "Print-ready marketing materials",
        "Email headers and newsletter design",
        "Infographics and data visualisation",
      ],
    },
    offerings: [
      { title: "Social Media Graphics", description: "Scroll-stopping visual assets sized and optimised for every social platform." },
      { title: "Pitch Decks", description: "Investor and client pitch decks designed with narrative clarity and visual impact." },
      { title: "Print Collateral", description: "Print-ready brochures, flyers, banners, and signage." },
      { title: "Infographics", description: "Complex data, processes, and ideas made clear, engaging, and shareable." },
      { title: "Email Design", description: "Branded, mobile-responsive email templates and newsletters." },
      { title: "Ad Creative", description: "High-converting digital ad creative for Google, Meta, and LinkedIn." },
    ],
    process: [
      { step: "01", title: "Brief", description: "We capture the objective, audience, format requirements, and brand guidelines." },
      { step: "02", title: "Concept", description: "Initial directions presented for feedback before full production." },
      { step: "03", title: "Design", description: "Full execution of the approved direction with brand precision." },
      { step: "04", title: "Review", description: "Structured rounds of feedback with tracked revisions." },
      { step: "05", title: "Export", description: "Files delivered in every format you need." },
    ],
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe InDesign", "Canva Pro", "After Effects"],
    whyUs: [
      { title: "Brand consistency guaranteed", description: "Every asset goes through a brand-check before it leaves our hands." },
      { title: "Fast turnaround", description: "Most assets delivered within 48–72 hours without sacrificing quality." },
      { title: "Scalable retainer model", description: "Ongoing design support so you always have a designer on call." },
      { title: "Format expertise", description: "We know the specs for every platform and format — you don't have to." },
    ],
  },

  {
    slug: "3d-product-visualization",
    category: "design",
    title: "3D & Product Visualization",
    tagline: "Make the unseen easy to understand.",
    heroDescription: "3D animation, product visualization, and interactive experiences that help people understand a product before it exists — or see it in ways photography never could.",
    icon: Box,
    accentColor: "bg-[#BFDBFE]",
    heroStats: [
      { value: "High-fidelity", label: "3D renders" },
      { value: "Product & Arch", label: "Visualization" },
      { value: "Animation", label: "Ready assets" },
    ],
    whatWeDo: {
      heading: "3D visuals that sell before the product ships.",
      body: "From architectural walkthroughs to product renders and explainer animations, we create 3D visuals that communicate complex ideas instantly and make your product unforgettable.",
      bullets: [
        "Product and packaging 3D renders",
        "Architectural and interior visualizations",
        "3D explainer animations",
        "Interactive 3D for web and presentations",
        "Character and environment modelling",
      ],
    },
    offerings: [
      { title: "Product Renders", description: "Photorealistic 3D renders of your product for marketing, packaging, and sales materials." },
      { title: "Architectural Visualization", description: "Interior and exterior renders and walkthroughs for real estate and construction." },
      { title: "3D Walkthroughs", description: "Animated camera tours of spaces or products for sales and presentations." },
      { title: "Explainer Animations", description: "3D animations that explain how a product works in a clear, engaging way." },
      { title: "3D Modelling", description: "High-detail 3D models for products, environments, and characters." },
      { title: "Interactive 3D", description: "Web-based 3D experiences where users can explore and configure products." },
    ],
    process: [
      { step: "01", title: "Brief", description: "Understand the product, use case, and desired output format." },
      { step: "02", title: "Modelling", description: "Build accurate 3D geometry from references, CAD files, or sketches." },
      { step: "03", title: "Texturing", description: "Apply materials, colours, and surface details." },
      { step: "04", title: "Lighting & Scene", description: "Set up environment, lighting, and camera angles." },
      { step: "05", title: "Render & Review", description: "High-resolution renders delivered for client review." },
      { step: "06", title: "Final Delivery", description: "Final files in all required formats and resolutions." },
    ],
    techStack: ["Blender", "Cinema 4D", "3ds Max", "KeyShot", "Unreal Engine", "Adobe After Effects", "Substance Painter"],
    whyUs: [
      { title: "Photorealistic quality", description: "Renders indistinguishable from photography — without the photo shoot cost." },
      { title: "Fast iteration", description: "Change colours, angles, or environments in hours, not days." },
      { title: "Multi-format delivery", description: "Still renders, animations, and interactive — all from one 3D asset." },
      { title: "Technical accuracy", description: "We work from your CAD files or technical specs for precision." },
    ],
  },

  {
    slug: "motion-animation",
    category: "design",
    title: "Motion & Animation",
    tagline: "Movement that makes your brand memorable.",
    heroDescription: "From UI micro-interactions to full brand animations and explainer videos, we create motion design that brings your brand to life and communicates ideas that static design can't.",
    icon: Zap,
    accentColor: "bg-[#FDE68A]",
    heroStats: [
      { value: "UI + Brand", label: "Motion design" },
      { value: "Explainer", label: "Video production" },
      { value: "Web-ready", label: "Lottie & CSS" },
    ],
    whatWeDo: {
      heading: "Motion design that does more than look good.",
      body: "Great motion design communicates, guides attention, and reinforces brand personality. We create animations that feel intentional — not just decorative.",
      bullets: [
        "UI micro-interactions and transitions",
        "Brand identity animations and logo reveals",
        "Explainer and product demo videos",
        "Social media video and animated content",
        "Lottie animations for web and mobile",
      ],
    },
    offerings: [
      { title: "UI Micro-interactions", description: "Subtle, purposeful animations that make your product feel polished and intuitive." },
      { title: "Logo Animation", description: "Animated logo reveals for video intros, presentations, and social media." },
      { title: "Explainer Videos", description: "2D animated videos that explain your product or service in under 90 seconds." },
      { title: "Brand Motion System", description: "A set of consistent motion principles and animations for your brand." },
      { title: "Social Video Content", description: "Animated posts, stories, and ads designed for social media performance." },
      { title: "Lottie Animations", description: "Lightweight, scalable web and mobile animations delivered as Lottie JSON." },
    ],
    process: [
      { step: "01", title: "Brief", description: "Define the animation purpose, duration, style, and delivery format." },
      { step: "02", title: "Storyboard", description: "Key frames and timing mapped out before animation begins." },
      { step: "03", title: "Design", description: "Static frame design if not already provided." },
      { step: "04", title: "Animation", description: "Full animation with timing, easing, and sound if required." },
      { step: "05", title: "Review", description: "Feedback rounds with tracked revisions." },
      { step: "06", title: "Export", description: "Delivered in all required formats — MP4, GIF, Lottie, WebM." },
    ],
    techStack: ["Adobe After Effects", "Lottie", "Figma", "Adobe Premiere", "Cinema 4D", "BodyMovin", "CSS Animations"],
    whyUs: [
      { title: "Purposeful motion", description: "Every animation has a reason — we don't animate for animation's sake." },
      { title: "Brand consistency", description: "Motion that reflects your brand personality, not just generic transitions." },
      { title: "Web-optimised delivery", description: "Lottie and CSS animations that are lightweight and performant." },
      { title: "Fast turnaround", description: "Most motion projects delivered within 5–7 business days." },
    ],
  },

  /* ── MARKETING ───────────────────────────────────────────────────── */

  {
    slug: "digital-marketing",
    category: "marketing",
    title: "Digital Marketing",
    tagline: "Marketing that earns its budget.",
    heroDescription: "We plan and execute digital marketing strategies that drive qualified traffic, generate leads, and build brand equity — with clear attribution at every step.",
    icon: Megaphone,
    accentColor: "bg-[#FDE68A]",
    heroStats: [
      { value: "3x", label: "Avg. ROAS achieved" },
      { value: "Full-funnel", label: "Strategy" },
      { value: "Data-driven", label: "Every decision" },
    ],
    whatWeDo: {
      heading: "Marketing strategy that connects the dots.",
      body: "Digital marketing only works when the strategy, content, channels, and measurement all work together. We build full-funnel campaigns that attract the right audience and convert them consistently.",
      bullets: [
        "Integrated digital marketing strategy",
        "Paid search and paid social campaigns",
        "Content marketing and SEO",
        "Email marketing and automation",
        "Analytics, attribution, and reporting",
      ],
    },
    offerings: [
      { title: "Paid Search (PPC)", description: "Google Ads campaigns that capture demand at the moment of intent." },
      { title: "Paid Social", description: "Meta, LinkedIn, and TikTok campaigns that reach and convert your ideal audience." },
      { title: "Content Marketing", description: "Strategic content that builds authority and drives organic traffic." },
      { title: "Email Campaigns", description: "Segmented email sequences that nurture leads and retain customers." },
      { title: "Marketing Automation", description: "HubSpot, Mailchimp, or custom automations that work while you sleep." },
      { title: "Analytics & Reporting", description: "Clear dashboards that show what's working, what's not, and what to do next." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review your current channels, competitors, and market position." },
      { step: "02", title: "Strategy", description: "Define your ICP, messaging, channels, and budget allocation." },
      { step: "03", title: "Setup", description: "Tracking, pixels, UTMs, and integrations configured correctly from the start." },
      { step: "04", title: "Launch", description: "Campaigns go live with structured A/B tests built in." },
      { step: "05", title: "Optimise", description: "Weekly analysis and continuous improvement based on real performance data." },
      { step: "06", title: "Report", description: "Monthly reviews with clear attribution, insights, and next-quarter planning." },
    ],
    techStack: ["Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "GA4", "Google Tag Manager", "Semrush", "Ahrefs"],
    whyUs: [
      { title: "Strategy before tactics", description: "We never run ads without knowing exactly who we're targeting and why." },
      { title: "Full attribution", description: "We track the full funnel so you know exactly what's driving revenue." },
      { title: "Cross-channel expertise", description: "Search, social, email, and content — coordinated, not siloed." },
      { title: "Transparent reporting", description: "Monthly reports in plain English with honest assessments and clear next steps." },
    ],
  },

  {
    slug: "search-engine-optimization",
    category: "marketing",
    title: "Search Engine Optimization",
    tagline: "Rank for the terms that actually drive revenue.",
    heroDescription: "We combine technical SEO rigour with content strategy to build sustainable organic growth — the kind that compounds over time and doesn't disappear when you pause your ad spend.",
    icon: Search,
    accentColor: "bg-[#A7F3D0]",
    heroStats: [
      { value: "2x", label: "Avg. organic traffic growth" },
      { value: "Technical", label: "+ content SEO" },
      { value: "Long-term", label: "Growth focus" },
    ],
    whatWeDo: {
      heading: "SEO that builds an asset, not a dependency.",
      body: "Most SEO agencies optimise for rankings. We optimise for revenue. That means focusing on keywords with commercial intent, content that converts, and technical foundations that let your site compete for years.",
      bullets: [
        "Technical SEO audit and remediation",
        "Keyword research and content strategy",
        "On-page optimisation at scale",
        "Link building and digital PR",
        "Performance tracking and monthly reporting",
      ],
    },
    offerings: [
      { title: "Technical SEO", description: "Core Web Vitals, crawl health, schema markup, and everything under the hood." },
      { title: "Keyword Research", description: "Identifying the terms your ideal customers actually search for." },
      { title: "Content Strategy", description: "A publishing plan that targets the right topics in the right order." },
      { title: "Content Writing", description: "SEO-optimised articles and landing pages that rank and convert." },
      { title: "Link Building", description: "High-quality backlinks through outreach, digital PR, and partnerships." },
      { title: "Local SEO", description: "Dominate local search results for your city and service area." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Full technical and content audit to establish a baseline and find quick wins." },
      { step: "02", title: "Research", description: "Keyword and competitor analysis to identify the highest-value opportunities." },
      { step: "03", title: "Technical Fix", description: "Resolve crawl errors, improve page speed, and fix structural issues." },
      { step: "04", title: "Content Plan", description: "A prioritised editorial calendar aligned to your commercial goals." },
      { step: "05", title: "Publish & Optimise", description: "Regular content publication and on-page optimisation." },
      { step: "06", title: "Build & Report", description: "Link building campaigns and monthly performance reporting." },
    ],
    techStack: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "GA4", "Surfer SEO", "Notion"],
    whyUs: [
      { title: "Revenue-focused", description: "We measure success in qualified traffic and leads, not just rankings." },
      { title: "Technical depth", description: "We fix the underlying issues that hold sites back, not just the surface symptoms." },
      { title: "Content quality", description: "We write content humans want to read and search engines want to rank." },
      { title: "Transparent reporting", description: "Monthly reports that connect SEO activity to business outcomes." },
    ],
  },

  {
    slug: "social-media-marketing",
    category: "marketing",
    title: "Social Media Marketing",
    tagline: "A social presence worth following.",
    heroDescription: "We build and manage social media strategies that grow engaged audiences, build brand credibility, and drive real business outcomes — not just vanity metrics.",
    icon: ThumbsUp,
    accentColor: "bg-[#BAE6FD]",
    heroStats: [
      { value: "10x", label: "Avg. engagement growth" },
      { value: "All major", label: "Platforms covered" },
      { value: "Content +", label: "Community management" },
    ],
    whatWeDo: {
      heading: "Social media that builds a business, not just a following.",
      body: "Follower counts are vanity. We focus on the metrics that matter — reach, engagement quality, click-through, and ultimately, leads and revenue.",
      bullets: [
        "Platform-specific content strategy",
        "Content creation and copywriting",
        "Community management and engagement",
        "Paid social campaign management",
        "Monthly performance analysis and reporting",
      ],
    },
    offerings: [
      { title: "Content Strategy", description: "A platform-specific plan that aligns content to your audience and business goals." },
      { title: "Content Creation", description: "Graphics, short-form video, carousels, and copy — all produced in-house." },
      { title: "Community Management", description: "Timely, on-brand responses that build loyalty and handle issues professionally." },
      { title: "Instagram Marketing", description: "Feed, Stories, and Reels strategy for visual brands." },
      { title: "LinkedIn Marketing", description: "B2B authority building and lead generation through LinkedIn." },
      { title: "Paid Social", description: "Meta and LinkedIn ads that amplify your best content and target new audiences." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Assess your current social presence, audience, and competitive landscape." },
      { step: "02", title: "Strategy", description: "Define platforms, content pillars, posting cadence, and KPIs." },
      { step: "03", title: "Content Plan", description: "Monthly content calendar approved before publishing." },
      { step: "04", title: "Create & Publish", description: "All content created, scheduled, and published on your behalf." },
      { step: "05", title: "Engage", description: "Daily community management across all active platforms." },
      { step: "06", title: "Review", description: "Monthly performance report with insight-led recommendations." },
    ],
    techStack: ["Meta Business Suite", "Buffer", "Hootsuite", "Canva", "CapCut", "LinkedIn Campaign Manager", "Sprout Social"],
    whyUs: [
      { title: "Content quality first", description: "We won't publish content that doesn't meet the brand standard, full stop." },
      { title: "Platform specialists", description: "What works on LinkedIn is different to what works on Instagram — we know the difference." },
      { title: "Consistency guaranteed", description: "A reliable publishing cadence maintained regardless of how busy you are." },
      { title: "Results over vanity", description: "We report on engagement quality, reach, and conversions — not just follower counts." },
    ],
  },

  {
    slug: "content-marketing",
    category: "marketing",
    title: "Content Marketing",
    tagline: "Content that builds authority and drives growth.",
    heroDescription: "We create strategic content that attracts, educates, and converts your ideal customers — building long-term organic growth and brand authority in your market.",
    icon: FileText,
    accentColor: "bg-[#A7F3D0]",
    heroStats: [
      { value: "Authority", label: "Building content" },
      { value: "SEO + conversion", label: "Focused writing" },
      { value: "Long-form", label: "+ short-form" },
    ],
    whatWeDo: {
      heading: "Content that earns attention instead of paying for it.",
      body: "Great content marketing isn't about publishing volume — it's about publishing the right content for the right audience at the right stage of their journey.",
      bullets: [
        "Content strategy and editorial planning",
        "Blog and long-form article writing",
        "Case studies and white papers",
        "Email newsletters and nurture sequences",
        "Content distribution and promotion",
      ],
    },
    offerings: [
      { title: "Content Strategy", description: "A research-backed plan that targets the topics your audience is searching for." },
      { title: "Blog Writing", description: "Long-form, SEO-optimised articles that rank and drive qualified traffic." },
      { title: "Case Studies", description: "Compelling client success stories that build trust and accelerate sales." },
      { title: "White Papers", description: "In-depth research content that establishes authority in your industry." },
      { title: "Email Newsletters", description: "Consistent, value-driven newsletters that keep your audience engaged." },
      { title: "Content Distribution", description: "Promotion strategy to amplify your content beyond organic search." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Assess existing content, gaps, and competitor content landscape." },
      { step: "02", title: "Strategy", description: "Define content pillars, target keywords, and audience personas." },
      { step: "03", title: "Planning", description: "Build a prioritised editorial calendar aligned to business goals." },
      { step: "04", title: "Creation", description: "Research-backed writing with SEO best practices built in." },
      { step: "05", title: "Publish & Optimise", description: "Publish with proper on-page SEO and internal linking." },
      { step: "06", title: "Report", description: "Monthly reporting on traffic, rankings, and leads generated." },
    ],
    techStack: ["Ahrefs", "Semrush", "Surfer SEO", "Notion", "WordPress", "HubSpot", "GA4"],
    whyUs: [
      { title: "Strategy-led", description: "We don't write content for the sake of it — every piece has a purpose." },
      { title: "SEO baked in", description: "Keyword research and on-page optimisation included in every piece." },
      { title: "Subject matter depth", description: "We research thoroughly so your content sounds like it came from an expert." },
      { title: "Measurable results", description: "We track rankings, traffic, and leads — not just word counts." },
    ],
  },

  {
    slug: "performance-marketing",
    category: "marketing",
    title: "Performance Marketing",
    tagline: "Paid media that pays for itself.",
    heroDescription: "We run performance marketing campaigns that maximise your return on ad spend — from Google and Meta to programmatic, with data-driven optimisation at every step.",
    icon: TrendingUp,
    accentColor: "bg-[#FDE68A]",
    heroStats: [
      { value: "3x+", label: "Average ROAS" },
      { value: "Google + Meta", label: "Platform expertise" },
      { value: "CRO", label: "Included" },
    ],
    whatWeDo: {
      heading: "Performance campaigns built around your revenue goals.",
      body: "We don't run ads to spend your budget — we run ads to hit your ROAS target. Every campaign is built around your cost per acquisition and optimised relentlessly to hit it.",
      bullets: [
        "Google Ads (Search, Display, Shopping, YouTube)",
        "Meta Ads (Facebook and Instagram)",
        "LinkedIn and TikTok paid campaigns",
        "Landing page and conversion rate optimisation",
        "Attribution modelling and reporting",
      ],
    },
    offerings: [
      { title: "Google Search Ads", description: "Capture high-intent demand with search campaigns optimised for conversion." },
      { title: "Google Shopping", description: "Product listing ads that drive e-commerce sales at target ROAS." },
      { title: "Meta Advertising", description: "Facebook and Instagram campaigns for awareness, leads, and sales." },
      { title: "LinkedIn Ads", description: "B2B demand generation and lead capture via LinkedIn's professional audience." },
      { title: "Retargeting", description: "Re-engage warm audiences with tailored messaging across platforms." },
      { title: "CRO & Landing Pages", description: "Optimise the post-click experience to maximise conversion from paid traffic." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review existing campaigns, account structure, and historical data." },
      { step: "02", title: "Strategy", description: "Define target CPA/ROAS, audience strategy, and channel mix." },
      { step: "03", title: "Setup", description: "Campaign build, tracking setup, and creative production." },
      { step: "04", title: "Launch", description: "Go live with structured A/B tests and budget controls." },
      { step: "05", title: "Optimise", description: "Weekly bid management, audience pruning, and creative rotation." },
      { step: "06", title: "Report", description: "Monthly performance review with clear attribution and next-period planning." },
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Tag Manager", "GA4", "Looker Studio", "Triple Whale"],
    whyUs: [
      { title: "ROAS-obsessed", description: "We optimise for your revenue goal, not our reporting metrics." },
      { title: "Creative + media together", description: "We produce and test ad creative in-house, so we can iterate fast." },
      { title: "Full-funnel approach", description: "We optimise the landing page as well as the ad — because both matter." },
      { title: "Transparent spend", description: "You see exactly where every dollar goes and what it generates." },
    ],
  },

  {
    slug: "analytics-growth",
    category: "marketing",
    title: "Analytics & Growth",
    tagline: "Data that tells you what to do next.",
    heroDescription: "We set up, clean, and interpret your marketing analytics so you can make confident, data-driven decisions — and stop guessing what's actually driving growth.",
    icon: BarChart2,
    accentColor: "bg-[#BAE6FD]",
    heroStats: [
      { value: "Full-funnel", label: "Attribution" },
      { value: "GA4 + custom", label: "Dashboards" },
      { value: "Actionable", label: "Insights" },
    ],
    whatWeDo: {
      heading: "Analytics that connect marketing activity to revenue.",
      body: "Most businesses have data — they just can't read it. We set up proper tracking, build clear dashboards, and translate the numbers into decisions that move the business forward.",
      bullets: [
        "GA4 setup, auditing, and migration",
        "Conversion tracking and event configuration",
        "Custom dashboard and reporting setup",
        "Attribution modelling and multi-touch analysis",
        "Growth experimentation and A/B testing frameworks",
      ],
    },
    offerings: [
      { title: "Analytics Audit", description: "Identify tracking gaps, data quality issues, and attribution blind spots." },
      { title: "GA4 Setup & Migration", description: "Proper GA4 implementation with events, conversions, and audiences configured." },
      { title: "Custom Dashboards", description: "Looker Studio or Metabase dashboards built around your KPIs." },
      { title: "Attribution Modelling", description: "Understand which channels and touchpoints are actually driving revenue." },
      { title: "A/B Testing", description: "Structured experimentation programmes to continuously improve conversion." },
      { title: "Growth Consulting", description: "Monthly strategy sessions to identify and act on growth opportunities." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Assess your current tracking setup and identify gaps and inaccuracies." },
      { step: "02", title: "Tracking Plan", description: "Define every event, conversion, and dimension you need to capture." },
      { step: "03", title: "Implementation", description: "Set up or fix tracking via GTM, GA4, and platform pixels." },
      { step: "04", title: "Dashboard Build", description: "Build dashboards that surface the KPIs your team actually uses." },
      { step: "05", title: "Analysis", description: "Regular analysis sessions to interpret data and identify opportunities." },
      { step: "06", title: "Experimentation", description: "Run structured A/B tests to act on insights from the data." },
    ],
    techStack: ["GA4", "Google Tag Manager", "Looker Studio", "Metabase", "Mixpanel", "Hotjar", "Optimizely", "Segment"],
    whyUs: [
      { title: "Data quality first", description: "We fix your tracking before we try to analyse anything." },
      { title: "Business-first reporting", description: "Dashboards built around your goals, not vanity metrics." },
      { title: "Actionable insights", description: "We don't just report — we tell you what to do with the data." },
      { title: "Full-stack analytics", description: "From tag implementation to attribution modelling — all in one team." },
    ],
  },

];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}

export function getServicesByCategory(category: ServiceData["category"]): ServiceData[] {
  return servicesData.filter((s) => s.category === category);
}

export type ServiceCategory = "development" | "design" | "marketing";

export const categoryMeta: Record<ServiceCategory, { label: string; description: string }> = {
  development: {
    label: "Software Development",
    description: "From custom web apps to mobile, SaaS platforms, ERP/CRM systems, and AI solutions — we engineer digital products that scale.",
  },
  design: {
    label: "Design",
    description: "UI/UX, web design, brand identity, graphic design, 3D visualization, and motion — we craft experiences that are intuitive, beautiful, and on-brand.",
  },
  marketing: {
    label: "Marketing",
    description: "Digital marketing, SEO, social media, content, performance marketing, and analytics — we build strategies that drive qualified traffic, generate leads, and grow your brand.",
  },
};
