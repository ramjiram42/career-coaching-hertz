'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Sparkles, User, HelpCircle, Compass, Heart, Share2, ChevronRight, BarChart3, ChevronDown, UserCheck, Briefcase } from "lucide-react"
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results';

interface CardData {
  id: string;
  role: string;
  match: string;
  matchColor: string;
  badge: string;
  badgeColor: string;
  image: string;
}

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Initializing Neural Engine...');
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const careerCards: CardData[] = [
    {
      id: '1',
      role: 'Intelligent Automation Architect',
      match: 'HIGH MATCH',
      matchColor: '#10B981',
      badge: 'NEXT STEP',
      badgeColor: '#10B981',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop'
    },
    {
      id: '2',
      role: 'Technical Program Manager',
      match: 'MEDIUM MATCH',
      matchColor: '#F59E0B',
      badge: 'EXPLORE',
      badgeColor: '#F59E0B',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
    },
    {
      id: '3',
      role: 'Engineering Manager (Automation)',
      match: 'HIGH MATCH',
      matchColor: '#000000',
      badge: 'NEXT STEP',
      badgeColor: '#000000',
      image: 'https://images.unsplash.com/photo-1522071823991-b9671f30c46f?w=400&h=400&fit=crop'
    },
    {
      id: '4',
      role: 'AI Engineer / Data Scientist',
      match: 'WILD CARD',
      matchColor: '#8B5CF6',
      badge: 'EXPLORE',
      badgeColor: '#8B5CF6',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop'
    }
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      setTimeout(() => setAnalyzingText('Analyzing 10+ years experience...'), 800);
      setTimeout(() => setAnalyzingText('Extracting RPA & Architecture strengths...'), 1600);
      setTimeout(() => setStep('results'), 3500);
    }
  };

  if (step === 'upload') {
    return (
      <div style={{ maxWidth: 800, margin: '80px auto', padding: '0 24px' }}>
        <div 
          onClick={(e) => {
            if (e.target instanceof HTMLInputElement) return;
            document.getElementById('resume-upload')?.click();
          }}
          style={{
            background: '#fff',
            border: '4px solid #FFD100',
            borderRadius: 32,
            padding: '80px 40px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0 20px 40px -10px rgba(255, 209, 0, 0.15)',
            transition: 'all 0.2s'
          }}
          className="hover:scale-[1.01] group"
        >
          <input type="file" id="resume-upload" hidden onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
          <div style={{ width: 80, height: 80, background: '#000', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '3px solid #FFD100' }}>
            <UploadCloud size={32} color="#FFD100" />
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#000', marginBottom: 16 }}>GENERATE FUTURE MOVES</h2>
          <p style={{ fontSize: 18, color: '#4B5563', fontWeight: 600, marginBottom: 48 }}>Upload your resume to reveal your intelligent career tree.</p>
          <button style={{ background: '#FFD100', color: '#000', border: '2px solid #000', padding: '18px 48px', borderRadius: 12, fontWeight: 900, fontSize: 15, cursor: 'pointer', boxShadow: '0 6px 0 #000', textTransform: 'uppercase' }}>Analyze My Trajectory</button>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div style={{ maxWidth: 600, margin: '160px auto', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 40px' }}>
          <div style={{ position: 'absolute', inset: 0, border: '8px solid #F1F5F9', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '8px solid #FFD100', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Cpu size={40} color="#000" /></div>
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 900, color: '#000', marginBottom: 16, textTransform: 'uppercase' }}>Hertz Intelligence...</h3>
        <p style={{ fontSize: 18, color: '#64748B', fontWeight: 800 }}>{analyzingText}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', width: '100%' }}>
      
      {/* Banner Area (Second Image Style) */}
      <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', padding: '20px 0' }}>
         <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 24, overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', padding: '0 60px' }}>
            <img src="https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?w=1400&q=80" alt="Banner" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
            <div style={{ position: 'relative', zIndex: 10 }}>
               <h2 style={{ fontSize: 32, fontWeight: 950, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>OPPORTUNITIES CURATED<br/>FOR YOU.</h2>
            </div>
            {/* Profile Card Overlay */}
            <div style={{ position: 'absolute', right: 60, top: '50%', transform: 'translateY(-50%)', background: '#fff', borderRadius: 20, padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
               <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 16, fontWeight: 900, color: '#000', margin: 0 }}>RAM JIRAM</p>
                  <p style={{ fontSize: 11, color: '#64748B', margin: '4px 0', fontWeight: 700 }}>Your profile is looking awesome</p>
                  <button style={{ background: 'none', border: 'none', color: '#007AFF', fontSize: 11, fontWeight: 800, padding: 0, cursor: 'pointer' }}>Give it some more love</button>
               </div>
               <div style={{ width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', border: '3px solid #FFD100' }}>
                  <Image src="/ram_profile.png" width={64} height={64} alt="Profile" />
               </div>
            </div>
         </div>
      </div>

      {/* Secondary Nav Area */}
      <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 40, borderBottom: '2px solid #E2E8F0', padding: '20px 0', background: '#fff' }}>
         {['HOME', 'JOURNEYS', 'GIGS', 'MENTORS', 'LEARN', 'VACANCIES'].map(item => (
            <span key={item} style={{ fontSize: 11, fontWeight: 900, color: item === 'JOURNEYS' ? '#007AFF' : '#64748B', letterSpacing: '0.1em', cursor: 'pointer', borderBottom: item === 'JOURNEYS' ? '3px solid #007AFF' : 'none', paddingBottom: 16 }}>{item}</span>
         ))}
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 40px' }}>
         <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 950, color: '#000', marginBottom: 60, textTransform: 'uppercase' }}>Explore Future Moves</h1>

         {/* Tree Top Root Area */}
         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 100, marginBottom: 120 }}>
            {/* Next Step Circle */}
            <div style={{ textAlign: 'center' }}>
               <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #10B981', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=100&h=100&fit=crop" width={80} height={80} alt="Next" />
               </div>
               <span style={{ display: 'block', background: '#10B981', color: '#fff', fontSize: 9, fontWeight: 950, padding: '4px 12px', borderRadius: 4, margin: '0 auto 8px', width: 'fit-content' }}>NEXT STEP</span>
               <p style={{ fontSize: 11, fontWeight: 800, color: '#007AFF', cursor: 'pointer' }}>Click Here to Find Suggested Moves</p>
            </div>

            {/* YOU TODAY (Center) */}
            <div style={{ textAlign: 'center' }}>
               <div style={{ width: 110, height: 110, borderRadius: '50%', border: '5px solid #E2E8F0', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, padding: 4, overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                     <Image src="/ram_profile.png" width={110} height={110} alt="You" />
                  </div>
               </div>
               <span style={{ display: 'block', fontSize: 9, fontWeight: 950, color: '#64748B', letterSpacing: '0.1em', marginBottom: 4 }}>YOU TODAY</span>
               <p style={{ fontSize: 13, fontWeight: 800, color: '#000' }}>RPA Solution Architect</p>
            </div>

            {/* Future Move Circle */}
            <div style={{ textAlign: 'center' }}>
               <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #F59E0B', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop" width={80} height={80} alt="Future" />
               </div>
               <span style={{ display: 'block', background: '#F59E0B', color: '#fff', fontSize: 9, fontWeight: 950, padding: '4px 12px', borderRadius: 4, margin: '0 auto 8px', width: 'fit-content' }}>FUTURE MOVE</span>
               <p style={{ fontSize: 11, fontWeight: 800, color: '#007AFF', cursor: 'pointer' }}>Click Here to Find a Journey</p>
            </div>

            {/* SVG Connector Lines */}
            <div style={{ position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)', width: 1000, height: 260, zIndex: 0, pointerEvents: 'none' }}>
               <svg width="1000" height="260" viewBox="0 0 1000 260">
                  <path d="M500 0 C500 130, 125 130, 125 260" stroke="#007AFF" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity={0.3} />
                  <path d="M500 0 C500 130, 375 130, 375 260" stroke="#007AFF" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity={0.3} />
                  <path d="M500 0 C500 130, 625 130, 625 260" stroke="#007AFF" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity={0.3} />
                  <path d="M500 0 C500 130, 875 130, 875 260" stroke="#007AFF" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity={0.3} />
               </svg>
            </div>
         </div>

         {/* 4 Cards Grid (Second Image Style) */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, position: 'relative', zIndex: 10 }}>
            {careerCards.map(card => (
              <div key={card.id} style={{ background: '#fff', borderRadius: 24, padding: '32px 24px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E2E8F0', position: 'relative' }}>
                 {/* Match Header */}
                 <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: card.matchColor, color: '#fff', fontSize: 10, fontWeight: 950, padding: '6px 20px', borderRadius: 8, whiteSpace: 'nowrap', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}>{card.match}</div>
                 
                 <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', color: '#94A3B8', marginBottom: 20 }}>
                    <span style={{ fontSize: 9, fontWeight: 950, letterSpacing: '0.1em' }}>JOURNEY</span>
                    <Search size={16} />
                 </div>

                 <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '20px 0', border: '8px solid #F8FAFC' }}>
                    <img src={card.image} alt={card.role} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 <h4 style={{ fontSize: 18, fontWeight: 900, color: '#000', textAlign: 'center', margin: '20px 0', minHeight: 44, display: 'flex', alignItems: 'center' }}>{card.role}</h4>
                 
                 <button style={{ marginTop: 'auto', background: card.badgeColor, color: '#fff', border: 'none', padding: '10px 32px', borderRadius: 8, fontSize: 10, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{card.badge}</button>
              </div>
            ))}
         </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
