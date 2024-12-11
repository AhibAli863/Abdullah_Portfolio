import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {

    const project = [
        {
            name: "Image Gallery",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/fe458127812043.5636b276d6b43.jpg",
            href:"https://ahibali863.github.io/imagegallery/"
        },

        {
            name: "Waleed's Porfolio",
            src: "https://upload.wikimedia.org/wikipedia/commons/8/83/WALEED_Logo.png",
            href:"https://waleedportfolio-72e04.web.app/"

        },
        {
            name: "Ochi Clone",
            src: "https://static.wixstatic.com/media/491e5d_b16b78bbd0934a69a4cda06bc99386fb~mv2.png"
        },
        {
            name: "Barbereo",
            src: "https://images.fresha.com/locations/location-profile-images/8464/2110416/9096723d-4454-44a3-aaf4-299c71666a34-BarberoGentlemensLounge2-AE-Dubai-Fresha.jpg?class=venue-gallery-small"
        },
        {
            name: "Vehicle Inventory",
            src: "https://img.freepik.com/free-vector/gradient-car-wash-logo-design_23-2149914534.jpg?semt=ais_hybrid"
        },
        
    ]

    return (
        <div id='portfolio' className='my-32 max-sm:my-12 max-lg:my-20'>
            <div className='py-12 text-center'>
                <h1 className='text-slate-100 text-4xl font-bold max-sm:text-2xl'>My_Portfolio</h1>
            </div>

            <div className='flex gap-10 px-32 py-32 max-sm:p-12 max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap max-xl:px-10 max-lg:gap-5'>

                <div className='w-96 max-sm:w-full max-md:w-full max-lg:w-full'>
                    <h1 className='leading-snug text-slate-100 text-4xl font-bold max-sm:text-xl'>See My Incredible Projects That Will Inspire You!</h1>
                    <p className='text-gray-400 py-5'>We create top-quality websites designed for long-term success. Our well-documented, clean, and elegant interfaces ensure ease of use, even for non-technical users.</p>
                </div>
                <div className=' grid gap-16 px-10 grid-cols-3 max-sm:flex max-sm:flex-wrap max-sm:justify-center max-sm:px-1 max-sm:gap-5 max-md:flex-wrap max-md:flex max-md:justify-center max-lg:flex max-lg:flex-wrap max-lg:justify-center max-xl:flex max-xl:flex-wrap max-xl:justify-center max-xl:px-4 max-xl:gap-5'>
                    {
                        project.map((e, id) => {
                            return (
                                
                                <li className='relative overflow-hidden rounded-lg list-none w-80 h-80 gap-5 group max-sm:w-40 max-xl:w-60 max-xl:h-60 max-2xl:w-60 max-2xl:h-60 max-2xl:gap-5 max-2xl:flex max-2xl:justify-center max-2xl:flex-wrap'
                                key={id}>
                                <NavLink to={e.href} target='_blank' className='w-80 h-80 cursor-grabbing'>
                                        <img src={e.src} alt={e.name} className='w-full h-full' />
            <span className="z-10 text-xl text-slate-50 rounded-xl bg-gray-900 p-3 absolute bottom-0 
               opacity-0 translate-y-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-y-10 group-hover:translate-x-20
               transition-all duration-300 cursor-grabbing max-sm:group-hover:translate-x-5 max-sm:group-hover:-translate-y-5">{e.name}</span>

               <span className='w-full h-full backdrop-blur-lg bg-[rgba(0,0,0, 0.4)] absolute bottom-0 
               opacity-0 translate-y-0 translate-x-0 group-hover:opacity-100 group-hover:translate-y-100
               transition-all duration-300'></span>
               </NavLink>
                                </li>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio