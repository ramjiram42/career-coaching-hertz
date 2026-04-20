'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';

export default function NavBar() {
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      height: 140, 
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      zIndex: 1000,
      padding: '0 40px',
      transition: 'all 0.4s ease',
      boxShadow: isScrolled ? '0 10px 40px rgba(0,0,0,0.05)' : 'none'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
         {/* TOP LEVEL: BRANDING & PROFILE */}
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 24, textDecoration: 'none' }}>
               <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* YELLOW VELOCITY PILLARS */}
                  <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
                    <rect x="25" y="25" width="25" height="10" rx="5" fill="#FFD100" />
                    <rect x="35" y="40" width="20" height="10" rx="5" fill="#FFD100" opacity="0.8" />
                    <rect x="45" y="55" width="15" height="10" rx="5" fill="#FFD100" opacity="0.6" />
                    
                    <rect x="55" y="15" width="25" height="10" rx="5" fill="#F59E0B" />
                    <rect x="55" y="30" width="20" height="10" rx="5" fill="#F59E0B" opacity="0.8" />
                    <rect x="55" y="45" width="15" height="10" rx="5" fill="#F59E0B" opacity="0.6" />
                  </svg>
               </div>
               
               <div style={{ width: 1, height: 40, background: '#E2E8F0', margin: '0 4px' }} />

               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h1 style={{ 
                    fontSize: 28, 
                    fontWeight: 900, 
                    color: '#0F172A', 
                    margin: 0, 
                    letterSpacing: '0.05em', 
                    lineHeight: 0.8,
                    fontFamily: '"Inter", sans-serif',
                    textTransform: 'uppercase'
                  }}>
                    Career
                  </h1>
                  <h1 style={{ 
                    fontSize: 14, 
                    fontWeight: 800, 
                    color: '#FFD100', 
                    margin: '4px 0 0', 
                    letterSpacing: '0.4em', 
                    lineHeight: 0.8,
                    fontFamily: '"Inter", sans-serif',
                    textTransform: 'uppercase'
                  }}>
                    Coaching
                  </h1>
               </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
               <div style={{ position: 'relative' }} ref={dropdownRef}>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{ 
                      background: '#F1F5F9', 
                      border: '1px solid #E2E8F0', 
                      padding: '10px 20px', 
                      borderRadius: 12, 
                      color: '#0F172A', 
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
                     <div style={{ width: 8, height: 8, borderRight: '2px solid #0F172A', borderBottom: '2px solid #0F172A', transform: 'rotate(45deg)', marginBottom: 4 }} />
                  </button>

                  {isDropdownOpen && (
                    <div style={{ 
                      position: 'absolute', 
                      top: 'calc(100% + 10px)', 
                      right: 0, 
                      width: 200, 
                      background: '#FFFFFF', 
                      border: '1px solid #E2E8F0', 
                      borderRadius: 16, 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
                      padding: 8, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 4 
                    }}>
                      {countries.map((c) => (
                        <button key={c.id} onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', border: 'none', background: selectedCountry.id === c.id ? '#F1F5F9' : 'transparent', borderRadius: 10, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
                          <span style={{ fontSize: 18 }}>{c.flag}</span>
                          <span style={{ color: '#0F172A', fontWeight: 700, fontSize: 14 }}>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
               </div>

               <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(37,99,235,0.2)' }}>
                  <User size={20} color="#fff" />
               </div>
            </div>
         </div>

         {/* NAVIGATION LINKS */}
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, position: 'relative' }}>
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.id === 'home' ? '/' : `/${tab.id}`}
                style={{
                  position: 'relative',
                  padding: '12px 24px',
                  color: pathname === (tab.id === 'home' ? '/' : `/${tab.id}`) ? '#2563EB' : '#64748B',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  zIndex: 2,
                  transition: 'color 0.3s'
                }}
              >
                {tab.label}
                {pathname === (tab.id === 'home' ? '/' : `/${tab.id}`) && (
                  <div style={{
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 24,
                    height: 4,
                    background: '#FFD100', 
                    borderRadius: 2
                  }} />
                )}
              </Link>
            ))}
         </div>
      </div>
    </nav>
  );
}
