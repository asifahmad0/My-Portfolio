import { useState } from 'react'
import Home from './pages/Home.jsx'
import ProjectSection from './pages/Project.jsx'
import Experience from './pages/Experiance.jsx'
import Footer from './pages/Footer.jsx'
import SkillsSection from './pages/SkillSection.jsx'
import ContactSection from './pages/ContactUs.jsx'
import About from './pages/About.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' ml-[40px] lg:ml-[60px] overflow-hidden '>
      <Home/>
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
