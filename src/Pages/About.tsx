import AboutMe from "../Components/AboutMe"
import Education from "../Components/Education"
import LetsConnect from "../Components/LetsConnect"
import ProfileImage from "../Components/ProfileImage"
import UniversalCard from "../Components/UniversalCard"
import { Education as Edu } from "../Utility/Data"
import { Experience } from "../Utility/Data"

function About() {
  return (
    <div className="w-full max-w-full h-full mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-cols-12 lg :grid-rows-12 gap-5">
        <div className="col-span-4 row-span-12">
          <ProfileImage/>
        </div>
        <div className="col-span-8 row-span-12 mt-6 lg:mt-0">
          <AboutMe/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-Center w-full max-w-full gap-5 my-6">
        <Education data={Experience} heading={"Experience"}/>
        <Education data={Edu} heading={"Education"}/>
      </div>
      <>
        <UniversalCard>
          <LetsConnect/>
        </UniversalCard>
      </>
    </div>
  )
}

export default About
