'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Edit2, CheckCircle, Plus, X, Star, MapPin, Calendar, Award, Target, TrendingUp, Upload, ChevronRight } from 'lucide-react'

// ─── Mock Profile Data for Ram ─────────────────────────
const PROFILE = {
  name: 'Ram',
  title: 'Branch Manager / Operations',
  department: 'Core Operations',
  location: 'Tulsa, OK',
  level: 'Mid-Senior',
  yearsAtHertz: 9,
  email: 'ram.ops@hertz.com',
  manager: 'Mike Moore — EVP & Chief Operating Officer',
  targetRole: 'Regional Operations Director',
  availability: 'Open to gigs & internal moves',
  mentorPreference: 'Operations to Director transitions',
  bio: 'Results-driven operations leader with 9 years at Hertz, specialising in high-volume branch management, team performance, and process optimisation. Passionate about developing people and building high-performing teams.',
  certifications: ['Hertz Operations Excellence Cert', 'Six Sigma Yellow Belt', 'Fleet Safety Compliance (2024)'],
  experience: [
    { role: 'Branch Manager', company: 'Hertz', period: '2021 – Present', desc: 'Led 42-person team across Oklahoma locations. Achieved top-10% NPS score nationally.' },
    { role: 'Assistant Branch Manager', company: 'Hertz', period: '2018 – 2021', desc: 'Managed daily operations across 3 sites. Reduced cost-per-rental by 12%.' },
    { role: 'Fleet Coordinator', company: 'Hertz', period: '2015 – 2018', desc: 'Coordinated 800+ vehicle fleet. Built readiness tracking process adopted company-wide.' },
  ],
  careerInterests: ['Regional Operations', 'Fleet Leadership', 'People & Culture'],
  desiredRoles: ['Regional Operations Director', 'Fleet Operations Manager', 'VP Operations'],
}

const ALL_SKILLS = [
  { name: 'Team Leadership', level: 5, inferred: false, growth: 'stable' },
  { name: 'High-Volume Operations', level: 5, inferred: false, growth: 'stable' },
  { name: 'Customer Experience', level: 4, inferred: false, growth: 'growing' },
  { name: 'Process Management', level: 4, inferred: false, growth: 'stable' },
  { name: 'Performance Coaching', level: 4, inferred: true, growth: 'growing' },
  { name: 'Fleet Coordination', level: 3, inferred: false, growth: 'stable' },
  { name: 'Stakeholder Communication', level: 4, inferred: true, growth: 'growing' },
  { name: 'Data Analysis', level: 3, inferred: false, growth: 'growing' },
  { name: 'Budget Management', level: 2, inferred: false, growth: 'gap' },
  { name: 'P&L Ownership', level: 1, inferred: false, growth: 'gap' },
  { name: 'Fleet Systems (inTouched)', level: 1, inferred: false, growth: 'gap' },
  { name: 'Enterprise Reporting', level: 2, inferred: false, growth: 'developing' },
]

function StarLevel({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: i < level ? '#FFD100' : '#E5E7EB' }} />
      ))}
    </div>
  )
}

const growthConfig: Record<string, { label: string; color: string; bg: string }> = {
  stable: { label: 'Validated', color: '#22C55E', bg: '#DCFCE7' },
  growing: { label: 'Growing', color: '#3B82F6', bg: '#DBEAFE' },
  developing: { label: 'Building', color: '#F59E0B', bg: '#FEF3C7' },
  gap: { label: 'Gap', color: '#EF4444', bg: '#FEE2E2' },
  inferred: { label: 'Inferred', color: '#8B5CF6', bg: '#EDE9FE' },
}

export default function ProfilePage() {
  const [editBio, setEditBio] = useState(false)
  const [bio, setBio] = useState(PROFILE.bio)
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'interests' | 'settings'>('skills')
  const [newInterest, setNewInterest] = useState('')
  const [interests, setInterests] = useState(PROFILE.careerInterests)

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '4rem' }}>

      {/* ── Profile Header ─────────────── */}
      <div style={{ background: '#000', paddingTop: '3rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, background: '#FFD100', borderRadius: '50%', opacity: 0.04 }} />
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2.5rem' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 96, height: 96, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '2.5rem', color: '#000', border: '4px solid rgba(255,255,255,0.2)' }}>R</div>
              <button style={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, background: '#fff', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Edit2 size={12} color="#000" />
              </button>
            </div>
            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
                <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.04em' }}>{PROFILE.name}</h1>
                <span style={{ background: '#FFD100', color: '#000', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>{PROFILE.level}</span>
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '1rem', margin: '0 0 0.75rem', fontWeight: 600 }}>{PROFILE.title} · {PROFILE.department}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                {[
                  { icon: MapPin, text: PROFILE.location },
                  { icon: Calendar, text: `${PROFILE.yearsAtHertz} years at Hertz` },
                  { icon: Target, text: `Target: ${PROFILE.targetRole}` },
                ].map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Icon size={14} color="#FFD100" />
                      <span style={{ color: '#D1D5DB', fontSize: '0.85rem', fontWeight: 600 }}>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Right stats */}
            <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
              {[{ val: '73%', label: 'Readiness Score' }, { val: '12', label: 'Skills Validated' }, { val: '9', label: 'Years Exp' }].map(s => (
                <div key={s.label} style={{ background: '#111827', borderRadius: 16, padding: '1rem 1.25rem', textAlign: 'center' }}>
                  <p style={{ color: '#FFD100', fontSize: '1.6rem', fontWeight: 900, margin: 0, lineHeight: 1 }}>{s.val}</p>
                  <p style={{ color: '#6B7280', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0.25rem 0 0' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
            <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontWeight: 600 }}>{PROFILE.availability}</span>
            <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>· Reports to: {PROFILE.manager}</span>
          </div>
        </div>
      </div>

      {/* ── Tabs ──────────────────────── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: 64, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: 0 }}>
          {(['skills', 'experience', 'interests', 'settings'] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'none', border: 'none', cursor: 'pointer', color: activeTab === t ? '#000' : '#9CA3AF', borderBottom: activeTab === t ? '3px solid #FFD100' : '3px solid transparent', whiteSpace: 'nowrap' }}>
              {t === 'skills' ? 'Skills & Profile' : t === 'experience' ? 'Experience' : t === 'interests' ? 'Career Interests' : 'Settings'}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2rem', alignItems: 'start' }}>

          {/* ── Main Content ─────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {activeTab === 'skills' && (
              <>
                {/* Bio */}
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: 0, color: '#000' }}>About</h3>
                    <button onClick={() => setEditBio(!editBio)} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'none', border: '1px solid #E5E7EB', borderRadius: 8, padding: '0.35rem 0.75rem', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, color: '#374151' }}>
                      <Edit2 size={13} />{editBio ? 'Save' : 'Edit'}
                    </button>
                  </div>
                  {editBio
                    ? <textarea value={bio} onChange={e => setBio(e.target.value)} style={{ width: '100%', border: '1.5px solid #FFD100', borderRadius: 10, padding: '0.75rem', fontSize: '0.9rem', lineHeight: 1.6, resize: 'vertical', outline: 'none', fontFamily: 'inherit', color: '#111827', minHeight: 100 }} />
                    : <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{bio}</p>
                  }
                </div>

                {/* Skills */}
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: 0, color: '#000' }}>Skills & Proficiency</h3>
                      <p style={{ color: '#9CA3AF', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>Purple badges indicate inferred skills from your work history</p>
                    </div>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#FFD100', border: 'none', borderRadius: 8, padding: '0.5rem 0.9rem', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800 }}>
                      <Plus size={13} /> Add Skill
                    </button>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {ALL_SKILLS.map(skill => {
                      const gc = skill.inferred ? growthConfig.inferred : growthConfig[skill.growth]
                      return (
                        <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid #F9FAFB' }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827' }}>{skill.name}</span>
                              {skill.inferred && <span style={{ background: '#EDE9FE', color: '#6D28D9', fontSize: '0.6rem', padding: '0.1rem 0.5rem', borderRadius: 999, fontWeight: 800 }}>Inferred</span>}
                            </div>
                            <div style={{ height: 5, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden', width: 200 }}>
                              <div style={{ height: '100%', width: `${(skill.level / 5) * 100}%`, background: skill.growth === 'gap' ? '#EF4444' : '#FFD100', borderRadius: 99 }} />
                            </div>
                          </div>
                          <StarLevel level={skill.level} />
                          <span style={{ background: gc.bg, color: gc.color, fontSize: '0.65rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 999, border: `1px solid ${gc.color}33`, minWidth: 64, textAlign: 'center' }}>{gc.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Certifications */}
                <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: '0 0 1.25rem', color: '#000' }}>Certifications</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {PROFILE.certifications.map(cert => (
                      <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: 12, padding: '0.6rem 1rem' }}>
                        <Award size={15} color="#F59E0B" />
                        <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#92400E' }}>{cert}</span>
                      </div>
                    ))}
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#F9FAFB', border: '1.5px dashed #D1D5DB', borderRadius: 12, padding: '0.6rem 1rem', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700, color: '#9CA3AF' }}>
                      <Plus size={14} /> Add Certification
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'experience' && (
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: 0, color: '#000' }}>Work History</h3>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#FFD100', border: 'none', borderRadius: 8, padding: '0.5rem 0.9rem', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800 }}>
                    <Upload size={13} /> Import from Resume
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {PROFILE.experience.map((exp, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', paddingBottom: '2rem', position: 'relative' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{ width: 40, height: 40, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem', color: '#000', zIndex: 1 }}>H</div>
                        {i < PROFILE.experience.length - 1 && <div style={{ width: 2, flex: 1, background: '#F1F5F9', marginTop: 8 }} />}
                      </div>
                      <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                          <div>
                            <h4 style={{ fontWeight: 800, fontSize: '1rem', color: '#000', margin: 0 }}>{exp.role}</h4>
                            <p style={{ color: '#6B7280', fontSize: '0.85rem', margin: '0.15rem 0 0', fontWeight: 600 }}>{exp.company}</p>
                          </div>
                          <span style={{ background: '#F1F5F9', color: '#6B7280', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{exp.period}</span>
                        </div>
                        <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: '0 0 0.5rem', color: '#000' }}>Career Interests</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.82rem', marginBottom: '1.5rem' }}>These drive your personalised recommendations across Jobs, Gigs, and Journeys.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {interests.map(int => (
                    <div key={int} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#000', color: '#FFD100', padding: '0.5rem 0.9rem', borderRadius: 999, fontSize: '0.78rem', fontWeight: 800 }}>
                      {int}
                      <button onClick={() => setInterests(p => p.filter(i => i !== int))} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                        <X size={13} color="#FFD100" />
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input value={newInterest} onChange={e => setNewInterest(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && newInterest.trim()) { setInterests(p => [...p, newInterest.trim()]); setNewInterest('') } }} placeholder="Add career interest..." style={{ flex: 1, border: '1.5px solid #E5E7EB', borderRadius: 10, padding: '0.65rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit' }} />
                  <button onClick={() => { if (newInterest.trim()) { setInterests(p => [...p, newInterest.trim()]); setNewInterest('') } }} style={{ background: '#FFD100', border: 'none', borderRadius: 10, padding: '0.65rem 1rem', fontWeight: 900, cursor: 'pointer', fontSize: '0.82rem' }}>Add</button>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontWeight: 800, color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Desired Next Roles</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {PROFILE.desiredRoles.map((role, i) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: '#F9FAFB', borderRadius: 12, border: '1px solid #E5E7EB' }}>
                        <div style={{ width: 24, height: 24, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 900 }}>{i + 1}</div>
                        <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827', flex: 1 }}>{role}</span>
                        <ChevronRight size={16} color="#9CA3AF" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1rem', margin: '0 0 1.75rem', color: '#000' }}>Profile Settings</h3>
                {[
                  { label: 'Email', val: PROFILE.email, type: 'email' },
                  { label: 'Location', val: PROFILE.location, type: 'text' },
                  { label: 'Availability', val: PROFILE.availability, type: 'text' },
                  { label: 'Mentor Preference', val: PROFILE.mentorPreference, type: 'text' },
                ].map(field => (
                  <div key={field.label} style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>{field.label}</label>
                    <input defaultValue={field.val} type={field.type} style={{ width: '100%', border: '1.5px solid #E5E7EB', borderRadius: 10, padding: '0.75rem 1rem', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', color: '#111827', boxSizing: 'border-box' }} />
                  </div>
                ))}
                <button style={{ background: '#000', color: '#FFD100', border: 'none', borderRadius: 10, padding: '0.75rem 2rem', fontWeight: 900, cursor: 'pointer', fontSize: '0.875rem' }}>Save Changes</button>
              </div>
            )}
          </div>

          {/* ── Right Sidebar ─────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'sticky', top: '7rem' }}>
            {/* Quick actions */}
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <p style={{ fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', margin: '0 0 1rem' }}>Quick Actions</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'Start Career Advisor', href: '/advisor', bg: '#000', color: '#FFD100' },
                  { label: 'View My Journeys', href: '/career-tree', bg: '#fff', color: '#000' },
                  { label: 'Explore Gigs', href: '/gigs', bg: '#fff', color: '#000' },
                  { label: 'Find a Mentor', href: '/mentors', bg: '#fff', color: '#000' },
                ].map(a => (
                  <Link key={a.label} href={a.href} style={{ display: 'block', background: a.bg, color: a.color, border: '1px solid #E5E7EB', borderRadius: 10, padding: '0.75rem 1rem', fontWeight: 800, fontSize: '0.82rem', textDecoration: 'none', textAlign: 'center', transition: 'all 0.15s' }}>
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Readiness summary */}
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <p style={{ fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', margin: '0 0 0.75rem' }}>Readiness to Target Role</p>
              <div style={{ textAlign: 'center', padding: '0.75rem 0 1rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFD100', lineHeight: 1 }}>73%</div>
                <p style={{ color: '#6B7280', fontSize: '0.78rem', fontWeight: 700, margin: '0.3rem 0 0' }}>{PROFILE.targetRole}</p>
              </div>
              <div style={{ height: 8, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '73%', background: 'linear-gradient(90deg, #FFD100, #F59E0B)', borderRadius: 99 }} />
              </div>
              <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginTop: '1rem', color: '#6B7280', fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none' }}>
                <TrendingUp size={13} /> See full breakdown
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
