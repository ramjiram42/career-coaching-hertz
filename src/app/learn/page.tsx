'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Play, CheckCircle, Clock, Star, ChevronRight, Target, ArrowRight, Zap, Users } from 'lucide-react'

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
    color: '#FFD100', targetRole: 'Regional Operations Director',
  },
  {
    name: 'Fleet Leadership Track', courses: 2, duration: '3 weeks', progress: 0,
    skills: ['inTouched', 'Fleet Analytics', 'Fleet Mgmt'],
    color: '#3B82F6', targetRole: 'Fleet Operations Manager',
  },
]

const categoryColors: Record<string, string> = {
  Finance: '#3B82F6', Analytics: '#F59E0B', 'Fleet Tech': '#22C55E',
  Leadership: '#8B5CF6', Emerging: '#EC4899', All: '#000',
}

export default function LearnPage() {
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState<'catalog' | 'paths'>('catalog')
  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))]
  const filtered = filter === 'All' ? COURSES : COURSES.filter(c => c.category === filter)
  const enrolled = COURSES.filter(c => c.enrolled && c.progress < 100)
  const recommended = COURSES.filter(c => c.recommended && !c.enrolled)

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '4rem' }}>

      {/* Header */}
      <div style={{ background: '#000', padding: '2.5rem 0', borderBottom: '4px solid #FFD100' }}>
        <div className="container">
          <p style={{ color: '#FFD100', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.5rem' }}>Learning & Development</p>
          <h1 style={{ color: '#fff', fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 0.4rem' }}>Learning Marketplace</h1>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Courses, paths, and gigs connected to your skill gaps and target roles</p>
        </div>
      </div>

      {/* Progress Banner */}
      {enrolled.length > 0 && (
        <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', padding: '1.25rem 0' }}>
          <div className="container">
            <p style={{ fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', margin: '0 0 0.875rem' }}>In Progress ({enrolled.length})</p>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
              {enrolled.map(c => (
                <div key={c.id} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 14, padding: '0.875rem 1.25rem', minWidth: 260, flexShrink: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#111827' }}>{c.title}</span>
                    <span style={{ fontWeight: 900, color: c.color, fontSize: '0.85rem' }}>{c.progress}%</span>
                  </div>
                  <div style={{ height: 5, background: '#E5E7EB', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${c.progress}%`, background: c.color, borderRadius: 99 }} />
                  </div>
                  <p style={{ fontSize: '0.7rem', color: '#9CA3AF', margin: '0.4rem 0 0', fontWeight: 600 }}>{c.provider} · {c.hrs}hrs remaining</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container" style={{ paddingTop: '2rem' }}>

        {/* View toggle + category filter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {categories.map(c => {
              const col = categoryColors[c] || '#000'
              return (
                <button key={c} onClick={() => setFilter(c)} style={{ padding: '0.4rem 1rem', borderRadius: 999, border: '1.5px solid', borderColor: filter === c ? col : '#E5E7EB', background: filter === c ? col : '#fff', color: filter === c ? (c === 'All' ? '#FFD100' : '#fff') : '#374151', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', transition: 'all 0.15s' }}>{c}</button>
              )
            })}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {(['catalog', 'paths'] as const).map(v => (
              <button key={v} onClick={() => setView(v)} style={{ padding: '0.5rem 1.1rem', borderRadius: 999, border: '1.5px solid #E5E7EB', background: view === v ? '#000' : '#fff', color: view === v ? '#FFD100' : '#374151', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {v === 'catalog' ? 'Course Catalog' : 'Learning Paths'}
              </button>
            ))}
          </div>
        </div>

        {/* ── RECOMMENDED SECTION ───────────────────────────── */}
        {view === 'catalog' && filter === 'All' && recommended.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Zap size={16} color="#FFD100" />
              <h2 style={{ fontWeight: 900, fontSize: '1rem', color: '#000', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Recommended for Ram</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {recommended.slice(0, 3).map(c => <CourseCard key={c.id} c={c} highlight />)}
            </div>
          </div>
        )}

        {/* ── CATALOG GRID ──────────────────────────────────── */}
        {view === 'catalog' && (
          <div>
            {filter !== 'All' && <h2 style={{ fontWeight: 900, fontSize: '1rem', color: '#000', margin: '0 0 1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{filter} Courses</h2>}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {(filter === 'All' ? COURSES : filtered).map(c => <CourseCard key={c.id} c={c} />)}
            </div>
          </div>
        )}

        {/* ── LEARNING PATHS ────────────────────────────────── */}
        {view === 'paths' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {LEARNING_PATHS.map(path => (
              <div key={path.name} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: path.color, margin: '0 0 0.4rem' }}>Learning Path</p>
                    <h3 style={{ fontWeight: 900, fontSize: '1.25rem', color: '#000', margin: '0 0 0.3rem' }}>{path.name}</h3>
                    <p style={{ fontSize: '0.82rem', color: '#6B7280', margin: 0 }}>Target: <strong style={{ color: '#000' }}>{path.targetRole}</strong> · {path.courses} courses · {path.duration}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 900, color: path.color, margin: 0 }}>{path.progress}%</p>
                    <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>Complete</p>
                  </div>
                </div>
                <div style={{ height: 8, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden', marginBottom: '1.25rem' }}>
                  <div style={{ height: '100%', width: `${path.progress}%`, background: path.color, borderRadius: 99 }} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {path.skills.map(s => (
                    <span key={s} style={{ background: path.color + '18', color: path.color, border: `1px solid ${path.color}33`, fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.7rem', borderRadius: 999 }}>{s}</span>
                  ))}
                </div>
                <button style={{ background: '#000', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.7rem 1.5rem', fontWeight: 900, fontSize: '0.82rem', cursor: 'pointer' }}>
                  {path.progress > 0 ? 'Continue Path' : 'Start Path'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

// ─── Course Card Component ───────────────────────────────
function CourseCard({ c, highlight }: { c: typeof COURSES[0]; highlight?: boolean }) {
  const [enrolled, setEnrolled] = useState(c.enrolled)

  return (
    <div style={{ background: '#fff', border: highlight ? `2px solid ${c.color}40` : '1px solid #E5E7EB', borderRadius: 20, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
      {highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c.color, borderRadius: '20px 20px 0 0' }} />}

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
          <span style={{ background: c.color + '18', color: c.color, fontSize: '0.65rem', fontWeight: 900, padding: '0.2rem 0.65rem', borderRadius: 999, textTransform: 'uppercase' }}>{c.category}</span>
          <span style={{ background: '#F1F5F9', color: '#6B7280', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 999 }}>{c.level}</span>
        </div>

        <h3 style={{ fontWeight: 800, fontSize: '0.95rem', color: '#111827', margin: '0 0 0.5rem', lineHeight: 1.4 }}>{c.title}</h3>
        <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: '0 0 0.75rem', lineHeight: 1.6 }}>{c.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.875rem' }}>
          {c.skills.map(s => (
            <span key={s} style={{ background: '#F9FAFB', color: '#374151', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: 999, border: '1px solid #E5E7EB' }}>{s}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.72rem', color: '#9CA3AF', fontWeight: 600 }}>
          <span>⏱ {c.duration}</span>
          <span>📚 {c.hrs}hrs</span>
          <span>🎯 {c.match}% match</span>
        </div>

        {enrolled && c.progress > 0 && c.progress < 100 && (
          <div style={{ marginBottom: '0.875rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.68rem', color: '#6B7280', fontWeight: 700 }}>Progress</span>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: c.color }}>{c.progress}%</span>
            </div>
            <div style={{ height: 4, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${c.progress}%`, background: c.color, borderRadius: 99 }} />
            </div>
          </div>
        )}

        {c.progress === 100 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
            <CheckCircle size={14} color="#22C55E" />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#22C55E' }}>Completed</span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {c.progress === 100
          ? <button style={{ flex: 1, background: '#DCFCE7', color: '#22C55E', border: 'none', borderRadius: 10, padding: '0.65rem', fontWeight: 900, fontSize: '0.78rem', cursor: 'pointer' }}>✓ Done · View Certificate</button>
          : enrolled
            ? <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', background: c.color, color: '#fff', border: 'none', borderRadius: 10, padding: '0.65rem', fontWeight: 900, fontSize: '0.78rem', cursor: 'pointer' }}>
                <Play size={13} /> Continue
              </button>
            : <button onClick={() => setEnrolled(true)} style={{ flex: 1, background: '#000', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.65rem', fontWeight: 900, fontSize: '0.78rem', cursor: 'pointer' }}>
                Enroll Now
              </button>
        }
      </div>
    </div>
  )
}
