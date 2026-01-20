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
  Info
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
    { name: 'What is it?', target: 'hero' },
    { name: 'Why needed?', target: 'need' },
    { name: 'Who is it for?', target: 'users' },
    { name: 'Capabilities', target: 'features' },
    { name: 'Pricing', target: 'pricing' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scroll.scrollToTop()}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Cpu className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Gen-Alpha <span className="text-blue-500">Lab</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
          ))}
          <button
            onClick={onOpenModal}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Book a Demo
          </button>
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
            ))}
            <button
              onClick={() => { onOpenModal(); setMobileMenuOpen(false); }}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
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

// --- Sections ---

const Hero = ({ onOpenModal }) => (
  <section id="hero" className="min-height-[100vh] flex flex-col justify-center pt-32 pb-20 relative overflow-hidden">
    {/* Glow Effects */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none"></div>

    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 bg-blue-900/30 border border-blue-800/50 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          Hands-on Electronics Reimagined
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          What is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gen-Alpha Portable Lab?</span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-xl">
          An all-in-one Electronics learning kit and portable lab for students from Class 6 to Engineering 2nd year.
          Students learn electronics, coding, and IoT by building real circuits on a single 11.2 inch tablet-based system.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <button onClick={() => onOpenModal('demo')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/30 flex items-center gap-2">
            Book a Demo <ChevronRight size={20} />
          </button>
          <button onClick={() => onOpenModal('quote')} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-2xl font-bold transition-all">
            Request Pricing
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
          <img src="/assets/student_using_kit.jpg" alt="Student using kit" className="relative rounded-3xl shadow-2xl border border-slate-700 group-hover:scale-[1.02] transition-transform duration-500" />
        </div>

        {/* Floating Stats */}
        <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl max-w-[180px] hidden lg:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={16} />
            </div>
            <span className="text-xs font-bold text-slate-300">Class 6+ Ready</span>
          </div>
          <p className="text-[10px] text-slate-500">Designed for safety and guided learning.</p>
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
        <h4 className="text-xl">One Lab. Infinite Possibilities.</h4>
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

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-blue-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Layers className="text-blue-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Complete Ecosystem</h4>
              <p className="text-sm text-slate-400">Electronics components, sensors, wires, and connectors are all included within the kit.</p>
            </div>
          </div>
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-purple-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <ShieldCheck className="text-purple-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Safety First Design</h4>
              <p className="text-sm text-slate-400">A pin-based, solder-free design keeps learning safe and accessible for younger students.</p>
            </div>
          </div>
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-cyan-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <PlayCircle className="text-cyan-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Built-in Tablet Interface</h4>
              <p className="text-sm text-slate-400">A massive 11.2 inch system provides step-by-step videos and experiment guidance.</p>
            </div>
          </div>
          <div className="glass-card flex gap-5 p-6 border-l-4 border-l-blue-500">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Package className="text-blue-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Expandable Storage</h4>
              <p className="text-sm text-slate-400">Extra internal storage is provided for additional sensors, wires, and future modules.</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <img src="/assets/openbox.png" className="rounded-3xl border border-slate-800 shadow-2xl relative" alt="Labeled Kit" />
          {/* Labeled highlights could go here in absolute position overlay */}
        </div>
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
        <h2 className="section-title">Why do students need hands-on electronics learning today?</h2>
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
          { icon: <GraduationCap />, title: "Students", list: ["Class 6 to 12 fundamentals", "Diploma and Degree engineering", "Active hands-on learners"] },
          { icon: <Users />, title: "Parents", list: ["Safe, guided learning", "Clear progress tracking", "Solder-free, pin-based safety"] },
          { icon: <Building2 />, title: "Institutions", list: ["One lab, multiple kits", "Low infrastructure needs", "STEM clubs and labs"] },
          { icon: <Briefcase />, title: "CSR & Govt", list: ["Ideal for scale and outreach", "Mobility in rural settings", "Easy deployment"] }
        ].map((card, i) => (
          <div key={i} className="glass-card group hover:bg-blue-600/5">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {React.cloneElement(card.icon, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold mb-4">{card.title}</h4>
            <ul className="space-y-3">
              {card.list.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-slate-400 italic">
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

const Features = () => (
  <section id="features" className="section-padding">
    <br></br>
    <div className="container">
      <h2 className="section-title">What can students do with the Gen-Alpha Portable Lab?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { q: "Includes all required components?", a: "Yes. All sensors, wires, connectors, and electronics components required for experiments are included." },
          { q: "Supports electronics, coding, & IoT?", a: "Yes. Students move from basic circuits to microcontrollers and IoT applications on the same platform." },
          { q: "Includes guided learning?", a: "Yes. Built-in video lectures explain concepts and guide students through 100+ experiments." },
          { q: "Is there space for expansion?", a: "Yes. The kit includes extra storage for additional sensors, wires, and future modules." },
          { q: "Is it safe for beginners?", a: "Yes. The pin-based, solder-free design reduces risk and supports early learners." },
          { q: "Is error detection available?", a: "Coming soon. An upcoming smart system will help students identify wiring issues automatically." },
        ].map((feat, i) => (
          <div key={i} className="p-8 border border-slate-800/50 rounded-3xl hover:border-blue-500/50 transition-all hover:bg-slate-900/40">
            <h4 className="text-lg font-bold text-blue-400 mb-3">{feat.q}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{feat.a}</p>
          </div>
        ))}
      </div>
    </div>
    <br></br>
    <br></br>
  </section>
);

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

        <div className="glass-card p-10 flex flex-col relative border-blue-500/50 shadow-blue-900/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-[10px] uppercase font-black tracking-widest leading-none">Most Popular</div>
          <h4 className="text-xl font-bold mb-2 font-outfit">Standard</h4>
          <div className="text-3xl font-bold mb-6">₹1,50,000<span className="text-sm font-normal text-slate-500"> approx.</span></div>
          <ul className="space-y-4 mb-10 flex-grow text-left">
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Schools & High Schools</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Advanced Modules & IoT</li>
            <li className="text-sm text-slate-400 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Training Included</li>
          </ul>
          <button onClick={() => onOpenModal('quote')} className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">Get a Quote</button>
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
            Book a Free Demo
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
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="text-blue-500" size={20} />
            <span className="font-bold">Gen-Alpha Portable Lab</span>
          </div>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Empowering Next-Gen Engineers</p>
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
