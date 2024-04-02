import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume'
import Transcript from './pages/Transcript/Transcript'
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'

import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <Resume></Resume>
      <Transcript></Transcript>
      <Projects></Projects>
    </>
  )
}

export default App
