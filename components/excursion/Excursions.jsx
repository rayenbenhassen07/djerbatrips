"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Loader from "../Loader";

const Excursions = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("/api/trips");
        setTrips(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trips:", error);
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Excursions Section */}
      <section id="excursions" className="py-16 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Discover Our Excursions
          </h2>
          <p className="text-sm md:text-md mb-12 text-gray-600">
            Embark on unique journeys designed for explorers at heart. Choose an
            experience that awaits you!
          </p>

          {/* Dynamic Trips Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                href={`/product-category/excursions/${trip.slug}`}
              >
                <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-white">
                  <Image
                    src={`http://75.119.130.218:8055/assets/${trip.main_img}`}
                    width={400}
                    height={300}
                    alt={trip.name}
                    className="h-64 lg:h-72 w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                    <h3 className="text-lg font-semibold mb-1">{trip.name}</h3>
                    <p className="text-base font-medium">${trip.price}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-1 rounded-lg shadow-md text-sm font-semibold">
                    Popular
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section with Image and Text */}
      <section id="extra-info" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experience the Desert Like Never Before
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Our desert excursions offer a unique opportunity to explore the
              vast and mysterious landscapes of the Sahara. From golden dunes to
              serene oases, immerse yourself in the beauty and tranquility of
              nature. Adventure, relaxation, and unforgettable memories await
              you.
            </p>
          </div>
          <div>
            <Image
              src="/G8.jpeg"
              alt="Desert Adventure"
              width={600}
              height={400}
              objectFit="cover"
              className="h-64 lg:h-96 w-full object-cover "
            />
          </div>
        </div>

        <div className="max-w-6xl mt-32 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="hidden lg:flex">
            <Image
              src="/G11.jpeg"
              alt="Djerba see"
              width={600}
              height={400}
              objectFit="cover"
              className="h-64 lg:h-96 w-full object-cover "
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experience the Desert Like Never Before
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Nestled in the heart of the Mediterranean, Djerba's sea offers an
              idyllic escape with its crystal-clear turquoise waters and golden
              sandy beaches. The gentle waves provide a perfect setting for both
              relaxation and adventure, inviting visitors to indulge in
              activities like snorkeling, kayaking, and windsurfing. Rich in
              marine life, the sea around Djerba is a treasure trove for those
              keen on exploring underwater marvels. Whether you're basking under
              the warm sun or enjoying a tranquil sunset by the shore, the
              serene beauty of Djerba's sea creates unforgettable moments.
            </p>
          </div>

          <div className=" lg:hidden">
            <Image
              src="/G11.jpeg"
              alt="Desert Adventure"
              width={600}
              height={400}
              objectFit="cover"
              className="h-64 lg:h-96 w-full object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Excursions;
