import { useState } from 'react'

function Navbar() {

 const [isOpen, setIsOpen] = useState(false)


  return (
    <div className={` flex items-center justify-between shadow-lg px-2 md:px-5 ${ isOpen? 'h-screen toggle':'h-[50px]' } w-screen `}>
        <div className="logo flex p-2">
            <h1 className='text-xl font-bold w-[120px] '>Asif Ahmad</h1>
        </div>
        <ul className={` lg:flex gap-5 ${ !isOpen? 'hidden': '' }`}>
            <li><a href="/" className='p-2 hover:text-primery '>Home</a></li>
            <li><a href="/about" className='p-2 hover:text-primery '>About</a></li>
            <li><a href="/project" className='p-2 hover:text-primery '>Project</a></li>
            <li><a href="/contact" className='p-2 hover:text-primery '>Contact</a></li>
        </ul>

        <div className="toggl lg:hidden" onClick={()=>setIsOpen(!isOpen)}>|||</div>
      
    </div>
  )
}

export default Navbar
