import React from 'react';

const ContactComponent = () => {
  return (
    <section
      id="contact"
      className="my-20 bg-gradient-to-r from-purple-600 to-red-600 text-white py-12 px-6 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Have a question or want to work together? Let’s create something
          amazing!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
