import { FolderKanban, House, MessagesSquare, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


function SideNavebar() {

    
    
    
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
          easing: "ease-in-out",
        });
      }, []);
      
    

    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className={` fixed bg-gradient-to-t from-primery to-secondry w-[40px] lg:w-[60px] h-[100dvh] flex flex-col items-center justify-between py-5 shadow-xl z-9999`}
    data-aos="slide-down">

        

        <div className="logo text-primery-light text-xl text-center font-bold p-3">
            <h1>A</h1>
            <h1>S</h1>
            <h1>I</h1>
            <h1>F</h1>
            <br/>
            <h1>A</h1>
            <h1>H</h1>
            <h1>M</h1>
            <h1>A</h1>
            <h1>D</h1>
        </div>      

        <ul className='p-3 flex text-textColor flex-col items-center gap-15 lg:gap-20 lg:mb-5'>
            <li><a href="/" className='hover:text-primery-light'  ><House/></a></li>
            <li><a href="/about" className='hover:text-primery-light'  ><User/> </a></li>
            <li><a href="/project" className='hover:text-primery-light'  ><FolderKanban/></a></li>
            <li><a href="/contact" className='hover:text-primery-light'  ><MessagesSquare /></a></li>
        </ul>

        {/* <div onClick={()=>setIsOpen(!isOpen)} className="btn relative w-[30px] h-[20px] flex flex-col justify-around cursor-pointer">
            <span className='absolute bg-primery w-[100%] h-[3px] top-0'> </span>
            <span className='absolute bg-primery w-[100%] h-[3px] '> </span>
            <span className='absolute bg-primery w-[100%] h-[3px] bottom-0'> </span>
        </div> */}

      
    </div>
  )
}

export default SideNavebar
