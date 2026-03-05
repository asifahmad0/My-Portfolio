import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import python from '../assets/python.png'
import flask from '../assets/flask.png'
import django from '../assets/django.png'
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
import mysql from '../assets/mysql.png'
import postgre from '../assets/postgres.avif'
import framer from '../assets/framer.webp'
import git from '../assets/git.jpeg'
import github from '../assets/github.svg'

const skills = [
  { name: "Python", type: "Programming Language", icon: python },
  { name: "Flask", type: "Framework", icon: flask },
  { name: "Django", type: "Framework", icon: django },
  { name: "JavaScript", type: "Programming Language", icon: js },
  { name: "TypeScript", type: "Programming Language", icon: ts },
  { name: "React", type: "Library", icon: react },
  { name: "Node.js", type: "JavaScript runtime environment", icon: nodejs },
  { name: "Express.js", type: "Framework", icon: express },
  { name: "MongoDB", type: "Database", icon: mongodb },
  { name: "HTML", type: "Markup Language", icon: html},
  { name: "CSS", type: "Styling Language", icon: css },
  { name: "Bootstrap", type: "Library", icon: bootstrap },
  { name: "Shadcn/ui", type: "Library", icon: shadcn },
  { name: "Tailwind CSS", type: "Library", icon: tailwind },
  { name: "Framer Motion", type: "Animation Tool", icon: framer },  
  { name: "MySql", type: "Database Managment System", icon: mysql },  
  { name: "Firebase", type: "Database", icon: firebase },
  { name: "PostgreSQL", type: "Database", icon: postgre },
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
    <section className="max-w-7xl lg:max-w-screen bg-primery mx-auto px-4 py-16">
      <h2 className="text-3xl text-center text-primery-light font-bold mb-10  font">My Stack / Skills</h2>

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
          className="px-6 py-2 rounded-full border vorder-textColor text-sm text-textColor hover:bg-gray-100 hover:text-textColor2 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}