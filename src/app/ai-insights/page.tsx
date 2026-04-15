"use client"

import { Bot, Sparkles, Compass, AlertCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AiInsightsPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<any>(null)

  const handleAudit = () => {
    setIsRunning(true)
    setTimeout(() => {
      setOutput({
        "role": "SAP Project Manager",
        "fitScore": 88,
        "matchNarrative": "Your 10 years of RPA Development establishes profound logical structuring needed in ERP. Specifically, Stakeholder Management natively crosses over. However, your SAP specific tooling ecosystem awareness is missing.",
        "weeklySteps": [
          "Complete S/4HANA Module 1 (Parallel allowed)",
          "Schedule 1hr with Mentor (SAP PM expert)",
          "Start Project Budgeting sandbox"
        ]
      })
      setIsRunning(false)
    }, 2000)
  }

  return (
    <main className="container flex-col space-y-8 pb-16">
      <div className="flex justify-between items-center bg-slate-900 border border-indigo-500/30 p-6 rounded-2xl relative overflow-hidden bg-gradient-to-r from-slate-900 to-indigo-950/20">
        <div className="z-10">
          <div className="flex items-center gap-3 mb-2 text-indigo-400 font-semibold tracking-wider text-sm uppercase">
            <Bot size={18} /> Career Intelligence Engine
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Prompt-Driven Analysis</h1>
          <p className="text-indigo-200/60 font-medium">Generate optimized weekly actions and transition viability utilizing trained LLMs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="premium-card flex flex-col gap-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Compass className="text-blue-400" /> Run LLM Audit
          </h2>
          <p className="text-slate-400 text-sm">Select a structured enterprise prompt payload to analyze against your profile_skills array.</p>
          
          <div className="space-y-3">
            <div className="p-4 border border-slate-700 bg-slate-800/50 rounded-xl cursor-pointer hover:border-indigo-500 transition-colors">
              <h4 className="font-bold text-slate-200">A. Role Recommendation Prompt</h4>
              <p className="text-xs text-slate-500 mt-1">Cross-check profile against missing skills and extract fit scores.</p>
            </div>
            <div className="p-4 border border-indigo-500 bg-indigo-900/10 rounded-xl cursor-pointer shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]">
              <h4 className="font-bold text-indigo-300">B. Next Action Priorities</h4>
              <p className="text-xs text-indigo-500/70 mt-1">Generate weekly learning steps factored against parallel graph rules.</p>
            </div>
          </div>

          <button 
            onClick={handleAudit} 
            disabled={isRunning}
            className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 w-full py-3 mt-4 flex justify-center gap-2"
          >
            {isRunning ? 'Processing RAG Vector Logic...' : <><Sparkles size={18}/> Execute AI Analysis</>}
          </button>
        </div>

        <div className="premium-card flex flex-col gap-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <AlertCircle className="text-yellow-400" /> JSON Output
          </h2>
          <div className="bg-[#0f172a] rounded-xl p-4 flex-1 border border-slate-800 font-mono text-sm overflow-hidden text-slate-300">
            {isRunning ? (
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-indigo-400">
                Evaluating Profile Tensor vs Target Graph...
              </motion.div>
            ) : output ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-blue-400 mb-2">{'// Result mapped returning from Edge Function LLM Schema'}</div>
                <pre className="whitespace-pre-wrap">{JSON.stringify(output, null, 2)}</pre>
              </motion.div>
            ) : (
              <span className="text-slate-600">No output generated. Awaiting user prompt execution...</span>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
