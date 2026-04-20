import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Heart } from 'lucide-react'
import { ResumeUploadSection } from '@/components/ResumeUpload'

const journeyCards = [
  { title: 'Fleet Operations Coordinator', vertical: 'Fleet Management', topColor: '#f59e0b', bottomBadge: 'HIGH MATCH', bottomBg: 'rgba(245,158,11,0.1)', bottomText: '#f59e0b', img: '🚗' },
  { title: 'HR Learning Program Coordinator', vertical: 'People Development', topColor: '#ec4899', bottomBadge: 'FUTURE MOVE', bottomBg: 'rgba(236,72,153,0.1)', bottomText: '#ec4899', img: '👥' },
  { title: 'Operations Supervisor', vertical: 'Core Operations', topColor: '#f59e0b', bottomBadge: 'FAST TRACK', bottomBg: 'rgba(245,158,11,0.1)', bottomText: '#f59e0b', img: '📊' },
  { title: 'Technology Program Coordinator', vertical: 'Tech & Digital', topColor: '#ec4899', bottomBadge: 'WILD CARD', bottomBg: 'rgba(236,72,153,0.1)', bottomText: '#ec4899', img: '💻' },
]

const careerPaths = [
  {
    badge: 'Desired path',
    badgeBg: '#ec4899',
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
    badgeBg: '#f59e0b',
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
    badgeBg: '#f59e0b',
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
    <main style={{ background: '#030B17', minHeight: '100vh', color: '#fff' }}>

      {/* ── HERO BANNER ─────────────────────────────── */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <Image src="/hero-banner.png" alt="Hertz fleet" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)' }} />

        <div style={{ position: 'absolute', left: '2.5rem', top: '50%', transform: 'translateY(-50%)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            Opportunities<br />Curated For You.
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <Link href="/your-move" style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', boxShadow: '0 10px 20px rgba(236, 72, 153, 0.3)' }}>
              Explore Journeys
            </Link>
            <Link href="/jobs" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              View Vacancies
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', right: '2.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 900, fontSize: '1.1rem', color: '#fff', margin: 0 }}>Ram</p>
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: '0.2rem 0 0.5rem' }}>Your profile is looking awesome</p>
            <Link href="/your-move" style={{ color: '#ec4899', fontSize: '0.75rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Give it some more love <ArrowRight size={12} />
            </Link>
          </div>
          <div style={{ width: 52, height: 52, background: 'linear-gradient(135deg, #f59e0b, #ec4899)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 2 }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
              <Image src="/ram_profile.png" alt="Ram" width={52} height={52} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── SUB NAV TABS ─────────────────────────────── */}
      <div style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 0 }}>
        <div className="container" style={{ display: 'flex', gap: 0 }}>
          {[
            { label: 'Home', href: '/', active: true },
            { label: 'Journeys', href: '/your-move' },
            { label: 'Gigs', href: '/gigs' },
            { label: 'Mentors', href: '/mentors' },
            { label: 'Learn', href: '/dashboard' },
            { label: 'Vacancies', href: '/jobs' },
          ].map(tab => (
            <Link key={tab.href} href={tab.href} style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', color: tab.active ? '#fff' : '#94A3B8', borderBottom: tab.active ? '3px solid #ec4899' : '3px solid transparent', whiteSpace: 'nowrap', transition: 'all 0.3s' }}>
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

        {/* ── EXPLORE FUTURE MOVES ────────────────────── */}
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '3rem', textTransform: 'uppercase' }}>Explore Future Moves</h2>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '1rem' }}>
          {/* NEXT STEP */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
            <div style={{ background: '#ec4899', color: '#fff', padding: '0.25rem 1rem', borderRadius: 999, fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', boxShadow: '0 5px 15px rgba(236, 72, 153, 0.3)' }}>Next Step</div>
            <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #f59e0b', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '0.75rem', boxShadow: '0 0 30px rgba(245,158,11,0.2)' }}>🎯</div>
            <Link href="/your-move" style={{ color: '#f59e0b', fontWeight: 900, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.05em' }}>FIND SUGGESTED MOVES</Link>
          </div>

          <div style={{ flex: 1, borderTop: '2px dashed rgba(255,255,255,0.1)', marginTop: 45 }} />

          {/* YOU TODAY */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', color: '#94A3B8', padding: '0.25rem 1rem', borderRadius: 999, fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>You Today</div>
            <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
              <Image src="/ram_profile.png" alt="Ram" width={80} height={80} style={{ objectFit: 'cover' }} />
            </div>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>Solution Architect</p>
          </div>

          <div style={{ flex: 1, borderTop: '2px dashed rgba(255,255,255,0.1)', marginTop: 45 }} />

          {/* FUTURE MOVE */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
            <div style={{ background: '#f59e0b', color: '#fff', padding: '0.25rem 1rem', borderRadius: 999, fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', boxShadow: '0 5px 15px rgba(245, 158, 11, 0.3)' }}>Future Move</div>
            <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #ec4899', background: 'rgba(236,72,153,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '0.75rem', boxShadow: '0 0 30px rgba(236,72,153,0.2)' }}>📈</div>
            <Link href="/your-move" style={{ color: '#ec4899', fontWeight: 900, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.05em' }}>START A JOURNEY</Link>
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
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>DEVELOPMENT PATHS</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '2.5rem', fontWeight: 700 }}>Curated based on your neural profile and 85% skill alignment</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {careerPaths.map((path, pi) => (
              <div key={pi} style={{ background: path.bg, border: path.highlight ? '1px solid #fbbf24' : '1px solid #F1F5F9', borderRadius: 20, padding: '1.5rem 2rem', boxShadow: path.highlight ? '0 4px 24px rgba(245,158,11,0.08)' : '0 2px 8px rgba(0,0,0,0.04)' }}>
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
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid #E5E7EB', overflow: 'hidden' }}>
                    <Image src="/ram_profile.png" alt="Ram" width={44} height={44} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ width: 24, height: 2, background: '#D1D5DB' }} />

                  {path.roles.map((role, ri) => (
                    <div key={ri} style={{ display: 'flex', alignItems: 'center', flex: ri < path.roles.length - 1 ? 1 : 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', border: role.final ? '3px solid #000' : '2px solid #D1D5DB', background: role.final ? '#000' : '#fff', flexShrink: 0 }} />
                      </div>

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
        <div style={{ marginTop: '4rem', paddingTop: '6rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 1000, color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Ready for the Next Level?</h3>
          <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.95rem', marginBottom: '3rem', fontWeight: 700 }}>Upload your resume and let our AI map your trajectory instantly.</p>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <ResumeUploadSection />
          </div>
        </div>

      </div>
    </main>
  )
}
