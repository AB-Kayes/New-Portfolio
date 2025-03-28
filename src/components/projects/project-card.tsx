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
      className="group flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={`${project.images}/1.webp`}
          alt={project.title}
          fill
          className="object-top object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-xl text-gray-800 font-bold">{project.title}</h3>
        <p className="mb-4 flex-1 text-sm text-gray-500">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

