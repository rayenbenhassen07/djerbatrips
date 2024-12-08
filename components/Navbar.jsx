"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaRegNewspaper } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-main4 w-full fixed left-0 top-0 z-40 py-1 lg:px-10 shadow-md">
      <div className="flex justify-between items-center max-w-[1500px] px-4 mx-auto">
        {/* Logo */}
        <a href="/" className="hidden lg:flex font-semibold text-lg">
          <Image src="/logo.png" alt="Logo" width={250} height={100} />
        </a>

        <a href="/" className="lg:hidden">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-32"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          <NavItem href="/" text="Home" />
          <NavItem href="/product-category/excursions" text="Excursions" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/contact" text="Contact" />

          <a href="/product-category/excursions">
            <button className="p-3 w-40 rounded-xl text-sm bg-yellow-600 text-white font-extrabold hover:bg-yellow-500  transition">
              <div className="flex justify-center items-center gap-2">
                <FaRegNewspaper size={20} />
                Book Now
              </div>
            </button>
          </a>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-black via-main3 to-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col justify-between h-full py-6 px-4">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Close Menu"
            >
              <IoClose size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6 mt-8">
            <Link href="/" onClick={toggleMenu}>
              <div className="text-lg font-bold  hover:underline">Home</div>
            </Link>
            <a href="/product-category/excursions" onClick={toggleMenu}>
              <div className="text-lg font-bold hover:underline">
                Excursions
              </div>
            </a>
            <a href="/blog" onClick={toggleMenu}>
              <div className="text-lg font-bold hover:underline">Blog</div>
            </a>
            <a href="/contact" onClick={toggleMenu}>
              <div className="text-lg font-bold hover:underline">Contact</div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-auto">
            <a href="/product-category/excursions" onClick={toggleMenu}>
              <button className="w-full py-3 rounded-lg bg-yellow-600  font-extrabold text-sm hover:bg-blue-600 transition">
                <div className="flex justify-center items-center gap-2">
                  <FaRegNewspaper size={20} />
                  Book Now
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="text-sm font-bold text-white  p-2 rounded-lg hover:bg-main3  transition"
    >
      {text}
    </Link>
  </li>
);

export default Navbar;
