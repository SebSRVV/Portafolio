import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Nombre / logo */}
        <div className="text-2xl font-bold text-white">
          Seb<span className="text-cyan-500">RVV</span>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6 text-2xl">
          <FooterIcon
            href="https://github.com/SebSRVV"
            label="GitHub"
            Icon={FaGithub}
          />
          <FooterIcon
            href="https://www.linkedin.com/in/sebrvv/"
            label="LinkedIn"
            Icon={FaLinkedin}
          />
          <FooterIcon
            href="https://x.com/tvsebrvv"
            label="Twitter / X"
            Icon={FaTwitter}
          />
        </div>
      </div>

      {/* Derechos */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SebRVV. Todos los derechos reservados.
      </div>
    </footer>
  );
};

// Iconos sociales con animación y accesibilidad
const FooterIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
  >
    <Icon />
  </a>
);

export default Footer;
