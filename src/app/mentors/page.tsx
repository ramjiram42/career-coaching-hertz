'use client';
import { useState } from 'react';
import { Star, Calendar, MessageCircle, Award, Search, Filter, ChevronRight, Zap, Target, Cpu, Globe, Users } from 'lucide-react';
import Image from 'next/image';

const DOMAINS = [
  'AI & Data Science', 'Fleet Operations', 'Finance & Strategy', 'Leadership & HR', 
  'Product & Engineering', 'Sales & Customer Success', 'Marketing & Branding', 'Logistics & Supply Chain'
];

const MENTORS = [
  { id: '1', name: 'Alice Johnson', expertiseArea: 'Operations to Director Transitions', rating: 4.9, yearsExperience: 18, sessionsDone: 142, language: 'English', supportedRole: 'Regional Operations Director', domain: 'Fleet Operations', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { id: '2', name: 'Chris Berg', expertiseArea: 'Fleet Management Leadership', rating: 4.8, yearsExperience: 22, sessionsDone: 89, language: 'English', supportedRole: 'EVP Fleet Management', domain: 'Fleet Operations', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { id: '3', name: 'Sandra Lee', expertiseArea: 'HR & People Development', rating: 4.9, yearsExperience: 15, sessionsDone: 201, language: 'English', supportedRole: 'VP People & Culture', domain: 'Leadership & HR', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { id: '4', name: 'David Kim', expertiseArea: 'Finance & P&L Coaching', rating: 4.7, yearsExperience: 14, sessionsDone: 67, language: 'English, Korean', supportedRole: 'Finance Director', domain: 'Finance & Strategy', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
  { id: '5', name: 'Maria Torres', expertiseArea: 'Digital Transformation', rating: 4.8, yearsExperience: 12, sessionsDone: 55, language: 'English, Spanish', supportedRole: 'VP Technology', domain: 'AI & Data Science', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
  { id: '6', name: 'James Withers', expertiseArea: 'Revenue & Commercial Strategy', rating: 4.6, yearsExperience: 20, sessionsDone: 114, language: 'English', supportedRole: 'SVP Revenue Management', domain: 'Finance & Strategy', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  { id: '7', name: 'Priya Sharma', expertiseArea: 'Analytics & Workforce Intelligence', rating: 4.9, yearsExperience: 11, sessionsDone: 38, language: 'English, Hindi', supportedRole: 'Director Data Analytics', domain: 'AI & Data Science', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
  { id: '8', name: 'Thomas Grant', expertiseArea: 'Customer Experience Leadership', rating: 4.7, yearsExperience: 16, sessionsDone: 92, language: 'English', supportedRole: 'VP Customer Experience', domain: 'Sales & Customer Success', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80' },
  { id: '9', name: 'Nina Okafor', expertiseArea: 'Franchise & Airport Strategy', rating: 4.8, yearsExperience: 13, sessionsDone: 71, language: 'English, French', supportedRole: 'Regional Director Franchise', domain: 'Finance & Strategy', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80' },
];

const firstNames = ['Robert', 'Emily', 'Michael', 'Sarah', 'William', 'Jessica', 'Richard', 'Karen', 'Joseph', 'Nancy', 'Charles', 'Lisa', 'Thomas', 'Betty', 'Matthew', 'Sandra', 'Daniel', 'Donna', 'Mark', 'Paul', 'Steven', 'Laura', 'Andrew', 'Carol', 'Kenneth', 'Michelle', 'Joshua', 'Amanda', 'Kevin', 'Dorothy', 'Brian', 'Melissa', 'George', 'Deborah', 'Edward', 'Stephanie', 'Ronald', 'Rebecca', 'Timothy', 'Sharon', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin'];
const lastNames = ['Smith', 'Brown', 'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Quintana', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers'];

for (let i = 10; i <= 60; i++) {
  const fName = firstNames[(i - 10) % firstNames.length];
  const lName = lastNames[(i - 10) % lastNames.length];
  const domain = DOMAINS[i % DOMAINS.length];
  const rating = (4.5 + Math.random() * 0.5).toFixed(1);
  const years = 10 + Math.floor(Math.random() * 20);
  const sessions = 40 + Math.floor(Math.random() * 300);
  
  const rolePrefixes = ['Director', 'Lead Specialist', 'Senior VP', 'Global Head', 'Principal Architect', 'Project Lead'];
  const rolePrefix = rolePrefixes[Math.floor(Math.random() * rolePrefixes.length)];

  MENTORS.push({
    id: i.toString(),
    name: `${fName} ${lName}`,
    expertiseArea: `${domain} Strategic Leadership`,
    rating: parseFloat(rating),
    yearsExperience: years,
    sessionsDone: sessions,
    language: i % 5 === 0 ? 'English, Spanish' : i % 7 === 0 ? 'English, French' : 'English',
    supportedRole: `${rolePrefix} ${domain}`,
    domain: domain,
    avatar: `https://i.pravatar.cc/150?u=hertz_mentor_${i}`
  });
}


export default function MentorsPage() {
  const [activeDomain, setActiveDomain] = useState('All');
  const [search, setSearch] = useState('');

  const filteredMentors = MENTORS.filter(m => 
    (activeDomain === 'All' || m.domain === activeDomain) &&
    (m.name.toLowerCase().includes(search.toLowerCase()) || m.expertiseArea.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main style={{ background: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem', overflowX: 'hidden' }}>
      
      {/* ── PREMIUM HEADER ──────────────────────────────────── */}
      <div style={{ background: 'radial-gradient(circle at 0% 0%, #0F172A 0%, #172554 100%)', padding: '100px 0 140px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 15px #F59E0B' }}></div>
             <p style={{ color: '#F59E0B', fontSize: 13, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0 }}>Global Talent Network</p>
          </div>
          <h1 style={{ color: '#fff', fontSize: 72, fontWeight: 1000, letterSpacing: '-0.04em', margin: '0 0 12px', lineHeight: 0.9 }}>
            Mentorship <br /> <span style={{ background: 'linear-gradient(90deg, #F59E0B, #FFD100)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ecosystem</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 20, maxWidth: 600, fontWeight: 600, letterSpacing: '0.01em' }}>Connect with seasoned leaders to simulate your success and accelerate your career trajectory.</p>
        </div>
      </div>

      {/* ── STATUS DASHBOARD ─────────────────────────────────── */}
      <div style={{ marginTop: -60, position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ background: '#fff', borderRadius: 32, padding: '32px 40px', border: '1px solid #E2E8F0', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.12)', display: 'flex', gap: 60, alignItems: 'center' }}>
             <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Expert Connectivity</p>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#F59E0B' }}>{MENTORS.length} MENTORS ONLINE</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                   {[1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= 6 ? '#F59E0B' : '#F1F5F9' }}></div>
                   ))}
                </div>
             </div>
             <div style={{ height: 40, width: 1, background: '#E2E8F0' }}></div>
             <div style={{ display: 'flex', gap: 40 }}>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 4 }}>Avg Rating</p>
                   <p style={{ fontSize: 22, fontWeight: 1000, color: '#1E293B', margin: 0 }}>4.85</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 4 }}>Time to Sync</p>
                   <p style={{ fontSize: 22, fontWeight: 1000, color: '#1E293B', margin: 0 }}>&lt; 24h</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '80px' }}>
        
        {/* Filters and Search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 60, gap: 40 }}>
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, flex: 1 }}>
              {['All', ...DOMAINS].map(domain => (
                 <button 
                  key={domain} 
                  onClick={() => setActiveDomain(domain)}
                  style={{ 
                    padding: '10px 20px', 
                    borderRadius: 14, 
                    border: 'none', 
                    background: activeDomain === domain ? '#1E293B' : '#fff', 
                    color: activeDomain === domain ? '#fff' : '#64748B', 
                    fontWeight: 800, 
                    fontSize: 13, 
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s'
                  }}
                 >
                    {domain}
                 </button>
              ))}
           </div>
           <div style={{ position: 'relative', width: 320 }}>
              <Search size={20} color="#94A3B8" style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                placeholder="Search by name or skill..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', padding: '16px 20px 16px 56px', borderRadius: 20, border: '1px solid #E2E8F0', outline: 'none', fontWeight: 700, fontSize: 15 }} 
              />
           </div>
        </div>

        {/* Mentor Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
           {filteredMentors.map(mentor => (
              <div 
                key={mentor.id} 
                style={{ 
                  background: '#fff', 
                  borderRadius: 40, 
                  padding: 40, 
                  border: '1px solid #E2E8F0', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
              >
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                    <div style={{ width: 80, height: 80, borderRadius: 28, overflow: 'hidden', border: '3px solid #F1F5F9', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                       <Image src={mentor.avatar} width={80} height={80} alt={mentor.name} unoptimized={true} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#FFF7ED', padding: '6px 14px', borderRadius: 14, color: '#C2410C', fontWeight: 900, fontSize: 13 }}>
                       <Star size={14} fill="#F59E0B" color="#F59E0B" /> {mentor.rating}
                    </div>
                 </div>

                 <h3 style={{ fontSize: 24, fontWeight: 1000, color: '#1E293B', margin: '0 0 6px', letterSpacing: '-0.02em' }}>{mentor.name}</h3>
                 <p style={{ color: '#F59E0B', fontWeight: 800, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 20 }}>{mentor.domain}</p>
                 
                 <p style={{ color: '#64748B', fontSize: 15, fontWeight: 600, lineHeight: 1.6, marginBottom: 24 }}>{mentor.expertiseArea}</p>

                 <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, padding: '24px', background: '#F8FAFC', borderRadius: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                       <Award size={18} color="#94A3B8" />
                       <span style={{ fontSize: 14, color: '#475569', fontWeight: 700 }}><strong style={{ color: '#1E293B' }}>{mentor.yearsExperience}</strong> Years Expertise</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                       <Users size={18} color="#94A3B8" />
                       <span style={{ fontSize: 14, color: '#475569', fontWeight: 700 }}><strong style={{ color: '#1E293B' }}>{mentor.sessionsDone}</strong> Simulations Lead</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                       <Globe size={18} color="#94A3B8" />
                       <span style={{ fontSize: 14, color: '#475569', fontWeight: 700 }}>{mentor.language}</span>
                    </div>
                 </div>

                 <div style={{ display: 'flex', gap: 12 }}>
                    <button style={{ flex: 1, padding: '16px', borderRadius: 16, border: 'none', background: '#1E293B', color: '#fff', fontSize: 14, fontWeight: 950, textTransform: 'uppercase', cursor: 'pointer' }}>SIMULATE SESSION</button>
                    <button style={{ padding: '16px', borderRadius: 16, border: '2px solid #E2E8F0', background: '#fff', color: '#1E293B', cursor: 'pointer' }}>
                       <MessageCircle size={20} />
                    </button>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </main>
  );
}
