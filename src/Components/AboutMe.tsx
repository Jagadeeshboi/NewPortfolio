import { PrimaryOutlineButton } from "./Buttons"
import UniversalCard from "./UniversalCard"

function AboutMe() {
  return (
    <UniversalCard>
        <h1 className="text-3xl">I’m Jagadeesh Boina, a WebApplication Developer.</h1>
        <p className="text-base/relaxed tracking-wider py-4 text-gray-400">Hi, I’m Jagadeesh, a passionate web developer and React enthusiast with a knack for creating functional and visually appealing digital experiences. I graduated in 2023 from Swarnandhra College of Engineering and Technology and have been continuously enhancing my skills in web development technologies like React, JavaScript, HTML, CSS, Python, Tailwind, SQL, and Redux Toolkit.<br/>

        During my internship as a Software Engineer at ALL DIGI SEO, I contributed to automating Google Business Profile processes using React, gaining hands-on industry experience.<br/>
        I thrive on solving complex problems and enjoy contributing to projects that challenge me to grow. Whether it's building efficient components, integrating APIs, or developing intuitive user interfaces, I bring dedication and creativity to every project I undertake.
        </p>
        <PrimaryOutlineButton text="Get in touch" link="/contact"/>
    </UniversalCard>
  )
}

export default AboutMe
