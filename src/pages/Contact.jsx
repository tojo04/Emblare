import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=400&fit=crop)',
            filter: 'brightness(0.6)'
          }}
        ></div>
        <motion.h1 
          className="relative z-10 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h1>
      </div>

      {/* Spacing */}
      <div className="h-[80px] md:h-[150px] lg:h-[300px]"></div>

      {/* Form and Map Section */}
      <div className="max-w-[1600px] mx-auto pb-10 md:pb-16 lg:pb-20 px-4 md:px-6 lg:px-0">
        <div className="relative">
          {/* Map - Shows ABOVE form on mobile, overlays on desktop */}
          <motion.div 
            className="relative lg:absolute lg:-top-10 lg:right-0 w-full lg:w-[45%] h-[300px] md:h-[400px] lg:h-[550px] xl:h-[650px] mb-6 lg:mb-0 lg:z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-full h-full hidden lg:block shadow-2xl"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
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
            <div className="w-full h-full lg:hidden shadow-2xl">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-[#D4FF00] px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-10 lg:py-12 w-full lg:w-[100%] flex flex-col justify-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-[600px]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 md:mb-4 leading-tight">
                Have Any Project on Your Mind?
              </h1>
              <p className="text-black text-base md:text-lg mb-6 md:mb-8">
                Great! We're excited to hear from you and let's start something
              </p>

              <form action="https://formspree.io/f/xbdlnold" method="POST" encType="multipart/form-data" className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <motion.div
                    className="relative"
                    animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full name*" 
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-black text-black text-lg md:text-xl font-semibold placeholder-black focus:outline-none transition-colors relative z-10"
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
                      name="email"
                      placeholder="Email address*" 
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-black text-black text-lg md:text-xl font-semibold placeholder-black focus:outline-none transition-colors relative z-10"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <motion.div
                    className="relative"
                    animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone number*" 
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-black text-black text-lg md:text-xl font-semibold placeholder-black focus:outline-none transition-colors relative z-10"
                      onFocus={() => setFocusedField('phone')}
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
                    animate={{ scale: focusedField === 'budget' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <select 
                      name="budget"
                      className="w-full px-0 py-3 md:py-4 pr-8 bg-transparent border-b-2 border-black text-black text-lg md:text-xl font-semibold focus:outline-none transition-colors relative z-10 appearance-none cursor-pointer"
                      style={{
                        colorScheme: 'light'
                      }}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled style={{ backgroundColor: '#fff', color: '#000', padding: '12px 16px' }}>Your Project Budget*</option>
                      <option value="5Lac or Less" style={{ backgroundColor: '#fff', color: '#000', padding: '12px 16px' }}>5Lac or Less</option>
                      <option value="5Lac to 10Lac" style={{ backgroundColor: '#fff', color: '#000', padding: '12px 16px' }}>5Lac to 10Lac</option>
                      <option value="10Lac to 30Lac" style={{ backgroundColor: '#fff', color: '#000', padding: '12px 16px' }}>10Lac to 30Lac</option>
                      <option value="30Lac or more" style={{ backgroundColor: '#fff', color: '#000', padding: '12px 16px' }}>30Lac or more</option>
                      <option value="Not Sure" style={{ backgroundColor: '#fff', color: '#000', padding: '12px 16px' }}>Not Sure</option>
                    </select>
                    <svg className="absolute right-0 bottom-3 md:bottom-4 w-6 h-6 text-black pointer-events-none z-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <motion.div
                      className="absolute inset-0 bg-black pointer-events-none"
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative"
                  animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea 
                    rows="3" 
                    name="message"
                    placeholder="Share your requirements with us*" 
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-black text-black text-lg md:text-xl font-semibold placeholder-black focus:outline-none transition-colors resize-none relative z-10"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    maxLength={800}
                    required
                  ></textarea>
                  <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <div className="relative overflow-hidden">
                  <label 
                    className="flex items-center justify-between w-full px-4 md:px-6 py-3 md:py-4 bg-black text-[#D4FF00] cursor-pointer relative transition-all group"
                    onMouseEnter={() => setFocusedField('file')}
                    onMouseLeave={() => setFocusedField(null)}
                  >
                    <motion.span
                      className="flex items-center gap-2 text-base md:text-lg font-semibold"
                      animate={{
                        y: focusedField === 'file' ? -40 : 0,
                        opacity: focusedField === 'file' ? 0 : 1
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      Upload files (optional)
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 flex items-center justify-between px-4 md:px-6 text-base md:text-lg font-semibold"
                      animate={{
                        y: focusedField === 'file' ? 0 : 40,
                        opacity: focusedField === 'file' ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span className="flex items-center gap-2">
                        Upload files (optional)
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </span>
                    </motion.span>
                    <input 
                      type="file" 
                      name="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="bg-black text-[#D4FF00] px-8 md:px-10 py-4 md:py-5 font-bold text-sm uppercase tracking-wider transition-colors mt-4"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
