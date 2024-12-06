import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations with a duration of 1200ms
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6" id="about">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 data-aos="fade-up" className="text-4xl md:text-center text-start md:text-5xl font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
          About Me
        </h2>

        {/* About Content */}
        <div className="flex flex-col-reverse md:flex-row justify-evenly gap-12 mb-16">
          {/* Image Section */}
          <div data-aos="fade-right" className="flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="relative">
              <img src="/my_image.jpg" alt="Profile" className="rounded-full w-[350px] h-[400px] object-cover border-4 border-gradient-to-r from-purple-600 to-red-600 shadow-xl transition-transform transform hover:scale-105"/>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 opacity-40 rounded-full"></div>
            </div>
          </div>

          {/* Text Section */}
          <div data-aos="fade-left" className="flex text-sm flex-col justify-start md:max-w-3xl">
            <p className="md:text-xl text-start text-gray-300 mb-6">
              Hello! I'm AdeyemiCODE, a frontend and Mern Stack developer with a passion for
              creating beautiful and dynamic user interfaces. I specialize in, HTML, CSS JAVASCRIPT
              TailwindCSS, ReactJS,MondoDB and NodeJS , and building interactive web applications.
            </p>

            <p className="md:text-xl text-start text-gray-300 mb-6">
              With over 3 years of experience, I’ve worked on a variety of
              projects, continuously learning and staying up-to-date with the
              latest trends and technologies in the industry. My goal is to build
              websites that are not only functional but also user-friendly and
              visually captivating.
            </p>

            <p className="md:text-xl text-start text-gray-300 mb-6">
              Dynamic and innovative Front-end Website Instructor at Al-Ameen ITHUB, adept in HTML, CSS and JavaScript. Specialized in elevating web development skills through engaging lectures and hands-on workshops, significantly enhancing student proficiency in web technologies. Known for exceptional mentor-ship and a keen ability to optimize web content, blending technical prowess with strong instructional acumen.
            </p>
            <p className="md:text-xl text-start text-gray-300 mb-6">
              Motivated student seeking career in web development. Hardworking and friendly person with strong organization and time management skills. Eager to support and learn from development teams to deliver well-designed mobile and web applications
            </p>

            <p className="md:text-xl text-start text-gray-300 mb-6">Self-motivated Web Developer with comprehensive experience managing multiple clients. Passionate and hardworking to deliver on deadlines. Strong HTML, CSS, JAVASCRIPTP, REACT.JS, NODEJS, EXPRESS.JS and MONGODB.</p>

            <a
              href="/contact"
              data-aos="fade-up"
              className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Skills & Journey Section Side by Side */}
        <div className="flex flex-col md:flex-row justify-between gap-12 py-16">
          {/* Skills Section */}
          <div data-aos="fade-up" className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
            <h3 className="text-3xl font-bold text-purple-600 mb-4">Skills</h3>

            {/* Skill 1 */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">HTML</span>
                <span className="font-semibold text-gray-300">95%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-red-600 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            {/* Skill 2 */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">CSS</span>
                <span className="font-semibold text-gray-300">85%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-red-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">JavaScript</span>
                <span className="font-semibold text-gray-300">65%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-red-600 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">ReactJS</span>
                <span className="font-semibold text-gray-300">75%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-red-600 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">TailwindCSS</span>
                <span className="font-semibold text-gray-300">80%</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-red-600 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div data-aos="fade-up" className="md:w-1/2">
            <h3 className="text-3xl font-bold text-purple-600 mb-6">My Journey</h3>
            <div className="space-y-8">
              {/* Journey 1 */}
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-red-600 text-white flex items-center justify-center">
                    2021
                  </div>
                </div>
                <div className="md:ml-8">
                  <h4 className="md:text-xl font-bold text-gray-200">Started Learning Web Development</h4>
                  <p className="text-gray-300">
                    Began my journey with HTML, CSS, and JavaScript to build static websites.
                  </p>
                </div>
              </div>

              {/* Journey 2 */}
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-red-600 text-white flex items-center justify-center">
                    2022
                  </div>
                </div>
                <div className="md:ml-8">
                  <h4 className="md:text-xl font-bold text-gray-200">Mastered ReactJS</h4>
                  <p className="text-gray-300">
                    Took my skills further and mastered ReactJS to build dynamic web applications.
                  </p>
                </div>
              </div>

              {/* Journey 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-red-600 text-white flex items-center justify-center">
                    2024
                  </div>
                </div>
                <div className="md:ml-8">
                  <h4 className="md:text-xl font-bold text-gray-200">Full-Stack Developer</h4>
                  <p className="text-gray-300">
                    Expanded my knowledge to become a full-stack developer, integrating frontend and backend technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
