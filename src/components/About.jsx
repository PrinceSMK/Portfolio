import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p> 
            </div>
            <p className='text-xl mt-20'>Recently, I've completed a diploma in MERN stack development from Arfa Karim Institute of Information & Technology. MERN stands for MongoDB, Express, React, and Node.js - which are all components of a popular web development stack used to build dynamic and responsive web applications. Through the MERN stack development diploma program, I gained proficiency in using MongoDB, Express, React, and Node.js to build full-stack web applications. I also learned how to implement RESTful APIs and integrate third-party libraries and tools.
                </p>

                <br />

                <p className='text-xl'>I hold a Bachelor's degree in Science with major in Botany, Zoology, and Chemistry. My academic background in these fields has provided me with a solid understanding of the biological and chemical processes that underlie life on earth.
                </p>
        </div>
      
    </div>
  )
}

export default About
