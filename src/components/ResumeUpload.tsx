'use client';

import { UploadCloud, Loader2, CheckCircle, ArrowRight, Briefcase, Target } from "lucide-react"
import { useState, useRef } from 'react'
import Link from 'next/link'

export function ResumeUploadSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(false)
  const [progressText, setProgressText] = useState('Analysing Experience...');
  const fileInputRef = useRef<HTMLInputElement>(null)

  const suggestedRoles = [
    { role: 'Regional Operations Director', vertical: 'Operations', match: 94, time: '2-3 Years', theme: { badgeBg: '#EC4899', bg: '#fff', border: '#FBCFE8', glow: 'rgba(236,72,153,0.1)' } },
    { role: 'Fleet Operations Leader', vertical: 'Fleet Management', match: 88, time: '1-2 Years', theme: { badgeBg: '#14B8A6', bg: '#fff', border: '#CCFBF1', glow: 'rgba(20,184,166,0.1)' } },
    { role: 'VP Operations', vertical: 'Executive', match: 82, time: '4-5 Years', theme: { badgeBg: '#3B82F6', bg: '#fff', border: '#BFDBFE', glow: 'rgba(59,130,246,0.1)' } }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      setProgressText('Analysing Experience...');
      
      setTimeout(() => setProgressText('Extracting Skills...'), 1000);
      setTimeout(() => setProgressText('Mapping to Hertz Architecture...'), 2000);
      setTimeout(() => setProgressText('Finalizing Profile Match...'), 3000);

      setTimeout(() => {
        setIsUploading(false);
        setResumeUploaded(true);
      }, 4000);
    }
  }

  /* ── UPLOAD STATE ────────────────────────────── */
  if (!resumeUploaded) {
    return (
      <div
        onClick={() => !isUploading && fileInputRef.current?.click()}
        style={{
          padding: '4rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: isUploading ? 'default' : 'pointer',
          border: isUploading ? '2px solid #FFD100' : '2px dashed #D1D5DB',
          borderRadius: 28,
          background: isUploading ? '#FFFBEB' : '#fff',
          boxShadow: isUploading ? '0 10px 40px rgba(255,209,0,0.15)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          gap: '1.25rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".pdf,.doc,.docx" onChange={handleFileUpload} />

        {isUploading ? (
          <>
            <div style={{ position: 'absolute', top: 0, left: 0, height: 4, background: '#FFD100', width: '100%', animation: 'loadingBar 4s linear backwards' }} />
            <style>{`
              @keyframes loadingBar { 0% { width: 0%; } 100% { width: 100%; } }
              @keyframes pulseSlow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(0.95); } }
            `}</style>
            <div style={{ animation: 'pulseSlow 1.5s infinite', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <div style={{ width: 80, height: 80, background: '#fff', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(255,209,0,0.25)', marginBottom: '1.5rem' }}>
                 <Loader2 size={36} color="#FFD100" style={{ animation: 'spin 1.2s linear infinite' }} />
               </div>
               <p style={{ fontWeight: 900, fontSize: '1.2rem', color: '#000', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' }}>AI Analysis in Progress</p>
               <p style={{ color: '#B45309', fontSize: '0.9rem', fontWeight: 600 }}>{progressText}</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ width: 72, height: 72, background: 'linear-gradient(135deg, #FFD100 0%, #F59E0B 100%)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 25px rgba(245,158,11,0.25)', transform: 'rotate(-5deg)', transition: 'transform 0.2s' }}>
              <UploadCloud size={32} color="#000" style={{ transform: 'rotate(5deg)' }} />
            </div>
            <div>
              <p style={{ fontWeight: 900, fontSize: '1.5rem', color: '#000', textTransform: 'uppercase', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Profile Mapping</p>
              <p style={{ color: '#6B7280', fontSize: '0.95rem', maxWidth: 350, lineHeight: 1.5 }}>Upload your professional history to discover your next curated trajectory at Hertz.</p>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', background: '#F9FAFB', padding: '0.4rem 1rem', borderRadius: 999 }}>PDF, DOC, DOCX accepted</div>
          </>
        )}
      </div>
    )
  }

  /* ── SUMMARY STATE ───────────────────────────── */
  return (
    <div style={{ padding: '2.5rem', background: '#fff', borderRadius: 28, border: '1px solid #E5E7EB', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden', animation: 'fadeIn 0.5s ease-out' }}>
      {/* Decorative gradient corner */}
      <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.75rem', borderBottom: '1px solid #F1F5F9', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: '#F0FDFA', border: '2px solid #CCFBF1', padding: '0.75rem', borderRadius: 16 }}>
            <CheckCircle size={28} color="#0D9488" />
          </div>
          <div>
            <h3 style={{ fontWeight: 900, fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#111827', margin: '0 0 0.2rem 0' }}>Profile Digested</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>We mapped your resume to 3 primary paths.</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
           <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#16A34A', display: 'block', marginBottom: '0.2rem' }}>Resume Strength</span>
           <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em' }}>92<span style={{ fontSize: '1rem', color: '#9CA3AF' }}>/100</span></span>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Identified Current Role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: 16, padding: '1.25rem', marginBottom: '2.5rem' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#111827', color: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Briefcase size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6B7280', display: 'block', marginBottom: '0.2rem' }}>Current Identified Role</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000' }}>Branch Manager - Operations</span>
          </div>
        </div>

        {/* Suggested Roles horizontal mini-cards */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Target size={18} color="#FFD100" />
            <h4 style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', color: '#111827', margin: 0, letterSpacing: '0.05em' }}>Tailored Opportunities</h4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {suggestedRoles.map((path, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', background: path.theme.bg, border: `1px solid ${path.theme.border}`, borderRadius: 16, boxShadow: `0 4px 20px ${path.theme.glow}` }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: path.theme.badgeBg, color: '#fff', fontSize: '1rem', fontWeight: 900, width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 10px ${path.theme.badgeBg}80` }}>
                      {path.match}%
                    </div>
                    <div>
                      <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', margin: '0 0 0.3rem 0' }}>{path.role}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: path.theme.badgeBg, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{path.vertical}</span>
                        <span style={{ fontSize: '0.7rem', color: '#D1D5DB' }}>|</span>
                        <span style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 600 }}>Est. {path.time}</span>
                      </div>
                    </div>
                 </div>
                 <Link href="/career-tree" style={{ color: path.theme.badgeBg, background: path.theme.badgeBg + '15', padding: '0.6rem 1rem', borderRadius: 10, fontSize: '0.8rem', fontWeight: 800, textDecoration: 'none' }}>
                   View Journey
                 </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <Link href="/career-tree" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: '#FFD100', color: '#000', padding: '1.2rem 2rem', borderRadius: 16, fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', transition: 'all 0.2s', marginBottom: '1rem', width: '100%', boxShadow: '0 8px 25px rgba(255,209,0,0.3)' }}>
          Explore Full Career Architect <ArrowRight size={18} />
        </Link>
        <button
          onClick={() => { setResumeUploaded(false); }}
          style={{ display: 'block', width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.5rem', transition: 'color 0.2s' }}
        >
          Scan a Different Resume
        </button>
      </div>
    </div>
  )
}
