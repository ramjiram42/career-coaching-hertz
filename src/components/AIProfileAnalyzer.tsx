'use client';

import { UploadCloud, Loader2, CheckCircle, ArrowLeft, Target, Cpu, RefreshCw, Zap, TrendingUp, Briefcase } from "lucide-react"
import { useState } from 'react'

type Step = 'upload' | 'analyzing' | 'results' | 'journey';

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Parsing technical stack...');
  const [selectedRole, setSelectedRole] = useState<any>(null);

  // Example Current Role: RPA Solution Architect
  const currentRole = "RPA Solution Architect";
  
  const inDomainRoles = [
    { title: 'Enterprise Architect', category: 'Technology', match: 96, time: '2-3 Years', theme: '#3B82F6', journey: [
        { name: 'Senior Solutions Architect', desc: 'Focus on cloud-native patterns', status: 'Next Step' },
        { name: 'Lead Enterprise Architect', desc: 'Cross-functional strategy', status: 'Goal' }
    ]},
    { title: 'Digital Transformation Director', category: 'Technology', match: 91, time: '3-4 Years', theme: '#8B5CF6', journey: [
        { name: 'Automation Program Manager', desc: 'Managing global Hertz fleets', status: 'Next Step' },
        { name: 'VP Digital Innovation', desc: 'Executive leadership', status: 'Goal' }
    ]}
  ];

  const crossDomainRoles = [
    { title: 'Operations Director', category: 'Operations', match: 84, time: '3-5 Years', theme: '#14B8A6', journey: [
        { name: 'Branch Operations Lead', desc: 'P&L and team management', status: 'Pivot' },
        { name: 'Regional Operations Director', desc: 'Scaling operational efficiency', status: 'Goal' }
    ]},
    { title: 'Product Manager', category: 'Customer Experience', match: 78, time: '1-2 Years', theme: '#EC4899', journey: [
        { name: 'Technical Product Manager', desc: 'Bridging tech and business', status: 'Next Step' },
        { name: 'Senior Product Lead', desc: 'Platform ownership', status: 'Goal' }
    ]}
  ];

  const handleUpload = () => {
    setStep('analyzing');
    setTimeout(() => setAnalyzingText('Extracting automation patterns...'), 1000);
    setTimeout(() => setAnalyzingText('Mapping skills to Hertz matrix...'), 2000);
    setTimeout(() => setAnalyzingText('Identifying high-fit benchmarks...'), 3000);
    setTimeout(() => setStep('results'), 4500);
  };

  const openJourney = (role: any) => {
    setSelectedRole(role);
    setStep('journey');
  };

  /* ── 1. UPLOAD VIEW ──────────────────────────── */
  if (step === 'upload') {
    return (
      <div 
        onClick={handleUpload}
        style={{ padding: '5rem 3rem', background: '#fff', border: '2px dashed #E5E7EB', borderRadius: 32, textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#FFD100'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
      >
        <div style={{ width: 80, height: 80, background: '#FFD100', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 8px 30px rgba(255,209,0,0.3)' }}>
          <UploadCloud size={36} color="#000" />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>AI CAREER MAPPER</h2>
        <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: 450, margin: '0 auto 2rem' }}>Upload your current resume and our AI will architect your career path inside Hertz — spanning your domain and beyond.</p>
        <span style={{ background: '#F9FAFB', color: '#9CA3AF', padding: '0.5rem 1.25rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>PDF, DOCX supported</span>
      </div>
    );
  }

  /* ── 2. ANALYZING VIEW ────────────────────────── */
  if (step === 'analyzing') {
    return (
      <div style={{ padding: '6rem 3rem', background: '#fff', borderRadius: 32, border: '1px solid #E5E7EB', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 2.5rem' }}>
          <div style={{ position: 'absolute', inset: 0, border: '4px solid #F3F4F6', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '4px solid #FFD100', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1.2s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={36} color="#FFD100" />
          </div>
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000', marginBottom: '0.5rem' }}>AI ANALYSIS IN PROGRESS</h3>
        <p style={{ color: '#F59E0B', fontWeight: 800, fontSize: '1rem' }}>{analyzingText}</p>
      </div>
    );
  }

  /* ── 3. RESULTS VIEW ──────────────────────────── */
  if (step === 'results') {
    return (
      <div style={{ background: '#fff', borderRadius: 32, border: '1px solid #E5E7EB', padding: '2.5rem', animation: 'fadeIn 0.5s ease-out' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#F0FDFA', padding: '0.75rem', borderRadius: 16 }}><CheckCircle size={28} color="#0D9488" /></div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', margin: 0 }}>Career Matrix Generated</h2>
              <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: '0.2rem 0 0' }}>Current Profile: <strong>{currentRole}</strong></p>
            </div>
          </div>
          <button onClick={() => setStep('upload')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '0.6rem 1rem', borderRadius: 10, fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', cursor: 'pointer' }}>
             <RefreshCw size={14} /> Re-scan
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
          {/* Column 1: In Domain */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 36, height: 36, background: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={18} color="#3B82F6" /></div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', color: '#111827', letterSpacing: '0.05em' }}>My Domain: Tech & Automation</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {inDomainRoles.map((role, idx) => (
                <ResultCard key={idx} role={role} onClick={() => openJourney(role)} />
              ))}
            </div>
          </div>

          {/* Column 2: Cross Domain */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 36, height: 36, background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={18} color="#16A34A" /></div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', color: '#111827', letterSpacing: '0.05em' }}>New Horizons: Cross-Domain</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {crossDomainRoles.map((role, idx) => (
                <ResultCard key={idx} role={role} onClick={() => openJourney(role)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── 4. JOURNEY VIEW ──────────────────────────── */
  if (step === 'journey') {
    return (
      <div style={{ background: '#fff', borderRadius: 32, border: '1px solid #E5E7EB', padding: '2.5rem', animation: 'scaleIn 0.4s ease-out' }}>
        <button onClick={() => setStep('results')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2rem', padding: 0 }}>
          <ArrowLeft size={18} /> Back to Analysis
        </button>

        <div style={{ background: selectedRole.theme + '10', border: `1px solid ${selectedRole.theme}33`, borderRadius: 24, padding: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ background: selectedRole.theme, color: '#fff', padding: '0.3rem 0.8rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.75rem', display: 'inline-block' }}>{selectedRole.category}</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', margin: 0, letterSpacing: '-0.02em' }}>{selectedRole.title}</h2>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>Role Match:</span>
                  <span style={{ fontSize: '0.85rem', color: '#111827', fontWeight: 900 }}>{selectedRole.match}%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>Estimated Path:</span>
                   <span style={{ fontSize: '0.85rem', color: '#111827', fontWeight: 900 }}>{selectedRole.time}</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ width: 64, height: 64, background: '#fff', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', border: `1px solid ${selectedRole.theme}20`, margin: '0 0 0 auto' }}>
                <Target size={32} color={selectedRole.theme} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.15em', marginBottom: '2rem' }}>Learning & Growth Journey</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
             {/* Current */}
             <div style={{ flexShrink: 0, textAlign: 'center', width: 140 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#F1F5F9', border: '2px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}><Briefcase size={20} color="#6B7280" /></div>
                <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#111827', margin: 0 }}>{currentRole}</p>
                <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 800 }}>Start Point</p>
             </div>

             {selectedRole.journey.map((step: any, idx: number) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                   <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg, #E5E7EB, #F1F5F9)' }} />
                   <div style={{ width: 12, height: 12, borderRadius: '50%', background: idx === selectedRole.journey.length - 1 ? selectedRole.theme : '#D1D5DB', flexShrink: 0 }} />
                   <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg, #F1F5F9, #E5E7EB)' }} />
                   
                   <div style={{ flexShrink: 0, width: 180, padding: '1rem', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, textAlign: 'center', margin: '0 1rem' }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#111827', margin: '0 0 0.2rem 0' }}>{step.name}</p>
                      <p style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 500, margin: '0 0 0.5rem 0', lineHeight: 1.2 }}>{step.desc}</p>
                      <span style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', color: selectedRole.theme }}>{step.status}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: '#F8FAFC', borderRadius: 20, textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: '0 0 1.25rem 0' }}>Ready to architect this transition? Our advisors can jump in anytime.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button style={{ background: '#000', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: 12, fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', cursor: 'pointer' }}>Unlock Skill Plan</button>
            <button style={{ background: '#fff', color: '#000', border: '1px solid #E5E7EB', padding: '0.8rem 1.5rem', borderRadius: 12, fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', cursor: 'pointer' }}>Talk to Advisor</button>
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
