import { projects } from "@/data/projects"

export default function Projects() {


    return(
    <section id="projects" className="projects">
        <div className="max-w-9/12 mx-auto">
            <h2 className="text-3xl font-bold text-center">My projects</h2>
         <div className="grid grid-cols-1 gap-8">
          {projects.map((project,index) => (<a href="link" key={index} target="_blank" className="justify-self-center h-80 w-full rounded-md max-w-184 shadow-[2px_2px_#0f0f0f8a]"><div></div></a>))}
         </div>
        </div>
    </section>
    )
}