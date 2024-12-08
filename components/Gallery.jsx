import React from "react";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    { src: "/quad1.jpeg", alt: "Quad Adventure" },
    { src: "/quad2.jpeg", alt: "Quad Ride in the Desert" },
    { src: "/camel.jpeg", alt: "Camel Ride in Djerba" },
    { src: "/G1.jpeg", alt: "Group Adventure" },
    { src: "/G2.jpeg", alt: "Beach Sunset" },
    { src: "/G3.jpeg", alt: "Desert Landscape" },
    { src: "/G4.jpeg", alt: "Excursion on the Beach" },
    { src: "/G9.jpeg", alt: "Scenic Views of Djerba" },
    { src: "/G6.jpeg", alt: "Tourist Group at Djerba" },
    { src: "/G7.jpeg", alt: "Fun with Friends" },
    { src: "/G8.jpeg", alt: "Adventure Time" },
    { src: "/G12.jpeg", alt: "Djerba Adventure" },
    { src: "/G11.jpeg", alt: "Exploring the Desert" },
    { src: "/G10.jpeg", alt: "Water Sports Fun" },
    { src: "/jetski.jpeg", alt: "Jetski Adventure" },
  ];

  return (
    <>
      <section
        id="gallery"
        className="py-16 bg-gradient-to-b from-white to-main4 text-gray-900"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-sm lg:text-lg mb-8">
            Check out some highlights from our previous events.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                {/* Image with Zoom Effect */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500} // Specify a width
                  height={300} // Specify a height
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Text on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
