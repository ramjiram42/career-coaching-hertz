'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        height: scrolled ? 70 : 90,
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* GEN-Z BRANDING - LIQUID SCALE */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }} className="group">
           <div style={{ 
              background: '#000', 
              width: 48, 
              height: 48, 
              borderRadius: 16, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
           }} className="group-hover:scale-110 group-hover:-rotate-6">
              <Rocket size={24} color="#FFD100" />
           </div>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: 22, fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: 1 }}>CAREER <span style={{ color: '#FFD100' }}>COACH</span></h1>
              <p style={{ fontSize: 10, fontWeight: 900, color: '#94A3B8', margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.2em' }}>High Performance</p>
           </div>
        </Link>

        {/* GEN-Z MAGNETIC NAV - LIQUID INDICATOR */}
        <div style={{ 
          display: 'flex', 
          background: 'rgba(241, 245, 249, 0.5)', 
          padding: '6px', 
          borderRadius: 24, 
          position: 'relative',
          gap: 4
        }}>
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                padding: '12px 24px',
                fontSize: 14,
                fontWeight: 900,
                color: link.active || hoveredIdx === idx ? '#000' : '#64748B',
                textDecoration: 'none',
                position: 'relative',
                zIndex: 2,
                transition: 'color 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              {link.active && <Sparkles size={12} color="#FFD100" fill="#FFD100" />}
              {link.name}
            </Link>
          ))}
          
          {/* LIQUID SPRING INDICATOR */}
          <div 
            style={{
              position: 'absolute',
              top: 6,
              bottom: 6,
              left: 6 + (hoveredIdx ?? (navLinks.findIndex(l => l.active))) * 115, // Approximate jump
              width: 110,
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 1,
              opacity: hoveredIdx !== null ? 1 : 1, // Keep it on active if not hovering
            }}
            className="liquid-pill"
          />
        </div>

        {/* GEN-Z PREMIUM PROFILE - BENTO STYLE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <div className="modern-bell">
              <Bell size={24} color="#000" />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 8, height: 8, background: '#FFD100', borderRadius: '50%', border: '2px solid #fff' }} />
           </div>

           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 16, 
              background: '#000', 
              padding: '8px 24px 8px 8px', 
              borderRadius: 20,
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              border: '2px solid transparent'
           }} className="hover:scale-105 active:scale-95 group">
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: 14, 
                overflow: 'hidden', 
                border: '2px solid #FFD100',
                transition: 'transform 0.4s'
              }} className="group-hover:rotate-6">
                 <Image src="/ram_profile.png" width={48} height={48} alt="Profile" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <p style={{ color: '#fff', fontSize: 16, fontWeight: 950, margin: 0, letterSpacing: '-0.02em' }}>Ram</p>
                 <p style={{ color: '#FFD100', fontSize: 10, fontWeight: 900, margin: 0, textTransform: 'uppercase', opacity: 0.8 }}>Solution Architect</p>
              </div>
              <ChevronDown size={14} color="#FFD100" />
           </div>
        </div>
      </div>

      <style>{`
        .modern-bell { position: relative; cursor: pointer; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .modern-bell:hover { transform: scale(1.1) rotate(15deg); }
        
        .liquid-pill {
           /* Handle varying widths across different words if using real refs */
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};
