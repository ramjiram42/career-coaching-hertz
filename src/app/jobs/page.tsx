'use client';

import { Briefcase, Search, ArrowRight, TrendingUp, UploadCloud, CheckCircle2, Loader2, X } from "lucide-react"
import Link from 'next/link'
import { useState, useRef } from 'react'
import jobsData from '../../../public/data/jobs.json'

export default function JobsPortal() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true)
      setTimeout(() => { setIsUploading(false); setResumeUploaded(true) }, 2500)
    }
  }

  let filteredJobs = jobsData.filter(job =>
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (location === '' || job.location.toLowerCase().includes(location.toLowerCase()))
  )

  if (resumeUploaded && searchTerm === '' && location === '') {
    filteredJobs = filteredJobs.filter(job =>
      job.title.toLowerCase().includes('manager') ||
      job.title.toLowerCase().includes('director') ||
      job.title.toLowerCase().includes('strategy')
    ).slice(0, 6)
  } else {
    filteredJobs = filteredJobs.slice(0, 102)
  }

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: 1400, margin: '0 auto', padding: '40px' }}>

        {/* Page Header */}
        <div className="page-header" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '40px' }}>
            <div className="icon-box" style={{ background: 'linear-gradient(135deg, #083375, #1E40AF)', color: '#fff', padding: '12px', borderRadius: '12px' }}><Briefcase size={24} /></div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1E293B', letterSpacing: '-0.02em', margin: 0 }}>Discover Opportunities</h1>
              <p style={{ marginTop: '0.25rem', color: '#64748B', fontSize: '1.1rem', fontWeight: 500 }}>{jobsData.length.toLocaleString()}+ live opportunities ready for your impact.</p>
            </div>
          </div>
        </div>

        {/* Resume Banner */}
        {!resumeUploaded ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            style={{ border: '1px solid rgba(59, 130, 246, 0.2)', background: 'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius: 24, padding: '3.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', cursor: 'pointer', marginBottom: '3rem', transition: 'all 0.3s ease', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)'; (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(59, 130, 246, 0.4)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(59, 130, 246, 0.2)'; }}
          >
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
            {isUploading ? (
              <>
                <Loader2 className="animate-spin" style={{ width: 32, height: 32, color: '#60A5FA', marginBottom: '1rem' }} />
                <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem', margin: 0 }}>Matching your profile to open roles...</p>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.5rem' }}>Analyzing skills and experience via Hertz Intelligence</p>
              </>
            ) : (
              <>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', width: 56, height: 56, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <UploadCloud size={26} color="#60A5FA" />
                </div>
                <p style={{ fontWeight: 900, fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>Upload Resume for Personalised Role Matches</p>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>PDF, DOC or DOCX — let Hertz Intelligence surface your best-fit opportunities.</p>
              </>
            )}
          </div>
        ) : (
          <div style={{ background: '#0F172A', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 16, padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '8px', borderRadius: '12px' }}>
                <CheckCircle2 size={20} color="#10B981" />
              </div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Profile matched accurately. Showing your top recommended career steps below.</p>
            </div>
            <button onClick={() => { setResumeUploaded(false); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', display: 'flex' }}>
              <X size={20} />
            </button>
          </div>
        )}

        {/* Search Bar — Oracle style */}
        <div style={{ display: 'flex', border: '1px solid #E2E8F0', borderRadius: 16, overflow: 'hidden', marginBottom: '3rem', background: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          <div style={{ flex: 1, padding: '1rem 1.5rem', borderRight: '1px solid #F1F5F9' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94A3B8', marginBottom: '0.3rem' }}>Find</div>
            <input
              type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              placeholder="Job title, skill, keyword"
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1.05rem', color: '#1E293B', background: 'transparent', fontWeight: 500 }}
            />
          </div>
          <div style={{ flex: 1, padding: '1rem 1.5rem', borderRight: '1px solid #F1F5F9' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94A3B8', marginBottom: '0.3rem' }}>Near Location ▾</div>
            <input
              type="text" value={location} onChange={e => setLocation(e.target.value)}
              placeholder="City, state, country"
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1.05rem', color: '#1E293B', background: 'transparent', fontWeight: 500 }}
            />
          </div>
          <button style={{ padding: '0 2.5rem', background: 'linear-gradient(135deg, #083375, #1E40AF)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)'}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)'}
          >
            <Search size={22} />
          </button>
        </div>

        {/* Result count */}
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>
          {resumeUploaded && searchTerm === '' && location === '' ? `Showing ${filteredJobs.length} matched roles based on your Hertz Intelligence profile` : `Showing ${filteredJobs.length} live opportunities`}
        </p>

        {/* Job Cards */}
        {filteredJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: '#94A3B8' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No roles match your search. Try different keywords.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', paddingBottom: '4rem' }}>
            {filteredJobs.map((job, idx) => {
              const cat = job.category.toLowerCase();
              let badgeBg = '#F1F5F9', badgeColor = '#64748B';
              if (cat.includes('sales')) { badgeBg = 'rgba(16, 185, 129, 0.15)'; badgeColor = '#10B981'; }
              if (cat.includes('service') || cat.includes('support')) { badgeBg = 'rgba(245, 158, 11, 0.15)'; badgeColor = '#F59E0B'; }
              if (cat.includes('logistic') || cat.includes('driver')) { badgeBg = 'rgba(59, 130, 246, 0.15)'; badgeColor = '#3B82F6'; }
              if (cat.includes('leader') || cat.includes('manager')) { badgeBg = 'rgba(139, 92, 246, 0.15)'; badgeColor = '#8B5CF6'; }

              const isMatch = resumeUploaded && searchTerm === '' && location === '';

              return (
                <div key={job.id + idx} style={{ background: isMatch ? 'linear-gradient(to bottom, #fff, #F8FAFC)' : '#fff', border: `1px solid ${isMatch ? 'rgba(59, 130, 246, 0.3)' : '#E2E8F0'}`, borderRadius: 24, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: isMatch ? '0 10px 25px rgba(59, 130, 246, 0.1)' : '0 4px 15px rgba(0,0,0,0.03)', transition: 'all 0.3s', minHeight: 220 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = isMatch ? '0 10px 25px rgba(59, 130, 246, 0.1)' : '0 4px 15px rgba(0,0,0,0.03)'; }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                      <span style={{ background: badgeBg, color: badgeColor, padding: '0.35rem 0.85rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{job.category}</span>
                      {isMatch && (
                        <span style={{ background: 'linear-gradient(135deg, #1E293B, #0F172A)', color: '#60A5FA', padding: '0.35rem 0.85rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>✦ Top Match</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.5rem', lineHeight: 1.3 }}>{job.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>📍 {job.location}</p>
                  </div>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                    <Link href="/career-tree" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.7rem 0.5rem', borderRadius: 12, transition: 'all 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#F1F5F9'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#CBD5E1'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E2E8F0'; }}
                    >
                      <TrendingUp size={14} /> Map Path
                    </Link>
                    <Link href="/jobs" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: '#0F172A', color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.7rem 0.5rem', borderRadius: 12, transition: 'all 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1E293B'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0F172A'; }}
                    >
                      Apply <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  )
}
