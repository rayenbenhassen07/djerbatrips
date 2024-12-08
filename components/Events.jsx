"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Events = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("/api/trips");
        setTrips(response.data.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };
    fetchTrips();
  }, []);

  console.log(trips);

  return (
    <section id="events" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800">
          Our Exclusive Adventures
        </h2>
        <p className="text-sm md:text-xl mb-10 text-gray-600">
          Discover a range of thrilling experiences crafted for the adventurous
          spirit. Choose your journey!
        </p>

        {/* Dynamic Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-6">
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href={`/product-category/excursions/${trip.slug}`}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <Image
                  src={`http://75.119.130.218:8055/assets/${trip.main_img}`}
                  width={400}
                  height={300}
                  alt={trip.name}
                  className="h-64 lg:h-80 w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {trip.name}
                  </h3>
                  <p className="text-white text-sm lg:text-base">
                    ${trip.price}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-semibold">
                  Popular
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
