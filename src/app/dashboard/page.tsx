'use client';

import { CheckCircle, Clock, BookOpen, Star, User, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { ReadinessChart } from './RechartsClient'

// Static mock data
const MODULES = [
  { id: '1', title: 'P&L Fundamentals for Operations Managers',        description: 'Revenue, cost centres, and margin analysis.',    estimatedHours: 12, orderIndex: 0, status: 'COMPLETED' },
  { id: '2', title: 'Fleet Systems & inTouched Platform',              description: 'Hands-on mastery of Hertz fleet management tools.', estimatedHours: 8,  orderIndex: 1, status: 'IN_PROGRESS' },
  { id: '3', title: 'Regional Leadership & Stakeholder Management',    description: 'Leading distributed teams and executive comms.',  estimatedHours: 10, orderIndex: 2, status: 'NOT_STARTED' },
  { id: '4', title: 'Enterprise Analytics & Performance Reporting',    description: 'Power BI dashboards and KPI tracking at scale.',  estimatedHours: 10, orderIndex: 3, status: 'NOT_STARTED' },
]

export default function DashboardPage() {
  const completedModules = MODULES.filter(m => m.status === 'COMPLETED').length
  const totalModules = MODULES.length
  const learningScore = Math.round((completedModules / totalModules) * 100)
  const readinessScore = 73

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* Header Banner */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FFB800', marginBottom: '0.4rem' }}>Employee Dashboard</p>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Welcome Back, Ram</h1>
              <p style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: 600 }}>
                 RPA Solution Architect — <span style={{ color: '#FFB800' }}>Hertz Technology</span>
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#FFD100', letterSpacing: '-0.04em', lineHeight: 1 }}>{readinessScore}%</div>
              <p style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginTop: '0.25rem' }}>Current Path Readiness</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
        <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
          {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 10 }}><BookOpen size={18} /></div>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000' }}>Learning Progress</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: `${learningScore}%` }} />
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#9CA3AF' }}>{completedModules} / {totalModules} modules complete</p>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 10, background: '#DCFCE7' }}><Star size={18} color="#16A34A" /></div>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000' }}>Mentorship</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: '40%', background: '#16A34A' }} />
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#9CA3AF' }}>2 of 5 planned sessions done</p>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 10, background: '#EFF6FF' }}><Clock size={18} color="#3B82F6" /></div>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000' }}>Target Timeline</span>
                </div>
                <p style={{ fontWeight: 900, fontSize: '2rem', color: '#000', letterSpacing: '-0.04em', lineHeight: 1 }}>~4 Mo.</p>
                <p style={{ marginTop: '0.25rem', fontSize: '0.8rem', color: '#9CA3AF' }}>Regional Ops Path</p>
              </div>
            </div>

            {/* Main Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
              {/* Learning Path */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #F1F5F9' }}>Active Learning Path</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {MODULES.map(mod => {
                    const isCompleted = mod.status === 'COMPLETED'
                    const isInProgress = mod.status === 'IN_PROGRESS'
                    return (
                      <div key={mod.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ color: isCompleted ? '#16A34A' : isInProgress ? '#FFD100' : '#D1D5DB', flexShrink: 0, marginTop: 2 }}>
                          {isCompleted ? <CheckCircle size={22} /> : isInProgress ? <Clock size={22} /> : <div style={{ width: 22, height: 22, border: '2px solid #D1D5DB', borderRadius: '50%' }} />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: isCompleted ? '#9CA3AF' : '#111827', textDecoration: isCompleted ? 'line-through' : 'none', marginBottom: '0.2rem' }}>{mod.title}</h4>
                          <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{mod.description}</p>
                        </div>
                        <span style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#6B7280', padding: '0.2rem 0.6rem', borderRadius: 999, fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>{mod.estimatedHours}h</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '1rem' }}>Readiness Breakdown</h3>
                  <div style={{ height: 200 }}>
                    <ReadinessChart learning={Math.round(learningScore * 0.4)} mentor={10} certs={0} />
                  </div>
                </div>

                <div className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '1rem' }}>Top Skill Gaps</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { skill: 'P&L Ownership', status: 'gap' },
                      { skill: 'Fleet Systems', status: 'gap' },
                      { skill: 'Team Leadership', status: 'ok' },
                    ].map(item => (
                      <li key={item.skill} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #F9FAFB' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151' }}>{item.skill}</span>
                        <span style={{ padding: '0.2rem 0.65rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', background: item.status === 'gap' ? '#FEF2F2' : '#F0FDF4', color: item.status === 'gap' ? '#DC2626' : '#16A34A' }}>
                          {item.status === 'gap' ? 'Gap' : 'Matched'}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/skills" style={{ display: 'block', marginTop: '1rem', textAlign: 'center', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: 10, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', color: '#374151', textDecoration: 'none', letterSpacing: '0.08em' }}>
                    View Skill Intelligence
                  </Link>
                </div>

                <div className="card" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#92400E', marginBottom: '0.75rem' }}>Next Mentor Session</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={20} color="#000" /></div>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: '0.95rem', color: '#000', marginBottom: 2 }}>Alice Johnson</p>
                      <p style={{ fontSize: '0.8rem', color: '#92400E', fontWeight: 600 }}>Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                  <Link href="/mentors" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>Prepare Session</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}
