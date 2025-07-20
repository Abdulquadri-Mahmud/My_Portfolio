import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="rounded-lg relative z-10 bg-white text-gray-900 md:min-h-screen md:px-24 md:py-0 py-20 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-left max-w-2xl" data-aos="fade-right">
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="md:text-5xl text-4xl font-bold text-black">
              Our Services <br />
              <span className="text-gray-700">Tailored for Your Digital Success</span>
            </h1>
          </div>

          {/* Service Tagline */}
          <p data-aos="fade-up" data-aos-delay="200" className="font-medium text-md md:text-xl text-gray-700 mt-6 mb-10">
            We offer cutting-edge web solutions that help businesses thrive online. From responsive frontend development to robust backend systems, our services are designed to meet your unique needs and scale with your growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="300">
            <Link to="/services" className="border-b-2 border-r-2 border-black text-black hover:bg-gray-900 py-2 px-3 md:px-8 text-lg font-semibold transition duration-300">
              Explore Services
            </Link>
            <Link to="/contact" className="bg-black text-white hover:bg-gray-900 hover:text-white py-2 px-3 md:px-8 text-lg font-semibold transition duration-300">
              Let's Work Together
            </Link>
          </div>
        </div>

        {/* Image */}
        {/* <div data-aos="fade-left" className="w-full md:w-1/2 relative flex items-center justify-center -z-10">
          <div className="absolute max-w-xl h-2xl md:w-[100%] md:h-96 bg-zinc-100 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <img src="/img/services-illustration.png" alt="Web Services" className="w-full h-auto max-w-md border-2 border-black mx-auto rounded-tr-[30%] rounded-xl shadow-lg relative z-10" />
        </div> */}
      </div>
    </section>
  );
};

export default ServicesHero;
