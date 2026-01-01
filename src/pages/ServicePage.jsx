import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const servicesData = {
  'social-media-marketing': {
    title: 'Social Media Marketing',
    subtitle: 'Crafting social narratives that resonate with audiences.',
    description: 'Emblare is proud to lead the way in crafting social narratives that resonate with audiences. We help brands evolve their digital voice, and will be responsible for creating brand campaigns, content strategies, and all future visual assets. Our social media refreshment will help position brands to meet the challenges of the future, as it seeks to lead the industry in technological innovation and ethical brand practices to deliver long-lasting value for its clients.',
    features: ['Custom Solution', 'In-time Result', 'Unparalleled Flexibility', 'Ethical Brand Practices'],
    color: '#E1306C'
  },
  'online-ads': {
    title: 'Online Ads',
    subtitle: 'Targeted campaigns that maximize your brand\'s reach.',
    description: 'We create and manage targeted campaigns that maximize your brand\'s reach and deliver a strong return on investment. We focus on creating impact that helps your brand scale effectively. Emblare is proud to lead the way in crafting ad campaigns that resonate with audiences. We will help brands evolve their paid strategy, and will be responsible for creating brand campaigns, content strategies, and all future visual assets.',
    features: ['Custom Solution', 'In-time Result', 'Unparalleled Flexibility', 'Sustainable Advertising'],
    color: '#4285F4'
  },
  'seo': {
    title: 'SEO',
    subtitle: 'Enhance your online visibility and secure your brand\'s presence.',
    description: 'We design robust SEO strategies that enhance your online visibility and secure your brand\'s presence at the forefront. We love driving growth and helping you stand out in a competitive market. Emblare is proud to lead the way in crafting search strategies that resonate with audiences. We will help brands evolve their search presence, and will be responsible for creating content strategies, technical SEO, and all future digital assets.',
    features: ['Custom Solution', 'In-time Result', 'Unparalleled Flexibility', 'Technical SEO'],
    color: '#0F9D58'
  },
  'web-design': {
    title: 'Web Design & Development',
    subtitle: 'Digital platforms that deeply engage users.',
    description: 'We build digital platforms that deeply engage users through intuitive design and seamless functionality. Our passion is creating immersive experiences that help your brand thrive in the digital landscape. Emblare is proud to lead the way in crafting digital platforms that resonate with audiences. We will help brands evolve their online presence, and will be responsible for creating brand experiences, websites, and all future digital assets.',
    features: ['Custom Solution', 'In-time Result', 'Unparalleled Flexibility', 'Sustainable Design'],
    color: '#6366f1'
  },
  'editing-producing': {
    title: 'Editing & Production',
    subtitle: 'Visual and audio content that brings your brand’s unique story to life.',
    description: 'We produce high-quality visual and audio content that brings your brand’s unique story to life. We specialize in creating compelling assets that inspire and connect with your audience. Emblare is proud to lead the way in crafting video productions that resonate with audiences. We will help brands evolve their visual identity, and will be responsible for creating brand stories, content strategies, and all future visual assets.',
    features: ['Custom Solution', 'In-time Result', 'Unparalleled Flexibility', 'Sustainable Production'],
    color: '#F48024'
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <div className="container py-[100px]">Service not found</div>;
  }

  return (
    <div className="pt-[80px] min-h-screen">
      <div className="py-[100px] relative overflow-hidden bg-gradient-to-b from-transparent to-bg-primary" style={{ '--service-color': service.color }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[800px] mx-auto"
          >
            <span className="inline-block px-3 py-1.5 border border-[var(--service-color)] text-[var(--service-color)] rounded-full text-xs font-semibold mb-5 uppercase tracking-widest">Service</span>
            <h1 className="text-5xl md:text-[56px] mb-4 font-bold">{service.title}</h1>
            <p className="text-2xl text-text-secondary">{service.subtitle}</p>
          </motion.div>
        </div>
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-4/5 h-full bg-[radial-gradient(circle,var(--service-color)_0%,rgba(0,0,0,0)_70%)] opacity-15 blur-[80px] -z-10 pointer-events-none"></div>
      </div>

      <div className="container py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] mb-6 font-bold">Overview</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">{service.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 font-medium">
                  <CheckCircle size={20} color={service.color} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn btn-primary mt-10 inline-flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-square bg-bg-secondary rounded-[30px] border border-[var(--service-color)] relative overflow-hidden flex items-center justify-center" style={{ borderColor: service.color }}>
              <div className="relative w-[200px] h-[200px]">
                {/* Abstract visual representation */}
                <div className="absolute w-[150px] h-[150px] rounded-full top-0 left-0 opacity-50 blur-[20px] animate-float" style={{ background: service.color }}></div>
                <div className="absolute w-[120px] h-[120px] rounded-full bottom-0 right-0 border-2 animate-float-reverse" style={{ borderColor: service.color }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
