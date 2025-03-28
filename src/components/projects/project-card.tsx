import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/${project.slug}`}
      className="project-card group flex flex-col h-full overflow-hidden rounded-lg border border-border bg-background shadow-md transition-all hover:shadow-lg"
    >
      <div className="relative h-48 sm:h-64 w-full overflow-hidden">
        <Image
          src={`${project.images}/1.webp`}
          alt={project.title}
          fill
          className="object-top object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg sm:text-xl text-foreground font-bold">{project.title}</h3>
        <p className="mb-4 flex-1 text-xs sm:text-sm text-muted-foreground">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

