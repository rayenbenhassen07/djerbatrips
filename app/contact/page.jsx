import Contact from "@/components/Contact";
import React from "react";

export async function generateMetadata() {
  return {
    title: `Djerbatrips | Contact`,
  };
}

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>
          <p className="text-sm md:text-md mb-12 text-gray-600">
            We're here to help! Reach out to us via the contact information
            below or drop us a message.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="lg:text-xl font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-sm lg:text-lg text-gray-600">
                📞 (+216) 28444603
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="lg:text-xl font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-sm lg:text-lg text-gray-600">
                📍 Djerba Holiday Beach, VX6F+H5W, <br />3 Av. de La Liberté,
                Mezraia, Tunisia
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="my-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Find Us On The Map
            </h3>
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2339.833710216795!2d10.971013410874363!3d33.86117811369911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa2a309312d97%3A0xf913d72a024c7436!2sHotel%20Djerba%20Holiday%20Beach!5e0!3m2!1sfr!2sus!4v1731332106395!5m2!1sfr!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ContactPage;
