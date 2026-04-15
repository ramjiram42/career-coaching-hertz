import { Star, Calendar, MessageCircle, Award } from 'lucide-react'

const MENTORS = [
  { id: '1', name: 'Alice Johnson',   expertiseArea: 'Operations to Director Transitions', rating: 4.9, yearsExperience: 18, sessionsDone: 142, language: 'English', supportedRole: { title: 'Regional Operations Director' } },
  { id: '2', name: 'Chris Berg',      expertiseArea: 'Fleet Management Leadership',         rating: 4.8, yearsExperience: 22, sessionsDone: 89,  language: 'English', supportedRole: { title: 'EVP Fleet Management' } },
  { id: '3', name: 'Sandra Lee',      expertiseArea: 'HR & People Development',             rating: 4.9, yearsExperience: 15, sessionsDone: 201, language: 'English', supportedRole: { title: 'VP People & Culture' } },
  { id: '4', name: 'David Kim',       expertiseArea: 'Finance & P&L Coaching',              rating: 4.7, yearsExperience: 14, sessionsDone: 67,  language: 'English, Korean', supportedRole: { title: 'Finance Director' } },
  { id: '5', name: 'Maria Torres',    expertiseArea: 'Digital Transformation',              rating: 4.8, yearsExperience: 12, sessionsDone: 55,  language: 'English, Spanish', supportedRole: { title: 'VP Technology' } },
  { id: '6', name: 'James Withers',   expertiseArea: 'Revenue & Commercial Strategy',       rating: 4.6, yearsExperience: 20, sessionsDone: 114, language: 'English', supportedRole: { title: 'SVP Revenue Management' } },
  { id: '7', name: 'Priya Sharma',    expertiseArea: 'Analytics & Workforce Intelligence',  rating: 4.9, yearsExperience: 11, sessionsDone: 38,  language: 'English, Hindi', supportedRole: { title: 'Director Data & Analytics' } },
  { id: '8', name: 'Thomas Grant',    expertiseArea: 'Customer Experience Leadership',      rating: 4.7, yearsExperience: 16, sessionsDone: 92,  language: 'English', supportedRole: { title: 'VP Customer Experience' } },
  { id: '9', name: 'Nina Okafor',     expertiseArea: 'Franchise & Airport Strategy',        rating: 4.8, yearsExperience: 13, sessionsDone: 71,  language: 'English, French', supportedRole: { title: 'Regional Director Franchise' } },
]

export default function MentorsPage() {
  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', padding: '2.5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FFB800', marginBottom: '0.4rem' }}>Hertz Internal Network</p>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em', marginBottom: '0.4rem' }}>Mentor Directory</h1>
          <p style={{ color: '#6B7280' }}>Connect with experienced Hertz directors and managers who can guide your transition.</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {MENTORS.map(mentor => (
            <div key={mentor.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Avatar & Rating */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.5rem', color: '#000', flexShrink: 0 }}>
                    {mentor.name.charAt(0)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#FEF3C7', padding: '0.3rem 0.75rem', borderRadius: 999, color: '#92400E', fontWeight: 800, fontSize: '0.85rem' }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" /> {mentor.rating}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#000', marginBottom: '0.25rem' }}>{mentor.name}</h3>
                <p style={{ color: '#FFB800', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem' }}>{mentor.expertiseArea}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#6B7280' }}>
                    <Award size={14} color="#9CA3AF" />
                    <span><strong style={{ color: '#374151' }}>{mentor.yearsExperience} years</strong> experience</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#6B7280' }}>
                    <Star size={14} color="#9CA3AF" />
                    <span><strong style={{ color: '#374151' }}>{mentor.sessionsDone}</strong> sessions completed</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#6B7280' }}>
                    <MessageCircle size={14} color="#9CA3AF" />
                    <span>Speaks <strong style={{ color: '#374151' }}>{mentor.language}</strong></span>
                  </div>
                </div>

                {mentor.supportedRole && (
                  <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '0.6rem 0.9rem', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.7rem', color: '#92400E', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Specialises in</p>
                    <p style={{ fontSize: '0.875rem', color: '#111827', fontWeight: 700 }}>{mentor.supportedRole.title}</p>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <Calendar size={15} /> Book
                </button>
                <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                  <MessageCircle size={15} /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
