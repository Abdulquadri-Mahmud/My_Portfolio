import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: 'Lightcietech Limited',
      description:
        'Lightcitech Limited is a specialized website designed for an earthing and lighting company. It showcases innovative solutions in electrical grounding and advanced lighting systems, emphasizing safety, efficiency, and sustainability. The platform provides detailed insights into their services, projects, and expertise, ensuring clients can explore and connect with a trusted industry leader.',
      image: '/lightcitechlimited.png',
      demoLink: 'https://www.lightcietechlimited.org/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Litghtcietech-website.git',
    },
    {
      title: 'ADEXIFY (E-Commerce)',
      description:
        'Adexify is a personal e-commerce project designed to empower upcoming online vendors. It provides an intuitive platform to help vendors grow their businesses faster and more efficiently. With Adexify, managing and showcasing products becomes seamless, enabling vendors to reach more customers and scale their operations effortlessly.',
      image: '/p.png',
      demoLink: 'https://adexify-five.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Adexify.git',
    },
    {
      title: 'MAGKKFOOTBALLTALK',
      description:
        'This website was built to transform your sports experience. Stay updated with the latest sports news, copy winning bestslips codes effortlessly, and shop premium gaming gadgets—all in one platform. Whether you\'re a fan or a gamer, it brings sports to your fingertips like never before.',
      image: '/magkk.png',
      demoLink: 'hhttps://www.footballbymagkk.com/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/magkfootball.git',
    },
    {
      title: 'Greeno',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/greeno.png',
      demoLink: 'https://greeno.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Greeno.git',
    },
    {
      title: "MJ's Food",
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/mjsfood.png',
      demoLink: 'https://mj-s-food.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/MJ-s_Food.git',
    },
    {
      title: 'Carint',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p2.png',
      demoLink: 'https://carint-shipping-website.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Carint.git',
    },
    {
      title: 'MediPlus',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p3.png',
      demoLink: 'https://mediplus-eight.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Mediplus.git',
    },
    {
      title: 'NIKI CLOTHING',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p4.png',
      demoLink: 'https://niki-clothing.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Niki-Clothing.git',
    },
    {
      title: 'Ade-Space',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p6.png',
      demoLink: 'https://ade-space.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Ade-Space.git',
    },
    {
      title: 'Bliss',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p7.png',
      demoLink: 'https://bliss-websites.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Bliss-websites.git',
    },
    {
      title: 'MJ CakeZone',
      description:
        'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p5.png',
      demoLink: 'https://mj-cakazone.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/MJ-Cakazone.git',
    },
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the projects to display on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Pagination handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Generate page numbers with ellipsis if needed
  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) pageNumbers.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <section className="bg-white text-black my-12 md:p-6 p-4 rounded-xl overflow-hidden" id="portfolio">
      <div className="container mx-auto max-w-7xl text-center lg:text-left">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold mb-16"
          style={{ color: '#111' }}
        >
          My Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="bg-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 text-left">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 text-left flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between mt-auto">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition duration-300"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex items-center space-x-2 flex-wrap">
            <li>
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-2 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 text-white hover:bg-gray-900 transition duration-300'
                }`}
              >
                Previous
              </button>
            </li>

            {generatePageNumbers().map((number, idx) =>
              number === '...' ? (
                <li key={idx} className="text-gray-500 px-2 select-none">
                  ...
                </li>
              ) : (
                <li key={idx}>
                  <button
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === number
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-300'
                    }`}
                  >
                    {number}
                  </button>
                </li>
              )
            )}

            <li>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-2 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 text-white hover:bg-gray-900 transition duration-300'
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
