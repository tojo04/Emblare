import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const WhyUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [openIndex, setOpenIndex] = useState(0)

  const items = [
    {
      title: 'Deep Cross-Channel Integration',
      content:
        'We ensure every campaign — across digital, social, and technology touchpoints — works together seamlessly to maximize reach and results.',
    },
    {
      title: 'Data-Driven Decision Making',
      content:
        'Every move is backed by insights. We analyze performance in real-time to adapt, refine, and ensure measurable growth.',
    },
    {
      title: 'Industry-Specific Expertise',
      content:
        'From FMCG to healthcare to lifestyle brands, our diverse experience allows us to tailor strategies that work for your industry.',
    },
    {
      title: 'Agile Campaign Management',
      content:
        'In a fast-changing digital world, agility is key. Our team adapts quickly to market trends and audience behavior to keep you ahead.',
    },
    {
      title: 'Full-Service Creative Studio',
      content:
        'Unlike agencies that outsource, we have an in-house creative powerhouse. From graphic design and copywriting to film, video, and UX, our creative team collaborates directly with strategists to deliver cohesive, on-brand content.',
    },
    {
      title: 'Dedicated Client Success Team',
      content:
        "We don't just work for you, we work with you. Our client success partners ensure smooth collaboration, transparent communication, and consistent delivery.",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">Why Us?</h2>
            <p className="text-xl text-body leading-relaxed">
              At Emblare, we don't just deliver services — we deliver impact. Our approach is built
              on strategy, creativity, and technology working in sync to fuel growth and
              distinction for your brand. Here's what sets us apart:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-theme/5 transition-colors"
                >
                  <span className="font-bold text-lg">{item.title}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-body">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

