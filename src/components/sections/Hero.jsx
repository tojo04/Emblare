import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Hero = () => {
  const heroRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for images
      gsap.to(image1Ref.current, {
        y: -30,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      gsap.to(image2Ref.current, {
        y: 30,
        rotation: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-theme/10 rounded-none blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-theme/5 rounded-none blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            <motion.div
              ref={image1Ref}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src="/assets/img/hero/hero-mask13-2.png"
                alt="Hero"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              ref={image2Ref}
              className="absolute top-20 right-0 w-3/4 h-3/4"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <img
                src="/assets/img/hero/hero-mask13-2.png"
                alt="Hero"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block">
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We
                </motion.span>{' '}
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  have
                </motion.span>
              </span>
              <span className="block text-theme">
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Rare
                </motion.span>{' '}
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Ideas
                </motion.span>
              </span>
              <span className="block">
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  &
                </motion.span>
              </span>
              <span className="block">
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Real
                </motion.span>{' '}
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  Results
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="text-xl text-body max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3 }}
            >
              At Emblare, we design engaging journeys that transform businesses into brands
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <Button
                to="/contact"
                className="inline-block px-8 py-4 bg-theme text-title font-bold rounded-none shadow-lg hover:shadow-xl"
              >
                Let's Create Something Rare
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-title rounded-none flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-title rounded-none"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

