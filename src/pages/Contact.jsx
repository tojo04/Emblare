import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
      <div className="h-[150px]"></div>

      {/* Form and Map Section */}
      <div className="max-w-[1600px] mx-auto pb-20">
        <div className="relative">
          {/* Contact Form - Full Width */}
          <motion.div 
            className="bg-[#D4FF00] px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 w-full min-h-[850px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-[600px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Have Any Project on Your Mind?
              </h1>
              <p className="text-black text-lg mb-16">
                Great! We're excited to hear from you and let's start something
              </p>

              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full name*" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none focus:border-black/70 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email address*" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none focus:border-black/70 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="url" 
                    placeholder="Website link" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none focus:border-black/70 transition-colors"
                  />
                </div>

                <div>
                  <textarea 
                    rows="5" 
                    placeholder="How Can We Help You*" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-black text-black text-xl font-semibold placeholder-black focus:outline-none focus:border-black/70 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-black text-[#D4FF00] px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-black/90 transition-colors mt-8"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map Overlay - Revealing from right to left */}
          <motion.div 
            className="absolute -top-32 right-0 w-full lg:w-[45%] h-[600px] lg:h-[850px] shadow-2xl"
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
