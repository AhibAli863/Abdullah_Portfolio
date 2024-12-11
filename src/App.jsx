import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainLanding from './components/MainLanding'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <MainLanding />
      <Footer />
    </div>
  )
}

export default App