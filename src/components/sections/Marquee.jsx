import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Marquee = () => {
  const items = [
    'Strategy that drives growth',
    'Design that defines distinction',
    'Marketing that builds trust',
    'Technology that empowers brands',
  ]

  return (
    <div className="bg-title text-white py-6 overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-theme" />
            <span className="text-lg font-semibold">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee

