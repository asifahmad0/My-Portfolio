import React, { useEffect } from "react";
import about_img from "../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="about" className="w-[100dvw-60px] lg:h-[500px] py-5 grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" " data-aos="flip-right">
        <img src={about_img} />
      </div>
      <div className="text px-10 py-10 flex flex-col gap-10 ">
        <h1 className="text-primery text-3xl font-bold" data-aos="slide-right">
          About Us
        </h1>
        <p className="" data-aos="zoom-out">
          Hi, I’m <span className="text-primery font-bold">Asif Ahmad</span>, a FullStack Web
          Developer from India. I specialize in building scalable,
          user-friendly, and visually engaging applications using modern
          technologies such as Python, Django, Flask, FastAPI, Typescript, React, Express.js, Node.js, MongoDB, MySQL,
          RestAPI, Firebase, and Many More. <br/> <br/>
          I love bringing both the technical and visual aspects of digital products to life, ensuring
          performance, accessibility, and a seamless user experience. My journey
          began with roles in Accountent, Finance Analist and Web Devloper, where I learned
          how to work in team, Problem Solving, Desigen Making and also I learned 
          How much technology impacts user satisfaction and business success.
          Over time, I transitioned into fullstack development, combining that
          customer-focused mindset with strong technical expertise in frontend and
          backend ecosystems. Today, I thrive on solving real-world
          problems with clean, efficient code and intuitive design. I value
          continuous learning, self-challenge,
        </p>

        <div className="flex gap-2">
          <div className=" "><a href="https://www.linkedin.com/in/asif-ahmad7761/" target="_blank" className="text-bold border-r-[2px] border-primery p-4 ">LikedIn</a></div>
          <div className=" "><a href="https://github.com/asifahmad0" target="_blank" className="text-bold border-r-[2px] border-primery p-4 ">GitHub</a></div>
          <div className=" "><a href="https://star-fusion.vercel.app/" target="_blank" className="text-bold border-primery p-4 ">Website</a></div>
        </div>
      </div>
    </div>
  );
}

export default About;
