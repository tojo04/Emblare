import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Counter = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  const counters = [
    { number: 12, suffix: '+', label: 'Years of Experience', description: 'We are a digital agency helping brands with strategy, design, marketing, and technology solutions globally.' },
    { number: 150, suffix: '+', label: 'Successful Projects', description: 'We are a digital agency helping brands with strategy, design, marketing, and technology solutions globally.' },
    { number: 100, suffix: '+', label: 'Satisfied Customers', description: 'We are a digital agency helping brands with strategy, design, marketing, and technology solutions globally.' },
  ]

  const CountUp = ({ end, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      let startTime = null
      const duration = 2000
      const startValue = 0

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(startValue + (end - startValue) * easeOutQuart))

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }, [inView, end])

    return (
      <span className="text-6xl lg:text-7xl font-bold text-theme">
        {count}{suffix}
      </span>
    )
  }

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CountUp end={counter.number} suffix={counter.suffix} />
              <h3 className="text-2xl font-bold mt-4 mb-2">{counter.label}</h3>
              <p className="text-body">{counter.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter

