"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft, CheckCircle, Clock, BookOpen, UserCircle, Star, Briefcase, Target } from 'lucide-react'

// Mock Data powered by Hertz career paths
const suggestedMoves = [
  {
    id: 'core-ops-manager',
    role: 'Operations Manager',
    vertical: 'Core Operations',
    matchScore: 95,
    timeToAchieve: '6-8 months',
    description: 'Ensure end-to-end operational execution across North America. Lead teams, manage schedules, and hit performance SLAs.',
    howToAchieve: 'Build on your team leadership background. You need coaching skills, scheduling mastery, and strong compliance management.',
    learningPath: [
      { 
        id: '1', title: 'Performance Coaching Fundamentals', durationWeeks: 2, type: 'Training', status: 'completed',
        modules: [
          { title: 'Foundations of Effective Coaching', status: 'completed' },
          { title: 'Handling Difficult Conversations', status: 'completed' },
          { title: 'Roleplay: Delivering Constructive Feedback', status: 'completed' }
        ]
      },
      { 
        id: '2', title: 'Scheduling and Labour Planning', durationWeeks: 3, type: 'Course', status: 'in-progress', progress: 40,
        modules: [
          { title: 'Introduction to Labor Economics', status: 'completed' },
          { title: 'Using the Scheduling Tool', status: 'in-progress' },
          { title: 'Optimizing for Peak Demand Hours', status: 'pending' },
          { title: 'Compliance & Overtime Management', status: 'pending' }
        ]
      },
      { 
        id: '3', title: 'Safety, Compliance, & Escalation', durationWeeks: 2, type: 'Simulation', status: 'pending',
        modules: [
          { title: 'Workspace Safety Checks', status: 'pending' },
          { title: 'Handling Frontline Escalations', status: 'pending' },
          { title: 'Emergency Protocols', status: 'pending' }
        ]
      },
      { 
        id: '4', title: 'Manager Mentorship', durationWeeks: 4, type: 'Mentorship', mentor: 'Mike Moore', status: 'pending',
        modules: [
          { title: 'Kickoff Meeting & Goal Setting', status: 'pending' },
          { title: 'Shadowing Regional Dispatch', status: 'pending' },
          { title: 'Review & Executive Feedback Session', status: 'pending' }
        ]
      }
    ]
  },
  {
    id: 'fleet-manager',
    role: 'Fleet Operations Manager',
    vertical: 'Fleet Management',
    matchScore: 88,
    timeToAchieve: '8-10 months',
    description: 'Manage vehicle acquisition, utilization, readiness, and lifecycle management. Crucial for operational efficiency.',
    howToAchieve: 'Master fleet systems, operational discipline, and understand utilization metrics.',
    learningPath: [
      { 
        id: '1', title: 'Fleet Systems and Reporting Basics', durationWeeks: 2, type: 'Course', status: 'completed',
        modules: [
          { title: 'Intro to Fleet OS', status: 'completed' },
          { title: 'Reporting KPIs', status: 'completed' }
        ]
      },
      { 
        id: '2', title: 'Utilization and Lifecycle Metrics', durationWeeks: 3, type: 'Course', status: 'pending',
        modules: [
          { title: 'Understanding Utilization', status: 'pending' },
          { title: 'Lifecycle Optimization Techniques', status: 'pending' }
        ]
      },
      { id: '3', title: 'SOP Ownership & Readiness Routines', durationWeeks: 3, type: 'Project', status: 'pending', modules: [ { title: 'Fleet OS Workstream', status: 'pending' } ] },
      { id: '4', title: 'Fleet Executive Mentorship', durationWeeks: 4, type: 'Mentorship', mentor: 'Chris Berg', status: 'pending', modules: [ { title: 'Mentorship Intro', status: 'pending' } ] }
    ]
  },
  {
    id: 'hr-partner',
    role: 'HR Business Partner',
    vertical: 'Human Resources',
    matchScore: 82,
    timeToAchieve: '9-12 months',
    description: 'Partner with business leaders to drive talent strategy, employee engagement, and organizational performance.',
    howToAchieve: 'Transition from operations to HR by focusing on employee relations, stakeholder engagement, and HR systems.',
    learningPath: [
      { id: '1', title: 'Oracle HR Systems Basics', durationWeeks: 3, type: 'Course', status: 'completed', modules: [{ title:'Oracle Cloud Intro', status: 'completed' }] },
      { id: '2', title: 'Employee Relations Fundamentals', durationWeeks: 4, type: 'Course', status: 'pending', modules: [{ title:'Conflict resolution basics', status: 'pending'}] },
      { id: '3', title: 'HR Analytics for Ops Leaders', durationWeeks: 2, type: 'Course', status: 'pending', modules: [{ title:'Data driven HR', status: 'pending'}] },
      { id: '4', title: 'HRBP Mentorship', durationWeeks: 6, type: 'Mentorship', mentor: 'Jyoti Chopra', status: 'pending', modules: [{ title:'Executive shadow', status: 'pending'}] }
    ]
  },
  {
    id: 'tech-program',
    role: 'Technology Program Coordinator',
    vertical: 'Tech & Digital Enablement',
    matchScore: 75,
    timeToAchieve: '9-12 months',
    description: 'Drive enterprise technology adoption and systems enablement across branches.',
    howToAchieve: 'Focus on change enablement, systems adoption, and program coordination. Build executive communication skills.',
    learningPath: [
      { id: '1', title: 'Program Management Fundamentals', durationWeeks: 4, type: 'Course', status: 'pending', modules: [{title: 'Agile Fundamentals', status: 'pending'}] },
      { id: '2', title: 'Change Enablement & Adoption', durationWeeks: 3, type: 'Course', status: 'pending', modules: [{title: 'Adoption Curves', status: 'pending'}] },
      { id: '3', title: 'Executive Communication Basics', durationWeeks: 2, type: 'Training', status: 'pending', modules: [{title: 'Comms basics', status: 'pending'}] },
      { id: '4', title: 'Digital Enablement Mentorship', durationWeeks: 6, type: 'Mentorship', mentor: 'Dhriti Saha', status: 'pending', modules: [{title: '1:1 Coaching', status: 'pending'}] }
    ]
  }
]

export default function CareerTreePage() {
  const [selectedMove, setSelectedMove] = useState(null)
  const [journeyStarted, setJourneyStarted] = useState(false)
  const [expandedStep, setExpandedStep] = useState(null)
  const [expandedModule, setExpandedModule] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [completedModules, setCompletedModules] = useState(new Set())

  // Calculate Progress Summaries
  const calculateProgress = (path) => {
    let totalWeeks = 0;
    let completedWeeks = 0;
    
    path.forEach(item => {
      totalWeeks += item.durationWeeks;
      if (item.status === 'completed') {
        completedWeeks += item.durationWeeks;
      } else if (item.status === 'in-progress' && item.progress) {
        completedWeeks += item.durationWeeks * (item.progress / 100);
      }
    });

    const pendingWeeks = totalWeeks - completedWeeks;
    const completedPercentage = Math.round((completedWeeks / totalWeeks) * 100);
    const pendingPercentage = 100 - completedPercentage;

    return { totalWeeks, completedWeeks, pendingWeeks, completedPercentage, pendingPercentage };
  }

  // View 1: Suggestion Table
  if (!selectedMove) {
    return (
      <main style={{ background: '#F8FAFC', minHeight: '100vh', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Suggested Moves for You</h1>
            <p style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: 650 }}>Based on your skills, experience, and Hertz's internal mobility data, here are the top career paths recommended for your growth.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {suggestedMoves.map((move, i) => {
              const theme = [
                { badgeBg: '#EC4899', bg: '#fff', border: '#F1F5F9', label: 'Desired path' },
                { badgeBg: '#14B8A6', bg: '#fff', border: '#F1F5F9', label: 'Popular path' },
                { badgeBg: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE', label: 'Promoted Lane' },
                { badgeBg: '#8B5CF6', bg: '#fff', border: '#F1F5F9', label: 'Wild Card' }
              ][i % 4];

              return (
              <div key={move.id} style={{ background: theme.bg, border: `1px solid ${theme.border}`, borderRadius: 20, padding: '1.5rem 2rem', boxShadow: i===2 ? '0 4px 24px rgba(59,130,246,0.08)' : '0 2px 8px rgba(0,0,0,0.04)' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ background: theme.badgeBg, color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.7rem', fontWeight: 900 }}>{theme.label}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: theme.badgeBg + '20', padding: '0.2rem 0.6rem', borderRadius: 999 }}>
                      <span style={{ color: theme.badgeBg, fontSize: '0.75rem' }}>◆</span>
                      <span style={{ color: theme.badgeBg, fontSize: '0.75rem', fontWeight: 800 }}>{move.matchScore}% Match</span>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Target destination <strong style={{ color: '#000' }}>{move.role}</strong> ›</span>
                  </div>
                  <button 
                    onClick={() => setSelectedMove(move)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.badgeBg, fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    View Details <ArrowRight size={15} />
                  </button>
                </div>

                {/* Horizontal Sequence */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid #E5E7EB', overflow: 'hidden' }}>
                    <img src="/ram_profile.png" alt="Ram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ width: 24, height: 2, background: '#D1D5DB' }} />

                  {/* Mid Node */}
                  <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                     <div style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid #D1D5DB', background: '#fff', flexShrink: 0 }} />
                     <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '0.85rem 1rem', width: 200, flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                       <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111827', margin: '0 0 0.4rem' }}>Intermediate Move</p>
                       <p style={{ fontSize: '0.7rem', color: '#9CA3AF', margin: 0 }}>Gain {move.vertical} exp.</p>
                     </div>
                     <div style={{ flex: 1, height: 2, background: '#E5E7EB', minWidth: 20 }} />
                  </div>

                  {/* Target Node */}
                  <div style={{ display: 'flex', alignItems: 'center', flex: 0 }}>
                     <div style={{ width: 12, height: 12, borderRadius: '50%', border: '3px solid #000', background: '#000', flexShrink: 0 }} />
                     <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '0.85rem 1rem', width: 200, flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                       <p style={{ fontSize: '0.85rem', fontWeight: 900, color: '#111827', margin: '0 0 0.4rem' }}>{move.role}</p>
                       <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 700, margin: 0 }}>Est. {move.timeToAchieve}</p>
                     </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </main>
    )
  }

  // View 2: Role Details (Before Journey)
  if (selectedMove && !journeyStarted) {
    const selectedMoveIndex = suggestedMoves.findIndex(m => m.id === selectedMove.id);
    const activeTheme = [
      { badgeBg: '#EC4899', bg: '#FDF2F8', border: '#FBCFE8' },
      { badgeBg: '#14B8A6', bg: '#F0FDFA', border: '#CCFBF1' },
      { badgeBg: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
      { badgeBg: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE' }
    ][selectedMoveIndex % 4] || { badgeBg: '#14B8A6', bg: '#F0FDFA', border: '#CCFBF1' };

    return (
      <main style={{ background: '#F8FAFC', minHeight: '100vh', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <button 
            onClick={() => { setSelectedMove(null); setExpandedStep(null); }}
            style={{ border: 'none', background: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> Back to Suggestions
          </button>
          
          <div style={{ background: '#fff', borderRadius: 24, padding: '3rem', boxShadow: `0 10px 40px ${activeTheme.badgeBg}15`, border: `1px solid ${activeTheme.border}` }}>
            <div style={{ display: 'inline-block', background: activeTheme.bg, color: activeTheme.badgeBg, padding: '0.35rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem', border: `1px solid ${activeTheme.badgeBg}33` }}>
              {selectedMove.vertical}
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.04em', margin: '0 0 1rem 0' }}>{selectedMove.role}</h2>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '2.5rem' }}>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Match Score</span>
                 <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#16A34A' }}>{selectedMove.matchScore}%</span>
               </div>
               <div style={{ width: 1, background: '#E5E7EB' }} />
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Time to Achieve</span>
                 <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#111827' }}>{selectedMove.timeToAchieve}</span>
               </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>What You'll Do</h3>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.6 }}>{selectedMove.description}</p>
            </div>

            <div style={{ marginBottom: '3rem', background: '#F8FAFC', padding: '2rem', borderRadius: 16, border: '1px solid #E5E7EB' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>How to Achieve It</h3>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{selectedMove.howToAchieve}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button 
                onClick={() => setJourneyStarted(true)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: activeTheme.badgeBg, color: '#fff', padding: '1rem 2rem', borderRadius: 12, fontWeight: 900, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', cursor: 'pointer', boxShadow: `0 8px 25px ${activeTheme.badgeBg}40`, transition: 'all 0.2s', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                Decide to Move with Role <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // View 3: The Interactive Tree Structure
  const progress = calculateProgress(selectedMove.learningPath);
  const selectedMoveIndexView3 = suggestedMoves.findIndex(m => m.id === selectedMove.id);
  const activeTheme = [
    { badgeBg: '#EC4899', bg: '#FDF2F8', border: '#FBCFE8' },
    { badgeBg: '#14B8A6', bg: '#F0FDFA', border: '#CCFBF1' },
    { badgeBg: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
    { badgeBg: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE' }
  ][selectedMoveIndexView3 % 4] || { badgeBg: '#14B8A6', bg: '#F0FDFA', border: '#CCFBF1' };

  const getYouTubeId = (title) => {
    const t = title.toLowerCase();
    if (t.includes('coaching') || t.includes('feedback')) return 'u4ZoJKF_VuA'; // Simon Sinek (Leadership)
    if (t.includes('labor') || t.includes('scheduling') || t.includes('time')) return 'arj7oStGLkU'; // Tim Urban (Time)
    if (t.includes('mentorship') || t.includes('relations') || t.includes('hr')) return 'rrkrvAUbU9Y'; // Dan Pink (Motivation)
    if (t.includes('safety') || t.includes('compliance') || t.includes('fleet')) return 'fLJsdqxnZb0'; // Shawn Achor
    return 'c0KYU2j0TM4'; // Default (Susan Cain)
  };

  const markVideoCompleteAndClose = () => {
    if (activeVideo) {
      setCompletedModules(prev => {
        const next = new Set(prev);
        next.add(activeVideo.title);
        return next;
      });
    }
    setActiveVideo(null);
  };

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: 850, margin: '0 auto' }}>
        <button 
          onClick={() => setJourneyStarted(false)}
          style={{ border: 'none', background: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem', cursor: 'pointer' }}
        >
          <ArrowLeft size={16} /> Back to Role Details
        </button>

        <div style={{ background: activeTheme.bg, borderRadius: 24, padding: '2.5rem', marginBottom: '3rem', border: `1px solid ${activeTheme.border}`, boxShadow: `0 10px 40px ${activeTheme.badgeBg}15`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: activeTheme.badgeBg, marginBottom: '0.5rem' }}>Your Target Journey</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em', margin: '0 0 2rem 0' }}>{selectedMove.role}</h1>

            {/* Progress Bar Area */}
            <div style={{ background: '#fff', border: `1px solid ${activeTheme.border}`, borderRadius: 16, padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <div>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: activeTheme.badgeBg, margin: 0 }}>{progress.completedPercentage}% Completed</h3>
                   <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: '0.2rem 0 0 0', fontWeight: 500 }}>{progress.pendingPercentage}% Pending • {progress.pendingWeeks.toFixed(1)} weeks needed</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 0.2rem 0' }}>Total Duration</p>
                   <p style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', margin: 0 }}>{progress.totalWeeks} Weeks</p>
                </div>
              </div>
              <div style={{ width: '100%', height: 12, background: activeTheme.border, borderRadius: 99, overflow: 'hidden', display: 'flex' }}>
                 <div style={{ width: `${progress.completedPercentage}%`, background: activeTheme.badgeBg, height: '100%', borderRadius: 99 }} />
              </div>
            </div>
          </div>
          {/* Decorative graphic */}
          <Target size={200} color={activeTheme.badgeBg} style={{ position: 'absolute', right: -30, top: -30, zIndex: 1, opacity: 0.1 }} />
        </div>        {/* Tree Structure */}
        <div style={{ padding: '0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', marginBottom: '2rem' }}>Learning Path & Modules</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {selectedMove.learningPath.map((step, idx) => {
              const isCompleted = step.status === 'completed';
              const isInProgress = step.status === 'in-progress';
              const isPending = step.status === 'pending';
              const isExpanded = expandedStep === step.id;

              const theme = isCompleted 
                ? { badgeBg: '#14B8A6', bg: '#F0FDFA', border: '#CCFBF1' }
                : isInProgress 
                  ? { badgeBg: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' }
                  : { badgeBg: '#9CA3AF', bg: '#fff', border: '#E5E7EB' };

              return (
                <div key={step.id} style={{ background: theme.bg, border: `1px solid ${theme.border}`, borderRadius: 20, padding: '1.5rem 2rem', boxShadow: isInProgress ? '0 4px 24px rgba(59,130,246,0.08)' : '0 2px 8px rgba(0,0,0,0.04)' }}>
                  
                  {/* Top Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                       <span style={{ background: theme.badgeBg, color: '#fff', padding: '0.2rem 0.75rem', borderRadius: 999, fontSize: '0.7rem', fontWeight: 900 }}>{step.type}</span>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: theme.badgeBg + '20', padding: '0.2rem 0.6rem', borderRadius: 999 }}>
                         <span style={{ color: theme.badgeBg, fontSize: '0.75rem' }}>◆</span>
                         <span style={{ color: theme.badgeBg, fontSize: '0.75rem', fontWeight: 800 }}>{step.durationWeeks} Weeks</span>
                       </div>
                       <span style={{ fontSize: '0.85rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         {isCompleted && <span style={{ color: '#16A34A', fontWeight: 700 }}>✓ Completed</span>}
                         {isInProgress && <span style={{ color: '#3B82F6', fontWeight: 700 }}>In Progress</span>}
                         {isPending && <span>Pending</span>}
                       </span>
                    </div>
                    <button 
                      onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.badgeBg, fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      {isExpanded ? 'Hide Modules' : 'View Modules'} <ChevronDown size={15} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                    </button>
                  </div>

                  {/* Horizontal Node Track */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    {/* Course Avatar */}
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: theme.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', color: '#fff', fontWeight: 900 }}>
                      {idx + 1}
                    </div>
                    <div style={{ width: 24, height: 2, background: isCompleted ? theme.badgeBg : '#D1D5DB' }} />

                    {/* Node 1: Course Info */}
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                       <div style={{ width: 12, height: 12, borderRadius: '50%', border: `2px solid ${isCompleted ? theme.badgeBg : '#D1D5DB'}`, background: '#fff', flexShrink: 0 }} />
                       <div style={{ background: '#fff', border: `1px solid ${isCompleted ? theme.badgeBg : '#E5E7EB'}`, borderRadius: 12, padding: '0.85rem 1rem', flex: 1, maxWidth: 300, minWidth: 200, margin: '0 10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                         <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', margin: '0 0 0.4rem' }}>{step.title}</p>
                         <p style={{ fontSize: '0.7rem', color: '#9CA3AF', margin: 0 }}>{step.modules ? `${step.modules.length} internal tasks` : 'No tasks'}</p>
                       </div>
                       <div style={{ flex: 1, height: 2, background: isCompleted ? theme.badgeBg : '#E5E7EB', minWidth: 20 }} />
                    </div>

                    {/* Node 2: Mentorship info or end point */}
                    <div style={{ display: 'flex', alignItems: 'center', flex: 0 }}>
                       <div style={{ width: 12, height: 12, borderRadius: '50%', border: `3px solid ${isCompleted ? theme.badgeBg : '#D1D5DB'}`, background: isCompleted ? theme.badgeBg : '#fff', flexShrink: 0 }} />
                       <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '0.85rem 1rem', width: 200, flexShrink: 0, marginLeft: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                         {step.mentor ? (
                           <>
                             <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#111827', margin: '0 0 0.4rem' }}>Mentor assigned</p>
                             <p style={{ fontSize: '0.7rem', color: theme.badgeBg, fontWeight: 700, margin: 0 }}>{step.mentor}</p>
                           </>
                         ) : (
                           <>
                             <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#111827', margin: '0 0 0.4rem' }}>Self-Paced Core</p>
                             <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 600, margin: 0 }}>Auto-verification</p>
                           </>
                         )}
                       </div>
                    </div>
                  </div>

                  {/* Syllabus Expandable Section matching pastel theme */}
                  {isExpanded && step.modules && (
                    <div style={{ marginTop: '1.5rem', background: '#fff', border: `1px solid ${theme.border}`, borderRadius: 16, padding: '1.5rem', animation: 'fadeIn 0.3s ease-in-out' }}>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', margin: '0 0 1rem 0' }}>Syllabus Breakdown:</h5>
                      <div style={{ display: 'grid', gap: '0.85rem' }}>
                        {step.modules.map((mod, midx) => {
                          const modId = `${step.id}-${midx}`;
                          const isModExpanded = expandedModule === modId;
                          return (
                          <div key={midx} 
                            onClick={(e) => { e.stopPropagation(); setExpandedModule(isModExpanded ? null : modId); }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.75rem', borderRadius: 12, cursor: 'pointer', background: isModExpanded ? '#F8FAFC' : '#fff', border: '1px solid #F1F5F9', transition: 'all 0.2s', boxShadow: isModExpanded ? 'inset 3px 0 0 '+theme.badgeBg : 'none' }}
                          >
                            {(() => {
                              const computedStatus = completedModules.has(mod.title) ? 'completed' : mod.status;
                              return (
                              <React.Fragment>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                   {computedStatus === 'completed' ? <CheckCircle size={18} color="#14B8A6" /> : computedStatus === 'in-progress' ? <Clock size={18} color="#3B82F6" /> : <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid #D1D5DB' }} />}
                                   <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                     <span style={{ fontSize: '0.9rem', color: computedStatus === 'pending' ? '#9CA3AF' : '#111827', fontWeight: computedStatus === 'in-progress' ? 800 : 600, textDecoration: computedStatus === 'completed' ? 'line-through' : 'none' }}>
                                       {mod.title}
                                     </span>
                                     <span style={{ color: '#D1D5DB', transition: 'transform 0.2s', transform: isModExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                                       <ChevronDown size={16} />
                                     </span>
                                   </div>
                                </div>
                                {isModExpanded && (
                                  <div style={{ paddingLeft: '2rem', marginTop: '0.5rem', animation: 'fadeIn 0.2s' }}>
                                    <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                                      {mod.description || 'This module provides essential training materials, assessments, and reference guides required to complete this syllabus item.'}
                                    </p>
                                    <button 
                                      onClick={(e) => { e.stopPropagation(); setActiveVideo(mod); }}
                                      style={{ background: theme.badgeBg, border: 'none', borderRadius: 8, padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 800, color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 2px 6px ' + theme.badgeBg + '40', transition: '0.2s', transform: 'translateY(0)' }}>
                                      <BookOpen size={14} /> {computedStatus === 'completed' ? 'Review Material' : 'Launch Module'}
                                    </button>
                                  </div>
                                )}
                              </React.Fragment>
                              )
                            })()}
                          </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Video Player Modal Overlay */}
        {activeVideo && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', animation: 'fadeIn 0.2s', backdropFilter: 'blur(5px)' }}>
            <div style={{ background: '#fff', borderRadius: 24, width: '100%', maxWidth: 900, overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
              {/* Modal Header */}
              <div style={{ padding: '1.25rem 2rem', background: '#FFD100', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', color: '#92400E', display: 'block', marginBottom: '0.2rem', letterSpacing: '0.1em' }}>Hertz Course Player</span>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, color: '#000', letterSpacing: '-0.02em' }}>{activeVideo.title}</h2>
                </div>
                <button 
                  onClick={markVideoCompleteAndClose} 
                  style={{ background: '#000', color: '#fff', border: 'none', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, transition: 'transform 0.2s' }}
                >✕</button>
              </div>
              {/* YouTube Video Player (Search Embedded based on Title) */}
              <div style={{ padding: 0, background: '#000', width: '100%', aspectRatio: '16/9', position: 'relative' }}>
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.title)}?autoplay=1`} 
                    title={activeVideo.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{ display: 'block' }}
                 />
              </div>
              <div style={{ padding: '1.5rem 2rem', background: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0, fontWeight: 500 }}>
                   <strong>Status:</strong> {(completedModules.has(activeVideo.title) ? 'completed' : activeVideo.status).toUpperCase()} • Saving progress to profile...
                 </p>
                 <button 
                   onClick={markVideoCompleteAndClose}
                   style={{ background: '#111827', color: '#FFD100', padding: '0.5rem 1.5rem', borderRadius: 8, fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', border: 'none' }}
                 >
                   Close Module
                 </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

