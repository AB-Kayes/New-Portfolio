"use client"

import { projects } from "@/data/projects"
import ProjectCard from "./project-card"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects" className="py-8">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-center mb-12">
            A selection of work spanning SaaS platforms, client projects, and personal builds.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
            Featured
          </h3>
          <motion.div
            className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featured.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
              Other Work
            </h3>
            <motion.div
              className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {others.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
