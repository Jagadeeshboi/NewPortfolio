import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"

const PageLayout = () => {
  return (
    <div className="bg-black  max-w-full text-white">
        <div className="max-w-screen-xl w-full mx-auto p-4 ">
            <Nav/>
            <Outlet/>
        </div>
    </div>
  )
}

export default PageLayout
