import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Heart } from 'lucide-react'
import { ResumeUploadSection } from '@/components/ResumeUpload'

const journeyCards = [
  { title: 'Fleet Operations Coordinator', vertical: 'Fleet Management', topColor: '#22C55E', bottomBadge: 'NEXT STEP', bottomBg: '#DCFCE7', bottomText: '#16A34A', img: '🚗' },
  { title: 'HR Learning Program Coordinator', vertical: 'People Development', topColor: '#F59E0B', bottomBadge: 'FUTURE MOVE', bottomBg: '#FEF3C7', bottomText: '#92400E', img: '👥' },
  { title: 'Operations Supervisor', vertical: 'Core Operations', topColor: '#3B82F6', bottomBadge: 'FUTURE NOW', bottomBg: '#DBEAFE', bottomText: '#1D4ED8', img: '📊' },
  { title: 'Technology Program Coordinator', vertical: 'Tech & Digital', topColor: '#8B5CF6', bottomBadge: 'WILD CARD', bottomBg: '#EDE9FE', bottomText: '#6D28D9', img: '💻' },
]

const careerPaths = [
  {
    badge: 'Desired path',
    badgeBg: '#EC4899',
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
    badgeBg: '#14B8A6',
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
    badgeBg: '#3B82F6',
    steps: '5',
    label: 'Recommended by your manager',
    target: 'Enterprise Operations Executive',
    bg: '#EFF6FF',
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
    <main style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* ── HERO BANNER ─────────────────────────────── */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <Image src="/hero-banner.png" alt="Hertz fleet" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)' }} />

        <div style={{ position: 'absolute', left: '2.5rem', top: '50%', transform: 'translateY(-50%)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            Opportunities<br />Curated For You.
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <Link href="/career-tree" style={{ background: '#FFD100', color: '#000', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
              Explore Journeys
            </Link>
            <Link href="/jobs" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}>
              View Vacancies
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', right: '2.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.8)' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 900, fontSize: '1.1rem', color: '#000', margin: 0 }}>Ram</p>
            <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.2rem 0 0.5rem' }}>Your profile is looking awesome</p>
            <Link href="/dashboard" style={{ color: '#FFD100', fontSize: '0.75rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Give it some more love <ArrowRight size={12} />
            </Link>
          </div>
          <div style={{ width: 52, height: 52, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
            <Image src="/ram_profile.png" alt="Ram" width={52} height={52} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* ── SUB NAV TABS ─────────────────────────────── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9' }}>
        <div className="container" style={{ display: 'flex', gap: 0 }}>
          {[
            { label: 'Home', href: '/', active: true },
            { label: 'Journeys', href: '/career-tree' },
            { label: 'Gigs', href: '/gigs' },
            { label: 'Mentors', href: '/mentors' },
            { label: 'Learn', href: '/dashboard' },
            { label: 'Vacancies', href: '/jobs' },
          ].map(tab => (
            <Link key={tab.href} href={tab.href} style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', color: tab.active ? '#000' : '#9CA3AF', borderBottom: tab.active ? '3px solid #FFD100' : '3px solid transparent', whiteSpace: 'nowrap' }}>
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

        {/* ── EXPLORE FUTURE MOVES ────────────────────── */}
        <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 800, color: '#000', letterSpacing: '-0.03em', marginBottom: '3rem' }}>Explore Future Moves</h2>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '1rem' }}>
          {/* NEXT STEP */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
            <div style={{ background: '#22C55E', color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>Next Step</div>
            <div style={{ width: 68, height: 68, borderRadius: '50%', border: '3px solid #22C55E', background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '0.75rem', boxShadow: '0 0 0 6px rgba(34,197,94,0.1)' }}>🟢</div>
            <Link href="/career-tree" style={{ color: '#22C55E', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center' }}>Click Here to Find Suggested Moves</Link>
          </div>

          <div style={{ flex: 1, borderTop: '2px dashed #D1D5DB', marginTop: 37 }} />

          {/* YOU TODAY */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
            <div style={{ background: '#6B7280', color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>You Today</div>
            <div style={{ width: 68, height: 68, borderRadius: '50%', border: '3px solid #E5E7EB', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <Image src="/ram_profile.png" alt="Ram" width={68} height={68} style={{ objectFit: 'cover' }} />
            </div>
            <p style={{ color: '#374151', fontWeight: 700, fontSize: '0.8rem', textAlign: 'center', margin: 0 }}>Branch Manager / Operations</p>
          </div>

          <div style={{ flex: 1, borderTop: '2px dashed #D1D5DB', marginTop: 37 }} />

          {/* FUTURE MOVE */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
            <div style={{ background: '#F59E0B', color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>Future Move</div>
            <div style={{ width: 68, height: 68, borderRadius: '50%', border: '3px solid #F59E0B', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '0.75rem', boxShadow: '0 0 0 6px rgba(245,158,11,0.1)' }}>🌟</div>
            <Link href="/career-tree" style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center' }}>Click Here to Find a Journey</Link>
          </div>
        </div>

        {/* Journey Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginTop: '3rem' }}>
          {journeyCards.map((card, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1rem', borderBottom: '1px solid #F9FAFB' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF' }}>Journey</span>
                <ExternalLink size={13} color="#D1D5DB" />
              </div>
              <div style={{ padding: '1.25rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.75rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', border: `3px solid ${card.topColor}`, background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', boxShadow: `0 0 0 4px ${card.topColor}22` }}>{card.img}</div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{card.vertical}</p>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111827', lineHeight: 1.3, margin: 0 }}>{card.title}</h4>
                </div>
              </div>
              <div style={{ padding: '0 1rem 1rem' }}>
                <Link href="/career-tree" style={{ display: 'block', background: card.bottomBg, color: card.bottomText, padding: '0.5rem', borderRadius: 8, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', textDecoration: 'none', border: `1px solid ${card.topColor}33` }}>
                  {card.bottomBadge}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── RECOMMENDED FOR YOU ──────────────────────── */}
        <div style={{ marginTop: '5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>Recommended for You</h2>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginBottom: '2.5rem' }}>Based on your profile and skills set</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {careerPaths.map((path, pi) => (
              <div key={pi} style={{ background: path.bg, border: path.highlight ? '1px solid #BFDBFE' : '1px solid #F1F5F9', borderRadius: 20, padding: '1.5rem 2rem', boxShadow: path.highlight ? '0 4px 24px rgba(59,130,246,0.08)' : '0 2px 8px rgba(0,0,0,0.04)' }}>
                {/* Path header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ background: path.badgeBg, color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.7rem', fontWeight: 900 }}>{path.badge}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: path.badgeBg + '20', padding: '0.2rem 0.6rem', borderRadius: 999 }}>
                      <span style={{ color: path.badgeBg, fontSize: '0.75rem' }}>◆</span>
                      <span style={{ color: path.badgeBg, fontSize: '0.75rem', fontWeight: 800 }}>{path.steps}</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>{path.label} <strong style={{ color: '#000' }}>{path.target}</strong> ›</span>
                  </div>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600 }}>
                    <Heart size={15} /> Save path
                  </button>
                </div>

                {/* Role progression row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  {/* User avatar */}
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid #E5E7EB', overflow: 'hidden' }}>
                    <Image src="/ram_profile.png" alt="Ram" width={44} height={44} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ width: 24, height: 2, background: '#D1D5DB' }} />

                  {path.roles.map((role, ri) => (
                    <div key={ri} style={{ display: 'flex', alignItems: 'center', flex: ri < path.roles.length - 1 ? 1 : 0 }}>
                      {/* Node */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', border: role.final ? '3px solid #000' : '2px solid #D1D5DB', background: role.final ? '#000' : '#fff', flexShrink: 0 }} />
                      </div>

                      {/* Card */}
                      <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '0.85rem 1rem', marginLeft: 0, marginRight: 0, width: 180, flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111827', lineHeight: 1.3, margin: 0 }}>{role.title}</p>
                          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D1D5DB', padding: 0, flexShrink: 0 }}>···</button>
                        </div>
                        {role.skills !== undefined && role.skills !== null && (
                          <>
                            <p style={{ fontSize: '0.7rem', color: '#9CA3AF', margin: '0 0 0.3rem' }}>You have {role.skills} of {role.total} most common skills for role</p>
                            <div style={{ width: '100%', height: 4, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden', marginBottom: '0.4rem' }}>
                              <div style={{ height: '100%', width: `${Math.round((role.skills / (role.total || 1)) * 100)}%`, background: path.badgeBg, borderRadius: 99 }} />
                            </div>
                            {role.leadership && (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <span style={{ fontSize: '0.65rem', color: '#F59E0B' }}>⭐</span>
                                <span style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 600 }}>Leadership role</span>
                              </div>
                            )}
                          </>
                        )}
                        {role.extra && <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 700, margin: 0 }}>{role.extra}</p>}
                      </div>

                      {/* Connecting line to next */}
                      {ri < path.roles.length - 1 && (
                        <div style={{ flex: 1, height: 2, background: '#E5E7EB', minWidth: 20 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RESUME UPLOAD ────────────────────────────── */}
        <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid #E5E7EB' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 900, color: '#000', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Not sure where to start?</h3>
          <p style={{ textAlign: 'center', color: '#6B7280', fontSize: '0.9rem', marginBottom: '2rem' }}>Upload your resume and we'll map your best-fit Hertz opportunities instantly.</p>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <ResumeUploadSection />
          </div>
        </div>

      </div>
    </main>
  )
}
