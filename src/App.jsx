import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Terminal,
  BookOpen,
  ShieldCheck,
  Package,
  ChevronRight,
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
  Laptop
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
    { name: 'What', target: 'hero' },
    { name: 'Why', target: 'need' },
    { name: 'Who', target: 'users' },
    { name: 'Features', target: 'features' },
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

        <h2 className="text-2xl font-bold mb-2">Request a Demo or Deployment Discussion</h2>
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

          {/* H: Request Type */}
          <div className="space-y-4">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">How can we help you?</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'demo', label: 'Request a Demo' },
                { id: 'quote', label: 'Request Quotation' },
                { id: 'pilot', label: 'Interest in Pilot' },
                { id: 'csr', label: 'CSR Deployment' }
              ].map((opt) => (
                <label key={opt.id} className="flex items-center gap-3 p-4 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:bg-slate-800/50 transition-all">
                  <input type="checkbox" defaultChecked={opt.id === initialType} className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-blue-600 focus:ring-offset-[#0f172a]" />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-900/20 active:scale-[0.98]">
            Request Demo and Details
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

const ImageSlider = () => {
  const images = [
    { src: "/assets/closedcase.png", title: "Rugged Portability", info: "Military-grade enclosure designed for safe transport between classrooms and remote learning environments." },
    { src: "/assets/slide1.png", title: "All-in-One Integration", info: "Seamlessly combines a high-performance tablet, full breadboard, and tactile keyboard for a complete engineering experience." },
    { src: "/assets/caseslide3.png", title: "Intelligent Learning Interface", info: "Features a sophisticated digital overlay for real-time circuit visualization and experiment guidance." },
    { src: "/assets/studentslide2.png", title: "Collaborative Discovery", info: "Optimized for teamwork, allowing students to build, test, and innovate on real-world electronics projects together." }
  ];

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

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl cursor-pointer" onClick={() => setSelectedImage(images[currentIndex])}>
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
          <div className="text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 px-2 py-1 rounded">Click for details</span>
            <h4 className="text-xl font-bold mt-2">{images[currentIndex].title}</h4>
          </div>
        </div>
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
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gen-Alpha Portable Lab</span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-xl">
          An all-in-one Electronics learning kit and portable lab for students from Class 6 to Engineering 2nd year.
          Students learn electronics, coding, and IoT by building real circuits.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <button onClick={() => onOpenModal('demo')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/30 flex items-center gap-2">
            contact us <ChevronRight size={20} />
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
        </div>

      </motion.div>
    </div>

    {/* Horizontal Strip */}
    <div className="container mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="h-64 rounded-3xl overflow-hidden border border-slate-800 shadow-lg group">
        <img src="/assets/case.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Kit closed" />
      </div>
      <div className="h-64 rounded-3xl overflow-hidden border border-slate-800 shadow-lg group">
        <img src="/assets/fullbox.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Tablet interface" />
      </div>
      <div className="h-64 rounded-3xl overflow-hidden border border-slate-800 shadow-lg flex flex-col justify-center items-center bg-slate-900 font-bold p-8 text-center group">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Zap className="text-white" size={24} />
        </div>
        <p className="text-sm text-slate-500 mt-2 font-normal">Building real experiments from class 6 to engineering.</p>
      </div>
    </div>
    <br></br>

  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-slate-900/30">
    <br></br>
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">What makes this a complete portable lab?</h2>
        <p className="text-slate-400">
          Gen-Alpha Portable Lab combines hardware, software, learning content, and accessories into one portable unit, removing the need for a traditional electronics lab setup.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-blue-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Package className="text-blue-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Complete Hardware Kit</h4>
              <p className="text-sm text-slate-400">Includes all sensors, actuators, breadboard, wires, connectors, and essential electronic components in one complete kit.</p>
            </div>
          </div>
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-purple-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <BookOpen className="text-purple-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Curriculum-Aligned Projects</h4>
              <p className="text-sm text-slate-400">Step-by-step guidance for 100+ experiments ranging from basic circuits to advanced robotics and IoT.</p>
            </div>
          </div>
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
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-blue-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Layers className="text-blue-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Complete Ecosystem</h4>
              <p className="text-sm text-slate-400">A seamless integration of hardware, software, and learning resources in one unified platform.</p>
            </div>
          </div>
        </div>

        <ImageSlider />
      </div>
    </div>
    <br></br>
    <br></br>
  </section>
);

const Statistics = () => (
  <section id="need" className="section-padding">
    <br></br>
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">The Need for Hands-on Electronics</h2>
        <p className="text-slate-400">
          Most students learn electronics through theory and diagrams. Hands-on exposure remains limited due to lack of lab infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card text-center p-10 border-b-4 border-b-blue-600">
          <div className="text-5xl font-extrabold text-blue-400 mb-4">57%</div>
          <h4 className="text-lg font-bold mb-2">Schools with Computers</h4>
          <p className="text-sm text-slate-500">Basic digital literacy is improving, but practical labs lag behind.</p>
        </div>
        <div className="glass-card text-center p-10 border-b-4 border-b-purple-600">
          <div className="text-5xl font-extrabold text-purple-400 mb-4">54%</div>
          <h4 className="text-lg font-bold mb-2">Schools with Internet</h4>
          <p className="text-sm text-slate-500">Connectivity is growing, but experimental learning needs local power.</p>
        </div>
        <div className="glass-card text-center p-10 border-b-4 border-b-cyan-600">
          <div className="text-5xl font-extrabold text-cyan-400 mb-4">&lt;25%</div>
          <h4 className="text-lg font-bold mb-2">Functional Smart Classrooms</h4>
          <p className="text-sm text-slate-500">Most schools lack the space for dedicated high-end electronics labs.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20">
        <p className="text-slate-300 font-medium">Gen-Alpha Portable Lab brings a full hands-on learning experience into one portable device, without requiring a dedicated lab room.</p>
        <div className="flex items-center gap-2 text-xs text-slate-500 whitespace-nowrap">
          <Info size={14} />
          <span>Source: UDISE+ reports, Ministry of Education, India.</span>
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
      <h2 className="section-title">Who is the Gen-Alpha Portable Lab designed for?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <h2 className="section-title">What can students do with the Gen-Alpha Portable Lab?</h2>

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
        <h2 className="section-title">How much does it cost?</h2>
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

const Footer = ({ onOpenModal }) => (
  <footer id="contact" className="section-padding border-t border-slate-900 bg-black/40">
    <br></br>
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">Ready to transform hands-on learning?</h2>
          <p className="text-slate-500 mb-8 max-w-md">Our team reviews every demo request personally to ensure we bring the right configuration to your institution.</p>
          <button onClick={() => onOpenModal('demo')} className="px-10 py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-black transition-all shadow-xl active:scale-95">
            contact us
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
              <MapPin className="text-blue-400" size={20} />
            </div>
            <div>
              <h5 className="font-bold">Address</h5>
              <p className="text-slate-400 text-sm">Dashapatmaja Solutions Pvt. Ltd., Manipal</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
              <Mail className="text-blue-400" size={20} />
            </div>
            <div>
              <h5 className="font-bold">Email</h5>
              <p className="text-slate-400 text-sm">dsplmanipal@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
              <Phone className="text-blue-400" size={20} />
            </div>
            <div>
              <h5 className="font-bold">Phone</h5>
              <p className="text-slate-400 text-sm">+91 77600 42810</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-xl font-bold tracking-tight mb-1">
            <span className="text-white">Gen-Alpha</span> <span className="text-blue-500">Portable Lab</span>
          </div>
          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">One Lab. Infinite Possibilities</p>
        </div>
        <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Dashapatmaja Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
    <br></br>
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
      <About />
      <Statistics />
      <TargetUsers />
      <Features />
      <HowItWorks />
      <Pricing onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />

      <AnimatePresence>
        {modalOpen && <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialType={modalType} />}
      </AnimatePresence>
    </div>
  );
}
