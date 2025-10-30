import React from 'react'
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Hero from './components/Hero.jsx'
import Sidebar from './components/Sidebar.jsx'
import LiquidEther from './components/LiquidEther.jsx'
import Project from './components/Project.jsx'
import Graphic from './components/Graphic.jsx'
function App() {


  return (
    <>
      <LiquidEther />
        <Navbar />
        <div className="flex min-h-screen">
        <Sidebar />
          <div className="flex-1 flex flex-col">
        <MainContent />
        <Project/>
        <Graphic/>
        </div>
      </div>
    </>
  )
}

export default App
