import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Hero from './components/Hero'
import Footer from './components/Footer'
const App = () => {
  const [searchquery,setSearchquery]= useState('best sellers')
  return (
    <>
    <div className='min-h-screen bg-gray-900'>
      <Navbar handlesearch={(term)=>setSearchquery(term)} />
      <Banner/>
      <Hero searchquery={searchquery}/>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
