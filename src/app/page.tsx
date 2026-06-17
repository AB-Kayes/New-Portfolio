import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects/projects-section"
import Contact from "@/components/contact"
import SocialIcons from "@/components/social-icons"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="intro" className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="leading-tight text-center max-w-3xl">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-2 font-medium">
            Hey, I'm Kayes <span className="hi">👋</span>
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight">
            Full-Stack
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mt-1">
            Developer & SaaS Builder
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            I build and ship production SaaS products — from React dashboards to Spring Boot microservices to AI-powered workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="#projects">
              <button className="font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors cursor-pointer">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className="font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl bg-foreground/5 border-2 border-foreground/20 hover:bg-foreground/10 transition-colors cursor-pointer">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>

      <SocialIcons />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
