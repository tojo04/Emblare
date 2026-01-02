import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ item, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={item.path}
      className={`relative text-sm font-bold uppercase tracking-wider transition-colors overflow-hidden block ${
        isActive ? 'text-theme' : 'text-black hover:text-theme'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-5 overflow-hidden">
        <motion.span
          className="block"
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {item.name}
        </motion.span>
        <motion.span
          className="absolute top-0 left-0 block"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {item.name}
        </motion.span>
      </div>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-theme"
          initial={false}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavLink;
