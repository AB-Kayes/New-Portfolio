"use client"

import { motion } from "framer-motion"

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer & Project Lead",
    company: "AaladinAI",
    period: "July 2024 – March 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Software development agency delivering contracted projects for international clients including Scale Build AI (New York). Officially hired as Frontend Engineer; informally served as co-product manager and project lead.",
    highlights: [
      "Led the Fuel AI project as de facto product manager — coordinated team priorities, defined requirements, and drove timelines for a 24+ page SaaS platform",
      "Built the entire frontend dashboard using Next.js, React, TypeScript, Tailwind CSS, and ShadCN",
      "Contributed to NestJS backend API endpoints and Python AI brain for automated lead engagement",
      "Implemented a drag-and-drop visual funnel editor (React Flow) for non-technical users",
      "Integrated JWT authentication with role-based access control and 2FA backup codes",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "Python", "React Flow", "PostgreSQL", "MongoDB"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Golden Vault",
    period: "November 2023 – June 2024",
    location: "Dhaka, Bangladesh",
    description:
      "Early-stage education platform startup built around challenge-based learning, mentorship, and performance tracking.",
    highlights: [
      "Redesigned the entire UI/UX — improved usability, mobile responsiveness, and visual appeal",
      "Rebuilt the frontend with React, Next.js, and Tailwind CSS, improving page load speed and learner retention",
      "Built the complete mentorship system — admin panel for mentors, booking sessions, managing relationships",
      "Collaborated directly with the founding team to ship features that transformed concept to product",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    role: "Founder & Lead Developer",
    company: "Nexus Agent",
    period: "May 2025 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Architecting and building a multi-tenant messaging SaaS platform that unifies business communication across Email, WhatsApp, Discord, Notion, Slack, and SMS through a single REST API.",
    highlights: [
      "Architected a Spring Boot 3.x microservice using hexagonal (Ports & Adapters) architecture in Java 21",
      "Built platform adapters for SendGrid, Meta Cloud API (WhatsApp), JDA 5.x (Discord), and Notion API",
      "Implemented Resilience4j circuit breakers, Bucket4j rate limiting, AES-256-GCM encryption",
      "Designed outbox pattern with exponential backoff retry and virtual thread-based async dispatch",
      "Achieved 68+ passing tests with full Docker Compose deployment — all 8 production checks passing",
    ],
    technologies: ["Java 21", "Spring Boot 3.x", "Hexagonal Architecture", "PostgreSQL 17", "Resilience4j", "Docker", "AES-256-GCM"],
  },
  {
    id: 4,
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2024 – Present",
    location: "Remote",
    description:
      "Delivering end-to-end web solutions for international and local clients — from requirement gathering to deployment.",
    highlights: [
      "Built a complete website for Roshan Transport (Australia) with TinaCMS for client-managed content",
      "Developed a company showcase for Vector Power (Bangladesh) with modern animations and product presentation",
      "Managed full project lifecycle: requirements, design, development, testing, deployment, and handoff",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TinaCMS", "Framer Motion"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-center mb-12">
            My professional journey across agencies, startups, and founder roles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 last:mb-0 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

              {/* Date label (mobile: left, desktop: alternating) */}
              <div className={`pl-6 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                <span className="text-sm text-muted-foreground ml-2">· {exp.location}</span>
              </div>

              {/* Content card */}
              <div className={`pl-6 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="rounded-lg border border-border bg-background p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-foreground/40 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
