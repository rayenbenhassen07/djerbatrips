import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-12">
            At Adventure Co., we specialize in delivering unforgettable
            experiences. Whether you're seeking the adrenaline rush of quad
            biking or the serene joy of sailing, our expertly organized events
            cater to all adventure lovers.
          </p>

          {/* Image and text sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/G5.jpeg" // Replace with your image path
                alt="Adventure experience"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Why Choose Adventure Co.?
              </h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-main3">Expert Guides:</strong> Our
                  experienced team ensures safety and fun every step of the way.
                </li>
                <li>
                  <strong className="text-main3">Unique Locations:</strong> We
                  explore the most breathtaking landscapes.
                </li>
                <li>
                  <strong className="text-main3">Flexible Packages:</strong>{" "}
                  Customize your adventure to fit your preferences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
