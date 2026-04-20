'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, ChevronRight, Star, Clock, MapPin, Users, Zap, Trophy, Target } from 'lucide-react'
import { ResumeUploadSection } from '@/components/ResumeUpload'

const journeyCards = [
  { title: 'Fleet Operations Coordinator', vertical: 'Fleet Management', match: 94, img: '🚗' },
  { title: 'HR Learning Program Coordinator', vertical: 'People Development', match: 88, img: '👥' },
  { title: 'Operations Supervisor', vertical: 'Core Operations', match: 82, img: '📊' },
]

const careerPaths = [
  {
    badge: 'Strategic Path',
    badgeBg: '#2563EB',
    target: 'Regional Operations Director',
    roles: [
      { title: 'Operations Supervisor', completed: true },
      { title: 'Area Manager', completed: false },
      { title: 'Regional Director', final: true },
    ],
  },
  {
    badge: 'Popular Path',
    badgeBg: '#10B981',
    target: 'Fleet Operations Leader',
    roles: [
      { title: 'Fleet Coordinator', completed: true },
      { title: 'Senior Manager', completed: false },
      { title: 'Fleet Leader', final: true },
    ],
  }
]

export default function HomePage() {
  return (
    <main style={{ background: '#F9FAFB', minHeight: '100vh', color: '#0F172A', paddingTop: 140 }}>
      
      {/* ── HERO BANNER ─────────────────────────────── */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden', margin: '0 40px', borderRadius: 32, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div style={{ position: 'absolute', left: '4rem', top: '50%', transform: 'translateY(-50%)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 1000, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>
            Opportunities<br /><span style={{ color: '#FFD100' }}>Curated</span> For You.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 12, fontWeight: 500 }}>Your professional trajectory at Hertz, accelerated by AI.</p>
           <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/your-move" style={{ background: '#FFD100', color: '#0F172A', padding: '1rem 2rem', borderRadius: 12, fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', boxShadow: '0 10px 30px rgba(255,209,0,0.3)' }}>
              Explore Journeys
            </Link>
            <Link href="/jobs" style={{ background: '#fff', color: '#0F172A', padding: '1rem 2rem', borderRadius: 12, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              View Vacancies
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px' }}>
         <div style={{ display: 'grid', gridTemplateColumns: '800px 1fr', gap: 40, alignItems: 'start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               {/* ── RESUME DASHBOARD ────────────────────────── */}
               <ResumeUploadSection />

               {/* ── STRATEGIC TRAJECTORIES (PATH EXPLORER) ────── */}
               <section>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                     <h3 style={{ fontSize: 24, fontWeight: 1000, color: '#0F172A', margin: 0 }}>Strategic Trajectories</h3>
                     <Link href="/your-move" style={{ color: '#0F172A', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>View Detailed Tree <ArrowRight size={14} style={{ display: 'inline', marginLeft: 4 }} /></Link>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                     {careerPaths.map((path, idx) => (
                        <div key={idx} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 24, padding: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                           <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                              <span style={{ background: path.badgeBg, color: '#0F172A', padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 900 }}>{path.badge}</span>
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                              {path.roles.map((role, ridx) => (
                                 <div key={ridx} style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 16 }}>
                                    <div style={{ 
                                       flex: 1, 
                                       background: role.completed ? '#F8FAFC' : (role.final ? 'linear-gradient(135deg, #0F172A, #1E293B)' : '#fff'),
                                       border: '1px solid #E2E8F0',
                                       borderRadius: 16,
                                       padding: 20,
                                       opacity: role.completed ? 0.6 : 1
                                    }}>
                                       <h4 style={{ fontSize: 14, fontWeight: 900, color: (role.final && !role.completed) ? '#fff' : '#0F172A', margin: 0 }}>{role.title}</h4>
                                       {role.completed && <p style={{ fontSize: 10, color: '#10B981', fontWeight: 800, margin: '4px 0 0' }}>COMPLETED</p>}
                                    </div>
                                    {ridx < path.roles.length - 1 && <ChevronRight size={16} color="#CBD5E1" />}
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── SKILLS PROGRESS (NEW OLD FEATURE RE-ADDED) ── */}
               <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 24, padding: 28 }}>
                     <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0F172A', marginBottom: 20 }}>Skills Mastery</h3>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {[
                           { label: 'Fleet Management', val: 92 },
                           { label: 'Operational Leadership', val: 84 },
                           { label: 'Strategic Planning', val: 76 }
                        ].map((s, i) => (
                           <div key={i}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                 <span style={{ fontSize: 12, fontWeight: 800 }}>{s.label}</span>
                                 <span style={{ fontSize: 12, fontWeight: 900, color: '#0F172A' }}>{s.val}%</span>
                              </div>
                              <div style={{ height: 6, background: '#F1F5F9', borderRadius: 3 }}>
                                 <div style={{ width: `${s.val}%`, height: '100%', background: '#FFD100', borderRadius: 3 }} />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, #FFD100, #F59E0B)', border: 'none', borderRadius: 24, padding: 28, color: '#0F172A' }}>
                     <Trophy size={32} style={{ marginBottom: 12 }} />
                     <h3 style={{ fontSize: 18, fontWeight: 1000, margin: 0 }}>Top 5% Performer</h3>
                     <p style={{ fontSize: 13, fontWeight: 600, marginTop: 8, opacity: 0.9 }}>You are in the top 5% of Solution Architects at Hertz France. Keep it up!</p>
                  </div>
               </section>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               {/* ── HIGH VELOCITY ROLES (SIDEBAR) ────────────── */}
               <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 24, padding: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0F172A', marginBottom: 20 }}>High Velocity Roles</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                     {journeyCards.map((job, idx) => (
                        <div key={idx} style={{ padding: 16, background: '#F8FAFC', borderRadius: 16, border: '1px solid #F1F5F9' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, marginBottom: 12 }}>
                              {job.img} <Heart size={16} color="#CBD5E1" />
                           </div>
                           <h4 style={{ fontSize: 14, fontWeight: 800, margin: 0 }}>{job.title}</h4>
                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                              <span style={{ fontSize: 11, fontWeight: 900, color: '#0F172A', background: '#FFD100', padding: '2px 8px', borderRadius: 4 }}>{job.match}% MATCH</span>
                              <ChevronRight size={14} color="#CBD5E1" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* ── UPCOMING MENTOR SESSIONS (NEW OLD FEATURE) ── */}
               <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 24, padding: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0F172A', marginBottom: 20 }}>Mentor Sessions</h3>
                  <div style={{ padding: 16, background: '#EFF6FF', borderRadius: 16, border: '1px solid #DBEAFE', display: 'flex', gap: 12 }}>
                     <div style={{ width: 44, height: 44, background: '#2563EB', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Users size={20} color="#fff" />
                     </div>
                     <div>
                        <p style={{ fontSize: 13, fontWeight: 900, margin: 0 }}>Sophie Martin</p>
                        <p style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>Regional Director • Tomorrow 10:00</p>
                     </div>
                  </div>
               </div>
            </aside>
         </div>
      </div>
    </main>
  )
}
