import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const progressBarColor = 'bg-purple-600';

  return (
    <section className="bg-white text-gray-800 py-20 md:px-10 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-center text-gray-900"
        >
          About Me
        </h2>

        {/* About Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
          {/* Image Section */}
          <div data-aos="fade-right" className="flex justify-center md:w-1/2">
            <img
              src="/my_image.jpg"
              alt="Profile"
              className="rounded-xl w-[350px] h-[400px] object-cover border-4 border-gray-200 shadow-md hover:scale-105 transition-transform"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-left" className="md:w-1/2 text-lg space-y-6">
            <p>
              Hello! I'm <strong>AdeyemiCODE</strong>, a Frontend and MERN Stack Developer passionate about crafting dynamic user interfaces using technologies like HTML, CSS, JavaScript, TailwindCSS, ReactJS, MongoDB, and NodeJS.
            </p>
            <p>
              With over 3 years of hands-on experience, I have built diverse web applications while constantly staying updated with modern frameworks and development trends.
            </p>
            <p>
              As a Website Instructor at Al-Ameen ITHUB, I specialize in empowering students with industry-relevant skills through immersive training and workshops.
            </p>
            <p>
              I am a motivated individual with a strong sense of responsibility and organization, aiming to contribute to innovative teams and build impactful digital products.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-4 bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Skills & Journey Section */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Skills Section */}
          <div data-aos="fade-up" className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Skills</h3>
            {[
              { name: 'HTML', level: 95 },
              { name: 'CSS', level: 85 },
              { name: 'JavaScript', level: 65 },
              { name: 'TailwindCSS', level: 80 },
              { name: 'ReactJS', level: 75 },
              { name: 'NodeJS', level: 50 },
              { name: 'MongoDB', level: 60 }
            ].map((skill, index) => (
              <div className="mb-5" key={index}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`${progressBarColor} h-2 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey Section */}
          <div data-aos="fade-up" className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-10">
              {[
                {
                  year: '2021',
                  title: 'Started Learning Web Development',
                  desc: 'Began my journey learning HTML, CSS, and JavaScript to build static websites.'
                },
                {
                  year: '2022',
                  title: 'Diving into MERN Stack',
                  desc: 'Started learning ReactJS, TailwindCSS, Node.js, and MongoDB to build full web applications.'
                },
                {
                  year: '2023',
                  title: 'Mastered MERN Stack Skills',
                  desc: 'Gained deep expertise in building end-to-end dynamic and responsive applications.'
                },
                {
                  year: '2024',
                  title: 'Full-Stack Developer',
                  desc: 'Combined frontend and backend knowledge to become a fully proficient Full-Stack Developer.'
                }
              ].map((item, index) => (
                <div className="flex items-start gap-6" key={index}>
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white text-lg font-semibold flex items-center justify-center">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
