import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Events from "@/components/Events";

import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <AboutUs />

      {/* Events Section */}
      <Events />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
