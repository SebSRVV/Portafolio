"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

// NavLinks personalizados para tu sitio web
const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Socials",
    path: "#socials",
  },
  {
    title: "Gear & Setup",
    path: "#specs",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-blue-900 to-cyan-500 shadow-lg">
      <div className="container flex items-center justify-between mx-auto p-4 lg:py-2">
        {/* Titulo del sitio web con link a la pagina principal */}
        <Link href="/" className="text-4xl font-bold text-white hover:text-gray-300">
          SebRVV
        </Link>
        {/* Boton para abrir/cerrar el menu movil */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-white hover:tes-gray-300 hover:border-gray-300"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-white hover:text-gray-300 hover:border-gray-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        {/* Menu de navegacion para pantallas mas grandes */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex space-x-8 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-black hover:text-gray-700 transition-colors duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Overlay para el menu movil */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
