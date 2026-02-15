import React from 'react'

import html from '../assets/html.jpeg'
import css from '../assets/css3.jpeg'
import js from '../assets/js.jpeg'
import ts from '../assets/ts.svg'
import tailwind from '../assets/tailwind.jpeg'
import reactImg from '../assets/react.svg'
import nodejs from '../assets/node-js-logo.png'
import express from '../assets/express.png'
import firebase from '../assets/firebase.webp'
import python from '../assets/vite-js.png'
import django from '../assets/sadcn.jpeg'
import mongodb from '../assets/mongodb.svg'
import flask from '../assets/nextjs.jpeg'
import RestAPI from '../assets/js.jpeg'
import MySQL from '../assets/postgres.avif'
import pandas from '../assets/ts.svg'
import numpy from '../assets/bootstrap.svg'
import matplotlib from '../assets/js.jpeg'
import seaborn from '../assets/clerk.svg'
import sklearn from '../assets/jest.png'
import framer from '../assets/framer.webp'

function Skill() {
  const skillss = [
    html, css, js, ts, tailwind, reactImg,
    nodejs, express, firebase,python,django, mongodb, flask, RestAPI, MySQL, pandas, numpy,
    matplotlib, seaborn, sklearn, framer
  ]
  const skills = [
    'HTML', 'CSS', 'JS', 'ts', 'TAILWIND',
    'NODEJS', 'EXPRESS', 'FIREBASE','PYTHON','DJANGO', 'MONGODB', 'FLASK', 'RESTAPI', 'MySQL', 'PANDAS', 'NUMPY',
    'MATPLOTLIB', 'SEABORN', 'SKLEARN', 'FRAMRR'
  ]

  return (
    <div className="w-full glow absolute bottom-[20px] overflow-hidden py-2 ">
      <div className="skill-track pl-[17px] bg-primery-light p-2">
        {[...skills, ...skills].map((item, index) => (
          // <img
          //   key={index}
          //   src={item}
          //   alt="skill"
          //   className="w-[50px] h-[50px] object-contain"
          // />
          <li className='text-textColor2'>{item}</li>
        ))}
      </div>
    </div>
  )
}

export default Skill
