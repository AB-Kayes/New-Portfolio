import About from "@/components/about"
import Projects from "@/components/projects/projects-section"
import Contact from "@/components/contact"
import SocialIcons from "@/components/social-icons"

export default function Home() {
  return (
    <>
      <div id="intro" className="flex items-center justify-center h-screen px-4">
        <div className="leading-tight text-center">
          <h4 className="text-3xl md:text-5xl font-bold">
            Hey, I'm Kayes <span className="hi">👋</span>
          </h4>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold">Full-Stack</h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">web-developer</h2>
          <a href="./#projects">
            <button
              className="animated-button font-bold text-lg md:text-2xl px-6 md:px-8 py-3 md:py-4 mt-6 md:mt-10 rounded-xl bg-foreground/5 border-2 border-foreground/80 shadow-[2px_2px_#202020] hover:relative transition-all hover:bg-foreground/10
              hover:right-0.5 hover:bottom-0.5 hover:shadow-[5px_5px_#202020] hover:cursor-pointer 
              active:bg-foreground/20 active:right-0 active:bottom-0 active:shadow-[2px_2px_#202020]"
            >
              Projects
            </button>
          </a>
        </div>
      </div>
      <SocialIcons />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

