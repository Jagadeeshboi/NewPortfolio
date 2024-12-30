import { NavLink } from "react-router-dom";

interface Projects{
  project:{
    title:string,
    stack:string,
    image:string,
    data:string,
    link?:string,
  }
}
function ProjectCard(props:Projects) {
  const {project} = props;
  const {title,stack,image,data,link=""} = project;
  return (
    <NavLink to={link} target="_blank">
        <article className="max-w-sm cursor-pointer overflow-hidden rounded-lg border border-gray-800  transition hover:border hover:border-gray-100">
        <img
            alt=""
            src={image}
            className="h-56 w-full object-cover"
        />

        <div className="bg-black text-white p-4 sm:p-6">
            <time className="block text-xs text-gray-500"> {stack}</time>

            <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-300">{title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400 tracke-wide">
            {data}
            </p>
        </div>
        </article>
    </NavLink>
  )
}

export default ProjectCard
