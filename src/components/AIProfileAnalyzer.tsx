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
      tagColor: '#000000',
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
      tagColor: '#6B7280',
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
      tagColor: '#9CA3AF',
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
          borderRadius: 16,
          padding: '1.25rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
          border: '2px solid #F1F5F9',
          minWidth: 240,
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.2s',
        }}
        className="group hover:border-[#FFD100] hover:shadow-lg"
      >
        {data.tag && (
          <span style={{
            position: 'absolute',
            top: -10,
            left: 16,
            padding: '2px 10px',
            borderRadius: 4,
            fontSize: 8,
            fontWeight: 900,
            color: color === '#000000' ? '#FFD100' : '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: color
          }}>
            {data.tag}
          </span>
        )}
        <h5 style={{ fontSize: 13, fontWeight: 900, color: '#000', marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
          {data.role}
          {data.isTarget && <Target size={14} color="#FFD100" fill="#000" />}
        </h5>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase' }}>
            <span>Profile Sync</span>
            <span style={{ color: '#000' }}>{data.skills}</span>
          </div>
          <div style={{ height: 6, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
             <div style={{ height: '100%', width: `${progress}%`, background: '#FFD100', transition: 'width 1s' }}></div>
          </div>
        </div>

        {/* Tooltip */}
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: 12,
          background: '#000',
          color: '#FFD100',
          padding: '12px',
          borderRadius: 12,
          fontSize: 10,
          zIndex: 50,
          pointerEvents: 'none',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
          opacity: 0,
          transition: 'opacity 0.2s',
          border: '1px solid #FFD100'
        }} className="group-hover:opacity-100">
           <p style={{ fontWeight: 900, marginBottom: 4, textTransform: 'uppercase' }}>Hertz Talent Insight</p>
           <p style={{ color: '#fff', opacity: 0.8, marginBottom: 8, fontWeight: 700 }}>Next Skill: Systems Arch V2</p>
           <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 900 }}>
              <Zap size={10} fill="#FFD100" /> Executive Match Found
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
            border: '4px solid #FFD100',
            borderRadius: 32,
            padding: '80px 40px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0 20px 40px -10px rgba(255, 209, 0, 0.15)',
            transition: 'all 0.2s'
          }}
          className="hover:scale-[1.01] group"
        >
          <input type="file" id="resume-upload" hidden onChange={handleFileSelect} onClick={(e) => e.stopPropagation()} accept=".pdf,.doc,.docx" />
          <div style={{
            width: 80,
            height: 80,
            background: '#000',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: '3px solid #FFD100'
          }}>
            <UploadCloud size={32} color="#FFD100" />
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#000', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Generate Future Moves</h2>
          <p style={{ fontSize: 18, color: '#4B5563', fontWeight: 600, marginBottom: 48, maxWidth: 500, margin: '0 auto 48px' }}>
            Map your RPA mastery to executive Hertz leadership paths.
          </p>
          <button style={{
            background: '#FFD100',
            color: '#000',
            border: '2px solid #000',
            padding: '18px 48px',
            borderRadius: 12,
            fontWeight: 900,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 6px 0 #000',
            transition: 'all 0.1s',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }} className="active:translate-y-1 active:shadow-none">
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
          <div style={{ position: 'absolute', inset: 0, border: '8px solid #F1F5F9', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: 0, border: '8px solid #FFD100', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={40} color="#000" />
          </div>
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 900, color: '#000', marginBottom: 16, textTransform: 'uppercase' }}>Hertz Intelligence...</h3>
        <p style={{ fontSize: 18, color: '#64748B', fontWeight: 800 }}>{analyzingText}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingBottom: 160 }}>
      
      {/* Header */}
      <div style={{ maxWidth: 1400, margin: '0 auto', paddingTop: 80, paddingLeft: 40, paddingRight: 40, textAlign: 'center', marginBottom: 100 }}>
         <h1 style={{ fontSize: 56, fontWeight: 950, color: '#000', marginBottom: 12, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>Explore Future Moves</h1>
         <div style={{ display: 'inline-block', background: '#FFD100', padding: '6px 20px', borderRadius: 8, marginBottom: 20 }}>
            <p style={{ fontSize: 16, color: '#000', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Strategic Growth Tree</p>
         </div>
         <p style={{ fontSize: 20, color: '#64748B', fontWeight: 700, maxWidth: 800, margin: '0 auto' }}>Personalized executive paths based on your RPA Solution Architect profile</p>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Root Node */}
            <div style={{ marginBottom: 120, position: 'relative', zIndex: 10 }}>
               <div style={{
                  background: '#000',
                  borderRadius: 32,
                  padding: '40px',
                  boxShadow: '0 30px 60px -12px rgba(0,0,0,0.3)',
                  border: '6px solid #FFD100',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 32,
                  minWidth: 420
               }}>
                  <div style={{ width: 100, height: 100, borderRadius: 20, background: '#FFD100', overflow: 'hidden', border: '3px solid #fff' }}>
                     <Image src="/ram_profile.png" width={100} height={100} alt="Ram" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                     <span style={{ background: '#FFD100', color: '#000', fontSize: 11, fontWeight: 950, padding: '4px 16px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12, display: 'inline-block' }}>YOU TODAY</span>
                     <h4 style={{ fontSize: 28, fontWeight: 950, color: '#fff', margin: 0, lineHeight: 1, letterSpacing: '-0.02em' }}>RPA Architect</h4>
                     <p style={{ fontSize: 15, fontWeight: 800, color: '#FFD100', marginTop: 6, opacity: 0.8 }}>10+ Years Experience</p>
                  </div>
               </div>
            </div>

            {/* Tree Sections */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 140, position: 'relative', zIndex: 10 }}>
               {sections.map((section) => (
                 <div key={section.title}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48, borderLeft: `8px solid ${section.tagColor === '#000000' ? '#FFD100' : section.tagColor}`, paddingLeft: 24 }}>
                       <div>
                          <span style={{ background: section.tagColor, color: section.tagColor === '#000000' ? '#FFD100' : '#fff', fontSize: 10, fontWeight: 900, padding: '4px 16px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{section.tag}</span>
                          <h3 style={{ fontSize: 28, fontWeight: 950, color: '#000', margin: '8px 0 0 0', textTransform: 'uppercase' }}>{section.title}</h3>
                       </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
                       {section.branches.map((branch) => (
                         <div key={branch.id} style={{ display: 'flex', alignItems: 'center', gap: 40, overflowX: 'auto', padding: '24px 0' }} className="no-scrollbar">
                            {branch.nodes.map((node, nIdx) => (
                              <div key={nIdx} style={{ display: 'flex', alignItems: 'center', gap: 40, flexShrink: 0 }}>
                                 <Node data={node} color={section.tagColor} />
                                 {nIdx < branch.nodes.length - 1 && (
                                   <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                      <div style={{ width: 40, height: 2, background: '#000', opacity: 0.1 }}></div>
                                      <ArrowRight size={24} color="#000" strokeWidth={3} />
                                      <div style={{ width: 40, height: 2, background: '#000', opacity: 0.1 }}></div>
                                   </div>
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
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(30px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
           <div style={{ background: '#fff', width: '100%', maxWidth: 1000, borderRadius: 32, overflow: 'hidden', position: 'relative', border: '8px solid #FFD100' }}>
              <button 
                onClick={() => setSelectedNode(null)}
                style={{ position: 'absolute', top: 32, right: 32, width: 56, height: 56, borderRadius: 16, background: '#000', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              >
                <X size={24} color="#FFD100" />
              </button>

              <div style={{ padding: 64 }}>
                 <div style={{ display: 'flex', gap: 48, marginBottom: 56 }}>
                    <div style={{ width: 140, height: 140, background: '#000', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #FFD100 shadow-2xl' }}>
                       <Briefcase size={72} color="#FFD100" />
                    </div>
                    <div>
                       <p style={{ fontSize: 13, fontWeight: 950, color: '#000', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: 12 }}>Executive Pathway</p>
                       <h2 style={{ fontSize: 48, fontWeight: 950, color: '#000', margin: 0, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>{selectedNode.role}</h2>
                       <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>
                          <span style={{ fontSize: 16, fontWeight: 800, color: '#4B5563', textTransform: 'uppercase' }}>Match Level: {selectedNode.skills}</span>
                          <span style={{ fontSize: 16, fontWeight: 800, color: '#16A34A', textTransform: 'uppercase' }}>Gold Tier Priority</span>
                       </div>
                    </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48 }}>
                    <div style={{ background: '#F8FAFC', padding: 48, borderRadius: 24, border: '2px solid #E2E8F0' }}>
                       <h4 style={{ fontSize: 20, fontWeight: 950, color: '#000', marginBottom: 32, textTransform: 'uppercase' }}>Profile Synchronization</h4>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                          {[
                            { name: 'Architecture V2', ok: false },
                            { name: 'Hertz Global Ops', ok: false },
                            { name: 'RPA Engineering', ok: true },
                            { name: 'Strategic Leadership', ok: true }
                          ].map((s) => (
                             <div key={s.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#fff', borderRadius: 12, border: '2px solid #F1F5F9' }}>
                                <span style={{ fontSize: 15, fontWeight: 800, color: '#000', textTransform: 'uppercase' }}>{s.name}</span>
                                {s.ok ? <div style={{ background: '#000', padding: 4, borderRadius: 999 }}><CheckCircle2 size={18} color="#FFD100" /></div> : <div style={{ width: 18, height: 18, border: '2px solid #CBD5E1', borderRadius: '50%' }} />}
                             </div>
                          ))}
                       </div>
                    </div>
                    <div style={{ background: '#000', padding: 48, borderRadius: 24, color: '#FFD100', border: '4px solid #FFD100' }}>
                       <h4 style={{ fontSize: 20, fontWeight: 950, marginBottom: 20, textTransform: 'uppercase' }}>AI Strategy Insight</h4>
                       <p style={{ fontSize: 16, color: '#fff', opacity: 0.9, lineHeight: 1.6, marginBottom: 32, fontWeight: 600 }}>
                          Hertz is prioritizing intelligent automation. Your 10+ years of logic mastery places you in the TOP 1% of candidates for this executive path.
                       </p>
                       <button style={{ background: '#FFD100', width: '100%', color: '#000', border: 'none', padding: 20, borderRadius: 12, fontWeight: 950, fontSize: 16, textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 6px 0 #BD9A00' }}>
                          Unlock Full Roadmap
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
