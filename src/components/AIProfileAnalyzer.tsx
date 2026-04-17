'use client';

import { UploadCloud, Cpu, Search, Bell, Info } from "lucide-react"
import { useState } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results';

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Parsing technical stack...');

  const recommendations = [
    { title: 'Business Development Analyst', match: 'MEDIUM MATCH', color: '#82C91E', status: 'NEXT STEP', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop' },
    { title: 'Alliance Management Specialist', match: 'MEDIUM MATCH', color: '#E67E22', status: 'FUTURE MOVE', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop' },
    { title: 'Senior Product Marketing Specialist', match: 'HIGH MATCH', color: '#D35400', status: 'FUTURE MOVE', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop' },
    { title: 'Research and Development Lead', match: 'WILD CARD', color: '#911D44', status: 'WILD CARD', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop' }
  ];

  const handleUpload = () => {
    setStep('analyzing');
    setTimeout(() => setAnalyzingText('Extracting RPA framework expertise...'), 1000);
    setTimeout(() => setAnalyzingText('Matching Python & Architect skills...'), 2000);
    setTimeout(() => setAnalyzingText('Predicting leadership trajectory...'), 3000);
    setTimeout(() => setStep('results'), 4000);
  };

  if (step === 'upload') {
    return (
      <div 
        onClick={handleUpload}
        style={{ padding: '6rem 3rem', background: '#fff', border: '2px dashed #E5E7EB', borderRadius: 32, textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
      >
        <div style={{ width: 80, height: 80, background: '#FFC900', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 8px 30px rgba(255,201,0,0.3)' }}>
          <UploadCloud size={36} color="#000" />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>Upload Resume to Explore Future Moves</h2>
        <p style={{ color: '#6B7280', fontSize: '1.05rem', margin: '0 auto 2.5rem', maxWidth: 400 }}>Discover curated opportunities based on your Hertz career history and potential.</p>
        <button style={{ background: '#000', color: '#fff', border: 'none', padding: '0.85rem 2.5rem', borderRadius: 12, fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase' }}>Analyze Resume</button>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div style={{ padding: '8rem 3rem', background: '#fff', borderRadius: 32, border: '1px solid #E5E7EB', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 2.5rem' }}>
          <div style={{ position: 'absolute', inset: 0, border: '4px solid #F3F4F6', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '4px solid #FFC900', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1.2s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={36} color="#000" />
          </div>
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>Analyzing Potential...</h3>
        <p style={{ color: '#6B7280', fontWeight: 700, fontSize: '0.95rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#fff', borderRadius: 0, minHeight: '100vh', position: 'relative' }}>
        
        {/* Banner Section */}
        <div style={{ position: 'relative', width: '100%', height: 220, overflow: 'hidden', borderRadius: 24, marginBottom: '2rem' }}>
           <Image src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&h=600&fit=crop" alt="Banner" width={1600} height={600} style={{ objectFit: 'cover', width: '100%', filter: 'brightness(0.8)' }} />
           <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', padding: '0 4rem' }}>
              <div style={{ color: '#fff' }}>
                 <h2 style={{ fontSize: '2.25rem', fontWeight: 950, letterSpacing: '0.05em', color: '#fff', margin: 0 }}>OPPORTUNITIES CURATED<br/>FOR YOU.</h2>
              </div>
           </div>
           
           {/* Profile Card Overlay */}
           <div style={{ position: 'absolute', right: '4rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.25rem 2rem', borderRadius: 24, display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', backdropFilter: 'blur(8px)' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000', margin: 0 }}>Ram</p>
                 <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.2rem 0' }}>Your profile is looking awesome</p>
                 <button style={{ background: 'none', border: 'none', color: '#007AFF', fontSize: '0.75rem', fontWeight: 800, padding: 0, cursor: 'pointer' }}>Give it some more love</button>
              </div>
              <div style={{ width: 60, height: 60, borderRadius: '50%', border: '3px solid #FFC900', overflow: 'hidden', position: 'relative' }}>
                 <Image src="/ram_profile.png" alt="Ram" width={60} height={60} style={{ objectFit: 'cover' }} />
              </div>
           </div>
        </div>

        {/* Tree Section */}
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
           <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#333', marginBottom: '4rem', letterSpacing: '-0.03em' }}>Explore Future Moves</h1>

           {/* YOU TODAY Section */}
           <div style={{ display: 'flex', justifyContent: 'center', gap: '8rem', position: 'relative', marginBottom: '8rem' }}>
              {/* Left Suggestion */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                 <div style={{ width: 60, height: 60, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.25rem', border: '3px solid #FFC900', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <Image src="https://images.unsplash.com/photo-1544717297-fa15739a5447?w=100&h=100&fit=crop" alt="Suggest" width={60} height={60} />
                 </div>
                 <span style={{ display: 'block', background: '#82C91E', color: '#fff', fontSize: '0.6rem', fontWeight: 950, padding: '0.25rem 0.6rem', borderRadius: 4, width: 'fit-content', margin: '-1.8rem auto 1.25rem', position: 'relative' }}>NEXT STEP</span>
                 <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#111827', cursor: 'pointer' }}>Click Here to Find<br/>Suggested Moves</p>
              </div>

              {/* Center You Today */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                 <div style={{ width: 85, height: 85, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '4px solid #fff', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
                    <Image src="/ram_profile.png" alt="Ram" width={85} height={85} style={{ objectFit: 'cover' }} />
                 </div>
                 <p style={{ fontSize: '0.65rem', fontWeight: 900, color: '#9CA3AF', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>YOU TODAY</p>
                 <p style={{ fontSize: '1rem', fontWeight: 900, color: '#111827' }}>RPA Solution Architect</p>
              </div>

              {/* Right Future Move */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                 <div style={{ width: 60, height: 60, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.25rem', border: '3px solid #D35400', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <Image src="https://images.unsplash.com/photo-1454165833767-027508496739?w=100&h=100&fit=crop" alt="Journey" width={60} height={60} />
                 </div>
                 <span style={{ display: 'block', background: '#D35400', color: '#fff', fontSize: '0.6rem', fontWeight: 950, padding: '0.25rem 0.6rem', borderRadius: 4, width: 'fit-content', margin: '-1.8rem auto 1.25rem', position: 'relative' }}>FUTURE MOVE</span>
                 <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#111827', cursor: 'pointer' }}>Click Here to Find<br/>a Journey</p>
              </div>

              {/* Dotted Connections SVG */}
              <div style={{ position: 'absolute', left: '50%', bottom: -80, transform: 'translateX(-50%)', width: '100%', height: 80, zIndex: 1, pointerEvents: 'none' }}>
                 <svg width="100%" height="100%" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none">
                    <path d="M500 0 C500 50, 125 50, 125 80" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 6" />
                    <path d="M500 0 C500 50, 375 50, 375 80" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 6" />
                    <path d="M500 0 C500 50, 625 50, 625 80" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 6" />
                    <path d="M500 0 C500 50, 875 50, 875 80" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 6" />
                 </svg>
              </div>
           </div>

           {/* Results Grid */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: 1280, margin: '0 auto' }}>
              {recommendations.map((rec, idx) => (
                <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                   <div style={{ display: 'inline-block', background: rec.color, color: '#fff', fontSize: '0.7rem', fontWeight: 900, padding: '0.3rem 0.8rem', borderRadius: 5, marginBottom: '1.25rem', position: 'relative', zIndex: 2, boxShadow: `0 4px 10px ${rec.color}44` }}>{rec.match}</div>
                   <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2.5rem 1.5rem', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', position: 'relative', height: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s' }}>
                      <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                         <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>JOURNEY</p>
                      </div>
                      <div style={{ position: 'absolute', top: 16, right: 16 }}>
                         <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Search size={14} color="#9CA3AF" /></div>
                      </div>
                      
                      <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', marginBottom: '2.5rem', marginTop: '1rem', border: '1px solid #F1F5F9' }}>
                         <Image src={rec.img} alt={rec.title} width={100} height={100} style={{ objectFit: 'cover' }} />
                      </div>
                      
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#111827', lineHeight: 1.4, margin: '0 0 2rem 0', minHeight: '3.2rem' }}>{rec.title}</h4>
                      
                      <div style={{ marginTop: 'auto', width: '100%', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                         <span style={{ display: 'inline-block', background: rec.color, color: '#fff', fontSize: '0.65rem', fontWeight: 900, padding: '0.25rem 0.75rem', borderRadius: 5, textTransform: 'uppercase' }}>{rec.status}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }

  return null;
}
