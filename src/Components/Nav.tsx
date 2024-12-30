import { NavLink } from "react-router-dom"
import { PrimarySemiRoundedButton } from "./Buttons"
import { MdClose, MdMenu } from "react-icons/md"
import { useState } from "react"
import { NavData } from "../Utility/Data"

const Nav = () => {
    const [open,SetOpen]=useState<boolean>(false);
    return (
        <>
        <div className="fixed z-30 -mt-6 py-5 bg-black text-white flex justify-between items-center max-w-screen-xl w-full">
            <h1 className="text-2xl lg:text-4xl font-medium">{"<Jagadeesh/>"}</h1>
            <div className="lg:flex gap-10 text-base/relaxed font-medium hidden ">
                {NavData.map((data,i)=>
                <NavLink to={data.path} key={i}  role="menuitem">{data.name}</NavLink>)}
            </div> 
            <div className="hidden lg:inline-block px-8">
                <PrimarySemiRoundedButton/>
            </div>
            <div className="lg:hidden" onClick={()=>SetOpen(!open)}> 
                {open?<MdClose className="w-8 h-8 fill-white mr-6"/>:<MdMenu className="w-8 h-8 fill-white mr-6"/>}
            </div>
        </div>
        <div className={` ${open?"translate-y-0":"-translate-y-full"}  fixed z-20 transition-all duration-100  right-6 top-12  my-4 text-base list-none bg-black border border-gray-800 divide-y divide-white w-52 rounded shadow  lg:hidden`}>
        <ul className="py-1" role="none">
          {NavData.map((data,i)=><li key={i} >
            <NavLink to={data.path} className="block px-4 py-2 text-sm text-white" role="menuitem" onClick={()=>SetOpen(!open)}>{data.name}</NavLink>
          </li>)}
        </ul>
      </div>
      </>
    )
}

export default Nav
