import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact ,FaBootstrap  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";
import { TbBrandNpm } from "react-icons/tb";


const Skills = () => {

  const [activeSection, setActiveSection] = useState('skills');

  const skillsIcons = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      color: "red"
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      color: "blue"
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      color: "yellow"
    },
    {
      icon: <FaReact />,
      title: "React JS",
      color: "skyblue"
    },
    {
          icon:<RiTailwindCssFill />,
          title:"TAILWIND",
          color:"blue"
        },
        {
          icon:<SiGreensock />,
          title:"GSAP Animation",
          color:"chartreuse"
        },
        {
          icon:<FaBootstrap/>,
          title:"BOOTSTRAP",
          color:"blueviolet"
        },
      
     
  ];

  const toolsIcons = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      color: "black"
    },
    {
      icon: <VscVscode />,
      title: "VS Code",
      color: "dodgerblue"
    },
    {
      icon: <TbBrandNpm />,
      title: "NPM",
      color: "red"
    },
  ];

  return (
    <div id="skills" className="pt-28 flex items-center px-44 gap-5 text-gray-400 max-sm:flex-wrap max-sm:flex-col max-sm:px-20 max-sm:pt-10 max-md:flex-wrap max-md:flex-col max-lg:flex-wrap max-lg:flex-col max-xl:px-2">
    <h1 className="-rotate-90 py-5 text-2xl font-medium text-slate-500 max-sm:rotate-0  max-md:rotate-0 max-lg:rotate-0 ">
    My_Skills</h1>
      <div className="skills-left-section w-1/2 px-12 flex flex-col gap-7 max-sm:w-full max-md:w-screen max-lg:w-full max-lg:px-24 ">
        <h1 className="text-slate-100 leading-snug text-4xl font-bold max-sm:text-2xl">
          What My Programming <br /> Skills and Tools Included?
        </h1>
        <p>
          I create clean, user-friendly, and responsive interfaces using the following skills and tools.
        </p>

        <div className="w-44 flex justify-evenly bg-gray-800 py-1 rounded-full ">

          <button className={`font-bold px-5 py-1 rounded-full transition-all delay-100 
          ${activeSection === 'skills' ? 'text-slate-100 bg-blue-700' : 'text-gray-500'}`}
            onClick={() => {setActiveSection('skills')}}
          >
            Skills
          </button>

          <button
          className={`font-bold px-5 py-1 rounded-full transition-all delay-100 ${activeSection === 'tools' ? 'text-slate-100  bg-blue-700' : 'text-gray-500'}`}
          onClick={()=>{ setActiveSection('tools')}}
          >Tools</button>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center h-96 transition-all delay-100 max-sm:w-full max-sm:flex-wrap max-sm:h-auto max-sm:pt-10 max-md:w-screen max-md:h-auto max-lg:flex-wrap max-lg:w-screen">
        <div className="flex gap-7 px-20 justify-center flex-wrap relative ">
          {activeSection === 'skills' &&
            skillsIcons.map((e, id) => (
              <abbr
                key={id}
                data-title={e.title}
                className="cursor-help text-5xl bg-slate-700 p-5 rounded-lg transition-all delay-100"
                style={{
                  color: e.color,
                  boxShadow: `0 0 10px ${e.color}`,
                }}
              >
                {e.icon}
              </abbr>
            ))}

          {activeSection === 'tools' &&
            toolsIcons.map((e, id) => (
              <abbr
                key={id}
                data-title={e.title}
                className="transition-all delay-100 cursor-help text-5xl bg-slate-700 p-5 rounded-lg"
                style={{
                  color: e.color,
                  boxShadow: `0 0 10px ${e.color}`,
                }}
              >
                {e.icon}
              </abbr>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
