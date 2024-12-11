import React from 'react';
import { FaMedal } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaTabletScreenButton } from "react-icons/fa6";
const HomeBox = () => {
    const TextBox = [
        {
            icon: <FaMedal/>,
            heading:"1+",
            content:"Years of experience"
        },
        {
            icon: <SiTicktick/>,
            heading:"10+",
            content:"Complete projects"
        },
        {
            icon: <FaTabletScreenButton/>,
            heading:"+",
            content:"Responsive Design"
        },
    ]

  return (
    <div className='Home_Icon flex mt-32 gap-5 items-center max-sm:flex-wrap justify-center max-sm:px-0 max-md:flex-wrap max-lg:flex-wrap max-xl:flex-wrap'>
        {TextBox.map((e , id)=>{
            return(
        <div key={id} className='px-24 py-6 w-96 bg-gray-700 text-white flex items-center justify-center text-center gap-9 rounded-xl hover:-translate-y-2 transition-all delay-150 cursor-pointer max-sm:px-2 max-sm:py-3 max-sm:w-52 max-sm:overflow-hidden'>        
            <h1 className='text-blue-700 font-bold text-6xl max-sm:text-lg'>{e.icon}</h1>
            <div className='flex flex-col items-center '>
            <h1 className='font-bold text-blue-700 text-5xl py-3 max-sm:text-xl'>{e.heading}</h1>
            <h1 className='font-bold text-2xl text-nowrap max-sm:text-lg max-sm:text-wrap'>{e.content}</h1>
            </div>

        </div>
            )
        })}

        </div>
  )
}

export default HomeBox