import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Slider from 'react-slick'; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesComponent = () => {
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

  // Settings for the carousel
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };

  return (
    <section className="bg-black text-white pt-20 px-6" id="services">
      <div className="container mx-auto text-center lg:text-left">
        {/* Section Title */}
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl text-center font-extrabold leading-tight mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
          My Services
        </h2>

        {/* Services Overview */}
        <p data-aos="fade-up" className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          As a frontend developer, I offer a range of services to help you build a beautiful, functional, and user-friendly web presence. Let me bring your ideas to life with the latest technologies and design principles.
        </p>

        {/* Carousel for Services */}
        <div data-aos="fade-up">
          <Slider {...settings}>
            {services.map((service, index) => (
                <div className="p-2" key={index}>
                    <div className="relative bg-opacity-50 bg-slate-800 backdrop-blur-sm rounded-lg shadow-lg py-6 px-4 transition-transform transform group">
                        <div className="flex justify-center mb-4">
                            <i className={`${service.icon} text-4xl text-purple-600`} />  {/* Icon with Tailwind classes */}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">{service.title}</h3>
                        <p className="text-gray-300 mb-6">{service.description}</p>
                        <a href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-110">
                            Get in Touch
                        </a>
                    </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
