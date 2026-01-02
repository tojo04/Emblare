import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl ml-auto"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-title to-theme bg-clip-text text-transparent">
              At Emblare, we believe every brand deserves to stand out as rare.
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Born from the words "Emblem" and "Rare", our name reflects our mission: to create
            distinct identities, innovative strategies, and measurable growth for businesses that
            aspire to lead.
          </motion.p>
          <motion.p
            className="text-lg text-body mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We are more than an agency—we're your partners in strategy, design, and digital
            transformation. From concept to execution, we deliver results that are both meaningful
            and lasting.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

