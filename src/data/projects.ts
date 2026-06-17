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
    title: "Fuel AI",
    slug: "fuel-ai",
    featured: true,
    shortDescription:
      "AI-powered CRM platform with multi-platform communication, drag-and-drop workflow builder, and automated lead engagement.",
    description:
      "Fuel AI is a 24+ page AI-powered CRM platform built for Scale Build AI (New York) during my time at AaladinAI. As de facto project lead, I coordinated team priorities, defined requirements, and drove development timelines. I built the entire frontend dashboard using Next.js, React, TypeScript, Tailwind CSS, and ShadCN, contributed to NestJS backend API endpoints, and helped integrate the Python AI brain for automated lead engagement. The platform features a drag-and-drop visual funnel editor (React Flow) that lets non-technical users create AI-driven communication workflows with conditional branching across Email, SMS, LinkedIn, and Messenger.",
    images: "/img/fuel-ai",
    imgCount: 5,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "Python", "React Flow", "PostgreSQL"],
    features: [
      {
        title: "Full Frontend Development",
        description: "Built the entire 24+ page dashboard with Next.js, React, TypeScript, and Tailwind CSS.",
      },
      {
        title: "Visual Funnel Builder",
        description: "Drag-and-drop workflow editor (React Flow) for non-technical users to create AI communication flows.",
      },
      {
        title: "Multi-Channel Communication",
        description: "Unified inbox routing messages across Email, SMS, LinkedIn, and Messenger.",
      },
      {
        title: "AI Integration",
        description: "Python AI brain for NLU-based response interpretation and dynamic prompt generation.",
      },
      {
        title: "Project Leadership",
        description: "Led the project as de facto PM — coordinated priorities, defined requirements, drove timelines.",
      },
    ],
  },
  {
    id: 2,
    title: "Nexus Agent",
    slug: "nexus-agent",
    featured: true,
    shortDescription:
      "Multi-tenant messaging SaaS unifying Email, WhatsApp, Discord, and Notion through a single REST API. Built with Spring Boot hexagonal architecture.",
    description:
      "Nexus Agent is a multi-tenant messaging SaaS platform that unifies business communication across Email, WhatsApp, Discord, Notion, Slack, and SMS through a single REST API. The Connection Brain is production-ready, built with Spring Boot 3.x and Java 21 using hexagonal (Ports & Adapters) architecture. Features include Resilience4j circuit breakers, Bucket4j rate limiting, AES-256-GCM credential encryption, an outbox pattern with exponential backoff retry orchestrator, and 68+ passing tests. The full three-brain architecture includes a Laravel management brain and FastAPI cognitive brain with pgvector RAG.",
    images: "/img/nexus-agent",
    imgCount: 5,
    technologies: ["Java 21", "Spring Boot 3.x", "Hexagonal Architecture", "PostgreSQL 17", "Resilience4j", "Docker", "AES-256-GCM"],
    githubUrl: "https://github.com/AB-Kayes",
    features: [
      {
        title: "Hexagonal Architecture",
        description: "Ports & Adapters pattern for clean separation of business logic from infrastructure.",
      },
      {
        title: "Multi-Platform Adapters",
        description: "SendGrid (Email), Meta Cloud API (WhatsApp), JDA 5.x (Discord), Notion API integration.",
      },
      {
        title: "Resilience & Security",
        description: "Circuit breakers, rate limiting, AES-256-GCM encryption, X-API-Key auth with SHA-256 hashing.",
      },
      {
        title: "Reliability Patterns",
        description: "Outbox pattern, exponential backoff retry, virtual thread async dispatch, crash recovery.",
      },
      {
        title: "68+ Passing Tests",
        description: "Full test coverage with unit and integration tests, Docker Compose deployment.",
      },
    ],
  },
  {
    id: 3,
    title: "Golden Vault",
    slug: "golden-vault",
    featured: true,
    shortDescription:
      "Early-stage edtech startup platform for challenge-based learning, mentorship, and performance tracking. Transformed from concept to working product.",
    description:
      "Golden Vault is a student-founded startup from Daffodil International University focused on challenge-based learning, mentorship, and performance tracking. I joined as a frontend developer and collaborated directly with the founding team to transform the platform from concept to a working product. I redesigned the entire UI/UX, rebuilt the frontend with React, Next.js, and Tailwind CSS, and built the complete mentorship system including admin panels for managing mentor-mentee relationships and booking sessions.",
    images: "/img/golden-vault",
    imgCount: 5,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://goldenvault.org/",
    githubUrl: "https://github.com/official-goldenvault/Golden-Vault---full-system/tree/dev-kayes",
    features: [
      {
        title: "Complete UI/UX Redesign",
        description: "Revamped usability, mobile responsiveness, and visual appeal across all key pages.",
      },
      {
        title: "Mentorship System",
        description: "Full admin panel for adding mentors, booking sessions, and managing mentor-mentee relationships.",
      },
      {
        title: "Startup Collaboration",
        description: "Worked directly with founding team to ship features that transformed concept to product.",
      },
      {
        title: "Performance Optimization",
        description: "Improved page load speed, navigation flow, and learner retention.",
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
      "The official website of AaladinAI, a software development agency serving international clients including Scale Build AI (New York). Built with Next.js and Tailwind CSS, it features a modern landing page with services, projects, about, and contact sections. The site represents the agency's expertise in AI-powered SaaS, automation, and full-stack development.",
    images: "/img/aaladinai",
    imgCount: 5,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "Modern Agency Presentation",
        description: "Sleek design showcasing agency capabilities and international client work.",
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

