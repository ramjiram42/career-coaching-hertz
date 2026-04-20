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
    { name: 'AI Pathfinder', href: '#', icon: Compass },
    { name: 'Skills Gap', href: '#', icon: Target },
    { name: 'Mentors', href: '#', icon: Users },
    { name: 'Learning Lab', href: '#', icon: GraduationCap },
    { name: 'Growth Loop', href: '#', icon: Zap },
  ];

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#fff',
        borderBottom: '4px solid #FFD100',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
        height: 90,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* BRAND LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
           <div style={{ background: '#FFD100', padding: 12, borderRadius: 12, boxShadow: '0 8px 16px rgba(255,209,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Rocket size={28} color="#000" />
           </div>
           <div>
              <h1 style={{ fontSize: 24, fontWeight: 950, color: '#000', margin: 0, lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>CAREER COACHING</h1>
              <p style={{ fontSize: 10, fontWeight: 900, color: '#94A3B8', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>Accelerator Platform</p>
           </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="nav-item-hertz"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 18px',
                borderRadius: 12,
                textDecoration: 'none',
                color: link.active ? '#000' : '#64748B',
                background: link.active ? '#FFD100' : 'transparent',
                fontWeight: 900,
                fontSize: 13,
                transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative'
              }}
            >
              <link.icon size={18} />
              <span>{link.name}</span>
              {link.active && (
                <div style={{ position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: '#000' }} />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={24} color="#000" />
              <div style={{ position: 'absolute', top: -4, right: -4, width: 10, height: 10, background: '#FFD100', borderRadius: '50%', border: '2px solid #fff' }} />
           </div>

           {/* PREMIUM PROFILE DROPDOWN */}
           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 16, 
              background: '#000', 
              padding: '8px 24px 8px 10px', 
              borderRadius: 50,
              cursor: 'pointer',
              border: '2px solid #FFD100',
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
              minWidth: 220,
              transition: 'transform 0.2s'
           }} className="hover:scale-105">
              <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', border: '2px solid #FFD100', background: '#333' }}>
                 <Image src="/ram_profile.png" width={44} height={44} alt="Profile" />
              </div>
              <div style={{ flex: 1 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <p style={{ color: '#fff', fontSize: 13, fontWeight: 950, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>RAM JIRAM</p>
                    <Sparkles size={12} color="#FFD100" fill="#FFD100" />
                 </div>
                 <p style={{ color: '#FFD100', fontSize: 9, fontWeight: 950, margin: 0, textTransform: 'uppercase', letterSpacing: '0.1rem' }}>GOLD PLUS TIER</p>
              </div>
              <ChevronDown size={14} color="#FFD100" />
           </div>
        </div>
      </div>

      <style>{`
        .nav-item-hertz:hover {
          background: #F1F5F9;
          transform: translateY(-4px) scale(1.05);
          color: #000 !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .nav-item-hertz:active {
          transform: scale(0.95);
        }
      `}</style>
    </nav>
  );
};
