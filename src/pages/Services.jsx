import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import ServicesHero from '../layout/ServicesHero';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations with a duration of 1200ms
  }, []);

  const services = [
    {
      title: 'Frontend Development',
      description:
        'Creating responsive, dynamic, and interactive websites using HTML, CSS, JavaScript, ReactJS, and TailwindCSS.',
      icon: 'fas fa-laptop-code',  // Font Awesome icon for frontend
    },
    {
      title: 'SEO Optimization',
      description:
        'Improving the visibility of your website on search engines through technical SEO, keyword research, and content optimization.',
      icon: 'fas fa-search',  // Font Awesome icon for SEO
    },
    {
      title: 'Custom Web Applications',
      description:
        'Building custom web applications tailored to your business needs using modern technologies like ReactJS, NodeJS, and Express.',
      icon: 'fas fa-cogs',  // Font Awesome icon for custom apps
    },
    {
      title: 'Web Performance Optimization',
      description:
        'Enhancing the performance of websites through code optimization, image compression, and reducing load times.',
      icon: 'fas fa-tachometer-alt',  // Font Awesome icon for performance
    },
    
    
    {
      title: 'API Integration',
      description:
        'Integrating third-party APIs into your websites and applications to enhance functionality and user experience.',
      icon: 'fas fa-plug',  // Font Awesome icon for API integration
    },
    {
      title: 'Cross-Browser Compatibility',
      description:
        'Ensuring your websites function seamlessly across different browsers and devices, providing consistent experiences for all users.',
      icon: 'fas fa-browser',  // Font Awesome icon for cross-browser compatibility
    },
  ];

  return (
    <div className='bg-black md:p-5 p-2 overflow-hidden'>
      <ServicesHero/>
      <section className="bg-white mt-8 rounded-lg text-white py-20 px-6" id="services">
        <div className="container mx-auto text-center lg:text-left">
          {/* Section Title */}
          <h2 data-aos="fade-up" className="text-3xl md:text-5xl text-center font-extrabold leading-tight mb-4  text-black">
            My Services
          </h2>

          {/* Services Overview */}
          <p data-aos="fade-up" className="md:text-xl text-center px-3 text-sm text-black md:mb-12 mb-6 max-w-2xl mx-auto">
            As a frontend developer, I offer a range of services to help you build a beautiful, functional, and user-friendly web presence. Let me bring your ideas to life with the latest technologies and design principles.
          </p>
          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} data-aos="fade-up" className="relative rounded-lg shadow-lg px-6 py-8 transition-transform transform hover:scale-105 group bg-gray-900">
                <div className="flex justify-center mb-4">
                  <i className={`${service.icon} text-4xl text-purple-600`} />  {/* Icon with Tailwind classes */}
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link to="/contact" className="inline-block border-b border-r border-white text-white py-3 px-8 text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-110">
                    Get in Touch
                </Link>
              </div>
            ))}
          </div>

          {/* Contact CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              Ready to take your website to the next level?
            </h3>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether you need a brand new website, an upgrade, or SEO services, I’m here to help. Let’s work together to create something amazing!
            </p>
            <Link to="/contact"className="inline-block border-l border-r border-black text-black py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-110">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
