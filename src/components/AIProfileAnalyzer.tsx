'use client';

import { UploadCloud, Loader2, CheckCircle, ArrowLeft, Target, Cpu, RefreshCw, Zap, TrendingUp, Briefcase, Heart, MoreHorizontal, Info } from "lucide-react"
import { useState } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results' | 'journey';

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Parsing technical stack...');
  const [selectedRole, setSelectedRole] = useState<any>(null);

  const currentRole = "RPA Solution Architect";
  
  const recommendations = [
    { 
      id: '1',
      title: 'Enterprise Technical Architect', 
      category: 'Technology', 
      match: 85, 
      totalSkills: 15,
      matchedSkills: 12,
      pathType: 'Desired path',
      badge: 'Leadership role',
      theme: '#EC4899', 
      nodes: ['Senior Cloud Architect', 'Head of Engineering']
    },
    { 
      id: '2',
      title: 'RPA Program Manager', 
      category: 'Management', 
      match: 73, 
      totalSkills: 15,
      matchedSkills: 11,
      pathType: 'Popular path',
      badge: 'Management track',
      theme: '#F59E0B', 
      nodes: ['Director of Automation', 'CTO']
    },
    { 
      id: '3',
      title: 'Operations Excellence Lead', 
      category: 'Operations', 
      match: 65, 
      totalSkills: 15,
      matchedSkills: 9,
      pathType: 'Strategic Pivot',
      badge: 'Business focus',
      theme: '#3B82F6', 
      nodes: ['Fleet Strategy Director', 'Regional Operations Director'],
      isPromoted: true
    }
  ];

  const handleUpload = () => {
    setStep('analyzing');
    setTimeout(() => setAnalyzingText('Extracting RPA framework expertise...'), 1000);
    setTimeout(() => setAnalyzingText('Matching Python & Architect skills...'), 2000);
    setTimeout(() => setAnalyzingText('Predicting leadership trajectory...'), 3000);
    setTimeout(() => setStep('results'), 4500);
  };

  if (step === 'upload') {
    return (
      <div 
        onClick={handleUpload}
        style={{ padding: '6rem 3rem', background: '#fff', border: '2px dashed #E5E7EB', borderRadius: 32, textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#FFD100'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
      >
        <div style={{ width: 80, height: 80, background: '#FFD100', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 8px 30px rgba(255,209,0,0.3)' }}>
          <UploadCloud size={36} color="#000" />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Recommended for you</h2>
        <p style={{ color: '#6B7280', fontSize: '1.05rem', margin: '0 auto 2.5rem', maxWidth: 400 }}>Based on your profile and skill set, we've mapped your best trajectories.</p>
        <button style={{ background: '#000', color: '#fff', border: 'none', padding: '0.85rem 2.5rem', borderRadius: 12, fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase' }}>Upload Resume</button>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div style={{ padding: '8rem 3rem', background: '#fff', borderRadius: 32, border: '1px solid #E5E7EB', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 2.5rem' }}>
          <div style={{ position: 'absolute', inset: 0, border: '4px solid #F3F4F6', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '4px solid #FFD100', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1.2s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={36} color="#FFD100" />
          </div>
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>Architecting Your Future</h3>
        <p style={{ color: '#6B7280', fontWeight: 700, fontSize: '0.95rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#FBFCFD', padding: '3rem', borderRadius: 32, minHeight: '80vh' }}>
        <div style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#333', marginBottom: '0.5rem' }}>Recommended for you</h1>
          <p style={{ color: '#999', fontSize: '1rem', fontWeight: 600 }}>Based on your profile and skills set</p>
        </div>

        <div style={{ display: 'flex', gap: '3rem', position: 'relative' }}>
          
          {/* Avatar and Root Node */}
          <div style={{ flexShrink: 0, position: 'relative', zIndex: 10 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <Image src="/ram_profile.png" alt="Ram" width={80} height={80} style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* Paths Container */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative' }}>
            
            {/* SVG Connections */}
            <svg style={{ position: 'absolute', left: '-3rem', top: '2.5rem', width: '3rem', height: '100%', pointerEvents: 'none' }}>
              <path d="M 0 0 C 30 0, 30 0, 48 0" stroke="#E5E7EB" strokeWidth="2" fill="none" />
              <path d="M 0 0 C 30 0, 30 180, 48 180" stroke="#E5E7EB" strokeWidth="2" fill="none" />
              <path d="M 0 0 C 30 0, 30 400, 48 400" stroke="#E5E7EB" strokeWidth="2" fill="none" />
            </svg>

            {recommendations.map((path, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Path Header info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: path.theme, color: '#fff', padding: '0.25rem 0.75rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 800 }}>
                        <Zap size={10} fill="currentColor" /> {path.pathType}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                   {/* Main Card */}
                   <div style={{ width: 340, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 900, color: '#111827', margin: 0, maxWidth: '80%' }}>{path.title}</h4>
                        <MoreHorizontal size={18} color="#9CA3AF" />
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0 0 0.5rem 0' }}>You have <span style={{ color: '#111827', fontWeight: 800 }}>{path.matchedSkills} of {path.totalSkills}</span> most common skills for role</p>
                      
                      {/* Skill Bar */}
                      <div style={{ width: '100%', height: 4, background: '#F1F5F9', borderRadius: 2, marginBottom: '1rem', overflow: 'hidden' }}>
                        <div style={{ width: `${(path.matchedSkills / path.totalSkills) * 100}%`, height: '100%', background: '#3B82F6', borderRadius: 2 }} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B' }}>
                         <Zap size={14} fill="currentColor" />
                         <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>{path.badge}</span>
                      </div>
                   </div>

                   {/* Journey Nodes */}
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: 16, height: 16, border: '2px solid #E5E7EB', borderRadius: '50%', background: '#fff' }} />
                      
                      <div style={{ width: 180, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem', textAlign: 'center' }}>
                         <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#111827', margin: 0 }}>{path.nodes[0]}</p>
                      </div>

                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <div style={{ width: 12, height: 12, border: '2px solid #E5E7EB', borderRadius: '50%', background: '#fff' }} />
                         <span style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700 }}>+1 role</span>
                         <div style={{ width: 12, height: 12, border: '2px solid #E5E7EB', borderRadius: '50%', background: '#fff' }} />
                      </div>

                      <div style={{ width: 180, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem', textAlign: 'center', position: 'relative' }}>
                         <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, background: '#fff', border: '2px solid #000', borderRadius: '50%', zIndex: 10 }} />
                         <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#111827', margin: 0 }}>{path.nodes[1]}</p>
                      </div>

                      <button style={{ marginLeft: '1rem', background: 'none', border: 'none', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>
                        <Heart size={16} /> Save path
                      </button>
                   </div>
                </div>
              </div>
            ))}

            {/* Promoted Lane Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
               <span style={{ color: '#3B82F6', fontWeight: 800, fontSize: '0.9rem' }}>Promoted Lane</span>
               <Info size={14} color="#D1D5DB" />
            </div>

          </div>
        </div>
      </div>
    );
  }

  return null;
}


function ResultCard({ role, onClick }: { role: any, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      style={{ padding: '1.25rem', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = role.theme; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'none' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <div style={{ background: role.theme + '15', color: role.theme, padding: '0.2rem 0.6rem', borderRadius: 8, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>{role.category}</div>
        <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#111827' }}>{role.match}%</div>
      </div>
      <h5 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0' }}>{role.title}</h5>
      <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0, fontWeight: 600 }}>Path: {role.time}</p>
    </div>
  );
}
