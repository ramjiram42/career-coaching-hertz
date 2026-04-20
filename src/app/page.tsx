'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Heart, ChevronRight, Briefcase, Target, Star } from 'lucide-react'
import { ResumeUploadSection } from '@/components/ResumeUpload'

const journeyCards = [
  { title: 'Fleet Operations Coordinator', vertical: 'Fleet Management', topColor: '#2563EB', bottomBadge: 'HIGH MATCH', bottomBg: 'rgba(37,99,235,0.05)', bottomText: '#2563EB', img: '🚗' },
  { title: 'HR Learning Program Coordinator', vertical: 'People Development', topColor: '#FFD100', bottomBadge: 'FUTURE MOVE', bottomBg: 'rgba(255,209,0,0.1)', bottomText: '#B45309', img: '👥' },
  { title: 'Operations Supervisor', vertical: 'Core Operations', topColor: '#2563EB', bottomBadge: 'FAST TRACK', bottomBg: 'rgba(37,99,235,0.05)', bottomText: '#2563EB', img: '📊' },
  { title: 'Technology Program Coordinator', vertical: 'Tech & Digital', topColor: '#FFD100', bottomBadge: 'WILD CARD', bottomBg: 'rgba(255,209,0,0.1)', bottomText: '#B45309', img: '💻' },
]

const careerPaths = [
  {
    badge: 'Desired path',
    badgeBg: '#2563EB',
    steps: '5',
    label: 'Based on your Desired Role',
    target: 'Regional Operations Director',
    bg: '#fff',
    highlight: false,
    roles: [
      { title: 'Operations Supervisor', skills: 11, total: 16, leadership: true },
      { title: 'Area Operations Manager', skills: null, extra: null },
      { title: 'Regional Operations Director', skills: null, final: true },
    ],
  },
  {
    badge: 'Popular path',
    badgeBg: '#10B981',
    steps: '6',
    label: 'Trending among Hertz employees like Ram',
    target: 'Fleet Operations Leader',
    bg: '#fff',
    highlight: false,
    roles: [
      { title: 'Fleet Operations Coordinator', skills: 9, total: 14, leadership: true },
      { title: 'Senior Fleet Manager', skills: null, extra: '+1 role' },
      { title: 'Regional Fleet Leader', skills: null, final: true },
    ],
  },
  {
    badge: 'Promoted Lane',
    badgeBg: '#FFD100',
    steps: '5',
    label: 'Recommended by your manager',
    target: 'Enterprise Operations Executive',
    bg: '#FFFBEB',
    highlight: true,
    roles: [
      { title: 'Operations Supervisor', skills: 11, total: 16, leadership: true },
      { title: 'Enterprise Operations Lead', skills: null, extra: '+2 roles' },
      { title: 'VP Operations', skills: null, final: true },
    ],
  },
]

export default function HomePage() {
  return (
    <main style={{ background: '#F9FAFB', minHeight: '100vh', color: '#0F172A', paddingTop: 140 }}>
      
      {/* ── HERO BANNER ─────────────────────────────── */}
      <div style={{ position: 'relative', height: 300, overflow: 'hidden', margin: '0 40px', borderRadius: 32, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
        <Image src="/hero-banner.png" alt="Hertz fleet" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)' }} />

        <div style={{ position: 'absolute', left: '4rem', top: '50%', transform: 'translateY(-50%)' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 1000, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>
            Opportunities<br /><span style={{ color: '#2563EB' }}>Curated</span> For You.
          </h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/your-move" style={{ background: '#2563EB', color: '#fff', padding: '1rem 2rem', borderRadius: 12, fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', boxShadow: '0 10px 30px rgba(37,99,235,0.2)' }}>
              Explore Journeys
            </Link>
            <Link href="/jobs" style={{ background: '#fff', color: '#0F172A', padding: '1rem 2rem', borderRadius: 12, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              View Vacancies
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px' }}>
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               {/* ── RESUME DASHBOARD ────────────────────────── */}
               <ResumeUploadSection />

               {/* ── PATH EXPLORER ────────────────────────── */}
               <section>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                     <div>
                        <h3 style={{ fontSize: 24, fontWeight: 1000, color: '#0F172A', letterSpacing: '-0.01em', margin: 0 }}>Strategic Trajectories</h3>
                        <p style={{ color: '#64748B', fontSize: 14, fontWeight: 500, marginTop: 4 }}>Curated paths to executive leadership at Hertz.</p>
                     </div>
                     <button style={{ padding: '10px 20px', borderRadius: 12, border: '1px solid #E2E8F0', background: '#fff', fontSize: 13, fontWeight: 700, color: '#0F172A', cursor: 'pointer' }}>
                        Manage Preferences
                     </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {careerPaths.map((path, idx) => (
                      <div key={idx} style={{ 
                        background: path.bg, 
                        border: path.highlight ? '2px solid #FFD100' : '1px solid #E2E8F0', 
                        borderRadius: 24, 
                        padding: 32,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        boxShadow: path.highlight ? '0 20px 40px rgba(255,209,0,0.1)' : '0 10px 30px rgba(0,0,0,0.02)'
                      }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: 12 }}>
                               <span style={{ background: path.badgeBg, color: '#fff', padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 900, textTransform: 'uppercase' }}>{path.badge}</span>
                               <span style={{ background: '#F1F5F9', color: '#475569', padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 900 }}>{path.steps} NODES</span>
                            </div>
                            <p style={{ margin: 0, fontSize: 14, color: '#64748B', fontWeight: 600 }}>{path.label}</p>
                         </div>

                         <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                            {path.roles.map((role, ridx) => (
                              <div key={ridx} style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1 }}>
                                 <div style={{ 
                                   flex: 1, 
                                   background: role.final ? 'linear-gradient(135deg, #2563EB, #1D4ED8)' : '#fff', 
                                   border: role.final ? 'none' : '1px solid #E2E8F0',
                                   borderRadius: 16,
                                   padding: 20,
                                   boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                                   position: 'relative'
                                 }}>
                                    <h4 style={{ fontSize: 14, fontWeight: 900, color: role.final ? '#fff' : '#0F172A', margin: 0, lineHeight: 1.2 }}>{role.title.split(' ').map((w, i) => <span key={i}>{w}<br /></span>)}</h4>
                                    {role.skills && (
                                      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                                         <div style={{ height: 4, flex: 1, background: '#E2E8F0', borderRadius: 2 }}>
                                            <div style={{ width: `${(role.skills / role.total) * 100}%`, height: '100%', background: '#10B981', borderRadius: 2 }} />
                                         </div>
                                         <span style={{ fontSize: 10, fontWeight: 800, color: '#10B981' }}>{role.skills} / {role.total} SKILLS</span>
                                      </div>
                                    )}
                                    {role.final && <Star size={14} color="#FFD100" style={{ position: 'absolute', top: 12, right: 12 }} />}
                                 </div>
                                 {ridx < path.roles.length - 1 && <ChevronRight size={20} color="#CBD5E1" />}
                              </div>
                            ))}
                         </div>
                      </div>
                    ))}
                  </div>
               </section>
            </div>

            {/* ── SIDEBAR: OPEN ROLES ────────────────────────── */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
               <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0F172A', marginBottom: 20 }}>High Velocity Roles</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                     {journeyCards.map((job, jidx) => (
                       <div key={jidx} style={{ padding: '16px', borderRadius: 16, background: '#F8FAFC', border: '1px solid #F1F5F9', cursor: 'pointer', transition: 'all 0.2s' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                             <span style={{ fontSize: 24 }}>{job.img}</span>
                             <button style={{ padding: 8, borderRadius: 8, border: 'none', background: '#fff', color: '#64748B' }}><Heart size={16} /></button>
                          </div>
                          <h4 style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>{job.title}</h4>
                          <p style={{ fontSize: 12, color: '#64748B', fontWeight: 600, marginBottom: 12 }}>{job.vertical}</p>
                          <div style={{ background: job.bottomBg, color: job.bottomText, padding: '4px 10px', borderRadius: 6, fontSize: 10, fontWeight: 900, display: 'inline-block' }}>{job.bottomBadge}</div>
                       </div>
                     ))}
                  </div>
                  <button style={{ width: '100%', padding: '14px', borderRadius: 12, background: '#F1F5F9', border: 'none', color: '#64748B', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 24 }}>
                     View All Openings
                  </button>
               </div>

               <div style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius: 24, padding: 32, color: '#fff', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'rgba(255,209,0,0.1)', borderRadius: '50%' }} />
                  <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12, position: 'relative' }}>AI Pathfinding</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24 }}>Our neural engine has identified 4 new high-compatibility roles since your last login.</p>
                  <button style={{ background: '#FFD100', color: '#0F172A', padding: '12px 24px', borderRadius: 10, fontWeight: 900, border: 'none', fontSize: 13, cursor: 'pointer' }}>
                     Analyze Now
                  </button>
               </div>
            </aside>

         </div>
      </div>
    </main>
  )
}
