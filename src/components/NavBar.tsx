'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', active: false },
    { name: 'Journeys', href: '/your-move', active: true },
    { name: 'Pathfinder', href: '#', active: false },
    { name: 'Skills', href: '#', active: false },
    { name: 'Mentors', href: '#', active: false },
    { name: 'Growth', href: '#', active: false },
  ];

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        height: scrolled ? 72 : 88,
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        borderBottom: '1px solid #F1F5F9'
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* BRANDING */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }} className="group">
           <div style={{ 
              background: '#000', 
              width: 44, 
              height: 44, 
              borderRadius: 12, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
           }} className="group-hover:scale-110 group-hover:-rotate-3">
              <Rocket size={22} color="#FFD100" />
           </div>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: 18, fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.1 }}>CAREER <span style={{ color: '#FFD100' }}>COACHING</span></h1>
              <p style={{ fontSize: 9, fontWeight: 800, color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.15em' }}>by Hertz Ventures</p>
           </div>
        </Link>

        {/* GEN-Z NAV WITH YELLOW OUTLINE */}
        <div style={{ 
          display: 'flex', 
          background: 'rgba(241, 245, 249, 0.6)', 
          padding: '4px', 
          borderRadius: 100, 
          position: 'relative',
          gap: 0,
          border: '2px solid #FFD100', // THE YELLOW OUTLINE
          boxShadow: '0 10px 30px rgba(255, 209, 0, 0.15)'
        }}>
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                padding: '10px 22px',
                fontSize: 13,
                fontWeight: 900,
                color: link.active || hoveredIdx === idx ? '#000' : '#64748B',
                textDecoration: 'none',
                position: 'relative',
                zIndex: 2,
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              {link.active && <div style={{ width: 6, height: 6, background: '#FFD100', borderRadius: '50%' }} />}
              {link.name}
            </Link>
          ))}
          
          {/* THE FLOATING LIQUID PILL */}
          <div 
            style={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: 4 + (hoveredIdx ?? (navLinks.findIndex(l => l.active))) * 110, // Jump logic
              width: 106,
              background: '#fff',
              borderRadius: 100,
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 1,
            }}
          />
        </div>

        {/* PROFILE AREA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <Bell size={22} color="#64748B" style={{ cursor: 'pointer' }} />

           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#000', 
              padding: '6px 16px 6px 6px', 
              borderRadius: 50,
              cursor: 'pointer',
              boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
           }} className="hover:border-[#FFD100] group">
              <div style={{ 
                width: 36, 
                height: 36, 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2px solid #FFD100'
              }}>
                 <Image src="/ram_profile.png" width={36} height={36} alt="Profile" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <p style={{ color: '#fff', fontSize: 13, fontWeight: 950, margin: 0 }}>Ram</p>
                 <p style={{ color: '#FFD100', fontSize: 9, fontWeight: 800, margin: 0, opacity: 0.8, textTransform: 'uppercase' }}>Solution Architect</p>
              </div>
              <ChevronDown size={14} color="#FFD100" />
           </div>
        </div>
      </div>
    </nav>
  );
};
