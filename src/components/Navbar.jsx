import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { title: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { title: 'Online Ads', path: '/services/online-ads' },
    { title: 'SEO', path: '/services/seo' },
    { title: 'Web Design & Development', path: '/services/web-design' },
    { title: 'Editing & Producing', path: '/services/editing-producing' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full h-[80px] bg-bg-primary/80 backdrop-blur-md z-50 border-b border-black/5"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container flex justify-between items-center h-full relative">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-text-primary">
          Emblare<span className="text-accent-color">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className={`text-base text-text-secondary transition-colors duration-300 flex items-center gap-1.5 cursor-pointer relative hover:text-text-primary ${location.pathname === '/' ? 'text-text-primary' : ''}`}>
            Home
          </Link>
          
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className={`text-base text-text-secondary transition-colors duration-300 flex items-center gap-1.5 cursor-pointer relative hover:text-text-primary ${location.pathname.includes('/services') ? 'text-text-primary' : ''}`}>
              Services <ChevronDown size={16} />
            </span>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  className="absolute top-[60px] left-1/2 -translate-x-1/2 bg-bg-secondary border border-white/10 rounded-xl p-2.5 min-w-[240px] shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      to={service.path} 
                      className="block px-4 py-3 text-text-secondary rounded-lg transition-all duration-200 text-sm hover:bg-white/5 hover:text-text-primary"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className={`text-base text-text-secondary transition-colors duration-300 flex items-center gap-1.5 cursor-pointer relative hover:text-text-primary ${location.pathname === '/contact' ? 'text-text-primary' : ''}`}>
            Contact Us
          </Link>
        </div>

        <div className="md:hidden cursor-pointer text-text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="bg-bg-secondary p-5 border-b border-white/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 text-text-secondary border-b border-white/5">Home</Link>
            <div className="py-4 border-b border-white/5">
              <span className="block text-text-secondary mb-2.5 font-semibold">Services</span>
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-text-secondary border-b border-white/5 !pl-5 text-sm !border-b-0"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 text-text-secondary border-b border-white/5">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
