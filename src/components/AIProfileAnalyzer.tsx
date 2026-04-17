'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Sparkles, User, HelpCircle, Compass } from "lucide-react"
import { useState } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results';

interface JourneyStep {
  title: string;
  duration: string;
  status: 'completed' | 'current' | 'future';
  description: string;
}

interface AIPath {
  id: string;
  title: string;
  matchLevel: string;
  matchScore: number;
  color: string;
  statusBadge: string;
  description: string;
  rationale: string;
  skillsFound: string[];
  skillsToAcquire: string[];
  journey: JourneyStep[];
  image: string;
}

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Initializing Neural Engine...');
  const [selectedPath, setSelectedPath] = useState<AIPath | null>(null);
  const [results, setResults] = useState<AIPath[]>([]);

  const generatePaths = () => {
    const paths: AIPath[] = [
      {
        id: '1',
        title: 'Business Development Analyst',
        matchLevel: 'MEDIUM MATCH',
        matchScore: 78,
        color: '#82C91E',
        statusBadge: 'NEXT STEP',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
        description: 'Driving regional growth by identifying and exploiting operational efficiency gaps.',
        rationale: 'Your high-volume operations experience gives you a practical edge in spotting scalability issues that others miss.',
        skillsFound: ['Operational Intelligence', 'Process Optimization', 'Field Execution'],
        skillsToAcquire: ['Market Research', 'Financial Modeling', 'B2B Sales Strategy'],
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Frontline operational management.' },
          { title: 'Associate Analyst', duration: '12 Months', status: 'future', description: 'Data-driven market assessment.' },
          { title: 'Business Development Lead', duration: '3 Years', status: 'future', description: 'Owning regional expansion blueprints.' }
        ]
      },
      {
        id: '2',
        title: 'Alliance Management Specialist',
        matchLevel: 'MEDIUM MATCH',
        matchScore: 72,
        color: '#F39C12',
        statusBadge: 'FUTURE MOVE',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
        description: 'Orchestrating strategic partnerships and vendor relations across the mobility ecosystem.',
        rationale: 'Your experience managing complex frontline logistics translates well to coordinating high-level stakeholder interests.',
        skillsFound: ['Vendor Coordination', 'Conflict Resolution', 'Logistical Scaling'],
        skillsToAcquire: ['Contract Negotiation', 'Strategic Partnership Design', 'Executive Presence'],
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Managing local vendor touchpoints.' },
          { title: 'Partner Liaison', duration: '14 Months', status: 'future', description: 'Managing mid-tier tech partnerships.' },
          { title: 'Alliance Lead', duration: '3.5 Years', status: 'future', description: 'Directing global strategic alliances.' }
        ]
      },
      {
        id: '3',
        title: 'Senior Product Marketing Specialist',
        matchLevel: 'HIGH MATCH',
        matchScore: 92,
        color: '#E74C3C',
        statusBadge: 'FUTURE MOVE',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
        description: 'Shaping the market narrative for operational technologies based on frontline adoption data.',
        rationale: 'You possess rare "Translation" skills—the ability to turn complex field operations into compelling product value statements.',
        skillsFound: ['Product Advocacy', 'User Feedback Loops', 'Narrative Leadership'],
        skillsToAcquire: ['GTM Strategy', 'Persona Development', 'Competitive Intelligence'],
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Internal product champion for field software.' },
          { title: 'Product Marketing Manager', duration: '18 Months', status: 'future', description: 'Launching frontline-centric digital tools.' },
          { title: 'Senior Strategy Lead', duration: '4 Years', status: 'future', description: 'Defining the global product marketing roadmap.' }
        ]
      },
      {
        id: '4',
        title: 'Research and Development Lead',
        matchLevel: 'WILD CARD',
        matchScore: 65,
        color: '#8E44AD',
        statusBadge: 'WILD CARD',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
        description: 'Prototyping the next generation of fleet readiness and mobility solutions.',
        rationale: 'Your "Innovation Mindset" detected in early tutoring and problem-solving suggests a fit for future-state design.',
        skillsFound: ['Rapid Prototyping', 'Blue-Sky Thinking', 'Operational Testing'],
        skillsToAcquire: ['Systems Engineering Basics', 'R&D Management', 'Innovation Accounting'],
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Field testing of current readiness models.' },
          { title: 'Innovation Engineer', duration: '2 Years', status: 'future', description: 'Prototyping autonomous readiness workflows.' },
          { title: 'R&D Director', duration: '5 Years', status: 'future', description: 'Directing the enterprise innovation lab.' }
        ]
      }
    ];
    setResults(paths);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      const filename = e.target.files[0].name;
      setTimeout(() => setAnalyzingText(`Parsing ${filename}...`), 800);
      setTimeout(() => setAnalyzingText('Extracting Role & Skill Context...'), 1600);
      setTimeout(() => setAnalyzingText('Generating Future Moves Tree...'), 2400);
      setTimeout(() => {
        generatePaths();
        setStep('results');
      }, 3500);
    }
  };

  const triggerUpload = () => {
    const input = document.getElementById('resume-upload') as HTMLInputElement;
    if (input) input.click();
  };

  if (step === 'upload') {
    return (
      <div 
        onClick={triggerUpload}
        style={{ padding: '6rem 3rem', background: '#fff', border: '3px dashed #F1F5F9', borderRadius: 48, textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
      >
        <input type="file" id="resume-upload" hidden onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
        <div style={{ width: 100, height: 100, background: '#000', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', boxShadow: '0 15px 45px rgba(0,0,0,0.2)' }}>
          <Sparkles size={40} color="#FFC900" />
        </div>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>Explore Future Moves</h2>
        <p style={{ color: '#64748B', fontSize: '1.1rem', fontWeight: 600, margin: '0 auto 3.5rem', maxWidth: 450 }}>Upload your resume to reveal your intelligent career tree based on your skills and trajectory.</p>
        <button style={{ background: '#FFC900', color: '#000', border: 'none', padding: '1.25rem 3.5rem', borderRadius: 20, fontWeight: 950, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Identify Opportunities</button>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div style={{ padding: '8rem 3rem', background: '#fff', borderRadius: 48, border: '1px solid #F1F5F9', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 3rem' }}>
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #F8FAFC', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #000', borderRadius: '50%', borderTopColor: '#FFC900', animation: 'spin 1s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Cpu size={50} color="#000" />
          </div>
        </div>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem' }}>AI Processing...</h3>
        <p style={{ color: '#64748B', fontWeight: 800, fontSize: '1.1rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#F8F9FA', minHeight: '100vh', paddingBottom: '10rem', width: '100%' }}>
        
        {/* TOP NAV BANNER - EXACT RECREATION */}
        <div style={{ position: 'relative', width: '100%', height: 180, overflow: 'hidden', marginBottom: '4rem', background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
           <div style={{ position: 'absolute', left: 40, bottom: 40, display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <p style={{ fontSize: '1.25rem', fontWeight: 950, color: '#000', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>OPPORTUNITIES CURATED<br/>FOR YOU.</p>
              </div>
           </div>
           
           {/* Profile Bubble on Right */}
           <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', background: '#fff', padding: '1rem 2rem', borderRadius: 20, display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000', margin: 0 }}>Candidate Profile</p>
                 <p style={{ fontSize: '0.7rem', color: '#6B7280', margin: '0.1rem 0', fontWeight: 700 }}>Your profile is looking awesome</p>
                 <button style={{ background: 'none', border: 'none', color: '#007AFF', fontSize: '0.7rem', fontWeight: 800, padding: 0, cursor: 'pointer' }}>Give it some more love</button>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '3px solid #FFC900', overflow: 'hidden' }}>
                 <Image src="/ram_profile.png" alt="Profile" width={56} height={56} style={{ objectFit: 'cover' }} />
              </div>
           </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: 1400, margin: '0 auto', padding: '0 2rem' }}>
           <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#4B5563', marginBottom: '8rem', letterSpacing: '-0.02em' }}>Explore Future Moves</h1>

           {/* TREE STRUCTURE ROOT SECTION */}
           <div style={{ position: 'relative', marginBottom: '14rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '10rem' }}>
              
              {/* NEXT STEP (Left) */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 90, height: 90, borderRadius: '50%', margin: '0 auto 1rem', border: '4px solid #82C91E', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(130,201,30,0.1)' }}>
                    <HelpCircle size={40} color="#82C91E" />
                 </div>
                 <span style={{ background: '#82C91E', color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.35rem 0.8rem', borderRadius: 6, position: 'absolute', top: 75, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>NEXT STEP</span>
                 <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#007AFF', marginTop: '2rem', cursor: 'pointer' }}>Click Here to Find<br/>Suggested Moves</p>
              </div>

              {/* YOU TODAY (Center) */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 130, height: 130, borderRadius: '50%', margin: '0 auto 1.5rem', border: '5px solid #fff', boxShadow: '0 15px 40px rgba(0,0,0,0.08)', position: 'relative', overflow: 'hidden' }}>
                    <Image src="/ram_profile.png" alt="You" width={130} height={130} style={{ objectFit: 'cover' }} />
                 </div>
                 <p style={{ fontSize: '0.65rem', fontWeight: 950, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.2rem' }}>YOU TODAY</p>
                 <p style={{ fontSize: '1rem', fontWeight: 800, color: '#374151' }}>Management Trainee</p>
              </div>

              {/* FUTURE MOVE (Right) */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 90, height: 90, borderRadius: '50%', margin: '0 auto 1rem', border: '4px solid #E67E22', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(230,126,34,0.1)' }}>
                    <Compass size={40} color="#E67E22" />
                 </div>
                 <span style={{ background: '#E67E22', color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.35rem 0.8rem', borderRadius: 6, position: 'absolute', top: 75, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>FUTURE MOVE</span>
                 <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#007AFF', marginTop: '2rem', cursor: 'pointer' }}>Click Here to Find<br/>a Journey</p>
              </div>

              {/* BRANCHING LINES - PRECISE SVG */}
              <div style={{ position: 'absolute', left: '50%', top: '100px', transform: 'translateX(-50%)', width: '1000px', height: '220px', pointerEvents: 'none' }}>
                 <svg width="1000" height="220" viewBox="0 0 1000 220" fill="none">
                    <path d="M500 30 C500 120, 125 120, 125 220" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="8 8" />
                    <path d="M500 30 C500 120, 375 120, 375 220" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="8 8" />
                    <path d="M500 30 C500 120, 625 120, 625 220" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="8 8" />
                    <path d="M500 30 C500 120, 875 120, 875 220" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="8 8" />
                 </svg>
              </div>
           </div>

           {/* RESULTS GRID - 4 COLUMNS */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', marginBottom: '10rem' }}>
              {results.map((path) => (
                <div key={path.id} onClick={() => setSelectedPath(path)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                   
                   {/* Top Quality Badge */}
                   <div style={{ display: 'inline-block', background: path.color, color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.35rem 1rem', borderRadius: 6, marginBottom: '1.25rem', boxShadow: `0 8px 20px ${path.color}33` }}>
                      {path.matchLevel}
                   </div>
                   
                   <div className="card-hover" style={{ background: '#fff', borderRadius: 20, padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'relative', height: 440 }}>
                      <p style={{ position: 'absolute', top: 20, left: 24, fontSize: '0.6rem', color: '#9CA3AF', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.1em' }}>JOURNEY</p>
                      <div style={{ position: 'absolute', top: 20, right: 24, width: 32, height: 32, borderRadius: '50%', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D1D5DB' }}>
                         <Search size={16} />
                      </div>

                      <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '2rem 0', border: '1px solid #F1F5F9', padding: '6px' }}>
                         <Image src={path.image} alt={path.title} width={140} height={140} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                      </div>
                      
                      <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#374151', margin: '0 0 2rem 0', minHeight: '3.5rem', lineHeight: 1.2 }}>{path.title}</h4>
                      
                      <div style={{ marginTop: 'auto', width: '100%', paddingTop: '1.5rem', borderTop: '1px solid #F9FAFB' }}>
                         <span style={{ background: path.color, color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.4rem 1.25rem', borderRadius: 6, textTransform: 'uppercase' }}>{path.statusBadge}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Modal: Same as before but with better styling */}
        {selectedPath && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(15px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
             <div style={{ background: '#fff', width: '100%', maxWidth: 1000, maxHeight: '90vh', borderRadius: 40, overflowY: 'auto', position: 'relative', animation: 'slideUp 0.3s ease-out' }}>
                <button onClick={() => setSelectedPath(null)} style={{ position: 'absolute', top: '2rem', right: '2rem', width: 48, height: 48, borderRadius: '50%', background: '#F3F4F6', border: 'none', cursor: 'pointer', zIndex: 10 }}><X /></button>
                
                <div style={{ background: '#000', padding: '4rem', color: '#fff' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                      <div style={{ width: 140, height: 140, borderRadius: 32, overflow: 'hidden', border: `4px solid ${selectedPath.color}` }}>
                         <Image src={selectedPath.image} alt="Path" width={140} height={140} style={{ objectFit: 'cover' }} />
                      </div>
                      <div>
                         <span style={{ fontSize: '0.8rem', fontWeight: 900, color: selectedPath.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Neural Analysis Insight</span>
                         <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '0.5rem 0' }}>{selectedPath.title}</h2>
                         <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Sync Score: {selectedPath.matchScore}%</p>
                      </div>
                   </div>
                </div>

                <div style={{ padding: '4rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem' }}>
                      <div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><TrendingUp /> Progression</h3>
                         <div style={{ position: 'relative', paddingLeft: '4rem' }}>
                            <div style={{ position: 'absolute', left: 16, top: 10, bottom: 10, width: 2, background: '#E5E7EB' }} />
                            {selectedPath.journey.map((s, i) => (
                               <div key={i} style={{ marginBottom: '4rem', position: 'relative' }}>
                                  <div style={{ position: 'absolute', left: -36, top: 0, width: 44, height: 44, borderRadius: '50%', background: s.status === 'current' ? '#000' : '#fff', border: '3px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                     {s.status === 'current' ? <Award size={24} color="#FFC900" /> : <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#D1D5DB' }} />}
                                  </div>
                                  <h4 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '0 0 0.5rem 0' }}>{s.title}</h4>
                                  <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.5 }}>{s.description}</p>
                               </div>
                            ))}
                         </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                         <div style={{ background: '#F9FAFB', padding: '2.5rem', borderRadius: 32 }}>
                            <h4 style={{ fontWeight: 900, marginBottom: '1rem' }}>AI Rationale</h4>
                            <p style={{ color: '#4B5563', lineHeight: 1.6 }}>{selectedPath.rationale}</p>
                         </div>
                         <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: 32 }}>
                            <h4 style={{ fontWeight: 900, marginBottom: '1.5rem', color: '#FFC900' }}>Mastery Targets</h4>
                            {selectedPath.skillsToAcquire.map(sk => (
                               <div key={sk} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFC900' }} />
                                  <span style={{ fontWeight: 700 }}>{sk}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}

        <style jsx>{`
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            border-color: #D1D5DB;
          }
          @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        `}</style>
      </div>
    );
  }

  return null;
}
