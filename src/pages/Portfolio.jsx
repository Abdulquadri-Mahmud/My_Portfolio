import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  // Sample projects data
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website built with ReactJS and TailwindCSS to showcase my skills and projects.',
      image: '/path-to-your-image1.jpg',
      demoLink: 'https://your-portfolio-link.com',
      repoLink: 'https://github.com/your-username/portfolio',
    },
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce website with shopping cart, product pages, and payment integration.',
      image: '/path-to-your-image2.jpg',
      demoLink: 'https://your-ecommerce-demo.com',
      repoLink: 'https://github.com/your-username/e-commerce-website',
    },
    {
      title: 'Blog Platform',
      description: 'A blog platform where users can create and share articles. Built using ReactJS, NodeJS, and MongoDB.',
      image: '/path-to-your-image3.jpg',
      demoLink: 'https://your-blog-platform-demo.com',
      repoLink: 'https://github.com/your-username/blog-platform',
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
    <section className="bg-black text-white py-20 px-6" id="portfolio">
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
            <div
              key={index}
              data-aos="zoom-in-up" // Adding unique animation to each portfolio item
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform transform group-hover:scale-110"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-6">{project.description}</p>

              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-500 transition duration-300"
                >
                  View Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-500 transition duration-300"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <ul className="flex items-center space-x-4">
            {/* Previous Button */}
            <li>
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === number
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-white hover:bg-gray-700 transition duration-300'
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
                className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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

export default Portfolio;
