'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: 'Skills', href: '#', icon: Target },
    { name: 'Mentors', href: '#', icon: Users },
    { name: 'Labs', href: '#', icon: GraduationCap },
  ];

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid #E2E8F0',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
        height: 72,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* BRAND LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
           <div style={{ background: '#FFD100', width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Rocket size={20} color="#000" />
           </div>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: 18, fontWeight: 900, color: '#000', margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>CAREER COACHING</h1>
              <p style={{ fontSize: 9, fontWeight: 800, color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.15em' }}>by Hertz</p>
           </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="nav-item-hertz-refined"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 8,
                textDecoration: 'none',
                color: link.active ? '#000' : '#64748B',
                background: link.active ? '#FFD100' : 'transparent',
                fontWeight: 800,
                fontSize: 13,
                transition: 'all 0.2s ease',
              }}
            >
              <link.icon size={16} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <Bell size={20} color="#64748B" style={{ cursor: 'pointer' }} />

           {/* UPDATED PROFILE SECTION - RAM & SOLUTION ARCHITECT */}
           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#F8FAFC', 
              padding: '6px 16px 6px 6px', 
              borderRadius: 40,
              cursor: 'pointer',
              border: '1px solid #E2E8F0',
              transition: 'all 0.2s'
           }} className="hover:border-yellow-400">
              <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', border: '1px solid #fff' }}>
                 <Image src="/ram_profile.png" width={36} height={36} alt="Profile" />
              </div>
              <div style={{ whiteSpace: 'nowrap' }}>
                 <p style={{ color: '#000', fontSize: 13, fontWeight: 800, margin: 0 }}>Ram</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <p style={{ color: '#94A3B8', fontSize: 10, fontWeight: 700, margin: 0 }}>Solution Architect</p>
                    <Sparkles size={8} color="#FFD100" fill="#FFD100" />
                 </div>
              </div>
              <ChevronDown size={14} color="#CBD5E1" />
           </div>
        </div>
      </div>

      <style>{`
        .nav-item-hertz-refined:hover {
          background: #F1F5F9;
          color: #000 !important;
        }
      `}</style>
    </nav>
  );
};
