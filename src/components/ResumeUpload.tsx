'use client';

import { UploadCloud, CheckCircle, User } from "lucide-react"
import { useState, useRef } from 'react'
import Image from 'next/image'

export function ResumeUploadSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(true) // Start as uploaded for demo
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setResumeUploaded(true);
      }, 3000);
    }
  }

  if (!resumeUploaded) {
    return (
       <div 
         onClick={() => !isUploading && fileInputRef.current?.click()}
         style={{
           width: '100%',
           background: '#fff',
           border: '2px dashed #E2E8F0',
           padding: '80px',
           borderRadius: 32,
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           cursor: 'pointer',
           transition: 'all 0.4s ease'
         }}
       >
         <input type="file" ref={fileInputRef} hidden onChange={handleFileUpload} />
         <UploadCloud size={48} color="#2563EB" />
         <h2 style={{ marginTop: 24, fontSize: 24, color: '#0F172A', fontFamily: '"Outfit", sans-serif' }}>Upload Professional History</h2>
       </div>
    );
  }

  return (
    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
       <div style={{
         width: '100%',
         maxWidth: 900,
         background: '#FFFFFF',
         border: '1px solid #E2E8F0',
         borderRadius: 32,
         padding: '40px 60px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
         position: 'relative'
       }}>
          {/* LEFT: PROFILE DATA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
             <div style={{ 
               width: 120, 
               height: 120, 
               borderRadius: '50%', 
               padding: 4, 
               background: 'linear-gradient(135deg, #2563EB, #FFD100)',
               boxShadow: '0 10px 30px rgba(37, 99, 235, 0.15)'
             }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff' }}>
                   <Image src="/ram_profile.png" width={120} height={120} alt="Ram" style={{ objectFit: 'cover' }} />
                </div>
             </div>

             <div>
                <h1 style={{ fontSize: 42, color: '#0F172A', margin: 0, letterSpacing: '-0.02em', fontWeight: 1000, fontFamily: '"Inter", sans-serif' }}>Ram</h1>
                <p style={{ fontSize: 16, color: '#64748B', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '4px 0', fontFamily: '"Inter", sans-serif' }}>
                   Solution Architect
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
                   <div style={{ width: 10, height: 10, background: '#10B981', borderRadius: '50%', boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)' }} />
                   <span style={{ fontSize: 13, fontWeight: 900, color: '#10B981', letterSpacing: '0.05em', fontFamily: '"Inter", sans-serif' }}>RESUME ACTIVE</span>
                </div>
             </div>
          </div>

          {/* RIGHT: ACTIONS */}
          <div style={{ display: 'flex', gap: 16 }}>
             <button 
               style={{ 
                 background: '#0F172A', 
                 color: '#fff', 
                 padding: '16px 32px', 
                 borderRadius: 12, 
                 fontWeight: 1000, 
                 border: 'none', 
                 fontSize: 14, 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.1em',
                 cursor: 'pointer',
                 fontFamily: '"Inter", sans-serif',
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-2px)';
                 e.currentTarget.style.boxShadow = '0 10px 20px rgba(15,23,42,0.2)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = 'none';
               }}
             >
                Update Resume
             </button>
             <button 
               style={{ 
                 background: '#F1F5F9', 
                 color: '#64748B', 
                 padding: '16px 32px', 
                 borderRadius: 12, 
                 fontWeight: 1000, 
                 border: '1px solid #E2E8F0', 
                 fontSize: 14, 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.1em',
                 cursor: 'pointer',
                 fontFamily: '"Inter", sans-serif'
               }}
             >
                Skip to Results
             </button>
          </div>
       </div>

       {/* FOOTER POWERED BY TAGLINE */}
       <p style={{ fontSize: 14, color: '#94A3B8', fontWeight: 600, letterSpacing: '0.02em', margin: 0, fontFamily: '"Inter", sans-serif' }}>
          CareerForge is powered by <span style={{ color: '#0F172A', fontWeight: 800 }}>Intelligent Neural Pathfinding.</span>
       </p>
    </div>
  );
}
