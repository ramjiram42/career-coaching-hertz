'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, Briefcase, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Star, User } from "lucide-react"
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
  match: number;
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
    match: 94,
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
    match: 89,
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
    match: 78,
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
    title: 'Legal & Compliance',
    match: 84,
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
    title: 'Mobility & Solutions',
    match: 72,
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
    id: 'ops',
    title: 'Core Operations',
    match: 96,
    matchLevel: 'HIGH MATCH',
    color: '#10B981',
    status: 'NEXT STEP',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop',
    executive: 'Mike Moore — EVP & Chief Operating Officer',
    owns: 'End-to-end operational execution across North America.',
    skills: ['People leadership', 'Operational execution', 'Performance management', 'Accountability'],
    whyFit: 'Your background in high-pressure team leadership maps perfectly to operational oversight.',
    development: ['Performance coaching', 'Labor planning', 'Safety & compliance'],
    journey: [
      { title: 'Management Trainee', duration: 'Current', status: 'current', description: 'Leading counter operations and vehicle prep.' },
      { title: 'Operations Supervisor', duration: '6 Months', status: 'future', description: 'Managing shift performance and labor allocation.' },
      { title: 'Operations Manager', duration: '2 Years', status: 'future', description: 'Full P&L responsibility for a major airport hub.' },
      { title: 'Regional Operations Leader', duration: '5 Years', status: 'future', description: 'Directing multiple areas and driving enterprise growth.' }
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
        style={{ padding: '6rem 3rem', background: '#fff', border: '5px dashed #FFC900', borderRadius: 48, textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}
      >
        <input type="file" id="resume-upload" hidden onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
        <div style={{ width: 120, height: 120, background: '#FFC900', borderRadius: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3rem', boxShadow: '0 15px 45px rgba(255,201,0,0.4)', transform: 'rotate(-3deg)' }}>
          <UploadCloud size={56} color="#000" />
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 950, color: '#000', marginBottom: '1rem', letterSpacing: '-0.04em' }}>Upload John's Resume</h2>
        <p style={{ color: '#6B7280', fontSize: '1.2rem', fontWeight: 600, margin: '0 auto 4rem', maxWidth: 500 }}>Let AI map your transition from frontline operations into Hertz corporate vertical leadership.</p>
        <button style={{ background: '#000', color: '#fff', border: 'none', padding: '1.25rem 4rem', borderRadius: 20, fontWeight: 950, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Analyze Transition</button>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div style={{ padding: '8rem 3rem', background: '#fff', borderRadius: 48, border: '1px solid #E5E7EB', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 3rem' }}>
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #F3F4F6', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #FFC900', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={50} color="#000" />
          </div>
        </div>
        <h3 style={{ fontSize: '2rem', fontWeight: 950, color: '#000', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Propelling Forward...</h3>
        <p style={{ color: '#6B7280', fontWeight: 800, fontSize: '1.1rem' }}>{analyzingText}</p>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '10rem' }}>
        
        {/* Banner */}
        <div style={{ position: 'relative', width: '100%', height: 320, overflow: 'hidden', marginBottom: '6rem' }}>
           <Image src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&h=600&fit=crop" alt="Banner" width={1600} height={600} style={{ objectFit: 'cover', width: '100%', filter: 'brightness(0.4)' }} />
           <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 6rem' }}>
              <div style={{ color: '#fff' }}>
                 <p style={{ fontSize: '0.9rem', fontWeight: 950, color: '#FFC900', letterSpacing: '0.3em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>Hertz Enterprise Propulsion</p>
                 <h2 style={{ fontSize: '4rem', fontWeight: 950, letterSpacing: '-0.02em', color: '#fff', margin: 0, lineHeight: 1 }}>CHART YOUR<br/>TRAJECTORY, JOHN.</h2>
              </div>
           </div>
           
           <div style={{ position: 'absolute', right: '6rem', top: '50%', transform: 'translateY(-50%)', background: '#fff', padding: '2rem 3.5rem', borderRadius: 32, display: 'flex', alignItems: 'center', gap: '2rem', boxShadow: '0 25px 80px rgba(0,0,0,0.2)' }}>
              <div style={{ textAlign: 'right' }}>
                 <p style={{ fontSize: '1.5rem', fontWeight: 950, color: '#000', margin: 0 }}>John</p>
                 <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: '0.3rem 0', fontWeight: 700 }}>Management Trainee @ Hertz</p>
              </div>
              <div style={{ width: 80, height: 80, borderRadius: '50%', border: '5px solid #FFC900', overflow: 'hidden' }}>
                 <Image src="/ram_profile.png" alt="John" width={80} height={80} style={{ objectFit: 'cover' }} />
              </div>
           </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: 1400, margin: '0 auto', padding: '0 2rem' }}>
           
           {/* Tree Root Section */}
           <div style={{ position: 'relative', marginBottom: '12rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem' }}>
                 
                 {/* Left Node */}
                 <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '5px solid #82C91E', background: '#fff', boxShadow: '0 10px 30px rgba(130,201,30,0.2)' }}>
                       <Image src="https://images.unsplash.com/photo-1544717297-fa15739a5447?w=150&h=150&fit=crop" alt="Suggest" width={100} height={100} style={{ objectFit: 'cover' }} />
                    </div>
                    <span style={{ display: 'inline-block', background: '#82C91E', color: '#fff', fontSize: '0.75rem', fontWeight: 950, padding: '0.4rem 1rem', borderRadius: 8, position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)' }}>NEXT STEP</span>
                    <p style={{ fontSize: '1rem', fontWeight: 900, color: '#111827', marginTop: '2rem' }}>Entry-Level<br/>Vertical Alignment</p>
                 </div>

                 {/* Center Root: John Today */}
                 <div style={{ textAlign: 'center', position: 'relative', zIndex: 20 }}>
                    <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '6px solid #fff', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
                       <Image src="/ram_profile.png" alt="John" width={140} height={140} style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 950, color: '#9CA3AF', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.25em' }}>JOHN TODAY</p>
                    <p style={{ fontSize: '1.4rem', fontWeight: 950, color: '#111827' }}>Management Trainee</p>
                 </div>

                 {/* Right Node */}
                 <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '5px solid #F59E0B', background: '#fff', boxShadow: '0 10px 30px rgba(245,158,11,0.2)' }}>
                       <Image src="https://images.unsplash.com/photo-1454165833767-027508496739?w=150&h=150&fit=crop" alt="Journey" width={100} height={100} style={{ objectFit: 'cover' }} />
                    </div>
                    <span style={{ display: 'inline-block', background: '#F59E0B', color: '#fff', fontSize: '0.75rem', fontWeight: 950, padding: '0.4rem 1rem', borderRadius: 8, position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)' }}>FUTURE MOVE</span>
                    <p style={{ fontSize: '1rem', fontWeight: 900, color: '#111827', marginTop: '2rem' }}>Strategic Long-Term<br/>Executive Paths</p>
                 </div>

              </div>

              {/* REAL BRANCHING TREE SVG */}
              <div style={{ position: 'absolute', left: 0, top: 40, width: '100%', height: 400, zIndex: 1, pointerEvents: 'none' }}>
                 <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
                    {/* Upper horizontal connections */}
                    <path d="M600 70 L400 70" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="10 10" />
                    <path d="M600 70 L800 70" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="10 10" />
                    
                    {/* Main branching logic to the 6 verticals */}
                    <path d="M600 130 C600 250, 150 250, 150 400" stroke="#F1F5F9" strokeWidth="4" />
                    <path d="M600 130 C600 250, 350 250, 350 400" stroke="#F1F5F9" strokeWidth="4" />
                    <path d="M600 130 C600 250, 520 250, 520 400" stroke="#F1F5F9" strokeWidth="4" />
                    <path d="M600 130 C600 250, 680 250, 680 400" stroke="#F1F5F9" strokeWidth="4" />
                    <path d="M600 130 C600 250, 850 250, 850 400" stroke="#F1F5F9" strokeWidth="4" />
                    <path d="M600 130 C600 250, 1050 250, 1050 400" stroke="#F1F5F9" strokeWidth="4" />
                    
                    {/* Highlight roots for John */}
                    <path d="M600 130 C600 250, 150 250, 150 400" stroke="#82C91E" strokeWidth="4" strokeOpacity="0.3" strokeDasharray="8 8" />
                    <path d="M600 130 C600 250, 1050 250, 1050 400" stroke="#10B981" strokeWidth="4" strokeOpacity="0.3" strokeDasharray="8 8" />
                 </svg>
              </div>
           </div>

           {/* Results Grid - Anchored to the tree branches */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', position: 'relative', zIndex: 10 }}>
              {HERTZ_VERTICALS.map((rec) => (
                <div key={rec.id} onClick={() => setSelectedRole(rec)} style={{ position: 'relative', textAlign: 'center', cursor: 'pointer' }}>
                   
                   <div style={{ background: '#fff', border: '1px solid #F1F5F9', borderRadius: 40, padding: '4rem 2.5rem 3.5rem', boxShadow: '0 20px 70px rgba(0,0,0,0.04)', position: 'relative', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} className="vertical-card">
                      
                      <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', background: rec.color, color: '#fff', fontSize: '0.8rem', fontWeight: 950, padding: '0.6rem 1.75rem', borderRadius: 99, boxShadow: `0 10px 30px ${rec.color}55`, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <Star size={14} fill="#fff" /> {rec.matchLevel}
                      </div>

                      <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 3rem', border: '8px solid #F8FAFC', background: '#F8FAFC', boxShadow: '0 15px 40px rgba(0,0,0,0.05)' }}>
                         <Image src={rec.img} alt={rec.title} width={140} height={140} style={{ objectFit: 'cover' }} />
                      </div>
                      
                      <p style={{ fontSize: '0.8rem', fontWeight: 950, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '0.75rem' }}>HERTZ VERTICAL</p>
                      <h4 style={{ fontSize: '1.75rem', fontWeight: 950, color: '#111827', margin: '0 0 1.25rem 0', letterSpacing: '-0.02em' }}>{rec.title}</h4>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem', background: '#F8FAFC', padding: '0.75rem 1.5rem', borderRadius: 16 }}>
                         <User size={16} color={rec.color} />
                         <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111827' }}>{rec.executive.split(' — ')[0]}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', paddingTop: '2.5rem', borderTop: '2px solid #F8FAFC' }}>
                         <div style={{ width: 40, height: 40, borderRadius: 14, background: rec.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={20} color={rec.color} /></div>
                         <span style={{ fontSize: '0.85rem', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#111827' }}>Explore Trajectory</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Intelligence Detail Modal */}
        {selectedRole && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', animation: 'fadeIn 0.2s ease-out' }}>
             <div style={{ background: '#fff', width: '100%', maxWidth: 1200, maxHeight: '94vh', borderRadius: 56, overflowY: 'auto', boxShadow: '0 60px 180px rgba(0,0,0,0.5)', position: 'relative', animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                
                <div style={{ background: '#000', padding: '6rem 5rem', position: 'relative', display: 'flex', alignItems: 'center', gap: '5rem', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', right: -50, top: -50, width: 300, height: 300, background: selectedRole.color, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.3 }} />
                   
                   <button onClick={() => setSelectedRole(null)} style={{ position: 'absolute', top: '3rem', right: '3rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 64, height: 64, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                      <X size={36} />
                   </button>

                   <div style={{ width: 180, height: 180, borderRadius: 48, overflow: 'hidden', border: `5px solid ${selectedRole.color}`, boxShadow: '0 30px 80px rgba(0,0,0,0.4)', flexShrink: 0, position: 'relative' }}>
                      <Image src={selectedRole.img} alt={selectedRole.title} width={180} height={180} style={{ objectFit: 'cover' }} />
                   </div>
                   <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                         <div style={{ padding: '0.5rem 1.5rem', background: selectedRole.color, borderRadius: 10, fontSize: '0.8rem', fontWeight: 950, color: '#fff', boxShadow: `0 10px 25px ${selectedRole.color}44` }}>Enterprise Sync Active</div>
                         <div style={{ fontSize: '1.5rem', fontWeight: 950, color: '#FFC900' }}>{selectedRole.match}% Propulsion Alignment</div>
                      </div>
                      <h2 style={{ color: '#fff', fontSize: '4.5rem', fontWeight: 950, margin: 0, letterSpacing: '-0.05em', lineHeight: 1 }}>{selectedRole.title}</h2>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.4rem', fontWeight: 600, marginTop: '1rem' }}>EVP Sponsor: {selectedRole.executive}</p>
                   </div>
                </div>

                <div style={{ padding: '5rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '6rem' }}>
                      
                      {/* Left: Progression Tree */}
                      <div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '5rem' }}>
                            <div style={{ width: 56, height: 56, background: '#F8FAFC', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}><TrendingUp size={28} color="#000" /></div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.02em' }}>Your Potential Propulsion Tree</h3>
                         </div>

                         <div style={{ position: 'relative', paddingLeft: '6rem' }}>
                            <div style={{ position: 'absolute', left: 28, top: 50, bottom: 50, width: 5, background: 'repeating-linear-gradient(to bottom, #F1F5F9 0px, #F1F5F9 25px, transparent 25px, transparent 50px)' }} />
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '7rem' }}>
                               {selectedRole.journey.map((step, idx) => (
                                  <div key={idx} style={{ position: 'relative' }}>
                                     <div style={{ position: 'absolute', left: -66, top: 0, width: 76, height: 76, borderRadius: '50%', background: step.status === 'current' ? '#000' : '#fff', border: `5px solid ${step.status === 'current' ? '#FFC900' : '#F1F5F9'}`, boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
                                        {step.status === 'current' ? <Award size={34} color="#FFC900" /> : <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#CBD5E1' }} />}
                                     </div>
                                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                           <h4 style={{ fontSize: '1.6rem', fontWeight: 950, color: '#111827', margin: '0 0 0.75rem 0' }}>{step.title}</h4>
                                           <p style={{ fontSize: '1.15rem', color: '#64748B', fontWeight: 600, maxWidth: 500, lineHeight: 1.6 }}>{step.description}</p>
                                           {step.skillsGained && (
                                              <div style={{ marginTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                                 {step.skillsGained.map(sk => <span key={sk} style={{ fontSize: '0.8rem', fontWeight: 900, color: selectedRole.color, textTransform: 'uppercase', letterSpacing: '0.08em', background: selectedRole.color + '15', padding: '0.45rem 1rem', borderRadius: 10, border: `1px solid ${selectedRole.color}33` }}>+ {sk}</span>)}
                                              </div>
                                           )}
                                        </div>
                                        <div style={{ textAlign: 'right', background: '#F8FAFC', padding: '0.6rem 1.25rem', borderRadius: 12 }}>
                                           <span style={{ fontSize: '0.9rem', fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{step.duration}</span>
                                        </div>
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>

                      {/* Right: Intelligence Panel */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                         
                         <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: 40, border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                               <Target size={28} color={selectedRole.color} />
                               <h4 style={{ fontSize: '1.25rem', fontWeight: 950, color: '#000', margin: 0 }}>Hertz Sync Rationale</h4>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: '#64748B', fontWeight: 600, lineHeight: 1.8, margin: 0 }}>{selectedRole.whyFit}</p>
                         </div>

                         <div style={{ background: '#fff', padding: '3.5rem', borderRadius: 40, border: '1px solid #F1F5F9', boxShadow: '0 25px 80px rgba(0,0,0,0.03)' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 950, color: '#000', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                               <BookOpen size={24} color="#000" /> Vertical DNA
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                               {selectedRole.skills.map(skill => (
                                  <span key={skill} style={{ padding: '0.85rem 1.75rem', background: '#F8FAFC', color: '#111827', borderRadius: 16, fontSize: '0.9rem', fontWeight: 800, border: '1px solid #E2E8F0', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>{skill}</span>
                               ))}
                            </div>
                         </div>

                         <div style={{ background: '#000', padding: '4rem', borderRadius: 40, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 90px rgba(0,0,0,0.3)' }}>
                            <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, background: selectedRole.color, borderRadius: '50%', filter: 'blur(70px)', opacity: 0.5 }} />
                            <h4 style={{ fontSize: '1rem', fontWeight: 950, color: '#FFC900', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '2.5rem' }}>Near-Term Mobility Goals</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                               {selectedRole.development.map((dev, i) => (
                                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                                     <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFC900', marginTop: '0.45rem', flexShrink: 0, boxShadow: '0 0 15px #FFC90033' }} />
                                     <span style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.5 }}>{dev}</span>
                                  </div>
                               ))}
                            </div>
                            <button style={{ width: '100%', marginTop: '4rem', background: '#FFC900', color: '#000', border: 'none', padding: '1.5rem', borderRadius: 20, fontWeight: 950, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', transition: 'all 0.2s' }}>Initiate Propulsion</button>
                         </div>

                      </div>
                   </div>
                </div>

             </div>
          </div>
        )}

        <style jsx>{`
          .vertical-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 50px 110px rgba(0,0,0,0.1);
            border-color: #CBD5E1;
            background: #fff !important;
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    );
  }

  return null;
}
