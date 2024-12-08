import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact Information */}
          <div className="flex flex-col items-start">
            <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
            <p className="text-sm text-main3 font-semibold">
              Contact Information
            </p>
            <p className="mt-2 text-xs">📞 (+216) 28444603</p>
            <p className="mt-2 text-xs">
              📍 Djerba Holiday Beach, VX6F+H5W,
              <br />3 Av. de La Liberté, Mezraia, Tunisia
            </p>
          </div>

          {/* Legal Information */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-main3 mb-2">
              Legal Information
            </p>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-white text-xs">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="hover:text-white text-xs"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-white text-xs">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-main3 mb-2">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
