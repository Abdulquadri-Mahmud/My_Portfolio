import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-white py-12 py-5 md:px-6 px-4" id="about">

      <div className="container mx-auto max-w-7xl text-black">
        {/* Section Title */}
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight animated-underline">
          About Me
        </h2>

        {/* Image & Content Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div data-aos="fade-right" className="md:w-1/3 w-full flex justify-center">
            <img src="/img/img.jpg" alt="AdeyemiCODE" className="rounded-lg shadow-lg border-4 max-h-96 object-cover" style={{ minWidth: "300px" }}/>
          </div>

          {/* Text Content */}
          <div data-aos="fade-left" className="md:w-2/3 text-left space-y-6 md:text-lg text-sm text-gray-800 leading-relaxed">
            <p>
              Hello! I'm <strong>AdeyemiCODE <span aria-label="waving hand" role="img">👋</span>!</strong>, a Frontend and MERN Stack
              Developer passionate about crafting beautiful, user-friendly, and
              dynamic web applications. I specialize in HTML, CSS, JavaScript,
              TailwindCSS, ReactJS, MongoDB, and NodeJS.
            </p>

            <p>
              With over 3 years of experience, I have worked on diverse projects
              as a freelancer and in professional roles, continuously learning
              and adapting to new technologies and industry trends. My focus is
              on building functional, efficient, and visually captivating
              websites.
            </p>

            <p>
              I have contributed as a Frontend Developer at{" "}
              <strong>Sysbeans</strong> and <strong>Fyndah</strong>, gaining
              hands-on experience delivering scalable web solutions.
              Additionally, I serve as a Front-end Instructor at Al-Ameen ITHUB,
              delivering engaging lectures and workshops in HTML, CSS, and
              JavaScript, mentoring the next generation of developers.
            </p>

            <p>
              I am a motivated, hardworking, and friendly professional eager to
              contribute to and grow with development teams by delivering
              well-designed mobile and web applications.
            </p>

            <Link
              to="/contact"
              data-aos="fade-up"
              className="inline-block mt-4 bg-black hover:bg-black text-white py-2 px-8 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
