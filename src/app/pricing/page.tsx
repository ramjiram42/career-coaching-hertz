export default function PricingPage() {
  return (
    <main className="container flex-col items-center pt-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Invest in Career Velocity</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl">
          Scale readiness transitions via Individual Paths or Enterprise Workforces globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Individual */}
        <div className="premium-card flex flex-col justify-between hover:border-blue-500/50 transition-all">
          <div>
            <h3 className="text-2xl font-bold mb-2">Pro Learner (B2C)</h3>
            <p className="text-slate-400 text-sm mb-6">AI-driven transition pathways across multiple core roles.</p>
            <div className="text-4xl font-extrabold mb-8 flex items-baseline gap-2">
              $29<span className="text-lg text-slate-500 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">✓ <span className="text-slate-300">Unlimited Path Simulations</span></li>
              <li className="flex items-center gap-3">✓ <span className="text-slate-300">Match Multiple Mentors</span></li>
              <li className="flex items-center gap-3">✓ <span className="text-slate-300">Basic AI Insights</span></li>
            </ul>
          </div>
          <button className="btn btn-primary w-full py-4 text-lg">Subscribe Now</button>
        </div>

        {/* Corporate */}
        <div className="premium-card flex flex-col justify-between border-blue-600/50 relative overflow-hidden bg-blue-900/10">
          <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-4 py-1 rounded-bl-lg">POPULAR B2B</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Enterprise Team</h3>
            <p className="text-slate-400 text-sm mb-6">Aggregate tenant analytics tracking organizational pivot speeds.</p>
            <div className="text-4xl font-extrabold mb-8 flex items-baseline gap-2">
              $99<span className="text-lg text-slate-500 font-medium">/seat/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Tenant Admin Dashboards</span></li>
              <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Manager Skill Heatmaps</span></li>
              <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Corporate Single Sign-On (SSO)</span></li>
              <li className="flex items-center gap-3 text-blue-400">✓ <span className="text-slate-300">Advanced AI Workforce Audits</span></li>
            </ul>
          </div>
          <button className="btn btn-primary w-full py-4 text-lg bg-blue-600 shadow-lg shadow-blue-600/20">Contact Sales</button>
        </div>

        {/* Custom */}
        <div className="premium-card flex flex-col justify-between opacity-80 hover:opacity-100 transition-all">
          <div>
            <h3 className="text-2xl font-bold mb-2">Global Partner</h3>
            <p className="text-slate-400 text-sm mb-6">Unlimited custom schema ingestion across thousands of roles.</p>
            <div className="text-4xl font-extrabold mb-8 flex items-baseline gap-2">
              Custom
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">✓ <span className="text-slate-300">Dedicated Tenant Cloud</span></li>
              <li className="flex items-center gap-3">✓ <span className="text-slate-300">Custom LLM Prompts</span></li>
              <li className="flex items-center gap-3">✓ <span className="text-slate-300">24/7 SLA Target</span></li>
            </ul>
          </div>
          <button className="btn btn-outline w-full py-4 text-lg border-slate-600 text-slate-300">Request Custom Demo</button>
        </div>
      </div>
    </main>
  )
}
