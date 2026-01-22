import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Terminal,
  BookOpen,
  ShieldCheck,
  Package,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Layers,
  Zap,
  PlayCircle,
  X,
  Menu,
  Info,
  ChevronDown,
  Laptop,
  Facebook,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Link, animateScroll as scroll } from 'react-scroll';

// --- Components ---

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Gap', target: 'need' },
    { name: 'Overview', target: 'about' },
    { name: 'Target Audience', target: 'users' },
    { name: 'Our Plans', target: 'pricing' },
    { name: 'FAQs', target: 'features' },
    { name: 'Contact us', target: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => scroll.scrollToTop()}>
          <span className="text-2xl md:text-3xl font-bold tracking-tight leading-none">
            <span className="text-white">Gen-Alpha</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Portable Lab
            </span>
          </span>

          <p className="text-[10px] font-bold uppercase tracking-[0.55em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
  One Lab<span className="-ml-[0.55em]">.</span> Infinite Possibilities<span className="-ml-[0.55em]">.</span>
</p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.name === 'Contact us' ? (
              <button
                key={link.target}
                onClick={onOpenModal}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 cursor-pointer transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0f172a] p-6 flex flex-col gap-4 border-b border-slate-800 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              link.name === 'Contact us' ? (
                <button
                  key={link.target}
                  onClick={() => { onOpenModal(); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-slate-300 hover:text-blue-400 text-left"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.target}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              )
            ))}
            {/* Demo button removed as per request */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
};

const Modal = ({ isOpen, onClose, initialType = 'demo' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-[#0f172a] border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-slate-400 mb-8">Our team reviews every request before reaching out.</p>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Request submitted! Our team will contact you soon."); onClose(); }}>
          {/* Section A & B: Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
              <input required type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Role / Designation</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all">
                <option>Student</option>
                <option>Parent</option>
                <option>School</option>
                <option>College</option>
                <option>Government</option>
                <option>CSR Partner</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
              <input required type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number</label>
              <input required type="tel" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="+91 XXXX-XXXXXX" />
            </div>
          </div>

          {/* Section B: Org */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Organization Name</label>
              <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="School/College Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">City</label>
              <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="Bangalore" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">State</label>
              <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="Karnataka" />
            </div>
          </div>

          {/* Section G: Message */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Problem you are trying to solve / Additional Notes</label>
            <textarea rows="3" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="Tell us more about your requirements..."></textarea>
          </div>



          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-900/20 active:scale-[0.98]">
            SUBMIT
          </button>
        </form>
      </motion.div>
      <br></br>
    </div>
  );
};

const ImageModal = ({ isOpen, onClose, imageData }) => {
  if (!isOpen || !imageData) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-[#0f172a] border border-slate-700 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full backdrop-blur-sm">
          <X size={20} />
        </button>

        <img src={imageData.src} alt={imageData.title} className="w-full h-64 object-cover" />

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3 text-blue-400">{imageData.title}</h3>
          <p className="text-slate-300 leading-relaxed">{imageData.info}</p>
        </div>
      </motion.div>
    </div>
  );
};

const ImageSlider = ({ customImages, aspectRatio = "aspect-[4/3]", showOverlay = true }) => {
  const defaultImages = [
    { src: "/assets/closedcase.png", title: "Rugged Portability", info: "Military-grade enclosure designed for safe transport between classrooms and remote learning environments." },
    { src: "/assets/slide1.png", title: "All-in-One Integration", info: "Seamlessly combines a high-performance tablet, full breadboard, and tactile keyboard for a complete engineering experience." },
    { src: "/assets/caseslide3.png", title: "Intelligent Learning Interface", info: "Features a sophisticated digital overlay for real-time circuit visualization and experiment guidance." },
    { src: "/assets/studentslide2.png", title: "Collaborative Discovery", info: "Optimized for teamwork, allowing students to build, test, and innovate on real-world electronics projects together." }
  ];

  const images = customImages || defaultImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

      <div className={`relative w-full ${aspectRatio} rounded-3xl overflow-hidden border border-slate-800 shadow-2xl cursor-pointer`} onClick={() => setSelectedImage(images[currentIndex])}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
            alt="Product View"
          />
        </AnimatePresence>

        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
            <div className="text-white">
              <h4 className="text-xl font-bold mt-2">{images[currentIndex].title}</h4>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            imageData={selectedImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const SpotlightCarousel = ({ images, speed = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, speed);
    return () => clearInterval(timer);
  }, [speed, images.length]);

  return (
    <div className="relative w-full py-16 px-4 group">
      
      {/* Carousel Container */}
      <div className="relative h-[300px] md:h-[420px] flex items-center justify-center">
        
        {/* Left Button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:left-10 z-50 p-3 bg-slate-900/50 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-all border border-slate-700 hover:border-blue-500 shadow-lg active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 md:right-10 z-50 p-3 bg-slate-900/50 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-all border border-slate-700 hover:border-blue-500 shadow-lg active:scale-90"
        >
          <ChevronRight size={24} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          {images.map((img, idx) => {
            let offset = idx - currentIndex;
            // Circular Logic
            if (offset < -images.length / 2) offset += images.length;
            if (offset > images.length / 2) offset -= images.length;

            const isActive = offset === 0;
            const isSide = Math.abs(offset) === 1;

            // Don't render cards that are far off-screen to save resources
            if (Math.abs(offset) > 2) return null; 

            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  x: offset * (window.innerWidth < 768 ? 220 : 420), // Position
                  scale: isActive ? 1.1 : 0.85, // Scale
                  opacity: isActive ? 1 : (isSide ? 0.6 : 0), // Opacity
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300, // Higher stiffness = faster snap
                  damping: 30,    // Higher damping = less wobble
                  mass: 0.8       // Lighter mass = faster movement
                }}
                className="absolute w-[260px] md:w-[500px] aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl cursor-pointer bg-slate-900 will-change-transform"
                onClick={() => {
                    if (offset === 1) nextSlide();
                    if (offset === -1) prevSlide();
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Text Overlay */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 text-left"
                >
                  <h4 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2 drop-shadow-md">
                    {img.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-200 line-clamp-2 leading-relaxed drop-shadow-sm">
                    {img.info}
                  </p>
                </motion.div>

                {/* Active Glow Border */}
                <motion.div 
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 border-2 border-blue-500/50 rounded-[32px] pointer-events-none" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Sections ---

const Hero = ({ onOpenModal }) => (
  // 1. INCREASED top padding (pt-32 -> pt-48) to create more space below the header
  <section id="hero" className="min-h-[100vh] flex flex-col justify-center pt-32 pb-20 relative overflow-hidden">
    {/* Glow Effects */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none"></div>

    <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Left Side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center" 
      >
        <div className="inline-block">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Gen-Alpha </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Portable Lab
            </span>
          </h1>
          
          <p className="mt-2 mb-6 text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 tracking-[0.2em]">
            ONE LAB<span className="-ml-[0.2em]">.</span> INFINITE POSSIBILITIES<span className="-ml-[0.2em]">.</span>
          </p>
        </div>

        <p className="mt-4 text-lg text-slate-400 mb-6 max-w-xl leading-relaxed">
          An all-in-one Electronics learning kit and portable lab for students from Class 6 to Engineering 2nd year.
          Students learn electronics, coding, and IoT by building real circuits.
        </p>

        <div className="flex items-center gap-3 text-slate-500 text-sm font-medium mb-8">
          <Package size={18} className="text-blue-500" />
          <span>Includes all required sensors, wires, and components.</span>
        </div>

        <div className="flex flex-wrap gap-4 mb-2">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2"
          >
            Get In Touch <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative md:h-full"
      >
        <div className="relative group md:h-full w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <img 
            src="/assets/student_using_kit_v2.jpg" 
            alt="Student using kit" 
            className="relative w-full md:h-full object-cover rounded-3xl shadow-2xl border border-slate-700 group-hover:scale-[1.005] transition-transform duration-500" 
          />
        </div>
      </motion.div>
    </div>

    {/* Horizontal Strip */}
    {/* 2. REDUCED top margin (mt-20 -> mt-8) to pull slider closer to the hero section */}
    <div className="container -mt-32 relative z-10">
      <div className="w-full mx-auto">
        <SpotlightCarousel
          speed={4000}
          images={[
            { src: "/assets/case.png", title: "Rugged Portability", info: "The lab is enclosed in a durable, military-grade case, making it easy to carry between classrooms or homes safely." },
            { src: "/assets/closedcase.png", title: "Safe Transport", info: "Ruggedized exterior protects delicate sensors and components during travel." },
            { src: "/assets/fullbox.png", title: "All-in-One System", info: "A complete integration of a high-performance tablet, breadboard, and essential power modules in a single unit." },
            { src: "/assets/slide1.png", title: "Tactile Learning", info: "Features a physical keyboard and breadboard for real hands-on engineering experience." },
            { src: "/assets/caseslide3.png", title: "Intelligent Interface", info: "Features a digital overlay for real-time circuit visualization and experiment guidance." },
            { src: "/assets/studentslide2.png", title: "Collaborative Discovery", info: "Optimized for teamwork, allowing students to innovate on real-world electronics projects together." }
          ]}
        />
      </div>
    </div>
  </section>
);

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section-padding bg-slate-900/30 mt-20">
      <br></br>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Overview</h2>
          <p className="text-slate-400">
            Gen-Alpha Portable Lab combines hardware, software, learning content, and accessories into one portable unit, removing the need for a traditional electronics lab setup.
          </p>

          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors inline-flex items-center gap-2"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE: Static List of 4 Cards */}
          <div className="space-y-2">
            
            {/* Card 1: Curriculum-Aligned */}
            <div className="glass-card flex gap-3 p-3 border-l-4 border-l-emerald-500">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <BookOpen className="text-emerald-400" size={16} />
              </div>
              <div>
                <h4 className="text-base font-bold mb-0.5">Curriculum-Aligned</h4>
                <p className="text-xs text-slate-400 leading-snug">Step-by-step guidance for 100+ experiments ranging from basic circuits to advanced robotics and IoT.</p>
              </div>
            </div>

            {/* Card 2: Modular & Scalable */}
            <div className="glass-card flex gap-3 p-3 border-l-4 border-l-cyan-500">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Cpu className="text-cyan-400" size={16} />
              </div>
              <div>
                <h4 className="text-base font-bold mb-0.5">Modular & Scalable</h4>
                <p className="text-xs text-slate-400 leading-snug">A future-proof design that allows students to add new sensors and advanced modules as their skills progress.</p>
              </div>
            </div>

            {/* Card 3: Portable Learning Studio */}
            <div className="glass-card flex gap-3 p-3 border-l-4 border-l-blue-500">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Laptop className="text-blue-400" size={16} />
              </div>
              <div>
                <h4 className="text-base font-bold mb-0.5">Portable Learning Studio</h4>
                <p className="text-xs text-slate-400 leading-snug">Transform any desk into a high-tech innovation lab without requiring expensive, fixed infrastructure.</p>
              </div>
            </div>

            {/* Card 4: Safety First Design */}
            <div className="glass-card flex gap-3 p-3 border-l-4 border-l-purple-500">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <ShieldCheck className="text-purple-400" size={16} />
              </div>
              <div>
                <h4 className="text-base font-bold mb-0.5">Safety First Design</h4>
                <p className="text-xs text-slate-400 leading-snug">A pin-based, solder-free architecture ensures a safe and accessible learning environment for all ages.</p>
              </div>
            </div>
            
            {/* REMOVED: Error Detection card from here */}

          </div>

          {/* RIGHT SIDE: Image or Expanded Content */}
          <div>
            {!isExpanded && <ImageSlider />}

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  {/* Header Section */}
                  <div className="mb-3 px-1">
                    <h3 className="text-lg font-bold mb-1 text-white">What's Inside</h3>
                    <p className="text-xs text-slate-400 leading-snug">
                      The lab integrates a complete electronics and computing stack in one platform, providing everything students need for comprehensive hands-on learning.
                    </p>
                  </div>

                  {/* Card 1: Core Electronics */}
                  <div className="glass-card p-3 border-l-4 border-l-blue-500">
                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Cpu className="text-blue-400" size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-0.5 text-white">Core Electronics</h4>
                        <p className="text-xs text-slate-400 leading-snug">
                          IC-555 timers, Arduino, Raspberry Pi, breadboards, digital multimeter/oscilloscope modules, and a wide range of sensors and actuators.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Coding & IoT */}
                  <div className="glass-card p-3 border-l-4 border-l-purple-500">
                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Terminal className="text-purple-400" size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-0.5 text-white">Coding & IoT Capability</h4>
                        <p className="text-xs text-slate-400 leading-snug">
                          Supports programming, IoT experiments, and mini web-server projects using a pre-configured Raspberry Pi environment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Why It Matters */}
                  <div className="glass-card p-3 border-l-4 border-l-green-500">
                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Zap className="text-green-400" size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-0.5 text-white">Why It Matters</h4>
                        <p className="text-xs text-slate-400 leading-snug">
                          The Gen-Alpha Portable Lab replaces fragmented kits and expensive labs with a single, affordable, scalable solution for institutions, CSR programs, and educators.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ADDED: Error-Detection Card (Moved to Right Side) */}
                  <div className="glass-card p-3 border-l-4 border-l-yellow-500">
                    <div className="flex gap-3 items-start">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <ShieldCheck className="text-yellow-400" size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-0.5 text-white">Error-Detection & Guided Learning</h4>
                        <p className="text-xs text-slate-400 leading-snug">
                          Intelligent error-detection that helps students identify wiring or logic mistakes in real time.
                        </p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

const Statistics = () => (
  <section id="need" className="section-padding -mt-24 relative z-20">
    <br></br>
    <div className="container">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">Problems with current system?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {/* Card 1 */}
        <div className="glass-card text-center p-6 border-b-4 border-b-red-600/50">
          <div className="text-4xl font-black text-red-500 mb-3">
            <span className="text-2xl font-bold align-baseline mr-1">only</span>
            57%
          </div>
          {/* Increased to text-lg */}
          <h4 className="text-lg font-bold mb-2">Schools with Computers</h4>
          {/* Increased to text-sm */}
          <p className="text-sm text-slate-400">Basic digital literacy is improving, but practical labs lag behind.</p>
        </div>

        {/* Card 2 */}
        <div className="glass-card text-center p-6 border-b-4 border-b-red-600/50">
          <div className="text-4xl font-black text-red-500 mb-3">
            <span className="text-2xl font-bold align-baseline mr-1">only</span>
            54%
          </div>
          {/* Increased to text-lg */}
          <h4 className="text-lg font-bold mb-2">Schools with Internet</h4>
          {/* Increased to text-sm */}
          <p className="text-sm text-slate-400">Connectivity is growing, but experimental learning needs local power.</p>
        </div>

        {/* Card 3 */}
        <div className="glass-card text-center p-6 border-b-4 border-b-red-600/50">
          <div className="text-4xl font-black text-red-500 mb-3">
            <span className="text-2xl font-bold align-baseline mr-1">less than</span>
            25%
          </div>
          {/* Increased to text-lg */}
          <h4 className="text-lg font-bold mb-2">Functional Smart Classrooms</h4>
          {/* Increased to text-sm */}
          <p className="text-sm text-slate-400">Most schools lack the space for dedicated high-end electronics labs.</p>
        </div>
      </div>
      <div className="text-center max-w-3xl mx-auto mb-16">
<p className="text-xl text-slate-400 leading-relaxed">
          Most students learn electronics through theory and diagrams. Hands-on exposure remains limited due to lack of lab infrastructure.
        </p>
        </div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-black mb-6 text-white text-center">Our Solution</h3>
        <div className="p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20 text-center">
          <p className="text-slate-300 font-medium text-lg ">
            <span className="font-bold text-white ">Gen-Alpha Portable Lab</span> brings a full hands-on learning experience into one portable device, without requiring a dedicated lab room.
          </p>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
  </section >
);

const TargetUsers = () => (
  <section id="users" className="section-padding bg-slate-900/20">
    <br></br>
    <div className="container">
      <h2 className="section-title">Who the Gen-Alpha Portable Lab Is Designed For?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            icon: <GraduationCap />,
            title: "Students",
            list: ["Class 6 to 12 fundamentals", "Diploma and Degree engineering", "Active hands-on learners"]
          },
          {
            icon: <Users />,
            title: "Parents",
            list: [
              "For parents seeking quality STEM education at home.",
              "Used as a safe, guided lab for independent learning.",
              "Provides clear progress tracking for students."
            ]
          },
          {
            icon: <Building2 />,
            title: "Institutions",
            list: [
              "For schools and colleges upgrading their tech labs.",
              "Used as a cost-effective, portable STEM lab solution.",
              "Supports structured classroom experiments and clubs."
            ]
          },
          {
            icon: <Briefcase />,
            title: "CSR & Govt",
            list: [
              "For government bodies and CSR outreach partners.",
              "Used for large-scale deployment in rural settings.",
              "Bridges the gap in technical education infrastructure."
            ]
          },
          {
            icon: <Cpu />,
            title: "Hobbyists",
            list: [
              "For makers and electronics enthusiasts exploring new projects.",
              "Used as a comprehensive toolkit for rapid prototyping.",
              "Enables creative experimentation with IoT and automation."
            ]
          }
        ].map((card, i) => (
          // CHANGED: Reduced padding from p-6 to p-5
          <div key={i} className="glass-card group hover:bg-blue-600/5 h-full p-5">
            
            {/* CHANGED: Reduced gap from gap-4 to gap-3, margin-bottom from mb-6 to mb-4 */}
            <div className="flex items-center gap-3 mb-4">
              {/* CHANGED: Reduced size from w-12 h-12 to w-10 h-10 */}
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                {/* CHANGED: Reduced icon size from 24 to 20 */}
                {React.cloneElement(card.icon, { size: 20 })}
              </div>
              {/* CHANGED: Reduced text size from text-xl to text-lg */}
              <h4 className="text-lg font-bold">{card.title}</h4>
            </div>

            {/* CHANGED: Reduced vertical spacing from space-y-3 to space-y-2 */}
            <ul className="space-y-2">
              {card.list.map((item, j) => (
                // CHANGED: Reduced text size from text-sm to text-xs
                <li key={j} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <br></br>
    <br></br>
  </section>
);

const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqData = [
    {
      q: "What components are included in the kit?",
      a: "The kit includes all essential electronics components, sensors, wires, connectors, and interface modules required to perform the listed experiments. Students do not need to purchase any additional parts to start learning."
    },
    {
      q: "Does it support coding and IoT learning?",
      a: "Yes. Students learn coding using microcontrollers and computing platforms such as Arduino and Raspberry Pi. Advanced configurations support IoT projects such as sensor monitoring, data transmission, and web-based applications."
    },
    {
      q: "Is guided learning content provided?",
      a: "Yes. The system includes in-built video lectures that explain electronics concepts and guide students step-by-step through more than 100 experiments. Students can watch, build, and test within the same system."
    },
    {
      q: "Can the kit be expanded with new modules?",
      a: "Yes. The lab is designed with extra storage space for additional sensors, wires, and future expansion modules. Institutions can add new components as their curriculum grows."
    },
    {
      q: "Is the design safe for younger students?",
      a: "Yes. The kit uses a pin-based, solder-free design, reducing electrical and physical risk. All components operate at low, student-safe voltages suitable for classroom use."
    },
    {
      q: "How is student learning progress measured?",
      a: (
        <div>
          Learning progress is tracked through:
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
            <li>Completion of guided experiments</li>
            <li>Ability to build and modify circuits independently</li>
            <li>Project-based assessments conducted by teachers</li>
          </ul>
          <p className="mt-2">Institutions can integrate the lab into existing internal assessment methods.</p>
        </div>
      )
    },
    {
      q: "Does the lab require a full electronics classroom setup?",
      a: "No. The Gen-Alpha Portable Lab works as a self-contained system and can be used in regular classrooms, labs, or mobile learning setups."
    },
    {
      q: "Is internet required to use the lab?",
      a: "Basic experiments and video lessons can be used without continuous internet. Internet is only required for certain IoT or cloud-based projects and for updates."
    },
    {
      q: "How many students can use one kit?",
      a: (
        <div>
          One kit can be used by:
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
            <li>Individual students for personal learning, or</li>
            <li>Small groups of 3–5 students in classroom settings, using rotation or lab sessions.</li>
          </ul>
          <p className="mt-2">Multiple kits can be deployed for larger batches.</p>
        </div>
      )
    },
    {
      q: "Can teachers use this without advanced technical training?",
      a: "Yes. The guided experiment structure and video lessons make it easy for teachers to facilitate sessions even if they are not electronics specialists. Optional teacher training is also available."
    },
    {
      q: "Is teacher training provided?",
      a: "Yes, if required. We offer onboarding sessions and training programs to help teachers understand how to conduct experiments and manage classroom usage."
    },
    {
      q: "Does the kit align with school or college curriculum?",
      a: "Yes. The experiments are designed to support common electronics, physics, and embedded systems topics taught in Indian school boards and engineering syllabi. Customization is possible for institutional needs."
    },
    {
      q: "What kind of maintenance does the kit require?",
      a: "The kit is designed for classroom durability and requires minimal maintenance. Annual maintenance and support plans are available for institutions that prefer ongoing technical assistance."
    },
    {
      q: "Can it be used for competitions and innovation projects?",
      a: "Yes. Students can use the kit to build custom projects for science fairs, robotics competitions, hackathons, and innovation challenges."
    },
    {
      q: "Is this suitable for rural or low-infrastructure schools?",
      a: "Yes. The system is portable, does not require permanent lab installations, and can function in environments with limited infrastructure. This makes it suitable for government and CSR education programs."
    },
    {
      q: "How do we decide which configuration is right for us?",
      a: (
        <div>
          After you submit the demo or enquiry form, our team reviews:
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
            <li>Student age group</li>
            <li>Number of learners</li>
            <li>Intended usage</li>
            <li>Infrastructure availability</li>
          </ul>
        </div>
      )
    }
  ];

  // Logic to show only first 5 or all based on state
  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section id="features" className="section-padding">
      <br></br>
      <div className="container">
        <h2 className="section-title">FAQs</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {visibleFaqs.map((item, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors bg-slate-900/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/20 transition-colors"
              >
                <span className="font-bold text-slate-200 pr-8">{item.q}</span>
                <ChevronDown className={`text-blue-500 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} size={20} />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 text-sm border-t border-slate-800/50 pt-4 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Read More / Read Less Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors inline-flex items-center gap-2"
            >
              {showAll ? 'Read Less' : 'Read More...'}
              <ChevronDown size={18} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

const HowItWorks = () => (
  <section className="section-padding bg-slate-900/40 relative">
    <br></br>
    <div className="container">
      <h2 className="section-title">How does a student use the lab?</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 -translate-y-1/2 z-0"></div>

        {[
          { step: "1", title: "Select", desc: "Choose a concept or experiment on the built-in tablet interface." },
          { step: "2", title: "Build", desc: "Construct the circuit using the included sensors and solder-free wiring." },
          { step: "3", title: "Run", desc: "Execute the code and observe live results directly on the portable unit." }
        ].map((s, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center px-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform">
              {s.step}
            </div>
            <h4 className="text-xl font-bold mb-3">{s.title}</h4>
            <p className="text-slate-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 italic">Students can repeat, modify, and extend experiments independently.</p>
      </div>
    </div>
    <br></br>
    <br></br>
  </section>
);

const Pricing = ({ onOpenModal }) => {
  const plans = [
    {
      name: "Starter",
      price: "₹1,00,000",
      approx: "approx.",
      subtitle: "Best for middle school and early high school",
      features: [
        "Core electronics (resistors, IC 555, logic)",
        "Breadboard-based, solder-free wiring",
        "11.2\" tablet with guided steps",
        "40+ structured beginner experiments",
        "Built-in video lessons for fundamentals"
      ],
      suited: ["Class 6 to 10 practical learning", "STEM clubs & introductory labs"]
    },
    {
      name: "Standard",
      price: "₹1,50,000",
      approx: "approx.",
      subtitle: "Best for schools and diploma programs",
      isPopular: true,
      features: [
        "Everything in Starter, plus:",
        "Arduino-based microcontroller platform",
        "Expanded sensor set (temp, light, motion)",
        "70+ guided experiments (Basics to Inter.)",
        "Coding and logic-based projects"
      ],
      suited: ["High schools & diploma institutions", "Electronics and robotics labs"]
    },
    {
      name: "Advanced",
      price: "₹1.5L - 2.0L",
      approx: "",
      subtitle: "Best for colleges and engineering depts",
      features: [
        "Everything in Standard, plus:",
        "Raspberry Pi computing platform",
        "IoT and web-based project capabilities",
        "100+ experiments (Electronics, Coding, IoT)",
        "Ready for final-year projects"
      ],
      suited: ["Engineering colleges & universities", "Innovation labs & incubation centers"]
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <br></br>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title">Pricing</h2>
          <p className="text-slate-400">Pricing depends on configuration and usage needs. Final pricing is shared after understanding your specific requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 flex flex-col relative ${plan.isPopular ? 'border-blue-500/50 shadow-blue-900/10 scale-105 z-10' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 rounded-full text-[10px] uppercase font-black tracking-widest leading-none shadow-lg shadow-blue-900/40">
                  Most Popular
                </div>
              )}

              <h4 className="text-2xl font-bold mb-1">{plan.name}</h4>
              <p className="text-xs text-blue-400 font-medium mb-4 uppercase tracking-wide">{plan.subtitle}</p>
              
              <div className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal text-slate-500 ml-1">{plan.approx}</span>
              </div>

              <div className="flex-grow mb-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">What's Included</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2 leading-snug">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${feature.includes("Everything") ? "text-purple-400" : "text-blue-500"}`} />
                      <span className={feature.includes("Everything") ? "font-semibold text-white" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Best Suited For</p>
                  <ul className="space-y-1.5">
                    {plan.suited.map((item, j) => (
                       <li key={j} className="text-xs text-slate-400 flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-slate-500"></div>
                         {item}
                       </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => onOpenModal('quote')} 
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 active:scale-[0.98]' 
                    : 'border border-slate-700 hover:bg-slate-800 text-slate-300'
                }`}
              >
                Request Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="py-10 bg-black text-white border-t border-slate-900">
    <div className="container">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
        {/* Column 1: Logo */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight leading-none whitespace-nowrap">
              <span className="text-white">Gen-Alpha</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Portable Lab
              </span>
            </span>

            {/* Reduced tracking to 0.35em to prevent overflow while keeping the wide look */}
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 whitespace-nowrap">
              One Lab<span className="-ml-[0.35em]">.</span> Infinite Possibilities<span className="-ml-[0.35em]">.</span>
            </p>
          </div>
        </div>


        {/* Column 2: Join the Revolution */}
        <div className="space-y-5">
          <h5 className="text-lg font-bold">Join the revolution</h5>
          <p className="text-slate-400 text-sm leading-relaxed">
            Explore how the right technology can elevate your business—enhancing efficiency, simplifying everyday operations, and paving the way for a more sustainable future. Together, let's turn ideas into impact.
          </p>
        </div>

        {/* Column 3: Our Domains */}
        <div className="space-y-5">
          <h5 className="text-lg font-bold">Our Domains</h5>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Branding & Ecommerce</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Ed-Tech</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Research & Development</li>
          </ul>
        </div>

        {/* Column 4: Team Solutions (Contact) */}
        <div className="space-y-5 lg:pl-4">
          <h5 className="text-lg font-bold">Team Solutions</h5>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              Email: <a href="mailto:director@dashapatmaja.in" className="hover:text-white transition-colors">director@dashapatmaja.in</a>
            </p>
            <p className="flex items-center gap-2">
              Phone: +91 8861942440
            </p>
          </div>
          <div className="flex gap-5 pt-2">
            <div className="flex gap-4 items-center text-white">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-slate-300 transition-colors font-bold text-xl leading-none">X</a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:director@dashapatmaja.in" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-8">
        <a
          href="https://dashapatmaja.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-500 hover:text-blue-500 transition-colors"
        >
          &copy; 2025 dashapatmaja.in All rights reserved.
        </a>
      </div>
    </div>
  </footer>
);



// --- Main App ---

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');

  const openModal = (type = 'demo') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="app-root bg-[#020617] text-slate-100 min-h-screen selection:bg-blue-500/30">
      <Navbar onOpenModal={() => openModal('demo')} />

      <Hero onOpenModal={openModal} />
      <Statistics />
      <About />
      <TargetUsers />
      <HowItWorks />
      <Pricing onOpenModal={openModal} />
      <Features />
      <Footer />


      <AnimatePresence>
        {modalOpen && <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialType={modalType} />}
      </AnimatePresence>
    </div>
  );
}
