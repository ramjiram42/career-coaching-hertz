'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Sparkles, User, HelpCircle, Compass, Heart, Share2, ChevronRight, BarChart3, ChevronDown, UserCheck } from "lucide-react"
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
        className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 min-w-[200px] cursor-pointer hover:shadow-xl transition-all group relative"
      >
        {data.tag && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-wider" style={{ background: color }}>
            {data.tag}
          </span>
        )}
        <h5 className="text-[12px] font-bold text-gray-900 mb-2 leading-tight flex items-center justify-between">
          {data.role}
          {data.isTarget && <Target size={12} className="text-[#FF5A3C]" />}
        </h5>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
            <span>Skill Match</span>
            <span style={{ color }}>{data.skills}</span>
          </div>
          <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
             <div className="h-full transition-all duration-1000" style={{ width: `${progress}%`, background: color }}></div>
          </div>
        </div>

        {/* Tooltip on Hover */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-900 text-white p-3 rounded-xl text-[10px] opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none shadow-2xl">
           <p className="font-bold mb-1">Skill Gap Analysis</p>
           <p className="opacity-70 mb-2">Missing: AI/ML Strategy, Cloud Arch</p>
           <div className="flex items-center gap-1 text-[#FFC900] font-black uppercase tracking-tighter">
              <Zap size={10} /> Next Steps: Python for AI
           </div>
        </div>
      </div>
    );
  };

  if (step === 'upload') {
    return (
      <div className="max-w-4xl mx-auto mt-20 px-8">
        <div 
          onClick={(e) => {
            if (e.target instanceof HTMLInputElement) return;
            document.getElementById('resume-upload')?.click();
          }}
          className="bg-white border-2 border-dashed border-gray-200 rounded-[48px] p-20 text-center cursor-pointer hover:border-[#FF5A3C] transition-all group shadow-xl shadow-gray-200/50"
        >
          <input type="file" id="resume-upload" hidden onChange={handleFileSelect} onClick={(e) => e.stopPropagation()} accept=".pdf,.doc,.docx" />
          <div className="w-24 h-24 bg-[#FF5A3C] rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-lg shadow-[#FF5A3C]33 group-hover:scale-110 transition-transform">
            <UploadCloud size={48} color="white" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Generate Future Moves</h2>
          <p className="text-xl text-gray-500 font-medium mb-12 max-w-lg mx-auto">
            Upload your resume to reveal your holistic RPA-to-CTO career tree.
          </p>
          <button className="bg-[#FF5A3C] text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#FF5A3C]44 transition-all">
            Analyze My Trajectory
          </button>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div className="max-w-4xl mx-auto mt-40 text-center px-8">
        <div className="relative w-32 h-32 mx-auto mb-10">
          <div className="absolute inset-0 border-8 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-8 border-[#FF5A3C] rounded-full border-t-transparent animate-spin-custom"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu size={48} className="text-gray-900" />
          </div>
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4">Neural Strategy Mapping...</h3>
        <p className="text-xl text-gray-500 font-bold animate-pulse">{analyzingText}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-40 overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto pt-16 px-8 text-center mb-24">
         <h1 className="text-5xl font-black text-gray-900 mb-3 tracking-tighter">Explore Future Moves</h1>
         <p className="text-xl text-gray-500 font-bold">Personalized career paths based on your RPA Solution Architect profile</p>
      </div>

      <div className="max-w-[1600px] mx-auto px-8">
         <div className="flex flex-col items-center">
            
            {/* ROOT NODE (CENTERED) */}
            <div id="root-node" className="mb-24 relative z-20">
               <div className="bg-white rounded-[40px] p-8 shadow-2xl border-4 border-[#FF5A3C] flex items-center gap-6 min-w-[380px] hover:scale-105 transition-transform">
                  <div className="w-20 h-20 rounded-[24px] bg-gray-100 overflow-hidden border-2 border-white shadow-lg">
                     <Image src="/ram_profile.png" width={80} height={80} alt="Ram" className="object-cover" />
                  </div>
                  <div className="text-left">
                     <span className="bg-[#FF5A3C] text-white text-[10px] font-black px-3 py-1 rounded-lg tracking-widest uppercase mb-2 inline-block">YOU TODAY</span>
                     <h4 className="text-2xl font-black text-gray-900 m-0 leading-tight">RPA Solution Architect</h4>
                     <p className="text-sm font-bold text-gray-400 mt-1">10+ Years Experience</p>
                  </div>
               </div>
            </div>

            {/* SVG CONNECTORS BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
               <svg width="100%" height="2000" viewBox="0 0 1600 2000" fill="none" opacity="0.3">
                  {/* Desired Path Connection */}
                  <path d="M800 200 C800 300, 400 300, 100 500" stroke="#10B981" strokeWidth="3" strokeDasharray="10 10" className="path-line" />
                  <path d="M800 200 C800 350, 400 350, 100 1000" stroke="#F59E0B" strokeWidth="3" strokeDasharray="10 10" className="path-line" />
                  <path d="M800 200 C800 400, 400 400, 100 1500" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="10 10" className="path-line" />
               </svg>
            </div>

            {/* TREE SECTIONS */}
            <div className="w-full space-y-32 relative z-10">
               {sections.map((section, sIdx) => (
                 <div key={section.title} className="relative">
                    
                    {/* Section Label */}
                    <div className="flex items-center gap-4 mb-12">
                       <span className="px-4 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.15em]" style={{ background: section.tagColor }}>{section.tag}</span>
                       <h3 className="text-2xl font-black text-gray-900">{section.title}</h3>
                    </div>

                    {/* Branches Grid */}
                    <div className="space-y-16">
                       {section.branches.map((branch, bIdx) => (
                         <div key={branch.id} className="relative flex items-center">
                            
                            {/* Branch Wrapper for alignment */}
                            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4 px-2">
                               {branch.nodes.map((node, nIdx) => (
                                 <div key={nIdx} className="flex items-center gap-8 flex-shrink-0">
                                    <Node data={node} color={section.tagColor} />
                                    {nIdx < branch.nodes.length - 1 && (
                                      <div className="text-gray-300">
                                         <ArrowRight size={20} strokeWidth={3} />
                                      </div>
                                    )}
                                 </div>
                               ))}
                            </div>

                            {/* SVG PATHS will be drawn here if needed, simplified with relative layout for now */}
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>

         </div>
      </div>

      {/* MODAL / PANEL (Same as before but refined) */}
      {selectedNode && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-[1000] flex items-center justify-center p-8 animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-4xl rounded-[48px] overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-8">
              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X />
              </button>

              <div className="p-16">
                 <div className="flex items-start gap-10 mb-12">
                    <div className="w-32 h-32 bg-gray-100 rounded-[32px] flex items-center justify-center">
                       <Briefcase size={64} className="text-gray-400" />
                    </div>
                    <div>
                       <span className="text-xs font-black text-[#FF5A3C] uppercase tracking-widest">AI Journey Mapping</span>
                       <h2 className="text-5xl font-black text-gray-900 mt-2 mb-4">{selectedNode.role}</h2>
                       <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                             <TrendingUp size={18} className="text-[#10B981]" />
                             <span className="text-sm font-bold text-gray-500">Match Level: {selectedNode.skills}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <UserCheck size={18} className="text-[#6C63FF]" />
                             <span className="text-sm font-bold text-gray-500">10+ Open Roles</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-10">
                    <div className="bg-gray-50 rounded-[32px] p-10">
                       <h4 className="text-xl font-black text-gray-900 mb-6">Required Skillset</h4>
                       <div className="space-y-4">
                          {[
                            { name: 'System Design', status: 'missing' },
                            { name: 'Cloud Architecture', status: 'missing' },
                            { name: 'RPA Mastery', status: 'mastered' },
                            { name: 'Stakeholder Mgmt', status: 'mastered' }
                          ].map(s => (
                             <div key={s.name} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                <span className="text-sm font-bold text-gray-700">{s.name}</span>
                                {s.status === 'mastered' ? <CheckCircle2 size={18} className="text-[#10B981]" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-200" />}
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="bg-[#1A1D23] rounded-[32px] p-10 text-white">
                       <h4 className="text-xl font-black mb-6">AI Career Insight</h4>
                       <p className="text-gray-400 leading-relaxed font-medium mb-8">
                          Your extensive architecture background makes you 80% ready for this transition. Focus on cloud-native patterns to close the gap within 6 months.
                       </p>
                       <button className="w-full bg-[#FF5A3C] py-4 rounded-2xl font-black text-sm uppercase tracking-widest">Enroll in Transition Program</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-custom { animation: spin 1.5s linear infinite; }
      `}</style>

    </div>
  );
}
