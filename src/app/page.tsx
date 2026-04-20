'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, ChevronRight, Star, Users, Trophy } from 'lucide-react'
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
    roles: [
      { title: 'Operations Supervisor', completed: true },
      { title: 'Area Manager', completed: false },
      { title: 'Regional Director', final: true },
    ],
  },
  {
    badge: 'Popular Path',
    badgeBg: '#9333EA',
    roles: [
      { title: 'Fleet Coordinator', completed: true },
      { title: 'Senior Manager', completed: false },
      { title: 'Fleet Leader', final: true },
    ],
  }
]

export default function HomePage() {
  return (
    <main style={{ background: '#030B17', minHeight: '100vh', color: '#fff', paddingTop: 140 }}>
      
      {/* ── HERO BANNER ─────────────────────────────── */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden', margin: '0 40px', borderRadius: 32 }}>
        <Image src="/hero-banner.png" alt="Hertz fleet" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(3,11,23,0.9) 0%, rgba(3,11,23,0.4) 60%, transparent 100%)' }} />

        <div style={{ position: 'absolute', left: '4rem', top: '50%', transform: 'translateY(-50%)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0 }}>
            Opportunities<br /><span style={{ color: '#2563EB' }}>Curated</span> For You.
          </h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/your-move" style={{ background: 'linear-gradient(90deg, #2563EB, #9333EA)', color: '#fff', padding: '1rem 2rem', borderRadius: 12, fontWeight: 900, textDecoration: 'none' }}>
              Explore Journeys
            </Link>
            <Link href="/jobs" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '1rem 2rem', borderRadius: 12, fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
              View Vacancies
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px' }}>
         <div style={{ display: 'grid', gridTemplateColumns: '800px 1fr', gap: 40 }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               <ResumeUploadSection />

               <section>
                  <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 24 }}>Strategic Trajectories</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                     {careerPaths.map((path, idx) => (
                        <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, padding: 32 }}>
                           <span style={{ background: path.badgeBg, color: '#fff', padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 900, marginBottom: 20, display: 'inline-block' }}>{path.badge}</span>
                           <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                              {path.roles.map((role, ridx) => (
                                 <div key={ridx} style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 16 }}>
                                    <div style={{ 
                                       flex: 1, 
                                       background: role.completed ? 'rgba(255,255,255,0.03)' : (role.final ? 'linear-gradient(135deg, #2563EB, #9333EA)' : 'rgba(255,255,255,0.01)'),
                                       border: '1px solid rgba(255,255,255,0.05)',
                                       borderRadius: 16,
                                       padding: 20,
                                       opacity: role.completed ? 0.4 : 1
                                    }}>
                                       <h4 style={{ fontSize: 14, fontWeight: 900, color: '#fff', margin: 0 }}>{role.title}</h4>
                                    </div>
                                    {ridx < path.roles.length - 1 && <ChevronRight size={16} color="rgba(255,255,255,0.1)" />}
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, padding: 28 }}>
                     <h3 style={{ fontSize: 18, fontWeight: 900, color: '#fff', marginBottom: 20 }}>Skills Mastery</h3>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {[
                           { label: 'Fleet Management', val: 92 },
                           { label: 'Operational Leadership', val: 84 }
                        ].map((s, i) => (
                           <div key={i}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                 <span style={{ fontSize: 12, fontWeight: 800 }}>{s.label}</span>
                                 <span style={{ fontSize: 12, fontWeight: 900, color: '#2563EB' }}>{s.val}%</span>
                              </div>
                              <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}>
                                 <div style={{ width: `${s.val}%`, height: '100%', background: '#2563EB', borderRadius: 3 }} />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, #2563EB, #9333EA)', borderRadius: 24, padding: 28, color: '#fff' }}>
                     <Trophy size={32} style={{ marginBottom: 12 }} />
                     <h3 style={{ fontSize: 18, fontWeight: 900 }}>Top 5% Performer</h3>
                     <p style={{ fontSize: 13, marginTop: 8, opacity: 0.8 }}>You are leading the Solution Architect cohort at Hertz France.</p>
                  </div>
               </section>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, padding: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: '#fff', marginBottom: 20 }}>High Velocity Roles</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                     {journeyCards.map((job, idx) => (
                        <div key={idx} style={{ padding: 16, background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                           <h4 style={{ fontSize: 14, fontWeight: 800, margin: 0 }}>{job.title}</h4>
                           <p style={{ fontSize: 11, fontWeight: 900, color: '#2563EB', marginTop: 12 }}>{job.match}% MATCH</p>
                        </div>
                     ))}
                  </div>
               </div>
            </aside>
         </div>
      </div>
    </main>
  )
}
