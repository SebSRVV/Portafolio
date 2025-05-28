'use client';
import React from 'react';
import { motion } from 'framer-motion';

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: '100%' },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
        active ? 'text-white' : 'text-gray-400 hover:text-cyan-300'
      }`}
    >
      {children}

      {/* Underline animation */}
      <motion.div
        className="absolute left-1 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        variants={underlineVariants}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default TabButton;
