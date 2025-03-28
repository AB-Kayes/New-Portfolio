"use client"

import { projects } from "@/data/projects"
import ProjectCard from "./project-card"
import { motion } from "framer-motion"

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 max-w-10/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Here are some of my recent projects. Each one was built to solve a specific problem and showcase different
            skills.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

