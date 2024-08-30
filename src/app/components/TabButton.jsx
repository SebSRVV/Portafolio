import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  // Define las clases de texto y los estilos de transición
  const buttonClasses = active
    ? "text-white font-bold border-b-2 border-white"
    : "text-gray-300 hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`relative px-4 py-2 transition-colors duration-300 ${buttonClasses}`}
    >
      <p className="text-lg font-semibold">{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
      ></motion.div>
    </button>
  );
};

export default TabButton;
