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
    <nav className="sticky top-0 z-[100] bg-white border-b-4 border-[#FFD100] px-8 h-20 flex items-center justify-between shadow-md">
      {/* Brand */}
      <Link href="/dashboard" className="flex items-center gap-3 decoration-none no-underline">
        <div className="w-10 h-10 bg-[#FFD100] rounded-xl flex items-center justify-center shadow-lg">
          <TrendingUp size={24} color="black" />
        </div>
        <div>
          <h1 className="text-xl font-black text-black tracking-tighter m-0 leading-none">HERTZ REWARDS</h1>
          <p className="text-[10px] font-bold text-black uppercase tracking-[0.2rem] m-0 mt-1 opacity-60">Career Accelerator</p>
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
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-[13px] transition-all no-underline ${
                isActive 
                  ? 'bg-[#FFD100] text-black shadow-sm' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <Icon size={16} />
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 text-black relative transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-black rounded-full border-2 border-[#FFD100]"></span>
          </button>
          
          {/* User Menu */}
          <div ref={menuRef} className="relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 p-1 pr-4 rounded-xl bg-gray-50 border-2 border-[#FFD100] shadow-sm hover:translate-y-[-2px] transition-transform"
            >
              <div className="h-8 w-8 rounded-lg bg-black overflow-hidden border border-white">
                <Image 
                  src="/ram_profile.png" 
                  alt="Profile" 
                  width={32} 
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] font-black text-black leading-none py-0.5">RAM JIRAM</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest m-0">Gold Plus Tier</p>
              </div>
              <ChevronDown size={12} className={`text-black transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {menuOpen && (
              <div className="absolute top-[calc(100%+8px)] right-0 w-56 bg-white rounded-2xl shadow-2xl border-2 border-[#FFD100] overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <button className="w-full flex items-center gap-3 px-5 py-3 text-xs font-black text-black hover:bg-[#FFD100] transition-colors uppercase tracking-widest">
                  <User size={16} /> Dashboard
                </button>
                <button className="w-full flex items-center gap-3 px-5 py-3 text-xs font-black text-black hover:bg-[#FFD100] transition-colors uppercase tracking-widest border-t border-gray-100">
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
