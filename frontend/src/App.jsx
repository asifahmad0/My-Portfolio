import { useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Experiance from './pages/Experiance.jsx'
import Project from './pages/Project.jsx'
import ProjectSection from './pages/Project.jsx'
import Experience from './pages/Experiance.jsx'
import Footer from './pages/Footer.jsx'
import Skill from './components/Skill.jsx'
import SkillsSection from './pages/SkillSection.jsx'
import ContactSection from './pages/ContactUs.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' ml-[40px] lg:ml-[60px] overflow-hidden '>
      <Home/>
      <Skill/>
      <About/>
      <Experience/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
