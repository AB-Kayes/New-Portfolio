"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const skills = [
  // Frontend
  "React", "React Flow", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  // Backend
  "Java", "Spring Boot", "Node.js", "NestJS", "FastAPI", "Python", "Laravel", "REST APIs",
  // Data & Infrastructure
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Nginx", "Git", "CI/CD",
  // AI/ML
  "RAG", "LangChain", "LLM Integration",
  // Security & Integrations
  "JWT", "OAuth 2.0", "Role-Based Access Control", "2FA", "Stripe", "Firebase",
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
              I'm a full-stack engineer with <strong className="text-foreground">5+ years of freelance and agency experience</strong> building and shipping production web platforms, SaaS products, and AI-powered systems. I specialize in React frontends and Spring Boot, NestJS, and FastAPI backends, with hands-on experience integrating LLMs, building secure authentication, and designing multi-tenant architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At <strong className="text-foreground">AaladinAI</strong>, a software development agency delivering contracted projects for international clients like <strong className="text-foreground">ScaleBuild AI (USA)</strong>, I served as Full-Stack Developer & Project Lead. I built the frontend for <strong className="text-foreground">fuelAI</strong> (an AI CRM platform serving 600+ users with 24 screens and a node-based workflow editor using React Flow), shipped NestJS backend endpoints and Python AI integrations, and implemented JWT authentication, role-based access control, and 2FA backup codes while coordinating sprints and delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At <strong className="text-foreground">Golden Vault</strong>, a challenge-based learning and mentorship platform, I redesigned and rebuilt the entire UI/UX across all 6 pages from scratch, created mentorship booking and admin tools supporting nine mentors through public launch, and improved the Lighthouse performance score from 58 to 95 through code splitting, image optimization, and server-side rendering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Right now, I'm building <strong className="text-foreground">AutoPings</strong> — an independent multi-tenant messaging SaaS platform that unifies business communication across Email, WhatsApp, and Discord through a single REST API. Built with Java 21, Spring Boot, and PostgreSQL, it features circuit breakers, rate limiting, encrypted credentials, hashed API keys, and 68+ unit and integration tests with a Docker Compose dev setup.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over 5+ years of freelance engineering (Dec 2019 – Present), I've developed full-stack web platforms, mobile applications, and native tools using Java, Python, and React for clients across North America and Europe. I'm pursuing my B.Sc in Software Engineering at Daffodil International University and actively seeking <strong className="text-foreground">remote full-stack roles</strong>.
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
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-bold text-foreground">8+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Shipped</div>
              </div>
              <div className="rounded-lg border border-border p-4 text-center">
                <div className="text-2xl font-bold text-foreground">US & EU</div>
                <div className="text-xs text-muted-foreground mt-1">Client Markets</div>
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
