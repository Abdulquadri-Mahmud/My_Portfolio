import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="contact" className="bg-white overflow-hidden text-white py-20 md:px-6 p-3">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 data-aos="fade-up" className="text-4xl text-center md:text-5xl font-extrabold leading-tight mb-10 text-black"> Get In Touch</h2>
        <p data-aos="fade-up" className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"> Feel free to reach out if you have any questions, ideas, or projects in mind. Let’s create something amazing together!</p>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <form
              className="bg-opacity-50 backdrop-blur-sm bg-gray-900 rounded-lg md:p-8 p-4 shadow-lg"
              // style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg text-start text-gray-400 mb-2">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter your name" required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg text-start text-gray-400 mb-2"> Email Address
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter your email" required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg text-start text-gray-400 mb-2"> Your Message
                </label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter your message" required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div data-aos="fade-left">
            <iframe
              className="w-full h-[350px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.867516172238!2d3.5264799318098943!3d6.588344446808611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee441f9ce615%3A0x6d7b8e4c69bd797e!2sAkin%20Ogunlewe%20Rd%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1733512583460!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>"

            {/* Social Media Icons (placed below the map) */}
            <div className="mt-8">
              <div className="relative">
                <h3 className="text-4xl text-center font-bold mb-2 text-transparent bg-clip-text bg-black"> Follow Me
                </h3>
                <div className="absolute left-[50%] right-[50%] -translate-x-[45%] w-20 h-2 rounded-xl bg-gradient-to-r from-purple-600 to-red-600 hover:text-purple-600 transition duration-300 "></div>
              </div>
              <div className="flex justify-center space-x-6 mt-7">
                <Link to="https://wa.me/1234567890" className="text-5xl text-black transition duration-300" aria-label="WhatsApp"
                > <i className="fab fa-whatsapp"></i>
                </Link>
                <Link to="https://facebook.com/yourprofile" className="translate-y-6 text-5xl text-black transition duration-300" aria-label="Facebook"
                > <i className="fab fa-facebook"></i>
                </Link>
                <Link to="https://instagram.com/yourprofile" className="translate-y-6 text-5xl text-black transition duration-300" aria-label="Instagram"
                > <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://twitter.com/yourprofile" className="translate-y-6 text-5xl text-black transition duration-300" aria-label="Twitter"
                > <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://tiktok.com/@yourprofile" className="text-5xl text-black transition duration-300" aria-label="TikTok"
                > <i className="fab fa-tiktok"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
