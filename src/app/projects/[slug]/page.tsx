import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-11/12">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-200 font-medium dark:bg-gray-800">
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-6 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            )}
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <p>{project.description}</p>
          </div>
        </div>
      </div>

      {project.features && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <li key={index} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <h3 className="mb-2 font-medium">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}

