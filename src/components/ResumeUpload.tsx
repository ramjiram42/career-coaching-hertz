'use client';

import { UploadCloud, Loader2, CheckCircle, ArrowRight, Briefcase, Target, User, Cpu, ShieldCheck } from "lucide-react"
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function ResumeUploadSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(true) 
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!resumeUploaded) {
    return (
       <div 
         onClick={() => !isUploading && fileInputRef.current?.click()}
         style={{
           width: '100%',
           background: 'rgba(255,255,255,0.02)',
           border: '2px dashed rgba(245, 158, 11, 0.2)',
           padding: '80px',
           borderRadius: 32,
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           cursor: 'pointer',
           transition: 'all 0.4s ease',
           position: 'relative',
           overflow: 'hidden'
         }}
       >
         <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
         <input type="file" ref={fileInputRef} hidden />
         <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <UploadCloud size={32} color="#f59e0b" />
         </div>
         <h2 style={{ fontSize: 24, fontWeight: 900, color: '#fff', margin: 0, fontFamily: '"Outfit", sans-serif' }}>Upload Professional History</h2>
         <p style={{ color: '#94A3B8', marginTop: 8, fontSize: 14 }}>Let our Neural Engine map your Hertz trajectory</p>
       </div>
    );
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
       <div style={{
         width: '100%',
         maxWidth: 1000,
         background: 'rgba(10, 20, 40, 0.4)',
         backdropFilter: 'blur(30px)',
         border: '1px solid rgba(255,255,255,0.08)',
         borderRadius: 32,
         padding: '50px 60px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
         position: 'relative',
         overflow: 'hidden'
       }}>
          {/* CINEMATIC BACKGROUND ELEMENTS */}
          <div style={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
          <div style={{ position: 'absolute', bottom: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
          
          {/* NEURAL GRID BACKGROUND (SUBTLE) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1000 300">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* LEFT: PROFILE DATA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36, position: 'relative', zIndex: 1 }}>
             <div style={{ 
               position: 'relative',
               width: 130, 
               height: 130, 
               borderRadius: '50%', 
               padding: 5, 
               background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
               boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)'
             }}>
                {/* ORBITAL PULSE EFFECT */}
                <div style={{
                  position: 'absolute',
                  inset: -10,
                  borderRadius: '50%',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  animation: 'pulseOrbital 3s infinite linear'
                }} />
                
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '5px solid #060E1A' }}>
                   <Image src="/ram_profile.png" width={130} height={130} alt="Ram" style={{ objectFit: 'cover' }} />
                </div>

                <div style={{ 
                  position: 'absolute', 
                  bottom: 5, 
                  right: 5, 
                  width: 32, 
                  height: 32, 
                  background: '#10B981', 
                  borderRadius: '50%', 
                  border: '3px solid #060E1A', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                }}>
                   <ShieldCheck size={16} color="#fff" />
                </div>
             </div>

             <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                   <h1 style={{ fontSize: 48, color: '#fff', margin: 0, letterSpacing: '-0.04em', fontWeight: 1000, fontFamily: '"Outfit", sans-serif' }}>Ram</h1>
                   <div style={{ padding: '4px 12px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: 99, fontSize: 10, fontWeight: 900, color: '#f59e0b', letterSpacing: '0.1em' }}>PRECISION MATCH</div>
                </div>
                <p style={{ fontSize: 18, color: '#94A3B8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '4px 0', fontFamily: '"Outfit", sans-serif' }}>
                   Solution Architect
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Cpu size={14} color="#f59e0b" />
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#f59e0b', letterSpacing: '0.05em' }}>AI Mapped</span>
                   </div>
                   <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)' }} />
                   <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle size={14} color="#10B981" />
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#10B981', letterSpacing: '0.05em' }}>Resume Verified</span>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT: ACTIONS */}
          <div style={{ display: 'flex', gap: 20, position: 'relative', zIndex: 1 }}>
             <button 
               style={{ 
                 background: 'linear-gradient(135deg, #f59e0b, #ec4899)', 
                 color: '#fff', 
                 padding: '20px 40px', 
                 borderRadius: 16, 
                 fontWeight: 1000, 
                 border: 'none', 
                 fontSize: 15, 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.12em',
                 cursor: 'pointer',
                 fontFamily: '"Outfit", sans-serif',
                 transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                 boxShadow: '0 20px 40px rgba(245, 158, 11, 0.25)',
                 display: 'flex',
                 alignItems: 'center',
                 gap: 12
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                 e.currentTarget.style.boxShadow = '0 25px 50px rgba(245, 158, 11, 0.4)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0) scale(1)';
                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(245, 158, 11, 0.25)';
               }}
             >
                Update Profile <UploadCloud size={18} />
             </button>
             <Link 
               href="/your-move"
               style={{ 
                 background: 'rgba(255,255,255,0.05)', 
                 color: '#fff', 
                 padding: '20px 40px', 
                 borderRadius: 16, 
                 fontWeight: 1000, 
                 border: '1px solid rgba(255,255,255,0.1)', 
                 fontSize: 15, 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.12em',
                 cursor: 'pointer',
                 fontFamily: '"Outfit", sans-serif',
                 textDecoration: 'none',
                 display: 'flex',
                 alignItems: 'center',
                 gap: 12,
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
               }}
             >
                See Results <ArrowRight size={18} />
             </Link>
          </div>
          
          <style>{`
            @keyframes pulseOrbital {
              0% { transform: scale(1); opacity: 0.3; }
              50% { transform: scale(1.15); opacity: 0; }
              100% { transform: scale(1); opacity: 0.3; }
            }
          `}</style>
       </div>

       {/* FOOTER POWERED BY TAGLINE */}
       <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: 0.6 }}>
          <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2))' }} />
          <p style={{ fontSize: 13, color: '#94A3B8', fontWeight: 600, letterSpacing: '0.04em', margin: 0, fontFamily: '"Outfit", sans-serif' }}>
             Hertz Career Forge is powered by <span style={{ color: '#fff', fontWeight: 800 }}>Neural Network Orchestration.</span>
          </p>
          <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)' }} />
       </div>
    </div>
  );
}
