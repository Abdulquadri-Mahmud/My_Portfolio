import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const PortfolioHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="rounded-lg mb-8 relative z-10 bg-white text-gray-900 md:min-h-screen md:px-24 md:py-0 py-20 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-left max-w-2xl" data-aos="fade-right">
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className='md:text-5xl text-4xl font-bold text-black'>
              Hello <span aria-label="waving hand" role="img">👋</span>, I'm AdeyemiCODE <br />
              <span className="block mt-2">A Frontend & MERN Stack Developer</span>
            </h1>
          </div>

          {/* Portfolio Summary */}
          <p data-aos="fade-up" data-aos-delay="200" className="font-medium text-md md:text-xl text-gray-700 mt-6 mb-10">
            I specialize in building elegant, high-performance web applications using HTML, CSS, TailwindCSS, JavaScript, ReactJS, NodeJS, and MongoDB. With over 3 years of hands-on experience, I transform ideas into scalable, user-focused digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="300">
            {/* <Link to="/portfolio" className="border-b-2 border-r-2 border-black text-black hover:bg-gray-900 py-2 px-3 md:px-8 text-lg font-semibold transition duration-300">
              Explore Projects
            </Link> */}
            <Link to="/contact" className="bg-black text-white hover:bg-gray-900 py-2 px-3 md:px-8 text-lg font-semibold transition duration-300">
              Let's Connect
            </Link>
          </div>
        </div>

        {/* Developer Image */}
        <div data-aos="fade-left" className="w-full md:w-1/2 relative flex items-center justify-center">
          {/* Decorative Background Circle */}
          <div className="absolute max-w-xl h-2xl md:w-[100%] md:h-96 bg-zinc-100 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Profile Image */}
          <img src="/img/port.png" alt="AdeyemiCODE Developer Portrait" className="w-full h-auto max-w-md mx-auto rounded-xl shadow-lg relative z-10" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
