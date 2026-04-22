'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Play, CheckCircle, Clock, Star, ChevronRight, Target, ArrowRight, Zap, Users, Cpu, Shield, Globe, Award, Timer, Briefcase } from 'lucide-react'
import Image from 'next/image'

// ─── Learning Catalog ────────────────────────────────────
const COURSES = [
  {
    id: 1, title: 'Finance for Operations Managers',
    provider: 'Hertz L&D', duration: '3 weeks', hrs: 15, level: 'Intermediate',
    skills: ['P&L Ownership', 'Budget Management'], category: 'Finance',
    targetRole: 'Regional Operations Director', match: 97, progress: 0,
    enrolled: false, recommended: true, desc: 'Build essential financial literacy for senior ops roles — covering P&L accountability, budget cycles, and cost-centre management.',
    color: '#3B82F6',
  },
  {
    id: 2, title: 'Enterprise Reporting with Power BI',
    provider: 'Microsoft Learn', duration: '2 weeks', hrs: 10, level: 'Beginner',
    skills: ['Enterprise Reporting', 'Data Analysis'], category: 'Analytics',
    targetRole: 'Regional Operations Director', match: 89, progress: 55,
    enrolled: true, recommended: true, desc: 'Create executive-level dashboards and reports using Power BI. Directly closes the Enterprise Reporting skill gap.',
    color: '#F59E0B',
  },
  {
    id: 3, title: 'inTouched Fleet Management Basics',
    provider: 'Hertz L&D', duration: '1 week', hrs: 5, level: 'Beginner',
    skills: ['Fleet Systems (inTouched)', 'Fleet Analytics'], category: 'Fleet Tech',
    targetRole: 'Fleet Operations Manager', match: 84, progress: 0,
    enrolled: false, recommended: true, desc: 'Hands-on introduction to the inTouched fleet management system used across all Hertz branches.',
    color: '#22C55E',
  },
  {
    id: 4, title: 'Executive Presence & Leadership Communication',
    provider: 'Hertz L&D', duration: '2 weeks', hrs: 8, level: 'Advanced',
    skills: ['Stakeholder Communication', 'Performance Coaching'], category: 'Leadership',
    targetRole: 'Regional Operations Director', match: 77, progress: 100,
    enrolled: true, recommended: false, desc: 'Communication strategies for senior leaders — structured storytelling, influencing without authority, and executive-level presentation.',
    color: '#8B5CF6',
  },
  {
    id: 5, title: 'Data-Driven Operations Management',
    provider: 'Coursera', duration: '4 weeks', hrs: 20, level: 'Intermediate',
    skills: ['Data Analysis', 'Workforce Analytics', 'Enterprise Reporting'], category: 'Analytics',
    targetRole: 'Regional Operations Director', match: 82, progress: 20,
    enrolled: true, recommended: true, desc: 'Apply data science techniques to operational decisions — from utilisation metrics to demand forecasting.',
    color: '#14B8A6',
  },
  {
    id: 6, title: 'AI Tools for Fleet & Operations Leaders',
    provider: 'Hertz Innovation Lab', duration: '1 week', hrs: 4, level: 'Beginner',
    skills: ['AI-Assisted Fleet Ops', 'Digital Transformation'], category: 'Emerging',
    targetRole: 'Future-Ready Leader', match: 71, progress: 0,
    enrolled: false, recommended: false, desc: 'Introduction to AI-assisted decision-making tools now deployed across Hertz fleet and operations teams.',
    color: '#EC4899',
  },
]

const LEARNING_PATHS = [
  {
    name: 'Operations Director Readiness', courses: 3, duration: '8 weeks', progress: 28,
    skills: ['P&L Ownership', 'Enterprise Reporting', 'Fleet Systems'],
    color: '#3B82F6', targetRole: 'Regional Operations Director',
  },
  {
    name: 'Fleet Leadership Track', courses: 2, duration: '3 weeks', progress: 0,
    skills: ['inTouched', 'Fleet Analytics', 'Fleet Mgmt'],
    color: '#EC4899', targetRole: 'Fleet Operations Manager',
  },
]

export default function LearnPage() {
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState<'catalog' | 'paths' | 'vacancies'>('catalog')
  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))]
  const filtered = filter === 'All' ? COURSES : COURSES.filter(c => c.category === filter)
  const enrolled = COURSES.filter(c => c.enrolled && c.progress < 100)
  const recommended = COURSES.filter(c => c.recommended && !c.enrolled)

  return (
    <main style={{ background: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem', overflowX: 'hidden' }}>
      
      {/* Header */}
      <div style={{ background: 'radial-gradient(circle at 0% 0%, #1e293b 0%, #0f172a 100%)', padding: '100px 0 140px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3B82F6', boxShadow: '0 0 15px #3B82F6' }}></div>
             <p style={{ color: '#3B82F6', fontSize: 13, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0 }}>Knowledge Simulation Core</p>
          </div>
          <h1 style={{ color: '#fff', fontSize: 72, fontWeight: 1000, letterSpacing: '-0.04em', margin: '0 0 12px', lineHeight: 0.9 }}>
            Learning <br /> <span style={{ background: 'linear-gradient(90deg, #3B82F6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Marketplace</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 20, maxWidth: 600, fontWeight: 600, letterSpacing: '0.01em' }}>Precision-engineered courses and paths to close your skill gaps for your next high-performance move.</p>
        </div>
      </div>

      {/* Analytics Status Bar */}
      <div style={{ marginTop: -60, position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ background: '#fff', borderRadius: 32, padding: '32px 40px', border: '1px solid #E2E8F0', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.12)', display: 'flex', gap: 60, alignItems: 'center' }}>
             <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Active Learning ECU</p>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#3B82F6' }}>{enrolled.length} SYSTEMS ACTIVE</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                   {COURSES.map((_, i) => (
                      <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < enrolled.length ? '#3B82F6' : '#F1F5F9' }}></div>
                   ))}
                </div>
             </div>
             <div style={{ height: 40, width: 1, background: '#E2E8F0' }}></div>
             <div style={{ display: 'flex', gap: 40 }}>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 4 }}>Skill Gap %</p>
                   <p style={{ fontSize: 22, fontWeight: 1000, color: '#1E293B', margin: 0 }}>24%</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 4 }}>Certified</p>
                   <p style={{ fontSize: 22, fontWeight: 1000, color: '#1B9C85', margin: 0 }}>08</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 4 }}>Goal Sync</p>
                   <div style={{ padding: '4px 10px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: 20, color: '#EC4899', fontSize: 11, fontWeight: 950 }}>OPTIMIZED</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '80px' }}>
        {/* Navigation & Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 60 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {categories.map(c => (
              <button 
                key={c} 
                onClick={() => setFilter(c)} 
                style={{ 
                  padding: '12px 24px', 
                  borderRadius: 14, 
                  border: filter === c ? '2px solid #0F172A' : '1px solid #E5E7EB', 
                  background: filter === c ? '#0F172A' : '#fff', 
                  color: filter === c ? '#fff' : '#475569', 
                  fontWeight: 800, 
                  fontSize: 14, 
                  cursor: 'pointer', 
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div style={{ background: '#F1F5F9', padding: 6, borderRadius: 16, display: 'flex', gap: 4 }}>
            {(['catalog', 'paths', 'vacancies'] as const).map(v => (
              <button 
                key={v} 
                onClick={() => setView(v)} 
                style={{ 
                  padding: '10px 20px', 
                  borderRadius: 12, 
                  border: 'none', 
                  background: view === v ? '#fff' : 'transparent', 
                  color: view === v ? '#1E293B' : '#64748B', 
                  fontWeight: 850, 
                  fontSize: 13, 
                  cursor: 'pointer', 
                  textTransform: 'uppercase'
                }}
              >
                {v === 'catalog' ? 'Courses' : v === 'paths' ? 'Pathways' : 'Vacancies'}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog */}
        {view === 'catalog' && (
          <div style={{ marginBottom: 100 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
               <div style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', padding: 10, borderRadius: 12, color: '#fff' }}><Zap size={20} /></div>
               <h2 style={{ fontWeight: 1000, fontSize: 32, color: '#1E293B', margin: 0, textTransform: 'uppercase' }}>For Your <span style={{ color: '#3B82F6' }}>Simulation</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {filtered.map(c => <CourseCard key={c.id} c={c} highlight={recommended.some(r => r.id === c.id)} />)}
            </div>
          </div>
        )}

        {/* Pathways */}
        {view === 'paths' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {LEARNING_PATHS.map(path => (
              <div key={path.name} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 40, padding: 48, boxShadow: '0 30px 60px -12px rgba(0,0,0,0.08)', display: 'flex', gap: 48, alignItems: 'center' }}>
                <div style={{ width: 240, height: 240, borderRadius: 32, background: `linear-gradient(135deg, ${path.color}11, ${path.color}22)`, border: `1px solid ${path.color}11`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 44, fontWeight: 1000, color: path.color, margin: 0 }}>{path.progress}%</p>
                      <p style={{ fontSize: 11, fontWeight: 950, color: '#94A3B8', textTransform: 'uppercase' }}>SYNC</p>
                   </div>
                </div>
                <div style={{ flex: 1 }}>
                   <h3 style={{ fontWeight: 1000, fontSize: 36, color: '#1E293B', margin: '0 0 8px' }}>{path.name}</h3>
                   <p style={{ fontSize: 18, color: '#64748B', fontWeight: 600, margin: '0 0 24px' }}>Targeting <strong style={{ color: '#1E293B' }}>{path.targetRole}</strong></p>
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
                      {path.skills.map(s => (
                        <span key={s} style={{ background: '#F8FAFC', color: '#1E293B', border: '1px solid #E2E8F0', fontSize: 13, fontWeight: 800, padding: '8px 16px', borderRadius: 12 }}>{s}</span>
                      ))}
                   </div>
                   <button style={{ background: '#1E293B', color: '#fff', border: 'none', borderRadius: 18, padding: '16px 40px', fontWeight: 950, fontSize: 16, cursor: 'pointer' }}>
                     {path.progress > 0 ? 'RESUME SIMULATION' : 'START SIMULATION'}
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Vacancies */}
        {view === 'vacancies' && (
          <div style={{ marginBottom: 100 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
               <div style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', padding: 10, borderRadius: 12, color: '#fff' }}><Briefcase size={20} /></div>
               <h2 style={{ fontWeight: 1000, fontSize: 32, color: '#1E293B', margin: 0, textTransform: 'uppercase' }}>Live <span style={{ color: '#F59E0B' }}>Vacancies</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[
                { id: "38633", title: "Automotive Sales Consultant", category: "Sales", location: "Morrow, GA, US", color: "#F59E0B" },
                { id: "39289", title: "Manager Trainee", category: "Leadership", location: "Yonkers, NY, US", color: "#3B82F6" },
                { id: "39616", title: "Product Owner", category: "Technology", location: "Atlanta, GA, US", color: "#EC4899" },
                { id: "39268", title: "Customer Service Associate", category: "Customer Service", location: "Eugene, OR, US", color: "#22C55E" },
                { id: "39547", title: "Vehicle Operations Manager", category: "Management", location: "Memphis, TN, US", color: "#8B5CF6" },
                { id: "39632", title: "Manager Trainee", category: "Leadership", location: "O Fallon, IL, US", color: "#3B82F6" }
              ].map(job => (
                <div key={job.id} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 40, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 50px rgba(0,0,0,0.04)', minHeight: 280 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                         <div style={{ width: 10, height: 10, borderRadius: '50%', background: job.color }}></div>
                         <span style={{ color: '#94A3B8', fontSize: 11, fontWeight: 950, textTransform: 'uppercase' }}>{job.category}</span>
                      </div>
                      <span style={{ background: '#FFFBEB', color: '#F59E0B', fontSize: 11, fontWeight: 950, padding: '6px 12px', borderRadius: 12 }}>NEW ROLE</span>
                    </div>
                    <h3 style={{ fontWeight: 1000, fontSize: 22, color: '#1E293B', margin: '0 0 12px', lineHeight: 1.2 }}>{job.title}</h3>
                    <p style={{ fontSize: 14, color: '#64748B', fontWeight: 600, margin: 0 }}>📍 {job.location}</p>
                  </div>
                  <Link href="/jobs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#1E293B', color: '#fff', border: 'none', borderRadius: 20, padding: '16px', fontWeight: 950, fontSize: 14, textDecoration: 'none', marginTop: 24 }}>
                    VIEW DETAILS <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 60 }}>
               <Link href="/jobs" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#1E293B', fontWeight: 1000, fontSize: 16, textDecoration: 'none', borderBottom: '2px solid #F59E0B', paddingBottom: 4 }}>
                  EXPLORE ALL 54 VACANCIES <ChevronRight size={20} />
               </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function CourseCard({ c, highlight }: { c: any; highlight?: boolean }) {
  const [enrolled, setEnrolled] = useState(c.enrolled)
  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 40, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: highlight ? '0 40px 100px -20px rgba(59, 130, 246, 0.15)' : '0 20px 50px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden', minHeight: 480 }}>
      {highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg, #3B82F6, #EC4899)' }} />}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
             <div style={{ width: 10, height: 10, borderRadius: '50%', background: c.color }}></div>
             <span style={{ color: '#94A3B8', fontSize: 11, fontWeight: 950, textTransform: 'uppercase' }}>{c.category}</span>
          </div>
          <span style={{ background: '#F1F5F9', color: '#64748B', fontSize: 11, fontWeight: 950, padding: '6px 12px', borderRadius: 12 }}>{c.level}</span>
        </div>
        <h3 style={{ fontWeight: 1000, fontSize: 24, color: '#1E293B', margin: '0 0 16px', lineHeight: 1.1 }}>{c.title}</h3>
        <p style={{ fontSize: 15, color: '#64748B', margin: '0 0 24px', lineHeight: 1.6, fontWeight: 600 }}>{c.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
          {c.skills.map((s: string) => (
            <span key={s} style={{ background: `${c.color}08`, color: c.color, fontSize: 12, fontWeight: 800, padding: '6px 14px', borderRadius: 10, border: `1px solid ${c.color}11` }}>{s}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 20, marginBottom: enrolled ? 32 : 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Timer size={16} color="#94A3B8" /><span style={{ fontSize: 13, color: '#64748B', fontWeight: 800 }}>{c.hrs}HRS</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Target size={16} color="#3B82F6" /><span style={{ fontSize: 13, color: '#3B82F6', fontWeight: 950 }}>{c.match}%</span></div>
        </div>
        {enrolled && c.progress > 0 && c.progress < 100 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: '#94A3B8', fontWeight: 950 }}>PROGRESS</span>
              <span style={{ fontSize: 11, fontWeight: 1000, color: c.color }}>{c.progress}%</span>
            </div>
            <div style={{ height: 6, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${c.progress}%`, background: c.color, borderRadius: 99 }} />
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex' }}>
        {c.progress === 100 ? <button style={{ flex: 1, background: '#22C55E', color: '#fff', border: 'none', borderRadius: 20, padding: '16px', fontWeight: 950 }}>COMPLETED</button> : enrolled ? <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#1E293B', color: '#fff', border: 'none', borderRadius: 20, padding: '16px', fontWeight: 950 }}><Play size={16} /> RESUME</button> : <button onClick={() => setEnrolled(true)} style={{ flex: 1, background: highlight ? '#3B82F6' : '#fff', color: highlight ? '#fff' : '#1E293B', border: highlight ? 'none' : '2px solid #E2E8F0', borderRadius: 20, padding: '16px', fontWeight: 950 }}>ENROLL</button>}
      </div>
    </div>
  )
}
