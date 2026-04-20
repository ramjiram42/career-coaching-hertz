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
            boxShadow: '0 20px 40px -10px rgba(255, 209, 0, 0.15)'
          }}
        >
          <input type="file" id="resume-upload" hidden onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
          <div style={{ width: 80, height: 80, background: '#000', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px', border: '3px solid #FFD100' }}>
            <UploadCloud size={32} color="#FFD100" />
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#000', marginBottom: 16 }}>GENERATE FUTURE MOVES</h2>
          <p style={{ fontSize: 18, color: '#64748B', fontWeight: 600, marginBottom: 48 }}>Upload your resume to reveal your intelligent career tree.</p>
          <button style={{ background: '#FFD100', color: '#000', border: '2px solid #000', padding: '18px 48px', borderRadius: 12, fontWeight: 900, fontSize: 15, cursor: 'pointer', textTransform: 'uppercase' }}>Analyze My Trajectory</button>
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
    <div style={{ minHeight: '100vh', background: '#F8FAFC', width: '100%', paddingBottom: 100 }}>
      
      {/* Banner Area */}
      <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', padding: '20px' }}>
         <div style={{ position: 'relative', width: '100%', height: 260, borderRadius: 24, overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
            <img src="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=1400&fit=crop&q=80" alt="Banner" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
            <div style={{ position: 'relative', zIndex: 10 }}>
               <h2 style={{ fontSize: 36, fontWeight: 950, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>OPPORTUNITIES CURATED<br/>FOR YOU.</h2>
            </div>
            {/* Profile Card Overlay */}
            <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', background: '#fff', borderRadius: 24, padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 24, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}>
               <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 18, fontWeight: 950, color: '#000', margin: 0 }}>RAM JIRAM</p>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0', fontWeight: 700 }}>Your profile is looking awesome</p>
               </div>
               <div style={{ width: 68, height: 68, borderRadius: '50%', overflow: 'hidden', border: '3px solid #FFD100' }}>
                  <Image src="/ram_profile.png" width={68} height={68} alt="Profile" />
               </div>
            </div>
         </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 40px' }}>
         <h1 style={{ textAlign: 'center', fontSize: 44, fontWeight: 950, color: '#000', marginBottom: 100, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Explore Future Moves</h1>

         {/* Tree Top Root Area */}
         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 140, marginBottom: 160 }}>
            
            {/* NEXT STEP (Left Node) */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
               <div style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid #10B981', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, overflow: 'hidden', boxShadow: '0 10px 25px rgba(16,185,129,0.15)' }}>
                  <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop" width={100} height={100} alt="Next" />
               </div>
               <span style={{ display: 'inline-block', background: '#10B981', color: '#fff', fontSize: 10, fontWeight: 950, padding: '6px 16px', borderRadius: 6, marginBottom: 12, textTransform: 'uppercase' }}>NEXT STEP</span>
               <p style={{ fontSize: 13, fontWeight: 800, color: '#007AFF', cursor: 'pointer', maxWidth: 180, margin: '0 auto', lineHeight: 1.4 }}>Click Here to Find Suggested Moves</p>
            </div>

            {/* YOU TODAY (Center) */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
               <div style={{ position: 'relative' }}>
                  {/* Glowing Aura */}
                  <div style={{ position: 'absolute', top: -10, left: -10, right: -10, bottom: -10, borderRadius: '50%', background: 'linear-gradient(135deg, #FFD100, #E2E8F0)', opacity: 0.3, filter: 'blur(15px)' }} />
                  <div id="center-node-anchor" style={{ position: 'relative', width: 140, height: 140, borderRadius: '50%', border: '8px solid #fff', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
                     <Image src="/ram_profile.png" width={140} height={140} alt="You" />
                  </div>
               </div>
               <div style={{ marginTop: 24 }}>
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 950, color: '#94A3B8', letterSpacing: '0.2em', marginBottom: 8, textTransform: 'uppercase' }}>YOU TODAY</span>
                  <p style={{ fontSize: 20, fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.02em' }}>RPA Solution Architect</p>
               </div>
            </div>

            {/* FUTURE MOVE (Right Node) */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
               <div style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid #F59E0B', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, overflow: 'hidden', boxShadow: '0 10px 25px rgba(245,158,11,0.15)' }}>
                  <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop" width={100} height={100} alt="Future" />
               </div>
               <span style={{ display: 'inline-block', background: '#F59E0B', color: '#fff', fontSize: 10, fontWeight: 950, padding: '6px 16px', borderRadius: 6, marginBottom: 12, textTransform: 'uppercase' }}>FUTURE MOVE</span>
               <p style={{ fontSize: 13, fontWeight: 800, color: '#007AFF', cursor: 'pointer', maxWidth: 180, margin: '0 auto', lineHeight: 1.4 }}>Click Here to Find a Journey</p>
            </div>

            {/* SVG Connector Arrows */}
            <div style={{ position: 'absolute', top: 140, left: '50%', transform: 'translateX(-50%)', width: 1100, height: 320, zIndex: 0, pointerEvents: 'none' }}>
               <svg width="1100" height="320" viewBox="0 0 1100 320">
                  <defs>
                     <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#007AFF" />
                     </marker>
                  </defs>
                  {/* Paths starting exactly from the base of the center circle */}
                  <path d="M550 0 C550 150, 137 150, 137 300" stroke="#007AFF" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity={0.4} markerEnd="url(#arrowhead)" />
                  <path d="M550 0 C550 150, 412 150, 412 300" stroke="#007AFF" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity={0.4} markerEnd="url(#arrowhead)" />
                  <path d="M550 0 C550 150, 687 150, 687 300" stroke="#007AFF" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity={0.4} markerEnd="url(#arrowhead)" />
                  <path d="M550 0 C550 150, 962 150, 962 300" stroke="#007AFF" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity={0.4} markerEnd="url(#arrowhead)" />
               </svg>
            </div>
         </div>

         {/* 4 Cards Grid */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, position: 'relative', zIndex: 10 }}>
            {careerCards.map(card => (
              <div key={card.id} style={{ background: '#fff', borderRadius: 32, padding: '56px 32px 40px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #F1F5F9', position: 'relative', minHeight: 520, transition: 'transform 0.3s ease' }} className="hover:-translate-y-2">
                 
                 <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: card.matchColor, color: '#fff', fontSize: 10, fontWeight: 950, padding: '6px 24px', borderRadius: 10, whiteSpace: 'nowrap', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', textTransform: 'uppercase', border: '2px solid #fff' }}>{card.match}</div>
                 
                 <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#CBD5E1', marginBottom: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 950, letterSpacing: '0.15em' }}>JOURNEY</span>
                    <Search size={20} />
                 </div>

                 <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', margin: '32px 0', border: '10px solid #F8FAFC', flexShrink: 0, boxShadow: 'inset 0 0 0 4px rgba(0,0,0,0.02)' }}>
                    <img src={card.image} alt={card.role} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 <div style={{ flex: 1, display: 'flex', alignItems: 'center', textAlign: 'center', marginBottom: 32 }}>
                    <h4 style={{ fontSize: 22, fontWeight: 950, color: '#111827', margin: 0, lineHeight: 1.2 }}>{card.role}</h4>
                 </div>
                 
                 <button style={{ background: card.badgeColor, color: '#fff', border: 'none', padding: '14px 44px', borderRadius: 12, fontSize: 11, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', transition: 'all 0.2s', boxShadow: `0 8px 16px ${card.badgeColor}33` }}>{card.badge}</button>
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
