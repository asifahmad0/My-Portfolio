import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideNavebar from './components/SideNavebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideNavebar/>
    <App />
  </StrictMode>,
)
