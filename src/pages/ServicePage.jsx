import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import { CheckCircle, ArrowRight, Sparkles, Zap, TrendingUp, MessageCircle, Users, Share2, Target, BarChart, Monitor, Video, Search, MousePointer, Play } from 'lucide-react';
import socialMediaImg from '../assets/service/social_media_marketing_1.jpg';
import digitalMarketingImg from '../assets/service/digital_marketing.jpg';
import webDesignImg from '../assets/service/web_design.jpg';
import editingProducingImg from '../assets/service/editing_producing.jpg';
import adsImg from '../assets/service/ads.png';
import seoImg from '../assets/service/seo.png';
import webImg from '../assets/service/web.png';
import editingImg from '../assets/service/editing.png';

const servicesData = {
  'social-media-marketing': {
    title: 'Social Media Marketing',
    subtitle: 'We don\'t just post. We ignite conversations.',
    description: 'In a world of infinite scroll, stopping the thumb is an art form. Emblare is proud to lead the way in crafting social narratives that resonate with audiences. We help brands evolve their digital voice, and will be responsible for creating brand campaigns, content strategies, and all future visual assets.',
    features: [
      { title: 'Viral Content Strategy', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop', desc: 'Data-backed content calendars designed to trigger algorithms and engagement.' },
      { title: 'Community Management', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop', desc: 'Building loyal tribes around your brand through active, authentic listening.' },
      { title: 'Influencer Partnerships', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop', desc: 'Connecting you with voices that matter to amplify your message authentically.' },
      { title: 'Real-time Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', desc: 'Live dashboards that track every like, share, and conversion for full transparency.' }
    ],
    color: '#E1306C',
    image: socialMediaImg,
    stats: [
      { value: '300%', label: 'Engagement Growth' },
      { value: '10M+', label: 'Impressions' },
      { value: '24/7', label: 'Community Monitoring' }
    ]
  },
  'online-ads': {
    title: 'Online Ads',
    subtitle: 'Stop spending. Start investing in growth.',
    description: 'We don\'t just run ads; we engineer revenue engines. By combining laser-focused targeting with high-converting creative, we ensure every dollar you spend brings back more. From Google Search to Instagram Reels, we put your brand in front of the people who are already looking for you.',
    features: [
      { title: 'Precision Targeting', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop', desc: 'Reaching the exact demographics that matter to your bottom line.' },
      { title: 'High-Converting Copy', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop', desc: 'Words that persuade, compel, and drive immediate action.' },
      { title: 'A/B Testing', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', desc: 'Continuous experimentation to find the winning formula.' },
      { title: 'Retargeting Campaigns', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop', desc: 'Bringing back lost visitors and turning them into loyal customers.' }
    ],
    color: '#4285F4',
    image: digitalMarketingImg,
    stats: [
      { value: '5x', label: 'Average ROAS' },
      { value: '-40%', label: 'Cost Per Acquisition' },
      { value: '100%', label: 'Transparent Reporting' }
    ]
  },
  'seo': {
    title: 'SEO',
    subtitle: 'Dominate search. Own your market.',
    description: 'Being on page 2 is like being invisible. We build robust, long-term SEO strategies that push your brand to the top of the results that matter. Through technical excellence, content authority, and strategic backlinks, we turn search engines into your most reliable source of leads.',
    features: [
      { title: 'Technical Audit', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop', desc: 'Fixing the hidden errors that are holding your rankings back.' },
      { title: 'Keyword Strategy', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop', desc: 'Targeting the high-intent terms your customers are actually searching for.' },
      { title: 'On-Page Optimization', image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1000&auto=format&fit=crop', desc: 'Crafting content that satisfies both users and algorithms.' },
      { title: 'Backlink Building', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop', desc: 'Earning authority through high-quality connections across the web.' }
    ],
    color: '#0F9D58',
    image: seoImg,
    stats: [
      { value: '#1', label: 'Page Rankings' },
      { value: '+150%', label: 'Organic Traffic' },
      { value: '90+', label: 'Domain Authority' }
    ]
  },
  'web-design': {
    title: 'Web Design & Development',
    subtitle: 'Digital experiences that leave a mark.',
    description: 'We build digital platforms that deeply engage users through intuitive design and seamless functionality. Our passion is creating immersive experiences that help your brand thrive in the digital landscape.',
    longDescription: 'Emblare is proud to lead the way in crafting digital platforms that resonate with audiences. We will help brands evolve their online presence, and will be responsible for creating brand experiences, websites, and all future digital assets.',
    video: '/videos/Web design.mp4',
    sections: [
      {
        title: 'Remarking Services',
        content: 'Our web development will help position brands to meet the challenges of the future, as it seeks to lead the industry in technological innovation and sustainable design practices to deliver long-lasting value for its clients.'
      },
      {
        title: 'Making for Users Friendly',
        content: 'Our web development will help position brands to meet the challenges of the future, as it seeks to lead the industry in technological innovation and sustainable design practices to deliver long-lasting value for its clients.'
      }
    ],
    additionalContent: 'For almost 50 years, development has been progressively building for a better future by leveraging international expertise with local intelligence. In that time, brands have delivered some of the world\'s prestigious campaigns and transformational online projects.\n\nOur web development will help position brands to meet the challenges of the future, as it seeks to lead the industry in technological innovation and sustainable design practices to deliver long-lasting value for its clients.',
    features: [
      { title: 'UX/UI Design', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop', desc: 'Interfaces that are as intuitive as they are beautiful.' },
      { title: 'Responsive Development', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop', desc: 'Flawless performance across every device and screen size.' },
      { title: 'Performance Optimization', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', desc: 'Lightning-fast load times that keep users engaged.' },
      { title: 'CMS Integration', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop', desc: 'Easy-to-manage content systems that put you in control.' }
    ],
    color: '#6366f1',
    image: webDesignImg,
    stats: [
      { value: '<1s', label: 'Load Time' },
      { value: '2x', label: 'Conversion Rate' },
      { value: '100%', label: 'Mobile Optimized' }
    ]
  },
  'editing-producing': {
    title: 'Editing & Production',
    subtitle: 'Stories that move. Visuals that inspire.',
    description: 'In the age of video, quality is the differentiator. We produce high-end visual and audio content that captures the essence of your brand. From cinematic commercials to snappy social clips, we handle the entire production pipeline to deliver assets that look like a million bucks.',
    features: [
      { title: 'Cinematic Storytelling', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop', desc: 'Narratives that connect emotionally and drive brand affinity.' },
      { title: 'Motion Graphics', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop', desc: 'Dynamic visuals that explain complex ideas simply.' },
      { title: 'Sound Design', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop', desc: 'Immersive audio that sets the perfect mood.' },
      { title: 'Color Grading', image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=1000&auto=format&fit=crop', desc: 'Professional polish that gives your footage a premium look.' }
    ],
    color: '#F48024',
    image: editingProducingImg,
    stats: [
      { value: '4K', label: 'Production Quality' },
      { value: '3x', label: 'Viewer Retention' },
      { value: '∞', label: 'Creative Possibilities' }
    ]
  }
};

// Enhanced layout for services with video/extended content
const EnhancedServiceLayout = ({ service, serviceId }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Hero Section - Split Layout with Video */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Video */}
        {service.video && (
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover scale-110"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={service.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          </motion.div>
        )}
        
        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="pt-[120px] pb-[60px] lg:py-0"
              >
                <motion.span 
                  className="text-accent-color font-bold tracking-[0.3em] uppercase text-sm mb-8 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Our Expertise
                </motion.span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight text-white">
                  {service.title.split(' ').map((word, i) => (
                    <motion.span 
                      key={i} 
                      className="inline-block mr-4"
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {service.subtitle}
                </motion.p>
                
                <motion.div 
                  className="mt-12 flex items-center gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Button to="/contact" className="bg-accent-color text-black px-10 py-5 font-bold text-lg hover:bg-white transition-all duration-300">
                    Start Project
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Floating Stats Removed */}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="w-[1px] h-20 bg-gradient-to-b from-accent-color to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Editorial Section - Image Left, Text Right */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Image Side */}
          <motion.div 
            className="relative h-[50vh] lg:h-auto overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img 
              src={service.features[0]?.image} 
              alt="Design Process"
              className="w-full h-full object-cover"
              initial={{ scale: 1.4 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <motion.div 
              className="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-black/80 to-transparent w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-accent-color text-sm tracking-[0.2em] uppercase">01</span>
              <h3 className="text-3xl font-bold text-white mt-2">{service.features[0]?.title}</h3>
            </motion.div>
          </motion.div>
          
          {/* Text Side */}
          <div className="flex items-center bg-[#fafafa] p-12 lg:p-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-[2px] bg-accent-color mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Crafting Digital<br />
                <span className="text-accent-color">Experiences</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {service.description}
              </motion.p>
              {service.longDescription && (
                <motion.p 
                  className="text-lg text-gray-500 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {service.longDescription}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-color text-sm tracking-[0.3em] uppercase mb-4 block">What We Deliver</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Our <span className="text-accent-color">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large Feature Card */}
            <motion.div 
              className="md:col-span-2 lg:col-span-2 relative h-[500px] overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={service.features[1]?.image} 
                alt={service.features[1]?.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-accent-color text-sm tracking-[0.2em] uppercase mb-3 block">Featured</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{service.features[1]?.title}</h3>
                <p className="text-gray-300 text-lg max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.features[1]?.desc}</p>
              </div>
            </motion.div>
            
            {/* Stacked Small Cards */}
            <div className="flex flex-col gap-4">
              {service.features.slice(2, 4).map((feature, i) => (
                <motion.div 
                  key={i}
                  className="relative h-[242px] overflow-hidden group"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Quote / Additional Content Section */}
      {service.additionalContent && (
        <section className="py-32 bg-white relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 text-[400px] font-black text-gray-50 leading-none select-none pointer-events-none"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            "
          </motion.div>
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <motion.span 
                      className="text-accent-color text-sm tracking-[0.3em] uppercase mb-4 block"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      The Evolution
                    </motion.span>
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Decades of<br />
                      <span className="text-accent-color">Progress</span>
                    </motion.h2>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  {service.additionalContent.split('\n\n').map((paragraph, index) => (
                    <motion.p 
                      key={index} 
                      className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 last:mb-0"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Premium */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--color-accent-color) 0%, transparent 50%)",
            backgroundSize: "100% 100%"
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent-color text-sm tracking-[0.3em] uppercase mb-6 block">Ready?</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95]">
              Let's Build<br />
              <span className="text-accent-color">Something Great</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Transform your digital presence with a website that captivates and converts.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button to="/contact" className="inline-flex items-center gap-4 bg-accent-color text-black px-16 py-6 font-bold text-xl hover:bg-white transition-all duration-300">
                Start Your Project
                <ArrowRight size={24} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Default layout for services without extended content
const DefaultServiceLayout = ({ service, serviceId }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Massive Typographic Hero */}
      <div className="pt-[150px] pb-[80px] container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl"
        >
          <span className="text-accent-color font-bold tracking-widest uppercase mb-6 block">Our Expertise</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter text-black">
            {service.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl leading-relaxed font-medium">
            {service.subtitle}
          </p>
        </motion.div>
      </div>

      {/* 2. Parallax Image Section */}
      <div className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {service.image ? (
            <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </div>

      {/* 3. Content Grid */}
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Title */}
          <div className="lg:col-span-4">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Approach</h2>
              <div className="w-20 h-2 bg-black"></div>
            </div>
          </div>
          
          {/* Scrollable Content */}
          <div className="lg:col-span-8">
            <p className="text-2xl leading-relaxed text-gray-800 mb-16 font-light">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {service.features.map((feature, i) => {
                const isObject = typeof feature === 'object';
                const title = isObject ? feature.title : feature;
                const desc = isObject ? feature.desc : 'Comprehensive solution designed for maximum impact.';
                const image = isObject ? feature.image : null;

                const getIcons = () => {
                  if (serviceId === 'online-ads') return [Target, MousePointer, BarChart, Users];
                  if (serviceId === 'seo') return [Search, TrendingUp, Monitor, Share2];
                  if (serviceId === 'web-design') return [Monitor, Zap, MousePointer, CheckCircle];
                  if (serviceId === 'editing-producing') return [Video, Sparkles, Monitor, Zap];
                  return [Zap, Users, Share2, TrendingUp];
                };
                
                const icons = getIcons();
                const Icon = icons[i % icons.length];
                
                return (
                  <motion.div 
                    key={i} 
                    className="relative overflow-hidden rounded-none bg-gray-50 h-[350px] flex flex-col justify-end group cursor-pointer"
                    style={{ '--service-color': service.color }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {image && (
                      <div className="absolute inset-0 z-0">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                      </div>
                    )}

                    <div className="relative z-10 p-8 transform transition-all duration-300 ease-out group-hover:-translate-y-2">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
                      <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out">
                        <p className="text-gray-300 text-sm font-medium mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          {desc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--service-color)] rounded-none transition-colors duration-300 ease-out pointer-events-none z-20"></div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-8">
              <Button to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-none font-bold text-xl hover:bg-gray-900 transition-all duration-300">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <div className="container py-[100px] text-center text-2xl font-bold">Service not found</div>;
  }

  // Use enhanced layout for services with video or extended content
  if (service.video || service.sections || service.longDescription) {
    return <EnhancedServiceLayout service={service} serviceId={serviceId} />;
  }

  // Use default layout for other services
  return <DefaultServiceLayout service={service} serviceId={serviceId} />;
};

export default ServicePage;
