'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Search, Briefcase } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

  useEffect(() => {
    const activeIdx = navLinks.findIndex(l => l.active);
    const targetIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
    
    if (navRefs.current[targetIdx]) {
      const el = navRefs.current[targetIdx];
      setPillStyle({
        left: el?.offsetLeft || 0,
        width: el?.offsetWidth || 0,
        opacity: 1
      });
    }
  }, [hoveredIdx]);

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 500,
        background: '#030B17', // Jio Hotstar Deep Midnight
        borderBottom: '1px solid rgba(255,255,255,0.1)',
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
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* GRID ICON AS SEEN IN SCREENSHOT */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 3px)', gap: 2, padding: 10, cursor: 'pointer' }}>
               {[...Array(9)].map((_, i) => <div key={i} style={{ width: 3, height: 3, background: '#64748B', borderRadius: 1 }} />)}
            </div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
               <div style={{ position: 'relative', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* JIO HOTSTAR STAR + CAREER UP ARROW */}
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                    <path d="M50 5 L56 38 L90 38 L62 58 L72 90 L50 70 L28 90 L38 58 L10 38 L44 38 Z" fill="#fff" />
                    {/* CAREER UP INDICATOR */}
                    <path d="M50 45 L50 15 M50 15 L40 25 M50 15 L60 25" stroke="#E1128F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
               
               <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.15)', margin: '0 4px' }} />

               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h1 style={{ 
                    fontSize: 22, 
                    fontWeight: 800, 
                    color: '#fff', 
                    margin: 0, 
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    Career<span style={{ fontWeight: 400 }}>Coaching</span>
                  </h1>
                  <p style={{ fontSize: 9, fontWeight: 900, color: '#E1128F', margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase' }}>POWERED BY JIOHOTSTAR</p>
               </div>
            </Link>

            <style>{`
              @keyframes pulseLogo {
                0% { transform: scale(1); opacity: 0.2; }
                50% { transform: scale(1.1); opacity: 0.4; }
                100% { transform: scale(1); opacity: 0.2; }
              }
              @keyframes floatIcon {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
              }
              @keyframes shimmerText {
                0% { left: -100%; }
                50%, 100% { left: 100%; }
              }
            `}</style>
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
                    <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', margin: 0 }}>Ram</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#E1128F', margin: 0 }}>Solution Architect</p>
                 </div>
                 <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', border: '2px solid #E1128F' }}>
                    <Image src="/ram_profile.png" width={36} height={36} alt="Profile" />
                 </div>
              </div>
         </div>
      </div>

      {/* BOTTOM TIER: NAVIGATION OPTIONS WITH ZOOMING POWER PILL */}
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
           gap: 12,
           padding: '8px',
           height: '100%',
           alignItems: 'center',
           position: 'relative',
           background: 'rgba(255,255,255,0.03)',
           borderRadius: 24,
           margin: '10px 0',
           border: '1px solid rgba(255,255,255,0.05)'
         }}>
            {/* THE SOLID JIO HOTSTAR GRADIENT POWER PILL */}
            <div style={{
              position: 'absolute',
              height: 44,
              width: pillStyle.width,
              background: 'linear-gradient(90deg, #2A60E4, #E1128F)', // JIO HOTSTAR GRADIENT
              borderRadius: 16,
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
              left: pillStyle.left, 
              opacity: pillStyle.opacity,
              boxShadow: '0 10px 25px rgba(225, 18, 143, 0.4)',
              zIndex: 0,
              pointerEvents: 'none',
              transform: hoveredIdx !== null ? 'scale(1.1)' : 'scale(1)'
            }} />

            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                href={link.href}
                ref={(el) => { navRefs.current[idx] = el; }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  textDecoration: 'none',
                  fontSize: 12,
                  padding: '12px 24px',
                  fontWeight: 1000,
                  color: (link.active && hoveredIdx === null) || hoveredIdx === idx ? '#fff' : '#94A3B8',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 100,
                  transform: hoveredIdx === idx ? 'scale(1.2)' : 'scale(1)', // ZOOM EFFECT
                }}
              >
                {link.name}
              </Link>
            ))}
         </div>
      </div>
    </nav>
  );
};
