import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const PortfolioComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  // Sample projects data
  const projects = [
    {
      title: 'Lightcietech Limited',
      description: `Lightcitech Limited is a specialized website designed for an earthing and lighting company. It showcases innovative solutions in electrical grounding and advanced lighting systems, emphasizing safety, efficiency, and sustainability. The platform provides detailed insights into their services, projects, and expertise, ensuring clients can explore and connect with a trusted industry leader.`,
      image: '/lightcitechlimited.png',
      demoLink: 'https://www.lightcietechlimited.org/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Litghtcietech-website.git',
    },
    {
      title: 'ADEXIFY (E-Commerce)',
      description: `Adexify is a personal e-commerce project designed to empower upcoming online vendors. It provides an intuitive platform to help vendors grow their businesses faster and more efficiently. With Adexify, managing and showcasing products becomes seamless, enabling vendors to reach more customers and scale their operations effortlessly.`,
      image: '/p.png',
      demoLink: 'https://adexify-online-shopping-site.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Adexify.git',
    },
    {
      title: 'MAGKKFOOTBALLTALK',
      description: `This website was built to transform your sports experience. Stay updated with the latest sports news, copy winning bestslips codes effortlessly, and shop premium gaming gadgets—all in one platform. Whether you're a fan or a gamer, it brings sports to your fingertips like never before.`,
      image: '/magkk.png',
      demoLink: 'https://magkfootball.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/magkfootball.git',
    },
    {
      title: 'Greeno',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/greeno.png',
      demoLink: 'https://greeno.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Greeno.git',
    },
    {
      title: 'MJ\'s Food',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/mjsfood.png',
      demoLink: 'https://mj-s-food.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/MJ-s_Food.git',
    },
    
    {
      title: 'Carint',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p2.png',
      demoLink: 'https://carint-shipping-website.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Carint.git',
    },
    {
      title: 'MediPlus',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p3.png',
      demoLink: 'https://mediplus-eight.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Mediplus.git',
    },
    {
      title: 'NIKI CLOTHING',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p4.png',
      demoLink: 'https://niki-clothing.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Niki-Clothing.git',
    },
    
    {
      title: 'Ade-Space',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p6.png',
      demoLink: 'https://ade-space.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Ade-Space.git',
    },
    {
      title: 'Bliss',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p7.png',
      demoLink: 'https://bliss-websites.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/Bliss-websites.git',
    },
    {
      title: 'MJ CakeZone',
      description: 'This project is a personal initiative designed to enhance my skills in frontend development. Built with ReactJS and TailwindCSS, it showcases modern web development practices, including responsive design, component-based architecture, and optimized performance. The project serves as a hands-on platform to deepen my expertise and implement advanced features like animations, state management, and reusable components.',
      image: '/p5.png',
      demoLink: 'https://mj-cakazone.vercel.app/',
      repoLink: 'https://github.com/Abdulquadri-Mahmud/MJ-Cakazone.git',
    },
    // Add more projects here
  ];

  const projectsPerPage = 3; // Number of projects per page
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the projects to display on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous/next page
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Generate an array for pagination (including ellipsis)
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
    <section className="bg-black text-white py-0 md:px-6 px-3 rounded-lg" id="portfolio">
      <div className="container mx-auto text-center lg:text-left">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600"
        >
          My Portfolio
        </h2>

        {/* Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {currentProjects.map((project, index) => (
            <div key={index} data-aos="zoom-in-up" className='rounded-md bg-gray-900 p-2'>
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={project.image} alt={project.title}
                  className="max-w-full sm:h-64 h-[250px] rounded-md transition-transform transform group-hover:scale-110"
                />
              </div>
              <div className="px-3 py-3">
                {/* Project Title */}
                <h3 className="text-2xl text-start font-semibold text-gray-100 mb-4">{project.title}</h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-6 text-start">{project.description}</p>

                {/* Links */}
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-red-600 transition duration-300">
                    View Demo
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-red-600 to-purple-600 transition duration-300">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <ul className="flex items-center flex-wrap space-x-2">
            {/* Previous Button */}
            <li>
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gradient-to-r from-purple-600 to-red-600 transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {generatePageNumbers().map((number, index) =>
              number === '...' ? (
                <li key={index} className="text-gray-500">...</li>
              ) : (
                <li key={index}>
                  <button
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === number
                        ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white'
                        : 'bg-gray-900 text-white hover:bg-gradient-to-r from-purple-600 to-red-600 transition duration-300'
                    }`}
                  >
                    {number}
                  </button>
                </li>
              )
            )}

            {/* Next Button */}
            <li>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gradient-to-r from-purple-600 to-red-600 transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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
