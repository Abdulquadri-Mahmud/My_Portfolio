import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 700 }); // Initialize AOS with animation duration
  }, []);

  return (
    <footer className="bg-white text-black py-20 pb-4 px-6" id="footer">
      <div className="container mx-auto text-center">
        {/* Footer Title */}
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-3">
          Let's Build Something Amazing Together
        </h2>

        {/* Contact & Social Media */}
        <div className="flex justify-center md:gap-8  gap-4 my-8">
          {/* Contact Info */}
          <div data-aos="fade-up" className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p className="text-black">Email: <Link to="mailto:your-email@example.com" className="text-gray-700 hover:text-gray-700">your-email@example.com</Link></p>
            <p className="text-black">Phone: <Link to={'tel:+2347047594667'} className="text-gray-700">+234 704 759 4667</Link></p>
          </div>

          {/* Social Media Links */}
          <div data-aos="fade-up" className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/your-profile" className="text-black hover:text-purple-600">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="https://github.com/your-profile" className="text-black hover:text-purple-600">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://twitter.com/your-profile" className="text-black hover:text-purple-600">
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
