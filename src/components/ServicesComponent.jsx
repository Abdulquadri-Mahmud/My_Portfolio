import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Slider from 'react-slick'; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const ServicesComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations with a duration of 1200ms
  }, []);

  const services = [
    {
      title: 'MERN Stack Development',
      description:
        'Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Delivering scalable, responsive, and efficient solutions tailored to your business needs.',
      icon: 'fas fa-code-branch',  // Font Awesome icon representing full-stack/backend work
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
    <section className="bg-white text-black mt-12 md:p-5 py-5 rounded-lg" id="services">
      <div className="container mx-auto text-center lg:text-left">
        {/* Section Title */}
        <h2 data-aos="fade-up" className="text-3xl md:text-5xl text-center font-extrabold leading-tight mb-4  text-black">
          My Services
        </h2>

        {/* Services Overview */}
        <p data-aos="fade-up" className="md:text-xl text-center px-3 text-sm text-black md:mb-12 mb-6 max-w-2xl mx-auto">
          As a frontend developer, I offer a range of services to help you build a beautiful, functional, and user-friendly web presence. Let me bring your ideas to life with the latest technologies and design principles.
        </p>

        {/* Carousel for Services */}
        <div data-aos="fade-up">
          <Slider {...settings}>
            {services.map((service, index) => (
                <div className="p-2" key={index}>
                    <div className="relative bg-gray-900 rounded-lg shadow-lg py-6 px-4 transition-transform transform group">
                        <div className="flex justify-center mb-4">
                            <i className={`${service.icon} text-4xl text-purple-600`} />  {/* Icon with Tailwind classes */}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">{service.title}</h3>
                        <p className="text-white mb-6">{service.description}</p>
                        <Link to="/contact" className="inline-block border-b border-r border-white text-white py-3 px-8 text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-110">
                            Get in Touch
                        </Link>
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
