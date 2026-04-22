'use client';
import { Target, Flag, Award, CheckCircle2, ChevronRight, TrendingUp, Trophy, Star } from 'lucide-react';

const MILESTONES_DATA = [
  { id: 1, title: 'Strategic Operations Phase 1', status: 'Completed', date: 'Oct 2025', desc: 'Mastery of fleet utilization analytics and budget planning.', color: '#10B981', icon: <CheckCircle2 /> },
  { id: 2, title: 'Leadership Certification', status: 'In Progress', date: 'Expected Dec 2025', desc: 'Advanced management training for Regional Director eligibility.', color: '#3B82F6', icon: <Flag /> },
  { id: 3, title: 'Digital Transformation Champion', status: 'Upcoming', date: 'Jan 2026', desc: 'Implementation of AI-driven reporting systems in local branch.', color: '#F59E0B', icon: <Target /> },
];

export default function MilestonesPage() {
  return (
    <main style={{ background: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div style={{ background: 'radial-gradient(circle at 100% 100%, #172554 0%, #0F172A 100%)', padding: '100px 0 140px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 15px #F59E0B' }}></div>
             <p style={{ color: '#F59E0B', fontSize: 13, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0 }}>Progress Simulation Tracking</p>
          </div>
          <h1 style={{ color: '#fff', fontSize: 72, fontWeight: 1000, letterSpacing: '-0.04em', margin: '0 0 12px', lineHeight: 0.9 }}>
            Career <br /> <span style={{ background: 'linear-gradient(90deg, #F59E0B, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Milestones</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 20, maxWidth: 600, fontWeight: 600, letterSpacing: '0.01em' }}>Visualize and track your strategic achievements as you progress toward your target role.</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: -60 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32 }}>
           
           <div style={{ background: '#fff', borderRadius: 32, padding: 48, boxShadow: '0 40px 100px -20px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
                 <h2 style={{ fontWeight: 1000, fontSize: 28, color: '#1E293B' }}>Achievement Timeline</h2>
                 <button style={{ padding: '12px 24px', borderRadius: 14, border: '1px solid #E2E8F0', background: '#F8FAFC', color: '#1E293B', fontWeight: 900, fontSize: 13 }}>AUDIT PATH</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
                 <div style={{ position: 'absolute', left: 24, top: 24, bottom: 24, width: 2, background: '#F1F5F9' }}></div>
                 {MILESTONES_DATA.map((ms, idx) => (
                   <div key={ms.id} style={{ display: 'flex', gap: 32, padding: '32px 0', position: 'relative' }}>
                      <div style={{ width: 50, height: 50, borderRadius: 16, background: idx === 0 ? ms.color : '#fff', border: `2px solid ${ms.color}`, color: idx === 0 ? '#fff' : ms.color, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                         {ms.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                            <h3 style={{ fontWeight: 1000, fontSize: 20, color: '#1E293B', margin: 0 }}>{ms.title}</h3>
                            <span style={{ fontSize: 13, fontWeight: 800, color: ms.color }}>{ms.status.toUpperCase()}</span>
                         </div>
                         <p style={{ color: '#64748B', fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{ms.date}</p>
                         <p style={{ color: '#94A3B8', fontSize: 15, margin: 0, lineHeight: 1.6 }}>{ms.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ background: 'linear-gradient(135deg, #1E293B, #0F172A)', borderRadius: 32, padding: 40, border: '1px solid rgba(255,255,255,0.05)', color: '#fff' }}>
                 <Trophy size={40} color="#F59E0B" style={{ marginBottom: 24 }} />
                 <h3 style={{ fontWeight: 1000, fontSize: 24, margin: '0 0 12px' }}>Role Status</h3>
                 <p style={{ color: '#94A3B8', fontSize: 15, fontWeight: 600, lineHeight: 1.6, marginBottom: 32 }}>You are 3 milestones away from qualifying for the <strong style={{ color: '#fff' }}>Regional Operations Director</strong> role.</p>
                 <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden', marginBottom: 12 }}>
                    <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #F59E0B, #EC4899)' }}></div>
                 </div>
                 <p style={{ fontSize: 13, fontWeight: 900, color: '#F59E0B' }}>65% ELIGIBILITY SYNC</p>
              </div>

              <div style={{ background: '#fff', borderRadius: 32, padding: 40, border: '1px solid #E2E8F0', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
                 <h4 style={{ fontWeight: 1000, fontSize: 18, color: '#1E293B', margin: '0 0 20px' }}>Next Badge</h4>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <Award size={30} color="#CBD5E1" />
                    </div>
                    <div>
                       <p style={{ fontWeight: 900, color: '#1E293B', margin: 0 }}>System Guru</p>
                       <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600 }}>Complete 3 inTouched modules</p>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </main>
  );
}
