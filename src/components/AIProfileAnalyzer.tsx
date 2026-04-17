'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, Briefcase, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers } from "lucide-react"
import { useState } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results';

interface JourneyStep {
  title: string;
  duration: string;
  status: 'completed' | 'current' | 'future';
  description: string;
  skillsGained?: string[];
}

interface RoleRecommendation {
  id: string;
  title: string;
  match: number; // Percentage
  matchLevel: 'HIGH MATCH' | 'MODERATE MATCH' | 'WILD CARD';
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

const HERTZ_VERTICALS: RoleRecommendation[] = [
  {
    id: 'fleet',
    title: 'Fleet Management',
    match: 92,
    matchLevel: 'HIGH MATCH',
    color: '#82C91E',
    status: 'NEXT STEP',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop',
    executive: 'Chris Berg — EVP, Fleet Management',
    owns: 'Vehicle acquisition, utilization, readiness, and lifecycle management.',
    skills: ['Operational discipline', 'Process improvement', 'Team coordination', 'Metric comfort'],
    whyFit: 'Addresses early career overwhelm by providing high-structure, routines, and clear ownership of physical assets.',
    development: ['Utilization & lifecycle metrics', 'Hertz Fleet Systems (TMW)', 'SOP readiness routines'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Foundation in station operations and team coordination.' },
      { title: 'Fleet Operations Coordinator', duration: '6 Months', status: 'future', description: 'Entry-level vertical role focusing on asset readiness.', skillsGained: ['SOP Discipline', 'Metric Reporting'] },
      { title: 'Fleet Operations Manager', duration: '18 Months', status: 'future', description: 'Owning process improvements and lifecycle execution.', skillsGained: ['Lifecycle Management'] },
      { title: 'Regional Fleet Operations Leader', duration: '3-4 Years', status: 'future', description: 'Strategic oversight of North American fleet logistics.', skillsGained: ['Strategic Planning'] }
    ]
  },
  {
    id: 'hr',
    title: 'HR & People Development',
    match: 88,
    matchLevel: 'HIGH MATCH',
    color: '#EC4899',
    status: 'NEXT STEP',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    executive: 'Jyoti Chopra — EVP & Chief HR Officer',
    owns: 'Talent, learning, onboarding, employee experience, and people strategy.',
    skills: ['Coaching', 'Facilitation', 'Program coordination', 'Employee advocacy'],
    whyFit: 'Directly leverages your passion for tutoring and leadership to create better onboarding experiences for others.',
    development: ['Oracle HRMS navigation', 'Learning Operations basics', 'Stakeholder communication'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Leading frontline teams through high-volume shifts.' },
      { title: 'HR Operations Coordinator', duration: '8 Months', status: 'future', description: 'Support role for talent acquisition and onboarding.', skillsGained: ['Compliance', 'ATS Systems'] },
      { title: 'Learning Program Manager', duration: '2 Years', status: 'future', description: 'Designing training curriculum for North America.', skillsGained: ['Curriculum Design'] },
      { title: 'Employee Experience Leader', duration: '5 Years', status: 'future', description: 'Shaping the mission-oriented culture of Hertz.', skillsGained: ['People Strategy'] }
    ]
  },
  {
    id: 'tech',
    title: 'Technology & Enablement',
    match: 75,
    matchLevel: 'MODERATE MATCH',
    color: '#3B82F6',
    status: 'FUTURE MOVE',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
    executive: 'Dhriti Saha — EVP & Chief Info & Tech Officer',
    owns: 'Enterprise technology, digital platforms, and system enablement.',
    skills: ['Systems thinking', 'Program coordination', 'Change enablement', 'Translation'],
    whyFit: 'Ideal for your ability to learn quickly and support others through change without needing to code.',
    development: ['Change Enablement frameworks', 'Product Ops basics', 'Agile fundamentals'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Using Hertz software in real-world frontline scenarios.' },
      { title: 'Technology Program Coordinator', duration: '12 Months', status: 'future', description: 'Bridging operations with enterprise system rollouts.' },
      { title: 'Product Operations Manager', duration: '2.5 Years', status: 'future', description: 'Managing the adoption and feedback loops for digital tools.' },
      { title: 'Digital Transformation Lead', duration: 'Target', status: 'future', description: 'Driving the global technical future of mobility.' }
    ]
  },
  {
    id: 'legal',
    title: 'Legal, Risk & Compliance',
    match: 82,
    matchLevel: 'HIGH MATCH',
    color: '#6366F1',
    status: 'NEXT STEP',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop',
    executive: 'Piero Bussani — Chief Legal Officer',
    owns: 'Legal operations, governance, compliance, and risk management.',
    skills: ['Attention to detail', 'Policy interpretation', 'Structured thinking', 'Risk awareness'],
    whyFit: 'Aligns with your need for stability and direction early in your career through clear rules-based work.',
    development: ['Regulatory compliance basics', 'Enterprise risk frameworks', 'Structured thinking'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Enforcing safety and compliance SOPs at the counter.' },
      { title: 'Compliance Operations Analyst', duration: '10 Months', status: 'future', description: 'Auditing field operations for policy adherence.' },
      { title: 'Risk Management Program Lead', duration: '3 Years', status: 'future', description: 'Managing enterprise-wide risk mitigation projects.' },
      { title: 'Enterprise Compliance Leader', duration: 'Target', status: 'future', description: 'Setting governance standards for Hertz Global.' }
    ]
  },
  {
    id: 'mobility',
    title: 'Mobility & Shared Mobility',
    match: 70,
    matchLevel: 'WILD CARD',
    color: '#F59E0B',
    status: 'WILD CARD',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop',
    executive: 'Doria Holbrook — EVP, Mobility',
    owns: 'Shared mobility models and future operations strategy.',
    skills: ['Innovation mindset', 'CX focus', 'Operations management', 'Adaptability'],
    whyFit: 'Blends your operational energy with the innovation of shared mobility pilot models.',
    development: ['Mobility model fundamentals', 'Pilot CX metrics', 'Strategic coordination'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Executing car rental fundamentals.' },
      { title: 'Mobility Operations Lead', duration: '12-18 Months', status: 'future', description: 'Launching shared fleet pilots in local markets.' },
      { title: 'Regional Mobility Manager', duration: '4 Years', status: 'future', description: 'Scaling shared mobility across North American hubs.' },
      { title: 'Mobility Strategy Leader', duration: 'Target', status: 'future', description: 'Defining the next decade of shared transportation.' }
    ]
  },
  {
    id: 'comms',
    title: 'Communications & Engagement',
    match: 78,
    matchLevel: 'MODERATE MATCH',
    color: '#06B6D4',
    status: 'FUTURE MOVE',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
    executive: 'Lauren Fritts — SVP & Chief Comms Officer',
    owns: 'Internal communications, change messaging, and executive messaging.',
    skills: ['Storytelling', 'Written communication', 'Stakeholder engagement', 'Change awareness'],
    whyFit: 'Leverages your comfort with influencing and motivating others to shape culture.',
    development: ['Corporate storytelling', 'Crisis communication basics', 'Internal engagement'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Influencing employees and customers daily.' },
      { title: 'Internal Comms Coordinator', duration: '12 Months', status: 'future', description: 'Drafting field messaging and rollout plans.' },
      { title: 'Change Management Lead', duration: '3.5 Years', status: 'future', description: 'Orchestrating messaging for enterprise-wide shifts.' },
      { title: 'Enterprise Communications Leader', duration: 'Target', status: 'future', description: 'Guardian of the Hertz brand and culture.' }
    ]
  }
];

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Mapping Hertz Verticals...');
  const [selectedRole, setSelectedRole] = useState<RoleRecommendation | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      setTimeout(() => setAnalyzingText('Analyzing Hertz vertical requirements...'), 1000);
      setTimeout(() => setAnalyzingText('Matching John\'s leadership traits...'), 2000);
      setTimeout(() => setAnalyzingText('Calculating path readiness...'), 3000);
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
      >
        <input type="file" id="resume-upload" hidden onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
        <div style={{ width: 100, height: 100, background: '#FFC900', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 12px 35px rgba(255,201,0,0.3)', transform: 'rotate(-5deg)' }}>
          <UploadCloud size={44} color="#000" />
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 950, color: '#000', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Upload John's Resume</h2>
        <p style={{ color: '#6B7280', fontSize: '1.1rem', fontWeight: 600, margin: '0 auto 3rem', maxWidth: 450 }}>Map your transition across the Hertz enterprise to find your natural vertical alignment.</p>
        <button style={{ background: '#000', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: 16, fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Analyze Potential</button>
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
            <Layers size={36} color="#000" />
          </div>
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>Intelligence Engine Running...</h3>
        <p style={{ color: '#6B7280', fontWeight: 700, fontSize: '0.95rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '10rem' }}>
        
        {/* Banner */}
        <div style={{ position: 'relative', width: '100%', height: 260, overflow: 'hidden', marginBottom: '4rem' }}>
           <Image src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&h=600&fit=crop" alt="Banner" width={1600} height={600} style={{ objectFit: 'cover', width: '100%', filter: 'brightness(0.5)' }} />
           <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 4rem' }}>
              <div style={{ color: '#fff' }}>
                 <p style={{ fontSize: '0.8rem', fontWeight: 950, color: '#FFC900', letterSpacing: '0.25em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Hertz Enterprise Pathway</p>
                 <h2 style={{ fontSize: '2.75rem', fontWeight: 950, letterSpacing: '0.02em', color: '#fff', margin: 0, lineHeight: 1.1 }}>YOUR MOVE,<br/>JOHN.</h2>
              </div>
           </div>
           
           <div style={{ position: 'absolute', right: '4rem', top: '50%', transform: 'translateY(-50%)', background: '#fff', padding: '1.5rem 2.5rem', borderRadius: 28, display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.25rem', fontWeight: 950, color: '#000', margin: 0 }}>John</p>
                 <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: '0.25rem 0', fontWeight: 700 }}>Management Trainee @ Hertz</p>
              </div>
              <div style={{ width: 64, height: 64, borderRadius: '50%', border: '4px solid #FFC900', overflow: 'hidden' }}>
                 <Image src="/ram_profile.png" alt="John" width={64} height={64} style={{ objectFit: 'cover' }} />
              </div>
           </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: 1400, margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #E2E8F0)' }} />
              <h1 style={{ fontSize: '2.5rem', fontWeight: 950, color: '#111827', margin: 0, letterSpacing: '-0.03em' }}>Explore Future Moves</h1>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(270deg, transparent, #E2E8F0)' }} />
           </div>
           <p style={{ color: '#6B7280', fontSize: '1.1rem', fontWeight: 600, maxWidth: 600, margin: '0 auto 6rem' }}>Based on your leadership tutoring and high-volume operations experience, we've identified your strongest corporate trajectories.</p>

           {/* Results Grid */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              {HERTZ_VERTICALS.map((rec) => (
                <div key={rec.id} onClick={() => setSelectedRole(rec)} style={{ position: 'relative', textAlign: 'center', cursor: 'pointer' }}>
                   
                   <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 32, padding: '3.5rem 2rem 3rem', boxShadow: '0 15px 45px rgba(0,0,0,0.03)', position: 'relative', transition: 'all 0.3s ease' }} className="vertical-card">
                      
                      {/* Match Badge */}
                      <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: rec.color, color: '#fff', fontSize: '0.7rem', fontWeight: 950, padding: '0.5rem 1.25rem', borderRadius: 99, boxShadow: `0 8px 25px ${rec.color}44`, whiteSpace: 'nowrap' }}>
                         {rec.matchLevel} • {rec.match}% ALIGNMENT
                      </div>

                      <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 2.5rem', border: '6px solid #F8FAFC', background: '#F8FAFC' }}>
                         <Image src={rec.img} alt={rec.title} width={120} height={120} style={{ objectFit: 'cover' }} />
                      </div>
                      
                      <p style={{ fontSize: '0.75rem', fontWeight: 950, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.6rem' }}>HERTZ VERTICAL</p>
                      <h4 style={{ fontSize: '1.5rem', fontWeight: 950, color: '#111827', margin: '0 0 1rem 0' }}>{rec.title}</h4>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                         <User size={14} color={rec.color} />
                         <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B' }}>{rec.executive.split(' — ')[0]}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', paddingTop: '2rem', borderTop: '1px solid #F1F5F9' }}>
                         <div style={{ width: 32, height: 32, borderRadius: 10, background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Search size={16} color="#CBD5E1" /></div>
                         <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111827' }}>Deep Path Sync</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Intelligence Detail Modal */}
        {selectedRole && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(16px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', animation: 'fadeIn 0.2s ease-out' }}>
             <div style={{ background: '#fff', width: '100%', maxWidth: 1100, maxHeight: '92vh', borderRadius: 48, overflowY: 'auto', boxShadow: '0 50px 150px rgba(0,0,0,0.4)', position: 'relative', animation: 'slideUp 0.3s ease-out' }}>
                
                <div style={{ background: '#000', padding: '5rem 4rem', position: 'relative', display: 'flex', alignItems: 'center', gap: '4rem' }}>
                   <button onClick={() => setSelectedRole(null)} style={{ position: 'absolute', top: '2.5rem', right: '2.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 56, height: 56, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                      <X size={32} />
                   </button>

                   <div style={{ width: 160, height: 160, borderRadius: 40, overflow: 'hidden', border: `4px solid ${selectedRole.color}`, boxShadow: '0 25px 60px rgba(0,0,0,0.4)', flexShrink: 0 }}>
                      <Image src={selectedRole.img} alt={selectedRole.title} width={160} height={160} style={{ objectFit: 'cover' }} />
                   </div>
                   <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                         <div style={{ padding: '0.4rem 1.25rem', background: selectedRole.color, borderRadius: 8, fontSize: '0.75rem', fontWeight: 950, color: '#fff' }}>Hertz Vertical Integration</div>
                         <div style={{ fontSize: '1.25rem', fontWeight: 950, color: '#FFC900' }}>{selectedRole.match}% Sync</div>
                      </div>
                      <h2 style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 950, margin: 0, letterSpacing: '-0.04em' }}>{selectedRole.title}</h2>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>EVP: {selectedRole.executive}</p>
                   </div>
                </div>

                <div style={{ padding: '4rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '5rem' }}>
                      
                      {/* Left: Progression Tree */}
                      <div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
                            <div style={{ width: 44, height: 44, background: '#F8FAFC', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={24} color="#000" /></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 950, color: '#000', margin: 0 }}>Career Progression Tree</h3>
                         </div>

                         <div style={{ position: 'relative', paddingLeft: '5rem' }}>
                            <div style={{ position: 'absolute', left: 24, top: 40, bottom: 40, width: 4, background: 'repeating-linear-gradient(to bottom, #F1F5F9 0px, #F1F5F9 20px, transparent 20px, transparent 40px)' }} />
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                               {selectedRole.journey.map((step, idx) => (
                                  <div key={idx} style={{ position: 'relative' }}>
                                     <div style={{ position: 'absolute', left: -54, top: 0, width: 62, height: 62, borderRadius: '50%', background: step.status === 'current' ? '#000' : '#fff', border: `4px solid ${step.status === 'current' ? '#FFC900' : '#F1F5F9'}`, boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {step.status === 'current' ? <Award size={28} color="#FFC900" /> : <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#CBD5E1' }} />}
                                     </div>
                                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                           <h4 style={{ fontSize: '1.4rem', fontWeight: 950, color: '#111827', margin: '0 0 0.5rem 0' }}>{step.title}</h4>
                                           <p style={{ fontSize: '1rem', color: '#64748B', fontWeight: 600, maxWidth: 450, lineHeight: 1.5 }}>{step.description}</p>
                                           {step.skillsGained && (
                                              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.6rem' }}>
                                                 {step.skillsGained.map(sk => <span key={sk} style={{ fontSize: '0.7rem', fontWeight: 900, color: selectedRole.color, textTransform: 'uppercase', letterSpacing: '0.05em', background: selectedRole.color + '11', padding: '0.35rem 0.75rem', borderRadius: 6 }}>+ {sk}</span>)}
                                              </div>
                                           )}
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                           <span style={{ fontSize: '0.85rem', fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block' }}>{step.duration}</span>
                                        </div>
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>

                      {/* Right: Intelligence Panel */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                         
                         <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: 32, border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                               <Target size={24} color={selectedRole.color} />
                               <h4 style={{ fontSize: '1.1rem', fontWeight: 950, color: '#000', margin: 0 }}>AI Sync Rationale</h4>
                            </div>
                            <p style={{ fontSize: '1rem', color: '#64748B', fontWeight: 600, lineHeight: 1.7, margin: 0 }}>{selectedRole.whyFit}</p>
                         </div>

                         <div style={{ background: '#fff', padding: '3rem', borderRadius: 32, border: '1px solid #F1F5F9', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 950, color: '#000', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                               <BookOpen size={20} color="#000" /> Vertical DNA
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                               {selectedRole.skills.map(skill => (
                                  <span key={skill} style={{ padding: '0.7rem 1.5rem', background: '#F8FAFC', color: '#111827', borderRadius: 12, fontSize: '0.8rem', fontWeight: 800, border: '1px solid #E2E8F0' }}>{skill}</span>
                               ))}
                            </div>
                         </div>

                         <div style={{ background: '#000', padding: '3rem', borderRadius: 32, color: '#fff', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', right: -20, top: -20, width: 100, height: 100, background: selectedRole.color, borderRadius: '50%', filter: 'blur(50px)', opacity: 0.4 }} />
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 950, color: '#FFC900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>Short-Term Mobility Roadmap</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                               {selectedRole.development.map((dev, i) => (
                                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                     <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFC900', marginTop: '0.3rem', flexShrink: 0 }} />
                                     <span style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.4 }}>{dev}</span>
                                  </div>
                               ))}
                            </div>
                            <button style={{ width: '100%', marginTop: '3rem', background: '#FFC900', color: '#000', border: 'none', padding: '1.25rem', borderRadius: 16, fontWeight: 950, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.12em', cursor: 'pointer' }}>Initiate Path Goal</button>
                         </div>

                      </div>
                   </div>
                </div>

             </div>
          </div>
        )}

        <style jsx>{`
          .vertical-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 40px 90px rgba(0,0,0,0.08);
            border-color: #CBD5E1;
            background: #fff !important;
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(80px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    );
  }

  return null;
}
