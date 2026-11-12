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
    role: "Full-Stack Developer & Project Lead",
    company: "AaladinAI",
    period: "Jul 2024 – Mar 2025",
    location: "Gulshan, Dhaka, Bangladesh",
    description:
      "Software development agency delivering contracted projects for international clients like ScaleBuild AI (USA).",
    highlights: [
      "Built the frontend for an AI CRM platform serving 600+ users: built all 24 screens and a node-based workflow editor with React Flow.",
      "Shipped NestJS endpoints and Python AI integrations; added JWT authentication, role-based access control, and 2FA backup codes.",
      "Turned client requirements into scoped features, planned sprints, and coordinated frontend, NestJS, and Python AI work through delivery.",
    ],
    technologies: ["React", "React Flow", "TypeScript", "Tailwind CSS", "NestJS", "Python", "PostgreSQL", "JWT / 2FA"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Golden Vault",
    period: "Nov 2023 – Jun 2024",
    location: "Savar, Dhaka, Bangladesh",
    description:
      "A challenge-based learning and mentorship platform connecting learners with industry professionals.",
    highlights: [
      "Redesigned and rebuilt the entire UI/UX across all 6 pages from scratch, improving usability, mobile responsiveness, and visual consistency across the platform.",
      "Built mentorship booking and admin tools, supporting nine mentors through the platform's public launch.",
      "Improved Lighthouse performance score from 58 to 95 through code splitting, image optimization, and server-side rendering.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    role: "Founder & Lead Architect",
    company: "AutoPings",
    period: "Aug 2025 – Present",
    location: "Remote / Dhaka, Bangladesh",
    description:
      "Multi-tenant messaging SaaS platform that unifies business communication across Email, WhatsApp, and Discord through a single REST API.",
    highlights: [
      "Founder and lead architect of a multi-tenant messaging platform that unifies business communication across Email, WhatsApp, and Discord through a single REST API.",
      "Designed a multi-tenant backend (Java 21, Spring Boot, PostgreSQL) with adapters for email, WhatsApp, and Discord.",
      "Built reliability and security layers: circuit breakers, rate limiting, encrypted credentials, and hashed API keys.",
      "Wrote 68+ unit and integration tests; shipped a Docker Compose dev setup.",
    ],
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "REST APIs", "Redis", "Resilience4j"],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Freelance",
    period: "Dec 2019 – Present",
    location: "Remote",
    description:
      "Delivering full-stack web platforms, mobile applications, and native tools for international and local clients.",
    highlights: [
      "Developed full-stack web platforms, mobile applications, and native tools using Java, Python, and React.",
      "Integrated secure local and cloud database storage and performed regular performance tuning.",
      "Shipped custom web solutions for clients including Roshan Transport (Australia) and Vector Power (Bangladesh).",
    ],
    technologies: ["Java", "Python", "React", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Tailwind CSS"],
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
