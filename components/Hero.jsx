"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const video = document.getElementById("hero-video");
      video.onloadeddata = () => setIsVideoLoaded(true);
    } else {
      setIsVideoLoaded(true); // Immediately show fallback image for mobile
    }
  }, [isMobile]);

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background Video or Fallback Image */}
        {!isMobile ? (
          <video
            id="hero-video"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-50" : "opacity-0"
            }`}
            src="/djerba.mp4"
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            src="/hero.jpg" // Replace with your fallback image
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Experience the thrill with our exclusive events - quads, jet skis,
            and more trips!
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Link
              href="/product-category/excursions"
              className="lg:px-8 lg:py-3 p-2 bg-main3 text-black font-bold rounded-lg hover:bg-main4 transition"
            >
              Explore events
            </Link>
            <Link
              href="/contact"
              className="lg:px-8 lg:py-3 p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
