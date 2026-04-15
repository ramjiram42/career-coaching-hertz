'use client';

import { UploadCloud, Loader2, FileText, ArrowRight } from "lucide-react"
import { useState, useRef } from 'react'

export function ResumeUploadSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setResumeUploaded(true);
        setShowSummary(true);
      }, 2500);
    }
  }

  /* ── UPLOAD STATE ────────────────────────────── */
  if (!resumeUploaded) {
    return (
      <div
        onClick={() => fileInputRef.current?.click()}
        style={{
          padding: '3.5rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          border: '2px dashed #D1D5DB',
          borderRadius: 28,
          background: '#fff',
          transition: 'all 0.25s',
          gap: '1rem',
        }}
      >
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".pdf,.doc,.docx" onChange={handleFileUpload} />

        {isUploading ? (
          <>
            <Loader2 style={{ width: 40, height: 40, color: '#FFD100', animation: 'spin 1s linear infinite' }} />
            <div>
              <p style={{ fontWeight: 900, fontSize: '1.1rem', color: '#000', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 4 }}>Analysing Experience...</p>
              <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Mapping career transitions...</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ width: 64, height: 64, background: '#FFD100', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(255,209,0,0.35)' }}>
              <UploadCloud size={28} color="#000" />
            </div>
            <div>
              <p style={{ fontWeight: 900, fontSize: '1.35rem', color: '#000', textTransform: 'uppercase', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Profile Mapping</p>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', maxWidth: 300, lineHeight: 1.5 }}>Upload your professional history to discover your next Hertz opportunity.</p>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>PDF, DOC, DOCX accepted</div>
          </>
        )}
      </div>
    )
  }

  /* ── SUMMARY STATE ───────────────────────────── */
  return (
    <div style={{ padding: '2.5rem', background: '#fff', borderRadius: 28, border: '3px solid #FFD100' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem', borderBottom: '1px solid #F1F5F9', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ background: '#FFD100', padding: '0.5rem', borderRadius: 10 }}>
            <FileText size={22} color="#000" />
          </div>
          <span style={{ fontWeight: 900, fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#000' }}>Profile Summary</span>
        </div>
        <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', padding: '0.3rem 0.9rem', borderRadius: 999, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
          Match Verified
        </span>
      </div>

      {/* Core Expertise */}
      <div style={{ marginBottom: '1.75rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: '0.75rem' }}>Core Expertise</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Operations Management', 'Customer Strategy', 'Fleet Logistics', 'Team Leadership'].map(tag => (
            <span key={tag} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151', padding: '0.4rem 0.9rem', borderRadius: 10, fontSize: '0.8rem', fontWeight: 700 }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Insight */}
      <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 14, padding: '1rem 1.25rem', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#B45309', marginBottom: '0.5rem' }}>Career Insight</p>
        <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6, fontWeight: 500 }}>
          Based on your professional history, you are highly qualified for <strong>District Management</strong> or <strong>Regional Strategy</strong> tracks. Recommended focus: advanced P&L modeling.
        </p>
      </div>

      {/* CTA */}
      <a href="/jobs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: '#000', color: '#fff', padding: '1.1rem 2rem', borderRadius: 14, fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.2s', marginBottom: '0.75rem', width: '100%' }}>
        View Suggested Open Roles <ArrowRight size={18} />
      </a>
      <button
        onClick={() => { setResumeUploaded(false); setShowSummary(false); }}
        style={{ display: 'block', width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.5rem', transition: 'color 0.2s' }}
      >
        Upload Different Resume
      </button>
    </div>
  )
}
