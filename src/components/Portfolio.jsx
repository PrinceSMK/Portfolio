import React from 'react';
import Binyousaf from "../assets/portfolio/Binyousaf.jpeg"
import Baroque from "../assets/portfolio/Baroque.jpeg"
import JJ from "../assets/portfolio/JJ.jpeg"
import Calculator from "../assets/portfolio/Calculator.jpeg";
import socialmedia from "../assets/portfolio/socialmedia.jpeg";
import nbt from "../assets/nbt.png"
import diffco from "../assets/diffco.png"


function Portfolio() {
  

    const portfolios = [
        {
            id:1,
            src: Baroque
        },
        {
            id:2,
            src: Binyousaf
        },
        {
            id:3,
            src: JJ
        },
        {
            id:4,
            src: socialmedia
        },
        {
            id:5,
            src: nbt
        },
        {
            id:6,
            src: diffco
        },
    ]
  
  
  
  
  
  
    return (
    <div name="portfolio" className='pt-[220%] md:pt-[120%] xl:pt-[40%] lg:pt-[52%] focus:  bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl  inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-cyan-600 to-violet-500 ml-[27%] md:ml-[39%] lg:ml-0 '>Portfolio</p>
                <p className='py-6 ml-14 md:ml-52 lg:ml-0'>Check out some of my work on <span className='font-bold tracking-wider ml-[30%] mt-2 md:mt-0 md:ml-0'>GitHub</span> </p>
            </div>



            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src})=>(



                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center '>
                    
                    </div>
                    </div>



                ))
            }
                
                </div>


        </div>
        
      
    </div>
  )
}

export default Portfolio
