import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Emblare felt like having an in-house growth partner. Their professionalism and innovation made all the difference for us.",
    author: "Head of Digital",
    company: "Tommy Hilfiger India",
  },
  {
    id: 2,
    quote: "The team at Emblare truly understands what it means to build a brand. From concept to execution, they delivered creativity and measurable results.",
    author: "Brand Manager",
    company: "Pushp Masale",
  },
  {
    id: 3,
    quote: "Partnering with Emblare transformed our digital presence. Their mix of strategy, design, and technology helped us scale faster than we imagined.",
    author: "Marketing Director",
    company: "Apollo Hospitals",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-accent-color">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-black tracking-tight">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[30px] p-10 md:p-16 shadow-2xl min-h-[350px] flex flex-col justify-center relative overflow-hidden">
            <Quote className="text-accent-color w-12 h-12 mb-8 flex-shrink-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="text-xl md:text-3xl leading-relaxed text-gray-900 mb-8 font-medium">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-500 font-medium text-lg">
                    {testimonials[currentIndex].author}, <span className="text-gray-900 font-semibold">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-10 bg-black' : 'w-3 bg-black/20 hover:bg-black/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

