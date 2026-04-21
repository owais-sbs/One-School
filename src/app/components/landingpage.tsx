"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, CheckCircle2, LayoutDashboard,
  Users, Banknote, PieChart, GraduationCap,
  Calendar, FileText, CreditCard, MessageSquare, Bus, Send, ArrowRight,
  Sparkles, Bell, Shield, Zap, BookOpen, BarChart2
} from 'lucide-react';

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
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3'
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
                ? 'bg-slate-50 border-slate-100'
                : 'bg-white/10 backdrop-blur-md border-white/20'
            }`}
          >
            {['Home', 'Features', 'Showcase', 'Automation', 'Plans'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-black'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex"
          >
            <button
              className={`px-7 py-3 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ${
                scrolled
                  ? 'bg-black text-white hover:bg-slate-800'
                  : 'bg-white text-black hover:bg-slate-100'
              }`}
            >
              Login
            </button>
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
              <button className="w-full bg-black text-white px-6 py-4 rounded-2xl text-lg font-bold">
                Login
              </button>
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
const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-white">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero.png"
        alt="School Campus"
        className="w-full h-full object-cover object-center"
        style={{ filter: 'grayscale(20%) brightness(0.50)' }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white to-transparent" />
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <Sparkles className="text-white" size={14} />
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            The Future of School Management
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-lg">
          Manage your school{' '}
          <br className="hidden md:block" />
          <span className="text-white/75">with one smart system</span>
        </h1>

        <p className="text-lg md:text-xl text-white/65 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
          The digital spine for your institution — connecting students, parents, teachers, and
          administrators in one premium SaaS ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-2xl text-base font-extrabold shadow-2xl flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2"
          >
            View Plans
          </motion.button>
        </div>
      </motion.div>
    </div>

    {/* Stats bar */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
        {[
          { label: 'Students Managed', val: '10K+' },
          { label: 'Partner Schools', val: '500+' },
          { label: 'System Uptime', val: '99.9%' },
          { label: 'Satisfaction', val: '4.9 / 5' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center py-7 px-4">
            <span className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

/* ─────────────────────────────────────────────────────────────────────────── */
/*  FEATURE STRIP                                                              */
/* ─────────────────────────────────────────────────────────────────────────── */
const FeatureStrip = () => {
  const features = [
    { icon: <GraduationCap size={26} />, title: 'Academic Hub', desc: 'Gradebooks & Profiles' },
    { icon: <Banknote size={26} />, title: 'Finance Core', desc: 'Automated Billing' },
    { icon: <MessageSquare size={26} />, title: 'Unified Comms', desc: 'WhatsApp & Alerts' },
    { icon: <PieChart size={26} />, title: 'AI Analytics', desc: 'Visual Reporting' },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] group cursor-pointer hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  SHOWCASE — Every module. One screen.                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

/** Reusable mini browser frame */
const BrowserMockup = ({ src, alt, url }: { src: string; alt: string; url: string }) => (
  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] border border-slate-700/80">
    <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2.5 border-b border-slate-700">
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

const ShowcaseSection = () => (
  <section id="showcase" className="py-28 bg-white relative overflow-hidden">
    {/* Dot grid background */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-35 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">

      {/* ── Section header ── */}
      <motion.div {...fadeUp(0)} className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6">
          <LayoutDashboard size={12} /> Live Dashboard Preview
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-5 tracking-tighter leading-tight">
          Every module. One screen.
        </h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
          A clean, minimal black-and-white interface built for speed — so your team spends less
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
            className="absolute -bottom-5 -left-4 bg-black text-white rounded-2xl px-5 py-3.5 shadow-2xl hidden sm:flex items-center gap-3">
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
            className="absolute -top-5 -right-4 bg-white border border-gray-100 rounded-2xl px-5 py-3.5 shadow-xl hidden sm:flex items-center gap-3">
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
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Everything at a glance.<br />
            <span className="text-slate-400">Nothing missed.</span>
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
                <CheckCircle2 size={15} className="text-black mt-0.5 shrink-0" />
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
            className="w-fit bg-black text-white px-7 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
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
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Every student.<br />
            <span className="text-slate-400">Fully organised.</span>
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
                <CheckCircle2 size={15} className="text-black mt-0.5 shrink-0" />
                <span className="text-sm text-slate-600 font-medium">{text}</span>
              </li>
            ))}
          </ul>
          {/* Inline student list preview */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-slate-50">
              <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Students</span>
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
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${s.fee === 'Paid' ? 'bg-black text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {s.fee}
                </span>
              </div>
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-fit bg-black text-white px-7 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
            View Student Module <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* RIGHT — small student list mockup */}
        <motion.div {...fadeRight(0)} className="relative order-1 lg:order-2">
          <BrowserMockup src="/image2.png" alt="OneSchool Student List" url="app.oneschool.io/students" />
          {/* Floating pill bottom-right */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 -right-4 bg-white border border-gray-100 rounded-2xl px-5 py-3.5 shadow-xl hidden sm:flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
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
            className="absolute -top-5 -left-4 bg-black text-white rounded-2xl px-5 py-3.5 shadow-2xl hidden sm:flex items-center gap-3">
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

      {/* ── Module cards grid ── */}
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
            className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-black/10 transition-all duration-300 group">
            <div className="w-11 h-11 bg-slate-50 border border-gray-200 rounded-2xl flex items-center justify-center text-slate-900 mb-4 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
              {mod.icon}
            </div>
            <h3 className="text-base font-black text-slate-900 mb-1.5 tracking-tight">{mod.label}</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{mod.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Top gradient fade from white */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      {/* Bottom gradient fade to white */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6">
            <Zap size={12} /> School Automation
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
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
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-black/10 transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-black rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {a.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">{a.title}</h3>
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
const WhatsAppSection = () => (
  <section id="automation" className="py-32 bg-black relative overflow-hidden">
    {/* Top gradient fade from white */}
    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

    {/* Subtle white grid lines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    {/* Soft glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
                          ? 'bg-white text-black rounded-br-sm'
                          : 'bg-white/10 text-white/85 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing dots */}
                <div className="flex justify-start">
                  <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    {[0, 0.25, 0.5].map((d, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: d }}
                        className="w-1.5 h-1.5 bg-white/40 rounded-full"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest w-fit border border-white/10">
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
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 size={12} className="text-white/60" />
                </div>
                <span className="text-sm text-white/70 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit bg-white text-black px-8 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors"
          >
            See How It Works <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
);

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
    <section id="plans" className="py-32 bg-white relative overflow-hidden">
      {/* Top gradient fade from black (WhatsApp section) */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} /> Simple Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
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
              className={`rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-black text-white shadow-2xl shadow-black/20 scale-[1.02]'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-black/10'
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
                      plan.highlight ? 'text-white' : 'text-slate-900'
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
                      className={plan.highlight ? 'text-white/60' : 'text-slate-400'}
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
                    ? 'bg-white text-black hover:bg-slate-100'
                    : 'bg-black text-white hover:bg-slate-800'
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
const CTASection = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest">
          <Sparkles size={12} /> Ready to Transform?
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
          Your school deserves<br />
          <span className="text-slate-400">better software.</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium max-w-xl">
          Join 500+ schools already running smarter with OneSchool. Setup takes less than a day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-10 py-4 rounded-2xl text-base font-extrabold shadow-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
          >
            Start Free Trial <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black border border-gray-200 px-10 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 hover:border-black/20 hover:shadow-lg transition-all"
          >
            Book a Demo
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────────────────── */
/*  FOOTER                                                                     */
/* ─────────────────────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer className="bg-black text-white py-20 relative overflow-hidden">
    {/* Top gradient fade from white */}
    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          initial: {},
          whileInView: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
      >
        {/* Brand */}
        <motion.div
          variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div className="text-2xl font-bold tracking-tighter mb-4" style={{ letterSpacing: '-0.03em' }}>
            OneSchool<span style={{ color: '#3B82F6' }}>.</span>
          </div>
          <p className="text-sm text-white/40 font-medium leading-relaxed">
            The complete school management platform for modern institutions.
          </p>
        </motion.div>

        {/* Product */}
        <motion.div
          variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-5">Product</div>
          <ul className="space-y-3">
            {['Features', 'Pricing', 'Changelog', 'Roadmap'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-5">Company</div>
          <ul className="space-y-3">
            {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-5">Legal</div>
          <ul className="space-y-3">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        {...fadeUp(0)}
        className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p className="text-xs text-white/30 font-medium">
          © {new Date().getFullYear()} OneSchool. All rights reserved.
        </p>
        <p className="text-xs text-white/20 font-medium">
          Built for schools that mean business.
        </p>
      </motion.div>
    </div>
  </footer>
);

/* ─────────────────────────────────────────────────────────────────────────── */
/*  ROOT EXPORT                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <ShowcaseSection />
      <AutomationSection />
      <WhatsAppSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
