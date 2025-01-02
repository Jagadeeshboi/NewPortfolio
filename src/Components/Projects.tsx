import ProjectCard from "./ProjectCard"
import { Projects as Pr } from "../Utility/Data"

function Projects() {
    return (
    <div className="w-full max-w-full">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-5xl/relaxed font-bold mb-3 lg:mb-0">Works & Projects</h1>
        <p className="text-center tracking-wider text-sm/relaxed sm:text-base/relaxed lg:text-lg/relaxed text-gray-400">Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.</p>
        <div className="mt-6 grid grid-cols-1 place-items-center sm:grid-cols-2 gap-3 lg:grid-cols-3">
            {Pr.map((data,i)=><ProjectCard project={data} key={i}/>)}
        </div>
        </div>
    )
}

export default Projects
