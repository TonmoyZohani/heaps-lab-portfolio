export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  coverGradient: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "web-development-in-the-ai-era",
    title: "Web Development in the AI Era: How the Craft is Changing",
    excerpt: "AI isn't replacing web developers — it's changing what good development looks like. Here's what that means for your business and the teams building your products.",
    category: "Technology",
    readTime: "7 min read",
    publishedAt: "September 2, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    content: {
      intro: "A few years ago, writing a component from scratch was a half-day job. Today, a developer with the right AI tools can produce the same output in twenty minutes, review it, and ship it by lunch. That's not a marginal improvement — it's a structural shift in how software gets built. And for businesses commissioning web projects, it changes what you should expect, what you should pay, and what you should demand.",
      sections: [
        {
          heading: "AI as a Coding Collaborator",
          body: "The most immediate change is speed. Tools like GitHub Copilot, Cursor, and Claude can generate boilerplate, suggest implementations, catch bugs in real time, and write tests — all while the developer stays in flow. The practical result is that developers are spending less time on mechanical work and more time on architecture, product thinking, and the kind of judgment that AI can't replicate yet.\n\nFor clients, this means timelines are compressing. A project that once took 12 weeks can now be scoped at 8. But this only holds true if the development team is actually using these tools well. Knowing how to prompt, review, and iterate with AI assistance is itself a skill — one that separates modern developers from those still working the way they did in 2019.",
        },
        {
          heading: "The Rise of AI-Native Features",
          body: "Beyond development speed, AI is changing what websites and web apps can actually do. Features that previously required expensive custom ML infrastructure are now accessible via APIs. Semantic search, content personalisation, intelligent chatbots, document processing, recommendation engines — all of these are now within reach for mid-sized businesses.\n\nThe threshold for 'AI-powered product' has dropped dramatically. If you're building a SaaS product, a customer portal, or a complex marketing platform in 2026 and you're not thinking about where AI can add value to the user experience, you're already behind your competition.",
        },
        {
          heading: "What Hasn't Changed",
          body: "The fundamentals remain. A website still needs to load fast, look right on every device, tell a clear story, and convert visitors into customers. AI doesn't make bad strategy good. It doesn't replace the thinking that goes into information architecture, the craftsmanship of a well-designed component, or the judgment call about what to build in the first place.\n\nThe teams getting the most from AI are the ones who had strong foundations to begin with. AI amplifies good developers; it doesn't rescue weak ones.",
        },
        {
          heading: "What This Means for Businesses",
          body: "If you're commissioning a web project, ask your development partner directly: how are you using AI in your workflow? A team that can't answer that question — or worse, dismisses it — is a team that's working slower and more expensively than they need to be.\n\nBut also: don't expect AI to eliminate the need for experienced judgment. The value of a good development team in the AI era isn't the hours they log — it's the decisions they make, the problems they anticipate, and the quality of what they ship.",
        },
      ],
      conclusion: "The web development industry is in the middle of a genuine productivity revolution. For businesses, that means more capability at lower cost — but only if you're working with teams who are moving with it. At Heaps Lab, AI tools are a core part of how we work, not a novelty. We use them to move faster without cutting corners, so you get better work, sooner.",
    },
  },
  {
    slug: "why-your-business-needs-a-website-not-just-social-media",
    title: "Why Your Business Needs a Website — Not Just Social Media",
    excerpt: "Instagram followers don't compound. A well-built website does. Here's why owned digital real estate still beats rented platforms every time.",
    category: "Business",
    readTime: "5 min read",
    publishedAt: "August 22, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #0d4a3a 0%, #1a7a5e 50%, #20a878 100%)",
    content: {
      intro: "There's a pattern we see regularly: a business with 20,000 Instagram followers and no website. Or a website that hasn't been updated since 2018 because 'everything happens on social now'. Both are the same mistake — building your digital presence on someone else's land.",
      sections: [
        {
          heading: "You Don't Own Your Social Following",
          body: "When you build an audience on Instagram, TikTok, or LinkedIn, you're building it on a platform that can change its algorithm, restrict your reach, or suspend your account at any time. Businesses have lost years of audience-building overnight because of a policy change or an automated moderation decision they had no say in.\n\nYour website is yours. You control the experience, the messaging, the data, and the SEO equity you accumulate over time. That's not a small distinction — it's the difference between renting and owning.",
        },
        {
          heading: "Websites Compound. Social Posts Don't.",
          body: "A well-optimised blog post can drive traffic for five years. A social post is stale in 48 hours. The long-term return on a website — especially one built with SEO in mind — is fundamentally different from the treadmill of social content creation.\n\nEvery page you publish, every case study you add, every service page you optimise is an asset that keeps working for you. Social content is overhead. Website content is investment.",
        },
        {
          heading: "Credibility Still Lives on Websites",
          body: "Before a B2B buyer signs a contract, before a consumer makes a considered purchase, before a potential employee decides whether to apply — they check the website. Not the Instagram feed. The website is where credibility is established and trust is built.\n\nA business without a good website sends a signal, whether it intends to or not. That signal is: we haven't invested in our digital presence. For many buyers, that's enough to look elsewhere.",
        },
        {
          heading: "Social and Website Work Best Together",
          body: "This isn't an either/or argument. Social media is excellent for reach, discovery, and building an audience. Websites are where you convert that audience into customers, capture their details, and serve them after the sale.\n\nThe mistake is treating social as a replacement for the website rather than a channel into it. Drive people from your social platforms to your website — that's where the commercial relationship deepens.",
        },
      ],
      conclusion: "Build your digital presence on land you own. Use social media to drive traffic to it, not to replace it. If your website isn't doing that job properly, that's the problem worth solving first.",
    },
  },
  {
    slug: "what-makes-a-saas-product-actually-retain-users",
    title: "What Makes a SaaS Product Actually Retain Users",
    excerpt: "Acquisition gets the users in. Retention is the business. Most SaaS products get this backwards — here's what the ones that get it right actually do.",
    category: "Product",
    readTime: "8 min read",
    publishedAt: "August 10, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #2d1b69 0%, #5e3db8 50%, #8258e0 100%)",
    content: {
      intro: "Most SaaS teams obsess over acquisition. They optimise their ads, refine their landing pages, A/B test their sign-up flow — and then watch their churn rate quietly eat all of it. The economics of SaaS only work when retention is strong. Everything else is renting customers you'll lose.",
      sections: [
        {
          heading: "The Activation Problem",
          body: "The most dangerous moment in the SaaS lifecycle is the first 10 minutes after sign-up. A user who doesn't reach their first 'aha moment' quickly will churn before they even become a real user. Most SaaS products don't have an acquisition problem. They have an activation problem.\n\nThe fix is almost never more features — it's a sharper, faster path to the core value. What is the one thing your product does that makes users say 'I need this'? How quickly can a new user get there? Every second of friction between sign-up and that moment is churn risk.",
        },
        {
          heading: "Habit Formation vs. Obligation",
          body: "Products that retain well become part of users' workflows. They show up in the daily routine — not because they send aggressive notification emails, but because they've made themselves genuinely useful often enough that users form a habit.\n\nObligation-based retention (lock-in, data silos, switching costs) works until it doesn't. Habit-based retention compounds. The products with the best NPS scores and lowest churn are almost always the ones that are genuinely the easiest, fastest way to do a thing the user needs to do regularly.",
        },
        {
          heading: "The Role of Design in Retention",
          body: "Retention is a design problem as much as a product problem. A confusing interface, an inconsistent experience, missing empty states, unclear error messages — all of these create friction that compounds over time into churn.\n\nThe teams with the lowest churn rates are typically the ones who treat their product design as a continuous investment, not a launch deliverable. Regular usability reviews, session recordings, exit interviews — these feed a loop of incremental improvements that keep the experience sharp.",
        },
        {
          heading: "Measuring What Actually Matters",
          body: "Vanity metrics kill retention focus. If your team is celebrating daily active users while your 90-day retention is 20%, the celebration is misplaced. The metrics that predict retention are: time to first value, feature adoption depth, and session frequency over the first 30 days.\n\nUsers who adopt three or more features in the first two weeks retain at a dramatically higher rate than those who only use one. That's not an accident — it means the product has become embedded in more than one workflow. Depth of adoption is the retention signal that matters most.",
        },
      ],
      conclusion: "Retention is the compounding flywheel that makes SaaS economics work. It's not built through tricks, dark patterns, or lock-in — it's built by making a product that genuinely earns its place in people's working lives. That starts with design, activation, and an honest conversation about what 'value' actually means for your users.",
    },
  },
  {
    slug: "the-real-cost-of-a-cheap-website",
    title: "The Real Cost of a Cheap Website",
    excerpt: "A £500 website sounds like a bargain until you calculate what it's costing you in lost leads, brand damage, and developer time to fix it.",
    category: "Business",
    readTime: "6 min read",
    publishedAt: "July 28, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #7c1a1a 0%, #a83020 50%, #cc4422 100%)",
    content: {
      intro: "The conversation usually goes like this: 'We had a website built for $800. It's fine for now — we'll invest properly when we grow.' The problem with this logic is that the website is often the reason you're not growing.",
      sections: [
        {
          heading: "Lost Leads You'll Never Know About",
          body: "A slow, poorly designed, or untrustworthy website doesn't tell you when it loses a lead. It just quietly fails. The user lands, spends six seconds forming an impression, and leaves. You never know they were there. There's no red flag, no error message — just absence.\n\nThe research on this is consistent: 75% of users judge a company's credibility based on its website design. A website that doesn't inspire trust doesn't just lose conversions — it actively damages the perception of your brand.",
        },
        {
          heading: "The Hidden Maintenance Tax",
          body: "Cheap websites are usually built on fragile foundations — poorly structured templates, plugin stacks that conflict, hosting that can't handle traffic spikes, no version control. What looks like a one-time cost becomes an ongoing maintenance burden.\n\nEvery update is a risk. Every new feature requires a developer to untangle what was built before. Every security vulnerability takes longer to patch because the codebase is a mess. The total cost of ownership of a cheap website over three years often exceeds the cost of a properly built one.",
        },
        {
          heading: "SEO Starts With the Foundation",
          body: "Google's Core Web Vitals — the performance signals that directly affect search rankings — are directly tied to how the website is built. A slow website doesn't just frustrate users; it ranks lower. A website without proper semantic HTML, structured data, and clean page architecture is invisible to search engines regardless of how good your content is.\n\nYou cannot retrofit good SEO onto a badly built website. It has to be there from the start.",
        },
        {
          heading: "What You Should Actually Expect",
          body: "A properly built website isn't cheap. But the question isn't 'how much does it cost to build?' — it's 'what is this website worth if it works properly?' If your website should be converting 3% of visitors into leads, and it's converting 0.5%, the gap between those numbers is the cost of the cheap website. Every month.\n\nInvest in it properly once. Maintain it well. The return compounds.",
        },
      ],
      conclusion: "The cheap website isn't cheaper. It's just deferred cost with compounding interest. The businesses that grow fastest online are almost always the ones that treated their website as infrastructure — not a line item to minimise.",
    },
  },
  {
    slug: "mobile-first-is-not-optional-anymore",
    title: "Mobile-First Is Not Optional Anymore",
    excerpt: "Over 60% of web traffic is mobile. If your website or product isn't built mobile-first, you're not just behind — you're actively losing business.",
    category: "Design",
    readTime: "5 min read",
    publishedAt: "July 14, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #0a3d6b 0%, #1a72b8 50%, #2096e0 100%)",
    content: {
      intro: "Mobile-first became a design principle around 2013. In 2026, it's not a principle — it's a baseline requirement. And yet, the number of websites and web applications we encounter that were clearly designed for desktop and 'adapted' for mobile remains astonishing.",
      sections: [
        {
          heading: "The Numbers Make This Simple",
          body: "Global mobile web traffic consistently sits above 60%. In many industries — hospitality, retail, food and beverage, local services — it's above 80%. If your website isn't excellent on mobile, you're actively failing the majority of your audience.\n\nGoogle has been using mobile-first indexing since 2019. That means Google crawls and indexes the mobile version of your site first. A poor mobile experience doesn't just frustrate users — it directly suppresses your search rankings.",
        },
        {
          heading: "Mobile-First in Design vs. Responsive",
          body: "There's an important distinction between mobile-first design and responsive design. Responsive design says: 'we built it for desktop and it adjusts for mobile.' Mobile-first says: 'we designed for the smallest screen first and enhanced for larger ones.'\n\nThe difference in output is significant. Mobile-first products have leaner interfaces, faster load times, and more focused user flows — because designing for constraints forces clarity. Responsive-as-afterthought products have cluttered mobile experiences full of elements that were never meant to live on a small screen.",
        },
        {
          heading: "Performance Is Part of Mobile-First",
          body: "Mobile users are frequently on slower connections. A 4MB hero image that loads instantly on a fibre connection takes 8 seconds on a typical mobile network. Mobile-first means optimising images, reducing JavaScript bundle sizes, lazy loading off-screen content, and treating performance as a design constraint from day one.\n\nCore Web Vitals — Google's performance metrics — weight these factors directly. Mobile performance is not a nice-to-have; it's a search ranking signal.",
        },
        {
          heading: "Designing Touch-First Interactions",
          body: "Hover states don't exist on mobile. Tiny click targets cause mis-taps and frustration. Sidebars that make perfect sense on desktop become navigation nightmares on a 390px screen. Mobile-first design means rethinking interaction patterns from the ground up — not just making things smaller.\n\nThe best mobile experiences are ones where the interface feels like it was designed specifically for a thumb. Clear hierarchy, generous touch targets, bottom-of-screen navigation for thumb reach, minimal typing — these are the hallmarks of genuinely mobile-first thinking.",
        },
      ],
      conclusion: "If your digital product isn't excellent on mobile, it's not excellent. There's no middle ground anymore. The businesses winning online in 2026 treat mobile not as a variant of the desktop experience but as the primary experience — and everything else is an enhancement.",
    },
  },
  {
    slug: "how-to-brief-a-design-agency",
    title: "How to Brief a Design Agency (And Actually Get What You Want)",
    excerpt: "Most design projects go wrong before a single pixel is drawn. The brief is where success or failure is determined — here's how to write one that works.",
    category: "Agency",
    readTime: "6 min read",
    publishedAt: "June 30, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #1a8466 0%, #20b088 50%, #26cc9e 100%)",
    content: {
      intro: "We've received thousands of project briefs over the years. The ones that lead to great work share a set of qualities that have nothing to do with how detailed they are. Some of the best briefs we've ever received were a single page. Some of the worst were 40-page documents that answered every question except the important ones.",
      sections: [
        {
          heading: "Start With Outcomes, Not Outputs",
          body: "The most common mistake in a design brief is describing what you want built without explaining why. 'We need a new website' is not a brief. 'We're losing leads because our current site doesn't communicate our expertise to enterprise buyers' is a brief.\n\nAgencies do their best work when they understand the problem you're trying to solve. Give us the business context. What changes after this project? How will you know it worked? What's at stake if it doesn't?",
        },
        {
          heading: "Be Honest About Constraints",
          body: "Budget, timeline, internal approval processes, legacy systems that must be integrated — these constraints shape what's possible. Many clients hide them, fearing that revealing a budget will invite a quote that matches it exactly, or that mentioning timeline pressure will lead to corners being cut.\n\nGood agencies use constraints to make better decisions, not worse ones. Tell us what you're working with. We'll tell you honestly what's achievable within those parameters — and where we'd push back.",
        },
        {
          heading: "Show Us What Good Looks Like",
          body: "References are gold. Not because we'll copy them, but because they reveal taste and expectations in ways that words often can't. Show us three websites you admire and three you don't, and explain briefly why for each. That's more useful to a designer than a paragraph of adjectives.\n\nThe same goes for brand references, tone of voice examples, competitor work you respect or want to differentiate from. Visual and tonal references compress the alignment process dramatically.",
        },
        {
          heading: "Define Who You're Designing For",
          body: "The more specifically you can describe your audience, the better the work will be. Not 'business professionals' — but 'operations managers at manufacturing businesses with 50-200 employees who are evaluating software for the first time.' The specificity changes everything: the language we use, the visual language we choose, the information hierarchy we build.\n\nIf you have existing customer research, personas, or even anecdotal knowledge about who actually buys from you and why — share all of it.",
        },
      ],
      conclusion: "A great brief isn't long. It's honest, specific, and outcomes-focused. It tells us the business problem, the audience, the constraints, and what success looks like. Everything else we can figure out together.",
    },
  },
  {
    slug: "why-most-digital-marketing-fails",
    title: "Why Most Digital Marketing Fails (And What to Do Instead)",
    excerpt: "Businesses waste billions on digital marketing every year. The failure isn't usually the channel — it's the strategy, or the lack of one.",
    category: "Marketing",
    readTime: "7 min read",
    publishedAt: "June 15, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #b84880 0%, #d45a30 50%, #e07020 100%)",
    content: {
      intro: "Ask most businesses what their digital marketing strategy is and they'll describe a list of tactics: 'we do Google Ads, we post on LinkedIn three times a week, we send a newsletter monthly.' That's not a strategy. That's a to-do list. And it's the reason most digital marketing produces mediocre results at significant cost.",
      sections: [
        {
          heading: "Tactics Without Strategy Is Just Noise",
          body: "Digital marketing works when it's built around a clear understanding of who you're trying to reach, what you want them to do, and what journey they need to go on to get there. Without that, you're producing content and running ads into the void — hoping something sticks.\n\nThe businesses that see genuine ROI from digital marketing almost always have a simple, clear answer to: who is our ideal customer, what problem do they have, and why are we the right solution? Everything flows from that clarity.",
        },
        {
          heading: "The Attribution Problem",
          body: "Most businesses can't tell you which marketing activity is driving revenue. They know they're spending on ads, content, and SEO — but they can't attribute closed deals to specific channels or campaigns with any confidence. Without attribution, you can't optimise. You're flying blind.\n\nGetting this right requires proper tracking setup — GA4, UTM parameters, CRM integration, conversion events — before you spend a pound on media. Most businesses skip this step and then wonder why their marketing feels like guesswork.",
        },
        {
          heading: "Content That Earns Attention",
          body: "The majority of brand content produced today is ignored. Not because the production value is low, but because it's self-referential. Companies talk about themselves, their values, their product features — and audiences have learned to tune it out.\n\nContent that earns attention is useful, specific, and honest. It answers questions your customers are actually asking. It takes a position. It teaches something. It earns a click because it offers genuine value, not because it was boosted with £500 of paid reach.",
        },
        {
          heading: "Patience Is a Marketing Strategy",
          body: "Digital marketing has a compounding logic that most businesses underestimate. SEO takes six to twelve months to show meaningful results. Email list building takes time before the list is large enough to drive revenue. Thought leadership content builds authority slowly.\n\nThe businesses that pull out of these channels before they compound are the ones who report that 'digital marketing doesn't work for us.' It does. It just requires consistency over a time horizon that many teams aren't comfortable with.",
        },
      ],
      conclusion: "Digital marketing works. But it requires strategy before tactics, measurement before spend, and patience before results. The businesses winning at this aren't doing more — they're doing fewer things, better, for longer. That's the playbook.",
    },
  },
  {
    slug: "design-systems-why-your-product-team-needs-one",
    title: "Design Systems: Why Your Product Team Needs One",
    excerpt: "Every growing product team hits a point where inconsistency becomes a crisis. A design system is how you prevent that — and how you move faster without breaking things.",
    category: "Design",
    readTime: "6 min read",
    publishedAt: "June 1, 2026",
    author: "Heaps Lab",
    authorRole: "Digital Studio",
    coverGradient: "linear-gradient(135deg, #5e3db8 0%, #852898 50%, #a020b0 100%)",
    content: {
      intro: "At some point in a product's growth, something breaks. Not technically — but visually and experientially. Buttons look slightly different across pages. The same action has three different interaction patterns. The mobile experience and desktop experience feel like they were built by different teams in different decades. Often, they were.",
      sections: [
        {
          heading: "What a Design System Actually Is",
          body: "A design system isn't a style guide. It's not a set of brand colours and a typography scale in a PDF. It's a living system of components, patterns, and principles — shared between design and engineering — that define how your product looks, feels, and behaves.\n\nAt its core: a component library in code (React components, with Storybook documentation), paired with a Figma library of the same components that designers use. When either updates, the other follows. The system is the source of truth, not individual files.",
        },
        {
          heading: "The Speed Argument",
          body: "Teams without design systems spend enormous time re-solving the same problems. Every new feature starts with: what should this button look like? How should this form behave on mobile? What's the loading state for this card? With a design system, these questions are already answered. Designers pull components from the library. Engineers implement from the same spec.\n\nThe time savings compound. Teams with mature design systems build new features significantly faster — not because they're cutting corners, but because the foundational decisions are already made.",
        },
        {
          heading: "The Consistency Argument",
          body: "Users learn products through patterns. When the same action behaves differently in different parts of your product, users lose confidence. They second-guess themselves. They make errors. They churn.\n\nConsistency isn't just aesthetic — it's functional. A product that behaves predictably is a product that users trust. Design systems enforce that consistency at scale, even as the team grows and the product expands.",
        },
        {
          heading: "When to Build One",
          body: "The honest answer: sooner than most teams think. The common mistake is waiting until the inconsistency crisis hits and then trying to retrofit a system onto a product with years of accumulated debt. It's painful, slow, and expensive.\n\nThe right time to start is when you have more than two designers, or more than one development team working on the same product, or when you're planning a significant expansion of your product surface. At that point, the investment in a design system pays back immediately.",
        },
      ],
      conclusion: "A design system is infrastructure. It's not glamorous, it's not visible to your users, and it doesn't ship features. But it's what makes every feature you ship better, faster, and more consistent. For any product team at growth stage, it's not optional — it's the foundation that makes everything else work.",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export const blogCategories = ["All", "Technology", "Business", "Product", "Design", "Marketing", "Agency"];
