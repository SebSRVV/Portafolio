'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 lg:py-28 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Hello, I’m
              </span>{' '}
              <br />
              <TypeAnimation
                sequence={[
                  'SebRVV',
                  2000,
                  'E-Sports Player',
                  2000,
                  'AimLab Champion',
                  2000,
                  'Game Developer',
                  2000,
                  'Programmer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-white mt-2"
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-6 mb-8 max-w-2xl leading-relaxed">
              Soy Sebastian Rojas Vélez de Villa (SebRVV), desarrollador en Unity y jugador e-sports. Utilizo tecnologías como C++, Python, TypeScript y Next.js para crear experiencias únicas. Fusiono mi pasión por los videojuegos con el desarrollo.
            </p>
            <Link
              href="https://github.com/SebSRVV"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition rounded-full text-white font-semibold text-lg shadow-lg"
            >
              Ver mi GitHub
            </Link>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 animate-pulse blur-xl z-0" />
              <Image
                src="/images/hero-image.png"
                alt="SebRVV Avatar"
                fill
                className="rounded-full object-cover z-10 relative border-4 border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
