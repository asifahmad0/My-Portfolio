import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideNavebar from './components/SideNavebar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Footer from './pages/Footer.jsx'
import ProjectSection from './pages/Project.jsx'
import ContactSection from './pages/ContactUs.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/project',
    element: <ProjectSection/>
  },
  {
    path: '/contact',
    element: <ContactSection/>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideNavebar/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
