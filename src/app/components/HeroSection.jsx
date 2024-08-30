"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Texto y Animación */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600">
                Hello, I&apos;m
              </span>
            </h1>
            <div className="relative">
              <TypeAnimation
                sequence={[
                  "Seb",
                  200,
                  "SebRVV",
                  1000,
                  "Web Developer",
                  1000,
                  "Game Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Gamer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
              />
            </div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-4 mb-6">
              Me llamo Sebastian Rojas Vélez de Villa (SebRVV), tengo 20 años y soy e-sports player de Perú. Además de ser un apasionado por los videojuegos, también soy desarrollador en Unity, manejando lenguajes como C++, Python, JavaScript y Next.js. Mi objetivo es fusionar mi amor por los eSports y el desarrollo para crear experiencias únicas y desafiantes.
            </p>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white font-semibold hover:bg-gradient-to-bl transition-colors duration-300 inline-block"
            >
              Contactame
            </Link>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-[#1a1a1a] shadow-xl overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="object-cover"
                layout="fill"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
