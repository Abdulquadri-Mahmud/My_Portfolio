import React, { useState } from 'react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL
    const mailtoLink = `mailto:abdulquadrimahmud06@gmail.com?subject=${encodeURIComponent(
      `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="mt-10 bg-gray-800 text-black py-12 md:px-6 px-3 rounded-lg text-white shadow-lg md:max-w-4xl mx-auto"
    >
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Get in Touch
        </h2>
        <p className="text-sm md:text-xl mb-8">
          Have a question or want to work together? Let’s create something
          amazing!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className=" bg-white w-[200px] py-3 rounded-md text-lg font-semibold hover:bg-black hover:text-white transition duration-300"
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
