import { useState } from "react"
import emailjs from "emailjs-com"

function Contact() {
    // const userId = process.env.REACT_APP_USER_ID!;
    // const templateId = process.env.REACT_APP_TEMPLATE_ID!;
    // const serviceId = process.env.REACT_APP_SERVICE_ID!;

    const [data,setData]=useState<{name:string,email:string,message:string}>({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus]=useState(false);   

    const handleChange = (e:any) => {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        emailjs
        .send("service_tk9cdfs", "template_8eilzfn", data, "lDLItLssU7IrJ1Z29")
        .then(
            (result) => {
                setStatus(true);
                alert(result.text);
            },
            (error) => {
                setStatus(false);
                alert(error.text);
            }
            );
        setData({
            name: "",
            email: "",
            message: "",
        });
    }
    return (
    <section className="bg-[#1a1a1a] rounded-2xl mt-16 lg:mt-24">
    <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                    Contact me for <br/> more info
                </h1>

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                            Hanuman St, Bethapudi, Bhimavaram,534207
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(+91) 7680023449</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-orange-500 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">jagadeeshboina@gmail.com</span>
                    </p>
                </div>

                <div className="mt-6 w-80 md:mt-8">
                    <h3 className="text-gray-600 dark:text-gray-300 ">Follow Me</h3>

                    <div className="flex mt-4 -mx-1.5 ">
                        <a className="mx-1.5 dark:hover:text-orange-400 text-gray-400 transition-colors duration-300 transform hover:text-orange-500" href="https://www.linkedin.com/in/jagadeesh-boina/" target="_blank">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div
                    className="w-full px-8 py-10 mx-auto overflow-hidden bg-black rounded-lg shadow-2xl  lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <h1 className="text-lg font-medium text-gray-300">Get in Touch with Me!</h1>

                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                            <input onChange={handleChange} type="text" name="name" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email address</label>
                            <input onChange={handleChange} type="email" name="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Message</label>
                            <textarea onChange={handleChange} name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>
                        <div className="mt-6">
                        <button className='bg-orange-500 border rounded-xl inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium border-orange-900 text-primary hover:bg-orange-light-5 hover:text-body-color dark:hover:text-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue-light-3' type="submit">
                            Send Me Message
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default Contact
