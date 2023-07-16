import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nodejs from "../assets/node.png"
import github from "../assets/github.png"
import mongodb from "../assets/mongo.png"
import bootstrap from "../assets/botstrap.png"
import tailwind from "../assets/tailwind.png"
import graphql from "../assets/graphql.png"
import reactnative from "../assets/react.png"
import nextjs from "../assets/nextjs.jpg"



function Experience() {
 


    const techs = [
        {
            id:1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id:2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id:3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id:4,
            src: reactImage,
            title: "React JS",
            style: "shadow-blue-700"
        },
        {
            id:5,
            src: nodejs,
            title: "Node JS",
            style: "shadow-green-500"
        },
        {
            id:6,
            src: mongodb,
            title: "Mongo DB",
            style: "shadow-green-700"
        },
        {
            id:7,
            src: bootstrap,
            title: "BootStrap",
            style: "shadow-purple-500"
        },
        {
            id:8,
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-sky-500"
        },
        {
            id:9,
            src: github,
            title: "Github",
            style: "shadow-gray-500"
        },
        {
            id:10,
            src: nextjs,
            title: "Next JS",
            style: "shadow-gray-500"
        },
        {
            id:11,
            src: reactnative,
            title: "React Native",
            style: "shadow-sky-500"
        },
        {
            id:12,
            src: graphql,
            title: "Graph-ql",
            style: "shadow-purple-500"
        },
    ]
 
 
 
 
 
 
 
 
    return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-[210%] md:pt-[105%] lg:pt-[78%] xl:pt-[58%]'>


        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl  border-b-4 border-gray-500 p-2 inline text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-cyan-600 to-violet-500 ml-8 md:ml-[33%] lg:ml-0'>Experience</p>
                <p className='py-6 ml-3 md:ml-44 md:mt-4  lg:ml-0 lg:mt-0 '>These are the technologies I'm <span className='ml-[21%] md:ml-0'>working with :-</span> </p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


                {
                    techs.map(({id, src, title, style})=>(


                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'  />
                    
                    <p className='mt-4'>{title}</p>
                </div>


                    ))
                }


            </div>
        </div>      







    </div>
  )
}

export default Experience
