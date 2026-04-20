'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';

export function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    { id: 'usa', name: 'USA', flag: '🇺🇸' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'de', name: 'Germany', flag: '🇩🇪' },
    { id: 'fr', name: 'France', flag: '🇫🇷' },
    { id: 'au', name: 'Australia', flag: '🇦🇺' }
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const tabs = [
    { id: 'home', label: 'Dashboard' },
    { id: 'mentors', label: 'Expert Mentors' },
    { id: 'skills', label: 'Skills Lab' },
    { id: 'vacancies', label: 'Global Openings' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      height: 140, 
      background: '#030B17',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      zIndex: 1000,
      padding: '0 40px',
      transition: 'all 0.4s ease'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
         {/* TOP LEVEL: BRANDING & PROFILE */}
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 24, textDecoration: 'none' }}>
               <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* VELOCITY PILLARS - BLUE/PURPLE */}
                  <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
                    <rect x="25" y="25" width="25" height="10" rx="5" fill="#2563EB" />
                    <rect x="35" y="40" width="20" height="10" rx="5" fill="#2563EB" opacity="0.8" />
                    <rect x="45" y="55" width="15" height="10" rx="5" fill="#2563EB" opacity="0.6" />
                    
                    <rect x="55" y="15" width="25" height="10" rx="5" fill="#9333EA" />
                    <rect x="55" y="30" width="20" height="10" rx="5" fill="#9333EA" opacity="0.8" />
                    <rect x="55" y="45" width="15" height="10" rx="5" fill="#9333EA" opacity="0.6" />
                  </svg>
               </div>
               
               <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h1 style={{ 
                    fontSize: 28, 
                    fontWeight: 900, 
                    color: '#fff', 
                    margin: 0, 
                    letterSpacing: '0.05em', 
                    lineHeight: 0.8,
                    fontFamily: '"Outfit", sans-serif',
                    textTransform: 'uppercase'
                  }}>
                    Career
                  </h1>
                  <h1 style={{ 
                    fontSize: 16, 
                    fontWeight: 400, 
                    fontStyle: 'italic',
                    margin: '2px 0 0', 
                    letterSpacing: '0.3em', 
                    lineHeight: 0.8,
                    fontFamily: '"Outfit", sans-serif',
                    textTransform: 'uppercase',
                    color: '#9333EA' // Back to Purple
                  }}>
                    Coaching
                  </h1>
               </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
               <div style={{ position: 'relative' }}>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{ 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      padding: '10px 20px', 
                      borderRadius: 12, 
                      color: '#fff', 
                      fontWeight: 800, 
                      fontSize: 13, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 12, 
                      cursor: 'pointer' 
                    }}
                  >
                     <span style={{ fontSize: 18 }}>{selectedCountry.flag}</span>
                     {selectedCountry.name}
                  </button>
               </div>

               <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #2563EB, #9333EA)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} color="#fff" />
               </div>
            </div>
         </div>

         {/* NAVIGATION LINKS */}
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.id === 'home' ? '/' : `/${tab.id}`}
                style={{
                  position: 'relative',
                  padding: '12px 24px',
                  color: pathname === (tab.id === 'home' ? '/' : `/${tab.id}`) ? '#fff' : '#64748B',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  zIndex: 2,
                  transition: 'all 0.3s'
                }}
              >
                {tab.label}
                {pathname === (tab.id === 'home' ? '/' : `/${tab.id}`) && (
                  <div style={{ position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)', width: 24, height: 4, background: '#2563EB', borderRadius: 2 }} />
                )}
              </Link>
            ))}
         </div>
      </div>
    </nav>
  );
}
