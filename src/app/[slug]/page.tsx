import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

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
    <main className="container mx-auto px-4 py-20 max-w-11/12">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>

      <div className="grid gap-8 md:grid-cols-[2fr_1.5fr]">
      <div className="relative px-0 sm:px-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {[...Array(project.imgCount)].map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="relative w-full aspect-video overflow-auto rounded-lg">
                          <Image
                            src={`${project.images}/${index + 1}.webp`}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.imgCount > 1 &&(<><CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-background/60 hover:bg-background/80 backdrop-blur-sm -left-3 sm:-left-5 absolute border-primary/20" />
                  <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-background/60 hover:bg-background/80 backdrop-blur-sm -right-3 sm:-right-5 absolute border-primary/20" /></>)}
                </Carousel>
              </div>

        <div>
          <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 font-medium">
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
                Live site
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            )}
          </div>

          <div className="prose max-w-none">
            <p>{project.description}</p>
          </div>
        </div>
      </div>

      {project.features && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <li key={index} className="rounded-lg border border-gray-300 p-4">
                <h3 className="mb-2 font-medium">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}

