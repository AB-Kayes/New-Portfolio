"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const skills = [
  // Frontend
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3",
  // Backend
  "Node.js", "Express.js", "NestJS", "Java", "Spring Boot", "Python", "FastAPI",
  // Database
  "PostgreSQL", "MongoDB", "Redis",
  // DevOps
  "Docker", "Git", "Vercel", "Nginx",
  // AI/ML
  "RAG Pipelines", "LangChain", "LLM Integration", "Prompt Engineering",
  // Other
  "JWT Auth", "Firebase", "Stripe", "Framer Motion", "React Flow",
]

export default function About() {
  return (
    <section id="about" className="py-8">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-center mb-12">
            Full-Stack Developer · Project Lead · SaaS Builder
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Story */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack developer who builds and ships SaaS products end-to-end — from React dashboards to Spring Boot microservices to AI-powered workflows. With professional experience across agency, startup, and founder settings, I bring both technical depth and ownership mentality to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At <strong className="text-foreground">AaladinAI</strong>, a software agency serving international clients, I was hired as a Frontend Engineer but quickly became the person who understood the entire project better than anyone else on the team. When we lost our product manager, I stepped up — coordinating priorities, defining requirements, and driving timelines for <strong className="text-foreground">Fuel AI</strong>, a 24+ page AI-powered CRM with multi-platform communication and a drag-and-drop AI workflow builder.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Before that, I helped transform <strong className="text-foreground">Golden Vault</strong> from a concept into a working product as a founding team member — rebuilding the entire frontend and building the mentorship system from scratch.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Right now, I'm building <strong className="text-foreground">Nexus Agent</strong> — a multi-tenant messaging SaaS platform that routes messages across Email, WhatsApp, Discord, and Notion through a single API. The Connection Brain is production-ready with Spring Boot 3.x, hexagonal architecture, circuit breakers, AES-256-GCM encryption, and 68+ passing tests.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm pursuing my B.Sc in Software Engineering at Daffodil International University and am open to <strong className="text-foreground">full-stack developer roles</strong> — remote or Dhaka-based. I'm also available for freelance projects.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-muted px-3 py-1.5 text-sm text-muted-foreground font-medium hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-bold text-foreground">8+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Shipped</div>
              </div>
              <div className="rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-bold text-foreground">2</div>
                <div className="text-xs text-muted-foreground mt-1">Countries Served</div>
              </div>
              <div className="rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-bold text-foreground">68+</div>
                <div className="text-xs text-muted-foreground mt-1">Tests Passing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
