import React from 'react';
import pic from "../assets/pic.jpg";
import {HiArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-scroll";

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-white'>I'm a Full Stack Developer / <br /> MERN Stack Developer </h2> <br />
                    <p className='text-gray-500 py'>
                        I have a 2 years of Experience in HTML, CSS & JavaScript. <br />
                        I have a 1 year of Experience in <b>React JS and Node JS</b>.
                        Currently, I love to work on web application using tehnologies like
                        <b> <i> React JS, Bootstrap, Tailwind, Node JS, Express JS and Mongo DB</i></b>  <br />
                        & I'm working as a <b> <i> MERN Stack Developer </i></b> in Global Tech Solutions, Lahore.
                    </p>

                    <div>
                        <Link to="portfolio" smooth duration={700 } className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from from-cyan-600  to-purple-600 cursor-pointer'>
                           <h2 className='font-bold text-1.9xl'>PortFolio</h2> 
                            <span className='hover:rotate-90 duration-300'>
                           < HiArrowRightCircle size={27} className='ml-3' />
                            </span>
                        </Link>
                    </div>



                </div>

                <div>
                    <img src={pic} alt="profile picture" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>



    </div>
  )
}

export default Home
