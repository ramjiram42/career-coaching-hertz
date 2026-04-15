'use client'

import { useState } from 'react'
import { Users, Briefcase, Zap, BookOpen, TrendingUp, Star, Plus, Edit2, Trash2, CheckCircle, AlertTriangle, BarChart3, ArrowRight } from 'lucide-react'

// ─── Admin Data ──────────────────────────────────────────
const ADOPTION = [
  { label: 'Active Users',        val: '1,247', change: '+12%',  color: '#22C55E', icon: Users },
  { label: 'Internal Moves',      val: '83',    change: '+31%',  color: '#3B82F6', icon: TrendingUp },
  { label: 'Gigs Filled',         val: '214',   change: '+18%',  color: '#F59E0B', icon: Briefcase },
  { label: 'Mentorships Active',  val: '96',    change: '+24%',  color: '#8B5CF6', icon: Star },
]

const TOP_GAPS = [
  { skill: 'P&L & Budget Management',    pct: 71, dept: 'All',    priority: 'Critical' },
  { skill: 'Fleet Systems (inTouched)',   pct: 65, dept: 'Ops',    priority: 'High' },
  { skill: 'Data Analytics',             pct: 58, dept: 'Ops',    priority: 'High' },
  { skill: 'Enterprise Reporting',        pct: 52, dept: 'Finance', priority: 'Medium' },
  { skill: 'AI-Assisted Fleet Ops',       pct: 48, dept: 'Fleet',  priority: 'Medium' },
]

const MATCHING_WEIGHTS = [
  { label: 'Skill Overlap',        key: 'skill',        val: 40 },
  { label: 'Role Adjacency',       key: 'role',         val: 25 },
  { label: 'Aspiration Fit',       key: 'aspiration',   val: 20 },
  { label: 'Location Match',       key: 'location',     val: 10 },
  { label: 'Availability',         key: 'availability', val: 5 },
]

const RECENT_JOBS = [
  { title: 'Operations Supervisor',    dept: 'Core Ops',  status: 'Active',  applicants: 14, posted: '3d ago' },
  { title: 'Fleet Ops Coordinator',    dept: 'Fleet',     status: 'Active',  applicants: 9,  posted: '5d ago' },
  { title: 'HR Learning Coordinator',  dept: 'HR',        status: 'Active',  applicants: 6,  posted: '1w ago' },
  { title: 'Regional Ops Director',    dept: 'Core Ops',  status: 'Draft',   applicants: 0,  posted: '—' },
]

const MOBILITY_CHART = [
  { month: 'Jan', val: 6  },
  { month: 'Feb', val: 9  },
  { month: 'Mar', val: 12 },
  { month: 'Apr', val: 14 },
  { month: 'May', val: 11 },
  { month: 'Jun', val: 18 },
  { month: 'Jul', val: 22 },
  { month: 'Aug', val: 19 },
]

const MAX_CHART = Math.max(...MOBILITY_CHART.map(d => d.val))

const ADMIN_TABS = ['analytics', 'jobs', 'weights', 'skills'] as const
type AdminTab = typeof ADMIN_TABS[number]

const tabLabels: Record<AdminTab, string> = {
  analytics: 'Adoption Analytics',
  jobs: 'Job CRUD',
  weights: 'Matching Weights',
  skills: 'Skill Taxonomy',
}

const priorityConfig: Record<string, { color: string; bg: string }> = {
  Critical: { color: '#EF4444', bg: '#FEE2E2' },
  High:     { color: '#F59E0B', bg: '#FEF3C7' },
  Medium:   { color: '#3B82F6', bg: '#DBEAFE' },
}

export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>('analytics')
  const [weights, setWeights] = useState(MATCHING_WEIGHTS)
  const total = weights.reduce((a, b) => a + b.val, 0)

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '4rem' }}>

      {/* Header */}
      <div style={{ background: '#000', padding: '2.5rem 0', borderBottom: '4px solid #FFD100' }}>
        <div className="container">
          <p style={{ color: '#FFD100', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.5rem' }}>Admin Console</p>
          <h1 style={{ color: '#fff', fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 0.4rem' }}>Platform Administration</h1>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Adoption metrics · Role management · Matching engine · Skill taxonomy</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 64, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: 0 }}>
          {ADMIN_TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'none', border: 'none', cursor: 'pointer', color: tab === t ? '#000' : '#9CA3AF', borderBottom: tab === t ? '3px solid #FFD100' : '3px solid transparent', whiteSpace: 'nowrap' }}>
              {tabLabels[t]}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem' }}>

        {/* ── ADOPTION ANALYTICS ────────────────────────────── */}
        {tab === 'analytics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {ADOPTION.map(k => {
                const Icon = k.icon
                return (
                  <div key={k.label} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ width: 42, height: 42, background: k.color + '18', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} color={k.color} />
                      </div>
                      <span style={{ background: '#DCFCE7', color: '#22C55E', fontSize: '0.7rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 999 }}>{k.change}</span>
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 900, color: '#000', margin: 0, lineHeight: 1 }}>{k.val}</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6B7280', margin: '0.4rem 0 0' }}>{k.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Mobility Chart + Top Gaps */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.5rem' }}>

              {/* Bar Chart */}
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1rem', color: '#000', margin: '0 0 2rem' }}>Internal Mobility (Monthly)</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem', height: 180 }}>
                  {MOBILITY_CHART.map(d => (
                    <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', height: '100%', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#374151' }}>{d.val}</span>
                      <div style={{ width: '100%', background: '#FFD100', borderRadius: '4px 4px 0 0', height: `${(d.val / MAX_CHART) * 140}px`, transition: 'height 0.5s ease' }} />
                      <span style={{ fontSize: '0.62rem', color: '#9CA3AF', fontWeight: 600 }}>{d.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Gaps */}
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1rem', color: '#000', margin: '0 0 1.5rem' }}>Top Org Skill Gaps</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {TOP_GAPS.map(g => {
                    const pc = priorityConfig[g.priority]
                    return (
                      <div key={g.skill}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#111827' }}>{g.skill}</span>
                          <span style={{ background: pc.bg, color: pc.color, fontSize: '0.6rem', fontWeight: 900, padding: '0.15rem 0.5rem', borderRadius: 999 }}>{g.priority}</span>
                        </div>
                        <div style={{ height: 6, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${g.pct}%`, background: '#EF4444', borderRadius: 99 }} />
                        </div>
                        <p style={{ fontSize: '0.65rem', color: '#9CA3AF', margin: '0.2rem 0 0' }}>{g.pct}% of org affected · {g.dept}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── JOB CRUD ──────────────────────────────────────── */}
        {tab === 'jobs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Manage active and draft job postings.</p>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#000', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.65rem 1.25rem', fontWeight: 900, fontSize: '0.82rem', cursor: 'pointer' }}>
                <Plus size={15} /> Add Job
              </button>
            </div>
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                    {['Job Title', 'Department', 'Status', 'Applicants', 'Posted', 'Actions'].map(h => (
                      <th key={h} style={{ padding: '0.875rem 1.25rem', textAlign: 'left', fontSize: '0.72rem', fontWeight: 900, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RECENT_JOBS.map((job, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #F9FAFB' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 700, fontSize: '0.875rem', color: '#111827' }}>{job.title}</td>
                      <td style={{ padding: '1rem 1.25rem' }}><span style={{ background: '#F1F5F9', color: '#374151', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 999 }}>{job.dept}</span></td>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <span style={{ background: job.status === 'Active' ? '#DCFCE7' : '#F1F5F9', color: job.status === 'Active' ? '#22C55E' : '#6B7280', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.65rem', borderRadius: 999 }}>{job.status}</span>
                      </td>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#374151' }}>{job.applicants}</td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.8rem', color: '#9CA3AF' }}>{job.posted}</td>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button style={{ width: 32, height: 32, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Edit2 size={13} color="#374151" /></button>
                          <button style={{ width: 32, height: 32, background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={13} color="#EF4444" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── MATCHING WEIGHTS ──────────────────────────────── */}
        {tab === 'weights' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 700 }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Control how the matching algorithm weighs different signals. Total must equal 100%.</p>
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1rem', color: '#000', margin: 0 }}>Signal Weights</h3>
                <span style={{ background: total === 100 ? '#DCFCE7' : '#FEE2E2', color: total === 100 ? '#22C55E' : '#EF4444', fontWeight: 900, padding: '0.3rem 0.75rem', borderRadius: 999, fontSize: '0.8rem' }}>
                  Total: {total}% {total === 100 ? '✓' : '✗'}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {weights.map((w, i) => (
                  <div key={w.key}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827' }}>{w.label}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input type="range" min={0} max={60} value={w.val} onChange={e => setWeights(p => p.map((x, j) => j === i ? { ...x, val: Number(e.target.value) } : x))}
                          style={{ width: 120, accentColor: '#FFD100' }} />
                        <span style={{ fontWeight: 900, fontSize: '1rem', color: '#000', minWidth: 40, textAlign: 'right' }}>{w.val}%</span>
                      </div>
                    </div>
                    <div style={{ height: 6, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(w.val / 60) * 100}%`, background: '#FFD100', borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
              <button style={{ marginTop: '2rem', background: total === 100 ? '#000' : '#9CA3AF', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.75rem 1.5rem', fontWeight: 900, fontSize: '0.875rem', cursor: total === 100 ? 'pointer' : 'not-allowed' }}>
                {total === 100 ? 'Save Weights' : `Adjust to 100% (currently ${total}%)`}
              </button>
            </div>
            <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
              <p style={{ fontWeight: 900, color: '#92400E', fontSize: '0.82rem', margin: '0 0 0.4rem' }}>💡 Note</p>
              <p style={{ color: '#78350F', fontSize: '0.82rem', margin: 0, lineHeight: 1.6 }}>Weight changes take effect on next recommendation refresh. Historical match scores are not retroactively updated. Semantic AI ranking can be enabled in the AI Settings panel for smarter matching beyond these explicit weights.</p>
            </div>
          </div>
        )}

        {/* ── SKILL TAXONOMY ────────────────────────────────── */}
        {tab === 'skills' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Manage the unified skill taxonomy used for matching, profiles, and recommendations across all Hertz verticals.</p>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#000', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.65rem 1.25rem', fontWeight: 900, fontSize: '0.82rem', cursor: 'pointer' }}>
                <Plus size={15} /> Add Skill
              </button>
            </div>
            {['Operations', 'Finance', 'Fleet Technology', 'Leadership', 'Analytics'].map(cat => (
              <div key={cat} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ background: '#F9FAFB', padding: '0.875rem 1.5rem', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 900, fontSize: '0.85rem', color: '#000' }}>{cat}</span>
                  <button style={{ fontSize: '0.72rem', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer', fontWeight: 700 }}>+ Add to {cat}</button>
                </div>
                <div style={{ padding: '1rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {MATCHING_WEIGHTS.slice(0, 3).map((_, j) => {
                    const labels: Record<string, string[]> = {
                      Operations: ['Process Management', 'High-Volume Ops', 'Fleet Coordination', 'Compliance'],
                      Finance: ['P&L Ownership', 'Budget Management', 'Financial Reporting', 'Cost Analysis'],
                      'Fleet Technology': ['inTouched', 'Fleet Analytics', 'Vehicle Lifecycle', 'Predictive Maintenance'],
                      Leadership: ['Team Leadership', 'Performance Coaching', 'Stakeholder Communication', 'Change Management'],
                      Analytics: ['Data Analysis', 'Enterprise Reporting', 'Dashboard Tools', 'Workforce Analytics'],
                    }
                    return labels[cat]?.map(skill => (
                      <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '0.35rem 0.75rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#374151' }}>{skill}</span>
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}><Edit2 size={11} color="#9CA3AF" /></button>
                      </div>
                    ))
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
