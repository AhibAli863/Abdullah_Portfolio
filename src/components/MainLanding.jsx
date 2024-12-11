import React from 'react'
import HeroSection from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

const MainLanding = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-16 overflow-x-hidden gap-10'>
            <HeroSection />
            <About />
            <Skills />
            <Portfolio />
            <Contact />

           
        </div>
    )
}

export default MainLanding