import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="py-16 bg-gradient-to-t from-black to-main4 "
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-sm lg:text-lg mb-8 text-white">
            Reach out for inquiries, bookings, or more information. We're here
            to help you plan your next adventure!
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm bg-main3 text-white rounded-lg hover:bg-main4 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
