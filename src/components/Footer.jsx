import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary pt-20 pb-10 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
              Emblare
            </Link>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md mb-8">
              At Emblare, we design engaging journeys that transform businesses into brands. Our relationships with clients fuel real success, and we love building brands.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/emblare/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-color hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/emblare_?igsh=bWN1anpoYXZsOHV3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-color hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-design" className="text-text-secondary hover:text-accent-color transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-accent-color transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-secondary">
                <MapPin size={20} className="text-accent-color shrink-0 mt-1" />
                <span>Delhi NCR, India</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Mail size={20} className="text-accent-color shrink-0" />
                <a href="mailto:hello@emblare.com" className="hover:text-white transition-colors">
                  hello@emblare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Emblare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;