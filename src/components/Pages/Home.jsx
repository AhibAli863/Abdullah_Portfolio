import React from 'react';
import Main_Image from '../../assets/Ahib.jpeg'
import { Typewriter } from 'react-simple-typewriter';
import Icons from '../Icons';
import HomeBox from '../HomeBox';
import { NavLink } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div id='home' className='flex flex-col items-center justify-center gap-12 pt-14 max-sm:pt-24'>
        <div className='transition-all delay-100 border-[20px] border-slate-100 rounded-full hover:scale-90 cursor-pointer '>
            <img src={Main_Image} alt="main-image" 
            className='w-60 h-60 rounded-full shadow-xl max-sm:w-32 max-sm:h-32'
            />

        </div>
        <div>
                <h1 className="text-3xl sm:text-xl text-blue-600 font-bold max-sm:text-xl">
                <Typewriter
                    words={['Frontend Developer','REACT JS' ,'TAILWIND CSS','Built a multi projects']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={150}
                    deleteSpeed={100}
                    delaySpeed={1000}
                    />
                    </h1> 

            </div>

            <div>
                <NavLink to="https://wa.me/923303482334" target='_blank' className='border border-blue-700 text-white font-semibold text-xl p-5 hover:bg-blue-700 transition-all delay-100 hover:delay-200 hover:shadow-2xl hover:shadow-blue-700 hover:rounded-lg'>Let's connect!</NavLink>
            </div>

            <Icons />
            <HomeBox />



    </div>
  )
}

export default HeroSection