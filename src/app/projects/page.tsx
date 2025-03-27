import { projects } from "@/data/projects"
import ProjectCard from "@/components/projects/project-card"

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}

