import React, { useEffect } from "react";
import resume from "../assets/Asif_Ahmad_full stack.pdf";
import img1 from "../assets/port.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);






  return (
    <section className="w-[100dvw-60px] min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Image Section (Top on small, Right on large) */}
      <div className=" order-1 lg:order-2 lg:pr-5 py-10 flex items-center justify-center">
        <img
          src={img1}
          alt="Asif Ahmad"
          className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] lg:h-[100%] lg:w-[100%] object-cover rounded-2xl"
          data-aos="flip-left"
        />
      </div>

      {/* Text Section (Bottom on small, Left on large) */}
      <div className="order-2 lg:order-1 px-5 lg:pl-20 py-10 flex flex-col gap-5 justify-center">
        <p className=" text-sm w-max tracking-wide bg-gray-200 backdrop-blur-lg text-textColor2 p-2 rounded-xl"
        data-aos="fade-up">
          Hi, Welcome
        </p>

        <h1 className="text-4xl text-textColor2 sm:text-5xl lg:text-7xl font-bold leading-tight"
        data-aos="slide-right" >
          I'm <span className="text-primery">Asif Ahmad</span>
        </h1>

        <h2 className="text-2xl text-textColor2 sm:text-3xl font-semibold"
        data-aos="slide-right">
          Full Stack Developer
        </h2>

        <p className="text-PtextColor max-w-xl"
        data-aos="fade-up">
          I create beautiful, functional, and user-centered digital experiences.
          With 2+ years of experience in web development, I bring ideas to life
          through clean code and thoughtful design.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4"
        data-aos="zoom-in">
          <a
            href={resume}
            download
            className="px-6 py-3 bg-primery text-textColor rounded-lg hover:scale-105 transition"
          >
            Download CV
          </a>

          <a
            href="/contact"
            className="px-10 py-3 border border-primery text-primery rounded-lg hover:scale-105 transition"
          >
            Contact
          </a>
        </div>


        <div className=" mt-10 flex flex-nowrap text-center p-2" data-aos="slide-right">
          <div className=" p-2 lg:p-4 border-r-[2px] border-primery max-w-[150px]">
            <h1 className="text-2xl text-primery font-bold ">1.5+</h1>
            <p className="text-rextColor2">Years Experience</p>
            </div>
          <div className=" p-2 lg:p-4 border-r-[2px] border-primery max-w-[150px]">
            <h1 className="text-2xl text-primery font-bold ">20+</h1>
            <p className="text-rextColor2">Projects Complited</p>
            </div>
          <div className=" p-2 lg:p-4 border-primery max-w-[150px]">
            <h1 className="text-2xl text-primery font-bold ">20+</h1>
            <p className="text-rextColor2">Technologies</p>
            </div>
          
        </div>
      </div>
    </section>
  );
}

export default Home;
