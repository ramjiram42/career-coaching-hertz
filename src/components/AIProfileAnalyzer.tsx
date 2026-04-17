'use client';

import { UploadCloud, Cpu, Search, X, CheckCircle2, ArrowRight, Target, TrendingUp, Info, Award, BookOpen, Layers, Zap, Sparkles, User, HelpCircle, Compass, Heart, Share2, ChevronRight, BarChart2 } from "lucide-react"
import { useState, useEffect } from 'react'
import Image from 'next/image'

type ViewMode = 'explore' | 'journey';
type Step = 'upload' | 'analyzing' | 'results';

interface Skill {
  name: string;
  status: 'mastered' | 'missing';
}

interface PathNode {
  role: string;
  match: string;
  tag?: string;
}

interface JourneyPath {
  id: string;
  title: string;
  color: string;
  nodes: PathNode[];
}

export function AIProfileAnalyzer() {
  const [step, setStep] = useState<Step>('upload');
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  const [analyzingText, setAnalyzingText] = useState('Parsing resume...');
  
  const skills: Skill[] = [
    { name: 'RPA (UiPath/AA)', status: 'mastered' },
    { name: 'Architecture', status: 'mastered' },
    { name: 'Stakeholder Mgmt', status: 'mastered' },
    { name: 'Team Leadership', status: 'mastered' },
    { name: 'Agile/PMP', status: 'mastered' },
    { name: 'AI/ML Foundations', status: 'missing' },
    { name: 'System Design', status: 'missing' },
    { name: 'Cloud Architecture', status: 'missing' },
    { name: 'Product Growth', status: 'missing' },
  ];

  const journeys: JourneyPath[] = [
    {
      id: 'desired',
      title: 'Desired Path',
      color: '#FF5A3C',
      nodes: [
        { role: 'RPA Solution Architect', match: '15/15' },
        { role: 'AI Automation Lead', match: '12/15', tag: 'Leadership Role' },
        { role: 'Head of Intelligent Auto', match: '9/15', tag: 'Leadership Role' },
        { role: 'Head of Engineering', match: '7/15', tag: 'Executive' },
        { role: 'CTO', match: '5/15', tag: 'Ultimate Goal' }
      ]
    },
    {
      id: 'popular',
      title: 'Popular Path',
      color: '#00C2A8',
      nodes: [
        { role: 'RPA Solution Architect', match: '15/15' },
        { role: 'Engineering Manager', match: '11/15' },
        { role: 'Sr. Engineering Manager', match: '8/15' },
        { role: 'VP Engineering', match: '6/15' },
        { role: 'CTO', match: '5/15' }
      ]
    },
    {
      id: 'promoted',
      title: 'Promoted Lane (Cross Domain)',
      color: '#3B82F6',
      nodes: [
        { role: 'RPA Solution Architect', match: '15/15' },
        { role: 'Data Analyst', match: '8/15' },
        { role: 'AI Engineer', match: '6/15' },
        { role: 'AI Architect', match: '4/15' },
        { role: 'CTO', match: '5/15' }
      ]
    }
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStep('analyzing');
      setTimeout(() => setAnalyzingText('Analyzing 10+ years experience...'), 800);
      setTimeout(() => setAnalyzingText('Identifying RPA & Architecture strengths...'), 1600);
      setTimeout(() => setAnalyzingText('Calculating Executive Trajectory...'), 2400);
      setTimeout(() => setStep('results'), 3500);
    }
  };

  if (step === 'upload') {
    return (
      <div className="max-w-4xl mx-auto mt-20">
        <div 
          onClick={() => document.getElementById('resume-upload')?.click()}
          className="bg-white border-2 border-dashed border-gray-200 rounded-[48px] p-20 text-center cursor-pointer hover:border-[#FF5A3C] transition-all group shadow-xl shadow-gray-200/50"
        >
          <input type="file" id="resume-upload" hidden onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
          <div className="w-24 h-24 bg-[#FF5A3C] rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-lg shadow-[#FF5A3C]33 group-hover:scale-110 transition-transform">
            <UploadCloud size={48} color="white" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Upload Your Resume</h2>
          <p className="text-xl text-gray-500 font-medium mb-12 max-w-lg mx-auto">
            Let AI map your journey from RPA Architect to CTO in 3–5 years.
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
      <div className="max-w-4xl mx-auto mt-40 text-center">
        <div className="relative w-32 h-32 mx-auto mb-10">
          <div className="absolute inset-0 border-8 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-8 border-[#FF5A3C] rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu size={48} className="text-gray-900" />
          </div>
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4">Neural Strategy Map</h3>
        <p className="text-xl text-gray-500 font-bold animate-pulse">{analyzingText}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-20">
      
      {/* Sub Header / Tab Bar */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 sticky top-20 z-40 flex items-center justify-center">
        <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-100">
           <button 
            onClick={() => setViewMode('explore')}
            className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${viewMode === 'explore' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
           >
            Explore Future Moves
           </button>
           <button 
            onClick={() => setViewMode('journey')}
            className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${viewMode === 'journey' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
           >
            Career Journey
           </button>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        {viewMode === 'explore' ? (
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-20">
               <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Explore Future Moves</h1>
               <p className="text-xl text-gray-500 font-semibold">Strategic transitions calculated for your RPA mastery.</p>
            </div>

            {/* Top Node Flow */}
            <div className="relative flex justify-center items-start gap-32 mb-32">
               {/* Left: Next Step */}
               <div className="text-center relative z-10 w-64 group">
                  <div className="w-24 h-24 bg-white border-4 border-[#00C2A8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#00C2A8]11 group-hover:scale-110 transition-transform">
                     <Target size={40} className="text-[#00C2A8]" />
                  </div>
                  <span className="bg-[#00C2A8] text-white text-[10px] font-black px-3 py-1 rounded-md tracking-wider uppercase mb-3 inline-block">Next Step</span>
                  <h4 className="text-xl font-black text-gray-900 mb-1 leading-tight">AI Automation Lead</h4>
                  <p className="text-sm text-gray-500 font-bold">Suggested Move</p>
               </div>

               {/* Center: You Today */}
               <div className="text-center relative z-10 w-80">
                  <div className="w-32 h-32 bg-white p-1 rounded-full border-4 border-[#FF5A3C] mx-auto mb-6 shadow-2xl shadow-[#FF5A3C]22">
                     <div className="w-full h-full rounded-full overflow-hidden">
                        <Image src="/ram_profile.png" width={128} height={128} alt="You" className="object-cover" />
                     </div>
                  </div>
                  <span className="bg-[#FF5A3C] text-white text-[10px] font-black px-3 py-1 rounded-md tracking-wider uppercase mb-3 inline-block">You Today</span>
                  <h4 className="text-2xl font-black text-gray-900 mb-1 leading-tight">RPA Solution Architect</h4>
                  <p className="text-sm text-gray-500 font-bold">10+ Years Experience</p>
               </div>

               {/* Right: Future Move */}
               <div className="text-center relative z-10 w-64 group">
                  <div className="w-24 h-24 bg-white border-4 border-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#6C63FF]11 group-hover:scale-110 transition-transform">
                     <Award size={40} className="text-[#6C63FF]" />
                  </div>
                  <span className="bg-[#6C63FF] text-white text-[10px] font-black px-3 py-1 rounded-md tracking-wider uppercase mb-3 inline-block">Future Move</span>
                  <h4 className="text-xl font-black text-gray-900 mb-1 leading-tight">CTO / Head of Eng</h4>
                  <p className="text-sm text-gray-500 font-bold">Target Role</p>
               </div>

               {/* SVG Lines */}
               <div className="absolute left-0 top-12 w-full h-12 pointer-events-none opacity-30">
                  <svg width="100%" height="60" className="path-line">
                    <path d="M400 30 Q500 30, 600 30" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="10 10" fill="none" />
                    <path d="M600 30 Q700 30, 800 30" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="10 10" fill="none" />
                  </svg>
               </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
               {/* Card 1 */}
               <div className="bg-white rounded-[40px] p-10 w-80 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
                  <div className="bg-[#00C2A8] text-white text-[10px] font-black px-4 py-1.5 rounded-lg inline-block mb-6 uppercase tracking-widest">High Match</div>
                  <h5 className="text-2xl font-black text-gray-900 mb-4 leading-tight">Intelligent Automation Architect</h5>
                  <p className="text-[#64748B] font-semibold text-sm mb-10 leading-relaxed">Advanced automation architecture with AI integration & ML deployment.</p>
                  <button className="w-full bg-[#00C2A8] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all">Next Step</button>
               </div>

               {/* Card 2 */}
               <div className="bg-white rounded-[40px] p-10 w-80 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
                  <div className="bg-[#F39C12] text-white text-[10px] font-black px-4 py-1.5 rounded-lg inline-block mb-6 uppercase tracking-widest">Medium Match</div>
                  <h5 className="text-2xl font-black text-gray-900 mb-4 leading-tight">Technical Program Manager</h5>
                  <p className="text-[#64748B] font-semibold text-sm mb-10 leading-relaxed">Manage large-scale automation & digital transformation programs for enterprise.</p>
                  <button className="w-full border-2 border-[#F39C12] text-[#F39C12] py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#F39C12] hover:text-white transition-all">Explore</button>
               </div>

               {/* Card 3 */}
               <div className="bg-white rounded-[40px] p-10 w-80 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
                  <div className="bg-[#FF5A3C] text-white text-[10px] font-black px-4 py-1.5 rounded-lg inline-block mb-6 uppercase tracking-widest">High Match</div>
                  <h5 className="text-2xl font-black text-gray-900 mb-4 leading-tight">Engineering Manager (Automation)</h5>
                  <p className="text-[#64748B] font-semibold text-sm mb-10 leading-relaxed">Lead scalable automation teams and define the platform architecture.</p>
                  <button className="w-full bg-[#FF5A3C] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all">Next Step</button>
               </div>

               {/* Card 4 */}
               <div className="bg-white rounded-[40px] p-10 w-80 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
                  <div className="bg-[#6C63FF] text-white text-[10px] font-black px-4 py-1.5 rounded-lg inline-block mb-6 uppercase tracking-widest">Wild Card</div>
                  <h5 className="text-2xl font-black text-gray-900 mb-4 leading-tight">AI Engineer / Data Engineer</h5>
                  <p className="text-[#64748B] font-semibold text-sm mb-10 leading-relaxed">Pivotal transition into Core AI/ML domain leveraging your logic skills.</p>
                  <button className="w-full bg-[#6C63FF] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all">Explore</button>
               </div>
            </div>
          </div>
        ) : (
          <div className="animate-in slide-in-from-right duration-500 flex gap-12">
            
            {/* Left Main Pillar: Journey Paths */}
            <div className="flex-1">
               <div className="mb-12">
                  <h1 className="text-4xl font-black text-gray-900 mb-2">Recommended for you</h1>
                  <p className="text-lg text-gray-500 font-bold">Based on your profile and skills (RPA Solution Architect)</p>
               </div>

               <div className="space-y-12">
                  {journeys.map((path) => (
                    <div key={path.id} className="relative">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="w-3 h-8 rounded-full" style={{ backgroundColor: path.color }}></div>
                          <h3 className="text-xl font-black text-gray-900">{path.title}</h3>
                       </div>

                       <div className="flex items-stretch gap-6 overflow-x-auto pb-6">
                          {path.nodes.map((node, i) => (
                            <div key={i} className="flex items-center gap-6 flex-shrink-0">
                               <div className="bg-white rounded-[32px] p-8 min-w-[280px] shadow-lg border border-gray-50 hover:border-gray-200 transition-all group relative">
                                  <div className="flex justify-between items-start mb-6">
                                     <div className="text-[10px] font-black text-[#FF5A3C] uppercase tracking-wider">{node.match} Skills</div>
                                     <Heart size={18} className="text-gray-200 hover:text-[#FF5A3C] cursor-pointer transition-colors" />
                                  </div>
                                  <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{node.role}</h4>
                                  {node.tag && (
                                    <div className="flex items-center gap-2 mt-4">
                                       <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{node.tag}</span>
                                    </div>
                                  )}
                               </div>
                               {i < path.nodes.length - 1 && (
                                 <div className="text-gray-300">
                                    <ChevronRight size={32} />
                                 </div>
                               )}
                            </div>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Side Panel: Analysis */}
            <div className="w-[400px] flex flex-shrink-0 flex-col gap-8 sticky top-48 h-fit">
               {/* Analysis Card */}
               <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-50">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#FF5A3C]11 rounded-2xl flex items-center justify-center">
                        <BarChart2 className="text-[#FF5A3C]" />
                     </div>
                     <h4 className="text-xl font-black text-gray-900 m-0">Skill Gap Analysis</h4>
                  </div>
                  
                  <div className="space-y-6">
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-sm font-bold text-gray-700">RPA Mastery</span>
                           <span className="text-sm font-black text-[#00C2A8]">100%</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-[#00C2A8] w-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-sm font-bold text-gray-700">Cloud Architecture</span>
                           <span className="text-sm font-black text-[#FF5A3C]">40%</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-[#FF5A3C] w-[40%] transition-all duration-1000"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-sm font-bold text-gray-700">AI/ML Strategy</span>
                           <span className="text-sm font-black text-gray-300">10%</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-gray-300 w-[10%]"></div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-gray-50">
                     <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Recommended Learning</h5>
                     <div className="space-y-4">
                        {['Python for AI (Stanford)', 'Cloud Native Cert', 'Product Leadership'].map((course, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group">
                              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-gray-200">
                                 <BookOpen size={18} className="text-gray-400 group-hover:text-[#FF5A3C]" />
                              </div>
                              <span className="text-sm font-bold text-gray-700">{course}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Salary Card */}
               <div className="bg-[#1A1D23] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A3C] rounded-full blur-[80px] opacity-20"></div>
                  <h4 className="text-lg font-bold text-gray-400 mb-2 uppercase tracking-widest">Est. CTO Salary</h4>
                  <div className="text-5xl font-black mb-6 tracking-tight">$320k - $450k</div>
                  <div className="flex items-center gap-2 text-[#00C2A8] font-bold">
                     <TrendingUp size={20} />
                     <span>+45% Career Growth</span>
                  </div>
               </div>
            </div>

          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1.5s linear infinite; }
        .path-line { filter: drop-shadow(0 0 10px rgba(0,0,0,0.05)); }
      `}</style>
    </div>
  );
}
