import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 700 }); // Initialize AOS with animation duration
  }, []);

  return (
    <footer className="bg-black text-white py-20 pb-4 px-6" id="footer">
      <div className="container mx-auto text-center">
        {/* Footer Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600 mb-3"
        >
          Let's Build Something Amazing Together
        </h2>

        {/* Contact & Social Media */}
        <div className="flex justify-center gap-8 my-8">
          {/* Contact Info */}
          <div data-aos="fade-up" className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Contact Info</h3>
            <p className="text-gray-400">Email: <a href="mailto:your-email@example.com" className="text-purple-600 hover:text-purple-400">your-email@example.com</a></p>
            <p className="text-gray-400">Phone: <span className="text-purple-600">+123 456 7890</span></p>
          </div>

          {/* Social Media Links */}
          <div data-aos="fade-up" className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Connect With Me</h3>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/your-profile" className="text-gray-400 hover:text-purple-600">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="https://github.com/your-profile" className="text-gray-400 hover:text-purple-600">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://twitter.com/your-profile" className="text-gray-400 hover:text-purple-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-gray-500 text-sm">
          <p data-aos="">
            &copy; {new Date().getFullYear()} AdeyemiCODE. All Rights Reserved.
          </p>
          <p data-aos="">
            Crafted with ❤️ using ReactJS & TailwindCSS.
          </p>
          <p data-aos="">
            Thank you for visiting my portfolio site. — AdeyemiCODE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
