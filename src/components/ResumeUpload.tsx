'use client';

import { UploadCloud, Loader2, CheckCircle, ArrowRight, Briefcase, Target, User, Cpu, ShieldCheck, Sparkles } from "lucide-react"
import { useState, useRef, useEffect } from 'react'
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
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, position: 'relative' }}>
       {/* FLOATING LIGHT PARTICLES IN BACKGROUND */}
       <div style={{ position: 'absolute', inset: -100, pointerEvents: 'none', zIndex: 0 }}>
          <div className="light-particle" style={{ position: 'absolute', top: '20%', left: '10%', width: 4, height: 4, background: '#f59e0b', borderRadius: '50%', filter: 'blur(2px)', animation: 'floatParticle 8s infinite ease-in-out' }} />
          <div className="light-particle" style={{ position: 'absolute', top: '70%', left: '20%', width: 6, height: 6, background: '#ec4899', borderRadius: '50%', filter: 'blur(3px)', animation: 'floatParticle 12s infinite ease-in-out', animationDelay: '2s' }} />
          <div className="light-particle" style={{ position: 'absolute', top: '40%', right: '15%', width: 5, height: 5, background: '#f59e0b', borderRadius: '50%', filter: 'blur(2px)', animation: 'floatParticle 10s infinite ease-in-out', animationDelay: '1s' }} />
          <div className="light-particle" style={{ position: 'absolute', bottom: '10%', right: '30%', width: 4, height: 4, background: '#ec4899', borderRadius: '50%', filter: 'blur(2px)', animation: 'floatParticle 9s infinite ease-in-out', animationDelay: '3s' }} />
       </div>

       <div style={{
         width: '100%',
         maxWidth: 1000,
         background: 'rgba(10, 20, 40, 0.45)',
         backdropFilter: 'blur(40px)',
         border: '1px solid rgba(255,255,255,0.1)',
         borderRadius: 36,
         padding: '55px 70px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
         position: 'relative',
         overflow: 'hidden',
         animation: 'cardIn 1s cubic-bezier(0.2, 0.8, 0.2, 1)'
       }}>
          {/* CINEMATIC MESH GRADIENT (SLOW MOVING) */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)',
            animation: 'meshMove 20s infinite alternate linear',
            zIndex: 0 
          }} />

          {/* LIGHT SHIMMER SWEEP EFFECT */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
            transform: 'skewX(-20deg)',
            animation: 'lightShimmer 6s infinite ease-in-out',
            zIndex: 1
          }} />
          
          {/* NEURAL GRID BACKGROUND (SUBTLE) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1000 300">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* LEFT: PROFILE DATA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40, position: 'relative', zIndex: 1 }}>
             <div style={{ 
               position: 'relative',
               width: 136, 
               height: 136, 
               borderRadius: '50%', 
               padding: 6, 
               background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
               boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)',
               animation: 'profilePop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
             }}>
                {/* ORBITAL PULSE EFFECT (LIGHT LOOKING) */}
                <div style={{
                  position: 'absolute',
                  inset: -12,
                  borderRadius: '50%',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  animation: 'pulseOrbital 4s infinite linear'
                }} />
                <div style={{
                  position: 'absolute',
                  inset: -24,
                  borderRadius: '50%',
                  border: '1px solid rgba(236, 72, 153, 0.15)',
                  animation: 'pulseOrbital 6s infinite linear reverse'
                }} />
                
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '6px solid #060E1A' }}>
                   <Image src="/ram_profile.png" width={136} height={136} alt="Ram" style={{ objectFit: 'cover' }} />
                </div>

                <div style={{ 
                  position: 'absolute', 
                  bottom: 6, 
                  right: 6, 
                  width: 34, 
                  height: 34, 
                  background: '#10B981', 
                  borderRadius: '50%', 
                  border: '4px solid #060E1A', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                  animation: 'scaleIn 0.5s 0.8s both'
                }}>
                   <ShieldCheck size={18} color="#fff" />
                </div>
             </div>

             <div style={{ animation: 'fadeSlideRight 0.8s both' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                   <h1 style={{ fontSize: 52, color: '#fff', margin: 0, letterSpacing: '-0.04em', fontWeight: 1000, fontFamily: '"Outfit", sans-serif' }}>Ram</h1>
                   <div style={{ 
                     padding: '5px 14px', 
                     background: 'rgba(245, 158, 11, 0.15)', 
                     border: '1px solid rgba(245, 158, 11, 0.3)', 
                     borderRadius: 99, 
                     fontSize: 11, 
                     fontWeight: 900, 
                     color: '#f59e0b', 
                     letterSpacing: '0.12em',
                     animation: 'glowText 2s infinite alternate'
                   }}>
                     PRECISION MATCH
                   </div>
                </div>
                <p style={{ fontSize: 19, color: '#94A3B8', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '4px 0', fontFamily: '"Outfit", sans-serif' }}>
                   Solution Architect
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 20 }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'default' }}>
                      <Cpu size={16} color="#f59e0b" style={{ animation: 'iconPulse 2s infinite' }} />
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#f59e0b', letterSpacing: '0.06em' }}>Neural Engine Active</span>
                   </div>
                   <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)' }} />
                   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Sparkles size={16} color="#ec4899" />
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#ec4899', letterSpacing: '0.06em' }}>Trajectory Mapped</span>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT: ACTIONS */}
          <div style={{ display: 'flex', gap: 20, position: 'relative', zIndex: 1, animation: 'fadeSlideLeft 0.8s both' }}>
             <button 
               style={{ 
                 background: 'linear-gradient(135deg, #f59e0b, #ec4899)', 
                 color: '#fff', 
                 padding: '22px 44px', 
                 borderRadius: 18, 
                 fontWeight: 1000, 
                 border: 'none', 
                 fontSize: 16, 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.14em',
                 cursor: 'pointer',
                 fontFamily: '"Outfit", sans-serif',
                 transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                 boxShadow: '0 20px 45px rgba(245, 158, 11, 0.3)',
                 display: 'flex',
                 alignItems: 'center',
                 gap: 14
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                 e.currentTarget.style.boxShadow = '0 30px 60px rgba(245, 158, 11, 0.45)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0) scale(1)';
                 e.currentTarget.style.boxShadow = '0 20px 45px rgba(245, 158, 11, 0.3)';
               }}
             >
                Modernize Resume <Sparkles size={20} />
             </button>
             <Link 
               href="/your-move"
               style={{ 
                 background: 'rgba(255,255,255,0.06)', 
                 color: '#fff', 
                 padding: '22px 44px', 
                 borderRadius: 18, 
                 fontWeight: 1000, 
                 border: '1px solid rgba(255,255,255,0.12)', 
                 fontSize: 16, 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.14em',
                 cursor: 'pointer',
                 fontFamily: '"Outfit", sans-serif',
                 textDecoration: 'none',
                 display: 'flex',
                 alignItems: 'center',
                 gap: 14,
                 transition: 'all 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                 e.currentTarget.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                 e.currentTarget.style.transform = 'translateY(0)';
               }}
             >
                Explore Lab <ArrowRight size={20} />
             </Link>
          </div>
          
          <style>{`
            @keyframes pulseOrbital {
              0% { transform: scale(1); opacity: 0.4; }
              50% { transform: scale(1.2); opacity: 0; }
              100% { transform: scale(1); opacity: 0.4; }
            }
            @keyframes floatParticle {
               0%, 100% { transform: translate(0, 0); opacity: 0.3; }
               50% { transform: translate(20px, -40px); opacity: 0.6; }
            }
            @keyframes cardIn {
               from { opacity: 0; transform: translateY(40px) scale(0.95); }
               to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes profilePop {
               0% { transform: scale(0.5); opacity: 0; }
               70% { transform: scale(1.1); }
               100% { transform: scale(1); opacity: 1; }
            }
            @keyframes lightShimmer {
               0% { left: -100%; }
               30%, 100% { left: 200%; }
            }
            @keyframes meshMove {
               from { background-position: 0% 0%; }
               to { background-position: 100% 100%; }
            }
            @keyframes fadeSlideRight {
               from { opacity: 0; transform: translateX(-20px); }
               to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeSlideLeft {
               from { opacity: 0; transform: translateX(20px); }
               to { opacity: 1; transform: translateX(0); }
            }
            @keyframes glowText {
               from { box-shadow: 0 0 5px rgba(245, 158, 11, 0); }
               to { box-shadow: 0 0 15px rgba(245, 158, 11, 0.4); }
            }
            @keyframes iconPulse {
               0%, 100% { transform: scale(1); opacity: 1; }
               50% { transform: scale(1.2); opacity: 0.7; }
            }
            @keyframes scaleIn {
               from { opacity: 0; transform: scale(0); }
               to { opacity: 1; transform: scale(1); }
            }
          `}</style>
       </div>

       {/* FOOTER POWERED BY TAGLINE */}
       <div style={{ display: 'flex', alignItems: 'center', gap: 15, opacity: 0.7, animation: 'fadeSlideUp 1s 1s both' }}>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3))' }} />
          <p style={{ fontSize: 13, color: '#94A3B8', fontWeight: 600, letterSpacing: '0.06em', margin: 0, fontFamily: '"Outfit", sans-serif' }}>
             Hertz Career Forge is powered by <span style={{ color: '#fff', fontWeight: 800, animation: 'glowTextWhite 2s infinite alternate' }}>Neural Pathfinding Orchestration.</span>
          </p>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.3), transparent)' }} />
       </div>

       <style>{`
          @keyframes fadeSlideUp {
             from { opacity: 0; transform: translateY(10px); }
             to { opacity: 0.7; transform: translateY(0); }
          }
          @keyframes glowTextWhite {
             from { text-shadow: 0 0 0px #fff; }
             to { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
          }
       `}</style>
    </div>
  );
}
