export interface Project {
  id: number
  title: string
  slug: string
  shortDescription?: string
  description?: string
  images?: string // Added images property
  imgCount: number // Added imgCount property
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features?: {
    title: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Golden Vault",
    slug: "golden-vault",
    shortDescription: "A platform to evaluate and enhance skills through virtual campaigns and challenges.",
    description: "Golden Vault is a student-founded startup from Daffodil International University, designed to engage and empower both technical and non-technical individuals. It offers virtual campaigns, challenges, and activities to help users grow their skills and achieve career goals.",
    images: "/img/golden-vault",
    imgCount: 5,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://goldenvault.org/",
    githubUrl: "https://github.com/yourusername/golden-vault",
    features: [
      {
        title: "Virtual Campaigns & Challenges",
        description: "Engaging activities to help users improve and grow their skills."
      },
      {
        title: "Inclusive for All Users",
        description: "Designed for both technical and non-technical individuals."
      },
      {
        title: "Affiliate Reseller Program",
        description: "Users can earn by referring others to the platform."
      },
      {
        title: "Real-Time Engagement & Tracking",
        description: "Live tracking of user progress and campaign participation."
      }
    ]
  },
  {
    id: 2,
    title: "TitanX",
    slug: "titanx",
    shortDescription: "A modern portfolio website showcasing AI-powered solutions and full-stack development expertise.",
    description: "TitanX is a portfolio website that represents the agency's expertise in AI-powered SaaS, automation, and full-stack development. It is designed for performance, SEO optimization, and a smooth user experience, reflecting cutting-edge digital solutions.",
    images: "/img/titanx",
    imgCount: 5,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
    liveUrl: "https://titan10.vercel.app",
    githubUrl: "https://github.com/yourusername/titanx",
    features: [
      {
        title: "Lightning-Fast Performance",
        description: "Pages are optimized for fast loading with Next.js, ensuring a smooth user experience."
      },
      {
        title: "Clean and Modern UI",
        description: "A sleek design powered by ShadCN and Tailwind CSS, creating a visually appealing interface."
      },
      {
        title: "Engaging Animations",
        description: "Interactive and smooth animations using Framer Motion, keeping users engaged."
      },
      {
        title: "SEO-Optimized",
        description: "The website is optimized for search engines to increase visibility and attract clients."
      },
      {
        title: "Fully Responsive",
        description: "The site is mobile-friendly and responsive across all devices, ensuring accessibility."
      }
    ]
  },
  {
    id: 3,
    title: "Vector Power",
    slug: "vector-power",
    shortDescription: "A platform showcasing energy-efficient solutions and green technology for the transport sector.",
    description: "Vector Power is dedicated to transforming the transport and renewable energy industry with sustainable solutions. The company provides high-quality batteries, solar modules, inverters, and vehicle accessories aimed at reducing carbon footprints and improving the lives of transport workers in Bangladesh.",
    images: "/img/vector-power",
    imgCount: 4,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://vector-power-bd.vercel.app/",
    githubUrl: "https://github.com/yourusername/vector-power",
    features: [
      {
        title: "Fast & SEO-Optimized",
        description: "Built with Next.js to ensure fast rendering and search engine visibility."
      },
      {
        title: "Responsive Design",
        description: "A fully mobile-friendly experience with Tailwind CSS for seamless browsing."
      },
      {
        title: "Dynamic Product Showcase",
        description: "Easily update and showcase a diverse range of energy-efficient products."
      },
      {
        title: "Enhanced User Experience",
        description: "A clean, intuitive interface balancing technical details and ease of use."
      }
    ]
  },
  {
    id: 4,
    title: "Transparency Portal",
    slug: "transparency-portal",
    shortDescription: "A secure and user-friendly platform for tracking government financial spending.",
    description: "The Transparency Portal is designed to provide real-time tracking of government spending with secure data access and transparent reporting. It allows taxpayers and public users to visualize and understand financial data effortlessly.",
    images: "/img/transparency-portal",
    imgCount: 6,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://transparency-portal.vercel.app/",
    githubUrl: "https://github.com/yourusername/transparency-portal",
    features: [
      {
        title: "Real-Time Financial Tracking",
        description: "Monitor government spending updates as they happen."
      },
      {
        title: "Dynamic Data Visualization",
        description: "Easily understand complex financial data through interactive charts."
      },
      {
        title: "Cross-Platform Accessibility",
        description: "Seamlessly access the portal from both desktop and mobile devices."
      },
      {
        title: "Secure Authentication",
        description: "Integrated Firebase authentication for protected user access."
      },
      {
        title: "User-Friendly Interface",
        description: "Designed for transparency and ease of use for public users."
      }
    ]
  }
,
]

