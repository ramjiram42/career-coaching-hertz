'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users, Search, Briefcase, GraduationCap as LearnIcon, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
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

  // EXACT OPTIONS FROM SCREENSHOT
  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'JOURNEYS', href: '/your-move', active: true },
    { name: 'GIGS', href: '#' },
    { name: 'MENTORS', href: '#' },
    { name: 'LEARN', href: '#' },
    { name: 'VACANCIES', href: '#' },
  ];

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 500,
        background: '#ffffff',
        borderBottom: '1px solid #E2E8F0',
        transition: 'all 0.3s ease',
        height: scrolled ? 80 : 100,
        display: 'flex',
        flexDirection: 'column', // Using a two-tier approach like the screenshot
      }}
    >
      {/* TOP TIER: BRANDING & PROFILE */}
      <div style={{ 
        width: '100%', 
        padding: '0 40px', 
        height: '50%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid #F1F5F9'
      }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* GRID ICON AS SEEN IN SCREENSHOT */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 3px)', gap: 2, padding: 10, cursor: 'pointer' }}>
               {[...Array(9)].map((_, i) => <div key={i} style={{ width: 3, height: 3, background: '#64748B', borderRadius: 1 }} />)}
            </div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
               <div style={{ background: '#FFD100', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket size={18} color="#000" />
               </div>
               <h1 style={{ fontSize: 16, fontWeight: 950, color: '#000', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>CAREER COACHING</h1>
            </Link>
         </div>

         <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Search size={20} color="#64748B" style={{ cursor: 'pointer' }} />
            <Bell size={20} color="#64748B" style={{ cursor: 'pointer' }} />
            {/* HIGH-FIDELITY USA SVG LOGO */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', marginLeft: 8 }}>
               <svg width="24" height="13" viewBox="0 0 7410 3900" style={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <rect width="7410" height="3900" fill="#b22234"/>
                  <path d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410" stroke="#fff" strokeWidth="300"/>
                  <rect width="2964" height="2100" fill="#3c3b6e"/>
                  <g fill="#fff">
                    <g id="s18"><g id="s9"><g id="s5"><g id="s"><polygon id="star" points="0,-125 73,102 -119,-39 119,-39 -73,102"/></g><use href="#s" x="494"/><use href="#s" x="988"/><use href="#s" x="1482"/><use href="#s" x="1976"/></g><use href="#s5" x="247" y="175"/></g><use href="#s9" y="350"/></g><use href="#s18" y="700"/><use href="#s18" y="1400"/><use href="#s5" x="247" y="1925"/></g>
               </svg>
               <ChevronDown size={14} color="#CBD5E1" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
               <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 13, fontWeight: 900, color: '#000', margin: 0 }}>Ram</p>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#FFD100', margin: 0 }}>Solution Architect</p>
               </div>
               <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', border: '2px solid #FFD100' }}>
                  <Image src="/ram_profile.png" width={36} height={36} alt="Profile" />
               </div>
            </div>
         </div>
      </div>

      {/* BOTTOM TIER: NAVIGATION OPTIONS WITH GLASSY SLIDING PILL */}
      <div style={{ 
        width: '100%', 
        height: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }}>
         <div style={{ 
           display: 'flex', 
           gap: 10, // Tighter gap for the glassy pill move
           padding: '8px',
           height: '100%',
           alignItems: 'center',
           position: 'relative',
           background: '#F8FAFC',
           borderRadius: 20,
           margin: '10px 0'
         }}>
            {/* THE GLASSY SLIDING PILL */}
            <div style={{
              position: 'absolute',
              height: 40,
              width: hoveredIdx !== null ? 100 : 0, // Dynamic width based on hovered item (placeholder logic)
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #FFD100',
              borderRadius: 12,
              transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
              left: hoveredIdx !== null ? (8 + hoveredIdx * 110) : 0, // Basic position logic
              opacity: hoveredIdx !== null ? 1 : 0,
              boxShadow: '0 4px 15px rgba(255, 209, 0, 0.15)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  textDecoration: 'none',
                  fontSize: 12,
                  padding: '10px 24px',
                  fontWeight: 950,
                  color: (link.active && hoveredIdx === null) || hoveredIdx === idx ? '#000' : '#64748B',
                  letterSpacing: '0.08em',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 100
                }}
              >
                {link.name}
                {/* ACTIVE INDICATOR (FALLBACK) */}
                {link.active && hoveredIdx === null && (
                   <div style={{
                     position: 'absolute',
                     bottom: 4,
                     width: 4,
                     height: 4,
                     background: '#FFD100',
                     borderRadius: '50%'
                   }} />
                )}
              </Link>
            ))}
         </div>
      </div>
    </nav>
  );
};
