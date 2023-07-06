import React from "react";
import pic from "../assets/pic.jpg";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-[410%] md:pt-[80%] lg:pt-[35%] xl:pt-[20%] pt-[150%]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white merriweather">
            I'm a MERN Stack Developer
          </h2>
          <br />
          {/* <p className='text-white tracking-wider'>
                        I have a 2 years of Experience in HTML, CSS & JavaScript. <br />
                        I have a 1 year of Experience in <b>React JS and Node JS</b>.
                        Currently, I love to work on web application using tehnologies like
                        <b> <i>NEXT JS,React Native, React JS, Bootstrap, Tailwind CSS, Graphql, Node JS, Express JS and Mongo DB</i></b>  <br />
                        & I'm working as a <b> <i> MERN Stack Developer </i></b> in Global Tech Solutions, Lahore.
                    </p> */}
          <p className='text-white tracking-wider text-[18px]'>
            Hi, I'm a passionate MERN Stack Developer <br /> with a solid background in
            HTML, CSS, and JavaScript, <br />  as well as 2 years of experience in these
            core technologies, <br /> I have honed my skills to deliver exceptional web
            experiences. <br /> Over the past year, I've been diving deep into the
            world <br /> of <i>React JS and Node JS</i> ,<br /> building dynamic and interactive web
            applications. <br /> My expertise extends to exciting technologies like <br />
            <i>Next JS, React Native, Bootstrap, Tailwind CSS, <br /> GraphQL, Express JS,
            and MongoDB</i>. <br /> Currently, I'm working as a
            junior MERN Stack Developer at <br /> <i>Noble Bridge Technologies</i>, <br /> where I collaborate
            with cross-functional teams <br /> to develop and maintain robust web
            applications. <br /> I thrive on translating ideas into reality. <br />  Beyond coding, I'm an
            avid collaborator and <br /> effective communicator, thriving in team
            environments and actively contributing to code reviews and
            continuous improvement initiatives. 
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from from-cyan-600  to-purple-600 cursor-pointer"
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
            className="rounded-2xl mx-auto w-2/3 md:w-full pt-[230%] sm:pt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
