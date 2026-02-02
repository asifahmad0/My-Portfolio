import { motion } from "framer-motion";

export default function About() {
  return (
    <section className=" bg-gradient-to-br from-black via-primery-light to-black flex items-center justify-center py-8 lg:py-20 px-2 lg:px-6">
      <div className=" w-full grid md:grid-cols-2 gap-12 items-center">
        

        {/* Floating 3D Elements */}
        <div className="relative h-[350px] flex items-center justify-center">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute w-24 h-24 rounded-xl bg-gradient-to-br from-primery to-secondry shadow-xl`}
              style={{ left: `${i * 20}%`, top: `${i * 15}%` }}
            />
          ))}
        </div>



        {/* 3D Card */}
        <motion.div
          initial={{ rotateY: -30, rotateX: 15, opacity: 0 }}
          whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative perspective-[1200px]"
        >
          <div className="transform-style-preserve-3d bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-8 px-3 lg:px-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
               Hi, I’m <span className="text-secondry font-bold">Asif Ahmad</span>, a FullStack Web
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
            <div className="mt-6 flex gap-4">
              
              <a href="https://www.linkedin.com/in/asif-ahmad7761/" target="_blank" className=" text-primery-light font-bold px-4 py-2 bg-white/10 rounded-full text-sm ">LikedIn</a>
              <a href="https://github.com/asifahmad0" target="_blank" className=" text-primery-light font-bold px-4 py-2 bg-white/10 rounded-full text-sm  ">GitHub</a>
              <a href="https://star-fusion.vercel.app/" target="_blank" className=" text-primery-light font-bold px-4 py-2 bg-white/10 rounded-full text-sm ">Website</a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}


