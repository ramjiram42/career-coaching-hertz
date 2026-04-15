import Link from 'next/link'
import { Zap, Clock, MapPin, ArrowRight } from 'lucide-react'

const gigs = [
  { title: 'Fleet Audit Support — 2 Weeks', location: 'Dallas, TX', type: 'Short Term', pay: '$28/hr', dept: 'Fleet Management', urgent: true },
  { title: 'Customer Experience Coach — 1 Month', location: 'Los Angeles, CA', type: 'Project', pay: '$32/hr', dept: 'Core Operations', urgent: false },
  { title: 'Digital Systems Rollout Lead', location: 'Remote', type: 'Project', pay: '$35/hr', dept: 'Technology', urgent: true },
  { title: 'HR Onboarding Facilitator', location: 'New York, NY', type: 'Short Term', pay: '$30/hr', dept: 'People Development', urgent: false },
  { title: 'Financial Reporting Analyst — Q2', location: 'Chicago, IL', type: 'Seasonal', pay: '$33/hr', dept: 'Finance', urgent: false },
  { title: 'Mobility Operations Support', location: 'Miami, FL', type: 'Short Term', pay: '$26/hr', dept: 'Mobility', urgent: true },
]

export default function GigsPage() {
  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', padding: '2.5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#FFB800', marginBottom: '0.4rem' }}>Short-Term Opportunities</p>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em', marginBottom: '0.4rem' }}>Gigs</h1>
          <p style={{ color: '#6B7280' }}>Project-based and short-term assignments across Hertz — build skills while adding real value.</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {gigs.map((gig, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ background: '#FFD100', color: '#000', padding: '0.2rem 0.65rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>{gig.type}</span>
                    {gig.urgent && <span style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', padding: '0.2rem 0.65rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>Urgent</span>}
                  </div>
                  <div style={{ background: '#F0FDF4', color: '#16A34A', padding: '0.2rem 0.65rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900 }}>{gig.pay}</div>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', lineHeight: 1.3, marginBottom: '0.5rem' }}>{gig.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#9CA3AF', fontWeight: 600, marginBottom: '0.25rem' }}>
                  <span style={{ marginRight: '0.75rem' }}>📍 {gig.location}</span>
                  <span>🏢 {gig.dept}</span>
                </p>
              </div>
              <Link href="/jobs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: '#000', color: '#fff', padding: '0.75rem', borderRadius: 12, fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
