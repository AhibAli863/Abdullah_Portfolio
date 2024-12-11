import React from 'react';
import { RiUserLocationFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Form from '../../components/Form';
import { NavLink } from 'react-router-dom';


const Contact = () => {
  return (
    <div id='contact' className='text-white'>
        <div className='py-12 text-center'>
                <h1 className='text-slate-100 text-4xl font-bold max-sm:text-2xl'>Contact Now</h1>
            </div>
<div className='w-screen px-24 flex items-center justify-between gap-5 max-sm:flex-wrap max-sm:justify-center max-md:flex-wrap max-lg:flex-wrap max-lg:justify-center'>
            <div className='p-10 max-sm:p-5'>
            <div>
                <div>
                    <h1 className='font-bold text-4xl leading-normal py-3 text-slate-100 max-sm:text-xl'>Got a Project in Mind? <br /> Feel Free to Reach Out!</h1>
                    <p className='text-gray-400'>Reach out and share how I can assist you. Complete the form, and I'll get back to you promptly.</p>
                </div>

                <div className='py-5 pt-5 flex flex-col gap-5'>

                <div className=''>
                    <div className='flex gap-2 items-center font-bold text-2xl max-sm:text-xl'>
                    <span><RiUserLocationFill/></span>
                    <h1 className=''>Address</h1>
                    </div>
                    <h1 className='text-gray-400 pl-7 pt-1 hover:text-slate-100 cursor-pointer transition-all delay-75'>Karachi, Pakistan</h1>
                </div>

                <div>
                <div className='flex gap-2 items-center font-bold text-2xl max-sm:text-xl'>
                    <span><FaPhoneVolume/></span>
                    <h1>Phone</h1>
                    </div>  
                    <NavLink to="https://wa.me/923303482334" target='_blank'>
                    <h1 className='text-gray-400 pl-7 pt-1 hover:text-slate-100 cursor-pointer transition-all delay-75'>+923303482334</h1>
                    </NavLink>
                </div>
            <div>
                <div className='flex gap-2 items-center font-bold text-2xl max-sm:text-xl'>
                    <span><MdEmail/></span>
                    <h1>Email</h1>
                </div>
                <NavLink to="https://mail.google.com/" target='_blank'>
                <h1 className='text-gray-400 pl-7 pt-1 hover:text-slate-100 cursor-pointer transition-all delay-75'>aliahib863@gmail.com</h1>
                </NavLink>
            </div>
            </div>
            </div>
            </div>



            <div className='bg-slate-700 p-14 rounded-xl max-sm:p-5'>
                <Form/>
            </div>
    </div>

    </div>
  )
}

export default Contact