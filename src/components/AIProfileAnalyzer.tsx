'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, Briefcase, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Sparkles } from "lucide-react"
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
  matchScore: number;
  domain: string;
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

  // Simulated AI Logic: Generates career paths based on detected "Operations" context
  const generatePaths = () => {
    const paths: AIPath[] = [
      {
        id: '1',
        title: 'Operations Strategy Consultant',
        domain: 'Corporate Strategy',
        matchScore: 94,
        description: 'Leveraging real-world field data to drive high-level operational efficiency projects.',
        rationale: 'Your experience in high-volume operations provides unique insights into bottleneck identification and process optimization.',
        skillsFound: ['Execution Speed', 'Resource Allocation', 'Team Leadership'],
        skillsToAcquire: ['Data Visualization', 'Lean Six Sigma', 'Strategic Blueprinting'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Frontline operational management.' },
          { title: 'Operations Strategy Analyst', duration: '12 Months', status: 'future', description: 'Assisting in regional process audits.' },
          { title: 'Strategy Consultant', duration: '3 Years', status: 'future', description: 'Driving enterprise-level automation and growth.' }
        ]
      },
      {
        id: '2',
        title: 'Digital Transformation Lead',
        domain: 'Technology',
        matchScore: 88,
        description: 'Bridging the gap between legacy operations and future-state digital platforms.',
        rationale: 'Your rapid adoption of internal systems suggests a strong aptitude for technology deployment.',
        skillsFound: ['Systems Thinking', 'User Advocacy', 'Change Management'],
        skillsToAcquire: ['Agile Methodology', 'Product Roadmap Planning', 'Technical Stakeholder Management'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Primary user of enterprise software.' },
          { title: 'Product Operations Specialist', duration: '18 Months', status: 'future', description: 'Internal product owner for operational tools.' },
          { title: 'Transformation Lead', duration: '4 Years', status: 'future', description: 'Directing the digital future of the enterprise.' }
        ]
      },
      {
        id: '3',
        title: 'Customer Experience Strategist',
        domain: 'Marketing & CX',
        matchScore: 82,
        description: 'Redefining the end-to-end customer journey using frontline insights.',
        rationale: 'High-pressure customer interaction history translates to superior empathy and journey design.',
        skillsFound: ['Customer Empathy', 'Conflict Resolution', 'Service Excellence'],
        skillsToAcquire: ['Journey Mapping', 'NPS Analytics', 'Personalization Strategy'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
        journey: [
          { title: 'Current Role', duration: 'Present', status: 'current', description: 'Daily touchpoint for customer feedback.' },
          { title: 'CX Liaison', duration: '10 Months', status: 'future', description: 'Feeding frontline insights to marketing teams.' },
          { title: 'Senior CX Strategist', duration: '2.5 Years', status: 'future', description: 'Authoring the global customer service standards.' }
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
      setTimeout(() => setAnalyzingText('Identifying Operational Strengths...'), 2400);
      setTimeout(() => setAnalyzingText('Matching with Enterprise Trajectories...'), 3200);
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
        <h2 style={{ fontSize: '2.25rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>AI Resume Analysis</h2>
        <p style={{ color: '#64748B', fontSize: '1.1rem', fontWeight: 600, margin: '0 auto 3.5rem', maxWidth: 450 }}>Upload your resume to generate intelligent, personalized career paths based on your unique skills and role.</p>
        <button style={{ background: '#FFC900', color: '#000', border: 'none', padding: '1.25rem 3.5rem', borderRadius: 20, fontWeight: 950, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Start Neural Mapping</button>
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
      <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '10rem' }}>
        
        <div style={{ textAlign: 'center', maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ paddingTop: '6rem', marginBottom: '6rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#000', padding: '0.5rem 1.5rem', borderRadius: 12, marginBottom: '2rem' }}>
                 <Sparkles size={18} color="#FFC900" />
                 <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em' }}>AI Analysis Complete</span>
              </div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 950, color: '#000', margin: '0 0 1rem 0', letterSpacing: '-0.04em' }}>Your Potential Mapped.</h1>
              <p style={{ fontSize: '1.25rem', color: '#64748B', fontWeight: 600, maxWidth: 650, margin: '0 auto' }}>Based on the skills and experience found in your resume, we recommend these primary career trajectories.</p>
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              {results.map((path) => (
                <div key={path.id} onClick={() => setSelectedPath(path)} style={{ cursor: 'pointer', position: 'relative' }} className="path-card">
                   <div style={{ background: '#fff', border: '1px solid #F1F5F9', borderRadius: 40, padding: '3.5rem 2rem 3rem', boxShadow: '0 20px 60px rgba(0,0,0,0.03)', transition: 'all 0.4s ease' }}>
                      <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 2.5rem', border: '6px solid #F8FAFC' }}>
                         <Image src={path.image} alt={path.title} width={120} height={120} style={{ objectFit: 'cover' }} />
                      </div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>{path.domain}</p>
                      <h4 style={{ fontSize: '1.4rem', fontWeight: 950, color: '#000', margin: '0 0 1.25rem 0', minHeight: '3.5rem' }}>{path.title}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', paddingTop: '2rem', borderTop: '1px solid #F8FAFC' }}>
                         <div style={{ padding: '0.4rem 1rem', background: '#FFC900', borderRadius: 8, fontSize: '0.75rem', fontWeight: 950, color: '#000' }}>{path.matchScore}% Match</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* AI Insight Modal */}
        {selectedPath && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', animation: 'fadeIn 0.2s ease-out' }}>
             <div style={{ background: '#fff', width: '100%', maxWidth: 1100, maxHeight: '92vh', borderRadius: 56, overflowY: 'auto', boxShadow: '0 60px 200px rgba(0,0,0,0.5)', position: 'relative', animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                
                <div style={{ padding: '5rem', borderBottom: '1px solid #F1F5F9' }}>
                   <button onClick={() => setSelectedPath(null)} style={{ position: 'absolute', top: '3rem', right: '3rem', background: '#F8FAFC', border: 'none', borderRadius: '50%', width: 56, height: 56, color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <X size={28} />
                   </button>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                      <div style={{ width: 160, height: 160, borderRadius: 48, overflow: 'hidden', border: '5px solid #FFC900' }}>
                         <Image src={selectedPath.image} alt={selectedPath.title} width={160} height={160} style={{ objectFit: 'cover' }} />
                      </div>
                      <div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ padding: '0.4rem 1.25rem', background: '#000', borderRadius: 8, fontSize: '0.8rem', fontWeight: 950, color: '#fff' }}>AI Insight</div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 950, color: '#FFC900' }}>{selectedPath.matchScore}% Neural Sync</span>
                         </div>
                         <h2 style={{ fontSize: '3.5rem', fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.04em' }}>{selectedPath.title}</h2>
                         <p style={{ fontSize: '1.25rem', color: '#64748B', fontWeight: 600, marginTop: '0.75rem' }}>Domain: {selectedPath.domain}</p>
                      </div>
                   </div>
                </div>

                <div style={{ padding: '4rem 5rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem' }}>
                      
                      <div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
                            <TrendingUp size={24} color="#000" />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 950, color: '#000', margin: 0 }}>Career Progression</h3>
                         </div>
                         <div style={{ position: 'relative', paddingLeft: '5rem' }}>
                            <div style={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: 3, background: '#F1F5F9' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                               {selectedPath.journey.map((step, idx) => (
                                  <div key={idx} style={{ position: 'relative' }}>
                                     <div style={{ position: 'absolute', left: -58, top: 0, width: 64, height: 64, borderRadius: '50%', background: step.status === 'current' ? '#000' : '#fff', border: '4px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {step.status === 'current' ? <CheckCircle2 size={32} color="#FFC900" /> : <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#CBD5E1' }} />}
                                     </div>
                                     <h4 style={{ fontSize: '1.4rem', fontWeight: 950, color: '#000', margin: '0 0 0.5rem 0' }}>{step.title}</h4>
                                     <p style={{ fontSize: '1.05rem', color: '#64748B', fontWeight: 600, maxWidth: 450, lineHeight: 1.6 }}>{step.description}</p>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                         <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: 40, border: '1px solid #E2E8F0' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 950, color: '#000', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                               <Target size={24} color="#000" /> AI Rationale
                            </h4>
                            <p style={{ fontSize: '1.1rem', color: '#64748B', fontWeight: 600, lineHeight: 1.8, margin: 0 }}>{selectedPath.rationale}</p>
                         </div>

                         <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 950, color: '#000', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><Layers size={20} /> Detected Strengths</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                               {selectedPath.skillsFound.map(sk => <span key={sk} style={{ padding: '0.7rem 1.4rem', background: '#F1F5F9', color: '#000', borderRadius: 12, fontSize: '0.85rem', fontWeight: 800 }}>{sk}</span>)}
                            </div>
                         </div>

                         <div style={{ background: '#000', padding: '3.5rem', borderRadius: 40, color: '#fff' }}>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 950, color: '#FFC900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>Skills to Develop</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                               {selectedPath.skillsToAcquire.map(sk => (
                                  <div key={sk} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                     <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFC900' }} />
                                     <span style={{ fontSize: '1rem', fontWeight: 700 }}>{sk}</span>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>

                   </div>
                </div>

             </div>
          </div>
        )}

        <style jsx>{`
          .path-card:hover > div { transform: translateY(-12px); box-shadow: 0 40px 90px rgba(0,0,0,0.08); border-color: #CBD5E1; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    );
  }

  return null;
}
