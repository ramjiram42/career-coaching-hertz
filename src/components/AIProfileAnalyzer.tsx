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

  // ADVANCED AI LOGIC: Maps specific resume traits to logical Hertz & Enterprise evolutions
  const generatePaths = () => {
    const paths: AIPath[] = [
      {
        id: '1',
        title: 'Operations Excellence Manager',
        matchLevel: 'HIGH MATCH',
        matchScore: 96,
        color: '#82C91E',
        statusBadge: 'NEXT STEP',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop',
        description: 'Implementing global operational standards and lean efficiencies across North American stations.',
        rationale: 'Your direct experience as a Management Trainee provides the ground-level insight needed to realistically audit and improve corporate SOPs.',
        skillsFound: ['Field Leadership', 'Operational Discipline', 'Station Logistics'],
        skillsToAcquire: ['Lean Six Sigma', 'P&L Strategy', 'Multi-Unit Oversight'],
        journey: [
          { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Frontline station operations and team leadership.' },
          { title: 'Senior Station Manager', duration: '12 Months', status: 'future', description: 'Full P&L ownership of a Tier-1 airport hub.' },
          { title: 'Operations Excellence Leader', duration: '3 Years', status: 'future', description: 'Directing regional process standardizations.' }
        ]
      },
      {
        id: '2',
        title: 'Talent Development Specialist',
        matchLevel: 'MEDIUM MATCH',
        matchScore: 88,
        color: '#F39C12',
        statusBadge: 'FUTURE MOVE',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
        description: 'Designing and delivering training programs for the next generation of Hertz leaders.',
        rationale: 'Your extensive background in tutoring and academic support maps perfectly to corporate training and people development roles.',
        skillsFound: ['Educational Coaching', 'Public Speaking', 'Curriculum Execution'],
        skillsToAcquire: ['Instructional Design', 'LMS Management', 'Performance Consulting'],
        journey: [
          { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Onboarding new hires at the counter.' },
          { title: 'Regional Training Lead', duration: '18 Months', status: 'future', description: 'Facilitating MT onboarding and leadership workshops.' },
          { title: 'Global L&D Director', duration: '5 Years', status: 'future', description: 'Shaping the workforce development strategy.' }
        ]
      },
      {
        id: '3',
        title: 'Global Fleet Logistics Analyst',
        matchLevel: 'HIGH MATCH',
        matchScore: 91,
        color: '#E74C3C',
        statusBadge: 'FUTURE MOVE',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop',
        description: 'Utilizing data to optimize vehicle utilization, lifecycle, and readiness metrics globally.',
        rationale: 'Your "Success in fast-paced environments" and experience with vehicle prep mapping makes you highly suited for fleet analytics.',
        skillsFound: ['Inventory Management', 'Utilization Tracking', 'High-Pressure Decisioning'],
        skillsToAcquire: ['SQL / Data Science', 'Predictive Modeling', 'Asset Lifecycle Tech'],
        journey: [
          { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Managing daily vehicle readiness and prep.' },
          { title: 'Fleet Logistics Specialist', duration: '2 Years', status: 'future', description: 'Optimizing fleet allocation in local markers.' },
          { title: 'Global Fleet Strategist', duration: '4 Years', status: 'future', description: 'Managing the $1B+ North American asset lifecycle.' }
        ]
      },
      {
        id: '4',
        title: 'Global Sales & Solutions Lead',
        matchLevel: 'WILD CARD',
        matchScore: 74,
        color: '#8E44AD',
        statusBadge: 'WILD CARD',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
        description: 'Developing mobility solutions and strategic accounts for enterprise-level clients.',
        rationale: 'Your ability to "keep teams engaged and focused" translates to strong client relationship management and solutions selling.',
        skillsFound: ['Performance Coaching', 'Conflict Management', 'Customer Relationship Drive'],
        skillsToAcquire: ['Solution Selling', 'Account Strategy', 'Negotiation Mastery'],
        journey: [
          { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Driving ancillary sales at the counter.' },
          { title: 'Account Executive', duration: '12 Months', status: 'future', description: 'Managing mid-sized regional corporate accounts.' },
          { title: 'Global Sales Director', duration: '6 Years', status: 'future', description: 'Directing the enterprise mobility sales division.' }
        ]
      }
    ];
    setResults(paths);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      const filename = e.target.files[0].name;
      setTimeout(() => setAnalyzingText(`Analyzing Resume: ${filename}...`), 800);
      setTimeout(() => setAnalyzingText('Extracting Management Trainee Competencies...'), 1600);
      setTimeout(() => setAnalyzingText('Mapping Tutoring Experience to Talent Roles...'), 2400);
      setTimeout(() => setAnalyzingText('Cross-Referencing Fleet Operations Data...'), 3200);
      setTimeout(() => {
        generatePaths();
        setStep('results');
      }, 4000);
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
        <h2 style={{ fontSize: '2.25rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>Generate Future Moves</h2>
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
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #000', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Cpu size={50} color="#000" />
          </div>
        </div>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem' }}>AI Neural Analysis...</h3>
        <p style={{ color: '#64748B', fontWeight: 800, fontSize: '1.1rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#F8F9FA', minHeight: '100vh', paddingBottom: '10rem', width: '100%' }}>
        
        {/* TOP NAV BANNER */}
        <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', borderRadius: 24, marginBottom: '4rem', background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
           <div style={{ position: 'absolute', left: 40, bottom: 40, display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <p style={{ fontSize: '1.25rem', fontWeight: 950, color: '#000', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>OPPORTUNITIES CURATED<br/>FOR YOU.</p>
              </div>
           </div>
           
           {/* Profile Bubble on Right */}
           <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', background: '#fff', padding: '1rem 2rem', borderRadius: 20, display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000', margin: 0 }}>Strategic Profile</p>
                 <p style={{ fontSize: '0.7rem', color: '#6B7280', margin: '0.1rem 0', fontWeight: 700 }}>Analysis complete based on your resume</p>
                 <button style={{ background: 'none', border: 'none', color: '#007AFF', fontSize: '0.7rem', fontWeight: 800, padding: 0, cursor: 'pointer' }}>Refine Talent Data</button>
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
                 <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#007AFF', marginTop: '2rem', cursor: 'pointer' }}>Suggested Moves<br/>Internal Growth</p>
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
                 <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#007AFF', marginTop: '2rem', cursor: 'pointer' }}>Strategic Long-Term<br/>Journey</p>
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

           {/* RESULTS GRID - DYNAMIC BASED ON RESUME */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', marginBottom: '10rem' }}>
              {results.map((path) => (
                <div key={path.id} onClick={() => setSelectedPath(path)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                   
                   <div style={{ display: 'inline-block', background: path.color, color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.35rem 1rem', borderRadius: 6, marginBottom: '1.25rem', boxShadow: `0 8px 20px ${path.color}33` }}>
                      {path.matchLevel}
                   </div>
                   
                   <div className="card-hover" style={{ background: '#fff', borderRadius: 24, padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'relative', height: 440 }}>
                      <p style={{ position: 'absolute', top: 20, left: 24, fontSize: '0.6rem', color: '#9CA3AF', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.1em' }}>JOURNEY</p>
                      <div style={{ position: 'absolute', top: 20, right: 24, width: 32, height: 32, borderRadius: '50%', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D1D5DB' }}>
                         <Search size={16} />
                      </div>

                      <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '2rem 0', border: '1px solid #F1F5F9', padding: '6px' }}>
                         <Image src={path.image} alt={path.title} width={140} height={140} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                      </div>
                      
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#374151', margin: '0 0 2rem 0', minHeight: '3.5rem', lineHeight: 1.2 }}>{path.title}</h4>
                      
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
                         <span style={{ fontSize: '0.8rem', fontWeight: 900, color: selectedPath.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Resume Synthesis Engine</span>
                         <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '0.5rem 0' }}>{selectedPath.title}</h2>
                         <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Skill-Match Sync: {selectedPath.matchScore}%</p>
                      </div>
                   </div>
                </div>

                <div style={{ padding: '4rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem' }}>
                      <div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><TrendingUp /> Personalized Progression</h3>
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
                            <h4 style={{ fontWeight: 900, marginBottom: '1rem' }}>AI Skill Rationale</h4>
                            <p style={{ color: '#4B5563', lineHeight: 1.6 }}>{selectedPath.rationale}</p>
                         </div>
                         <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: 32 }}>
                            <h4 style={{ fontWeight: 900, marginBottom: '1.5rem', color: '#FFC900' }}>Skills Detected from Resume</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                               {selectedPath.skillsFound.map(sk => <span key={sk} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: 8, fontSize: '0.8rem', fontWeight: 700 }}>{sk}</span>)}
                            </div>
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
