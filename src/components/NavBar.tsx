'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Search, Briefcase } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [dropdownTab, setDropdownTab] = useState<'hubs' | 'lang'>('hubs');
  const locales = [
    { 
      name: 'United States', 
      flag: (
        <svg width="24" height="13" viewBox="0 0 7410 3900" style={{ borderRadius: 2 }}>
          <rect width="7410" height="3900" fill="#b22234"/><path d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410" stroke="#fff" strokeWidth="300"/><rect width="2964" height="2100" fill="#3c3b6e"/><g fill="#fff"><g id="s18"><g id="s9"><g id="s5"><g id="s"><polygon id="star" points="0,-125 73,102 -119,-39 119,-39 -73,102"/></g><use href="#s" x="494"/><use href="#s" x="988"/><use href="#s" x="1482"/><use href="#s" x="1976"/></g><use href="#s5" x="247" y="175"/></g><use href="#s9" y="350"/></g><use href="#s18" y="700"/><use href="#s18" y="1400"/><use href="#s5" x="247" y="1925"/></g>
        </svg>
      )
    },
    { 
      name: 'United Kingdom', 
      flag: (
        <svg width="24" height="12" viewBox="0 0 60 30" style={{ borderRadius: 2 }}>
          <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" clipPath="url(#s)"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s)"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      )
    },
    { 
      name: 'Germany', 
      flag: (
        <svg width="24" height="14" viewBox="0 0 5 3" style={{ borderRadius: 2 }}>
          <rect width="5" height="3" y="0" fill="#000"/><rect width="5" height="2" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/>
        </svg>
      )
    },
    { 
      name: 'France', 
      flag: (
        <svg width="24" height="16" viewBox="0 0 3 2" style={{ borderRadius: 2 }}>
          <rect width="1" height="2" x="0" fill="#002395"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ED2939"/>
        </svg>
      )
    },
    { 
      name: 'Australia', 
      flag: (
        <svg width="24" height="12" viewBox="0 0 20 10" style={{ borderRadius: 2 }}>
          <path fill="#00008b" d="M0 0h20v10H0z"/><path stroke="#fff" strokeWidth="1.2" d="m0 0 10 5M10 0 0 5"/><path stroke="#f00" strokeWidth=".8" d="m0 0 10 5M10 0 0 5"/><path stroke="#fff" strokeWidth="2.2" d="M5 0v5M0 2.5h10"/><path stroke="#f00" strokeWidth="1.2" d="M5 0v5M0 2.5h10"/><path fill="#fff" d="m15 1.5.2 1.3 1.1-.3-.7 1 .8 1-1.2.2.1 1.3-.9-1-1.3.6.8-1.1-.6-1.1 1.3.1zM15 7.5l.1.7.6-.1-.4.5.4.6-.6-.1-.2.7-.1-.7-.7.1.4-.5-.4-.6.7.1zM18 4l.1.7.6-.1-.4.5.4.6-.6-.1-.2.7-.1-.7-.7.1.4-.5-.4-.6.7.1zM12 4l.1.7.6-.1-.4.5.4.6-.6-.1-.2.7-.1-.7-.7.1.4-.5-.4-.6.7.1zM16 5.5l.1.7.6-.1-.4.5.4.6-.6-.1-.2.7-.1-.7-.7.1.4-.5-.4-.6.7.1z"/>
        </svg>
      )
    }
  ];
  const [selectedLocale, setSelectedLocale] = useState(locales[0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'JOURNEYS', href: '/your-move' },
    { name: 'GIGS', href: '#' },
    { name: 'MENTORS', href: '#' },
    { name: 'LEARN', href: '#' },
    { name: 'VACANCIES', href: '#' },
  ];

  useEffect(() => {
    const activeIdx = navLinks.findIndex(l => l.href === pathname || (l.href !== '/' && pathname.startsWith(l.href)));
    const targetIdx = hoveredIdx !== null ? hoveredIdx : (activeIdx !== -1 ? activeIdx : 0);
    
    if (navRefs.current[targetIdx]) {
      const el = navRefs.current[targetIdx];
      const frame = requestAnimationFrame(() => {
        setPillStyle({
          left: el?.offsetLeft || 0,
          width: el?.offsetWidth || 0,
          opacity: 1
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [hoveredIdx, pathname]);

  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        width: '100%',
        background: '#030B17',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.3s ease',
        height: scrolled ? 80 : 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px'
      }}
    >
      {/* LEFT TIER: BRANDING */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
         <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 24, textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                 <circle cx="50" cy="50" r="45" stroke="url(#hertzGradient)" strokeWidth="2" strokeDasharray="120 40" opacity="0.6" />
                 <circle cx="50" cy="50" r="38" stroke="url(#hertzGradient)" strokeWidth="1" strokeDasharray="80 20" opacity="0.4" />
                 <path d="M35 30 V70 M65 30 V70 M35 50 H65" stroke="url(#hertzGradient)" strokeWidth="8" strokeLinecap="round" />
                 <rect x="47" y="47" width="6" height="6" fill="#fbbf24" transform="rotate(45 50 50)" />
                 <defs>
                   <linearGradient id="hertzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#f59e0b" />
                     <stop offset="100%" stopColor="#ec4899" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
            
            <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <h1 style={{ 
                 fontSize: 24, 
                 fontWeight: 900, 
                 color: '#fff', 
                 margin: 0, 
                 letterSpacing: '0.02em', 
                 lineHeight: 0.8,
                 fontFamily: '"Inter", sans-serif',
               }}>
                 Career
               </h1>
               <h1 style={{ 
                 fontSize: 12, 
                 fontWeight: 800, 
                 margin: '6px 0 0', 
                 letterSpacing: '0.25em', 
                 lineHeight: 0.8,
                 fontFamily: '"Inter", sans-serif',
                 textTransform: 'uppercase',
                 background: 'linear-gradient(90deg, #f59e0b, #ec4899)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
               }}>
                 Coaching
               </h1>
            </div>
         </Link>
      </div>

      {/* CENTER TIER: TABS */}
      <div style={{ 
        display: 'flex', 
        gap: 6,
        padding: '6px',
        alignItems: 'center',
        position: 'relative',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: 24,
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
         <div style={{
           position: 'absolute',
           height: 40,
           width: pillStyle.width,
           background: 'linear-gradient(90deg, #f59e0b, #ec4899)',
           borderRadius: 16,
           transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
           left: pillStyle.left, 
           opacity: pillStyle.opacity,
           boxShadow: '0 10px 25px rgba(236, 72, 153, 0.4)',
           zIndex: 0,
           pointerEvents: 'none',
           transform: hoveredIdx !== null ? 'scale(1.05)' : 'scale(1)'
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
               fontSize: 11,
               padding: '10px 18px',
               fontWeight: 1000,
               color: (pathname === link.href) || hoveredIdx === idx ? '#fff' : '#94A3B8',
               letterSpacing: '0.1em',
               transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
               position: 'relative',
               zIndex: 1,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               minWidth: 90,
               transform: hoveredIdx === idx ? 'scale(1.1)' : 'scale(1)',
             }}
           >
             {link.name}
           </Link>
         ))}
      </div>

      {/* RIGHT TIER: PROFILE AND ACTIONS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
         <Search size={20} color="#64748B" style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'} />
         <Bell size={20} color="#64748B" style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ec4899'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'} />
         
          <div style={{ position: 'relative' }}>
             <div 
               onClick={() => setIsLocationOpen(!isLocationOpen)}
               style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', marginLeft: 8, padding: '4px 8px', borderRadius: 8, background: isLocationOpen ? 'rgba(255,255,255,0.05)' : 'transparent', transition: 'all 0.3s ease' }}
             >
                {selectedLocale.flag}
                <ChevronDown size={14} color={isLocationOpen ? "#f59e0b" : "#CBD5E1"} style={{ transform: isLocationOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'all 0.3s ease' }} />
             </div>

             {isLocationOpen && (
               <div style={{
                 position: 'absolute',
                 top: '120%',
                 right: 0,
                 width: 260,
                 background: 'rgba(10, 20, 40, 0.98)',
                 backdropFilter: 'blur(30px)',
                 border: '1px solid rgba(255,255,255,0.12)',
                 borderRadius: 20,
                 padding: '16px',
                 boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                 zIndex: 1000,
               }}>
                 {/* DROPDOWN TABS */}
                 <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 4, marginBottom: 16 }}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setDropdownTab('hubs'); }}
                      style={{ 
                        flex: 1, 
                        padding: '8px', 
                        borderRadius: 8, 
                        border: 'none', 
                        fontSize: 11, 
                        fontWeight: 800, 
                        cursor: 'pointer', 
                        transition: 'all 0.3s',
                        background: dropdownTab === 'hubs' ? 'linear-gradient(135deg, #f59e0b, #ec4899)' : 'transparent',
                        color: dropdownTab === 'hubs' ? '#fff' : '#64748B'
                      }}
                    >
                      HUBS
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setDropdownTab('lang'); }}
                      style={{ 
                        flex: 1, 
                        padding: '8px', 
                        borderRadius: 8, 
                        border: 'none', 
                        fontSize: 11, 
                        fontWeight: 800, 
                        cursor: 'pointer', 
                        transition: 'all 0.3s',
                        background: dropdownTab === 'lang' ? 'linear-gradient(135deg, #f59e0b, #ec4899)' : 'transparent',
                        color: dropdownTab === 'lang' ? '#fff' : '#64748B'
                      }}
                    >
                      LANGUAGE
                    </button>
                 </div>

                 {dropdownTab === 'hubs' ? (
                   <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                     {locales.map((loc) => (
                       <div 
                         key={loc.name}
                         onClick={() => { setSelectedLocale(loc); setIsLocationOpen(false); }}
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 12,
                           padding: '10px 12px',
                           borderRadius: 10,
                           cursor: 'pointer',
                           transition: 'all 0.2s ease',
                           background: selectedLocale.name === loc.name ? 'rgba(245, 158, 11, 0.1)' : 'transparent'
                         }}
                       >
                         {loc.flag}
                         <span style={{ fontSize: 13, fontWeight: 700, color: selectedLocale.name === loc.name ? '#f59e0b' : '#CBD5E1' }}>{loc.name}</span>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {[
                        { name: 'English', sub: 'USA / UK', code: 'EN' },
                        { name: 'Deutsch', sub: 'Germany', code: 'DE' },
                        { name: 'Français', sub: 'France', code: 'FR' },
                        { name: 'Español', sub: 'Spain / LATAM', code: 'ES' },
                        { name: 'Italiano', sub: 'Italy', code: 'IT' }
                      ].map(lang => (
                        <div 
                         key={lang.name}
                         onClick={() => setIsLocationOpen(false)}
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between',
                           padding: '10px 12px',
                           borderRadius: 10,
                           cursor: 'pointer',
                           transition: 'all 0.2s ease',
                         }}
                         onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                         onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                       >
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                             <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{lang.name}</span>
                             <span style={{ fontSize: 9, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang.sub}</span>
                          </div>
                          <span style={{ fontSize: 10, fontWeight: 900, color: '#ec4899', background: 'rgba(236, 72, 153, 0.1)', padding: '2px 6px', borderRadius: 4 }}>{lang.code}</span>
                       </div>
                      ))}
                   </div>
                 )}
               </div>
             )}
          </div>

           <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', margin: 0 }}>Ram</p>
                 <p style={{ fontSize: 10, fontWeight: 700, color: '#f59e0b', margin: 0 }}>Solution Architect</p>
              </div>
              <div style={{ 
                width: 38, 
                height: 38, 
                borderRadius: '50%', 
                padding: 2,
                background: 'linear-gradient(135deg, #f59e0b, #ec4899)', 
                cursor: 'pointer' 
              }}>
                 <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '2px solid #030B17' }}>
                   <Image src="/ram_profile.png" width={36} height={36} alt="Profile" />
                 </div>
              </div>
           </div>
      </div>
    </nav>
  );
};
