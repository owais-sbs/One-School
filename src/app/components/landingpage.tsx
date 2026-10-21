"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2, LayoutDashboard,
  Users, PieChart, GraduationCap,
  Calendar, FileText, CreditCard, MessageSquare, Bus, Send, ArrowRight,
  Sparkles, Bell, Shield, Zap, BookOpen, BarChart2,
  Star, TrendingUp
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

const scrollToDemo = () => {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToPlans = () => {
  document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
/*  HERO                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f9fc] pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:22px_22px] opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 shadow-sm">
              <Star size={13} className="fill-blue-500 text-blue-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                The Future of School Management
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Manage your school with{" "}
              <span className="text-blue-600">one smart system.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              The digital spine for your institution — connecting students, parents, teachers, and
              administrators in one premium SaaS ecosystem.
            </p>

            <div>
              <button
                type="button"
                onClick={scrollToDemo}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                Book a Demo <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 border-t border-slate-200/80 pt-5 sm:grid-cols-3">
              {[
                {
                  icon: <Users size={18} className="text-blue-600" />,
                  title: "Unified Platform",
                  desc: "All stakeholders in one place.",
                },
                {
                  icon: <TrendingUp size={18} className="text-teal-600" />,
                  title: "Real-time Insights",
                  desc: "Make smarter decisions with live data.",
                },
                {
                  icon: <Shield size={18} className="text-violet-600" />,
                  title: "Secure & Reliable",
                  desc: "Enterprise-grade security you can trust.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm font-semibold text-slate-900">{item.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[radial-gradient(#93c5fd_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-60" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/80">
              <img
                src="/hero-classroom.jpg"
                alt="Teacher and students in a classroom"
                className="h-[420px] w-full object-cover object-center sm:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  SHOWCASE — Every module. One screen.                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

/** Reusable mini browser frame */
const BrowserMockup = ({ src, alt, url }: { src: string; alt: string; url: string }) => (
  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-200">
    <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2.5 border-b border-slate-200">
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
      <img src={src} alt={alt} className="w-full h-auto object-cover object-top block" />
    </div>
  </div>
);

const ShowcaseSection = () => {
  return (
  <section id="showcase" className="py-24 bg-white relative overflow-hidden">
    {/* Dot grid background */}
    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.05] pointer-events-none" />

    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">

      {/* ── Section header ── */}
      <motion.div {...fadeUp(0)} className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-200">
          <LayoutDashboard size={12} /> Live Dashboard Preview
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-blue-950 mb-5 tracking-tighter leading-tight">
          Every module. One screen.
        </h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
          A clean, minimal interface built for speed — so your team spends less
          time navigating and more time running the school.
        </p>
      </motion.div>

      {/* ══ ROW 1 — Admin Dashboard mockup LEFT · content RIGHT ══ */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-center">

        {/* LEFT — Admin mockup */}
        <motion.div {...fadeLeft(0)} className="lg:col-span-3 relative">
          <BrowserMockup src="/Admin.png" alt="Admin Dashboard" url="app.oneschool.io/admin" />
          {/* Floating pill bottom-left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 -left-4 bg-blue-600 text-white rounded-2xl px-5 py-3.5 shadow-2xl hidden sm:flex items-center gap-3 shadow-blue-500/20">
            <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <Users size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Total Students</div>
              <div className="text-xl font-semibold leading-none">15,000</div>
            </div>
          </motion.div>
          {/* Floating pill top-right */}
          <motion.div initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute -top-5 -right-4 bg-orange-50 border border-slate-200/10 rounded-2xl px-5 py-3.5 shadow-xl hidden sm:flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
              <PieChart size={16} className="text-slate-900" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Attendance</div>
              <div className="text-xl font-semibold text-slate-900 leading-none">94%</div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Admin copy */}
        <motion.div {...fadeRight(0.1)} className="lg:col-span-2 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest w-fit">
            <LayoutDashboard size={11} /> Admin Dashboard
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-950 tracking-tighter leading-[1.1]">
            Control everything.<br />
            <span className="text-blue-400">From one command center.</span>
          </h3>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            The Admin dashboard provides school owners and principals with absolute clarity. Track enrollments, teacher performance, and financial health in real-time.
          </p>
          <ul className="space-y-3">
            {[
              'Real-time student & teacher statistics',
              'Advanced exam result analytics & trends',
              'Fee collection & financial overview',
              'Automated administrative workflows',
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
              { label: 'Students', val: '15.00K', dark: true },
              { label: 'Teachers', val: '2.00K', dark: false },
              { label: 'Earnings', val: '$19.3K', dark: false },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl p-4 ${s.dark ? 'bg-black text-white' : 'bg-slate-50 border border-gray-100 text-slate-900'}`}>
                <div className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${s.dark ? 'text-white/40' : 'text-slate-400'}`}>{s.label}</div>
                <div className="text-2xl font-semibold tracking-tighter">{s.val}</div>
              </div>
            ))}
          </div>
          <motion.button type="button" onClick={scrollToDemo} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-7 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            Explore Admin Panel <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>

      {/* ══ ROW 2 — Teacher mockup LEFT · content RIGHT ══ */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-center">

        {/* LEFT — Teacher copy */}
        <motion.div {...fadeLeft(0.1)} className="lg:col-span-2 flex flex-col gap-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest w-fit">
            <Users size={11} /> Teacher Management
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-950 tracking-tighter leading-[1.1]">
            Empower your educators.<br />
            <span className="text-blue-400">Simplify teaching.</span>
          </h3>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            Teachers can manage their classrooms, mark attendance, post homework, and generate report cards with just a few clicks. No more manual entry.
          </p>
          <ul className="space-y-3">
            {[
              'Classroom management & student lists',
              'Digital attendance & leave tracking',
              'Smart assignment & homework posting',
              'One-click report card generation',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-600 font-medium">{text}</span>
              </li>
            ))}
          </ul>
          <motion.button type="button" onClick={scrollToDemo} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-7 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            View Teacher Module <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* RIGHT — Teacher mockup */}
        <motion.div {...fadeRight(0)} className="lg:col-span-3 relative order-1 lg:order-2">
          <BrowserMockup src="/teacher.png" alt="Teacher Dashboard" url="app.oneschool.io/teacher" />
          {/* Floating pill bottom-right */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 -right-4 bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-xl hidden sm:flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-50 border border-slate-200/10 rounded-xl flex items-center justify-center shrink-0">
              <Users size={16} className="text-slate-900" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Staff</div>
              <div className="text-xl font-semibold text-slate-900 leading-none">2.00K</div>
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
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Attendance</div>
              <div className="text-xl font-semibold leading-none">98.2%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ══ ROW 3 — Parent mockup LEFT · content RIGHT ══ */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-center">

        {/* LEFT — Parent mockup */}
        <motion.div {...fadeLeft(0)} className="lg:col-span-3 relative">
          <BrowserMockup src="/parent.png" alt="Parent Dashboard" url="app.oneschool.io/parent" />
          {/* Floating pill bottom-left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 -left-4 bg-blue-600 text-white rounded-2xl px-5 py-3.5 shadow-2xl hidden sm:flex items-center gap-3 shadow-blue-500/20">
            <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <MessageSquare size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Messages</div>
              <div className="text-xl font-semibold leading-none">12 New</div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Parent copy */}
        <motion.div {...fadeRight(0.1)} className="lg:col-span-2 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest w-fit">
            <Users size={11} /> Parent Dashboard
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-950 tracking-tighter leading-[1.1]">
            Connected parents.<br />
            <span className="text-blue-400">Successful students.</span>
          </h3>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            The parent portal keeps families engaged. Track academic progress, pay fees, and receive instant school alerts — all from a single dashboard.
          </p>
          <ul className="space-y-3">
            {[
              'Real-time academic progress tracking',
              'Secure online fee payments & history',
              'Instant WhatsApp & portal notifications',
              'Direct communication with school staff',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-600 font-medium">{text}</span>
              </li>
            ))}
          </ul>
          <motion.button type="button" onClick={scrollToDemo} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-7 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            Explore Parent Portal <ArrowRight size={15} />
          </motion.button>
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
            <div className="w-11 h-11 bg-slate-100 border border-slate-200/10 rounded-2xl flex items-center justify-center text-slate-900 mb-4 group-hover:bg-black group-hover:text-white group-hover:border-white/20 transition-all duration-300">
              {mod.icon}
            </div>
            <h3 className="text-base font-semibold text-blue-950 mb-1.5 tracking-tight">{mod.label}</h3>
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
          <h2 className="text-4xl md:text-6xl font-semibold text-blue-950 mb-6 tracking-tighter">
            Your school runs itself.
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            One School automates the repetitive — so your staff focuses on what matters: teaching
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
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                {a.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-950 mb-2">{a.title}</h3>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-tight">
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
            type="button"
            onClick={scrollToDemo}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit bg-blue-600 text-white px-8 py-3.5 rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
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

/** Billing toggle – reusable component */
const PricingToggle = ({
  isAnnual,
  onChange,
}: {
  isAnnual: boolean;
  onChange: (val: boolean) => void;
}) => (
  <div className="flex items-center justify-center gap-4">
    <button
      onClick={() => onChange(false)}
      className={`text-sm font-bold transition-colors ${
        !isAnnual ? 'text-blue-950' : 'text-slate-400'
      }`}
    >
      Monthly
    </button>

    {/* Toggle track */}
    <button
      onClick={() => onChange(!isAnnual)}
      className="relative w-14 h-7 rounded-full bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label="Toggle billing period"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className={`absolute top-1 w-5 h-5 rounded-full shadow-md ${
          isAnnual ? 'bg-emerald-500 left-8' : 'bg-white left-1'
        }`}
      />
    </button>

    <button
      onClick={() => onChange(true)}
      className={`text-sm font-bold transition-colors flex items-center gap-2 ${
        isAnnual ? 'text-blue-950' : 'text-slate-400'
      }`}
    >
      Annual
      <AnimatePresence>
        {isAnnual && (
          <motion.span
            key="save-badge"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold uppercase tracking-wide"
          >
            Save 10%
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  </div>
);

/** Config-driven plan data */
interface PlanConfig {
  name: string;
  monthlyPrice: number;
  desc: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
}

const PLAN_CONFIGS: PlanConfig[] = [
  {
    name: 'Starter',
    monthlyPrice: 59,
    desc: 'Up to 100 students',
    features: ['Attendance', 'Parent dashboard', 'Daily diary', 'Notifications'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 129,
    desc: 'Up to 300 students',
    features: ['Accounting', 'CRM', 'Staff management', 'All Starter features'],
    cta: 'Get Started',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Scale',
    monthlyPrice: 249,
    desc: 'Up to 1000 students',
    features: ['HRMS', 'AI tools', 'Advanced analytics', 'Priority support', 'All Growth features'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

/** Derived pricing helpers */
const getAnnualMonthly = (monthly: number) =>
  Math.round(monthly * 0.9);
const getAnnualTotal = (monthly: number) =>
  Math.round(monthly * 12 * 0.9);
const getAnnualSavings = (monthly: number) =>
  Math.round(monthly * 12 - monthly * 12 * 0.9);

/** Single pricing card */
const PricingCard = ({
  plan,
  isAnnual,
  index,
}: {
  plan: PlanConfig;
  isAnnual: boolean;
  index: number;
}) => {
  const displayMonthly = isAnnual
    ? getAnnualMonthly(plan.monthlyPrice)
    : plan.monthlyPrice;
  const annualTotal = getAnnualTotal(plan.monthlyPrice);
  const savings = getAnnualSavings(plan.monthlyPrice);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className={`relative flex flex-col gap-6 rounded-2xl border bg-white p-8 transition-shadow duration-300 ${
        plan.highlight
          ? 'border-blue-600 shadow-xl shadow-blue-600/10 ring-1 ring-blue-600'
          : 'border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap rounded-full bg-blue-600 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <p className="text-sm font-semibold text-slate-500">{plan.name}</p>
        <div className="mt-3 flex items-end gap-1.5">
          {isAnnual && (
            <span className="mb-1 text-base font-medium text-slate-300 line-through">
              ${plan.monthlyPrice}
            </span>
          )}
          <span className="text-4xl font-bold tracking-tight text-slate-900">
            ${displayMonthly}
          </span>
          <span className="mb-1.5 text-sm font-medium text-slate-400">/month</span>
        </div>
        <p className="mt-2 text-sm text-slate-500">{plan.desc}</p>
        {isAnnual && (
          <p className="mt-1 text-xs font-medium text-emerald-600">
            ${annualTotal}/year · Save ${savings}
          </p>
        )}
      </div>

      <div className="h-px bg-slate-100" />

      <ul className="flex-1 space-y-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
            <span className="text-sm font-medium text-slate-600">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={scrollToDemo}
        className={`w-full rounded-xl py-3 text-sm font-bold transition-colors ${
          plan.highlight
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="plans" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Simple Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Plans for every school
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Switch or cancel anytime.
          </p>

          <div className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
            <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>
          {isAnnual && (
            <p className="mt-3 text-sm font-medium text-emerald-600">
              Save 10% with annual billing
            </p>
          )}
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {PLAN_CONFIGS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} index={i} />
          ))}
        </motion.div>

        <motion.p {...fadeUp(0.15)} className="text-center text-sm text-slate-400 font-medium mt-8">
          {isAnnual
            ? 'Billed once per year. Includes 10% off eligible add-ons.'
            : 'Billed monthly. Cancel anytime.'}
        </motion.p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div {...fadeUp(0.2)} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Zap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Add-ons</h3>
                {isAnnual && (
                  <p className="text-xs font-medium text-emerald-600">10% off for annual plans</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['WhatsApp Usage', 'AI Credits', 'Extra Storage', 'Extra Students'].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <CheckCircle2 size={14} className="shrink-0 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Additional Students</h3>
            </div>
            <div className="space-y-3">
              {[
                { range: '100–300', monthly: '+$20/mo', annual: '+$18/mo' },
                { range: '300–500', monthly: '+$40/mo', annual: '+$36/mo' },
                { range: '500+', monthly: 'Custom', annual: 'Custom' },
              ].map((item) => (
                <div
                  key={item.range}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5"
                >
                  <span className="text-sm font-semibold text-slate-800">{item.range} students</span>
                  <span className="text-sm font-bold text-blue-600">
                    {isAnnual ? item.annual : item.monthly}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-950 tracking-tighter leading-tight">
            Your school deserves<br />
            <span className="text-blue-400">better software.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
            Join 500+ schools already running smarter with One School. Setup takes less than a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              type="button"
              onClick={scrollToDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-base font-extrabold shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Book a Demo <ArrowRight size={18} />
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollToPlans}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-blue-600 border border-blue-200 px-10 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 hover:bg-blue-50 hover:shadow-lg transition-all"
            >
              View Plans
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
/*  DEMO FORM SECTION                                                          */
/* ─────────────────────────────────────────────────────────────────────────── */
const DemoSection = () => (
  <section id="demo" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.04] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div {...fadeLeft(0)} className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest w-fit shadow-lg shadow-blue-200">
            <Send size={12} /> Request a Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-950 tracking-tighter leading-tight">
            See One School<br />
            <span className="text-blue-400">in action.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
            Tell us about your school and we&apos;ll schedule a personalised walkthrough of student management, attendance, fees, and parent communication.
          </p>
          <ul className="space-y-3">
            {[
              'Admin, teacher & parent dashboards',
              'Attendance & fee management',
              'WhatsApp parent notifications',
              'Reports & analytics',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                <span className="text-sm text-slate-600 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeRight(0.1)} className="relative">
          <DemoForm />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────────────────── */
/*  ROOT EXPORT                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <ShowcaseSection />
      <AutomationSection />
      <WhatsAppSection />
      <PricingSection />
      <CTASection />
      <DemoSection />
      <SiteFooter />
    </main>
  );
}
