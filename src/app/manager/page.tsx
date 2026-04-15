'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, CheckCircle, Clock, AlertTriangle, TrendingUp, Star, ChevronRight, ArrowRight, BarChart3, Zap } from 'lucide-react'

// ─── Mock Team Data ─────────────────────────────────────
const TEAM = [
  { name: 'Priya Mehta',    title: 'Ops Coordinator',     readiness: 61, skills: ['Ops', 'CX', 'Coordination'],   risk: 'Low',    topGap: 'Fleet Systems',         status: 'Active',   gig: null },
  { name: 'James Park',     title: 'Fleet Associate',     readiness: 44, skills: ['Fleet', 'Logistics'],          risk: 'Medium', topGap: 'Leadership',            status: 'In Gig',   gig: 'Fleet Audit — Dallas' },
  { name: 'Aisha Thompson', title: 'CSR Senior',          readiness: 78, skills: ['CX', 'Sales', 'Retention'],    risk: 'High',   topGap: 'Cross-functional lead', status: 'Active',   gig: null },
  { name: 'Daniel Cruz',    title: 'Ops Analyst',         readiness: 55, skills: ['Analytics', 'Ops', 'Reporting'], risk: 'Low',  topGap: 'Stakeholder mgmt',      status: 'Active',   gig: null },
  { name: 'Fatima Al-Naqbi',title: 'Fleet Coordinator',  readiness: 39, skills: ['Fleet', 'Admin', 'Compliance'],risk: 'Low',   topGap: 'Digital tools',         status: 'Learning', gig: null },
  { name: 'Tyler Okonkwo',  title: 'Branch Associate',   readiness: 29, skills: ['Ops', 'Customer Svc'],         risk: 'Medium', topGap: 'Process management',    status: 'Active',   gig: null },
]

const APPROVALS = [
  { employee: 'James Park',     gig: 'Fleet Audit Support — Dallas',      duration: '2 weeks', dept: 'Fleet Mgmt',    status: 'Pending', submittedAgo: '2h ago' },
  { employee: 'Aisha Thompson', gig: 'HR Onboarding Facilitator — NY',    duration: '3 weeks', dept: 'People Dev',    status: 'Pending', submittedAgo: '1d ago' },
  { employee: 'Daniel Cruz',    gig: 'Financial Reporting Q2 — Chicago',  duration: '4 weeks', dept: 'Finance',       status: 'Approved', submittedAgo: '3d ago' },
]

const NOMINATIONS = [
  { employee: 'Aisha Thompson', for: 'Operations Supervisor', matchPct: 91, reason: 'Strong CX + cross-functional track record. High-risk retention flag.' },
  { employee: 'Priya Mehta',    for: 'Fleet Operations Coordinator', matchPct: 78, reason: 'Growing fleet exposure via gig participation. Good trajectory.' },
]

const SKILL_HEATMAP = [
  { skill: 'Customer Experience',     pct: 83 },
  { skill: 'Team Operations',         pct: 76 },
  { skill: 'Process Management',      pct: 68 },
  { skill: 'Data & Analytics',        pct: 42 },
  { skill: 'Budget / P&L',            pct: 28 },
  { skill: 'Fleet Systems',           pct: 31 },
  { skill: 'Cross-Dept Leadership',   pct: 55 },
  { skill: 'Digital / Tech Literacy', pct: 38 },
]

const riskConfig = { Low: { color: '#22C55E', bg: '#DCFCE7' }, Medium: { color: '#F59E0B', bg: '#FEF3C7' }, High: { color: '#EF4444', bg: '#FEE2E2' } }

export default function ManagerPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'approvals' | 'nominations' | 'heatmap'>('overview')
  const [approvals, setApprovals] = useState(APPROVALS)

  const approve = (idx: number) => setApprovals(p => p.map((a, i) => i === idx ? { ...a, status: 'Approved' } : a))
  const reject  = (idx: number) => setApprovals(p => p.map((a, i) => i === idx ? { ...a, status: 'Rejected' } : a))

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '4rem' }}>

      {/* Header */}
      <div style={{ background: '#000', padding: '2.5rem 0', borderBottom: '4px solid #FFD100' }}>
        <div className="container">
          <p style={{ color: '#FFD100', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.5rem' }}>Manager Portal</p>
          <h1 style={{ color: '#fff', fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 0.4rem' }}>Team Dashboard</h1>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>Mike Moore · EVP, Core Operations · Team of {TEAM.length}</p>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            { label: 'Team Members',      val: TEAM.length.toString(),  sub: '2 in active gigs',                icon: Users,       color: '#3B82F6' },
            { label: 'Pending Approvals', val: approvals.filter(a => a.status === 'Pending').length.toString(), sub: 'Gig participation requests', icon: Clock, color: '#F59E0B' },
            { label: 'High Flight Risk',  val: '1',                     sub: 'Needs retention action',          icon: AlertTriangle, color: '#EF4444' },
            { label: 'Avg Readiness',     val: `${Math.round(TEAM.reduce((a, b) => a + b.readiness, 0) / TEAM.length)}%`, sub: 'Across team',  icon: TrendingUp, color: '#22C55E' },
          ].map((k, i) => {
            const Icon = k.icon
            return (
              <div key={k.label} style={{ padding: '1.5rem 2rem', borderRight: i < 3 ? '1px solid #F1F5F9' : 'none', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, background: k.color + '18', borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          {[['overview', 'Team Overview'], ['approvals', 'Gig Approvals'], ['nominations', 'Nominations'], ['heatmap', 'Skill Heatmap']].map(([t, label]) => (
            <button key={t} onClick={() => setActiveTab(t as any)} style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'none', border: 'none', cursor: 'pointer', color: activeTab === t ? '#000' : '#9CA3AF', borderBottom: activeTab === t ? '3px solid #FFD100' : '3px solid transparent', whiteSpace: 'nowrap' }}>
              {label}{t === 'approvals' && approvals.filter(a => a.status === 'Pending').length > 0 && <span style={{ marginLeft: '0.4rem', background: '#EF4444', color: '#fff', fontSize: '0.6rem', fontWeight: 900, padding: '0.1rem 0.4rem', borderRadius: 999 }}>{approvals.filter(a => a.status === 'Pending').length}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem' }}>

        {/* ── TEAM OVERVIEW ─────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {TEAM.map(m => {
              const rc = riskConfig[m.risk as keyof typeof riskConfig]
              return (
                <div key={m.name} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '250px 1fr 200px 160px auto', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{ width: 44, height: 44, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.1rem', color: '#000', flexShrink: 0 }}>{m.name[0]}</div>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000', margin: 0 }}>{m.name}</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0, fontWeight: 600 }}>{m.title}</p>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 900, color: '#000' }}>{m.readiness}%</span>
                      <span style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 600 }}>Readiness · Gap: {m.topGap}</span>
                    </div>
                    <div style={{ height: 6, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden', maxWidth: 280 }}>
                      <div style={{ height: '100%', width: `${m.readiness}%`, background: m.readiness > 65 ? '#22C55E' : m.readiness > 40 ? '#FFD100' : '#EF4444', borderRadius: 99 }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {m.skills.slice(0, 3).map(s => (
                      <span key={s} style={{ background: '#F1F5F9', color: '#374151', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 999 }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'flex-start' }}>
                    <span style={{ background: rc.bg, color: rc.color, fontSize: '0.65rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 999 }}>{m.risk} Risk</span>
                    {m.gig && <span style={{ background: '#FFFBEB', color: '#D97706', fontSize: '0.6rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 999 }}>⚡ {m.gig.split(' — ')[0]}</span>}
                  </div>
                  <button style={{ background: '#000', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.6rem 1rem', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>Nominate</button>
                </div>
              )
            })}
          </div>
        )}

        {/* ── APPROVALS ─────────────────────────────────────── */}
        {activeTab === 'approvals' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {approvals.map((a, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid ${a.status === 'Approved' ? '#DCFCE7' : a.status === 'Rejected' ? '#FEE2E2' : '#E5E7EB'}`, borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: 38, height: 38, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000' }}>{a.employee[0]}</div>
                      <div>
                        <p style={{ fontWeight: 800, color: '#000', margin: 0 }}>{a.employee}</p>
                        <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0 }}>Submitted {a.submittedAgo}</p>
                      </div>
                    </div>
                    <h3 style={{ fontWeight: 900, color: '#000', fontSize: '1rem', margin: '0 0 0.25rem' }}>{a.gig}</h3>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <span style={{ background: '#F1F5F9', color: '#374151', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 999 }}>{a.dept}</span>
                      <span style={{ background: '#F1F5F9', color: '#374151', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 999 }}>⏱ {a.duration}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                    {a.status === 'Pending' ? (
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => reject(i)} style={{ padding: '0.6rem 1.25rem', borderRadius: 10, border: '1.5px solid #E5E7EB', background: '#fff', color: '#EF4444', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}>Decline</button>
                        <button onClick={() => approve(i)} style={{ padding: '0.6rem 1.25rem', borderRadius: 10, border: 'none', background: '#000', color: '#FFD100', fontWeight: 900, fontSize: '0.8rem', cursor: 'pointer' }}>Approve</button>
                      </div>
                    ) : (
                      <span style={{ background: a.status === 'Approved' ? '#DCFCE7' : '#FEE2E2', color: a.status === 'Approved' ? '#22C55E' : '#EF4444', fontWeight: 900, fontSize: '0.82rem', padding: '0.4rem 1rem', borderRadius: 999 }}>
                        {a.status === 'Approved' ? '✓ Approved' : '✗ Rejected'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── NOMINATIONS ───────────────────────────────────── */}
        {activeTab === 'nominations' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>AI-suggested nominations based on team readiness scores, skill overlap, and retention risk signals.</p>
            {NOMINATIONS.map(n => (
              <div key={n.employee} style={{ background: '#fff', border: '1.5px solid #FDE68A', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F59E0B', margin: '0 0 0.4rem' }}>AI Nomination Suggestion</p>
                    <h3 style={{ fontWeight: 900, color: '#000', fontSize: '1rem', margin: '0 0 0.25rem' }}>{n.employee} → {n.for}</h3>
                    <p style={{ color: '#374151', fontSize: '0.875rem', margin: '0 0 1rem', lineHeight: 1.6 }}>{n.reason}</p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ background: '#DCFCE7', color: '#22C55E', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 999 }}>{n.matchPct}% Match</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0, marginLeft: '1.5rem' }}>
                    <button style={{ padding: '0.6rem 1.25rem', borderRadius: 10, border: '1.5px solid #E5E7EB', background: '#fff', color: '#374151', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>Skip</button>
                    <button style={{ padding: '0.6rem 1.25rem', borderRadius: 10, border: 'none', background: '#000', color: '#FFD100', fontWeight: 900, fontSize: '0.8rem', cursor: 'pointer' }}>Nominate Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── SKILL HEATMAP ─────────────────────────────────── */}
        {activeTab === 'heatmap' && (
          <div>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: '0 0 2rem' }}>Aggregate skill coverage across your team. Red = critical gap, Yellow = developing, Green = strong coverage.</p>
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: 900, fontSize: '1rem', color: '#000', margin: '0 0 1.75rem' }}>Team Skill Coverage</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {SKILL_HEATMAP.map(s => {
                  const color = s.pct > 65 ? '#22C55E' : s.pct > 40 ? '#F59E0B' : '#EF4444'
                  const bg = s.pct > 65 ? '#DCFCE7' : s.pct > 40 ? '#FEF3C7' : '#FEE2E2'
                  return (
                    <div key={s.skill}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827' }}>{s.skill}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ background: bg, color, fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.65rem', borderRadius: 999 }}>{s.pct < 40 ? '⚠ Critical Gap' : s.pct < 65 ? 'Developing' : 'Strong'}</span>
                          <span style={{ fontWeight: 900, color, fontSize: '0.95rem', minWidth: 40, textAlign: 'right' }}>{s.pct}%</span>
                        </div>
                      </div>
                      <div style={{ height: 10, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.pct}%`, background: color, borderRadius: 99, transition: 'width 0.6s ease' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#FFFBEB', borderRadius: 14, border: '1.5px solid #FDE68A' }}>
                <p style={{ fontWeight: 900, color: '#92400E', fontSize: '0.82rem', margin: '0 0 0.4rem' }}>⚡ AI Insight</p>
                <p style={{ color: '#78350F', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>Your team has a <strong>critical gap in Digital & Analytics (38%)</strong> and <strong>Budget / P&L (28%)</strong>. Recommend enrolling Daniel Cruz in Data Analytics for Ops Managers and requesting a Finance gig placement for 1–2 team members this quarter.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
