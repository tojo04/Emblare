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

import iconSocial from '../assets/icons/feature-icon1-1.svg';
import iconAds from '../assets/icons/feature-icon1-2.svg';
import iconSEO from '../assets/icons/feature-icon1-3.svg';
import iconWeb from '../assets/icons/feature-icon1-4.svg';
import iconEdit from '../assets/icons/feature-icon1-5.svg';

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
    { icon: iconSocial, title: 'Social Media', desc: 'We craft strategies that fuel authentic connections. We love building communities and helping brands grow.', link: '/services/social-media-marketing' },
    { icon: iconAds, title: 'Online Ads', desc: 'We deliver targeted campaigns that maximize reach. We love creating impact and helping brands scale.', link: '/services/online-ads' },
    { icon: iconSEO, title: 'SEO', desc: 'We design strategies that improve visibility online. We love driving growth and helping brands stand out.', link: '/services/seo' },
    { icon: iconWeb, title: 'Web Design & Development', desc: 'We build digital platforms that engage users deeply. We love designing experiences and helping brands thrive.', link: '/services/web-design' },
    { icon: iconEdit, title: 'Editing and Production', desc: 'We create visuals that bring stories to life. We love producing content and helping brands inspire.', link: '/services/editing-producing' },
  ];

  const stats = [
    { value: '12+', label: 'Years of Experience' },
    { value: '150+', label: 'Successful Projects' },
    { value: '100+', label: 'Satisfied Customers' },
  ];

  const whyUsFeatures = [
    { icon: <Layers size={28} />, title: 'Deep Cross-Channel Integration', desc: 'Seamlessly connecting every touchpoint for a unified brand experience.' },
    { icon: <BarChart size={28} />, title: 'Data-Driven Decision Making', desc: 'Strategies backed by real analytics to ensure measurable growth.' },
    { icon: <Target size={28} />, title: 'Industry-Specific Expertise', desc: 'Tailored solutions designed specifically for your market niche.' },
    { icon: <Zap size={28} />, title: 'Agile Campaign Management', desc: 'Quick pivots and optimizations to maximize impact in real-time.' },
    { icon: <Award size={28} />, title: 'Full-Service Creative Studio', desc: 'Design that captures attention and tells your unique story.' },
    { icon: <Users size={28} />, title: 'Dedicated Client Success Team', desc: 'We are with you every step of the way, ensuring your goals are met.' }
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

            <motion.div variants={itemVariants} className="flex justify-center">
              <Link to="/contact" className="btn btn-primary px-12 py-5 text-xl font-bold tracking-wide shadow-lg hover:shadow-xl transform transition-all duration-300">
                Let's Create Something Rare
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-gray-900">
                At Emblare, <span className="text-accent-color">we believe every brand deserves to stand out as rare.</span>
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Born from the words "Emblem" and "Rare", our name reflects our mission: to create distinct identities, innovative strategies, and measurable growth for businesses that aspire to lead.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                We are more than an agency—we're your partners in strategy, design, and digital transformation. From concept to execution, we deliver results that are both meaningful and lasting.
              </p>
            </motion.div>
          </div>
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

          <div className="flex flex-wrap justify-center gap-[30px]">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] bg-bg-secondary p-10 rounded-3xl border border-black/5 transition-all duration-300 hover:-translate-y-2.5 hover:border-accent-color hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
                </div>
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
      <section className="section bg-bg-secondary relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-color/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-color/5 rounded-full blur-3xl"></div>
         </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-color font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              The Emblare Difference
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Partner With Us?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg"
            >
              We don’t just deliver services — we deliver impact. Our approach is built on strategy, creativity, and technology working in sync.
            </motion.p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <h3 className="text-5xl font-bold text-gray-900 mb-2 group-hover:text-accent-color transition-colors">{stat.value}</h3>
                <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.05) }}
                className="bg-white p-8 rounded-3xl border border-black/5 hover:border-accent-color hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg-secondary flex items-center justify-center text-black mb-6 group-hover:bg-accent-color transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passionate Section */}
      <section className="w-full bg-accent-color py-20 lg:py-32 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
            <span className="text-[200px] font-black leading-none whitespace-nowrap absolute -top-10 -left-10">RARE</span>
            <span className="text-[200px] font-black leading-none whitespace-nowrap absolute bottom-0 right-0">IDEAS</span>
        </div>

        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tighter">
                Passionate About Building Rare Brands
              </h2>
              <h3 className="text-2xl font-bold text-black mb-6">We Love What We Do</h3>
              <p className="text-black/80 text-lg mb-8 leading-relaxed font-medium max-w-xl">
                At Emblare, we partner with ambitious businesses, blending creativity and innovation to craft distinct identities, growth strategies, and long-lasting value.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-black">Why Work With Us</h4>
                <p className="text-black/80 text-lg leading-relaxed max-w-xl">
                  If you ask our clients what it’s like working with Emblare, they’ll talk about how much we care about their success. For us, real relationships fuel real impact. We love shaping brands.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative h-[400px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80" 
                alt="Creative Team at Work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
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
