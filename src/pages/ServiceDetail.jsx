import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceDetail = () => {
  const { slug } = useParams()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const services = {
    'social-media-marketing': {
      title: 'Social Media Marketing',
      heroImage: '/assets/img/service/marketing-hero.png',
      bgImage: '/assets/img/service/marketing.png',
      description: 'Emblare is proud to lead the way in crafting social narratives that resonate with audiences. We help brands evolve their digital voice, and will be responsible for creating brand campaigns, content strategies, and all future visual assets.',
      details: [
        'We craft strategies that fuel authentic connections',
        'We love building communities and helping brands grow',
        'Cross-platform content creation and management',
        'Real-time engagement and community building',
      ],
    },
    'online-ads': {
      title: 'Online Ads',
      heroImage: '/assets/img/service/ads-hero.png',
      bgImage: '/assets/img/service/ads.png',
      description: 'We create and manage targeted campaigns that maximize your brand\'s reach and deliver a strong return on investment. We focus on creating impact that helps your brand scale effectively.',
      details: [
        'Targeted campaign management',
        'Maximize reach and ROI',
        'Data-driven optimization',
        'Multi-platform advertising',
      ],
    },
    'seo': {
      title: 'SEO',
      heroImage: '/assets/img/service/seo-hero.png',
      bgImage: '/assets/img/service/seo.png',
      description: 'We design robust SEO strategies that enhance your online visibility and secure your brand\'s presence at the forefront. We love driving growth and helping you stand out in a competitive market.',
      details: [
        'Technical SEO optimization',
        'Content strategy and creation',
        'Keyword research and analysis',
        'Performance tracking and reporting',
      ],
    },
    'web-design-development': {
      title: 'Web Design & Development',
      heroImage: '/assets/img/service/web-hero.png',
      bgImage: '/assets/img/service/web.png',
      description: 'We build digital platforms that deeply engage users through intuitive design and seamless functionality. Our passion is creating immersive experiences that help your brand thrive in the digital landscape.',
      details: [
        'Responsive web design',
        'Custom development solutions',
        'User experience optimization',
        'Performance and security',
      ],
    },
    'editing-production': {
      title: 'Editing & Production',
      heroImage: '/assets/img/service/editing-hero.png',
      bgImage: '/assets/img/service/editing.png',
      description: 'We produce high-quality visual and audio content that brings your brand\'s unique story to life. We specialize in creating compelling assets that inspire and connect with your audience.',
      details: [
        'Video editing and production',
        'Audio production and mixing',
        'Motion graphics and animation',
        'Content creation and storytelling',
      ],
    },
  }

  const service = services[slug] || services['social-media-marketing']

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-auto rounded-none shadow-2xl"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className="text-xl text-body mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="relative h-96 rounded-none overflow-hidden mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={service.bgImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-theme rounded-none flex items-center justify-center text-title text-2xl hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ▶
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {service.details.map((detail, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-none border-l-4 border-theme"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <p className="text-body">{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail

