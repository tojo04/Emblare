import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Passionate = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-theme relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/img/passionate.png"
          alt="Passionate"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-title">
              Passionate About Building Rare Brands
            </h2>
            <h4 className="text-2xl font-bold mb-4 text-title">We Love What We Do</h4>
            <p className="text-lg text-title/80 mb-8">
              At Emblare, we partner with ambitious businesses, blending creativity and innovation to
              craft distinct identities, growth strategies, and long-lasting value.
            </p>
            <h4 className="text-2xl font-bold mb-4 text-title">Why Work With Us</h4>
            <p className="text-lg text-title/80">
              If you ask our clients what it's like working with Emblare, they'll talk about how
              much we care about their success. For us, real relationships fuel real impact. We
              love shaping brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.img
              src="/assets/img/passionate.png"
              alt="Passionate"
              className="w-full h-auto rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Passionate

