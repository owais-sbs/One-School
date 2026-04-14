"use client";

import React, { useState } from 'react';
import { 
  Menu, X, CheckCircle2, ChevronRight, LayoutDashboard, 
  Users, Banknote, BellRing, PieChart, Shield, GraduationCap, 
  Calendar, FileText, CreditCard, MessageSquare, Bus, Library, MapPin
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-semibold tracking-tight text-gray-900" style={{ fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              OneSchool<span style={{ color: '#3B82F6' }}>.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-600 hover:text-sky-500 transition-colors">Home</a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-sky-500 transition-colors">Features</a>
            <a href="#plans" className="text-sm font-medium text-gray-600 hover:text-sky-500 transition-colors">Plans</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-sky-500 transition-colors">Contact</a>
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-black/20 active:scale-95">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-base font-medium text-gray-700 hover:text-sky-500">Home</a>
            <a href="#features" className="block text-base font-medium text-gray-700 hover:text-sky-500">Features</a>
            <a href="#plans" className="block text-base font-medium text-gray-700 hover:text-sky-500">Plans</a>
            <a href="#contact" className="block text-base font-medium text-gray-700 hover:text-sky-500">Contact</a>
            <button className="w-full bg-black text-white px-6 py-3 rounded-xl text-base font-medium transition-colors shadow-black/20">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-40 md:pt-24 md:pb-48 overflow-hidden bg-slate-50 border-b border-gray-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">School Management System</span>
            </div>
            <h1 className="text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Manage Your Entire <br/> School <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">With a <br/> Single System</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
              Our easy-to-use system is designed for schools to monitor and analyze data on students, staff, parents, and daily operations.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5 ring-1 ring-white/20 inline-flex items-center gap-2">
              View Plans <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-sky-100 rounded-3xl blur-3xl -z-10"></div>
            
            <div className="relative z-10 w-full animate-[fade-in-up_1s_ease-out]">
              {/* Main Image */}
              <img 
                src="/image.png" 
                alt="School Dashboard" 
                className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10 grayscale"
              />
              
              {/* Floating Child Image */}
              <div className="absolute -bottom-10 -right-4 w-[55%] sm:-bottom-12 sm:-right-12 sm:w-[60%] z-20 transition-transform duration-500 hover:-translate-y-2 hover:-translate-x-2">
                <img 
                  src="/image2.png" 
                  alt="Dashboard Statistics" 
                  className="w-full h-auto rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border-[4px] border-white ring-1 ring-gray-200 grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesStrip = () => {
  const features = [
    { icon: <Users size={24} />, title: "Student & Academic", desc: "Manage classes & grades" },
    { icon: <Banknote size={24} />, title: "Finance & Attendance", desc: "Track fees & presence" },
    { icon: <MessageSquare size={24} />, title: "Communication System", desc: "Alerts & updates" },
    { icon: <PieChart size={24} />, title: "Reports & Analytics", desc: "Insightful dashboards" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black p-8 backdrop-blur-sm bg-white/90">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-8 md:pt-0' : ''}`}>
              <div className="w-14 h-14 bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-200 text-black rounded-xl flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">{feature.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesGrid = () => {
  const category1 = [
    "Digital student profiles",
    "Online admissions & ID cards",
    "Class/section management",
    "Lesson planning & syllabus tracking",
    "Exam scheduling & grading",
    "Automated report cards",
    "Online assignments & workflows"
  ];

  const category2 = [
    "Configurable fee structures",
    "Online payments & receipts",
    "Automated fee reminders",
    "Real-time fee tracking",
    "Student & staff attendance",
    "Staff profiles & payroll",
    "Leave management"
  ];

  const category3 = [
    "WhatsApp notifications (fees, exams)",
    "Emergency broadcasts",
    "Homework alerts",
    "Transport tracking with GPS",
    "Library management",
    "Parent & student portal"
  ];

  return (
    <section id="features" className="py-32 bg-white relative">
      {/* Faint Dot Background for a tech/premium feel */}
      <div className="absolute inset-0 border-t border-gray-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">run your school</span></h2>
          <p className="text-lg text-slate-500 font-medium">Powerful features tailored perfectly for administrators, teachers, parents, and students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-black transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-50 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center text-black mb-6 group-hover:scale-105 group-hover:bg-gray-100 group-hover:border-gray-300 transition-all">
              <GraduationCap size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-gray-100 pb-4">Student & Academic</h3>
            <ul className="space-y-4">
              {category1.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-3 justify-start sm:gap-3">
                  <CheckCircle2 size={18} className="text-sky-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-black transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-50 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center text-black mb-6 group-hover:scale-105 group-hover:bg-gray-100 group-hover:border-gray-300 transition-all">
              <CreditCard size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-gray-100 pb-4">Finance, HR & Attendance</h3>
            <ul className="space-y-4">
              {category2.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-3 justify-start sm:gap-3">
                  <CheckCircle2 size={18} className="text-sky-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-black transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-50 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center text-black mb-6 group-hover:scale-105 group-hover:bg-gray-100 group-hover:border-gray-300 transition-all">
              <MessageSquare size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-gray-100 pb-4">Communication & Other</h3>
            <ul className="space-y-4">
              {category3.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-3 justify-start sm:gap-3">
                  <CheckCircle2 size={18} className="text-sky-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/1200x/c6/da/ac/c6daac184539e1fca85394e35b04051c.jpg" 
          alt="How It Works Background" 
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">How One School Works</h2>
          <p className="text-gray-300 text-lg drop-shadow-sm">Streamline your operations in just a few simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[4rem] left-1/6 right-1/6 h-0.5 bg-white/20 z-0"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md text-white font-bold text-2xl rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/20">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">Add Students & Setup School</h3>
            <p className="text-gray-300 leading-relaxed font-medium drop-shadow-sm">Register students, classes, and configure your entire academic structure with ease.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md text-white font-bold text-2xl rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/20">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">Manage Fees & Attendance</h3>
            <p className="text-gray-300 leading-relaxed font-medium drop-shadow-sm">Track fee collections, daily attendance, transport and all routine operations.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md text-white font-bold text-2xl rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/20">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">Communicate & Analyze</h3>
            <p className="text-gray-300 leading-relaxed font-medium drop-shadow-sm">Send automated updates, generate smart reports, and manage everything centrally.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      students: "Up to 200 students",
      features: ["Student Management", "Attendance", "Fee Collection", "Basic Reports"],
      highlight: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      students: "Up to 1,000 students",
      features: ["Everything in Starter", "Exams & Library", "Transport Management", "Full WhatsApp Integration", "Parent Portal"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom Value",
      period: "",
      students: "Unlimited students",
      features: ["Biometric Integration", "Payroll Management", "Custom Feature Requests", "Priority Dedicated Support"],
      highlight: false
    },
    {
      name: "Customisable Solution",
      price: "One-Time",
      period: "+ maintenance",
      students: "Any size institution",
      features: ["Full Source Code Provided", "Custom Branding", "Self-Hosted Deployment", "Enterprise Grade Security"],
      highlight: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Subscription Plans</h2>
          <p className="text-lg text-slate-500 font-medium">Flexible pricing tailored for institutions of all sizes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative rounded-2xl p-8 flex flex-col bg-white transition-all duration-300 ${plan.highlight ? 'border-2 border-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] -translate-y-2 z-10' : 'border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1'}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800 to-black text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{plan.name}</h3>
                <div className="text-xs font-bold text-gray-900 bg-gray-100 border border-gray-200 inline-flex items-center px-3 py-1.5 rounded-md mb-6 tracking-wide">
                  {plan.students}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.highlight ? 'text-black' : 'text-slate-900'}`}>{plan.price}</span>
                  <span className="text-slate-500 font-medium mb-1">{plan.period}</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${plan.highlight ? 'bg-black text-white shadow-md hover:bg-gray-800 ring-1 ring-black/50' : 'bg-white text-slate-700 border border-gray-200 shadow-sm hover:bg-slate-50 hover:border-gray-300'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-black rounded-[3rem] px-8 py-16 md:py-24 md:px-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.littlelives.com/_next/image?url=https%3A%2F%2Fll-cms-prod.s3.ap-southeast-1.amazonaws.com%2FGroup_120_2x_583b781bc7.png&w=640&q=75" 
            alt="CTA Background" 
            className="w-full h-full object-cover object-center opacity-80 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 z-0"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Digitise Your School with One School</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed drop-shadow-sm font-medium">
            Manage students, fees, attendance, and communication in one powerful platform. Join to experience frictionless administration today.
          </p>
          <button className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
            Get Started Now <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900">One <span className="text-black">School</span></span>
            </div>
            <p className="text-gray-500 mb-6">The digital spine for your school. A seamless ecosystem for all your educational and administrative needs.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Home</a></li>
              <li><a href="#features" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Features</a></li>
              <li><a href="#plans" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Plans</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Admissions & Enrollments</a></li>
              <li><a href="#" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Fee Management System</a></li>
              <li><a href="#" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Student Attendance</a></li>
              <li><a href="#" className="text-gray-500 hover:text-sky-500 transition-colors text-sm">Analytics & Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex gap-3"><MapPin size={18} className="text-sky-500 shrink-0" /> <span>123 Education Lane, Tech District, City 90001</span></li>
              <li className="flex gap-3 items-center"><MessageSquare size={18} className="text-sky-500 shrink-0" /> <span>hello@oneschool.com</span></li>
              <li className="flex gap-3 items-center"><FileText size={18} className="text-sky-500 shrink-0" /> <span>+1 (800) 123-4567</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} One School. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-sky-500">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-sky-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MAIN PAGE EXPORT                             */
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-sky-100 selection:text-sky-900 font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesStrip />
      <FeaturesGrid />
      <HowItWorks />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
