'use client';

import { UploadCloud } from "lucide-react"
import { useState, useRef } from 'react'
import Image from 'next/image'

export function ResumeUploadSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
       <div style={{
         width: '100%',
         maxWidth: 900,
         background: 'rgba(255, 255, 255, 0.01)',
         backdropFilter: 'blur(40px)',
         border: '1px solid rgba(255, 255, 255, 0.05)',
         borderRadius: 32,
         padding: '40px 60px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
       }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
             <div style={{ 
               width: 120, 
               height: 120, 
               borderRadius: '50%', 
               padding: 4, 
               background: 'linear-gradient(135deg, #2563EB, #9333EA)',
             }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid #030B17' }}>
                   <Image src="/ram_profile.png" width={120} height={120} alt="Ram" style={{ objectFit: 'cover' }} />
                </div>
             </div>

             <div>
                <h1 style={{ fontSize: 42, color: '#fff', margin: 0, fontWeight: 900 }}>Ram</h1>
                <p style={{ fontSize: 16, color: '#94A3B8', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '4px 0' }}>
                   Solution Architect
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
                   <div style={{ width: 10, height: 10, background: '#10B981', borderRadius: '50%' }} />
                   <span style={{ fontSize: 13, fontWeight: 900, color: '#10B981', letterSpacing: '0.05em' }}>RESUME ACTIVE</span>
                </div>
             </div>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
             <button style={{ background: '#fff', color: '#030B17', padding: '16px 32px', borderRadius: 12, fontWeight: 900, border: 'none', fontSize: 14, textTransform: 'uppercase' }}>
                Update Resume
             </button>
             <button style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '16px 32px', borderRadius: 12, fontWeight: 900, border: '1px solid rgba(255,255,255,0.1)', fontSize: 14, textTransform: 'uppercase' }}>
                Skip to Results
             </button>
          </div>
       </div>

       <p style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>
          Hertz Career Navigator is powered by <span style={{ color: '#fff', fontWeight: 800 }}>Intelligent Neural Pathfinding.</span>
       </p>
    </div>
  );
}
