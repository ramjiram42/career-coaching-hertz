import { Activity, Building2, Users2, BarChart4 } from "lucide-react"
import { ReadinessChart } from "@/app/dashboard/RechartsClient"

export default function TenantDashboardPage() {
  return (
    <main className="container space-y-8 pb-16">
      <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-10"></div>
        <div className="z-10">
          <div className="flex items-center gap-3 mb-2 text-blue-400 font-semibold tracking-wider text-sm uppercase">
            <Building2 size={18} /> GlobalProcess Systems Inc. (Tenant)
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Workforce Transformation</h1>
          <p className="text-slate-400 font-medium">B2B Mode - Track departmental transitions and readiness density.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="premium-card">
          <div className="flex items-center text-slate-400 gap-2 mb-3">
            <Users2 size={18}/> Active Learners
          </div>
          <div className="text-3xl font-bold">142</div>
          <div className="text-xs text-green-400 mt-2">+12 this week</div>
        </div>
        <div className="premium-card">
          <div className="flex items-center text-slate-400 gap-2 mb-3">
            <Activity size={18}/> Avg Readiness Score
          </div>
          <div className="text-3xl font-bold">64%</div>
          <div className="text-xs text-slate-400 mt-2">Targeting SAP/CRM Roles</div>
        </div>
        <div className="premium-card">
          <div className="flex items-center text-slate-400 gap-2 mb-3">
            <BarChart4 size={18}/> Cross-Domain Mentors
          </div>
          <div className="text-3xl font-bold text-blue-400">18</div>
          <div className="text-xs text-slate-400 mt-2">Internal Corporate Mentors</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="premium-card flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Agile Team Readiness Breakdown</h2>
          <p className="text-slate-400 mb-2">Analyzing completion percentiles across parallel skill-tracks.</p>
          <div className="h-[250px] w-full">
            <ReadinessChart learning={50} mentor={20} certs={10} />
          </div>
        </div>

        <div className="premium-card flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Skill Gap Heatmap</h2>
          <p className="text-slate-400 mb-2">Identify cross-departmental missing module footprints.</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>SAP S/4HANA Architectures</span>
                <span className="text-yellow-400">42% Match</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Stakeholder Management (Agile)</span>
                <span className="text-green-400">88% Match</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Cloud Data Warehousing</span>
                <span className="text-red-400">12% Match</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
          <button className="btn btn-outline border-blue-500/50 text-blue-400 hover:bg-blue-900/20 w-fit text-sm mt-4">
            Run AI Heatmap Audit
          </button>
        </div>
      </div>
    </main>
  )
}
