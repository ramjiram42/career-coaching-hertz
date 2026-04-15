'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, Zap, Target, BookOpen, BarChart3, AlertTriangle, CheckCircle, ArrowRight, ChevronRight, Star } from 'lucide-react'

// ─── Skills Data ─────────────────────────────────────────
const SKILL_PORTFOLIO = [
  { name: 'Team Leadership',          score: 90, category: 'Operations',  demand: 'High',   market: 92, trend: 'stable',   owned: true },
  { name: 'High-Volume Operations',   score: 88, category: 'Operations',  demand: 'High',   market: 85, trend: 'stable',   owned: true },
  { name: 'Customer Experience',      score: 82, category: 'CX',          demand: 'High',   market: 88, trend: 'growing',  owned: true },
  { name: 'Process Management',       score: 78, category: 'Operations',  demand: 'Medium', market: 80, trend: 'stable',   owned: true },
  { name: 'Performance Coaching',     score: 74, category: 'Leadership',  demand: 'High',   market: 85, trend: 'growing',  owned: true },
  { name: 'Stakeholder Communication',score: 72, category: 'Leadership',  demand: 'High',   market: 87, trend: 'growing',  owned: true },
  { name: 'Data Analysis',            score: 55, category: 'Analytics',   demand: 'Very High', market: 93, trend: 'growing', owned: false },
  { name: 'Enterprise Reporting',     score: 38, category: 'Analytics',   demand: 'Medium', market: 78, trend: 'stable',   owned: false },
  { name: 'Budget Management',        score: 24, category: 'Finance',     demand: 'High',   market: 88, trend: 'stable',   owned: false },
  { name: 'P&L Ownership',            score: 12, category: 'Finance',     demand: 'Very High', market: 91, trend: 'growing', owned: false },
  { name: 'Fleet Systems (inTouched)',score: 15, category: 'Fleet Tech',  demand: 'High',   market: 82, trend: 'growing',  owned: false },
]

const EMERGING_SKILLS = [
  { name: 'AI-Assisted Fleet Operations',  growth: '+340%', signal: 'Internal + Market', priority: 'Critical', color: '#EF4444' },
  { name: 'Workforce Analytics',           growth: '+185%', signal: 'Internal adoption', priority: 'High',     color: '#F59E0B' },
  { name: 'Digital Customer Journeys',     growth: '+120%', signal: 'Market trend',      priority: 'High',     color: '#F59E0B' },
  { name: 'Predictive Maintenance',        growth: '+95%',  signal: 'Internal demand',   priority: 'Medium',   color: '#3B82F6' },
  { name: 'Sustainability Reporting',      growth: '+78%',  signal: 'Regulatory',        priority: 'Medium',   color: '#3B82F6' },
]

const BENCHMARKS = [
  { area: 'Operations Leadership',  hertz: 78, market: 72, status: 'Above Market' },
  { area: 'Fleet Management',       hertz: 65, market: 80, status: 'Below Market', gap: 15 },
  { area: 'Financial Acumen',       hertz: 52, market: 74, status: 'Below Market', gap: 22 },
  { area: 'Digital & Analytics',    hertz: 44, market: 82, status: 'Below Market', gap: 38 },
  { area: 'Customer Experience',    hertz: 81, market: 77, status: 'Above Market' },
  { area: 'Leadership Development', hertz: 73, market: 70, status: 'Above Market' },
]

const UPSKILLING_PATHS = [
  {
    skill: 'P&L & Budget Ownership',
    urgency: 'High',
    actions: [
      { type: 'Course',      label: 'Finance for Operations Managers',     duration: '3 weeks', link: '/learn' },
      { type: 'Gig',         label: 'Financial Reporting Analyst Q2',      duration: '4 weeks', link: '/gigs' },
      { type: 'Mentor',      label: 'Session with Alice Johnson on P&L',    duration: '2 sessions', link: '/mentors' },
    ]
  },
  {
    skill: 'Fleet Systems (inTouched)',
    urgency: 'Medium',
    actions: [
      { type: 'Gig',         label: 'Fleet Audit Support — Dallas',         duration: '2 weeks', link: '/gigs' },
      { type: 'Course',      label: 'inTouched Fleet Management Basics',    duration: '1 week', link: '/learn' },
    ]
  },
  {
    skill: 'Data Analysis',
    urgency: 'Medium',
    actions: [
      { type: 'Course',      label: 'Excel & Tableau for Operations Mgrs',  duration: '2 weeks', link: '/learn' },
      { type: 'Gig',         label: 'Q2 Fleet Utilisation Analytics',       duration: '3 weeks', link: '/gigs' },
    ]
  },
]

const GAP_ANALYSIS = [
  { role: 'Regional Operations Director', readiness: 73, gaps: ['P&L Ownership (critical)', 'Fleet Systems', 'Enterprise Reporting'], timeToReady: '6–9 months' },
  { role: 'Fleet Operations Manager',     readiness: 81, gaps: ['Fleet Systems (inTouched)', 'Fleet Analytics'],                     timeToReady: '3–4 months' },
  { role: 'Operations Supervisor',        readiness: 87, gaps: ['Formal budget sign-off exposure'],                                   timeToReady: '1–2 months' },
]

const TABS = ['portfolio', 'gaps', 'benchmarking', 'emerging', 'upskilling'] as const
type Tab = typeof TABS[number]

const tabLabels: Record<Tab, string> = {
  portfolio: 'Skill Portfolio',
  gaps: 'Gap Resolver',
  benchmarking: 'Benchmarking',
  emerging: 'Emerging Radar',
  upskilling: 'Upskilling Plan',
}

const urgencyConfig: Record<string, { color: string; bg: string }> = {
  High:   { color: '#EF4444', bg: '#FEE2E2' },
  Medium: { color: '#F59E0B', bg: '#FEF3C7' },
  Low:    { color: '#22C55E', bg: '#DCFCE7' },
}

export default function SkillsPage() {
  const [tab, setTab] = useState<Tab>('portfolio')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...Array.from(new Set(SKILL_PORTFOLIO.map(s => s.category)))]

  const filtered = category === 'All' ? SKILL_PORTFOLIO : SKILL_PORTFOLIO.filter(s => s.category === category)
  const owned = filtered.filter(s => s.owned)
  const gaps = filtered.filter(s => !s.owned)

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '4rem' }}>

      {/* Header */}
      <div style={{ background: '#000', padding: '2.5rem 0', borderBottom: '4px solid #FFD100' }}>
        <div className="container">
          <p style={{ color: '#FFD100', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.5rem' }}>Hertz Skills Intelligence</p>
          <h1 style={{ color: '#fff', fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 0.4rem' }}>Skill Intelligence Engine</h1>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Real-time skill portfolio · Gap resolver · Market benchmarking · Emerging radar · Upskilling paths</p>
        </div>
      </div>

      {/* KPI Row */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            { label: 'Validated Skills',    val: '7',     sub: 'Above proficiency threshold', icon: CheckCircle, color: '#22C55E' },
            { label: 'Skill Gaps Identified', val: '4',  sub: 'Blocking target role',         icon: AlertTriangle, color: '#EF4444' },
            { label: 'Market Coverage',     val: '68%',   sub: 'vs regional operations avg',  icon: BarChart3, color: '#3B82F6' },
            { label: 'Emerging Skills',     val: '5',     sub: 'On your org radar',           icon: Zap, color: '#F59E0B' },
          ].map((k, i) => {
            const Icon = k.icon
            return (
              <div key={k.label} style={{ padding: '1.5rem 2rem', borderRight: i < 3 ? '1px solid #F1F5F9' : 'none', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, background: k.color + '18', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color={k.color} />
                </div>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', margin: 0, lineHeight: 1 }}>{k.val}</p>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#000', margin: '0.15rem 0 0.1rem' }}>{k.label}</p>
                  <p style={{ fontSize: '0.68rem', color: '#9CA3AF', margin: 0 }}>{k.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 64, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: 0 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'none', border: 'none', cursor: 'pointer', color: tab === t ? '#000' : '#9CA3AF', borderBottom: tab === t ? '3px solid #FFD100' : '3px solid transparent', whiteSpace: 'nowrap' }}>
              {tabLabels[t]}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem' }}>

        {/* ── SKILL PORTFOLIO ─────────────────────────────── */}
        {tab === 'portfolio' && (
          <div>
            {/* Category filter */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCategory(c)} style={{ padding: '0.4rem 1rem', borderRadius: 999, border: '1.5px solid', borderColor: category === c ? '#000' : '#E5E7EB', background: category === c ? '#000' : '#fff', color: category === c ? '#FFD100' : '#374151', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}>{c}</button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Owned skills */}
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#000', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ margin: 0, fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FFD100' }}>Your Skills ({owned.length})</p>
                  <CheckCircle size={16} color="#22C55E" />
                </div>
                <div style={{ padding: '0.5rem' }}>
                  {owned.map(s => (
                    <div key={s.name} style={{ padding: '0.9rem 1rem', borderBottom: '1px solid #F9FAFB' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div>
                          <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827' }}>{s.name}</span>
                          <span style={{ marginLeft: '0.4rem', fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 600 }}>{s.category}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          {s.demand === 'Very High' && <span style={{ background: '#FEE2E2', color: '#EF4444', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: 999, fontWeight: 800 }}>🔥 Hot</span>}
                          <span style={{ fontWeight: 900, fontSize: '0.85rem', color: '#000' }}>{s.score}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div style={{ flex: 1, height: 5, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${s.score}%`, background: s.score > 70 ? '#22C55E' : '#FFD100', borderRadius: 99 }} />
                        </div>
                        <span style={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 700, whiteSpace: 'nowrap' }}>Mkt: {s.market}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gap skills */}
              <div style={{ background: '#fff', border: '1.5px solid #FCA5A5', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#EF4444', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ margin: 0, fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>Skill Gaps ({gaps.length})</p>
                  <AlertTriangle size={16} color="#fff" />
                </div>
                <div style={{ padding: '0.5rem' }}>
                  {gaps.map(s => (
                    <div key={s.name} style={{ padding: '0.9rem 1rem', borderBottom: '1px solid #F9FAFB' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div>
                          <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827' }}>{s.name}</span>
                          <span style={{ marginLeft: '0.4rem', fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 600 }}>{s.category}</span>
                        </div>
                        <span style={{ fontWeight: 900, fontSize: '0.85rem', color: '#EF4444' }}>{s.score}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div style={{ flex: 1, height: 5, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${s.score}%`, background: '#EF4444', borderRadius: 99 }} />
                        </div>
                        <span style={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 700, whiteSpace: 'nowrap' }}>Needed: {s.market}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── GAP RESOLVER ─────────────────────────────────── */}
        {tab === 'gaps' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Skill gap analysis against Ram's target roles — with recommended learning, gig, and mentoring actions for each gap.</p>
            {GAP_ANALYSIS.map(g => (
              <div key={g.role} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>{g.role}</h3>
                    <p style={{ color: '#6B7280', fontSize: '0.82rem', margin: 0 }}>Estimated time to ready: <strong style={{ color: '#000' }}>{g.timeToReady}</strong></p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 900, color: '#FFD100', margin: 0, lineHeight: 1 }}>{g.readiness}%</p>
                    <p style={{ fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>Readiness</p>
                  </div>
                </div>
                <div style={{ height: 8, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <div style={{ height: '100%', width: `${g.readiness}%`, background: 'linear-gradient(90deg, #FFD100, #F59E0B)', borderRadius: 99 }} />
                </div>
                <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', margin: '0 0 0.75rem' }}>Gaps to Close</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {g.gaps.map(gap => (
                    <span key={gap} style={{ background: '#FEE2E2', color: '#DC2626', border: '1px solid #FECACA', padding: '0.3rem 0.8rem', borderRadius: 999, fontSize: '0.78rem', fontWeight: 700 }}>⚠ {gap}</span>
                  ))}
                </div>
                <Link href="/skills#upskilling" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#000', color: '#FFD100', padding: '0.6rem 1.25rem', borderRadius: 10, fontSize: '0.78rem', fontWeight: 900, textDecoration: 'none' }}>
                  View Upskilling Plan <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* ── BENCHMARKING ─────────────────────────────────── */}
        {tab === 'benchmarking' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Compares Ram's skill profile against market standards, Hertz peer group, and industry benchmarks for Operations Director level roles.</p>
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ background: '#000', padding: '1rem 1.75rem', display: 'flex', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, background: '#FFD100', borderRadius: 3 }} /><span style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 700 }}>Hertz / Ram Score</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, background: '#6B7280', borderRadius: 3 }} /><span style={{ color: '#9CA3AF', fontSize: '0.78rem', fontWeight: 700 }}>Market Benchmark</span></div>
              </div>
              <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {BENCHMARKS.map(b => (
                  <div key={b.area}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827' }}>{b.area}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: b.status === 'Above Market' ? '#22C55E' : '#EF4444', background: b.status === 'Above Market' ? '#DCFCE7' : '#FEE2E2', padding: '0.2rem 0.65rem', borderRadius: 999 }}>
                        {b.status === 'Above Market' ? '✓' : `▼ ${b.gap} pts`} {b.status}
                      </span>
                    </div>
                    <div style={{ position: 'relative', height: 10, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', height: '100%', width: `${b.market}%`, background: '#E5E7EB', borderRadius: 99 }} />
                      <div style={{ position: 'absolute', height: '100%', width: `${b.hertz}%`, background: b.hertz >= b.market ? '#22C55E' : '#FFD100', borderRadius: 99 }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.3rem' }}>
                      <span style={{ fontSize: '0.68rem', color: '#FFD100', fontWeight: 800 }}>Ram: {b.hertz}</span>
                      <span style={{ fontSize: '0.68rem', color: '#9CA3AF', fontWeight: 700 }}>Market: {b.market}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── EMERGING RADAR ────────────────────────────────── */}
        {tab === 'emerging' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Skills gaining momentum inside Hertz based on internal adoption signals, job posting frequency, market data, and industry trends.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {EMERGING_SKILLS.map(s => (
                <div key={s.name} style={{ background: '#fff', border: `2px solid ${s.color}33`, borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ width: 40, height: 40, background: s.color + '18', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={20} color={s.color} />
                    </div>
                    <span style={{ background: s.color + '18', color: s.color, fontSize: '0.68rem', fontWeight: 900, padding: '0.2rem 0.65rem', borderRadius: 999 }}>{s.priority}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '0.95rem', color: '#111827', margin: '0 0 0.4rem', lineHeight: 1.35 }}>{s.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: '#6B7280', margin: '0 0 1rem' }}>Signal source: {s.signal}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: s.color }}>{s.growth}</span>
                    <span style={{ fontSize: '0.68rem', color: '#9CA3AF', fontWeight: 700 }}>YoY demand growth</span>
                  </div>
                  <Link href="/learn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginTop: '1rem', padding: '0.6rem', background: s.color, color: '#fff', borderRadius: 10, fontSize: '0.75rem', fontWeight: 900, textDecoration: 'none' }}>
                    Find Learning <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── UPSKILLING PLAN ───────────────────────────────── */}
        {tab === 'upskilling' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>Personalised upskilling plan connecting each skill gap to learning content, stretch gigs, and mentor guidance.</p>
            {UPSKILLING_PATHS.map(path => {
              const urg = urgencyConfig[path.urgency]
              return (
                <div key={path.skill} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: 0, color: '#000' }}>Gap: {path.skill}</h3>
                    <span style={{ background: urg.bg, color: urg.color, fontSize: '0.72rem', fontWeight: 900, padding: '0.25rem 0.75rem', borderRadius: 999 }}>{path.urgency} Priority</span>
                  </div>
                  <div style={{ padding: '1.25rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {path.actions.map((act, i) => {
                      const typeConfig: Record<string, { color: string; bg: string; icon: string }> = {
                        Course: { color: '#3B82F6', bg: '#DBEAFE', icon: '📚' },
                        Gig:    { color: '#F59E0B', bg: '#FEF3C7', icon: '⚡' },
                        Mentor: { color: '#8B5CF6', bg: '#EDE9FE', icon: '👥' },
                      }
                      const tc = typeConfig[act.type]
                      return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: '#F9FAFB', borderRadius: 12, border: '1px solid #F1F5F9' }}>
                          <div style={{ width: 36, height: 36, background: tc.bg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{tc.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
                              <span style={{ background: tc.bg, color: tc.color, fontSize: '0.6rem', fontWeight: 900, padding: '0.1rem 0.5rem', borderRadius: 999 }}>{act.type}</span>
                            </div>
                            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827', margin: 0 }}>{act.label}</p>
                            <p style={{ fontSize: '0.72rem', color: '#9CA3AF', margin: 0 }}>{act.duration}</p>
                          </div>
                          <Link href={act.link} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#000', color: '#FFD100', padding: '0.5rem 0.9rem', borderRadius: 8, fontSize: '0.72rem', fontWeight: 900, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                            Start <ChevronRight size={12} />
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
