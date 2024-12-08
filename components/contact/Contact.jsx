"use client";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Contact Us
        </h2>
        <p className="text-md md:text-lg mb-12 text-gray-600">
          We're here to help! Reach out to us via the contact information below
          or drop us a message.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
          {/* Phone */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-lg text-gray-600">📞 (+216) 28444603</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-lg text-gray-600">
              📍 Djerba Holiday Beach, VX6F+H5W, <br />3 Av. de La Liberté,
              Mezraia, Tunisia
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="my-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Us On The Map
          </h3>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Djerba+Holiday+Beach,+VX6F%2BH5W,+3+Av.+de+La+Liberté,+Mezraia,+Tunisia&key=YOUR_GOOGLE_MAPS_API_KEY"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
