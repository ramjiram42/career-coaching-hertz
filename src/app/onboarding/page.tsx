'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Target, Briefcase, Zap } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else router.push('/dashboard');
  }

  return (
    <main className="container flex items-center justify-center">
      <div className="premium-card" style={{ maxWidth: '600px', width: '100%', marginTop: '4rem' }}>
        <div className="flex justify-between" style={{ marginBottom: '2rem' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ flex: 1, height: '4px', background: i <= step ? 'var(--primary)' : 'var(--card-border)', margin: '0 4px', borderRadius: '4px' }} />
          ))}
        </div>

        {step === 1 && (
          <div>
            <div className="flex gap-4 items-center" style={{ marginBottom: '1.5rem' }}>
              <Briefcase size={32} className="glow-text" />
              <h2 style={{ margin: 0 }}>Current Role</h2>
            </div>
            <div className="flex-col gap-4">
              <label style={{ display: 'block', marginBottom: '1rem' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)' }}>Job Title</span>
                <input type="text" defaultValue="RPA Developer" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }} />
              </label>
              <label style={{ display: 'block', marginBottom: '1rem' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)' }}>Years of Experience</span>
                <input type="number" defaultValue={10} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }} />
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="flex gap-4 items-center" style={{ marginBottom: '1.5rem' }}>
              <Zap size={32} className="glow-text" />
              <h2 style={{ margin: 0 }}>Your Core Skills</h2>
            </div>
            <div className="flex gap-2" style={{ flexWrap: 'wrap', marginBottom: '2rem' }}>
              {["Automation Anywhere", "UiPath", "Power Automate", "SQL", "Stakeholder Communication", "Delivery Management"].map(s => (
                <div key={s} className="badge" style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--card-border)' }}>
                  {s} ✕
                </div>
              ))}
              <div className="badge" style={{ padding: '0.5rem 1rem', background: 'transparent', color: 'var(--primary)', border: '1px dashed var(--primary)', cursor: 'pointer' }}>
                + Add Skill
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="flex gap-4 items-center" style={{ marginBottom: '1.5rem' }}>
              <Target size={32} className="glow-text" />
              <h2 style={{ margin: 0 }}>Target Destination</h2>
            </div>
            <label style={{ display: 'block', marginBottom: '1rem' }}>
              <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)' }}>Where do you want to go?</span>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }}>
                <option value="sap_pm">SAP Project Manager</option>
                <option value="sf_pm">Salesforce Project Manager</option>
                <option value="auto_arch">Automation Architect</option>
                <option value="prod_owner">Product Owner</option>
              </select>
            </label>
          </div>
        )}

        <div className="flex justify-end" style={{ marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={handleNext}>
            {step === 3 ? "Generate Pathway" : "Continue"}
          </button>
        </div>
      </div>
    </main>
  );
}
