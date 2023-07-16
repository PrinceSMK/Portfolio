import React from "react";
import pic from "../assets/pic.jpg";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-[440%] md:pt-[80%] lg:pt-[38%] xl:pt-[30%]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-violet-600 to-yellow-500 merriweather mt-[75%] md:mt-0">
            I'm a MERN Stack <span className="ml-[20%] md:ml-0">Developer</span> 
          </h2>
          <br />
          {/* <p className='text-white tracking-wider'>
                        I have a 2 years of Experience in HTML, CSS & JavaScript. <br />
                        I have a 1 year of Experience in <b>React JS and Node JS</b>.
                        Currently, I love to work on web application using tehnologies like
                        <b> <i>NEXT JS,React Native, React JS, Bootstrap, Tailwind CSS, Graphql, Node JS, Express JS and Mongo DB</i></b>  <br />
                        & I'm working as a <b> <i> MERN Stack Developer </i></b> in Global Tech Solutions, Lahore.
                    </p> */}
          <p className="text-white tracking-wider text-[19px]  ">
            I am a passionate MERN Stack Developer <br /> with a strong
            foundation in HTML, CSS, and JavaScript. <br /> With 2 years of
            experience in these core technologies, <br /> <br /> I have gained
            expertise in delivering exceptional web experiences. <br />{" "}
            Recently, I have been focusing on React JS and Node JS, <br /> and I
            enjoy building dynamic and interactive <br /> web applications. In
            addition to my proficiency <br /> in React JS and Node JS, <br />{" "}
            <br /> I am also experienced in Next JS, React Native, <br />{" "}
            Bootstrap, Tailwind CSS, GraphQL, Express JS, and MongoDB. <br />{" "}
            These exciting technologies allow me to create <br /> innovative and
            efficient solutions. <br />
            Currently, I work as a junior MERN Stack Developer <br /> at Noble
            Bridge Technologies. <br /> <br /> I thrive in team environments and{" "}
            <br />
            continuous improvement initiatives.
            <br /> <br /> Apart from coding, I value effective communication .{" "}
            <br /> I am driven by turning ideas into reality and always seek
            opportunities for growth and learning in my career as a developer.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="group text-white w-fit px-4 py-3 mt-3 md:mt-4 my-2 flex items-center rounded-md bg-gradient-to-r from from-cyan-600  to-purple-600 cursor-pointer"
            >
              <h2 className="font-bold text-1.9xl tracking-widest">
                PortFolio
              </h2>
              <span className="hover:rotate-90 duration-300">
                <HiArrowRightCircle size={27} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={pic}
            alt="profile picture"
            className="rounded-2xl mx-auto w-2/3 md:w-full pt-[300%] md:pt-[-30%] lg:pt-0 sm:pt-0 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
