import React, { useEffect } from "react";
import resume from "../assets/Asif_Ahmad.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import Skill from "../components/Skill";
import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";




function Home() {

useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


  function Hero3DObject() {
        return (
          <Float speed={2} rotationIntensity={1.1} floatIntensity={1.8}>
            <mesh>
              <torusKnotGeometry args={[1, 0.35, 120, 16]} />
              <meshStandardMaterial
                color="#2E6B46"
                roughness={0.25}
                metalness={0.85}
              />
            </mesh>
          </Float>
        );
      }


  return (
    <section className=" bg-secondry relative w-[100dvw-60px] min-h-screen ">
      
      <div className='absolute w-[100%] h-[100%] '>
      
              <Canvas className="absolute inset-0 w-[100%] h-[100%]" camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[4, 4, 4]} intensity={1.2} />
              <Hero3DObject />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
            
          </div> 
    <div className=" absolute w-[100%] h-[100%]">
           
      <div className=" border w-[100%] h-screen px-5 lg:pl-20 py-20 flex flex-col gap-5 lg:items-center justify-center">
        <p className=" text-lg w-max tracking-wide bg-gray-200 backdrop-blur-lg text-textColor2 p-2 rounded-xl "
        data-aos="fade-up">
          Hi, Welcome
        </p>

        <h1 className="text-4xl text-textColor sm:text-5xl lg:text-8xl font-bold leading-tight"
        data-aos="slide-right" >
          I'm <span className="text-primery-light font">Asif Ahmad</span>
        </h1>

        <h2 className="text-2xl text-textColor lg:text-5xl font-semibold"
        data-aos="slide-right">
          Full Stack Developer
        </h2>

        <p className="text-textColor text-lg lg:text-xl"
        data-aos="fade-up">
          I create beautiful, functional, and user-centered digital experiences.
          With 2+ years of experience in web development, <br/> I bring ideas to life
          through clean code and thoughtful design.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4"
        data-aos="zoom-in">
          <a
            href={resume}
            download
            className="  px-6 py-3 bg-primery text-textColor lg:text-xl rounded-lg hover:scale-105 transition"
          >
            Download CV
          </a>

          <a
            href="/contact"
            className="px-10 py-3 border border-primery-light text-primery-light lg:text-xl rounded-lg hover:scale-105 transition"
          >
            Contact
          </a>
        </div>


        <div className=" mt-10 flex flex-nowrap text-center p-2 lg:gap-5" data-aos="slide-right">
          <div className=" p-2 lg:py-4 lg:px-6 border-r-[2px] border-primery w-[150px] lg:w-[250px]">
            <h1 className="text-2xl text-primery-light font-bold ">1.5+</h1>
            <p className="text-textColor">Years Experience</p>
            </div>
          <div className=" p-2 lg:py-4 lg:px-6 border-r-[2px] border-primery w-[150px] lg:w-[250px]">
            <h1 className="text-2xl text-primery-light font-bold ">20+</h1>
            <p className="text-textColor">Projects Complited</p>
            </div>
          <div className=" p-2 lg:py-4 lg:px-6 border-primery w-[150px] lg:w-[250px]">
            <h1 className="text-2xl text-primery-light font-bold ">20+</h1>
            <p className="text-textColor">Technologies</p>
            </div>
          
        </div>
      </div>
      
      </div>
      <Skill className='absolute bottom-0'/>
    </section>
  );
}

export default Home;
