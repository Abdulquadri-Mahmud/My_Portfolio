import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-600 to-red-600 opacity-30 z-0" data-aos="fade-in" data-aos-delay="200" style={{ transform: 'translateZ(0)', backgroundAttachment: 'fixed' }}></div>

      <div className="container mx-auto text-center md:px-6 px-3 relative z-10">
        {/* Hero Heading with animation */}
        
        <div className="">
          <TypeWriter/>
        </div>

        {/* Tagline with animation */}
        <p data-aos="fade-up" data-aos-delay="200" className="font-medium text-xl max-w-3xl mx-auto md:text-2xl text-gray-300 mb-8">
          A Proficient Frontend / Mern Stack Developer | HTML, CSS, TailwindCSS, Javascript, ReactJS NodeJS & MongoDB Expert | Building Beautiful & Functional Websites
        </p>

        {/* CTA buttons with hover effects */}
        <div className="flex justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
          <Link to="/portfolio" className="inline-block bg-white text-black hover:text-white py-3 md:px-8 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-purple-700 transform hover:scale-110"> View Portfolio</Link>
          <Link to="/contact" className="inline-block bg-transparent border-2 border-white text-white py-3 md:px-8 px-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:scale-110"> Contact Me</Link>
        </div>
      </div>

      {/* Moving Circles */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-black opacity-30 animate-move-one"></div>
        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 animate-move-two"></div>
      </div>

      {/* Floating Object (Bouncing Tag) Behind the Text */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0" data-aos="fade-left" data-aos-delay="600">
        <div className="w-40 h-40 bg-purple-600 rounded-full shadow-2xl animate-bounce-slow"></div>
      </div>

      <div className="absolute top-0 left-2/4 transform -translate-x-1/2 -translate-y-1/2 z-0" data-aos="fade-left" data-aos-delay="600">
        <div className="w-40 h-40 bg-purple-600 opacity-10 rounded-full shadow-2xl animate-bounce-slow"></div>
      </div>

      <div className="absolute top-0 right-3/4 transform -translate-x-1/2 -translate-y-1/2 z-0" data-aos="fade-left" data-aos-delay="600">
        <div className="w-40 h-40 bg-purple-600 opacity-10 rounded-full shadow-2xl animate-move-one"></div>
      </div>

    </section>
  );
};

export default Hero;
