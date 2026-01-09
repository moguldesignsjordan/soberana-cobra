import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, Sun, Wind, Heart, MapPin, Star, Menu, X, 
  ArrowRight, Play, CheckCircle, Mail, Instagram, Facebook, Quote, Send, Sparkles 
} from 'lucide-react';

// --- Components ---

// 1. The "Firefly" Particle Component for the Hero
const Fireflies = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const count = 15;
    const newFireflies = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setFireflies(newFireflies);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {fireflies.map((fly) => (
        <motion.div
          key={fly.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{ 
            duration: fly.duration, 
            repeat: Infinity, 
            delay: fly.delay, 
            ease: "linear" 
          }}
          className="absolute w-2 h-2 rounded-full bg-[#f0c755] blur-[2px]"
          style={{ left: `${fly.left}%` }}
        />
      ))}
    </div>
  );
};

const SoberanaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } }
  };

  const services = [
    {
      title: "Ancestor Honoring",
      desc: "Reconnect with your lineage and heal generational patterns.",
      link: "https://buy.stripe.com/5kQ8wPfZG6IJ9vh1sc5J600",
      icon: <Moon size={28} />,
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Tarot Reading",
      desc: "Divine guidance to illuminate your current path.",
      link: "https://buy.stripe.com/bJe14ndRyaYZ6j59YI5J601",
      icon: <Star size={28} />,
      img: "/tarot.webp"
    },
    {
      title: "Cellular Memory",
      desc: "Release trauma stored deep within your physical body.",
      link: "https://buy.stripe.com/fZu3cvaFmc33dLx2wg5J602",
      icon: <Wind size={28} />,
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Root Healing",
      desc: "Grounding work to stabilize your foundation and security.",
      link: "https://buy.stripe.com/6oU5kDeVC0klcHt7QA5J603",
      icon: <Heart size={28} />,
      img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "3-Month Coaching Client",
      text: "Soberana saw parts of me I didn't know existed. The ancestral clearing work shifted a heaviness I had carried for 20 years. I finally feel free.",
      stars: 5
    },
    {
      name: "Marcus Thorne",
      role: "Immersion Attendee",
      text: "The 5-day immersion in DR was not just a retreat; it was a rebirth. The Kambo ceremony was intense but exactly what my spirit needed.",
      stars: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Tarot Client",
      text: "Her intuition is razor sharp. She didn't just read the cards; she read my soul. The guidance I received was practical and deeply spiritual.",
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-[#fbfaf8] text-gray-900 overflow-x-hidden selection:bg-[#f0c755] selection:text-[#3a2e56]">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-lg bg-[#3a2e56]/80 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f0c755] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
              <img 
                src="./logo.png" 
                alt="Soberana Cobra Logo" 
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#f0c755] object-cover shadow-2xl transform group-hover:rotate-12 transition-transform duration-500"
                onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} 
              />
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#f0c755] hidden items-center justify-center font-serif font-bold text-[#f0c755] bg-[#3a2e56] text-xl shadow-lg">SC</div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white group-hover:text-[#f0c755] transition-colors">SOBERANA</span>
              <span className="text-xs md:text-sm tracking-[0.4em] text-gray-300 uppercase">Cobra</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-200 items-center">
            {['Philosophy', 'Coaching', 'Immersions', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#f0c755] transition-colors duration-300 uppercase tracking-widest text-xs lg:text-sm relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f0c755] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#services"
              className="px-6 py-3 rounded-full font-bold text-[#3a2e56] bg-[#f0c755] hover:bg-[#fff5d6] hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(240,199,85,0.6)]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} className="text-[#f0c755]" /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#2a1e40] border-t border-white/10 shadow-2xl flex flex-col p-6 gap-4 md:hidden overflow-hidden"
            >
              {['Philosophy', 'Coaching', 'Immersions', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-xl text-white font-serif hover:text-[#f0c755] py-2 border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Firefly Effects */}
        <Fireflies />

        {/* Background & Gradients */}
        <div className="absolute inset-0 z-0">
          {/* UPDATED GRADIENT: Fades to Deep Purple (#3a2e56) at bottom to match next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a2e56]/90 via-[#3a2e56]/30 to-[#3a2e56] z-10"></div>
          <img 
            src="/heroimg.png" 
            alt="Jungle River" 
            className="w-full h-full object-cover animate-pulse-slow scale-105"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 text-center text-white px-4 max-w-5xl pt-20"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-[#f0c755]/50 text-[#f0c755] text-sm font-bold tracking-[0.2em] mb-8 backdrop-blur-md uppercase"
          >
            <Sparkles size={16} /> Spiritual Life Coaching
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-xl">
            Awaken. <span className="italic font-light">Transform.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c755] via-[#fff5d6] to-[#f0c755] animate-shimmer bg-[length:200%_auto]">
              Reclaim Your Power.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            The path to sovereignty begins here. Reconnect with your deepest truth and honor the ancestors walking with you.
          </p>
          
          {/* Added Gold Glow behind buttons for pop */}
          <div className="relative inline-block">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#f0c755] blur-[80px] opacity-20 pointer-events-none"></div>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(240,199,85,0.4)] bg-[#f0c755] text-[#3a2e56] hover:bg-white transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, borderColor: '#fff' }}
                whileTap={{ scale: 0.95 }}
                href="#immersions"
                className="px-10 py-5 rounded-full font-bold text-lg border border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Play size={20} fill="currentColor" className="opacity-80"/> View Retreats
              </motion.a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Video / Intro Section */}
      <section className="py-24 px-6 bg-[#3a2e56] text-white relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f0c755] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              A Sacred Container <br/> <span className="text-[#f0c755] italic">for Evolution</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 font-light">
              Soberana Cobra offers more than just coaching; we offer a pathway home to yourself. Through <strong>NLP, Hypnosis, Somatic Exercises, and Guided Breathwork</strong>, 
              we guide you back to your sovereign self.
            </p>
            <ul className="space-y-4 mb-8">
              {['Ancestral Healing', 'Trauma Release', 'Spiritual Grounding'].map((item) => (
                <li key={item} className="flex items-center gap-4 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-[#f0c755]/20 flex items-center justify-center text-[#f0c755] group-hover:bg-[#f0c755] group-hover:text-[#3a2e56] transition-colors">
                    <CheckCircle size={18} />
                  </div>
                  <span className="text-xl font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group bg-black"
          >
            <div className="aspect-video w-full h-full relative">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <img 
                    src="/indiana.png" 
                    alt="Video Placeholder"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e56]/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-24 h-24 bg-[#f0c755]/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(240,199,85,0.6)] group-hover:scale-110 group-hover:bg-white transition duration-500 text-[#3a2e56]">
                      <Play size={48} fill="currentColor" />
                    </button>
                  </div>
                </div>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/-rRlZAPtx4Y?autoplay=1&rel=0" 
                  title="Why you are not yet Spiritual" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="coaching" className="py-32 px-6 bg-[#fbfaf8] relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f0c755] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-[#f0c755] font-bold tracking-widest uppercase mb-4 block">Offerings</span>
            <h2 className="text-5xl font-serif font-bold mb-6 text-[#3a2e56]">Coaching & Healing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Private sessions designed to align your spirit, mind, and body.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col border border-gray-100"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#3a2e56]/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full text-[#3a2e56] z-20 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-[#3a2e56]">{service.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed flex-1">{service.desc}</p>
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 bg-[#f8f8f8] rounded-2xl text-[#3a2e56] font-bold group-hover:bg-[#3a2e56] group-hover:text-[#f0c755] transition-all"
                  >
                    Book Now <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transformation Highlight - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#3a2e56] to-[#2a1e40] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden ring-4 ring-[#f0c755]/20"
          >
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#f0c755] rounded-full mix-blend-overlay filter blur-[80px] opacity-20 animate-pulse"></div>
             
             <div className="flex-1 z-10">
               <div className="flex items-center gap-2 mb-4 text-[#f0c755]">
                 <Star fill="currentColor" size={24} /> 
                 <span className="font-bold tracking-[0.2em] uppercase text-sm">Most Popular Path</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">3 Month Transformation</h3>
               <p className="text-purple-100 text-lg leading-relaxed opacity-90">
                 A dedicated mentorship program combining weekly coaching with a full immersion retreat. The complete path to sovereignty.
               </p>
             </div>
             <a 
                href="https://buy.stripe.com/4gMaEXaFm4AB9vh7QA5J607" 
                target="_blank" 
                rel="noopener noreferrer"
                className="z-10 px-10 py-5 bg-[#f0c755] text-[#3a2e56] rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(240,199,85,0.4)] whitespace-nowrap"
              >
                Start Transformation
              </a>
          </motion.div>
        </div>
      </section>

      {/* Immersions / Retreats Section */}
      <section id="immersions" className="py-32 px-6 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/kambu.jpeg')" }}>
        <div className="absolute inset-0 bg-[#2a1e40]/80 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#f0c755] to-white">Treasure Immersions</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Sacred Plant Journeys, Kambo, Hape, Tantra, and Cacao in the heart of the Dominican Republic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "3 Day Immersion",
                price: "Book Experience",
                features: ["Fasting & Detox", "Kambo & Hape", "Guided Breathwork", "Excursion Tours"],
                link: "https://buy.stripe.com/bJe28r6p6d7722P4Eo5J604",
                bg: "bg-emerald-900/60"
              },
              {
                title: "5 Day Immersion",
                price: "Book Experience",
                features: ["Deep Ancestral Healing", "Sacred Plant Journey", "Tantra & Massage", "Cacao Ceremonies"],
                link: "https://buy.stripe.com/9B6eVdbJq0klbDp8UE5J605",
                bg: "bg-purple-900/60"
              }
            ].map((retreat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`${retreat.bg} backdrop-blur-lg border border-white/20 p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Moon size={100} />
                </div>
                <h3 className="text-4xl font-serif font-bold mb-8 text-[#f0c755] relative z-10">{retreat.title}</h3>
                <ul className="space-y-6 mb-12 relative z-10">
                  {retreat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-lg font-light tracking-wide">
                      <div className="w-2 h-2 rounded-full bg-[#f0c755] mr-6 shadow-[0_0_10px_#f0c755]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={retreat.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-5 text-center rounded-2xl font-bold text-lg bg-white/10 hover:bg-[#f0c755] hover:text-[#3a2e56] transition-all duration-300 border border-[#f0c755]/30 relative z-10"
                >
                  {retreat.price}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fun & Floating */}
      <section className="py-32 px-6 bg-[#fbfaf8] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f0c755] blur-[80px] opacity-40"></div>
            <h2 className="text-4xl font-serif font-bold mb-4 text-[#3a2e56] relative z-10">Voices of Sovereignty</h2>
            <p className="text-gray-500 relative z-10">Stories from those who have walked the path.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((test, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -15, rotate: index % 2 === 0 ? 1 : -1 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl relative border border-gray-100 flex flex-col justify-between h-full"
              >
                <Quote size={60} className="text-[#f0c755]/10 absolute top-6 right-8 rotate-180" />
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} size={20} fill="#f0c755" stroke="none" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-8 text-lg font-light leading-relaxed">"{test.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3a2e56] text-[#f0c755] flex items-center justify-center font-bold text-xl font-serif">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3a2e56]">{test.name}</h4>
                    <span className="text-xs text-[#f0c755] font-bold uppercase tracking-wider">{test.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Cosmic */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#2a1e40]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#2a1e40] to-[#3a2e56]"></div>
        <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] bg-[#f0c755] rounded-full mix-blend-overlay filter blur-[150px] opacity-10 animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center p-12 border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-sm">
          <Mail size={56} className="text-[#f0c755] mx-auto mb-8 drop-shadow-[0_0_15px_rgba(240,199,85,0.8)]" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the Portal</h2>
          <p className="text-purple-200 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Receive weekly guidance on ancestral healing, retreat updates, and exclusive invitations to our online circles.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your spiritual email address" 
              className="flex-1 px-8 py-5 rounded-full bg-[#2a1e40]/80 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#f0c755] focus:ring-2 focus:ring-[#f0c755]/50 transition shadow-inner"
            />
            <button className="px-10 py-5 bg-[#f0c755] text-[#3a2e56] font-bold rounded-full hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(240,199,85,0.4)]">
              Subscribe <Send size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer - Enhanced Layout */}
      <footer id="contact" className="bg-[#1a122e] text-gray-300 py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f0c755] to-transparent opacity-30"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#f0c755] p-1 shadow-[0_0_20px_rgba(240,199,85,0.2)]">
                <img src="./logo.png" className="w-full h-full object-cover rounded-full" alt="SC"/>
              </div>
              <div>
                <h4 className="font-serif font-bold text-2xl text-white tracking-wide">SOBERANA COBRA</h4>
                <p className="text-[#f0c755] text-xs tracking-[0.2em] uppercase mt-1">Spiritual Life Coach</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-gray-400 font-light">
              Guiding you to reclaim your power through ancestral wisdom, somatic healing, and sacred immersions in the Dominican Republic.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f0c755] hover:text-[#3a2e56] hover:scale-110 transition-all border border-white/10">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#f0c755]"></span> Explore
            </h5>
            <ul className="space-y-4">
              {['Philosophy', 'Coaching Services', 'Retreat Immersions', 'About Me', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#f0c755] transition flex items-center gap-3 text-sm tracking-wide group">
                    <span className="w-1.5 h-1.5 bg-[#f0c755] rounded-full opacity-50 group-hover:scale-150 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-serif font-bold text-xl mb-8 flex items-center gap-2">
               <span className="w-8 h-[2px] bg-[#f0c755]"></span> Sacred Offerings
            </h5>
            <ul className="space-y-4">
              {['Ancestor Honoring', 'Tarot Readings', 'Cellular Memory', 'Root Healing', '5-Day Immersion'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#f0c755] transition text-sm tracking-wide block hover:translate-x-2 transition-transform">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-serif font-bold text-xl mb-8 flex items-center gap-2">
               <span className="w-8 h-[2px] bg-[#f0c755]"></span> Visit Us
            </h5>
            <div className="space-y-6 text-sm text-gray-400 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#f0c755] mt-1 shrink-0" size={20} />
                <p>North Coast Treasure Tour<br />Dominican Republic</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#f0c755] shrink-0" size={20} />
                <a href="mailto:info@soberanacobra.com" className="hover:text-white transition">info@soberanacobra.com</a>
              </div>
              
              <div className="pt-6">
                <a 
                  href="#services" 
                  className="inline-block w-full text-center px-6 py-4 bg-[#3a2e56] border border-[#f0c755]/50 text-[#f0c755] font-bold rounded-xl hover:bg-[#f0c755] hover:text-[#3a2e56] transition-all shadow-lg"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-medium tracking-wider">
          <p>&copy; {new Date().getFullYear()} Soberana Cobra. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoberanaLanding;