'use client';

import { Briefcase, Search, ArrowRight, TrendingUp, UploadCloud, CheckCircle2, Loader2, X } from "lucide-react"
import Link from 'next/link'
import { useState, useRef } from 'react'
import extractedData from '../../../hertz_jobs_extracted.json'

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

  let filteredJobs = extractedData.filter(job =>
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
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <div className="container">

        {/* Page Header */}
        <div className="page-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="icon-box"><Briefcase size={22} /></div>
            <div>
              <h1>Open Roles</h1>
              <p style={{ marginTop: '0.25rem' }}>{extractedData.length.toLocaleString()}+ live opportunities across Hertz locations.</p>
            </div>
          </div>
        </div>

        {/* Resume Banner */}
        {!resumeUploaded ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            style={{ border: '2px dashed #D1D5DB', background: '#FAFAFA', borderRadius: 20, padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', cursor: 'pointer', marginBottom: '2rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#FFD100'; (e.currentTarget as HTMLDivElement).style.background = '#FFFBEB'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#D1D5DB'; (e.currentTarget as HTMLDivElement).style.background = '#FAFAFA'; }}
          >
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
            {isUploading ? (
              <>
                <Loader2 style={{ width: 32, height: 32, color: '#FFD100', marginBottom: '0.75rem' }} />
                <p style={{ color: '#000', fontWeight: 700, fontSize: '1rem' }}>Matching your profile to open roles...</p>
              </>
            ) : (
              <>
                <div style={{ background: '#FFD100', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <UploadCloud size={22} color="#000" />
                </div>
                <p style={{ fontWeight: 800, fontSize: '1rem', color: '#000', marginBottom: '0.25rem' }}>Upload Resume for Personalised Role Matches</p>
                <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>PDF, DOC or DOCX — we'll surface your best-fit Hertz opportunities.</p>
              </>
            )}
          </div>
        ) : (
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 16, padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={22} color="#16A34A" />
              <p style={{ color: '#15803D', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Profile matched — showing your top recommended roles below.</p>
            </div>
            <button onClick={() => { setResumeUploaded(false); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
              <X size={18} />
            </button>
          </div>
        )}

        {/* Search Bar — Oracle style */}
        <div style={{ display: 'flex', border: '1.5px solid #111827', borderRadius: 10, overflow: 'hidden', marginBottom: '2.5rem', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
          <div style={{ flex: 1, padding: '1rem 1.25rem', borderRight: '1px solid #E5E7EB' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: '0.3rem' }}>Find</div>
            <input
              type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              placeholder="Job title, skill, keyword"
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#111827', background: 'transparent', fontWeight: 500 }}
            />
          </div>
          <div style={{ flex: 1, padding: '1rem 1.25rem', borderRight: '1px solid #E5E7EB' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: '0.3rem' }}>Near Location ▾</div>
            <input
              type="text" value={location} onChange={e => setLocation(e.target.value)}
              placeholder="City, state, country"
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#111827', background: 'transparent', fontWeight: 500 }}
            />
          </div>
          <button style={{ padding: '0 2rem', background: '#000', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#FFD100'}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#000'}
          >
            <Search size={20} color="#fff" />
          </button>
        </div>

        {/* Result count */}
        <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 600 }}>
          {resumeUploaded && searchTerm === '' && location === '' ? `Showing ${filteredJobs.length} matched roles` : `Showing ${filteredJobs.length} roles`}
        </p>

        {/* Job Cards */}
        {filteredJobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: '#9CA3AF' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No roles match your search. Try different keywords.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', paddingBottom: '4rem' }}>
            {filteredJobs.map((job, idx) => (
              <div key={job.id + idx} style={{ background: resumeUploaded && searchTerm === '' && location === '' ? '#FFFBEB' : '#fff', border: `1.5px solid ${resumeUploaded && searchTerm === '' && location === '' ? '#FDE68A' : '#E5E7EB'}`, borderRadius: 20, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.2s', minHeight: 200 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ background: '#FFD100', color: '#000', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{job.category}</span>
                    {resumeUploaded && searchTerm === '' && location === '' && (
                      <span style={{ background: '#000', color: '#FFD100', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>✦ Top Pick</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem', lineHeight: 1.4 }}>{job.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#9CA3AF', fontWeight: 600 }}>📍 {job.location}</p>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.6rem' }}>
                  <Link href="/career-tree" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151', textDecoration: 'none', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.6rem 0.5rem', borderRadius: 10 }}>
                    <TrendingUp size={13} /> Map Path
                  </Link>
                  <Link href="/jobs" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', background: '#FFD100', color: '#000', textDecoration: 'none', fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.6rem 0.5rem', borderRadius: 10 }}>
                    Apply <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
