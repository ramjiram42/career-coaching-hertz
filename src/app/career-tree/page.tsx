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

          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280' }}>Role & Vertical</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280' }}>Match Score</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280' }}>Est. Time</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {suggestedMoves.map((move, i) => (
                  <tr key={move.id} style={{ borderBottom: i !== suggestedMoves.length - 1 ? '1px solid #F1F5F9' : 'none', cursor: 'pointer', transition: 'background 0.2s', ':hover': { background: '#F8FAFC' } }}>
                    <td style={{ padding: '1.5rem' }}>
                      <p style={{ fontWeight: 800, color: '#111827', fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>{move.role}</p>
                      <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Briefcase size={14} color="#FFD100" /> {move.vertical}
                      </span>
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopColor: move.matchScore > 90 ? '#16A34A' : '#F59E0B' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#111827' }}>{move.matchScore}</span>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>% Match</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 600 }}>{move.timeToAchieve}</span>
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                      <button 
                        onClick={() => setSelectedMove(move)}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFD100', color: '#000', padding: '0.6rem 1.25rem', borderRadius: 10, fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', cursor: 'pointer' }}
                      >
                        Explore <ArrowRight size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    )
  }

  // View 2: Role Details (Before Journey)
  if (selectedMove && !journeyStarted) {
    return (
      <main style={{ background: '#F8FAFC', minHeight: '100vh', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <button 
            onClick={() => { setSelectedMove(null); setExpandedStep(null); }}
            style={{ border: 'none', background: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> Back to Suggestions
          </button>
          
          <div style={{ background: '#fff', borderRadius: 24, padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'inline-block', background: '#FFFBEB', color: '#92400E', padding: '0.35rem 1rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
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
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#000', color: '#FFD100', padding: '1rem 2rem', borderRadius: 12, fontWeight: 900, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
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

        <div style={{ background: '#fff', borderRadius: 24, padding: '2.5rem', marginBottom: '3rem', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#16A34A', marginBottom: '0.5rem' }}>Your Target Journey</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#000', letterSpacing: '-0.04em', margin: '0 0 2rem 0' }}>{selectedMove.role}</h1>

            {/* Progress Bar Area */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: 16, padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <div>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', margin: 0 }}>{progress.completedPercentage}% Completed</h3>
                   <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: '0.2rem 0 0 0', fontWeight: 500 }}>{progress.pendingPercentage}% Pending • {progress.pendingWeeks.toFixed(1)} weeks needed</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 0.2rem 0' }}>Total Duration</p>
                   <p style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', margin: 0 }}>{progress.totalWeeks} Weeks</p>
                </div>
              </div>
              <div style={{ width: '100%', height: 12, background: '#E5E7EB', borderRadius: 99, overflow: 'hidden', display: 'flex' }}>
                 <div style={{ width: `${progress.completedPercentage}%`, background: '#16A34A', height: '100%', borderRadius: 99 }} />
              </div>
            </div>
          </div>
          {/* Decorative graphic */}
          <Target size={200} color="#F1F5F9" style={{ position: 'absolute', right: -30, top: -30, zIndex: 1 }} />
        </div>

        {/* Tree Structure */}
        <div style={{ padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000', marginBottom: '2rem' }}>Learning Path & Mentors</h2>
          
          <div style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: 3, background: '#E5E7EB', zIndex: 0 }} />
            
            {/* Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              {selectedMove.learningPath.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isInProgress = step.status === 'in-progress';
                const isPending = step.status === 'pending';
                const isExpanded = expandedStep === step.id;

                return (
                  <div key={step.id} style={{ display: 'flex', gap: '1.5rem' }}>
                    {/* Icon Node */}
                    <div style={{ 
                      width: 50, height: 50, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isCompleted ? '#16A34A' : isInProgress ? '#FFD100' : '#fff',
                      border: isPending ? '3px solid #E5E7EB' : 'none',
                      color: isCompleted ? '#fff' : isInProgress ? '#000' : '#9CA3AF',
                      boxShadow: isInProgress ? '0 0 0 5px rgba(255, 209, 0, 0.2)' : 'none',
                      transition: 'all 0.2s'
                    }}>
                      {isCompleted && <CheckCircle size={24} />}
                      {isInProgress && <Clock size={24} />}
                      {isPending && <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>{idx + 1}</span>}
                    </div>

                    {/* Content Card */}
                    <div 
                      onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                      style={{ 
                      flex: 1, background: '#fff', border: '1px solid', borderColor: isInProgress ? '#FFD100' : isExpanded ? '#6B7280' : '#E5E7EB',
                      borderRadius: 16, padding: '1.5rem', boxShadow: isInProgress ? '0 4px 20px rgba(255, 209, 0, 0.1)' : '0 2px 8px rgba(0,0,0,0.03)',
                      cursor: 'pointer', transition: 'all 0.2s', overflow: 'hidden'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: isInProgress ? '#92400E' : '#6B7280', background: isInProgress ? '#FEF3C7' : '#F3F4F6', padding: '0.2rem 0.6rem', borderRadius: 999 }}>
                              {step.type}
                            </span>
                            {isCompleted && <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#16A34A' }}>Completed</span>}
                          </div>
                          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000', margin: 0 }}>{step.title}</h4>
                        </div>
                        <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#4B5563', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Clock size={16} /> {step.durationWeeks} Weeks
                          </span>
                          <span style={{ color: '#D1D5DB', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                            <ChevronDown size={20} />
                          </span>
                        </div>
                      </div>

                      {/* Mentor Section */}
                      {step.mentor && (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', border: '1px solid #E5E7EB', padding: '0.5rem 1rem', borderRadius: 10, marginTop: '0.5rem' }}>
                          <UserCircle size={18} color="#6B7280" />
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>Mentor: <strong style={{ color: '#000' }}>{step.mentor}</strong></span>
                        </div>
                      )}

                      {/* In Progress Bar */}
                      {isInProgress && (
                        <div style={{ marginTop: '1.25rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', marginBottom: '0.4rem' }}>
                            <span>Progress</span>
                            <span style={{ color: '#000' }}>{step.progress}%</span>
                          </div>
                          <div style={{ width: '100%', height: 6, background: '#F1F5F9', borderRadius: 99, overflow: 'hidden' }}>
                            <div style={{ width: `${step.progress}%`, height: '100%', background: '#FFD100' }} />
                          </div>
                        </div>
                      )}

                      {/* Expanded Syllabus Details */}
                      {isExpanded && step.modules && (
                        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB', animation: 'fadeIn 0.3s ease-in-out' }}>
                          <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#111827', margin: '0 0 1rem 0' }}>Syllabus breakdown:</h5>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {step.modules.map((mod, midx) => {
                              const modId = `${step.id}-${midx}`;
                              const isModExpanded = expandedModule === modId;
                              return (
                              <div key={midx} 
                                onClick={(e) => { e.stopPropagation(); setExpandedModule(isModExpanded ? null : modId); }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem', borderRadius: 8, cursor: 'pointer', background: isModExpanded ? '#F8FAFC' : 'transparent', transition: 'background 0.2s', margin: '-0.5rem' }}
                              >
                                {(() => {
                                  const computedStatus = completedModules.has(mod.title) ? 'completed' : mod.status;
                                  return (
                                  <React.Fragment>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                       {computedStatus === 'completed' && <CheckCircle size={16} color="#16A34A" />}
                                       {computedStatus === 'in-progress' && <Clock size={16} color="#F59E0B" />}
                                       {computedStatus === 'pending' && <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid #D1D5DB' }} />}
                                       <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                         <span style={{ fontSize: '0.85rem', color: computedStatus === 'pending' ? '#9CA3AF' : '#374151', fontWeight: computedStatus === 'in-progress' ? 800 : 500, textDecoration: computedStatus === 'completed' ? 'line-through' : 'none' }}>
                                           {mod.title}
                                         </span>
                                         <span style={{ color: '#D1D5DB', transition: 'transform 0.2s', transform: isModExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                                           <ChevronDown size={14} />
                                         </span>
                                       </div>
                                    </div>
                                    {isModExpanded && (
                                      <div style={{ paddingLeft: '1.75rem', marginTop: '0.25rem', animation: 'fadeIn 0.2s' }}>
                                        <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.5, margin: '0 0 0.75rem 0' }}>
                                          {mod.description || 'This module provides essential training materials, assessments, and reference guides required to complete this syllabus item.'}
                                        </p>
                                        <button 
                                          onClick={(e) => { e.stopPropagation(); setActiveVideo(mod); }}
                                          style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 6, padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 600, color: '#111827', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                          <BookOpen size={12} /> {computedStatus === 'completed' ? 'Review Material' : 'Launch Module'}
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
                  </div>
                )
              })}
            </div>
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

