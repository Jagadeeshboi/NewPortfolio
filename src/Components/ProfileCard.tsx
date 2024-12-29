import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { NavLink } from "react-router-dom"

const ProfileCard = () => {
    return (
    <div className="flex flex-col items-center justify-center gap-4 ">
        <div>
            <img src="profile.png" alt="profile" className="w-full  rounded-full"/>
        </div>
        <div className="flex flex-col items-center gap-2 tracking-wide">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">Jagadeesh Boina</h1>
            <p className="text-center text-base/relaxed md:text-lg/relaxed text-gray-400">I am a Web Developer based in Andhrapradesh, INDIA.</p>
        </div>
        <div className="flex justify-around w-full mt-3">
            <NavLink to={"https://www.linkedin.com/in/jagadeesh-boina/"} target="_blank" className={"p-3 border border-gray-800 rounded-full"}>
                <FaLinkedin className="w-5 h-5 fill-gray-400 hover:fill-orange-500"/>
            </NavLink>
            <NavLink to={"https://github.com/Jagadeeshboi/"} target="_blank" className={"p-3 border border-gray-800 rounded-full"}>
                <FaGithub className="w-5 h-5 fill-gray-400 hover:fill-orange-500"/>
            </NavLink>
            <NavLink to={"https://leetcode.com/u/Jagadeeshboi/"} target="_blank" className={"p-3 border border-gray-800 rounded-full"}>
                <SiLeetcode className="w-5 h-5 fill-gray-400 hover:fill-orange-500"/>
            </NavLink>
        </div>
    </div>
    )
}

export default ProfileCard
