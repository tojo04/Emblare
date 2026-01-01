import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-[140px] pb-[100px] min-h-screen">
      <div className="container">
        <motion.div 
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl mb-4 font-bold">Get in Touch</h1>
          <p className="text-text-secondary text-lg">Have a project in mind? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[60px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-accent-gradient p-10 rounded-3xl h-full text-white">
              <h3 className="text-2xl mb-3 font-bold">Contact Information</h3>
              <p className="opacity-80 mb-10">Fill out the form or reach us directly.</p>
              
              <div className="flex items-center gap-4 mb-6 text-base">
                <Mail className="opacity-80" />
                <span>hello@emblare.com</span>
              </div>
              <div className="flex items-center gap-4 mb-6 text-base">
                <MapPin className="opacity-80" />
                <span>Delhi NCR, India</span>
              </div>

              <div className="social-links">
                {/* Social icons would go here */}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-bg-secondary p-10 rounded-3xl border border-white/5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form">
              <div className="mb-6">
                <label className="block mb-2 text-text-secondary text-sm font-medium">Name</label>
                <input type="text" placeholder="Your Name" className="w-full p-3.5 bg-white/3 border border-white/10 rounded-xl text-text-primary font-main text-base transition-all duration-300 focus:outline-none focus:border-accent-color focus:bg-white/5" />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-text-secondary text-sm font-medium">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full p-3.5 bg-white/3 border border-white/10 rounded-xl text-text-primary font-main text-base transition-all duration-300 focus:outline-none focus:border-accent-color focus:bg-white/5" />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-text-secondary text-sm font-medium">Subject</label>
                <select className="w-full p-3.5 bg-white/3 border border-white/10 rounded-xl text-text-primary font-main text-base transition-all duration-300 focus:outline-none focus:border-accent-color focus:bg-white/5">
                  <option>General Inquiry</option>
                  <option>Web Design</option>
                  <option>Marketing</option>
                  <option>SEO</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-text-secondary text-sm font-medium">Message</label>
                <textarea rows="5" placeholder="Tell us about your project..." className="w-full p-3.5 bg-white/3 border border-white/10 rounded-xl text-text-primary font-main text-base transition-all duration-300 focus:outline-none focus:border-accent-color focus:bg-white/5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full flex justify-center items-center">
                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
