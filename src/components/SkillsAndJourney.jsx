import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsAndJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const skillsData = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 65 },
    { name: "TailwindCSS", level: 80 },
    { name: "ReactJS", level: 75 },
    { name: "NodeJS", level: 50 },
    { name: "MongoDB", level: 60 },
  ];

  const journeyData = [
    {
      year: "2021",
      title: "Started Learning Web Development",
      description:
        "Began my journey with HTML, CSS, and JavaScript to build static websites.",
    },
    {
      year: "2022",
      title: "Dove into MERN Stack",
      description:
        "Started documenting my journey learning ReactJS, TailwindCSS, NodeJS, and MongoDB to build dynamic web applications.",
    },
    {
      year: "2022",
      title: "Mastered MERN Stack Skills",
      description:
        "Further honed skills in ReactJS, TailwindCSS, NodeJS, and MongoDB to develop complex web apps.",
    },
    {
      year: "2024",
      title: "Full-Stack Developer",
      description:
        "Expanded expertise to integrate frontend and backend technologies for seamless web solutions.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 py-12 bg-white p-5">
      {/* Skills Section */}
      <div data-aos="fade-up" className="md:w-1/2 space-y-8">
        <h3 className="text-3xl font-bold mb-6 text-black">Skills</h3>

        {skillsData.map(({ name, level }, i) => (
          <div
            key={name}
            data-aos="fade-right"
            data-aos-delay={i * 100}
            className="mb-4"
          >
            <div className="flex justify-between mb-1 font-medium text-black">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${level}%`,
                  backgroundColor: "#111",
                  transition: "width 1.2s ease-in-out",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Journey Section */}
      <div data-aos="fade-up" className="md:w-1/2 space-y-10">
        <h3 className="text-3xl font-bold mb-6 text-black">My Journey</h3>

        {journeyData.map(({ year, title, description }, i) => (
          <div
            key={year}
            data-aos="fade-left"
            data-aos-delay={i * 150}
            className="flex items-start space-x-6"
          >
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white bg-gray-900"
            >
              {year}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-black">{title}</h4>
              <p className="text-gray-700 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndJourney;
