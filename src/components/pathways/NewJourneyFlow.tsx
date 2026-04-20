'use client';
import React, { useState } from 'react';
import { Search, User, ArrowRight, ChevronDown, HelpCircle, X, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface NewJourneyFlowProps {
  onFindJourney: (role: string) => void;
  onCancel: () => void;
}

const TARGET_ROLE_OPTIONS = [
  { label: 'In my function', roles: ['Automation Architect', 'Head of Automation', 'Chief AI Officer', 'Engineering Manager'] },
  { label: 'Other functions', roles: ['Product Manager', 'CTO', 'Operations Director', 'Solution Consultant'] }
];

const STRETCH_ROLES_DATA = [
  { name: 'Lead AI Engineer', match: '64%', avatar: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=80' },
  { name: 'Chief Technology Officer', match: '56%', avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80' },
  { name: 'Data Scientist', match: '56%', avatar: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80' },
  { name: 'Product Manager (AI)', match: '42%', avatar: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=80' },
];

const NEXT_STEPS_DATA = [
  { name: 'Automation Architect', match: '70%', avatar: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=80' },
  { name: 'Intelligent Automation Lead', match: '70%', avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80' },
  { name: 'Cloud Integration Expert', match: '70%', avatar: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80' },
  { name: 'Enterprise Architect', match: '70%', avatar: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=80' },
];

export default function NewJourneyFlow({ onFindJourney, onCancel }: NewJourneyFlowProps) {
  const [stage, setStage] = useState<'form' | 'results'>('form');
  const [targetRole, setTargetRole] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('In my function');

  const filteredRoles = TARGET_ROLE_OPTIONS.find(t => t.label === activeTab)?.roles || [];

  if (stage === 'results') {
    return (
      <div style={{ 
        background: '#fff', 
        borderRadius: 24, 
        padding: '60px 40px', 
        border: '1px solid #E2E8F0', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
        animation: 'cardIn 0.6s ease forwards',
        position: 'relative',
        maxWidth: '1200px',
        margin: '20px auto',
        minHeight: '800px'
      }}>
        <button 
          onClick={() => setStage('form')}
          style={{ position: 'absolute', top: 24, left: 24, background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}
        >
          <ChevronLeft size={20} /> Back to Search
        </button>

        <button 
          onClick={onCancel}
          style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
        >
          <X size={24} />
        </button>

        {/* Top Section */}
        <div style={{ position: 'relative', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
           {/* Navigation Arrows */}
           <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#CBD5E1', cursor: 'pointer' }}><ChevronLeft size={48} /></div>
           <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: '#CBD5E1', cursor: 'pointer' }}><ChevronRight size={48} /></div>

           {/* User Profile Center */}
           <div style={{ position: 'absolute', zIndex: 10 }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)', overflow: 'hidden' }}>
                 <Image src="/ram_profile.png" width={100} height={100} alt="User" />
              </div>
           </div>

           {/* Role Nodes Around */}
           {NEXT_STEPS_DATA.map((role, i) => {
              const angles = [-140, -40, 140, 40];
              const dist = 180;
              const angle = angles[i] * (Math.PI / 180);
              const x = Math.cos(angle) * dist;
              const y = Math.sin(angle) * dist;

              return (
                 <div key={role.name} style={{ position: 'absolute', transform: `translate(${x}px, ${y}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s', cursor: 'pointer' }}>
                    <div style={{ position: 'relative' }}>
                       <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                          <User size={32} color="#CBD5E1" />
                       </div>
                       <div style={{ position: 'absolute', bottom: -5, right: -5, background: '#10B981', color: '#fff', fontSize: 10, fontWeight: 900, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>{role.match}</div>
                    </div>
                    <span style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: '#475569', textAlign: 'center', maxWidth: 120 }}>{role.name}</span>
                 </div>
              );
           })}
        </div>

        {/* Stretch Roles Divider */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 60, borderTop: '1px dotted #CBD5E1', paddingTops: 40, position: 'relative' }}>
            <div style={{ background: '#fff', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, marginTop: -12 }}>
               <span style={{ fontSize: 13, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>STRETCH ROLES</span>
               <span style={{ fontSize: 11, fontWeight: 900, color: '#3B82F6', textTransform: 'uppercase', cursor: 'pointer' }}>VIEW ALL (319)</span>
            </div>
        </div>

        {/* Bottom Section */}
        <div style={{ position: 'relative', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           {/* Navigation Arrows */}
           <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#64748B', cursor: 'pointer' }}><ChevronLeft size={64} /></div>
           <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: '#64748B', cursor: 'pointer' }}><ChevronRight size={64} /></div>

           {/* Stretch Role Nodes */}
           {STRETCH_ROLES_DATA.map((role, i) => {
              const angles = [-140, -40, 140, 40];
              const dist = 180;
              const angle = angles[i] * (Math.PI / 180);
              const x = Math.cos(angle) * dist;
              const y = Math.sin(angle) * dist;

              return (
                 <div 
                   key={role.name} 
                   onClick={() => onFindJourney(role.name)}
                   style={{ 
                     position: 'absolute', 
                     transform: `translate(${x}px, ${y}px)`, 
                     display: 'flex', 
                     flexDirection: 'column', 
                     alignItems: 'center', 
                     transition: 'all 0.3s', 
                     cursor: 'pointer' 
                   }}
                 >
                    <div style={{ position: 'relative' }}>
                       <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
                          <User size={48} color="#CBD5E1" />
                       </div>
                       <div style={{ position: 'absolute', bottom: -5, right: -5, background: role.match.includes('6') ? '#10B981' : '#F59E0B', color: '#fff', fontSize: 12, fontWeight: 900, width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>{role.match}</div>
                    </div>
                    <span style={{ marginTop: 12, fontSize: 16, fontWeight: 700, color: '#1E293B', textAlign: 'center', maxWidth: 160 }}>{role.name}</span>
                 </div>
              );
           })}
        </div>

      </div>
    );
  }

  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: 24, 
      padding: '60px 40px', 
      border: '1px solid #E2E8F0', 
      boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
      animation: 'cardIn 0.6s ease forwards',
      position: 'relative',
      maxWidth: '1000px',
      margin: '20px auto'
    }}>
      <button 
        onClick={onCancel}
        style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
      >
        <X size={24} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ fontSize: 42, fontWeight: 900, color: '#DC2626', marginBottom: 12 }}>Find a journey</h2>
        <p style={{ fontSize: 18, color: '#475569' }}>Enter any two roles and we'll find you a Career Journey.</p>
      </div>

      {/* Visual Path Area */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, marginBottom: 80, position: 'relative' }}>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
               <Image src="/ram_profile.png" width={80} height={80} alt="Start" style={{ objectFit: 'cover' }} />
            </div>
            <span style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: '#64748B' }}>Start</span>
         </div>

         <div style={{ flex: 1, height: 2, borderTop: '4px dashed #CBD5E1', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', transform: 'translateY(-10px)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '2px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', marginTop: -20 }}><HelpCircle size={20} /></div>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '2px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', marginTop: -20 }}><HelpCircle size={20} /></div>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '2px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', marginTop: -20 }}><HelpCircle size={20} /></div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#F1F5F9', border: '4px solid #fff', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
               <User size={40} />
            </div>
            <span style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: '#3B82F6' }}>Target role</span>
         </div>
      </div>

      {/* Form Area */}
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
         <div style={{ flex: 1, minWidth: '300px' }}>
            <input 
              readOnly 
              value="RPA Solution Architect"
              style={{ width: '100%', padding: '16px 20px', borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 16, fontWeight: 600, color: '#1E293B', background: '#F8FAFC' }}
            />
         </div>

         <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
            <div 
              style={{ 
                width: '100%', 
                padding: '16px 20px', 
                borderRadius: 12, 
                border: '2px solid #3B82F6', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
                cursor: 'pointer'
              }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
               <span style={{ color: targetRole ? '#1E293B' : '#94A3B8', fontSize: 16, fontWeight: 600 }}>
                  {targetRole || 'Type or select'}
               </span>
               <ChevronDown size={20} color="#3B82F6" />
            </div>

            {showDropdown && (
               <div style={{ 
                 position: 'absolute', 
                 top: '105%', 
                 left: 0, 
                 right: 0, 
                 background: '#fff', 
                 borderRadius: 12, 
                 border: '1px solid #E2E8F0', 
                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                 zIndex: 100,
                 overflow: 'hidden'
               }}>
                  <div style={{ display: 'flex', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                     {TARGET_ROLE_OPTIONS.map(opt => (
                        <button 
                          key={opt.label}
                          onClick={(e) => { e.stopPropagation(); setActiveTab(opt.label); }}
                          style={{ 
                            flex: 1, 
                            padding: '12px', 
                            border: 'none', 
                            background: activeTab === opt.label ? '#fff' : 'transparent',
                            borderBottom: activeTab === opt.label ? '2px solid #DC2626' : 'none',
                            fontSize: 14,
                            fontWeight: 700,
                            color: activeTab === opt.label ? '#DC2626' : '#64748B',
                            cursor: 'pointer'
                          }}
                        >
                           {opt.label}
                        </button>
                     ))}
                  </div>

                  {/* Role Level Dropdown */}
                  <div style={{ padding: '16px 20px', borderBottom: '1px solid #F1F5F9' }}>
                     <div 
                        style={{ 
                           width: '100%', 
                           padding: '10px 16px', 
                           borderRadius: 8, 
                           border: '1px solid #E2E8F0', 
                           background: '#fff',
                           fontSize: 14,
                           color: '#475569',
                           fontWeight: 600,
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           cursor: 'pointer'
                        }}
                     >
                        <span>Select Role Level</span>
                        <ChevronDown size={16} />
                     </div>
                  </div>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                     {filteredRoles.map(role => (
                        <div 
                           key={role}
                           style={{ padding: '12px 20px', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: '#475569' }}
                           onMouseOver={(e) => e.currentTarget.style.background = '#F1F5F9'}
                           onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                           onClick={() => {
                             setTargetRole(role);
                             setShowDropdown(false);
                           }}
                        >
                           {role}
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>

         <button 
           onClick={() => targetRole && onFindJourney(targetRole)}
           style={{ 
             background: targetRole ? '#DC2626' : '#CBD5E1', 
             color: '#fff', 
             border: 'none', 
             padding: '12px 40px', 
             borderRadius: 6, 
             fontSize: 22, 
             fontWeight: 900, 
             cursor: targetRole ? 'pointer' : 'not-allowed',
             transition: 'all 0.2s',
             boxShadow: '0 4px 15px rgba(220, 38, 38, 0.15)',
             transform: 'translateY(-2px)'
           }}
           disabled={!targetRole}
         >
            Find Journey
         </button>
      </div>

      {/* Stretch Roles Section */}
      <div style={{ marginTop: 80 }}>
         <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>STRETCH ROLES</span>
            <div style={{ height: 1, flex: 1, background: '#E2E8F0', marginLeft: 20, borderTop: '1px dotted #CBD5E1' }}></div>
         </div>

         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: 120, height: 100 }}>
               {/* Animated Gears */}
               <div style={{ position: 'absolute', top: 0, left: 10, animation: 'spin 10s linear infinite' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="#3B82F6" stroke="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
               </div>
               <div style={{ position: 'absolute', bottom: 10, right: 10, animation: 'spin-reverse 8s linear infinite' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#93C5FD" stroke="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
               </div>
               <div style={{ position: 'absolute', top: 5, right: 30, animation: 'spin 12s linear infinite' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#E2E8F0" stroke="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
               </div>
            </div>

            <button 
               onClick={() => setStage('results')} 
               style={{ 
                  background: '#DC2626', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '12px 60px', 
                  borderRadius: 6, 
                  fontSize: 16, 
                  fontWeight: 800, 
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.2)',
                  transition: 'background 0.2s'
               }}
               onMouseOver={(e) => e.currentTarget.style.background = '#B91C1C'}
               onMouseOut={(e) => e.currentTarget.style.background = '#DC2626'}
            >
               Generate
            </button>
         </div>
      </div>

      <style>{`
         @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
         @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      `}</style>
    </div>
  );
}
