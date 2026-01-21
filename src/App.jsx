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
    { name: 'Overview', target: 'about' },
    { name: 'Need', target: 'need' },
    { name: 'Who is it for?', target: 'users' },
    { name: 'FAQ', target: 'features' },
    { name: 'Pricing', target: 'pricing' },
    { name: 'Contact us', target: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => scroll.scrollToTop()}>
          <span className="text-2xl md:text-3xl font-bold tracking-tight leading-none">
            <span className="text-white">Gen-Alpha</span> <span className="text-blue-500">Portable Lab</span>
          </span>
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
      {/* Container with enhanced glass background */}
      <div className="max-w-6xl mx-auto rounded-[48px] bg-slate-900/30 border border-white/5 p-6 md:p-10 relative overflow-hidden backdrop-blur-sm shadow-2xl">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/5 blur-[120px] pointer-events-none"></div>

        <div className="relative h-[300px] md:h-[420px] flex items-center justify-center">



          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((img, idx) => {
              let offset = idx - currentIndex;
              if (offset < -images.length / 2) offset += images.length;
              if (offset > images.length / 2) offset -= images.length;

              const isActive = offset === 0;
              const isSide = Math.abs(offset) === 1;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    x: offset * (window.innerWidth < 768 ? 220 : 420),
                    scale: isActive ? 1.08 : 0.82,
                    opacity: isActive ? 1 : (isSide ? 0.35 : 0),
                    filter: isActive ? "blur(0px)" : "blur(10px)",
                    zIndex: isActive ? 30 : 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                  className="absolute w-[260px] md:w-[500px] aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  {/* Active Card Inner Glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none z-10 border border-blue-500/30 rounded-[32px]"></div>
                  )}

                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8 md:p-10"
                    >
                      <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {img.title}
                      </h4>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
};

// --- Sections ---

const Hero = ({ onOpenModal }) => (
  <section id="hero" className="min-height-[100vh] flex flex-col justify-center pt-32 pb-20 relative overflow-hidden">
    {/* Glow Effects */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none"></div>

    <div className="container grid md:grid-cols-[1fr_1.4fr] gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 whitespace-nowrap">
            <span className="text-white">Gen-Alpha </span>
            <span className="text-blue-500">Portable Lab</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-1 mb-1 text-lg md:text-xl font-semibold text-blue-500 tracking-[0.2em]">
            One Lab. Infinite Possibilities
          </p>
        </div>

        <p className="text-lg text-slate-400 mb-8 max-w-xl">
          An all-in-one Electronics learning kit and portable lab for students from Class 6 to Engineering 2nd year.
          Students learn electronics, coding, and IoT by building real circuits.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <button onClick={() => onOpenModal('demo')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/30 flex items-center gap-2">
            Contact Us <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex items-center gap-3 text-slate-500 text-sm">
          <Package size={18} className="text-blue-500" />
          <span>Includes all required sensors, wires, and components.</span>
        </div><br></br>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <img src="/assets/student_using_kit_v2.jpg" alt="Student using kit" className="relative rounded-3xl shadow-2xl border border-slate-700 group-hover:scale-[1.02] transition-transform duration-500" />
        </div><br></br><br></br>

      </motion.div>
    </div>

    {/* Horizontal Strip - Single Wide Spotlight Carousel */}
    <div className="container mt-20">
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
    <br></br>

  </section>
);

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section-padding bg-slate-900/30">
      <br></br>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Overview</h2>
          <p className="text-slate-400">
            Gen-Alpha Portable Lab combines hardware, software, learning content, and accessories into one portable unit, removing the need for a traditional electronics lab setup.
          </p>

          {/* Read More button */}
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
          <div className="space-y-6">
            {/* <div className="glass-card flex gap-5 p-6 border-l-4 border-l-blue-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Package className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Complete Hardware Kit</h4>
                <p className="text-sm text-slate-400">Includes all sensors, actuators, breadboard, wires, connectors, and essential electronic components in one complete kit.</p>
              </div>
            </div> */}
            {/* <div className="glass-card flex gap-5 p-6 border-l-4 border-l-purple-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <BookOpen className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Curriculum-Aligned Projects</h4>
                <p className="text-sm text-slate-400">Step-by-step guidance for 100+ experiments ranging from basic circuits to advanced robotics and IoT.</p>
              </div>
            </div> */}
            <div className="glass-card flex gap-5 p-6 border-l-4 border-l-cyan-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Cpu className="text-cyan-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Modular & Scalable</h4>
                <p className="text-sm text-slate-400">A future-proof design that allows students to add new sensors and advanced modules as their skills progress.</p>
              </div>
            </div>
            <div className="glass-card flex gap-5 p-6 border-l-4 border-l-blue-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Laptop className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Portable Learning Studio</h4>
                <p className="text-sm text-slate-400">Transform any desk into a high-tech innovation lab without requiring expensive, fixed infrastructure.</p>
              </div>
            </div>
            <div className="glass-card flex gap-5 p-6 border-l-4 border-l-purple-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <ShieldCheck className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Safety First Design</h4>
                <p className="text-sm text-slate-400">A pin-based, solder-free architecture ensures a safe and accessible learning environment for all ages.</p>
              </div>
            </div>

            {/* Error-Detection - only shown when expanded */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="glass-card flex gap-5 p-6 border-l-4 border-l-yellow-500"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <ShieldCheck className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Error-Detection & Guided Learning</h4>
                  <p className="text-sm text-slate-400">Intelligent error-detection that helps students identify wiring or logic mistakes in real time.</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right column - Image when collapsed, Expanded content when expanded */}
          <div>
            {/* Image - shown when not expanded */}
            {!isExpanded && <ImageSlider />}

            {/* Expanded content - shown when expanded */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* What's Inside */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">What's Inside the Gen-Alpha Portable Lab</h3>
                    <p className="text-slate-400 mb-6">
                      The lab integrates a complete electronics and computing stack in one platform, providing everything students need for comprehensive hands-on learning.
                    </p>
                  </div>

                  {/* Core Electronics */}
                  <div className="glass-card p-6 border-l-4 border-l-blue-500">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Cpu className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Core Electronics</h4>
                        <p className="text-slate-400">
                          IC-555 timers, Arduino, Raspberry Pi, breadboards, digital multimeter/oscilloscope modules, and a wide range of sensors and actuators.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coding & IoT */}
                  <div className="glass-card p-6 border-l-4 border-l-purple-500">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                        <Terminal className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Coding & IoT Capability</h4>
                        <p className="text-slate-400">
                          Supports programming, IoT experiments, and mini web-server projects using a pre-configured Raspberry Pi environment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="glass-card p-6 border-l-4 border-l-green-500">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Zap className="text-green-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Why It Matters</h4>
                        <p className="text-slate-400">
                          The Gen-Alpha Portable Lab replaces fragmented kits and expensive labs with a single, affordable, scalable solution for institutions, CSR programs, and educators.
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
  <section id="need" className="section-padding">
    <br></br>
    <div className="container">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="section-title">Problems with current system?</h2>
        <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-8">Source: UDISE+ reports, Ministry of Education, India.</p>

        <p className="text-2xl md:text-3xl font-black text-slate-200 mb-12">
          Most students learn electronics through theory and diagrams. Hands-on exposure remains limited due to lack of lab infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <div className="glass-card text-center p-6 border-b-4 border-b-red-600/50">
          <div className="text-4xl font-black text-red-500 mb-3">only 57%</div>
          <h4 className="text-sm font-bold mb-2">Schools with Computers</h4>
          <p className="text-xs text-slate-500">Basic digital literacy is improving, but practical labs lag behind.</p>
        </div>
        <div className="glass-card text-center p-6 border-b-4 border-b-red-600/50">
          <div className="text-4xl font-black text-red-500 mb-3">only 54%</div>
          <h4 className="text-sm font-bold mb-2">Schools with Internet</h4>
          <p className="text-xs text-slate-500">Connectivity is growing, but experimental learning needs local power.</p>
        </div>
        <div className="glass-card text-center p-6 border-b-4 border-b-red-600/50">
          <div className="text-4xl font-black text-red-500 mb-3">less than 25%</div>
          <h4 className="text-sm font-bold mb-2">Functional Smart Classrooms</h4>
          <p className="text-xs text-slate-500">Most schools lack the space for dedicated high-end electronics labs.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-black mb-6 text-white text-center">The Solution</h3>
        <div className="p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20 text-center">
          <p className="text-slate-300 font-medium text-lg italic">Gen-Alpha Portable Lab brings a full hands-on learning experience into one portable device, without requiring a dedicated lab room.</p>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
  </section>
);

const TargetUsers = () => (
  <section id="users" className="section-padding bg-slate-900/20">
    <br></br>
    <div className="container">
      <h2 className="section-title">Who is it for?</h2>

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
          <div key={i} className="glass-card group hover:bg-blue-600/5 h-full">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {React.cloneElement(card.icon, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold mb-4">{card.title}</h4>
            <ul className="space-y-3">
              {card.list.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
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

  const faqData = [
    { q: "What components are included in the kit?", a: "The kit includes all necessary sensors, actuators, breadboards, wires, and connectors required to perform 100+ electronics experiments." },
    { q: "Does it support coding and IoT learning?", a: "Yes. Students advance from basic circuit building to microcontroller programming and real-world IoT applications on a single platform." },
    { q: "Is guided learning content provided?", a: "Every kit includes built-in video lectures and step-by-step experiment guides to ensure students can learn independently." },
    { q: "Can the kit be expanded with new modules?", a: "Absolutely. The modular design allows for future expansions, enabling students to add advanced sensors as their expertise grows." },
    { q: "Is the design safe for younger students?", a: "Yes. The lab uses a pin-based, solder-free architecture that eliminates risks while maintaining a professional electronics build experience." },
    { q: "How is the learning progress measured?", a: "The system provides an intuitive interface for students to follow their curriculum path and master core engineering concepts through practical work." },
  ];

  return (
    <section id="features" className="section-padding">
      <br></br>
      <div className="container">
        <h2 className="section-title">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors bg-slate-900/20">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/20 transition-colors"
              >
                <span className="font-bold text-slate-200">{item.q}</span>
                <ChevronDown className={`text-blue-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} size={20} />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 text-sm border-t border-slate-800/50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
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

const Pricing = ({ onOpenModal }) => (
  <section id="pricing" className="section-padding">
    <br></br>
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="section-title">Pricing</h2>
        <p className="text-slate-400">Pricing depends on configuration and usage needs. Final pricing is shared after understanding your specific requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-10 flex flex-col">
          <h4 className="text-xl font-bold mb-2">Starter</h4>
          <div className="text-3xl font-bold mb-6">₹1,00,000<span className="text-sm font-normal text-slate-500"> approx.</span></div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Middle School Level</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Core Electronics</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Essential Sensors</li>
          </ul>
          <button onClick={() => onOpenModal('quote')} className="w-full py-3 border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-all">Request Details</button>
        </div>

        <div className="glass-card p-10 flex flex-col relative border-blue-500/50 shadow-blue-900/10 scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 rounded-full text-[10px] uppercase font-black tracking-widest leading-none shadow-lg shadow-blue-900/40">Most Popular</div>
          <h4 className="text-xl font-bold mb-2">Standard</h4>
          <div className="text-3xl font-bold mb-6">₹1,50,000<span className="text-sm font-normal text-slate-500"> approx.</span></div>
          <ul className="space-y-4 mb-10 flex-grow text-left">
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Schools & High Schools</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Advanced Modules & IoT</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Training Included</li>
          </ul>
          <button onClick={() => onOpenModal('quote')} className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">Request Details</button>
        </div>

        <div className="glass-card p-10 flex flex-col">
          <h4 className="text-xl font-bold mb-2">Advanced</h4>
          <div className="text-3xl font-bold mb-6">₹2,00,000<span className="text-sm font-normal text-slate-500"> max.</span></div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Engineering Departments</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Full Industrial Sensors</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Priority Support</li>
          </ul>
          <button onClick={() => onOpenModal('quote')} className="w-full py-3 border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-all">Request Details</button>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-10 bg-black text-white border-t border-slate-900">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
        {/* Column 1: Logo */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight leading-none whitespace-nowrap">
              <span className="text-white">Gen-Alpha</span> <span className="text-blue-500">Portable Lab</span>
            </span>
            <span className="text-[10px] text-blue-500 font-semibold uppercase tracking-wider mt-1">One Lab . Infinite Possibilities</span>
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
