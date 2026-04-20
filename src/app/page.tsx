"use client";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Heart, Quote } from 'lucide-react'
import { ResumeUploadSection } from '@/components/ResumeUpload'

const journeyCards = [
  { title: 'Fleet Operations Coordinator', vertical: 'Fleet Management', topColor: '#f59e0b', bottomBadge: 'HIGH MATCH', bottomBg: 'rgba(245,158,11,0.1)', bottomText: '#f59e0b', img: '🚗' },
  { title: 'HR Learning Program Coordinator', vertical: 'People Development', topColor: '#ec4899', bottomBadge: 'FUTURE MOVE', bottomBg: 'rgba(236,72,153,0.1)', bottomText: '#ec4899', img: '👥' },
  { title: 'Operations Supervisor', vertical: 'Core Operations', topColor: '#f59e0b', bottomBadge: 'FAST TRACK', bottomBg: 'rgba(245,158,11,0.1)', bottomText: '#f59e0b', img: '📊' },
  { title: 'Technology Program Coordinator', vertical: 'Tech & Digital', topColor: '#ec4899', bottomBadge: 'WILD CARD', bottomBg: 'rgba(236,72,153,0.1)', bottomText: '#ec4899', img: '💻' },
]

const careerPaths = [
  {
    badge: 'Desired path',
    badgeBg: '#ec4899',
    steps: '5',
    label: 'Based on your Desired Role',
    target: 'Regional Operations Director',
    bg: '#fff',
    highlight: false,
    roles: [
      { title: 'Operations Supervisor', skills: 11, total: 16, leadership: true },
      { title: 'Area Operations Manager', skills: null, extra: null },
      { title: 'Regional Operations Director', skills: null, final: true },
    ],
  },
  {
    badge: 'Popular path',
    badgeBg: '#f59e0b',
    steps: '6',
    label: 'Trending among Hertz employees like Ram',
    target: 'Fleet Operations Leader',
    bg: '#fff',
    highlight: false,
    roles: [
      { title: 'Fleet Operations Coordinator', skills: 9, total: 14, leadership: true },
      { title: 'Senior Fleet Manager', skills: null, extra: '+1 role' },
      { title: 'Regional Fleet Leader', skills: null, final: true },
    ],
  },
  {
    badge: 'Promoted Lane',
    badgeBg: '#f59e0b',
    steps: '5',
    label: 'Recommended by your manager',
    target: 'Enterprise Operations Executive',
    bg: '#EFF6FF',
    highlight: true,
    roles: [
      { title: 'Operations Supervisor', skills: 11, total: 16, leadership: true },
      { title: 'Enterprise Operations Lead', skills: null, extra: '+2 roles' },
      { title: 'VP Operations', skills: null, final: true },
    ],
  },
]

export default function HomePage() {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState('');

  useEffect(() => {
    const dailyQuotes = [
      "The future depends on what you do today.",
      "Don't watch the clock; do what it does. Keep going.",
      "Your career is your business. It's time to manage it as a CEO.",
      "Opportunities don't happen, you create them.",
      "The only way to do great work is to love what you do.",
      "Growth and comfort do not coexist.",
      "The expert in anything was once a beginner."
    ];
    setQuoteOfTheDay(dailyQuotes[new Date().getDay()]);
  }, []);

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', color: '#111827', fontFamily: 'inherit' }}>

      {/* ── HERO BANNER ─────────────────────────────── */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <Image src="/hero-banner.png" alt="Hertz fleet" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)' }} />

        <div style={{ position: 'absolute', left: '2.5rem', top: '50%', transform: 'translateY(-50%)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            Drive Your<br />Career Forward.
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <Link href="/your-move" style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', boxShadow: '0 10px 20px rgba(236, 72, 153, 0.3)' }}>
              Explore Journeys
            </Link>
            <Link href="/vacancies" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              View Vacancies
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', right: '2.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 900, fontSize: '1.1rem', color: '#fff', margin: 0 }}>Ram</p>
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: '0.2rem 0 0.5rem' }}>Your profile is looking awesome</p>
            <Link href="/your-move" style={{ color: '#ec4899', fontSize: '0.75rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Elevate your potential <ArrowRight size={12} />
            </Link>
          </div>
          <div style={{ width: 52, height: 52, background: 'linear-gradient(135deg, #f59e0b, #ec4899)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 2 }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
              <Image src="/ram_profile.png" alt="Ram" width={52} height={52} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>


      <div className="container" style={{ padding: '4rem 2.5rem 8rem' }}>
        
        {/* ── FUEL50 STYLE GRID ────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          
          {/* TEXT BLOCK */}
          <div style={{ gridColumn: 'span 2', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 950, color: '#111827', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
              Explore Future with <span style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hertz</span>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '1.35rem', color: '#4B5563', lineHeight: 1.4, margin: 0, fontWeight: 600 }}>
                Welcome to your AI-powered <span style={{ color: '#111827', fontWeight: 900 }}>career mobility hub</span>. Discover tailored pathways for <span style={{ color: '#111827', fontWeight: 900 }}>upskilling, reskilling, and internal job opportunities</span> designed entirely around your potential.
              </p>
              
              {/* INSPIRATION BOX */}
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(245,158,11,0.05), rgba(236,72,153,0.05))',
                borderLeft: '4px solid #f59e0b',
                padding: '1.5rem',
                borderRadius: '0 12px 12px 0',
                marginTop: '0.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Quote size={24} color="#f59e0b" style={{ position: 'absolute', opacity: 0.15, right: '1.5rem', bottom: '1.5rem', transform: 'scale(4)' }} />
                <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  Inspiration for the day
                </h3>
                <div style={{ minHeight: '40px', display: 'flex', alignItems: 'center' }}>
                  {quoteOfTheDay ? (
                    <p style={{ fontSize: '1.15rem', color: '#111827', fontStyle: 'italic', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                      "{quoteOfTheDay}"
                    </p>
                  ) : (
                    <div style={{ width: '100%', height: '24px', background: 'rgba(0,0,0,0.05)', borderRadius: 4, animation: 'pulse 1.5s infinite' }} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* JOURNEYS TILE */}
          <Link href="/your-move" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
            }}>
              <div style={{ position: 'relative', height: 240, background: '#1e293b' }}>
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" className="slide-image slide-1" alt="Journeys 1" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" className="slide-image slide-2" alt="Journeys 2" />
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" className="slide-image slide-3" alt="Journeys 3" />
              </div>
              <div style={{ padding: '1.5rem', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block', boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)' }}>JOURNEYS</div>
                <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>Explore journeys and discover potential career paths.</p>
              </div>
            </div>
          </Link>

          {/* CROSSFADE ANIMATION */}
          <style>{`
            @keyframes cardCrossfade {
              0% { opacity: 0; transform: scale(1.05); }
              10% { opacity: 1; transform: scale(1); }
              33% { opacity: 1; transform: scale(1); }
              43% { opacity: 0; transform: scale(1.05); }
              100% { opacity: 0; transform: scale(1.05); }
            }
            .slide-image {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              opacity: 0;
            }
            .slide-1 { animation: cardCrossfade 15s infinite 0s cubic-bezier(0.4, 0, 0.2, 1); }
            .slide-2 { animation: cardCrossfade 15s infinite 5s cubic-bezier(0.4, 0, 0.2, 1); }
            .slide-3 { animation: cardCrossfade 15s infinite 10s cubic-bezier(0.4, 0, 0.2, 1); }
          `}</style>

          {/* SKILLS TILE */}
          <div 
            onClick={() => window.location.href = '/learn'}
            style={{ 
              background: '#fff', 
              borderRadius: 12, 
              overflow: 'hidden', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
            }}>
              <div style={{ position: 'relative', height: 240, background: '#1e293b' }}>
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" className="slide-image slide-1" alt="Skills 1" />
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" className="slide-image slide-2" alt="Skills 2" />
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" className="slide-image slide-3" alt="Skills 3" />
              </div>
              <div style={{ padding: '1.5rem', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block', boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)' }}>SKILLS</div>
                <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>Manage skills required for your role and career.</p>
              </div>
          </div>

          {/* ACHIEVE TILE */}
          <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, boxShadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}>
            <div style={{ position: 'relative', height: 240, background: '#1e293b' }}>
               <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" className="slide-image slide-1" alt="Milestones 1" />
               <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80" className="slide-image slide-2" alt="Milestones 2" />
               <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80" className="slide-image slide-3" alt="Milestones 3" />
            </div>
            <div style={{ padding: '1.5rem', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block', boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)' }}>MILESTONES</div>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>Review your unlocked milestones and rewards.</p>
            </div>
          </div>

          {/* GROUP TILE (Collaboration) */}
          <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, boxShadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}>
            <div style={{ position: 'relative', height: 240, background: '#1e293b' }}>
               <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" className="slide-image slide-1" alt="Network 1" />
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" className="slide-image slide-2" alt="Network 2" />
               <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" className="slide-image slide-3" alt="Network 3" />
            </div>
            <div style={{ padding: '1.5rem', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block', boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)' }}>NETWORK</div>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>Connect with peers and mentors across teams.</p>
            </div>
          </div>

          {/* CHEER TILE (Mentorship) */}
          <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, boxShadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}>
            <div style={{ position: 'relative', height: 240, background: '#1e293b' }}>
               <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&q=80" className="slide-image slide-1" alt="Mentorship 1" />
               <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" className="slide-image slide-2" alt="Mentorship 2" />
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" className="slide-image slide-3" alt="Mentorship 3" />
            </div>
            <div style={{ padding: '1.5rem', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block', boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)' }}>MENTORSHIP</div>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>Find guidance and connect with experienced mentors.</p>
            </div>
          </div>

          {/* PAWNS TILE (Leadership) */}
          <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, boxShadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}>
            <div style={{ position: 'relative', height: 240, background: '#1e293b' }}>
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" className="slide-image slide-1" alt="Leadership 1" />
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" className="slide-image slide-2" alt="Leadership 2" />
               <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" className="slide-image slide-3" alt="Leadership 3" />
            </div>
            <div style={{ padding: '1.5rem', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ background: 'linear-gradient(90deg, #f59e0b, #ec4899)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block', boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)' }}>LEADERSHIP</div>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>Discover leadership paths and training.</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
