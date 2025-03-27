import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialIcons from "@/components/social-icons"

export default function Home() {

  return (
  <>
    <Nav/>
    <SocialIcons/>
    <div>
      <div id="intro" className="flex items-center justify-center h-screen">
              <div className="leading-tight text-center">
                <h4 className="text-5xl font-bold">Hey, I'm Kayes <span className = 'hi'>👋</span></h4>
                <h1 className="text-9xl font-extrabold">Full-Stack</h1>
                <h2 className="text-7xl font-bold">web-developer</h2>
                <a href="./#projects">
                  <button className="font-bold text-2xl px-8 py-4 mt-10 rounded-xl bg-black/5 border-2 border-black/80 shadow-[2px_2px_#202020] hover:relative transition-all 
                  hover:right-0.5 hover:bottom-0.5 hover:shadow-[5px_5px_#202020] hover:cursor-pointer 
                  active:bg-[#cfcdcd]">Projects</button>
                </a>
              </div>
            </div>
      </div>
    <Projects/>
    <Contact/>
    <Footer/>
  </>
  )
}
