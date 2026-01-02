import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-accent-color mb-6">About Emblare</h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
              At Emblare, we design engaging journeys that transform businesses into brands. Our relationships with clients fuel real success, and we love building brands.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/emblare/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-color hover:text-black transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/emblare_?igsh=bWN1anpoYXZsOHV3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-color hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-2xl font-bold text-accent-color mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-design" className="text-gray-400 hover:text-accent-color transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-color transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-2xl font-bold text-accent-color mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                Delhi NCR, India
              </li>
              <li>
                <a href="mailto:hello@emblare.com" className="text-gray-400 hover:text-accent-color transition-colors">
                  hello@emblare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Emblare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;