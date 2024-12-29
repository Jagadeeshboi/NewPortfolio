import Company from "../Components/Company"
import IntroCard from "../Components/IntroCard"
import LetsConnect from "../Components/LetsConnect"
import ProfileCard from "../Components/ProfileCard"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import UniversalCard from "../Components/UniversalCard"

const Home = () => {
    return (
        <div className="w-full max-w-full mt-16 lg:mt-24">
        <div className="flex flex-col place-items-center lg:grid lg:grid-cols-12 lg:grid-rows-12 justify-center gap-3 ">
            <div className="lg:col-span-4 w-full lg:row-span-12">
                <UniversalCard> <ProfileCard/> </UniversalCard>
            </div>
            <div className="lg:col-span-8 lg:row-span-7 ">
                <UniversalCard> <IntroCard/> </UniversalCard>
            </div>
            <div className="lg:col-span-8 w-full lg:row-span-6">
                <UniversalCard> <Company/> </UniversalCard>
            </div>
        </div>
        <div className="mt-6">
            <UniversalCard><Skills/> </UniversalCard>
        </div>
        <div className="mt-6">
            <UniversalCard><Projects/></UniversalCard>
        </div>
        <div className="mt-6">
            <UniversalCard><LetsConnect/></UniversalCard>
        </div>
        </div>
    )
}

export default Home
