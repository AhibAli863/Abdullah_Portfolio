import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Icons = () => {
  return (
    <div className='px-10 text-white font-semibold text-2xl cursor-help flex items-center gap-5 relative max-sm:gap-3'>

      <NavLink to="https://github.com/AhibAli863/" target='_blank' className="icon text-3xl  max-sm:text-xl  ">
        <abbr data-title="Abdullah's GitHub" className=" text-slate-50 hover:text-gray-700">
          <FaGithub className=" " />
        </abbr>
      </NavLink>

      <NavLink to="https://www.linkedin.com/in/abdullah-naeem-772b412a2" target='_blank' className="icon text-3xl  py-3 max-sm:text-xl">
        <abbr data-title="Abdullah's LinkedIn" className=" text-slate-50 hover:text-blue-700">
          <FaLinkedin className="" />
        </abbr>
      </NavLink>

      <NavLink to="https://wa.me/923303482334" target='_blank' className="icon text-3xl py-3 max-sm:text-xl">
        <abbr data-title="Abdullah's WhatsApp" className=" text-slate-50 hover:text-green-700">
          <FaWhatsapp className=" " />
        </abbr>
      </NavLink>

    </div>
  )
}

export default Icons