import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: '/assets/img/icon/feature-icon1-2.svg',
      title: 'Social Media',
      description: 'We craft strategies that fuel authentic connections. We love building communities and helping brands grow.',
      link: '/services/social-media-marketing',
    },
    {
      icon: '/assets/img/icon/feature-icon1-4.svg',
      title: 'Online Ads',
      description: 'We deliver targeted campaigns that maximize reach. We love creating impact and helping brands scale.',
      link: '/services/online-ads',
    },
    {
      icon: '/assets/img/icon/feature-icon1-1.svg',
      title: 'SEO',
      description: 'We design strategies that improve visibility online. We love driving growth and helping brands stand out.',
      link: '/services/seo',
    },
    {
      icon: '/assets/img/icon/feature-icon1-3.svg',
      title: 'Web Design & Development',
      description: 'We build digital platforms that engage users deeply. We love designing experiences and helping brands thrive.',
      link: '/services/web-design-development',
    },
    {
      icon: '/assets/img/icon/feature-icon1-5.svg',
      title: 'Editing and Production',
      description: 'We create visuals that bring stories to life. We love producing content and helping brands inspire.',
      link: '/services/editing-production',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            What We Can Do for Our Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-theme transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-theme transition-colors">
                <Link to={service.link}>{service.title}</Link>
              </h3>
              <p className="text-body mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-theme font-semibold group-hover:gap-4 transition-all"
              >
                VIEW DETAILS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

