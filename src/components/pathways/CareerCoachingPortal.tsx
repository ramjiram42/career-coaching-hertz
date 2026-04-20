'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import careerPathsData from '../../data/careerPaths.json';
import { Bookmark, ChevronRight, CheckCircle, Crosshair, Target, Briefcase, Zap, Info, Compass, ArrowLeft } from 'lucide-react';

export default function CareerCoachingPortal({ overridePath, onBack }: { overridePath?: string, onBack?: () => void }) {
  const [activePath, setActivePath] = useState<any>(null);
  const [savedPaths, setSavedPaths] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // If overridePath is passed, initialize activePath matching it
  useEffect(() => {
    if (overridePath) {
      for (const category of careerPathsData.categories) {
        const found = category.paths.find(p => p.id === overridePath);
        if (found) {
          setActivePath(found);
          break;
        }
      }
    }
  }, [overridePath]);

  const toggleSave = (pathId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPaths(prev => prev.includes(pathId) ? prev.filter(id => id !== pathId) : [...prev, pathId]);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      setActivePath(null);
    }
  };

  return (
    <div style={{ width: '100%', marginTop: 20, animation: 'cardIn 0.8s ease forwards', color: '#1E293B', fontFamily: 'Inter, sans-serif' }}>
      
      {!activePath ? (
        <RecommendedView 
          data={careerPathsData} 
          onSelectPath={setActivePath} 
          savedPaths={savedPaths}
          toggleSave={toggleSave}
        />
      ) : (
        <ExpandedJourneyView 
          path={activePath} 
          goBack={handleBack} 
          isSaved={savedPaths.includes(activePath.id)}
          toggleSave={(e: any) => toggleSave(activePath.id, e)}
        />
      )}

    </div>
  );
}

// ==========================================
// RECOMMENDED VIEW (Step 4) - Redesigned for Horizontal Lane Layout
// ==========================================
function RecommendedView({ data, onSelectPath, savedPaths, toggleSave }: any) {
  // Select top paths for the lanes
  const lanes = [
    { 
      path: data.categories[0].paths[0], 
      label: "Desired path", 
      color: "#D81B60", // Pink
      icon: "🎯"
    },
    { 
      path: data.categories[1].paths[0], 
      label: "Popular path", 
      color: "#00897B", // Teal
      icon: "🔥"
    },
    { 
      path: data.categories[2].paths[0], 
      label: "Career Pivot", 
      color: "#5E35B1", // Deep Purple
      icon: "🚀"
    }
  ];

  return (
    <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ margin: '40px 0 60px' }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.02em', color: '#0F172A', marginBottom: 8 }}>Recommended for you</h2>
        <p style={{ color: '#64748B', fontSize: 16 }}>Based on your profile and skills set</p>
      </div>

      <div style={{ display: 'flex', position: 'relative', minHeight: 600 }}>
        {/* Profile Column */}
        <div style={{ width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, zIndex: 10 }}>
           <div style={{ width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', position: 'relative' }}>
              <Image src="/ram_profile.png" width={64} height={64} alt="Profile" style={{ objectFit: 'cover' }} />
           </div>
        </div>

        {/* Lanes Column */}
        <div style={{ flex: 1, paddingLeft: 60, position: 'relative' }}>
           
           {/* SVG Back-Connectors (Static Branching) */}
           <svg width="60" height="100%" style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', overflow: 'visible' }}>
              <path d="M -30 32 V 460" fill="none" stroke="#E2E8F0" strokeWidth="3" />
              <path d="M -30 32 H 0" fill="none" stroke="#E2E8F0" strokeWidth="3" />
              <path d="M -30 240 H 0" fill="none" stroke="#E2E8F0" strokeWidth="3" />
              <path d="M -30 460 H 0" fill="none" stroke="#E2E8F0" strokeWidth="3" />
           </svg>

           {lanes.map((lane, idx) => (
             <div key={lane.path.id} style={{ marginBottom: 60, position: 'relative' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                   <div style={{ background: lane.color, color: '#fff', fontSize: 11, fontWeight: 950, padding: '4px 10px', borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: 6 }}>{lane.label}</span>
                      <span style={{ opacity: 0.8, background: 'rgba(255,255,255,0.2)', padding: '1px 6px', borderRadius: 2 }}>{lane.path.nodes.length}</span>
                   </div>
                   <div style={{ marginLeft: 16, color: '#64748B', fontSize: 13, fontWeight: 700 }}>
                      Based on your Desired Role <span style={{ textDecoration: 'underline', color: '#0F172A', cursor: 'pointer' }}>{lane.path.name} ›</span>
                   </div>
                   <div style={{ flex: 1 }}></div>
                   <button onClick={(e: any) => toggleSave(lane.path.id, e)} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#64748B', fontSize: 13, fontWeight: 700 }}>
                      <Bookmark size={15} style={{ marginRight: 6 }} fill={savedPaths.includes(lane.path.id) ? lane.color : 'none'} color={savedPaths.includes(lane.path.id) ? lane.color : '#CBD5E1'} /> Save path
                   </button>
                </div>

                {/* Nodes Horizontal Row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
                   {lane.path.nodes.filter((n: any) => n.status !== 'past').slice(0, 3).map((node: any, nIdx: number) => (
                      <React.Fragment key={nIdx}>
                         {/* Circle between profile and first card */}
                         {nIdx === 0 && (
                            <div style={{ width: 14, height: 14, borderRadius: '50%', border: '3px solid #E2E8F0', background: '#fff', alignSelf: 'center', marginLeft: -40, marginRight: 26, zIndex: 5 }}></div>
                         )}

                         <div 
                           onClick={() => onSelectPath(lane.path)}
                           style={{ 
                             background: '#fff', 
                             border: '1px solid #E2E8F0', 
                             borderRadius: 8, 
                             padding: nIdx === 0 ? '24px' : '20px',
                             width: nIdx === 0 ? '280px' : '220px',
                             boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                             transition: 'all 0.2s',
                             cursor: 'pointer',
                             position: 'relative'
                           }}
                           onMouseOver={(e) => {
                             e.currentTarget.style.transform = 'translateY(-4px)';
                             e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                           }}
                           onMouseOut={(e) => {
                             e.currentTarget.style.transform = 'translateY(0)';
                             e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                           }}
                         >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                               <h4 style={{ fontSize: 16, fontWeight: 800, color: '#1E293B', lineHeight: 1.3 }}>{node.role}</h4>
                               <div style={{ color: '#E2E8F0', fontSize: 18, fontWeight: 900 }}>•••</div>
                            </div>

                            {nIdx === 0 ? (
                               <>
                                 <div style={{ fontSize: 11, color: '#64748B', fontWeight: 600, marginBottom: 10 }}>
                                    You have <span style={{ color: '#0F172A', fontWeight: 800 }}>{Math.floor(lane.path.matchScore * 1.5)} of 15</span> most common skills for role
                                 </div>
                                 <div style={{ height: 6, background: '#F1F5F9', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
                                    <div style={{ width: `${lane.path.matchScore * 10}%`, height: '100%', background: '#3B82F6' }}></div>
                                 </div>
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <div style={{ background: '#F59E0B', color: '#fff', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20 }}><Zap size={12} fill="#fff" /></div>
                                    <span style={{ fontSize: 12, fontWeight: 800, color: '#475569' }}>Leadership role</span>
                                 </div>
                               </>
                            ) : null}
                         </div>

                         {/* Node-to-node connector */}
                         {nIdx < 2 && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 80 }}>
                               <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                  <div style={{ width: 12, height: 12, borderRadius: '50%', border: '3px solid #E2E8F0', background: '#fff' }}></div>
                                  <div style={{ height: 2, flex: 1, background: '#E2E8F0' }}></div>
                               </div>
                               <div style={{ fontSize: 10, fontWeight: 800, color: '#94A3B8', marginTop: 8 }}>+1 role</div>
                            </div>
                         )}
                      </React.Fragment>
                   ))}
                </div>

             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// EXPANDED JOURNEY VIEW (Step 5)
// ==========================================
function ExpandedJourneyView({ path, goBack, isSaved, toggleSave }: any) {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  // Auto-select the "next" node
  React.useEffect(() => {
    const nextNode = path.nodes.find((n: any) => n.status === 'next');
    if (nextNode) setSelectedNode(nextNode);
  }, [path]);

  return (
    <div style={{ padding: '0 20px', animation: 'fadeIn 0.4s ease forwards' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
         <button onClick={goBack} style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontWeight: 600, color: '#475569', marginRight: 20 }}>
            <ArrowLeft size={16} style={{ marginRight: 8 }} /> Back to Recommendations
         </button>
      </div>

      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        
        {/* Left Side: Tree Interactive Map */}
        <div style={{ flex: '1 1 600px', background: '#fff', borderRadius: 24, border: '1px solid #E2E8F0', padding: 40, boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
           
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
             <div>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: '#0F172A', marginBottom: 8 }}>{path.name} Roadmap</h2>
             </div>
             <button onClick={toggleSave} style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', borderRadius: 8, background: isSaved ? '#EFF6FF' : '#F8FAFC', color: isSaved ? '#3B82F6' : '#64748B', border: isSaved ? '1px solid #BFDBFE' : '1px solid #E2E8F0', fontWeight: 700, cursor: 'pointer' }}>
               <Bookmark size={18} fill={isSaved ? '#3B82F6' : 'none'} style={{ marginRight: 8 }} /> {isSaved ? 'Path Saved' : 'Save Path'}
             </button>
           </div>

           {/* The Map */}
           <div style={{ position: 'relative', paddingLeft: 30 }}>
             {/* Vertical Timeline Line */}
             <div style={{ position: 'absolute', left: 45, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, #E2E8F0 50%, #3B82F6 100%)', zIndex: 1 }}></div>
             
             {path.nodes.map((node: any, idx: number) => {
               const isSelected = selectedNode?.role === node.role;
               
               let nodeColor = '#94A3B8';
               let icon = <CheckCircle size={18} color="#fff" />;
               
               if (node.status === 'past') { nodeColor = '#E2E8F0'; }
               if (node.status === 'current') { nodeColor = '#0F172A'; icon = <Briefcase size={16} color="#fff"/>; }
               if (node.status === 'next') { nodeColor = '#3B82F6'; icon = <Crosshair size={16} color="#fff"/>; }
               if (node.status === 'future') { nodeColor = '#8B5CF6'; icon = <Zap size={16} color="#fff"/>; }

               return (
                 <div 
                   key={idx} 
                   onClick={() => setSelectedNode(node)}
                   style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     marginBottom: 30, 
                     cursor: 'pointer',
                     transform: isSelected ? 'scale(1.02) translateX(10px)' : 'none',
                     transition: 'all 0.2s',
                     position: 'relative',
                     zIndex: 2
                   }}
                 >
                    {/* Node Dot */}
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: nodeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20, border: isSelected ? `4px solid ${nodeColor}40` : '4px solid #fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                       {icon}
                    </div>
                    
                    {/* Node Box */}
                    <div style={{ 
                      flex: 1, 
                      padding: '16px 20px', 
                      background: isSelected ? `${nodeColor}10` : '#fff',
                      border: isSelected ? `2px solid ${nodeColor}` : '1px solid #E2E8F0',
                      borderRadius: 12,
                      boxShadow: isSelected ? `0 10px 20px ${nodeColor}20` : '0 4px 10px rgba(0,0,0,0.02)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                       <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: nodeColor, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                            {node.status === 'past' ? 'Completed Role' : node.status === 'current' ? 'Current Role' : node.status === 'next' ? 'Target Next Move' : 'Future Vision'}
                          </div>
                          <div style={{ fontSize: 18, fontWeight: 800, color: node.status === 'past' ? '#64748B' : '#0F172A' }}>
                            {node.role}
                          </div>
                       </div>
                       {isSelected && <ChevronRight color={nodeColor} />}
                    </div>
                 </div>
               );
             })}
           </div>
        </div>

        {/* Right Side: Details Panel (Step 6) */}
        <div style={{ flex: '1 1 350px', position: 'sticky', top: 20 }}>
          {selectedNode ? (
            <div style={{ background: '#fff', borderRadius: 24, border: '1px solid #E2E8F0', padding: 30, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: 24, fontWeight: 900, color: '#0F172A', marginBottom: 20 }}>Role Insights</h3>
               
               <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: 12, marginBottom: 24, borderLeft: '4px solid #3B82F6' }}>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', marginBottom: 6 }}>Focusing on: {selectedNode.role}</h4>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.5 }}>
                     {selectedNode.status === 'past' ? 'You have successfully completed this phase of the journey.' : 
                      selectedNode.status === 'current' ? 'Your current position commands a strong technical foundation.' : 
                      'This is a crucial milestone requiring specific skill acquisitions.'}
                  </p>
               </div>

               {/* Skills Gaps */}
               {(selectedNode.status === 'next' || selectedNode.status === 'future') && (
                 <>
                   <div style={{ marginBottom: 24 }}>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center' }}><CheckCircle size={16} color="#10B981" style={{ marginRight: 6 }}/> Aligned Strengths</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {path.alignedSkills.map((s: string, i: number) => (
                           <span key={i} style={{ background: '#D1FAE5', color: '#065F46', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>{s}</span>
                        ))}
                      </div>
                   </div>
                   
                   <div style={{ marginBottom: 30 }}>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center' }}><Info size={16} color="#F59E0B" style={{ marginRight: 6 }}/> Skills To Acquire</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {path.missingSkills.map((s: string, i: number) => (
                           <span key={i} style={{ background: '#FEF3C7', color: '#92400E', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>{s}</span>
                        ))}
                        {selectedNode.skillsToLearn && selectedNode.skillsToLearn.map((s: string, i: number) => (
                           <span key={i} style={{ background: '#FEE2E2', color: '#991B1B', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>{s}</span>
                        ))}
                      </div>
                   </div>

                   <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', marginBottom: 24 }} />

                   <h4 style={{ fontSize: 16, fontWeight: 800, color: '#0F172A', marginBottom: 16 }}>Recommended Action Plan</h4>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: 8, display: 'flex', gap: 12 }}>
                         <div style={{ fontWeight: 800, color: '#3B82F6', fontSize: 14, minWidth: 50 }}>30 Days</div>
                         <div style={{ fontSize: 13, color: '#475569' }}>Audit your current skills against the target role requirements.</div>
                      </div>
                      <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: 8, display: 'flex', gap: 12 }}>
                         <div style={{ fontWeight: 800, color: '#3B82F6', fontSize: 14, minWidth: 50 }}>90 Days</div>
                         <div style={{ fontSize: 13, color: '#475569' }}>Enroll in certifications for required tech stacks (e.g. {path.missingSkills[0]}).</div>
                      </div>
                      <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: 8, display: 'flex', gap: 12 }}>
                         <div style={{ fontWeight: 800, color: '#3B82F6', fontSize: 14, minWidth: 50 }}>180 Days</div>
                         <div style={{ fontSize: 13, color: '#475569' }}>Take on internal shadow projects aligned with the {selectedNode.role} domain.</div>
                      </div>
                   </div>
                 </>
               )}
            </div>
          ) : (
             <div style={{ background: '#F8FAFC', borderRadius: 24, border: '1px dashed #CBD5E1', padding: 40, textAlign: 'center', color: '#94A3B8' }}>
                <Compass size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Select a Journey Node</h3>
                <p style={{ fontSize: 14 }}>Click on any role in the timeline to explore detailed skills, gaps, and action plans.</p>
             </div>
          )}
        </div>

      </div>
    </div>
  );
}
