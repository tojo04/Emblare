import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NavLink from './NavLink'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'HOME', path: '/' },
    {
      name: 'SERVICES',
      path: '/services',
      submenu: [
        { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { name: 'Online Ads', path: '/services/online-ads' },
        { name: 'SEO', path: '/services/seo' },
        { name: 'Web Design & Development', path: '/services/web-design-development' },
        { name: 'Editing & Production', path: '/services/editing-production' },
      ],
    },
    { name: 'CONTACT US', path: '/contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <motion.img
                src="/assets/img/favicons/favicon.png"
                alt="Emblare Logo"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial="closed"
                  whileHover="open"
                >
                  <NavLink item={item} isActive={location.pathname === item.path} />

                  {/* Submenu */}
                  {item.submenu && (
                    <motion.div 
                      variants={{
                        closed: { opacity: 0, height: 0, overflow: "hidden" },
                        open: { opacity: 1, height: "auto", overflow: "hidden" }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-none shadow-xl border border-black/5"
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-6 py-3 text-sm text-black hover:bg-theme/10 hover:text-theme transition-colors font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-title"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img
                  src="/assets/img/favicons/favicon.png"
                  alt="Emblare"
                  className="h-10"
                />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-semibold text-title hover:text-theme"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-body hover:text-theme"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

