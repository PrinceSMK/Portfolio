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
          technology. With a deep understanding of the full web development
          cycle, I possess a proven track record of successfully delivering
          robust and scalable web applications. Throughout my career, I have
          honed my skills in front-end and back-end development, allowing me to
          create dynamic and interactive user interfaces while ensuring seamless
          integration with server-side components. My expertise in MERN stack
          development empowers me to build modern and efficient web applications
          that drive business growth and enhance user experiences.
        </p>

        <br />

        <p className="text-xl">
          My passion lies in leveraging the power of MERN stack to solve complex problems and create innovative solutions. I thrive in collaborative environments where I can contribute my expertise, work closely with cross-functional teams, and transform ideas into functional, high-performing web applications. I possess a strong attention to detail, ensuring that my code is clean, efficient, and maintainable, while always keeping up with industry best practices and emerging trends.

In addition to my technical skills, I am a strong communicator, able to effectively articulate complex concepts to both technical and non-technical stakeholders. I am highly adaptable and enjoy learning new technologies and frameworks to continuously enhance my skillset and stay ahead in the rapidly evolving world of web development.

If you are seeking a dedicated and skilled MERN Stack Developer to drive your web development initiatives, or if you simply want to connect and discuss industry trends, I invite you to reach out to me. Let's collaborate and create exceptional web experiences together!

Connect with me today, and let's explore the endless possibilities of MERN stack development.
        </p>
      </div>
    </div>
  );
}

export default About;
