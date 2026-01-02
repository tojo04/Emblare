import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart, Video, Users, Target, Zap, Layers, Award, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

import apolloLogo from '../assets/client/apollo.jpg';
import cloud360Logo from '../assets/client/cloud360.webp';
import flipkartLogo from '../assets/client/flipkart.png';
import indeedLogo from '../assets/client/indeed.png';
import pushpLogo from '../assets/client/pushp-masala.jpeg';
import mahiLogo from '../assets/client/saucy-mahi.png';
import tommyLogo from '../assets/client/tommy.jpeg';
import zomatoLogo from '../assets/client/zomato.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    { icon: <Users size={32} />, title: 'Social Media', desc: 'We craft strategies that fuel authentic connections. We love building communities and helping brands grow.', link: '/services/social-media-marketing' },
    { icon: <Target size={32} />, title: 'Online Ads', desc: 'We deliver targeted campaigns that maximize reach. We love creating impact and helping brands scale.', link: '/services/online-ads' },
    { icon: <BarChart size={32} />, title: 'SEO', desc: 'We design strategies that improve visibility online. We love driving growth and helping brands stand out.', link: '/services/seo' },
    { icon: <Globe size={32} />, title: 'Web Design & Development', desc: 'We build digital platforms that engage users deeply. We love designing experiences and helping brands thrive.', link: '/services/web-design' },
    { icon: <Video size={32} />, title: 'Editing and Production', desc: 'We create visuals that bring stories to life. We love producing content and helping brands inspire.', link: '/services/editing-producing' },
  ];

  const stats = [
    { value: '12+', label: 'Years of Experience' },
    { value: '150+', label: 'Successful Projects' },
    { value: '100+', label: 'Satisfied Customers' },
  ];

  const whyUsPoints = [
    'Deep Cross-Channel Integration',
    'Data-Driven Decision Making',
    'Industry-Specific Expertise',
    'Agile Campaign Management',
    'Full-Service Creative Studio',
    'Dedicated Client Success Team'
  ];

  const clients = [
    { name: 'Apollo Hospitals', logo: apolloLogo },
    { name: '360 Cloud', logo: cloud360Logo },
    { name: 'Flipkart', logo: flipkartLogo },
    { name: 'Indeed', logo: indeedLogo },
    { name: 'Pushp Brand Spices', logo: pushpLogo },
    { name: 'Mahi', logo: mahiLogo },
    { name: 'Zomato', logo: zomatoLogo },
    { name: 'Tommy Hilfiger', logo: tommyLogo }
  ];

  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_100%] -z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_100%)] -z-10"></div>
        
        <div className="container text-center z-10 pt-20 pb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 variants={itemVariants} className="text-6xl md:text-[90px] leading-[1] font-extrabold mb-16 tracking-tighter text-gray-900">
              We have <span className="gradient-text">rare ideas</span><br />and <span className="gradient-text">real results</span>.
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-20">
               <p className="text-text-secondary text-sm font-semibold uppercase tracking-widest mb-10">Trusted by designers from:</p>
               
               <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
                  <div className="flex whitespace-nowrap animate-marquee items-center">
                    {[...Array(4)].map((_, setIndex) => (
                      <div key={setIndex} className="flex items-center gap-12 md:gap-24 mx-10 shrink-0">
                        {clients.map((client, i) => (
                          <img 
                            key={i} 
                            src={client.logo} 
                            alt={client.name} 
                            className="h-8 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 shrink-0" 
                          />
                        ))}
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-5 justify-center">
              <Link to="/contact" className="btn btn-primary px-8 py-4 text-lg">
                Start Your Project
              </Link>
              <Link to="/services/web-design" className="px-8 py-4 rounded-full font-semibold cursor-pointer transition-all duration-300 bg-white border border-gray-200 text-text-primary hover:border-text-primary hover:bg-gray-50 text-lg shadow-sm">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center mb-[60px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[42px] mb-4 font-bold">What We Can Do for Our Clients</h2>
            <p className="text-text-secondary text-lg">Comprehensive solutions for the modern digital landscape.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-bg-secondary p-10 rounded-3xl border border-black/5 transition-all duration-300 hover:-translate-y-2.5 hover:border-accent-color hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-accent-color mb-6">{service.icon}</div>
                <h3 className="text-2xl mb-3 font-bold">{service.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="flex items-center gap-2 text-accent-color font-semibold text-sm">
                  VIEW DETAILS <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section bg-bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[42px] mb-6 font-bold">Why Us?</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                At Emblare, we don’t just deliver services — we deliver impact. Our approach is built on strategy, creativity, and technology working in sync to fuel growth and distinction for your brand.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {whyUsPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-color"></div>
                    <span className="text-text-primary font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-bg-secondary p-6 rounded-2xl border border-black/5 text-center hover:border-accent-color/50 transition-colors">
                  <h3 className="text-4xl font-bold text-accent-color mb-2">{stat.value}</h3>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Passionate Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-color font-semibold mb-2 block">Passionate About Building Rare Brands</span>
              <h2 className="text-[36px] mb-6 font-bold">We Love What We Do</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                At Emblare, we partner with ambitious businesses, blending creativity and innovation to craft distinct identities, growth strategies, and long-lasting value.
              </p>
              
              <h3 className="text-2xl mb-4 font-bold">Why Work With Us</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                If you ask our clients what it’s like working with Emblare, they’ll talk about how much we care about their success. For us, real relationships fuel real impact. We love shaping brands.
              </p>
            </motion.div>

            <motion.div
              className="bg-accent-gradient p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Award size={100} />
              </div>
              <div className="relative z-10">
                <div className="mb-6 text-white/80">
                  <Smile size={40} />
                </div>
                <p className="text-xl md:text-2xl font-medium text-white mb-8 italic">
                  “Partnering with Emblare transformed our digital presence. Their mix of strategy, design, and technology helped us scale faster than we imagined.”
                </p>
                <div>
                  <p className="font-bold text-white">Marketing Director</p>
                  <p className="text-white/70">Apollo Hospitals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="bg-bg-secondary border border-black/10 rounded-[30px] p-10 md:p-20 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-4 relative z-10 font-bold">Have Any Project on Your Mind?</h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 relative z-10 max-w-2xl mx-auto">
              Great! We’re excited to connect with you and bring your vision to life.
            </p>
            <Link to="/contact" className="btn btn-primary inline-block relative z-10">
              LET'S TALK
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
