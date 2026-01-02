import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles, Zap, TrendingUp, MessageCircle, Users, Share2, Target, BarChart, Monitor, Video, Search, MousePointer } from 'lucide-react';
import socialMediaImg from '../assets/service/social_media_marketing_1.jpg';
import adsImg from '../assets/service/ads.png';
import seoImg from '../assets/service/seo.png';
import webImg from '../assets/service/web.png';
import editingImg from '../assets/service/editing.png';

const servicesData = {
  'social-media-marketing': {
    title: 'Social Media Marketing',
    subtitle: 'We don’t just post. We ignite conversations.',
    description: 'In a world of infinite scroll, stopping the thumb is an art form. We craft social narratives that don’t just reach audiences—they resonate, engage, and convert. From viral-ready content to community-building strategies, we turn your brand into a living, breathing entity that people actually want to follow.',
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
    description: 'We don’t just run ads; we engineer revenue engines. By combining laser-focused targeting with high-converting creative, we ensure every dollar you spend brings back more. From Google Search to Instagram Reels, we put your brand in front of the people who are already looking for you.',
    features: [
      { title: 'Precision Targeting', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop', desc: 'Reaching the exact demographics that matter to your bottom line.' },
      { title: 'High-Converting Copy', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop', desc: 'Words that persuade, compel, and drive immediate action.' },
      { title: 'A/B Testing', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', desc: 'Continuous experimentation to find the winning formula.' },
      { title: 'Retargeting Campaigns', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop', desc: 'Bringing back lost visitors and turning them into loyal customers.' }
    ],
    color: '#4285F4',
    image: adsImg,
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
    description: 'Your website is your 24/7 flagship store. We build digital platforms that don’t just look stunning but perform flawlessly. Blending intuitive UX with cutting-edge UI, we create immersive journeys that guide visitors from "just browsing" to "shut up and take my money."',
    features: [
      { title: 'UX/UI Design', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop', desc: 'Interfaces that are as intuitive as they are beautiful.' },
      { title: 'Responsive Development', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop', desc: 'Flawless performance across every device and screen size.' },
      { title: 'Performance Optimization', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', desc: 'Lightning-fast load times that keep users engaged.' },
      { title: 'CMS Integration', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop', desc: 'Easy-to-manage content systems that put you in control.' }
    ],
    color: '#6366f1',
    image: webImg,
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
    image: editingImg,
    stats: [
      { value: '4K', label: 'Production Quality' },
      { value: '3x', label: 'Viewer Retention' },
      { value: '∞', label: 'Creative Possibilities' }
    ]
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <div className="container py-[100px] text-center text-2xl font-bold">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Massive Typographic Hero */}
      <div className="pt-[150px] pb-[80px] container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl"
        >
           <span className="text-[var(--service-color)] font-bold tracking-widest uppercase mb-6 block" style={{ '--service-color': service.color }}>Our Expertise</span>
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
               <div className="sticky top-32">
                  <h2 className="text-4xl font-bold mb-6">The Approach</h2>
                  <div className="w-20 h-2 bg-[var(--service-color)]" style={{ '--service-color': service.color }}></div>
               </div>
            </div>
            
            {/* Scrollable Content */}
            <div className="lg:col-span-8">
               <p className="text-2xl leading-relaxed text-gray-800 mb-16 font-light">
                  {service.description}
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {service.features.map((feature, i) => {
                     // Handle both string features (legacy) and object features (new)
                     const isObject = typeof feature === 'object';
                     const title = isObject ? feature.title : feature;
                     const desc = isObject ? feature.desc : 'Comprehensive solution designed for maximum impact.';
                     const image = isObject ? feature.image : null;

                     // Dynamic Icon Selection based on service type
                     const getIcons = () => {
                        if (serviceId === 'online-ads') return [Target, MousePointer, BarChart, Users];
                        if (serviceId === 'seo') return [Search, TrendingUp, Monitor, Share2];
                        if (serviceId === 'web-design') return [Monitor, Zap, MousePointer, CheckCircle];
                        if (serviceId === 'editing-producing') return [Video, Sparkles, Monitor, Zap];
                        return [Zap, Users, Share2, TrendingUp]; // Default (Social Media)
                     };
                     
                     const icons = getIcons();
                     const Icon = icons[i % icons.length];
                     
                     return (
                        <motion.div 
                           key={i} 
                           className="relative overflow-hidden rounded-[30px] bg-gray-50 h-[350px] flex flex-col justify-end group cursor-pointer"
                           style={{ '--service-color': service.color }}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                        >
                           {/* Background Image with Zoom Effect */}
                           {image && (
                              <div className="absolute inset-0 z-0">
                                 <img 
                                    src={image} 
                                    alt={title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                              </div>
                           )}

                           {/* Content Overlay */}
                           <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20 group-hover:bg-[var(--service-color)] group-hover:border-[var(--service-color)] transition-colors duration-300">
                                 <Icon size={24} />
                              </div>
                              
                              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                 {title}
                              </h3>
                              
                              <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                                 <p className="text-gray-300 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {desc}
                                 </p>
                              </div>
                           </div>

                           {/* Hover Border */}
                           <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--service-color)] rounded-[30px] transition-colors duration-500 pointer-events-none z-20"></div>
                        </motion.div>
                     );
                  })}
               </div>

               {/* Stats Row */}
               {service.stats && (
                  <div className="bg-black text-white p-12 rounded-[40px] grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                     {service.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                           <div className="text-4xl font-bold text-[var(--service-color)] mb-2" style={{ '--service-color': service.color }}>{stat.value}</div>
                           <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               )}
               
               <div className="mt-8">
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[var(--service-color)] hover:text-black transition-all duration-300 group" style={{ '--service-color': service.color }}>
                     Start Your Project
                     <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ServicePage;
