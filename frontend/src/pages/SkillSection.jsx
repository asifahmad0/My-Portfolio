import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import html from '../assets/html.jpeg'
import css from '../assets/css3.jpeg'
import bootstrap from '../assets/bootstrap.svg'
import shadcn from '../assets/sadcn.jpeg'
import js from '../assets/js.jpeg'
import ts from '../assets/ts.svg'
import tailwind from '../assets/tailwind.jpeg'
import react from '../assets/react.svg'
import nodejs from '../assets/node-js-logo.png'
import express from '../assets/express.png'
import firebase from '../assets/firebase.webp'
import mongodb from '../assets/mongodb.svg'
import next from '../assets/nextjs.jpeg'
import postgre from '../assets/postgres.avif'
import framer from '../assets/framer.webp'
import git from '../assets/git.jpeg'
import github from '../assets/github.svg'

const skills = [
  { name: "JavaScript", type: "Programming Language", icon: js },
  { name: "React", type: "Library", icon: react },
  { name: "TypeScript", type: "Programming Language", icon: ts },
  { name: "Node.js", type: "Programming Language", icon: nodejs },
  { name: "Next.js", type: "Framework", icon: next  },
  { name: "Express.js", type: "Framework", icon: express },
  { name: "HTML", type: "Markup Language", icon: html},
  { name: "CSS", type: "Styling Language", icon: css },
  { name: "Bootstrap", type: "Library", icon: bootstrap },
  { name: "Shadcn/ui", type: "Library", icon: shadcn },
  { name: "Tailwind CSS", type: "Library", icon: tailwind },
  { name: "Framer Motion", type: "Animation Tool", icon: framer },  
  { name: "Firebase", type: "Database", icon: firebase },
  { name: "PostgreSQL", type: "Database", icon: postgre },
  { name: "MongoDB", type: "Database", icon: mongodb },
  { name: "Git", type: "Version Control", icon: git },
  { name: "GitHub", type: "Version Control", icon: github },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-textColor2 font-bold mb-10">My Stack / Skills</h2>

      {/* GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {visibleSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="skill-Card flex items-center gap-4 p-5 border rounded-xl bg-white shadow-sm hover:scale-105"
            >
              <div className="text-3xl"><img src={skill.icon} className="w-[50px] h-[50px]" /></div>
              <div>
                <h3 className="font-semibold text-textColor2">{skill.name}</h3>
                <p className="text-sm text-PtextColor">{skill.type}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full border text-sm hover:bg-gray-100 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}