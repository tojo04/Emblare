import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Button = ({ 
  children, 
  to, 
  onClick, 
  className = '', 
  type = 'button', 
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <>
      <motion.span
        className="block flex items-center justify-center gap-2"
        animate={{
          y: isHovered ? -40 : 0,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center justify-center gap-2"
        animate={{
          y: isHovered ? 0 : 40,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </>
  );

  const baseClasses = `relative overflow-hidden inline-block group ${className}`;

  if (to) {
    return (
      <MotionLink
        to={to}
        className={baseClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
