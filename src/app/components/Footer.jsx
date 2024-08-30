import React from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo o nombre del sitio */}
        <div className="text-2xl font-bold">
          <span className="text-gradient">SebRVV</span>
        </div>

        {/* Enlaces y derechos de autor */}
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-sm md:mr-6 mb-4 md:mb-0">
            ©2024 All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Home</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
