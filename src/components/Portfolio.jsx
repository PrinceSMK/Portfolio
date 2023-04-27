import React from 'react';
import Binyousaf from "../assets/portfolio/Binyousaf.jpeg"
import Baroque from "../assets/portfolio/Baroque.jpeg"
import JJ from "../assets/portfolio/JJ.jpeg"
import Calculator from "../assets/portfolio/Calculator.jpeg";
import socialmedia from "../assets/portfolio/socialmedia.jpeg";
import Analogwatch from "../assets/portfolio/Analogwatch.jpeg"


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
            src: Analogwatch
        },
        {
            id:6,
            src: Calculator
        },
    ]
  
  
  
  
  
  
    return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work on GitHub</p>
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
