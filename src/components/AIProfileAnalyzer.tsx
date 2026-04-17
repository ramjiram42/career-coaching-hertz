'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Sparkles, User, HelpCircle, Compass, Heart, Share2, ChevronRight, BarChart3, ChevronDown, UserCheck, Briefcase } from "lucide-react"
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

type Step = 'upload' | 'analyzing' | 'results';

interface NodeData {
  role: string;
  skills: string; // e.g. "12/15"
  tag?: string;
  isTarget?: boolean;
}

interface Branch {
  id: string;
  nodes: NodeData[];
}

interface Section {
  title: string;
  tag: string;
  tagColor: string;
  branches: Branch[];
}

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [analyzingText, setAnalyzingText] = useState('Initializing Neural Engine...');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const sections: Section[] = [
    {
      title: 'Same Domain Growth',
      tag: 'HIGH MATCH',
      tagColor: '#10B981',
      branches: [
        {
          id: 's1-b1',
          nodes: [
            { role: 'Intelligent Automation Architect', skills: '14/15', tag: 'High Match' },
            { role: 'AI Automation Lead', skills: '12/15' },
            { role: 'Head of Intelligent Automation', skills: '9/15' },
            { role: 'CTO', skills: '6/15', isTarget: true }
          ]
        },
        {
          id: 's1-b2',
          nodes: [
            { role: 'Enterprise Automation Architect', skills: '13/15', tag: 'High Match' },
            { role: 'Automation Practice Head', skills: '10/15' },
            { role: 'Director of Automation', skills: '8/15' },
            { role: 'CTO', skills: '6/15', isTarget: true }
          ]
        },
        {
          id: 's1-b3',
          nodes: [
            { role: 'Engineering Manager (Automation)', skills: '12/15', tag: 'High Match' },
            { role: 'Sr. Engineering Manager', skills: '9/15' },
            { role: 'VP Engineering', skills: '7/15' },
            { role: 'CTO', skills: '6/15', isTarget: true }
          ]
        }
      ]
    },
    {
      title: 'Adjacent Domain Paths',
      tag: 'MEDIUM MATCH',
      tagColor: '#F59E0B',
      branches: [
        {
          id: 's2-b1',
          nodes: [
            { role: 'Technical Program Manager', skills: '11/15', tag: 'Medium Match' },
            { role: 'Program Director', skills: '8/15' },
            { role: 'VP Delivery', skills: '6/15' },
            { role: 'COO / CTO', skills: '5/15', isTarget: true }
          ]
        },
        {
          id: 's2-b2',
          nodes: [
            { role: 'Product Manager (AI)', skills: '9/15', tag: 'Medium Match' },
            { role: 'Senior Product Manager', skills: '7/15' },
            { role: 'Head of Product', skills: '5/15' },
            { role: 'Chief Product Officer', skills: '4/15', isTarget: true }
          ]
        },
        {
          id: 's2-b3',
          nodes: [
            { role: 'Cloud & Solution Architect', skills: '10/15', tag: 'Medium Match' },
            { role: 'Enterprise Architect', skills: '8/15' },
            { role: 'Chief Architect', skills: '6/15' },
            { role: 'CTO', skills: '5/15', isTarget: true }
          ]
        }
      ]
    },
    {
      title: 'Cross Domain Opportunities',
      tag: 'WILD CARD',
      tagColor: '#8B5CF6',
      branches: [
        {
          id: 's3-b1',
          nodes: [
            { role: 'Data Analyst', skills: '8/15', tag: 'Wild Card' },
            { role: 'Data Engineer', skills: '6/15' },
            { role: 'AI Engineer', skills: '5/15' },
            { role: 'AI Architect', skills: '4/15' },
            { role: 'CTO', skills: '3/15', isTarget: true }
          ]
        },
        {
          id: 's3-b2',
          nodes: [
            { role: 'Full Stack Developer', skills: '7/15', tag: 'Wild Card' },
            { role: 'Tech Lead', skills: '5/15' },
            { role: 'Engineering Head', skills: '4/15' }
          ]
        },
        {
          id: 's3-b3',
          nodes: [
            { role: 'Management Consulting', skills: '6/15', tag: 'Wild Card' },
            { role: 'Consultant', skills: '4/15' },
            { role: 'Partner', skills: '3/15' },
            { role: 'Strategy / CTO roles', skills: '3/15', isTarget: true }
          ]
        }
      ]
    }
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      setTimeout(() => setAnalyzingText('Analyzing 10+ years experience...'), 800);
      setTimeout(() => setAnalyzingText('Extracting RPA & Architecture strengths...'), 1600);
      setTimeout(() => setAnalyzingText('Calculating Executive Trajectory...'), 2400);
      setTimeout(() => setStep('results'), 3500);
    }
  };

  const Node = ({ data, color }: { data: NodeData, color: string }) => {
    const [matchNum, matchTotal] = data.skills.split('/').map(Number);
    const progress = (matchNum / matchTotal) * 100;

    return (
      <div 
        onClick={() => setSelectedNode(data)}
        style={{
          background: '#fff',
          borderRadius: 24,
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid #F1F5F9',
          minWidth: 220,
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.2s',
        }}
        className="group"
      >
        {data.tag && (
          <span style={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 12px',
            borderRadius: 999,
            fontSize: 9,
            fontWeight: 900,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: color
          }}>
            {data.tag}
          </span>
        )}
        <h5 style={{ fontSize: 13, fontWeight: 800, color: '#111827', marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {data.role}
          {data.isTarget && <Target size={14} color="#FF5A3C" />}
        </h5>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 800, color: '#94A3B8' }}>
            <span>Skill Match</span>
            <span style={{ color }}>{data.skills}</span>
          </div>
          <div style={{ height: 4, background: '#F8FAFC', borderRadius: 999, overflow: 'hidden' }}>
             <div style={{ height: '100%', width: `${progress}%`, background: color, transition: 'width 1s' }}></div>
          </div>
        </div>

        {/* Tooltip */}
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: 12,
          width: 200,
          background: '#1A1D23',
          color: '#fff',
          padding: '12px',
          borderRadius: 16,
          fontSize: 10,
          zIndex: 50,
          pointerEvents: 'none',
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
          opacity: 0,
          transition: 'opacity 0.2s'
        }} className="group-hover:opacity-100">
           <p style={{ fontWeight: 800, marginBottom: 4 }}>Skill Gap Analysis</p>
           <p style={{ opacity: 0.6, marginBottom: 8 }}>Missing: AI/ML Strategy, Cloud Arch</p>
           <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#FFD100', fontWeight: 900 }}>
              <Zap size={10} /> Next Steps: Python for AI
           </div>
        </div>
      </div>
    );
  };

  if (step === 'upload') {
    return (
      <div style={{ maxWidth: 800, margin: '80px auto', padding: '0 24px' }}>
        <div 
          onClick={(e) => {
            if (e.target instanceof HTMLInputElement) return;
            document.getElementById('resume-upload')?.click();
          }}
          style={{
            background: '#fff',
            border: '2px dashed #E2E8F0',
            borderRadius: 48,
            padding: '80px 40px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05)',
            transition: 'all 0.2s'
          }}
          className="hover:border-[#FF5A3C] group"
        >
          <input type="file" id="resume-upload" hidden onChange={handleFileSelect} onClick={(e) => e.stopPropagation()} accept=".pdf,.doc,.docx" />
          <div style={{
            width: 80,
            height: 80,
            background: '#FF5A3C',
            borderRadius: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 40px',
            boxShadow: '0 10px 15px -3px rgba(255, 90, 60, 0.4)'
          }}>
            <UploadCloud size={32} color="white" />
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: '#111827', marginBottom: 16 }}>Generate Future Moves</h2>
          <p style={{ fontSize: 18, color: '#64748B', fontWeight: 600, marginBottom: 48, maxWidth: 500, margin: '0 auto 48px' }}>
            Upload your resume to reveal your holistic RPA-to-CTO career tree.
          </p>
          <button style={{
            background: '#FF5A3C',
            color: '#white',
            border: 'none',
            padding: '16px 40px',
            borderRadius: 16,
            fontWeight: 800,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(255, 90, 60, 0.2)',
            transition: 'all 0.2s'
          }} className="hover:scale-105">
            Analyze My Trajectory
          </button>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div style={{ maxWidth: 600, margin: '160px auto', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 100, height: 100, margin: '0 auto 40px' }}>
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #F1F5F9', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '6px solid #FF5A3C', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1.2s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={40} color="#111827" />
          </div>
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 900, color: '#111827', marginBottom: 16 }}>Neural Strategy Mapping...</h3>
        <p style={{ fontSize: 18, color: '#64748B', fontWeight: 800 }}>{analyzingText}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 160 }}>
      
      {/* Header */}
      <div style={{ maxWidth: 1400, margin: '0 auto', paddingTop: 80, paddingLeft: 40, paddingRight: 40, textAlign: 'center', marginBottom: 100 }}>
         <h1 style={{ fontSize: 48, fontWeight: 900, color: '#111827', marginBottom: 12, letterSpacing: '-0.02em' }}>Explore Future Moves</h1>
         <p style={{ fontSize: 20, color: '#64748B', fontWeight: 700 }}>Personalized career paths based on your RPA Solution Architect profile</p>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Root Node */}
            <div style={{ marginBottom: 100, position: 'relative', zIndex: 10 }}>
               <div style={{
                  background: '#fff',
                  borderRadius: 40,
                  padding: '32px',
                  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)',
                  border: '4px solid #FF5A3C',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  minWidth: 380
               }}>
                  <div style={{ width: 80, height: 80, borderRadius: 24, background: '#F1F5F9', overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                     <Image src="/ram_profile.png" width={80} height={80} alt="Ram" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                     <span style={{ background: '#FF5A3C', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 8, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, display: 'inline-block' }}>YOU TODAY</span>
                     <h4 style={{ fontSize: 24, fontWeight: 900, color: '#111827', margin: 0, lineHeight: 1.1 }}>RPA Solution Architect</h4>
                     <p style={{ fontSize: 14, fontWeight: 700, color: '#94A3B8', marginTop: 4 }}>10+ Years Experience</p>
                  </div>
               </div>
            </div>

            {/* SVG Background Connections (Simplified for reliability) */}
            <div style={{ position: 'absolute', top: 500, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 1200, height: 1000, pointerEvents: 'none', opacity: 0.1 }}>
                <svg width="100%" height="100%" viewBox="0 0 1200 1000">
                   <path d="M600 0 Q600 200, 300 400" stroke="#FF5A3C" strokeWidth="4" strokeDasharray="10 10" fill="none" />
                   <path d="M600 0 Q600 200, 900 400" stroke="#FF5A3C" strokeWidth="4" strokeDasharray="10 10" fill="none" />
                </svg>
            </div>

            {/* Tree Sections */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 120, position: 'relative', zIndex: 10 }}>
               {sections.map((section) => (
                 <div key={section.title}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
                       <span style={{ background: section.tagColor, color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 16px', borderRadius: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{section.tag}</span>
                       <h3 style={{ fontSize: 24, fontWeight: 900, color: '#111827' }}>{section.title}</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                       {section.branches.map((branch) => (
                         <div key={branch.id} style={{ display: 'flex', alignItems: 'center', gap: 32, overflowX: 'auto', padding: '16px 0' }} className="no-scrollbar">
                            {branch.nodes.map((node, nIdx) => (
                              <div key={nIdx} style={{ display: 'flex', alignItems: 'center', gap: 32, flexShrink: 0 }}>
                                 <Node data={node} color={section.tagColor} />
                                 {nIdx < branch.nodes.length - 1 && (
                                   <ArrowRight size={20} color="#CBD5E1" strokeWidth={3} />
                                 )}
                              </div>
                            ))}
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>

         </div>
      </div>

      {/* Modal */}
      {selectedNode && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
           <div style={{ background: '#fff', width: '100%', maxWidth: 900, borderRadius: 48, overflow: 'hidden', position: 'relative' }}>
              <button 
                onClick={() => setSelectedNode(null)}
                style={{ position: 'absolute', top: 32, right: 32, width: 48, height: 48, borderRadius: '50%', background: '#F8FAFC', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}
              >
                <X size={20} color="#111827" />
              </button>

              <div style={{ padding: 64 }}>
                 <div style={{ display: 'flex', gap: 40, marginBottom: 48 }}>
                    <div style={{ width: 120, height: 120, background: '#F1F5F9', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <Briefcase size={64} color="#94A3B8" />
                    </div>
                    <div>
                       <p style={{ fontSize: 12, fontWeight: 900, color: '#FF5A3C', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>AI Career Architecture</p>
                       <h2 style={{ fontSize: 40, fontWeight: 900, color: '#111827', margin: 0 }}>{selectedNode.role}</h2>
                       <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#64748B' }}>Match: {selectedNode.skills}</span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#64748B' }}>Growth Potential: 95%</span>
                       </div>
                    </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                    <div style={{ background: '#F8FAFC', padding: 40, borderRadius: 32 }}>
                       <h4 style={{ fontSize: 18, fontWeight: 900, color: '#111827', marginBottom: 24 }}>Skill Comparison</h4>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          {['System Design', 'Cloud Architecture', 'RPA Logic', 'Stakeholder Mgt'].map((s, i) => (
                             <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#fff', borderRadius: 12, border: '1px solid #E2E8F0' }}>
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#334155' }}>{s}</span>
                                {i > 1 ? <CheckCircle2 size={18} color="#10B981" /> : <div style={{ width: 16, height: 16, border: '2px solid #E2E8F0', borderRadius: '50%' }} />}
                             </div>
                          ))}
                       </div>
                    </div>
                    <div style={{ background: '#111827', padding: 40, borderRadius: 32, color: '#fff' }}>
                       <h4 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>AI Strategic Insight</h4>
                       <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24 }}>
                          You have 10+ years of logic mastery. By adding AWS/Azure certification, you can achieve the CTO role within 36 months via this journey.
                       </p>
                       <button style={{ background: '#FF5A3C', width: '100%', color: '#fff', border: 'none', padding: 16, borderRadius: 16, fontWeight: 900, fontSize: 14, textTransform: 'uppercase', cursor: 'pointer' }}>
                          Start Roadmap
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
