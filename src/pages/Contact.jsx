import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="container mx-auto text-center lg:text-left">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600"
        >
          Get In Touch
        </h2>

        <p
          data-aos="fade-up"
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out if you have any questions, ideas, or projects in mind. Let’s create something amazing together!
        </p>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <form
              className="bg-opacity-50 backdrop-blur-sm rounded-lg p-8 shadow-lg"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg text-gray-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg text-gray-200 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left" className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 text-lg">youremail@example.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 text-lg">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourprofile"
                  className="text-gray-300 text-3xl hover:text-purple-600 transition duration-300"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  className="text-gray-300 text-3xl hover:text-purple-600 transition duration-300"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-gray-300 text-3xl hover:text-purple-600 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Map */}
        <div
          className="mt-16"
          data-aos="fade-up"
        >
          <iframe
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373631531545!3d-37.8162797797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a63789fd23b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635761807135!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
