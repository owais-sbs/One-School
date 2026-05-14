"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, CheckCircle2, LayoutDashboard,
  Users, Banknote, PieChart, GraduationCap,
  Calendar, FileText, CreditCard, MessageSquare, Bus, Send, ArrowRight,
  Sparkles, Bell, Shield, Zap, BookOpen, BarChart2,
  MapPin, Phone, Mail, Play
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────── */
/*  VIDEO MODAL                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

// A free, publicly embeddable school management demo video (YouTube)
const DEMO_VIDEO_ID = 'dQw4w9WgXcQ'; // placeholder — swap with your real video ID

const VideoModalContext = createContext<{ open: () => void }>({ open: () => {} });
const useVideoModal = () => useContext(VideoModalContext);

const VideoModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <VideoModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-[#0d0d0d] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Play size={14} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">OneSchool Dashboard Demo</div>
                    <div className="text-[10px] text-white/40 font-medium">See the full platform in action</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Video */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="OneSchool Dashboard Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Footer */}
              <div className="px-6 py-4 flex items-center justify-between border-t border-white/10">
                <p className="text-xs text-white/30 font-medium">OneSchool · School Management Platform</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-white/40 hover:text-white transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </VideoModalContext.Provider>
  );
};

/* ── Animation presets ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-60px' },
  transition: { staggerChildren: 0.1 },
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  NAVBAR                                                                     */
/* ─────────────────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
          >
            <span
              className="text-2xl font-bold tracking-tighter"
              style={{
                letterSpacing: '-0.03em',
                color: scrolled ? '#0f172a' : '#ffffff',
              }}
            >
              OneSchool<span style={{ color: '#3B82F6' }}>.</span>
            </span>
          </motion.div>

          {/* Desktop nav links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`hidden md:flex items-center space-x-8 px-8 py-2.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'bg-orange-50/50 border-black/5'
                : 'bg-white/10 backdrop-blur-md border-white/20'
            }`}
          >
            {[
                { label: 'Home', href: '#home' },
                { label: 'Features', href: '#features' },
                { label: 'Showcase', href: '#showcase' },
                { label: 'Automation', href: '#automation' },
                { label: 'Plans', href: '#plans' },
              ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-blue-600'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-2xl border ${
                scrolled
                  ? 'text-slate-900 bg-slate-100 border-slate-200'
                  : 'text-white bg-white/10 border-white/20'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {['Home', 'Features', 'Showcase', 'Automation', 'Plans'].map((item) => (
                <a
                  key={item}
                  onClick={() => setIsOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="block text-xl font-bold text-slate-900"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  HERO                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */
const HERO_IMAGES = [
  'https://i1-c.pinimg.com/736x/85/55/1a/85551a56517d3ddd4a42e407e916c7c9.jpg',
  'https://i1-c.pinimg.com/736x/0b/1d/a3/0b1da3730c0e59a94ef39e28a74afd7d.jpg',
  'https://i.pinimg.com/736x/b6/94/fc/b694fc64e30bb45061e608daf64b64c9.jpg',
];

const HeroSection = () => {
  const { open } = useVideoModal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={HERO_IMAGES[current]}
          alt="School Campus"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>
      {/* Subtle dark gradient so text stays readable */}
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-sky-300/40 mb-8"
        >
          <Sparkles className="text-sky-300" size={14} />
          <span className="text-sky-200 text-xs font-bold tracking-widest uppercase">
            The Future of School Management
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-2xl">
          Manage your school{' '}
          <br className="hidden md:block" />
          <span className="text-sky-300">with one smart system</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
          The digital spine for your institution — connecting students, parents, teachers, and
          administrators in one premium SaaS ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-sky-500 text-white px-10 py-4 rounded-2xl text-base font-extrabold shadow-2xl shadow-sky-500/30 flex items-center justify-center gap-2 hover:bg-sky-400 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
            className="w-full sm:w-auto bg-black/20 backdrop-blur-md text-white border border-sky-300/40 px-10 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2"
          >
            View Plans
          </motion.button>
        </div>
      </motion.div>
    </div>

    {/* Slide indicators */}
    <div className="relative z-10 flex justify-center gap-2 pb-6">
      {HERO_IMAGES.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`transition-all duration-300 rounded-full ${
            i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
          }`}
        />
      ))}
    </div>

    {/* Stats bar */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-black/5 border border-black grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-black/10">
        {[
          { label: 'Students Managed', val: '10K+' },
          { label: 'Partner Schools', val: '500+' },
          { label: 'System Uptime', val: '99.9%' },
          { label: 'Satisfaction', val: '4.9 / 5' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center py-7 px-4">
            <span className="text-3xl font-black text-blue-950 tracking-tighter">{stat.val}</span>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
  );
};


/* ─────────────────────────────────────────────────────────────────────────── */
/*  SHOWCASE — Every module. One screen.                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

/** Reusable mini browser frame */
const BrowserMockup = ({ src, alt, url }: { src: string; alt: string; url: string }) => (
  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black">
    <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2.5 border-b border-black">
      <div className="flex gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 bg-slate-700/80 rounded-full h-5 flex items-center px-3 min-w-0">
        <span className="text-slate-400 text-[10px] font-mono truncate">{url}</span>
      </div>
    </div>
    <div className="overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto object-cover object-top block"
        style={{ filter: 'grayscale(100%) contrast(1.1) brightness(1.02)' }} />
    </div>
  </div>
);

const ShowcaseSection = () => {
  const { open } = useVideoModal();
  return (
  <section id="showcase" className="py-24 bg-white relative overflow-hidden">
    {/* Dot grid background */}
    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.05] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

      {/* ── Section header ── */}
      <motion.div {...fadeUp(0)} className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-200">
          <LayoutDashboard size={12} /> Live Dashboard Preview
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-5 tracking-tighter leading-tight">
          Every module. One screen.
        </h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
          A clean, minimal interface built for speed — so your team spends less
          time navigating and more time running the school.
        </p>
      </motion.div>

      {/* ══ ROW 1 — Dashboard mockup LEFT · content RIGHT ══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

        {/* LEFT — small dashboard mockup */}
        <motion.div {...fadeLeft(0)} className="relative">
          <BrowserMockup src="/image.png" alt="OneSchool Dashboard" url="app.oneschool.io/dashboard" />
          {/* Floating pill bottom-left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 -left-4 bg-blue-600 text-white rounded-2xl px-5 py-3.5 shadow-2xl hidden sm:flex items-center gap-3 shadow-blue-500/20">
            <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <Users size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Students</div>
              <div className="text-xl font-black leading-none">1,240</div>
            </div>
          </motion.div>
          {/* Floating pill top-right */}
          <motion.div initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute -top-5 -right-4 bg-orange-50 border border-black/10 rounded-2xl px-5 py-3.5 shadow-xl hidden sm:flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
              <PieChart size={16} className="text-slate-900" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Attendance</div>
              <div className="text-xl font-black text-slate-900 leading-none">94%</div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Dashboard copy */}
        <motion.div {...fadeRight(0.1)} className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest w-fit">
            <LayoutDashboard size={11} /> Main Dashboard
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-blue-950 tracking-tighter leading-[1.1]">
            Everything at a glance.<br />
            <span className="text-blue-400">Nothing missed.</span>
          </h3>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            The main dashboard gives principals and admins a live bird&apos;s-eye view of the entire school — students, fees, attendance, and staff — all in one place.
          </p>
          <ul className="space-y-3">
            {[
              'Live student count with enrollment trend chart',
              'Daily attendance rate with class-wise breakdown',
              'Fee collection progress and pending dues',
              'Staff presence and leave summary',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
              <CheckCircle2 size={15} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-600 font-medium">{text}</span>
              </li>
            ))}
          </ul>
          {/* Mini stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Students', val: '1,240', dark: true },
              { label: 'Attendance', val: '94%', dark: false },
              { label: 'Fees Due', val: '28%', dark: false },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl p-4 ${s.dark ? 'bg-black text-white' : 'bg-slate-50 border border-gray-100 text-slate-900'}`}>
                <div className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${s.dark ? 'text-white/40' : 'text-slate-400'}`}>{s.label}</div>
                <div className="text-2xl font-black tracking-tighter">{s.val}</div>
              </div>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-7 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Explore Dashboard <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>

      {/* ══ ROW 2 — content LEFT · Student list mockup RIGHT ══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

        {/* LEFT — Student list copy */}
        <motion.div {...fadeLeft(0.1)} className="flex flex-col gap-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest w-fit">
            <Users size={11} /> Student Management
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-blue-950 tracking-tighter leading-[1.1]">
            Every student.<br />
            <span className="text-blue-400">Fully organised.</span>
          </h3>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            Manage complete student profiles, track academic progress, handle admissions, and generate ID cards — all from a single, searchable student list.
          </p>
          <ul className="space-y-3">
            {[
              'Searchable student database with smart filters',
              'Digital profiles with photos and documents',
              'Class & section assignment management',
              'One-click ID card and report card generation',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-600 font-medium">{text}</span>
              </li>
            ))}
          </ul>
          {/* Inline student list preview */}
          <div className="bg-white border border-black rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-black/10 flex items-center justify-between bg-slate-50/50">
              <span className="text-xs font-black text-blue-900 uppercase tracking-widest">Students</span>
              <span className="text-[10px] text-slate-400 font-medium">1,240 total</span>
            </div>
            {[
              { name: 'Liam Smith', cls: 'Class 10-A', fee: 'Paid' },
              { name: 'Aisha Khan', cls: 'Class 9-B', fee: 'Pending' },
              { name: 'Rohan Mehta', cls: 'Class 11-C', fee: 'Paid' },
              { name: 'Sara Ahmed', cls: 'Class 8-A', fee: 'Paid' },
            ].map((s, i, arr) => (
              <div key={i} className={`px-4 py-3 flex items-center gap-3 ${i < arr.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-black text-slate-600">{s.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{s.name}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{s.cls}</div>
                </div>
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${s.fee === 'Paid' ? 'bg-blue-600 text-white' : 'bg-orange-50 text-orange-600'}`}>
                  {s.fee}
                </span>
              </div>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-7 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            View Student Module <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* RIGHT — small student list mockup */}
        <motion.div {...fadeRight(0)} className="relative order-1 lg:order-2">
          <BrowserMockup src="/image2.png" alt="OneSchool Student List" url="app.oneschool.io/students" />
          {/* Floating pill bottom-right */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 -right-4 bg-white border border-black rounded-2xl px-5 py-3.5 shadow-xl hidden sm:flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-50 border border-black/10 rounded-xl flex items-center justify-center shrink-0">
              <Users size={16} className="text-slate-900" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Students</div>
              <div className="text-xl font-black text-slate-900 leading-none">1,240</div>
            </div>
          </motion.div>
          {/* Floating pill top-left */}
          <motion.div initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute -top-5 -left-4 bg-blue-600 text-white rounded-2xl px-5 py-3.5 shadow-2xl hidden sm:flex items-center gap-3 shadow-blue-500/20">
            <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <Calendar size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Active</div>
              <div className="text-xl font-black leading-none">88 Staff</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>

    {/* ── Module cards grid — full width black ── */}
    <div className="w-full relative py-16 mt-16 overflow-hidden">
      {/* Background image with black overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i1-c.pinimg.com/736x/98/e3/7d/98e37dda773cee472b1e69a08455eaa1.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial="initial" whileInView="whileInView"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { icon: <Users size={20} />, label: 'Student Management', desc: 'Digital profiles, admissions, ID cards, class management and automated report cards.' },
          { icon: <CreditCard size={20} />, label: 'Finance & Fees', desc: 'Configurable fee structures, online payments, automated reminders and real-time tracking.' },
          { icon: <Calendar size={20} />, label: 'Attendance', desc: 'Daily student and staff attendance with leave management and instant parent alerts.' },
          { icon: <MessageSquare size={20} />, label: 'WhatsApp Comms', desc: 'Automated fee, exam, and attendance alerts delivered directly to parents via WhatsApp.' },
          { icon: <PieChart size={20} />, label: 'Reports & Analytics', desc: 'Visual dashboards with enrollment trends, fee collection rates, and performance insights.' },
          { icon: <Bus size={20} />, label: 'Transport & Library', desc: 'GPS-tracked transport routes and full library management in one unified system.' },
        ].map((mod, i) => (
          <motion.div key={i}
            variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="bg-white border border-white/10 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 group">
            <div className="w-11 h-11 bg-slate-100 border border-black/10 rounded-2xl flex items-center justify-center text-slate-900 mb-4 group-hover:bg-black group-hover:text-white group-hover:border-white/20 transition-all duration-300">
              {mod.icon}
            </div>
            <h3 className="text-base font-black text-blue-950 mb-1.5 tracking-tight">{mod.label}</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{mod.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>

  </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  AUTOMATION SECTION                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */
const AutomationSection = () => {
  const automations = [
    {
      icon: <Bell size={20} />,
      title: 'Attendance Alerts',
      desc: 'Parents get an instant WhatsApp message the moment their child marks in or out.',
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Fee Reminders',
      desc: 'Automated payment reminders sent 3 days before due date — zero manual follow-up.',
    },
    {
      icon: <FileText size={20} />,
      title: 'Report Cards',
      desc: 'Auto-generated PDF report cards emailed to parents at the end of every term.',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Homework Alerts',
      desc: 'Teachers post assignments; parents and students get notified instantly.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Emergency Broadcast',
      desc: 'One-click broadcast to all parents, staff, and students in seconds.',
    },
    {
      icon: <BarChart2 size={20} />,
      title: 'Analytics Reports',
      desc: 'Weekly performance summaries auto-sent to the principal every Monday morning.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-orange-50 to-transparent pointer-events-none z-10" />
      {/* Bottom gradient fade to blue */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-200">
            <Zap size={12} /> School Automation
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 tracking-tighter">
            Your school runs itself.
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            OneSchool automates the repetitive — so your staff focuses on what matters: teaching
            and growing.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {automations.map((a, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-black rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                {a.icon}
              </div>
              <h3 className="text-lg font-black text-blue-950 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  WHATSAPP SECTION — pure black bg, floating phone                          */
/* ─────────────────────────────────────────────────────────────────────────── */
const WhatsAppSection = () => {
  const { open } = useVideoModal();
  return (
  <section id="automation" className="py-24 bg-black relative overflow-hidden">
    {/* Top gradient fade from blue-50 */}
    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none z-10" />

    {/* Subtle white grid lines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    {/* Soft glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.08] rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Phone mockup ── */}
        <motion.div {...fadeLeft(0)} className="order-2 lg:order-1 flex justify-center">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-72"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 -z-10 bg-white/5 rounded-[3rem] blur-3xl scale-110" />

            <div className="bg-[#111111] rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden">
              {/* Status bar */}
              <div className="px-6 pt-5 pb-2 flex justify-between items-center bg-[#111111]">
                <span className="text-white text-xs font-bold">9:41</span>
                <div className="w-20 h-5 bg-black rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-3" />
                <div className="flex gap-1 items-center">
                  <div className="w-3.5 h-2 bg-white/60 rounded-sm" />
                  <div className="w-1 h-2 bg-white/30 rounded-sm" />
                </div>
              </div>

              {/* Chat header */}
              <div className="px-4 py-3 flex items-center gap-3 border-b border-white/5 bg-[#111111]">
                <div className="w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-bold truncate">OneSchool Alerts</div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-green-400 text-[10px] font-bold">Online</span>
                  </div>
                </div>
                <MessageSquare size={16} className="text-white/30 shrink-0" />
              </div>

              {/* Messages */}
              <div className="bg-[#111111] px-4 py-5 space-y-3 min-h-[300px]">
                {[
                  { from: 'system', text: '✅ Sarah marked present at 08:30 AM.' },
                  { from: 'parent', text: 'Thanks for the update!' },
                  { from: 'system', text: '🧾 Fee receipt: ₹4,500 received. Balance: ₹0.' },
                  { from: 'system', text: '📝 Mid-terms start Nov 12. Timetable attached.' },
                  { from: 'parent', text: 'Got it, thank you!' },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'parent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-[11px] font-medium leading-relaxed ${
                        msg.from === 'parent'
                          ? 'bg-blue-600 text-white rounded-br-sm shadow-lg shadow-blue-500/20'
                          : 'bg-blue-800/40 text-blue-100 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing dots */}
                <div className="flex justify-start">
                  <div className="bg-blue-800/40 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    {[0, 0.25, 0.5].map((d, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: d }}
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-4 py-3 flex items-center gap-3 border-t border-white/5 bg-[#111111]">
                <div className="flex-1 bg-white/5 rounded-full px-4 py-2.5 text-[11px] text-white/30 font-medium">
                  Type a message…
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Send size={14} className="text-white/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Copy ── */}
        <motion.div {...fadeRight(0)} className="order-1 lg:order-2 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest w-fit shadow-lg shadow-blue-500/20">
            <MessageSquare size={12} /> WhatsApp Integration
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
            Parents stay in the loop.<br />
            <span className="text-white/50">Automatically.</span>
          </h2>
          <p className="text-base text-white/50 font-medium leading-relaxed">
            Every attendance mark, fee payment, exam result, and school announcement is instantly
            delivered to parents via WhatsApp — no app downloads, no logins required.
          </p>
          <ul className="space-y-4">
            {[
              'Instant attendance notifications',
              'Automated fee receipts & reminders',
              'Exam schedules & result alerts',
              'Emergency school broadcasts',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-800/50 rounded-full flex items-center justify-center shrink-0 border border-blue-700">
                  <CheckCircle2 size={12} className="text-blue-400" />
                </div>
                <span className="text-sm text-white/70 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-8 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            See How It Works <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  PRICING SECTION                                                            */
/* ─────────────────────────────────────────────────────────────────────────── */
const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹4,999',
      period: '/mo',
      desc: 'Perfect for small schools getting started.',
      features: ['Up to 300 students', 'Attendance & Fees', 'WhatsApp Alerts', 'Basic Reports'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '₹9,999',
      period: '/mo',
      desc: 'For growing schools that need more power.',
      features: [
        'Up to 1,000 students',
        'All Starter features',
        'Transport Management',
        'Advanced Analytics',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '₹18,999',
      period: '/mo',
      desc: 'Full-featured for established institutions.',
      features: [
        'Up to 3,000 students',
        'All Growth features',
        'Library Management',
        'Custom Branding',
      ],
      cta: 'Most Popular',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large school groups and chains.',
      features: [
        'Unlimited students',
        'All Pro features',
        'Dedicated Support',
        'SLA Guarantee',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="py-24 bg-white relative overflow-hidden">
      {/* Top gradient fade from black (WhatsApp section) */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-200">
            <Sparkles size={12} /> Simple Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 tracking-tighter">
            Plans for every school.
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            No hidden fees. No long-term lock-ins. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 border-2 ${
                plan.highlight
                  ? 'bg-blue-400 text-white shadow-2xl shadow-blue-400/30 scale-[1.02] border-blue-300'
                  : 'bg-white border-black shadow-sm hover:shadow-xl'
              }`}
            >
              <div>
                <div
                  className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${
                    plan.highlight ? 'text-white/40' : 'text-slate-400'
                  }`}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`text-4xl font-black tracking-tighter ${
                      plan.highlight ? 'text-white' : 'text-blue-950'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm font-medium mb-1 ${
                        plan.highlight ? 'text-white/40' : 'text-slate-400'
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    plan.highlight ? 'text-white/50' : 'text-slate-500'
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={14}
                      className={plan.highlight ? 'text-blue-200' : 'text-blue-400'}
                    />
                    <span
                      className={`text-sm font-medium ${
                        plan.highlight ? 'text-white/70' : 'text-slate-600'
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  CTA SECTION                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */
const CTASection = () => {
  return (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — text content */}
        <motion.div {...fadeLeft(0)} className="flex flex-col gap-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest w-fit shadow-lg shadow-blue-200">
            <Sparkles size={12} /> Ready to Transform?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tighter leading-tight">
            Your school deserves<br />
            <span className="text-blue-400">better software.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
            Join 500+ schools already running smarter with OneSchool. Setup takes less than a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-base font-extrabold shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Start Free Trial <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-blue-600 border border-blue-200 px-10 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 hover:bg-blue-50 hover:shadow-lg transition-all"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT — image */}
        <motion.div {...fadeRight(0.1)} className="relative">
          <img
            src="https://i1-c.pinimg.com/736x/59/4b/a4/594ba4907efb803b08451308c02926ea.jpg"
            alt="School"
            className="w-full h-[480px] object-cover object-center"
          />
        </motion.div>

      </div>
    </div>
  </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  FOOTER                                                                     */
/* ─────────────────────────────────────────────────────────────────────────── */
const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#0d0d0d] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Col 1 — Brand + social */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-2xl font-bold tracking-tighter mb-4" style={{ letterSpacing: '-0.03em' }}>
                OneSchool<span style={{ color: '#3B82F6' }}>.</span>
              </div>
              <p className="text-sm text-white/40 font-medium leading-relaxed">
                Empowering schools through smart management, seamless communication, and transformative student experiences across the globe.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[
                {
                  href: 'https://www.linkedin.com/company/onepathsolutions',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.facebook.com/OnePathSolutions/',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.instagram.com/onepathsolutions/',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Quick Links</div>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Features', href: '#features' },
                { label: 'Showcase', href: '#showcase' },
                { label: 'Automation', href: '#automation' },
                { label: 'Plans', href: '#plans' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-medium group">
                    <ArrowRight size={13} className="text-blue-400/60 group-hover:text-blue-400 transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Contact</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400/60 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 font-medium leading-relaxed">
                  8-1-21/146, Level 1, Mirza Arcade,<br />
                  Building, Shaikpet Rd, Surya Nagar,<br />
                  Toli Chowki, Hyderabad, Telangana 500008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-blue-400/60 shrink-0" />
                <a href="tel:+919652301382" className="text-sm text-white/50 hover:text-white transition-colors font-medium">
                  +91 96523 01382
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue-400/60 shrink-0" />
                <a href="mailto:info@onepathsolutions.com" className="text-sm text-white/50 hover:text-white transition-colors font-medium">
                  info@onepathsolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Newsletter</div>
            <p className="text-sm text-white/40 font-medium leading-relaxed mb-5">
              Subscribe to our newsletter for the latest school management tips and platform updates.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business Email"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/60 transition-colors"
              />
              <button
                onClick={() => setEmail('')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25 font-medium">
            © {new Date().getFullYear()} OneSchool. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-medium">
            Built for schools that mean business.
          </p>
        </div>

      </div>
    </footer>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  ROOT EXPORT                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <VideoModalProvider>
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ShowcaseSection />
        <AutomationSection />
        <WhatsAppSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </VideoModalProvider>
  );
}
