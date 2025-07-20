import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import { Link } from 'react-router-dom';

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="rounded-lg relative z-10 mb-8 bg-white text-gray-900 md:min-h-screen md:px-24 md:py-0 py-20 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-left max-w-2xl" data-aos="fade-right">
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="md:text-5xl text-4xl font-bold text-black">
              About Me <span aria-label="waving hand" role="img">👋</span>
            </h1>
          </div>

          {/* Tagline */}
          <p data-aos="fade-up" data-aos-delay="200" className="font-medium text-md md:text-md text-gray-700 mt-6">
            I'm <strong>AdeyemiCODE</strong>, a Frontend and MERN Stack Developer with 3+ years of experience building elegant, responsive, and user-focused web applications. I specialize in modern technologies like HTML, CSS, TailwindCSS, JavaScript, ReactJS, NodeJS, and MongoDB.
          </p>

          <p data-aos="fade-up" data-aos-delay="300" className="mt-4 text-gray-700">
            I’ve worked with companies like <strong>Sysbeans</strong> and <strong>Fyndah</strong> and currently teach at Al-Ameen ITHUB, mentoring aspiring developers in frontend technologies. I take pride in solving complex problems with clean, scalable code and delivering interfaces that truly connect with users.
          </p>

          <p data-aos="fade-up" data-aos-delay="400" className="mt-4 text-gray-700">
            I'm a highly motivated, friendly, and detail-oriented individual eager to contribute meaningfully to team goals and continue evolving as a developer.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap mt-6" data-aos="fade-up" data-aos-delay="500">
            <Link to="/portfolio" className="border-b-2 border-r-2 border-black text-black hover:bg-gray-900 py-2 px-3 md:px-8 text-lg font-semibold transition duration-300">
              View Portfolio
            </Link>
            <Link to="/contact" className="bg-black text-white hover:bg-gray-900 hover:text-white py-2 px-3 md:px-8 text-lg font-semibold transition duration-300">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-left" className="w-full md:w-1/2 relative flex items-center justify-center -z-10">
          <div className="absolute max-w-xl h-2xl md:w-[100%] md:h-96 bg-zinc-100 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <img src="/img/img2.jpg" alt="AdeyemiCODE" className="w-full h-auto max-w-md border-2 border-black mx-auto rounded-tr-[30%] rounded-xl shadow-lg relative z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
