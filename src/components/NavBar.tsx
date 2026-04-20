'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

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
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E8F0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.06)' : 'none',
        height: scrolled ? 64 : 80,
        display: 'flex',
        alignItems: 'center',
        animation: 'navEntrance 0.8s ease-out'
      }}
    >
      <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* CREATIVE BRANDING */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }} className="group">
           <div style={{ 
              background: '#000', 
              width: 44, 
              height: 44, 
              borderRadius: 14, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid #FFD100'
           }}>
              <div className="logo-glow" />
              <Rocket size={22} color="#FFD100" className="logo-rocket" />
           </div>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: 20, fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 1 }}>CAREER COACH <span style={{ color: '#FFD100' }}>+</span></h1>
              <p style={{ fontSize: 9, fontWeight: 900, color: '#94A3B8', margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Accelerator Platform</p>
           </div>
        </Link>

        {/* ANIMATED NAVIGATION - FLOATING PILL STYLE */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 4, 
            background: '#F1F5F9', 
            padding: 6, 
            borderRadius: 16,
            position: 'relative'
          }}
        >
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 12,
                textDecoration: 'none',
                color: link.active || hoveredIdx === idx ? '#000' : '#64748B',
                fontWeight: 900,
                fontSize: 13,
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                zIndex: 2,
                background: link.active && hoveredIdx === null ? '#FFD100' : 'transparent',
                boxShadow: link.active && hoveredIdx === null ? '0 4px 12px rgba(255,209,0,0.2)' : 'none',
              }}
              className="nav-link-creative"
            >
              <link.icon size={16} className={hoveredIdx === idx ? 'icon-bounce' : ''} />
              <span>{link.name}</span>
            </Link>
          ))}
          
          {/* THE FLOATING PILL INDICATOR */}
          {hoveredIdx !== null && (
            <div 
              style={{
                position: 'absolute',
                height: 44, // outer height - padding
                width: 110, // approximate, would normally use ref measurements
                background: '#fff',
                borderRadius: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                zIndex: 1,
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                left: 6 + (hoveredIdx * 115), // approximate offset logic for demo
                opacity: 1
              }}
              className="floating-pill"
            />
          )}
        </div>

        {/* RIGHT SIDE ACTIONS - ANIMATED PROFILE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <div className="bell-container">
              <Bell size={22} color="#000" style={{ cursor: 'pointer' }} />
              <div className="bell-pulse" />
           </div>

           {/* CREATIVE PROFILE CARD */}
           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 14, 
              background: '#000', 
              padding: '6px 20px 6px 8px', 
              borderRadius: 50,
              cursor: 'pointer',
              border: '2px solid transparent',
              transition: 'all 0.3s'
           }} className="profile-pill-creative group">
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2px solid #FFD100',
                transition: 'all 0.3s'
              }} className="group-hover:scale-110">
                 <Image src="/ram_profile.png" width={40} height={40} alt="Profile" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <p style={{ color: '#fff', fontSize: 13, fontWeight: 950, margin: 0, letterSpacing: '0.02em' }}>Ram</p>
                 <p style={{ color: '#FFD100', fontSize: 10, fontWeight: 900, margin: 0, opacity: 0.8, textTransform: 'uppercase' }}>Solution Architect</p>
              </div>
              <ChevronDown size={14} color="#FFD100" />
           </div>
        </div>
      </div>

      <style>{`
        @keyframes navEntrance {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .logo-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, #FFD100, transparent);
          opacity: 0;
          transition: 0.3s;
        }
        .group:hover .logo-glow { opacity: 0.4; transform: scale(2); }
        .group:hover .logo-rocket { transform: translateY(-2px) rotate(15deg); transition: 0.3s; }
        
        .icon-bounce { animation: iconBounce 0.5s ease-in-out infinite alternate; }
        @keyframes iconBounce { from { transform: translateY(0); } to { transform: translateY(-3px); } }
        
        .bell-container { position: relative; }
        .bell-pulse {
          position: absolute;
          top: 0; right: 0;
          width: 8px; height: 8px;
          background: #FFD100;
          border-radius: 50%;
          border: 2px solid #fff;
        }
        .bell-container:hover .bell-pulse { animation: pulse 1.5s infinite; }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,209,0,0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(255,209,0,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,209,0,0); }
        }

        .profile-pill-creative:hover {
          border-color: #FFD100;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>
    </nav>
  );
};
