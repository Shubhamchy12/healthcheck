import React from 'react'

import "./App.css"
import Headers from './Components/Headers'
import Heroes from './Components/Heroes'
import TestCard from './Components/TestCard'
import Test from './Components/Tests'
import Footer from './Components/Footer'
import About from './Components/About'
import Features from './Components/Features'
import Check from './Components/Check'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
    <Headers/>
    <Heroes/>
    <TestCard/>
    <About/>
    <Features/>
    <Test/>
    <Check/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App