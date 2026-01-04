import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoIcon from '../assets/favicon.png';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isDarkHeader = location.pathname === '/contact' || location.pathname === '/services/web-design' || location.pathname === '/services/editing-producing' || location.pathname === '/services/seo' || location.pathname === '/services/social-media-marketing' || location.pathname === '/services/online-ads';
  const textColorClass = (isDarkHeader && !scrolled) ? 'text-white' : 'text-text-secondary';
  const hoverColorClass = (isDarkHeader && !scrolled) ? 'hover:text-gray-200' : 'hover:text-text-primary';
  const logoClass = (isDarkHeader && !scrolled) ? 'brightness-0 invert' : '';
  const mobileMenuIconClass = (isDarkHeader && !scrolled) ? 'text-white' : 'text-text-primary';

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full h-[80px] z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-black/10' 
          : isDarkHeader 
          ? 'bg-black/40 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container flex justify-between items-center h-full relative">
        <Link to="/" className="flex items-center">
          <img src={logoIcon} alt="Emblare" className={`h-10 w-auto ${logoClass} transition-all duration-300`} />
        </Link>

        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 h-full">
          <Button 
            to="/" 
            className={`text-base ${textColorClass} ${hoverColorClass} transition-colors duration-300`}
          >
            Home
          </Button>
          
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <motion.span 
              className={`text-base ${textColorClass} transition-colors duration-300 flex items-center gap-1.5 cursor-pointer relative ${hoverColorClass} overflow-hidden ${location.pathname.includes('/services') ? 'text-text-primary' : ''}`}
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="flex items-center gap-1.5"
                animate={{
                  y: isServicesHovered ? -40 : 0,
                  opacity: isServicesHovered ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Services <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center gap-1.5"
                animate={{
                  y: isServicesHovered ? 0 : 40,
                  opacity: isServicesHovered ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Services <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </motion.span>
            </motion.span>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-bg-secondary border border-white/10 rounded-none p-2.5 min-w-[240px] shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      to={service.path} 
                      className="block px-4 py-3 text-text-secondary rounded-none transition-all duration-200 text-sm hover:bg-white/5 hover:text-text-primary hover:border-l-2 hover:border-accent-color hover:pl-[14px]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button 
            to="/contact" 
            className={`text-base ${textColorClass} ${hoverColorClass} transition-colors duration-300`}
          >
            Contact Us
          </Button>
        </div>

        <div className={`md:hidden cursor-pointer ${mobileMenuIconClass}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
