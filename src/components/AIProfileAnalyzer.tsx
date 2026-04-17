'use client';

import { UploadCloud, Cpu, Search, Briefcase } from "lucide-react"
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
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>Upload Resume for Your Move</h2>
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
      <div style={{ background: '#fff', borderRadius: 0, minHeight: '100vh', position: 'relative', padding: '0 0 5rem 0' }}>
        
        {/* Banner Section */}
        <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', borderRadius: 24, marginBottom: '4rem' }}>
           <Image src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&h=600&fit=crop" alt="Banner" width={1600} height={600} style={{ objectFit: 'cover', width: '100%', filter: 'brightness(0.7)' }} />
           <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', padding: '0 4rem' }}>
              <div style={{ color: '#fff' }}>
                 <h2 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '0.05em', color: '#fff', margin: 0, lineHeight: 1.1 }}>OPPORTUNITIES CURATED<br/>FOR YOU.</h2>
              </div>
           </div>
           
           {/* Profile Card Overlay */}
           <div style={{ position: 'absolute', right: '4rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.98)', padding: '1.25rem 2.5rem', borderRadius: 24, display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 15px 40px rgba(0,0,0,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.15rem', fontWeight: 900, color: '#000', margin: 0 }}>Ram</p>
                 <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.2rem 0', fontWeight: 600 }}>Your profile is looking awesome</p>
                 <button style={{ background: 'none', border: 'none', color: '#007AFF', fontSize: '0.75rem', fontWeight: 800, padding: 0, cursor: 'pointer' }}>Give it some more love</button>
              </div>
              <div style={{ width: 64, height: 64, borderRadius: '50%', border: '4px solid #FFC900', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                 <Image src="/ram_profile.png" alt="Ram" width={64} height={64} style={{ objectFit: 'cover' }} />
              </div>
           </div>
        </div>

        {/* Tree Section */}
        <div style={{ textAlign: 'center', maxWidth: 1400, margin: '0 auto' }}>
           <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', marginBottom: '6rem', letterSpacing: '-0.03em' }}>Explore Future Moves</h1>

           {/* YOU TODAY Section */}
           <div style={{ display: 'flex', justifyContent: 'center', gap: '12rem', position: 'relative', marginBottom: '10rem' }}>
              
              {/* Left Suggestion */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '4px solid #FFC900', boxShadow: '0 10px 25px rgba(255,201,0,0.2)', backgroundColor: '#fff', position: 'relative' }}>
                    <Image src="https://images.unsplash.com/photo-1544717297-fa15739a5447?w=100&h=100&fit=crop" alt="Suggest" width={80} height={80} style={{ objectFit: 'cover' }} />
                 </div>
                 <span style={{ display: 'inline-block', background: '#82C91E', color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.3rem 0.75rem', borderRadius: 6, position: 'absolute', top: 65, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>NEXT STEP</span>
                 <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', marginTop: '1.5rem', lineHeight: 1.3 }}>Click Here to Find<br/>Suggested Moves</p>
              </div>

              {/* Center You Today */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.25rem', border: '5px solid #fff', boxShadow: '0 15px 45px rgba(0,0,0,0.12)', position: 'relative' }}>
                    <Image src="/ram_profile.png" alt="Ram" width={110} height={110} style={{ objectFit: 'cover' }} />
                 </div>
                 <p style={{ fontSize: '0.7rem', fontWeight: 900, color: '#9CA3AF', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>YOU TODAY</p>
                 <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#111827' }}>RPA Solution Architect</p>
              </div>

              {/* Right Future Move */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '4px solid #D35400', boxShadow: '0 10px 25px rgba(211,84,0,0.2)', backgroundColor: '#fff', position: 'relative' }}>
                    <Image src="https://images.unsplash.com/photo-1454165833767-027508496739?w=100&h=100&fit=crop" alt="Journey" width={80} height={80} style={{ objectFit: 'cover' }} />
                 </div>
                 <span style={{ display: 'inline-block', background: '#D35400', color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.3rem 0.75rem', borderRadius: 6, position: 'absolute', top: 65, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>FUTURE MOVE</span>
                 <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', marginTop: '1.5rem', lineHeight: 1.3 }}>Click Here to Find<br/>a Journey</p>
              </div>

              {/* SVG Connector Lines */}
              <div style={{ position: 'absolute', left: 0, top: 40, width: '100%', height: 160, zIndex: 1, pointerEvents: 'none' }}>
                 <svg width="100%" height="100%" viewBox="0 0 1000 160" fill="none" preserveAspectRatio="none">
                    <path d="M500 40 C500 120, 200 120, 200 160" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="8 8" />
                    <path d="M500 40 C500 120, 400 120, 400 160" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="8 8" />
                    <path d="M500 40 C500 120, 600 120, 600 160" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="8 8" />
                    <path d="M500 40 C500 120, 800 120, 800 160" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="8 8" />
                 </svg>
              </div>
           </div>

           {/* Results Cards Row */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', padding: '0 2rem' }}>
              {recommendations.map((rec, idx) => (
                <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                   <div style={{ display: 'inline-block', background: rec.color, color: '#fff', fontSize: '0.7rem', fontWeight: 950, padding: '0.4rem 1rem', borderRadius: 6, marginBottom: '1.5rem', position: 'relative', zIndex: 10, boxShadow: `0 8px 20px ${rec.color}33`, letterSpacing: '0.05em' }}>{rec.match}</div>
                   
                   <div className="journey-card" style={{ background: '#fff', border: '1px solid #F1F5F9', borderRadius: 24, padding: '3rem 2rem', boxShadow: '0 10px 35px rgba(0,0,0,0.03)', position: 'relative', height: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s ease' }}>
                      <div style={{ position: 'absolute', top: 20, left: 24 }}>
                         <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0 }}>JOURNEY</p>
                      </div>
                      <div style={{ position: 'absolute', top: 20, right: 24 }}>
                         <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBD5E1' }}><Search size={16} /></div>
                      </div>
                      
                      <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', marginBottom: '2.5rem', marginTop: '1.5rem', border: '1px solid #F1F5F9', padding: '4px', background: '#fff' }}>
                         <Image src={rec.img} alt={rec.title} width={110} height={110} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                      </div>
                      
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 950, color: '#111827', lineHeight: 1.3, margin: '0 0 2rem 0', minHeight: '3.5rem', letterSpacing: '-0.02em' }}>{rec.title}</h4>
                      
                      <div style={{ marginTop: 'auto', width: '100%', borderTop: '1px solid #F8FAFC', paddingTop: '1.5rem' }}>
                         <span style={{ display: 'inline-block', background: rec.color, color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.35rem 0.9rem', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{rec.status}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <style jsx>{`
          .journey-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 60px rgba(0,0,0,0.08);
            border-color: #E2E8F0;
          }
        `}</style>
      </div>
    );
  }

  return null;
}
