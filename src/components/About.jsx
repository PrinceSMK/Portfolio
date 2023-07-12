import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-[520%] md:pt-[125%] lg:pt-[62%] xl:pt-[13%]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-4 font-Merriweather">
          I am an accomplished MERN (MongoDB, Express.js, React.js, Node.js)
          Stack Developer with a specialized diploma in this cutting-edge
          technology. With a proven track record of successfully delivering
          robust and scalable web applications, My expertise in both front-end and
          back-end development allows me to create dynamic and interactive user
          interfaces that seamlessly integrate with server-side components. I am
          passionate about leveraging the power of the MERN stack to solve
          complex problems and drive business growth. I
          have a strong attention to detail, ensuring clean and efficient code
          that adheres to industry best practices.
        </p>

        <br />

        <p className="text-xl">
          In addition to my technical skills, I am a strong
          communicator, able to effectively articulate complex concepts to both
          technical and non-technical stakeholders. I am highly adaptable and
          enjoy learning new technologies and frameworks to continuously enhance
          my skillset and stay ahead in the rapidly evolving world of web
          development. If you are seeking a dedicated and skilled MERN Stack
          Developer to drive your web development initiatives, or if you simply
          want to connect and discuss industry trends, I invite you to reach out
          to me. Let's collaborate and create exceptional web experiences
          together! Connect with me today, and let's explore the endless
          possibilities of MERN stack development.
        </p>
      </div>
    </div>
  );
}

export default About;
