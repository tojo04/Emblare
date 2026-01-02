import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: 'Partnering with Emblare transformed our digital presence. Their mix of strategy, design, and technology helped us scale faster than we imagined.',
      author: '',
      role: 'Marketing Director, Apollo Hospitals',
    },
    {
      text: 'The team at Emblare truly understands what it means to build a brand. From concept to execution, they delivered creativity and measurable results.',
      author: '',
      role: 'Brand Manager, Pushp Masale',
    },
    {
      text: 'Working with Emblare felt like having an in-house growth partner. Their professionalism and innovation made all the difference for us.',
      author: '',
      role: 'Head of Digital, Tommy Hilfiger India',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section ref={ref} className="py-24 bg-theme">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-title mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-2xl shadow-2xl"
            >
              <Quote className="w-12 h-12 text-theme mb-6" />
              <p className="text-2xl text-title mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="font-bold text-title">{testimonials[currentIndex].author}</p>
                <p className="text-body">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-title w-8' : 'bg-title/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

