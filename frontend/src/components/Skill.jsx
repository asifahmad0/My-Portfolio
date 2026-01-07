import React from 'react'
import html from '../assets/html.jpeg'
import css from '../assets/css3.jpeg'
import js from '../assets/js.jpeg'
import ts from '../assets/ts.svg'
import tailwind from '../assets/tailwind.jpeg'
import react from '../assets/react.svg'
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

  const img_dict=[html, css, js, ts, tailwind, react, nodejs, express, firebase, python, django, mongodb, flask,
     RestAPI, MySQL, pandas, numpy, matplotlib, seaborn, sklearn, framer
]


  return (
    <div className='w-[100dvw-60px] h-[50px] overflow-hidden '>
        <div className="container w-max flex flex-nowrap gap-[23px] ">

          {
            img_dict.map((items, index)=>(
              <img src={items} key={index} alt='Html' className='min-w-[50px] min-h-[50px] max-h-[50px] objact-center ' />
            ))
          }

          {
            img_dict.map((items, index)=>(
              <img src={items} key={index} alt='Html' className='min-w-[50px] min-h-[50px] max-h-[50px] objact-center ' />
            ))
          }
            

            
        </div>
      
    </div>
  )
}

export default Skill
