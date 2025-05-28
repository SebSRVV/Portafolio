'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Gear & Setup', path: '#specs' },
  { title: 'Socials', path: '#socials' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-black/80 py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-white tracking-tight"
        >
          Seb<span className="text-cyan-400">RVV</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="group relative">
              <NavLink
                href={link.path}
                title={link.title}
                className="text-gray-200 transition duration-300 hover:text-cyan-400"
              />
              {/* Hover underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none hover:text-cyan-400 transition"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {navbarOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 py-6 animate-slide-down">
          <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
