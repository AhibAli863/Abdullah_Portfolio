import React from 'react';
import About_Image from "../../assets/About_Image.jpeg"
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div id='about' className='mt-28 max-sm:mt-8'>
        <h1 className='text-center font-bold text-slate-50 text-5xl py-16 max-sm:text-3xl'>About Me</h1>
        <div className='About_section px-60 flex items-center justify-center py-12 max-sm:px-5 max-sm:flex-wrap max-sm:gap-5 max-md:px-20 max-md:flex-wrap max-lg:flex-wrap max-lg:px-32 max-lg:gap-10 max-xl:flex-wrap'>
        <div className='About-section-para px-24 max-sm:px-1 max-lg:px-0'>
            <h1 className='font-semibold text-3xl text-slate-50 flex flex-col py-3 max-sm:text-2xl'>Need a Creative
                <span> Product? I can Help You!</span></h1>
            <p className='text-gray-300 max-sm:text-sm'>Hey, I'm Abdullah, an accomplished Frontend Developer with extensive expertise in HTML , CSS , JAVASCRIPT , TAILWIND , BOOTSTRAP , GSAP Animation , basic React JS With successful projects, I am dedicated to delivering high-quality results on time and collaborating effectively to achieve your project goals. Let's connect to turn your vision into reality!</p>

        <div className='mt-12 font-bold text-slate-50'>
        <NavLink to="https://wa.me/923303482334" target='_blank' className='border border-blue-700 bg-blue-700 p-5 rounded hover:bg-transparent max-sm:p-3 max-sm:text-sm hover:bg-blue-700 transition-all delay-100 hover:delay-200 hover:shadow-2xl hover:shadow-blue-700 hover:rounded-lg'>Let's work Together</NavLink>
            </div>
        </div>


        </div>
    </div>
  )
}

export default About