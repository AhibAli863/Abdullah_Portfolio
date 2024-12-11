import React from 'react';
import Logo from '../assets/Logo.png'
import Icons from './Icons';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-gray-800 text-slate-100 mt-6 flex items-center justify-between w-screen max-sm:flex-wrap'>
        <div className='w-48 max-sm:w-16 max-md:w-20 '>
        <img src={Logo} alt="" />
        </div>

        <div>
            <p className='font-semibold max-sm:text-xs max-sm:font-medium max-md:font-medium'> <NavLink to='https://wa.me/923303482334' target='_blank' className='text-blue-700'> Abdullah </NavLink>2024 All right Reserved &reg;</p>
        </div>

        <div className='px-12 max-md:px-1 '>
            <Icons/>
        </div>
    </div>
  )
}

export default Footer