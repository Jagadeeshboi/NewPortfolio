import { PrimaryOutlineButton } from "./Buttons"

function LetsConnect() {
    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col justify-center gap-3 items-center text-center tracker-wider">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-medium">Are You Ready to kickstart your project with a touch of magic?</h1>
            <p className=" text-sm/relaxed sm:text-base/relaxed lg:text-lg/relaxed text-gray-400">Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.</p>
            <PrimaryOutlineButton text="Let's Connect" link="contact"/>
        </div>
    )
}

export default LetsConnect
