import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=400&fit=crop)',
            filter: 'brightness(0.6)'
          }}
        ></div>
        <motion.h1 
          className="relative z-10 text-7xl md:text-8xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h1>
      </div>

      {/* Spacing */}
      <div className="h-[300px]"></div>

      {/* Form and Map Section */}
      <div className="max-w-[1600px] mx-auto pb-20">
        <div className="relative">
          {/* Contact Form - Full Width */}
          <motion.div 
            className="bg-[#D4FF00] px-8 md:px-12 lg:px-20 py-8 md:py-10 lg:py-12 w-full flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-[600px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                Have Any Project on Your Mind?
              </h1>
              <p className="text-black text-lg mb-8">
                Great! We're excited to hear from you and let's start something
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="relative"
                    animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input 
                      type="text" 
                      placeholder="Full name*" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none transition-colors relative z-10"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <motion.div
                      className="absolute inset-0 bg-black pointer-events-none"
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    className="relative"
                    animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input 
                      type="email" 
                      placeholder="Email address*" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none transition-colors relative z-10"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <motion.div
                      className="absolute inset-0 bg-black pointer-events-none"
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative"
                  animate={{ scale: focusedField === 'website' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <input 
                    type="url" 
                    placeholder="Website link" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none transition-colors relative z-10"
                    onFocus={() => setFocusedField('website')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea 
                    rows="3" 
                    placeholder="How Can We Help You*" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none transition-colors resize-none relative z-10"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  ></textarea>
                  <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.button 
                  type="submit" 
                  className="bg-black text-[#D4FF00] px-10 py-5 font-bold text-sm uppercase tracking-wider transition-colors mt-4 overflow-hidden relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="block"
                    animate={{
                      y: isHovered ? -40 : 0,
                      opacity: isHovered ? 0 : 1
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    SEND MESSAGE
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      y: isHovered ? 0 : 40,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    SEND MESSAGE
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map Overlay - Revealing from right to left */}
          <motion.div 
            className="absolute -top-10 right-0 w-full lg:w-[45%] h-[550px] lg:h-[650px] shadow-2xl"
            initial={{ clipPath: "inset(0 0 0 100%)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95073802597!2d76.76357449999999!3d28.644800000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
