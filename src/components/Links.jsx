import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

function Links() {
 
 
    const links = [
        {
            id:1,
            child: 
            (
                <>
            LinkedIn <FaLinkedin className='hover:text-white hover:bg-black' size={30}/>

                </>
            ),
            href:"https://www.linkedin.com/in/shahroz-yaseen/",
            style:"rounded-tr-md  hover:bg-indigo-900 hover:text-white"
        },
        {
            id:2,
            child: 
            (
                <>
            Github <FaGithub size={30}/>

                </>
            ),
            href:"https://github.com/PrinceSMK",
            style:" hover:bg-black hover:text-white  "

        },
        {
            id:3,
            child: 
            (
                <>
            E-Mail <HiOutlineMail size={30}/>

                </>
            ),
            href:"shahrozyaseen7@gmail.com",
            style:" hover:bg-red-800 hover:text-white  "

           
        },
        {
            id:4,
            child: 
            (
                <>
            Resume <BsFillPersonLinesFill size={30}/>

                </>
            ),
            href:"/resume.pdf",
            style:"rounded-br-md hover:bg-green-800 hover:text-white",
            
            download:true,
        },
    ]
    
 
 
    return (
    <div className=' lg:flex flex-col top-[35%] left-0 fixed'>

        <ul>

        {links.map(({id, child, href, style, download}) => (
     <li key={id} className={'flex justify-between items-center w-40 h-14 px-5 hover:rounded-md duration-300 hover:ml-[-10px] bg-blue-900 ml-[-100px]' + ' ' + style}>
     <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank">
      {child}
    </a>
  </li>
))}





        </ul>
      
    </div>
  )
}

export default Links
