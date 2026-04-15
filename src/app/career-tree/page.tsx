import Link from 'next/link'
import { ChevronRight, TrendingUp, Users, Briefcase, ArrowRight } from 'lucide-react'

const verticals = [
  {
    id: 'fleet',
    title: 'Fleet Management',
    executive: 'Chris Berg — EVP, Fleet Management',
    owns: ['Vehicle acquisition, utilization, readiness, and lifecycle management', 'Fleet logistics and operational efficiency'],
    entryRoles: ['Fleet Operations Coordinator', 'Fleet Logistics Analyst', 'Fleet Readiness or Utilization Support'],
    growthPath: ['Fleet Operations Manager', 'Senior Fleet Manager', 'Regional Fleet Operations Leader'],
    skills: ['Operational discipline', 'Process improvement', 'Team coordination', 'Comfort with metrics and daily execution'],
    whyFit: "Fleet roles provide structure, routines, and clear ownership. Ram's success in fast-paced, high-volume environments translates directly to daily fleet execution and coordination. The ladder is clearly defined, helping Ram see what's next.",
    color: '#FFD100',
    openRoles: ['Fleet Coordinator', 'Fleet Operations / Processing Supervisor', 'Fleet Readiness or Utilization Support'],
    openRolesWhy: 'Emphasize execution, coordination, and daily ownership over deep technical expertise.',
    devNeeded: ['Fleet systems and reporting basics', 'SOP ownership and readiness routines', 'Intro to utilization and lifecycle metrics'],
  },
  {
    id: 'legal',
    title: 'Legal, Risk & Compliance',
    executive: 'Piero Bussani — Chief Legal Officer',
    owns: ['Legal operations, governance, compliance, and enterprise risk management'],
    entryRoles: ['Compliance Operations Analyst', 'Risk Management Program Coordinator', 'Legal Operations Coordinator'],
    growthPath: ['Senior Compliance Analyst', 'Risk or Governance Program Manager', 'Enterprise Compliance Leader'],
    skills: ['Attention to detail', 'Policy interpretation', 'Structured thinking', 'Risk awareness'],
    whyFit: "This vertical offers high structure, clarity, and process — aligning with Ram's need for stability and direction. Success is driven by consistency and accountability. Allows building confidence in a supportive, rules-based environment.",
    color: '#1E293B',
    openRoles: [],
    openRolesWhy: '',
    devNeeded: [],
  },
  {
    id: 'hr',
    title: 'Human Resources & People Development',
    executive: 'Jyoti Chopra — EVP & Chief HR Officer',
    owns: ['Talent, learning, onboarding, employee experience, and people strategy'],
    entryRoles: ['HR Operations Coordinator', 'Learning Program Coordinator', 'Talent or Onboarding Specialist'],
    growthPath: ['Learning Program Manager', 'HR Business Partner', 'Talent Development or Employee Experience Leader'],
    skills: ['Coaching and development mindset', 'Communication and facilitation', 'Program coordination', 'Employee advocacy'],
    whyFit: "Ram has demonstrated a strong passion for developing others. This path allows turning early challenges into purpose by helping create better onboarding and support for others. Work is relationship-driven, structured, and mission-oriented.",
    color: '#FFD100',
    openRoles: ['HR Operations Coordinator', 'Learning Program or Training Coordinator', 'Onboarding or Employee Experience Specialist'],
    openRolesWhy: 'Roles value organisation, follow-through, and empathy — strong alignment to Ram\'s interest in developing others.',
    devNeeded: ['HR systems navigation (e.g., Oracle)', 'Learning operations and program coordination', 'Stakeholder communication fundamentals'],
  },
  {
    id: 'comms',
    title: 'Communications & Engagement',
    executive: 'Lauren Fritts — SVP & Chief Communications Officer',
    owns: ['Internal communications, change messaging, executive and enterprise communications'],
    entryRoles: ['Internal Communications Coordinator', 'Change & Engagement Program Coordinator', 'Executive Communications Support'],
    growthPath: ['Internal Communications Manager', 'Change Management Lead', 'Enterprise Communications Leader'],
    skills: ['Storytelling', 'Written and verbal communication', 'Stakeholder engagement', 'Change awareness'],
    whyFit: "Ram's leadership background suggests comfort with influencing and aligning others. This vertical rewards clarity and consistency, providing a way to shape culture and employee experience without frontline operational pressure.",
    color: '#1E293B',
    openRoles: [],
    openRolesWhy: '',
    devNeeded: [],
  },
  {
    id: 'finance',
    title: 'Finance & Enterprise Planning',
    executive: 'Scott Haralson — EVP & Chief Financial Officer',
    owns: ['Financial planning, accounting, audit, treasury, and enterprise reporting'],
    entryRoles: ['Finance Operations Analyst', 'Business Planning Coordinator', 'Financial Reporting Analyst'],
    growthPath: ['Senior Financial Analyst', 'Finance Business Partner', 'Enterprise Planning Leader'],
    skills: ['Analytical thinking', 'Business acumen', 'Data interpretation', 'Process rigor'],
    whyFit: "A strong intentional development choice for Ram to build business acumen and structured problem-solving skills. Finance offers predictable expectations and strong mentorship models — best as a deliberate track, not an initial placement.",
    color: '#FFD100',
    openRoles: [],
    openRolesWhy: '',
    devNeeded: [],
  },
  {
    id: 'mobility',
    title: 'Mobility & Shared Mobility',
    executive: 'Doria Holbrook — EVP, Mobility',
    owns: ['Shared mobility models, mobility operations, and future mobility solutions'],
    entryRoles: ['Mobility Operations Coordinator', 'Shared Mobility Program Analyst', 'Mobility Site Operations Lead'],
    growthPath: ['Mobility Operations Manager', 'Regional Mobility Lead', 'Mobility Strategy Leader'],
    skills: ['Innovation mindset', 'Customer experience focus', 'Operations management', 'Change adaptability'],
    whyFit: "This vertical blends operations with innovation, appealing to Ram's energy and adaptability. Provides forward-looking career options while still offering structure and progression — ideal if Ram is motivated by being part of what's next.",
    color: '#1E293B',
    openRoles: ['Mobility Operations Coordinator', 'Shared Mobility Program Analyst'],
    openRolesWhy: 'Blend of operations, customer experience, and innovation — suitable for adaptable, high-potential employees.',
    devNeeded: ['Mobility model fundamentals', 'Pilot execution and CX metrics', 'Cross-functional coordination'],
  },
  {
    id: 'ops',
    title: 'Core Operations — North America',
    executive: 'Mike Moore — EVP & Chief Operating Officer',
    owns: ['End-to-end operational execution across North America'],
    entryRoles: ['Operations Supervisor', 'Area Operations Coordinator', 'Performance & Readiness Analyst'],
    growthPath: ['Operations Manager', 'Regional Operations Leader', 'Enterprise Operations Executive'],
    skills: ['People leadership', 'Operational execution', 'Performance management', 'Accountability'],
    whyFit: "Ram's background in team leadership and high-pressure environments aligns strongly to operations leadership. This vertical offers some of the clearest promotion ladders at Hertz — with the right coaching, Ram can grow into leadership with clarity.",
    color: '#FFD100',
    openRoles: ['Operations Supervisor', 'Vehicle Operations Supervisor', 'Manager Trainee / Operations Management Trainee'],
    openRolesWhy: 'Clear promotion ladders and strong internal mobility — people leadership and execution skills are prioritised over tenure.',
    devNeeded: ['Performance coaching fundamentals', 'Scheduling and labour planning', 'Safety, compliance, and escalation management'],
  },
  {
    id: 'international',
    title: 'International Operations',
    executive: 'Elyes Mrad — EVP, Hertz International',
    owns: ['International markets, country operations, and regional execution'],
    entryRoles: ['International Operations Program Manager', 'Regional Operations Liaison'],
    growthPath: ['Country Operations Leader', 'Regional General Manager'],
    skills: ['Cross-cultural leadership', 'Strategic thinking', 'Operational scalability', 'Global mindset'],
    whyFit: "Best positioned as a future pathway once Ram has a strong domestic foundation. Appeals to high-potential leaders who thrive on complexity and growth — reinforces a long-term career vision within Hertz.",
    color: '#1E293B',
    openRoles: [],
    openRolesWhy: '',
    devNeeded: [],
  },
  {
    id: 'tech',
    title: 'Technology & Digital Enablement',
    executive: 'Dhriti Saha — EVP & Chief Information & Technology Officer',
    owns: ['Enterprise technology, digital platforms, product and systems enablement'],
    entryRoles: ['Technology Program Coordinator', 'Product Operations Analyst', 'Business Systems Adoption Lead'],
    growthPath: ['Product Operations Manager', 'Digital Transformation Lead', 'Enterprise Technology Leader'],
    skills: ['Systems thinking', 'Program coordination', 'Change enablement', 'Business-to-technology translation'],
    whyFit: "These roles focus on coordination and adoption — not deep technical expertise. Strong alignment with Ram's ability to learn quickly and support others through change. Provides structure while exposing him to enterprise-level initiatives.",
    color: '#FFD100',
    openRoles: ['Technology Program Coordinator', 'Product or Business Operations Analyst (entry level)', 'Systems Adoption or Change Enablement Lead'],
    openRolesWhy: 'Focus on coordination, rollout, and adoption rather than coding — ideal bridge from operations into enterprise exposure.',
    devNeeded: ['Program management fundamentals', 'Change enablement and systems adoption', 'Executive-level communication basics'],
  },
]

const nearTermVerticals = verticals.filter(v => v.openRoles.length > 0)

export default function CareerPathsPage() {
  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* Page Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', padding: '2.5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#FFB800', marginBottom: '0.5rem' }}>General Career Pathing</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Career Verticals for Ram</h1>
          <p style={{ color: '#6B7280', maxWidth: 640 }}>Nine corporate verticals mapped to Ram's skills and profile. Each vertical shows the executive sponsor, realistic entry roles, growth ladder, and a personal fit analysis.</p>
        </div>
      </div>

      {/* Vertical Cards */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {verticals.map((v, i) => (
            <div key={v.id} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              {/* Card Header */}
              <div style={{ background: v.color === '#FFD100' ? '#FFFBEB' : '#111827', padding: '1.75rem 2.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <span style={{ background: v.color === '#FFD100' ? '#FFD100' : '#FFD100', color: '#000', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vertical {i + 1}</span>
                    {v.openRoles.length > 0 && (
                      <span style={{ background: '#16A34A', color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Roles Open Now</span>
                    )}
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: v.color === '#FFD100' ? '#111827' : '#FFFFFF', letterSpacing: '-0.03em', margin: 0 }}>{v.title}</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: v.color === '#FFD100' ? '#92400E' : '#9CA3AF', marginBottom: '0.2rem' }}>Executive Sponsor</p>
                  <p style={{ fontWeight: 800, fontSize: '0.9rem', color: v.color === '#FFD100' ? '#111827' : '#FFFFFF' }}>{v.executive}</p>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem 2.25rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>

                {/* What this Vertical Owns */}
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: '0.75rem' }}>What It Owns</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {v.owns.map(item => (
                      <li key={item} style={{ fontSize: '0.85rem', color: '#374151', fontWeight: 500, paddingLeft: '0.75rem', borderLeft: '3px solid #FFD100' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Entry Roles + Growth */}
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: '0.75rem' }}>Entry / Transition Roles</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {v.entryRoles.map(r => (
                      <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <div style={{ width: 6, height: 6, background: '#FFD100', borderRadius: '50%', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.85rem', color: '#374151', fontWeight: 600 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: '0.75rem' }}>Growth Path</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {v.growthPath.map((r, idx) => (
                      <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#9CA3AF', width: 16, textAlign: 'center' }}>{idx + 1}</span>
                        <span style={{ fontSize: '0.85rem', color: '#374151', fontWeight: 600 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: '0.75rem' }}>Skills That Enable Movement</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {v.skills.map(s => (
                      <span key={s} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151', padding: '0.3rem 0.65rem', borderRadius: 8, fontSize: '0.78rem', fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* Why Fit */}
                <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 14, padding: '1.25rem' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#92400E', marginBottom: '0.6rem' }}>Why This Fits Ram</p>
                  <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.65, fontWeight: 500 }}>{v.whyFit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── NEAR-TERM OPEN ROLES ─────────────────────────────────────────── */}
      <div style={{ background: '#111827', marginTop: '1rem', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#FFD100', marginBottom: '0.5rem' }}>Near-Term Mobility Opportunities</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Current Job Postings for Ram</h2>
            <p style={{ color: '#9CA3AF', maxWidth: 560 }}>Roles Ram could apply for now with focused, short-term development and manager sponsorship.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {nearTermVerticals.map(v => (
              <div key={v.id + '-open'} style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 20, padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'inline-block', background: '#FFD100', color: '#000', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{v.title.split(' ')[0]} {v.title.split(' ')[1] || ''}</div>
                  <p style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700, marginBottom: '0.25rem' }}>{v.executive}</p>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>{v.title}</h3>
                </div>

                <div>
                  <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748B', marginBottom: '0.5rem' }}>Open Roles</p>
                  {v.openRoles.map(r => (
                    <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                      <div style={{ width: 5, height: 5, background: '#FFD100', borderRadius: '50%', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600 }}>{r}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#0F172A', borderRadius: 12, padding: '0.9rem' }}>
                  <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#64748B', marginBottom: '0.4rem' }}>Dev Needed</p>
                  {v.devNeeded.map(d => (
                    <div key={d} style={{ fontSize: '0.78rem', color: '#94A3B8', marginBottom: '0.2rem' }}>• {d}</div>
                  ))}
                </div>

                <Link href="/jobs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#FFD100', color: '#000', padding: '0.75rem', borderRadius: 12, fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', transition: 'all 0.2s' }}>
                  View Live Postings <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
