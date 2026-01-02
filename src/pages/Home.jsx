import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

      {/* Why Us Section - Sticky Card Stack */}
      <section className="bg-[#050505] relative">
        
        {/* Intro Header */}
        <div className="container py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-accent-color font-bold tracking-wider uppercase text-sm mb-4 block">The Emblare Difference</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9]">
              Why We Are <span className="text-accent-color">Rare.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mt-8 max-w-2xl leading-relaxed">
              Most agencies follow a playbook. We rewrite it. Here is how we build brands that dominate.
            </p>
          </motion.div>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative w-full">
          
          {/* Card 1: Strategy */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              <div className="order-2 lg:order-1">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                    <Target size={40} className="text-accent-color" />
                  </div>
                  <h3 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
                    We Don't <br/><span className="text-gray-700">Guess.</span>
                  </h3>
                  <p className="text-gray-400 text-xl md:text-2xl max-w-xl leading-relaxed">
                    Hope is not a strategy. We use deep data analytics and market intelligence to build roadmaps that eliminate risk and guarantee growth.
                  </p>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 0.8 }}
                   className="relative w-full max-w-md aspect-square bg-gradient-to-br from-accent-color/20 to-transparent rounded-full blur-3xl"
                 ></motion.div>
                 <motion.div 
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="absolute w-full max-w-lg"
                 >
                    {/* Abstract Chart Visualization */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl">
                      <div className="flex items-end gap-4 h-64">
                        {[40, 65, 45, 80, 55, 95].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`flex-1 rounded-t-lg ${i === 5 ? 'bg-accent-color' : 'bg-white/20'}`}
                          />
                        ))}
                      </div>
                    </div>
                 </motion.div>
              </div>
            </div>
          </div>

          {/* Card 2: Creativity */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-accent-color text-black overflow-hidden">
            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              <div className="order-2 lg:order-1">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Zap size={40} className="text-black" />
                  </div>
                  <h3 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tighter">
                    We Don't <br/><span className="text-black/30">Blend In.</span>
                  </h3>
                  <p className="text-black/80 text-xl md:text-2xl max-w-xl leading-relaxed font-medium">
                    Safe is risky. In a crowded world, the only way to survive is to stand out. We create radical brand identities that refuse to be ignored.
                  </p>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center relative">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-[500px] h-[500px] border-[2px] border-black/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                 >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-accent-color px-4 py-1 rounded-full font-bold">RARE</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black text-accent-color px-4 py-1 rounded-full font-bold">BOLD</div>
                 </motion.div>
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 0.5 }}
                   className="relative z-10"
                 >
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" alt="Art" className="w-80 h-96 object-cover rounded-[40px] rotate-[-6deg] shadow-2xl border-4 border-black" />
                 </motion.div>
              </div>
            </div>
          </div>

          {/* Card 3: Results */}
          <div className="sticky top-0 h-screen flex items-center justify-center bg-white text-black overflow-hidden">
            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              <div className="order-2 lg:order-1">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Award size={40} className="text-accent-color" />
                  </div>
                  <h3 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tighter">
                    We Don't <br/><span className="text-gray-300">Stop.</span>
                  </h3>
                  <p className="text-gray-600 text-xl md:text-2xl max-w-xl leading-relaxed">
                    Launch is just day one. We obsessively monitor, test, and optimize every campaign to ensure your ROI keeps climbing.
                  </p>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                 <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gray-100 p-8 rounded-[30px] w-48 h-64 flex flex-col justify-between"
                    >
                       <span className="text-4xl font-bold">2x</span>
                       <span className="text-gray-500">Revenue Growth</span>
                    </motion.div>
                    <motion.div 
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-black text-white p-8 rounded-[30px] w-48 h-64 flex flex-col justify-between mt-12"
                    >
                       <span className="text-4xl font-bold text-accent-color">#1</span>
                       <span className="text-gray-400">Market Position</span>
                    </motion.div>
                 </div>
              </div>
            </div>
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
