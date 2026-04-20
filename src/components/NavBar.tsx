'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: LayoutDashboard },
    { name: 'Journeys', href: '/your-move', icon: Map, active: true },
    { name: 'Pathfinder', href: '#', icon: Compass },
    { name: 'Skills Lab', href: '#', icon: Target },
    { name: 'Mentors', href: '#', icon: Users },
    { name: 'Growth', href: '#', icon: Zap },
  ];

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#ffffff',
        borderBottom: '1px solid #F1F5F9',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.06)' : 'none',
        height: 72,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* REFINED BRAND LOGO (STRIPE STYLE COLORS) */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
           <div style={{ background: '#FFD100', width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(255,209,0,0.2)' }}>
              <Rocket size={18} color="#000" />
           </div>
           <div>
              <h1 style={{ fontSize: 16, fontWeight: 850, color: '#0F172A', margin: 0, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>CAREER COACHING</h1>
              <p style={{ fontSize: 9, fontWeight: 700, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Intelligence by Hertz</p>
           </div>
        </Link>

        {/* STRIPE-THEMED TAB MENU (NO DROPDOWNS) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="stripe-nav-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 50,
                textDecoration: 'none',
                color: link.active ? '#0F172A' : '#475569',
                background: link.active ? 'rgba(255, 209, 0, 0.15)' : 'transparent',
                fontWeight: 800,
                fontSize: 14,
                transition: 'all 0.2s',
              }}
            >
              <link.icon size={16} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* REFINED STRIPE-STYLE PROFILE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <Bell size={20} color="#94A3B8" style={{ cursor: 'pointer' }} />

           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#fff', 
              padding: '6px 14px 6px 6px', 
              borderRadius: 50,
              cursor: 'pointer',
              border: '1px solid #F1F5F9',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'all 0.2s'
           }} className="hover:shadow-md hover:border-slate-300">
              <div style={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                 <Image src="/ram_profile.png" width={34} height={34} alt="Profile" />
              </div>
              <div style={{ whiteSpace: 'nowrap' }}>
                 <p style={{ color: '#0F172A', fontSize: 13, fontWeight: 800, margin: 0 }}>Ram</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <p style={{ color: '#64748B', fontSize: 10, fontWeight: 700, margin: 0 }}>Solution Architect</p>
                    <Sparkles size={8} color="#FFD100" fill="#FFD100" />
                 </div>
              </div>
              <ChevronDown size={14} color="#CBD5E1" />
           </div>
        </div>
      </div>

      <style>{`
        .stripe-nav-item:hover {
          background: #F8FAFC;
          color: #0F172A !important;
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
};
