'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, Briefcase, ArrowRight, User, Target, TrendingUp, Info } from "lucide-react"
import { useState } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results';

interface JourneyStep {
  title: string;
  duration: string;
  status: 'completed' | 'current' | 'future';
  description: string;
}

interface RoleRecommendation {
  title: string;
  match: string;
  color: string;
  status: string;
  img: string;
  executive: string;
  owns: string;
  skills: string[];
  whyFit: string;
  development: string[];
  journey: JourneyStep[];
}

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Mapping Hertz Verticals...');
  const [selectedRole, setSelectedRole] = useState<RoleRecommendation | null>(null);

  const recommendations: RoleRecommendation[] = [
    { 
      title: 'Fleet Management', 
      match: 'HIGH MATCH', 
      color: '#82C91E', 
      status: 'NEXT STEP', 
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop',
      executive: 'Chris Berg — EVP, Fleet Management',
      owns: 'Vehicle acquisition, utilization, readiness, and lifecycle management.',
      skills: ['Operational discipline', 'Process improvement', 'Team coordination', 'Metric comfort'],
      whyFit: 'Fleet roles provide the structure and routines you need to build confidence without feeling overwhelmed.',
      development: ['Fleet systems basics', 'SOP ownership', 'Utilization metrics'],
      journey: [
        { title: 'Operations Trainee (Current)', duration: 'Present', status: 'current', description: 'Your current foundation at Hertz' },
        { title: 'Fleet Operations Coordinator', duration: 'Next Step', status: 'future', description: 'Entry role focusing on vehicle readiness and lifecycle.' },
        { title: 'Fleet Operations Manager', duration: 'Growth Path', status: 'future', description: 'Owning process improvements and team execution.' },
        { title: 'Regional Fleet Operations Leader', duration: 'Target', status: 'future', description: 'Strategic oversight of North American fleet logistics.' }
      ]
    },
    { 
      title: 'Technology & Digital Enablement', 
      match: 'MODERATE MATCH', 
      color: '#3B82F6', 
      status: 'NEXT STEP', 
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      executive: 'Dhriti Saha — EVP & Chief Information & Tech Officer',
      owns: 'Enterprise technology, digital platforms, and system enablement.',
      skills: ['Systems thinking', 'Program coordination', 'Change enablement', 'Translation'],
      whyFit: 'Focuses on coordination and adoption rather than deep technical coding, ideal for your energy.',
      development: ['Program management fundamentals', 'Change enablement', 'Executive comms'],
      journey: [
        { title: 'Operations Trainee (Current)', duration: 'Present', status: 'current', description: 'Deep operational experience' },
        { title: 'Technology Program Coordinator', duration: 'Next Step', status: 'future', description: 'Coordinating rollouts and adoption of new systems.' },
        { title: 'Product Operations Manager', duration: 'Growth Path', status: 'future', description: 'Translating business needs into technical requirements.' },
        { title: 'Digital Transformation Lead', duration: 'Target', status: 'future', description: 'Driving the future of Hertz digital platforms.' }
      ]
    },
    { 
      title: 'HR & People Development', 
      match: 'HIGH MATCH', 
      color: '#EC4899', 
      status: 'FUTURE MOVE', 
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      executive: 'Jyoti Chopra — EVP & Chief HR Officer',
      owns: 'Talent, learning, onboarding, employee experience, and people strategy.',
      skills: ['Coaching', 'Facilitation', 'Program coordination', 'Advocacy'],
      whyFit: 'Your passion for tutoring and developed leadership makes this role highly purposeful.',
      development: ['HR systems (Oracle)', 'Learning operations', 'Stakeholder comms'],
      journey: [
        { title: 'Operations Trainee (Current)', duration: 'Present', status: 'current', description: 'Experience with high-volume onboarding' },
        { title: 'Learning Program Coordinator', duration: 'Next Step', status: 'future', description: 'Managing training sessions and employee onboarding.' },
        { title: 'HR Business Partner', duration: 'Growth Path', status: 'future', description: 'Aligning business goals with people strategy.' },
        { title: 'Talent Development Leader', duration: 'Target', status: 'future', description: 'Shaping the next generation of Hertz talent.' }
      ]
    },
    { 
      title: 'Mobility & Shared Mobility', 
      match: 'WILD CARD', 
      color: '#F59E0B', 
      status: 'WILD CARD', 
      img: 'https://images.unsplash.com/photo-1454165833767-027508496739?w=400&h=400&fit=crop',
      executive: 'Doria Holbrook — EVP, Mobility',
      owns: 'Shared mobility models, operations, and future solutions.',
      skills: ['Innovation mindset', 'CX focus', 'Operations management', 'Adaptability'],
      whyFit: 'Ideal if you are motivated by innovation while still needing basic operational structure.',
      development: ['Mobility model fundamentals', 'Pilot execution', 'CX metrics'],
      journey: [
        { title: 'Operations Trainee (Current)', duration: 'Present', status: 'current', description: 'Core operational execution' },
        { title: 'Mobility Operations Coordinator', duration: 'Next Step', status: 'future', description: 'Execution of future fleet and mobility solutions.' },
        { title: 'Mobility Operations Manager', duration: 'Growth Path', status: 'future', description: 'Leading regional site operations for shared services.' },
        { title: 'Mobility Strategy Leader', duration: 'Target', status: 'future', description: 'Designing Hertz global mobility portfolio.' }
      ]
    }
  ];

  const fileInputRef = useState<any>(null); // Using a simple state for ref mock or real ref

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      setTimeout(() => setAnalyzingText('Extracting ERP & Operational skills...'), 1000);
      setTimeout(() => setAnalyzingText('Analyzing Fleet & Governance Gaps...'), 2000);
      setTimeout(() => setAnalyzingText('Predicting John\'s Trajectory...'), 3000);
      setTimeout(() => setStep('results'), 4000);
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
        style={{ padding: '6rem 3rem', background: '#fff', border: '2px dashed #FFC900', borderRadius: 32, textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
        onMouseEnter={e => e.currentTarget.style.background = '#FFC90005'}
        onMouseLeave={e => e.currentTarget.style.background = '#fff'}
      >
        <input 
          type="file" 
          id="resume-upload" 
          hidden 
          onChange={handleFileSelect} 
          accept=".pdf,.doc,.docx"
        />
        <div style={{ width: 100, height: 100, background: '#FFC900', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 12px 35px rgba(255,201,0,0.3)', transform: 'rotate(-5deg)' }}>
          <UploadCloud size={44} color="#000" />
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Drop John's Resume here</h2>
        <p style={{ color: '#6B7280', fontSize: '1.1rem', fontWeight: 600, margin: '0 auto 3rem', maxWidth: 450 }}>Tap to upload or drag and drop your file to map your transition into corporate career verticals.</p>
        <button style={{ background: '#000', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: 16, fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>Select Resume File</button>
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
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>Mapping Vertical Pathways...</h3>
        <p style={{ color: '#6B7280', fontWeight: 700, fontSize: '0.95rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#fff', borderRadius: 0, minHeight: '100vh', position: 'relative', padding: '0 0 5rem 0' }}>
        
        {/* Banner Section */}
        <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', borderRadius: 24, marginBottom: '4rem' }}>
           <Image src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&h=600&fit=crop" alt="Banner" width={1600} height={600} style={{ objectFit: 'cover', width: '100%', filter: 'brightness(0.5)' }} />
           <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', padding: '0 4rem' }}>
              <div style={{ color: '#fff' }}>
                 <p style={{ fontSize: '0.75rem', fontWeight: 900, color: '#FFC900', letterSpacing: '0.2em', marginBottom: '1rem' }}>CAREER VERTICALS</p>
                 <h2 style={{ fontSize: '2.5rem', fontWeight: 950, letterSpacing: '0.05em', color: '#fff', margin: 0, lineHeight: 1 }}>EXPERIENCE REALIGNMENT<br/>FOR JOHN.</h2>
              </div>
           </div>
           
           {/* Profile Card Overlay */}
           <div style={{ position: 'absolute', right: '4rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.98)', padding: '1.25rem 2.5rem', borderRadius: 24, display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.2rem', fontWeight: 950, color: '#000', margin: 0 }}>John</p>
                 <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.2rem 0', fontWeight: 700 }}>Management Trainee @ Hertz</p>
              </div>
              <div style={{ width: 64, height: 64, borderRadius: '50%', border: '4px solid #FFC900', overflow: 'hidden', position: 'relative' }}>
                 <Image src="/ram_profile.png" alt="John" width={64} height={64} style={{ objectFit: 'cover' }} />
              </div>
           </div>
        </div>

        {/* Tree Section */}
        <div style={{ textAlign: 'center', maxWidth: 1400, margin: '0 auto' }}>
           <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', marginBottom: '6rem', letterSpacing: '-0.03em' }}>Explore Future Moves</h1>

           {/* YOU TODAY Section */}
           <div style={{ display: 'flex', justifyContent: 'center', gap: '12rem', position: 'relative', marginBottom: '10rem' }}>
              
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '4px solid #82C91E', background: '#fff' }}>
                    <Image src="https://images.unsplash.com/photo-1544717297-fa15739a5447?w=100&h=100&fit=crop" alt="Suggest" width={80} height={80} style={{ objectFit: 'cover' }} />
                 </div>
                 <span style={{ display: 'inline-block', background: '#82C91E', color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.3rem 0.75rem', borderRadius: 6, position: 'absolute', top: 65, left: '50%', transform: 'translateX(-50%)' }}>NEXT STEP</span>
                 <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', marginTop: '1.5rem' }}>View Targeted<br/>Entry Roles</p>
              </div>

              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.25rem', border: '5px solid #fff', boxShadow: '0 15px 45px rgba(0,0,0,0.12)' }}>
                    <Image src="/ram_profile.png" alt="John" width={110} height={110} style={{ objectFit: 'cover' }} />
                 </div>
                 <p style={{ fontSize: '0.7rem', fontWeight: 900, color: '#9CA3AF', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>JOHN TODAY</p>
                 <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#111827' }}>Management Trainee</p>
              </div>

              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                 <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '4px solid #F59E0B', background: '#fff' }}>
                    <Image src="https://images.unsplash.com/photo-1454165833767-027508496739?w=100&h=100&fit=crop" alt="Journey" width={80} height={80} style={{ objectFit: 'cover' }} />
                 </div>
                 <span style={{ display: 'inline-block', background: '#F59E0B', color: '#fff', fontSize: '0.65rem', fontWeight: 950, padding: '0.3rem 0.75rem', borderRadius: 6, position: 'absolute', top: 65, left: '50%', transform: 'translateX(-50%)' }}>FUTURE MOVE</span>
                 <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', marginTop: '1.5rem' }}>Explore Long-Term<br/>Growth Paths</p>
              </div>

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
                   <div style={{ display: 'inline-block', background: rec.color, color: '#fff', fontSize: '0.7rem', fontWeight: 950, padding: '0.4rem 1rem', borderRadius: 6, marginBottom: '1.5rem', position: 'relative', zIndex: 10, boxShadow: `0 8px 20px ${rec.color}33` }}>{rec.match}</div>
                   
                   <div 
                    onClick={() => setSelectedRole(rec)}
                    className="journey-card" style={{ background: '#fff', border: '1px solid #F1F5F9', borderRadius: 24, padding: '2.5rem 1.5rem', boxShadow: '0 10px 35px rgba(0,0,0,0.03)', position: 'relative', height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                      <div style={{ position: 'absolute', top: 20, left: 24 }}>
                         <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0 }}>VERTICAL</p>
                      </div>
                      
                      <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', marginBottom: '2rem', marginTop: '1.5rem', padding: '4px', background: '#F8FAFC' }}>
                         <Image src={rec.img} alt={rec.title} width={100} height={100} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                      </div>
                      
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 950, color: '#111827', margin: '0 0 1rem 0', minHeight: '3.2rem' }}>{rec.title}</h4>
                      
                      <p style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, margin: '0 0 1.5rem 0', padding: '0 1rem' }}>Sponsor: {rec.executive.split(' — ')[0]}</p>

                      <div style={{ marginTop: 'auto', width: '100%', borderTop: '1px solid #F8FAFC', paddingTop: '1.5rem' }}>
                         <span style={{ display: 'inline-block', background: '#F8FAFC', color: rec.color, border: `1px solid ${rec.color}`, fontSize: '0.65rem', fontWeight: 950, padding: '0.35rem 0.9rem', borderRadius: 6, textTransform: 'uppercase' }}>Explore Path</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Real Data Journey Modal */}
        {selectedRole && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', animation: 'fadeIn 0.2s ease-out' }}>
             <div style={{ background: '#fff', width: '100%', maxWidth: 1000, maxHeight: '90vh', borderRadius: 40, overflowY: 'auto', boxShadow: '0 40px 120px rgba(0,0,0,0.3)', position: 'relative', animation: 'slideUp 0.3s ease-out' }}>
                
                {/* Modal Header */}
                <div style={{ background: '#000', padding: '4rem 3rem', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', right: -20, top: -20, width: 200, height: 200, background: selectedRole.color, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.3 }} />
                   <button 
                    onClick={() => setSelectedRole(null)}
                    style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 50, height: 50, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                      <X size={28} />
                   </button>
                   
                   <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '3rem' }}>
                      <div style={{ width: 140, height: 140, borderRadius: 32, overflow: 'hidden', border: '4px solid #FFC900', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                         <Image src={selectedRole.img} alt={selectedRole.title} width={140} height={140} style={{ objectFit: 'cover' }} />
                      </div>
                      <div>
                         <p style={{ color: '#FFC900', fontWeight: 950, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>{selectedRole.executive.split(' — ')[1]}</p>
                         <h2 style={{ color: '#fff', fontSize: '2.75rem', fontWeight: 950, margin: '0 0 0.5rem 0', letterSpacing: '-0.03em' }}>{selectedRole.title}</h2>
                         <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', fontWeight: 600, maxWidth: 600 }}>{selectedRole.owns}</p>
                      </div>
                   </div>
                </div>

                <div style={{ padding: '0 3rem 4rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', marginTop: '-3rem' }}>
                      
                      {/* Left: Journey Tree */}
                      <div style={{ background: '#fff', padding: '3rem', borderRadius: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9', position: 'relative', zIndex: 10 }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
                            <TrendingUp size={20} color="#000" />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 950, color: '#000', margin: 0 }}>Propulsion Path</h3>
                         </div>

                         <div style={{ position: 'relative', paddingLeft: '4rem' }}>
                            <div style={{ position: 'absolute', left: 24, top: 40, bottom: 40, width: 3, background: 'repeating-linear-gradient(to bottom, #FFC900 0px, #FFC900 15px, transparent 15px, transparent 30px)' }} />
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
                               {selectedRole.journey.map((step, idx) => (
                                  <div key={idx} style={{ position: 'relative' }}>
                                     <div style={{ position: 'absolute', left: -44, top: 0, width: 44, height: 44, borderRadius: '50%', background: step.status === 'current' ? '#000' : '#FFC900', border: '5px solid #fff', boxShadow: '0 8px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {step.status === 'current' ? <CheckCircle2 size={20} color="#FFC900" /> : <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />}
                                     </div>
                                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                           <h4 style={{ fontSize: '1.2rem', fontWeight: 950, color: step.status === 'current' ? '#000' : '#111827', margin: '0 0 0.4rem 0' }}>{step.title}</h4>
                                           <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, margin: 0 }}>{step.description}</p>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{step.duration}</span>
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>

                      {/* Right: Insight Panel */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                         
                         {/* Why Fit Card */}
                         <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: 24, border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                               <Target size={18} color={selectedRole.color} />
                               <h4 style={{ fontSize: '0.95rem', fontWeight: 950, color: '#000', margin: 0 }}>Bridge to John</h4>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>{selectedRole.whyFit}</p>
                         </div>

                         {/* Skills Card */}
                         <div style={{ background: '#fff', padding: '2.5rem', borderRadius: 24, border: '1px solid #F1F5F9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: 950, color: '#000', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                               <Info size={18} color="#000" /> Vertical Capabilities
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                               {selectedRole.skills.map(skill => (
                                  <span key={skill} style={{ padding: '0.5rem 1.25rem', background: '#F8FAFC', color: '#000', borderRadius: 8, fontSize: '0.75rem', fontWeight: 800, border: '1px solid #E2E8F0' }}>{skill}</span>
                               ))}
                            </div>
                         </div>

                         {/* Dev Card */}
                         <div style={{ background: '#000', padding: '2.5rem', borderRadius: 24, color: '#fff' }}>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 950, color: '#FFC900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Short-Term Development</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                               {selectedRole.development.map((dev, i) => (
                                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                     <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFC900' }} />
                                     <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{dev}</span>
                                  </div>
                               ))}
                            </div>
                            <button style={{ width: '100%', marginTop: '2rem', background: '#FFC900', color: '#000', border: 'none', padding: '1rem', borderRadius: 12, fontWeight: 950, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>Set Target Goal</button>
                         </div>

                      </div>
                   </div>
                </div>

             </div>
          </div>
        )}

        <style jsx>{`
          .journey-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 70px rgba(0,0,0,0.1);
            border-color: #CBD5E1;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(60px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
      </div>
    );
  }

  return null;
}
