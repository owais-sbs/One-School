"use client";

import React from 'react';
import { 
  LayoutDashboard, Users, UserPlus, BookOpen, FileSpreadsheet, 
  CheckSquare, Wallet, Briefcase, MessageSquare, Bus, Library, 
  BarChart3, Settings, Search, Bell, User, ChevronUp, ChevronDown, 
  MoreHorizontal, Plus, Calendar, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                DASHBOARD UI                                */
/* -------------------------------------------------------------------------- */

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group ${active ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}>
    <Icon size={18} className={`${active ? 'text-black' : 'group-hover:text-white'}`} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const StatCard = ({ label, value, trend, trendType }: { label: string, value: string, trend: string, trendType: 'up' | 'down' }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md">
    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trendType === 'up' ? 'bg-white/10 text-white' : 'bg-gray-800 text-gray-400'}`}>
        {trendType === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.07] transition-all cursor-pointer group">
    <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-6 font-sans">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans selection:bg-white selection:text-black">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 flex flex-col p-6 fixed h-full bg-[#050505] z-50">
        <div className="flex items-center gap-2 mb-12 px-4">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tight">OneSchool</span>
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Users} label="Students" />
          <SidebarItem icon={UserPlus} label="Admissions" />
          <SidebarItem icon={BookOpen} label="Academics" />
          <SidebarItem icon={FileSpreadsheet} label="Examinations" />
          <SidebarItem icon={CheckSquare} label="Attendance" />
          <SidebarItem icon={Wallet} label="Finance" />
          <SidebarItem icon={Briefcase} label="HR & Staff" />
          <SidebarItem icon={MessageSquare} label="Communication" />
          <SidebarItem icon={Bus} label="Transport" />
          <SidebarItem icon={Library} label="Library" />
          <SidebarItem icon={BarChart3} label="Reports & Analytics" />
        </div>

        <div className="pt-6 border-t border-white/10 mt-6">
          <SidebarItem icon={Settings} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Top Navbar */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-10 sticky top-0 bg-[#050505]/80 backdrop-blur-xl z-40">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-white/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
                <User size={20} className="text-white" />
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-bold text-white leading-none">Admin Profile</p>
                <p className="text-xs text-gray-500 mt-1">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-10 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold mb-2">System Overview</h1>
              <p className="text-gray-500 font-medium">Monitoring school operations in real-time.</p>
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
              <Plus size={18} /> Quick Action
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard label="Total Students" value="1,248" trend="+12.5%" trendType="up" />
            <StatCard label="Total Staff" value="84" trend="+2.4%" trendType="up" />
            <StatCard label="Attendance Today" value="94.2%" trend="-0.8%" trendType="down" />
            <StatCard label="Fee Collection" value="$42.5k" trend="+8.2%" trendType="up" />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex items-center justify-between mb-10 relative z-10">
                <h3 className="text-xl font-bold">Fee Collection Overview</h3>
                <select className="bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold outline-none cursor-pointer">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              
              {/* Fake Line Chart SVG */}
              <div className="h-64 w-full relative group">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  {[0, 25, 50, 75, 100].map(v => (
                    <line key={v} x1="0" y1={v} x2="100" y2={v} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
                  ))}
                  {/* Path Area */}
                  <path 
                    d="M 0 80 L 20 60 L 40 70 L 60 40 L 80 50 L 100 20 L 100 100 L 0 100 Z" 
                    fill="url(#gradient)" 
                  />
                  {/* Line Path */}
                  <path 
                    d="M 0 80 L 20 60 L 40 70 L 60 40 L 80 50 L 100 20" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="animate-[draw_2s_ease-out]"
                  />
                  {/* Points */}
                  {[
                    {x:0, y:80}, {x:20, y:60}, {x:40, y:70}, {x:60, y:40}, {x:80, y:50}, {x:100, y:20}
                  ].map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="white" className="drop-shadow-[0_0_5px_white]" />
                  ))}
                </svg>
                {/* Labels */}
                <div className="flex justify-between mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </div>
            </div>

            {/* Side Panel: Quick Actions/Announcements */}
            <div className="space-y-6">
              <div className="bg-white text-black p-8 rounded-[2.5rem] relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold mb-6 relative z-10 flex items-center justify-between">
                  Quick Actions <Calendar size={20} />
                </h3>
                <div className="space-y-3 relative z-10">
                  <button className="w-full bg-black text-white py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <UserPlus size={16} /> Add Student
                  </button>
                  <button className="w-full bg-black/5 border border-black/10 text-black py-3 rounded-2xl text-sm font-bold hover:bg-black/10 transition-all">
                    Mark Attendance
                  </button>
                  <button className="w-full bg-black/5 border border-black/10 text-black py-3 rounded-2xl text-sm font-bold hover:bg-black/10 transition-all">
                    Collect Fee
                  </button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-black/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Recent Announcements</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 group/item">
                       <div className="w-1 h-8 bg-black/20 rounded-full group-hover/item:bg-black transition-all"></div>
                       <div>
                         <p className="text-sm font-bold">Annual Sports Day Schedule</p>
                         <p className="text-xs opacity-50">Postponed to next Monday</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <FeatureCard 
              icon={BookOpen} 
              title="Student & Academic" 
              items={["Digital student profiles", "Grade Management", "Syllabus Tracking"]} 
            />
            <FeatureCard 
              icon={Wallet} 
              title="Finance & HR" 
              items={["Online Fee Collection", "Payroll Processing", "Staff Attendance"]} 
            />
            <FeatureCard 
              icon={MessageSquare} 
              title="Communication" 
              items={["WhatsApp Alerts", "Circular Distribution", "Parent Feed"]} 
            />
          </div>

          {/* Activity Section */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Recent Activities</h3>
              <button className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { name: "John Doe", action: "Admission Fee Paid", time: "2 mins ago", type: "payment" },
                { name: "Sarah Smith", action: "Attendance Marked", time: "15 mins ago", type: "attendance" },
                { name: "Principal", action: "Broadcast: New Exam Dates", time: "1 hour ago", type: "broadcast" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <div className="w-1 h-4 bg-current rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{activity.name} <span className="font-medium text-gray-500">{activity.action}</span></p>
                      <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                  <MoreHorizontal size={18} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes draw {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
