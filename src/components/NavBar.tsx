'use client';

import { TrendingUp, User, Bell, Search, Menu, Map, Briefcase, BookOpen, Users, Zap, Compass, ChevronDown, Sparkles, LogOut, BarChart3, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const mainLinks = [
    { name: 'Home', href: '/dashboard', icon: TrendingUp },
    { name: 'Journeys', href: '/your-move', icon: Compass },
    { name: 'Skills', href: '#', icon: Zap },
    { name: 'Mentors', href: '#', icon: Users },
    { name: 'Learn', href: '#', icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 px-8 h-20 flex items-center justify-between shadow-sm">
      {/* Brand */}
      <Link href="/dashboard" className="flex items-center gap-3 decoration-none no-underline">
        <div className="w-10 h-10 bg-[#FF5A3C] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF5A3C]44">
          <TrendingUp size={24} color="white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight m-0 leading-none">Career Coaching</h1>
          <p className="text-[10px] font-bold text-[#FF5A3C] uppercase tracking-[0.2rem] m-0 mt-1">AI Growth Platform</p>
        </div>
      </Link>

      {/* Main Nav */}
      <div className="hidden lg:flex items-center gap-2">
        {mainLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-[14px] transition-all no-underline ${
                isActive 
                  ? 'bg-[#FF5A3C] text-white shadow-md shadow-[#FF5A3C]33' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={18} />
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <div className="hidden xl:flex items-center bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search roles, skills..." 
            className="bg-transparent border-none outline-none px-3 text-sm font-semibold w-56 text-gray-700 placeholder:text-gray-400"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2.5 rounded-xl hover:bg-gray-50 text-gray-500 relative transition-colors">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#FF5A3C] rounded-full border-2 border-white"></span>
          </button>
          
          {/* User Menu */}
          <div ref={menuRef} className="relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center gap-3 p-1 pr-4 rounded-2xl bg-gray-50 border transition-all ${menuOpen ? 'border-[#FF5A3C] outline-none ring-2 ring-[#FF5A3C]22' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <div className="h-10 w-10 rounded-xl bg-gray-200 overflow-hidden border-2 border-white">
                <Image 
                  src="/ram_profile.png" 
                  alt="Profile" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-none">Strategic Profile</p>
                <p className="text-[10px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">Expert Mode</p>
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {menuOpen && (
              <div className="absolute top-[calc(100%+12px)] right-0 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-5 py-4 border-b border-gray-50">
                  <p className="font-bold text-gray-900">Expert Analyst</p>
                  <p className="text-xs text-gray-500 font-medium">10+ Years Experience</p>
                </div>
                <div className="py-2">
                  <button className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                    <User size={18} className="text-gray-400" /> View Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                    <BarChart3 size={18} className="text-gray-400" /> Statistics
                  </button>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <button className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-[#FF5A3C] hover:bg-[#FF5A3C]08 transition-colors">
                    <LogOut size={18} /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
