import { FaDotCircle } from "react-icons/fa"
import { PrimaryOutlineButton} from "./Buttons"

function IntroCard() {
    return (
        <div className="w-full flex flex-col gap-5 tracking-wider">
            <h1 className="text-xl sm:text-2xl/snug lg:text-3xl/snug font-medium">I’m Web Developer | Crafting Seamless User Experiences with Clean and Efficient Code</h1>
            <p className="flex gap-2 items-center text-gray-400"><FaDotCircle className="fill-green-500 w-3 sm:w-4"/><span className="text-base sm:text-lg tracking-wider">Available for freelancing</span></p>
            <div className="w-full">
            <PrimaryOutlineButton text="View Resume" link="https://drive.google.com/file/d/1DWx-P2CpAXXr-TnhE1LRog8CajP42Eiz/view?usp=drive_link" target="_blank"/>
            </div>
        </div>
    )
}

export default IntroCard
