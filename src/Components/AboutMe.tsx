import { PrimaryOutlineButton } from "./Buttons"
import UniversalCard from "./UniversalCard"

function AboutMe() {
  return (
    <UniversalCard>
        <h1 className="text-3xl">I’m Jagadeesh Boina, a WebApplication Developer.</h1>
        <p className="text-base/relaxed tracking-wider py-4 text-gray-400">Jagadeesh is a skilled professional specializing in web development and design, with expertise in React, JavaScript, and Python. Having built various projects like YouTube and Swiggy clones, along with portfolio work, he combines technical proficiency with a creative approach. His experience spans web development, data analysis, and software engineering, showcasing a passion for building innovative and user-focused applications.</p>
        <PrimaryOutlineButton text="Get in touch" link="contact"/>
    </UniversalCard>
  )
}

export default AboutMe
