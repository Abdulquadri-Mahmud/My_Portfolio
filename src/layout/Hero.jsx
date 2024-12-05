import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 opacity-30 z-0" data-aos="fade-in" data-aos-delay="200" style={{ transform: 'translateZ(0)', backgroundAttachment: 'fixed' }}></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        {/* Hero Heading with animation */}
        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Hello, I'm AdeyemiCODE</h1>

        {/* Tagline with animation */}
        <p data-aos="fade-up" data-aos-delay="200" className="font-medium text-xl max-w-3xl mx-auto md:text-2xl text-gray-300 mb-8">
          A Proficient Frontend Developer | ReactJS & TailwindCSS Expert | Building Beautiful & Functional Websites
        </p>

        {/* CTA buttons with hover effects */}
        <div className="flex justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
          <a href="#portfolio" className="inline-block bg-white text-black hover:text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-110"> View Portfolio</a>
          <a href="#contact" className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:scale-110"> Contact Me</a>
        </div>
      </div>

      {/* Moving Circles */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-black opacity-30 animate-move-one"></div>
        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 animate-move-two"></div>
      </div>

      {/* Floating Object (Bouncing Tag) Behind the Text */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0" data-aos="fade-left" data-aos-delay="600">
        <div className="w-40 h-40 bg-purple-600 rounded-full shadow-lg animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
