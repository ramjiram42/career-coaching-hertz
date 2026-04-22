'use client';
import { Users, Search, Filter, MessageCircle, UserPlus, Globe, Zap } from 'lucide-react';
import Image from 'next/image';

const PEERS = [
  { id: 1, name: 'Sarah Chen', role: 'Data Scientist', location: 'London, UK', match: 94, avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 2, name: 'Marcus Thorne', role: 'Operations Lead', location: 'Chicago, IL', match: 88, avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { id: 3, name: 'Elena Rodriguez', role: 'Product Manager', location: 'Madrid, ES', match: 91, avatar: 'https://i.pravatar.cc/150?u=elena' },
  { id: 4, name: 'David Okafor', role: 'Strategic Finance', location: 'Lagos, NG', match: 85, avatar: 'https://i.pravatar.cc/150?u=david' },
];

export default function NetworkPage() {
  return (
    <main style={{ background: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div style={{ background: 'radial-gradient(circle at 0% 0%, #0F172A 0%, #172554 100%)', padding: '100px 0 140px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 15px #10B981' }}></div>
             <p style={{ color: '#10B981', fontSize: 13, fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0 }}>Global Talent Pipeline</p>
          </div>
          <h1 style={{ color: '#fff', fontSize: 72, fontWeight: 1000, letterSpacing: '-0.04em', margin: '0 0 12px', lineHeight: 0.9 }}>
            Professional <br /> <span style={{ background: 'linear-gradient(90deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Network</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 20, maxWidth: 600, fontWeight: 600, letterSpacing: '0.01em' }}>Forge high-impact connections with peers and leaders across the Hertz global ecosystem.</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: -60 }}>
        <div style={{ background: '#fff', borderRadius: 32, padding: 40, boxShadow: '0 40px 100px -20px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                 <button style={{ padding: '12px 24px', borderRadius: 14, border: 'none', background: '#1E293B', color: '#fff', fontWeight: 800, fontSize: 14 }}>All Connections</button>
                 <button style={{ padding: '12px 24px', borderRadius: 14, border: '1px solid #E2E8F0', background: '#fff', color: '#64748B', fontWeight: 800, fontSize: 14 }}>Recommended</button>
              </div>
              <div style={{ position: 'relative', width: 300 }}>
                 <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
                 <input placeholder="Find colleagues..." style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: 16, border: '1px solid #E2E8F0', outline: 'none', fontWeight: 600 }} />
              </div>
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {PEERS.map(peer => (
                <div key={peer.id} style={{ padding: 24, borderRadius: 24, border: '1px solid #F1F5F9', background: '#F8FAFC', textAlign: 'center' }}>
                   <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px', border: '3px solid #fff', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                      <Image src={peer.avatar} width={80} height={80} alt={peer.name} unoptimized={true} />
                   </div>
                   <h3 style={{ fontWeight: 900, fontSize: 18, color: '#1E293B', margin: '0 0 4px' }}>{peer.name}</h3>
                   <p style={{ fontSize: 13, color: '#64748B', fontWeight: 700, marginBottom: 12 }}>{peer.role}</p>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#10B981', fontSize: 12, fontWeight: 900, marginBottom: 20 }}>
                      <Zap size={12} fill="#10B981" /> {peer.match}% SYNC
                   </div>
                   <div style={{ display: 'flex', gap: 8 }}>
                      <button style={{ flex: 1, padding: '10px', borderRadius: 12, border: 'none', background: '#1E293B', color: '#fff', fontSize: 12, fontWeight: 900 }}>CONNECT</button>
                      <button style={{ padding: '10px', borderRadius: 12, border: '1px solid #E2E8F0', background: '#fff' }}><MessageCircle size={16} /></button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}
