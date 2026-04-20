'use client';

import { Menu, X, Bell, User, ChevronDown, Rocket, Compass, Target, GraduationCap, Zap, Sparkles, LayoutDashboard, Map, Users, ArrowRight, Shield, Globe, Cpu, CreditCard, Code, Book, Building2, Briefcase } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const STRIPE_NAV_DATA = [
  {
    title: 'Products',
    content: (
      <div style={{ padding: 24, width: 440, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
           <p style={{ fontSize: 11, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 16 }}>CAREER GROWTH</p>
           <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <MenuItem icon={Map} title="Journey Map" desc="Visualize your next move" color="#FFD100" />
              <MenuItem icon={Compass} title="Pathfinder" desc="AI-driven career advice" color="#007AFF" />
              <MenuItem icon={Zap} title="Growth Loop" desc="Continuous improvement" color="#10B981" />
           </div>
        </div>
        <div>
           <p style={{ fontSize: 11, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 16 }}>OPPORTUNITIES</p>
           <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <MenuItem icon={Briefcase} title="Vacancies" desc="Find open roles at Hertz" color="#F59E0B" />
              <MenuItem icon={Target} title="Skill Gaps" desc="Analyze your missing skills" color="#EF4444" />
           </div>
        </div>
      </div>
    )
  },
  {
    title: 'Developers',
    content: (
      <div style={{ padding: 24, width: 380 }}>
        <p style={{ fontSize: 11, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 16 }}>TOOLS & RESOURCES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
           <MenuItem icon={Code} title="Career API" desc="Integrate pathfinding data" color="#6366F1" />
           <MenuItem icon={Book} title="Documentation" desc="SDKs and integration guides" color="#10B981" />
           <MenuItem icon={Cpu} title="AI Models" desc="Learn about our training data" color="#000" />
        </div>
      </div>
    )
  },
  {
    title: 'Company',
    content: (
      <div style={{ padding: 24, width: 320 }}>
        <p style={{ fontSize: 11, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 16 }}>OUR MISSION</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
           <MenuItem icon={Building2} title="About Hertz" desc="Driving human progress" color="#FFD100" />
           <MenuItem icon={Globe} title="Sustainability" desc="Our commitment to ESG" color="#10B981" />
           <MenuItem icon={Shield} title="Privacy" desc="Your data is secure with us" color="#007AFF" />
        </div>
      </div>
    )
  }
];

function MenuItem({ icon: Icon, title, desc, color }: any) {
  return (
    <div style={{ display: 'flex', gap: 12, cursor: 'pointer' }} className="group">
      <div style={{ width: 32, height: 32, borderRadius: 8, background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} className="group-hover:bg-slate-200">
        <Icon size={16} color={color} />
      </div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 800, color: '#1E293B', margin: 0 }}>{title}</p>
        <p style={{ fontSize: 11, color: '#64748B', margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

export const NavBar = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      onMouseLeave={() => setActiveIdx(null)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 500,
        background: '#fff',
        borderBottom: '1px solid #E2E8F0',
        transition: 'all 0.3s',
        height: 80,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        
        {/* BRAND */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
           <div style={{ background: '#FFD100', width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Rocket size={20} color="#000" />
           </div>
           <h1 style={{ fontSize: 18, fontWeight: 900, color: '#000', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>CAREER COACHING</h1>
        </Link>

        {/* STRIPE-STYLE NAVIGATION */}
        <div style={{ display: 'flex', gap: 8, position: 'relative' }}>
           {STRIPE_NAV_DATA.map((item, idx) => (
             <div 
               key={item.title}
               onMouseEnter={() => setActiveIdx(idx)}
               style={{
                 padding: '10px 24px',
                 fontSize: 14,
                 fontWeight: 800,
                 color: activeIdx === idx ? '#000' : '#475569',
                 cursor: 'pointer',
                 transition: 'color 0.2s',
                 position: 'relative',
                 zIndex: 10
               }}
             >
               {item.title}
             </div>
           ))}

           {/* THE "STRIPE" DROPDOWN CONTAINER */}
           {activeIdx !== null && (
             <div 
               style={{
                 position: 'absolute',
                 top: '100%',
                 left: activeIdx === 0 ? -40 : activeIdx === 1 ? 100 : 220, // offset logic
                 paddingTop: 20,
                 zIndex: 1000,
                 animation: 'dropdownFadeIn 0.2s ease-out'
               }}
             >
               <div style={{ 
                 background: '#fff', 
                 borderRadius: 20, 
                 boxShadow: '0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)',
                 border: '1px solid #E2E8F0',
                 overflow: 'hidden',
                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                 position: 'relative'
               }}>
                  <div style={{ position: 'absolute', top: -10, left: 20, width: 20, height: 20, background: '#fff', transform: 'rotate(45deg)', border: '1px solid #E2E8F0', borderBottom: 'none', borderRight: 'none', zIndex: -1 }} />
                  {STRIPE_NAV_DATA[activeIdx].content}
               </div>
             </div>
           )}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
           <Bell size={20} color="#64748B" />

           {/* PREMIUM PROFILE */}
           <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#000', 
              padding: '6px 14px', 
              borderRadius: 40,
              cursor: 'pointer',
              border: '2px solid #FFD100'
           }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden' }}>
                 <Image src="/ram_profile.png" width={32} height={32} alt="Profile" />
              </div>
              <div style={{ whiteSpace: 'nowrap' }}>
                 <p style={{ color: '#fff', fontSize: 12, fontWeight: 900, margin: 0 }}>Ram</p>
                 <p style={{ color: '#FFD100', fontSize: 9, fontWeight: 900, margin: 0 }}>DIRECTOR</p>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .group:hover div {
           background: #F8FAFC !important;
        }
      `}</style>
    </nav>
  );
};
