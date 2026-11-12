export interface Project {
  id: number
  title: string
  slug: string
  shortDescription?: string
  description?: string
  images?: string
  imgCount: number
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  features?: {
    title: string
    description: string
  }[]
}

export const projects: Project[] = [
  // ── Featured Projects ──
  {
    id: 1,
    title: "fuelAI",
    slug: "fuel-ai",
    featured: true,
    shortDescription:
      "AI-powered sales engagement platform that learns individual sales representatives' communication styles and automates personalized lead engagement.",
    description:
      "fuelAI is an AI-powered sales engagement platform built for ScaleBuild AI (USA) during my time at AaladinAI, serving 600+ users. The platform learns individual sales representatives' communication styles and automates personalized lead engagement, adapting messaging to each representative's tone, vocabulary, and communication patterns. It supports context-aware outreach across email, LinkedIn, SMS, and voicemail, maintaining conversation continuity across channels. As Full-Stack Developer & Project Lead, I built the frontend for the AI CRM platform serving 600+ users (all 24 screens and a node-based workflow editor with React Flow), shipped NestJS backend endpoints and Python AI integrations, and added JWT authentication, role-based access control, and 2FA backup codes.",
    images: "/img/fuel-ai",
    imgCount: 6,
    technologies: ["React", "React Flow", "Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Python", "PostgreSQL", "JWT / 2FA"],
    liveUrl: "https://www.fuelai.com",
    features: [
      {
        title: "AI-Driven Personalization",
        description: "Adapts messaging dynamically to each sales representative's tone, vocabulary, and communication patterns.",
      },
      {
        title: "Context-Aware Outreach",
        description: "Maintains conversation continuity across email, LinkedIn, SMS, and voicemail.",
      },
      {
        title: "Node-Based Workflow Editor",
        description: "Built all 24 screens and a visual drag-and-drop workflow editor using React Flow for automation branching.",
      },
      {
        title: "Backend & AI Integrations",
        description: "Shipped NestJS endpoints, Python AI integrations, JWT auth, RBAC, and 2FA backup codes.",
      },
      {
        title: "Project Leadership",
        description: "Turned client requirements into scoped features, planned sprints, and coordinated cross-functional delivery.",
      },
    ],
  },
  {
    id: 2,
    title: "AutoPings",
    slug: "autopings",
    featured: true,
    shortDescription:
      "Multi-tenant messaging SaaS unifying business communication across Email, WhatsApp, and Discord through a single REST API.",
    description:
      "AutoPings is an independent multi-tenant messaging SaaS platform that unifies business communication across Email, WhatsApp, and Discord through a single REST API. As founder and lead architect, I designed and built the multi-tenant backend in Java 21 and Spring Boot using PostgreSQL with dedicated adapters for email, WhatsApp, and Discord. The platform incorporates reliability and security layers including circuit breakers, rate limiting, encrypted credentials, and hashed API keys, backed by 68+ unit and integration tests and a Docker Compose dev setup.",
    images: "/img/autopings",
    imgCount: 4,
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "REST APIs", "Redis", "Resilience4j", "AES-256-GCM"],
    liveUrl: "https://www.autopings.com",
    githubUrl: "https://github.com/AB-Kayes",
    features: [
      {
        title: "Multi-Tenant Architecture",
        description: "Designed a multi-tenant backend (Java 21, Spring Boot, PostgreSQL) with adapters for email, WhatsApp, and Discord.",
      },
      {
        title: "Unified REST API",
        description: "Unifies business communication across Email, WhatsApp, and Discord through a single REST API.",
      },
      {
        title: "Reliability & Resilience",
        description: "Built-in Resilience4j circuit breakers, Bucket4j rate limiting, and virtual thread async dispatch.",
      },
      {
        title: "Security & Credential Encryption",
        description: "Encrypted credentials with AES-256-GCM and SHA-256 hashed API keys for bulletproof multi-tenant isolation.",
      },
      {
        title: "68+ Passing Tests & Docker",
        description: "Wrote 68+ unit and integration tests; shipped a production-ready Docker Compose dev setup.",
      },
    ],
  },
  {
    id: 3,
    title: "Golden Vault",
    slug: "golden-vault",
    featured: true,
    shortDescription:
      "A challenge-based learning and mentorship platform connecting learners with industry professionals.",
    description:
      "Golden Vault is a challenge-based learning and mentorship platform connecting learners with industry professionals. As a frontend developer, I redesigned and rebuilt the entire UI/UX across all 6 pages from scratch, improving usability, mobile responsiveness, and visual consistency across the platform. I built mentorship booking and admin tools, supporting nine mentors through the platform's public launch, and improved the Lighthouse performance score from 58 to 95 through code splitting, image optimization, and server-side rendering.",
    images: "/img/golden-vault",
    imgCount: 5,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://goldenvault.org/",
    githubUrl: "https://github.com/official-goldenvault/Golden-Vault---full-system/tree/dev-kayes",
    features: [
      {
        title: "Complete UI/UX Redesign",
        description: "Redesigned and rebuilt the entire UI/UX across all 6 pages from scratch, improving usability and visual consistency.",
      },
      {
        title: "Mentorship Booking & Admin Tools",
        description: "Built mentorship booking and admin tools, supporting nine mentors through the platform's public launch.",
      },
      {
        title: "Performance Optimization",
        description: "Improved Lighthouse performance score from 58 to 95 through code splitting, image optimization, and server-side rendering.",
      },
      {
        title: "Startup Collaboration",
        description: "Collaborated directly with the founding team to transform early concepts into a live production product.",
      },
    ],
  },
  {
    id: 4,
    title: "AaladinAI Agency Website",
    slug: "aaladinai",
    featured: true,
    shortDescription:
      "Modern agency website showcasing AI-powered solutions, full-stack development, and international client work.",
    description:
      "The official website of AaladinAI, a software development agency delivering contracted projects for international clients like ScaleBuild AI (USA). Built with Next.js and Tailwind CSS, it features a modern landing page with services, projects, about, and contact sections. The site represents the agency's expertise in AI-powered SaaS, automation, and full-stack development.",
    images: "/img/aaladinai",
    imgCount: 5,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "Modern Agency Presentation",
        description: "Sleek design showcasing agency capabilities and international client work like ScaleBuild AI (USA).",
      },
      {
        title: "Performance & SEO",
        description: "Optimized for fast loading and search engine visibility.",
      },
      {
        title: "Fully Responsive",
        description: "Mobile-friendly across all devices.",
      },
    ],
  },

  // ── Other Projects ──
  {
    id: 5,
    title: "TitanX",
    slug: "titanx",
    shortDescription:
      "Modern agency portfolio website with engaging animations and SEO optimization.",
    description:
      "A portfolio website representing AI-powered SaaS, automation, and full-stack development expertise. Built for performance, SEO optimization, and a smooth user experience.",
    images: "/img/titanx",
    imgCount: 5,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
    liveUrl: "https://titan10.vercel.app",
    githubUrl: "https://github.com/AB-Kayes/titanx",
    features: [
      { title: "Lightning-Fast Performance", description: "Optimized for fast loading with Next.js." },
      { title: "Clean and Modern UI", description: "Sleek design powered by ShadCN and Tailwind CSS." },
      { title: "Engaging Animations", description: "Smooth animations using Framer Motion." },
      { title: "SEO-Optimized", description: "Search engine optimized for visibility." },
      { title: "Fully Responsive", description: "Mobile-friendly across all devices." },
    ],
  },
  {
    id: 6,
    title: "Roshan Transport",
    slug: "roshan-transport",
    shortDescription:
      "Professional transport company website for an Australian logistics client with TinaCMS content management.",
    description:
      "A clean and responsive website for an Australian logistics and transport company. Built with Next.js and Tailwind CSS with TinaCMS integration enabling the client to independently update content without developer involvement.",
    images: "/img/roshan-transport",
    imgCount: 9,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TinaCMS"],
    liveUrl: "https://roshan-transport.vercel.app/",
    githubUrl: "https://github.com/AB-Kayes/roshan-transport",
    features: [
      { title: "Fast and Lightweight", description: "Built with Next.js for quick load times." },
      { title: "CMS Integration", description: "TinaCMS for real-time inline content editing." },
      { title: "Fully Responsive", description: "Seamless across mobile, tablet, and desktop." },
      { title: "SEO-Friendly", description: "Optimized for search engine visibility." },
    ],
  },
  {
    id: 7,
    title: "Vector Power",
    slug: "vector-power",
    shortDescription:
      "Company showcase for a battery and renewable energy company in Bangladesh.",
    description:
      "A modern, responsive website for a battery and renewable energy company, highlighting their products and mission with clear product presentation and company branding.",
    images: "/img/vector-power",
    imgCount: 4,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://vector-power-bd.vercel.app/",
    githubUrl: "https://github.com/vectorpowerbd/vector-power-bd",
    features: [
      { title: "Fast & SEO-Optimized", description: "Next.js for fast rendering and visibility." },
      { title: "Responsive Design", description: "Fully mobile-friendly with Tailwind CSS." },
      { title: "Dynamic Product Showcase", description: "Easily updateable product presentations." },
    ],
  },
  {
    id: 8,
    title: "Transparency Portal",
    slug: "transparency-portal",
    shortDescription:
      "Secure platform for real-time tracking of government financial spending with data visualization.",
    description:
      "Designed to provide real-time tracking of government spending with secure data access and transparent reporting. Allows taxpayers to visualize and understand financial data through interactive charts.",
    images: "/img/transparency-portal",
    imgCount: 6,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://transparency-portal.vercel.app/",
    githubUrl: "https://github.com/AB-Kayes/transparency-management-system",
    features: [
      { title: "Real-Time Financial Tracking", description: "Monitor spending updates as they happen." },
      { title: "Dynamic Data Visualization", description: "Interactive charts for complex financial data." },
      { title: "Secure Authentication", description: "Firebase authentication for protected access." },
      { title: "Accessible Interface", description: "User-friendly design for public users." },
    ],
  },
]

