import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Clients = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const clients = [
    'apollo.jpg',
    'cloud360.webp',
    'flipkart.png',
    'indeed.png',
    'pushp-masala.jpeg',
    'saucy-mahi.png',
    'zomato.png',
    'tommy.jpeg',
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-none border-2 border-title/10 hover:border-theme transition-all duration-300 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img
                src={`/assets/img/client/${client}`}
                alt={`Client ${index + 1}`}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients

