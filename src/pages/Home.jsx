import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart, Video, Users, Target, Zap, Layers, Award, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(0,0,0,0)_70%)] rounded-full -z-10 blur-[60px]"></div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          <motion.div 
            className="max-w-[600px] mx-auto md:mx-0 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-[64px] leading-[1.1] font-extrabold mb-6 tracking-tighter">
              We have <span className="gradient-text">rare ideas</span> and <span className="gradient-text">real results</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-text-secondary mb-6 leading-relaxed">
              At Emblare, we believe every brand deserves to stand out as rare. Born from the words “Emblem” and “Rare”, our name reflects our mission: to create distinct identities, innovative strategies, and measurable growth for businesses that aspire to lead.
            </motion.p>
            <motion.p variants={itemVariants} className="text-base text-text-secondary mb-10 leading-relaxed opacity-80">
              We are more than an agency—we’re your partners in strategy, design, and digital transformation. From concept to execution, we deliver results that are both meaningful and lasting.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-5 justify-center md:justify-start">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/services/web-design" className="px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 bg-transparent border border-white/20 text-text-primary hover:border-text-primary hover:bg-white/5">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] md:h-[500px] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute rounded-full blur-[40px] opacity-60 w-[300px] h-[300px] bg-[#6366f1] top-[50px] right-[50px] animate-float"></div>
            <div className="absolute rounded-full blur-[40px] opacity-60 w-[250px] h-[250px] bg-[#a855f7] bottom-[50px] left-[50px] animate-float-reverse"></div>
            <div className="relative w-[380px] h-[240px] bg-white/3 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl -rotate-[5deg] transition-transform duration-300 hover:rotate-0 hover:scale-105">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="card-content">
                <div className="h-3 bg-white/10 rounded-full mb-3 w-3/4"></div>
                <div className="h-3 bg-white/10 rounded-full mb-3 w-1/2"></div>
                <div className="h-20 bg-white/5 rounded-xl mb-4"></div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  <div className="h-3 bg-white/10 rounded-full mb-3 w-3/5"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-10 border-y border-white/5 bg-bg-secondary/30 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">Strategy that drives growth</span>
              <span className="w-2 h-2 rounded-full bg-accent-color"></span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">Design that defines distinction</span>
              <span className="w-2 h-2 rounded-full bg-accent-color"></span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">Marketing that builds trust</span>
              <span className="w-2 h-2 rounded-full bg-accent-color"></span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">Technology that empowers brands</span>
              <span className="w-2 h-2 rounded-full bg-accent-color"></span>
            </div>
          ))}
        </div>
      </div>

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
                className="bg-bg-secondary p-10 rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-2.5 hover:border-accent-color hover:shadow-2xl"
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
                <div key={index} className="bg-bg-secondary p-6 rounded-2xl border border-white/5 text-center hover:border-accent-color/50 transition-colors">
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
            className="bg-bg-secondary border border-white/10 rounded-[30px] p-10 md:p-20 text-center relative overflow-hidden"
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
