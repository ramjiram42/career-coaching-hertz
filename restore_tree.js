const fs = require('fs');
let code = fs.readFileSync('src/components/AIProfileAnalyzer.tsx', 'utf8');

// The replacement code logic
const treeBlock = `
         {/* SURPRISE ME ANIMATED TREE */}
         {showSurprise && !portalActivePath && (
           <div style={{ marginTop: 20 }}>
               {/* Dotted Connections Box */}
               <div style={{ position: 'relative', height: 120, width: '100%', marginBottom: 40, marginTop: -10, opacity: 0, animation: 'cardIn 0.5s ease forwards' }}>
                  <svg width="100%" height="100%" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
                    <path d="M 50% 0 Q 50% 60, 20% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>
                    <path d="M 50% 0 Q 50% 60, 40% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>
                    <path d="M 50% 0 Q 50% 60, 60% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>
                    <path d="M 50% 0 Q 50% 60, 80% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>
                  </svg>
               </div>

               {/* The 4 Cards Row */}
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
                  
                  {/* Card 1 */}
                  <div onClick={() => setPortalActivePath('intelligent-automation-arch')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0s', cursor: 'pointer' }}>
                     <div style={{ background: '#10B981', color: '#fff', fontSize: 11, fontWeight: 900, padding: '4px 16px', borderRadius: 8, border: '2px solid #111827', textTransform: 'uppercase', marginBottom: -10, position: 'relative', zIndex: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>HIGH MATCH</div>
                     <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '30px 20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', position: 'relative', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } as any }}>
                        <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>JOURNEY</div>
                        <div style={{ position: 'absolute', top: 12, right: 12 }}><Compass size={16} color="#CBD5E1" /></div>
                        <div style={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '4px solid #F1F5F9', marginBottom: 16 }}>
                           <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=80" width={90} height={90} alt="" style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', lineHeight: 1.2, marginBottom: 20 }}>Intelligent<br/>Automation Architect</div>
                        <div style={{ background: '#4d9e20', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 6, textTransform: 'uppercase' }}>NEXT STEP</div>
                     </div>
                  </div>

                  {/* Card 2 */}
                  <div onClick={() => setPortalActivePath('enterprise-automation-arch')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.2s', cursor: 'pointer' }}>
                     <div style={{ background: '#10B981', color: '#fff', fontSize: 11, fontWeight: 900, padding: '4px 16px', borderRadius: 8, border: '2px solid #111827', textTransform: 'uppercase', marginBottom: -10, position: 'relative', zIndex: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>HIGH MATCH</div>
                     <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '30px 20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', position: 'relative', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } as any }}>
                        <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>JOURNEY</div>
                        <div style={{ position: 'absolute', top: 12, right: 12 }}><Compass size={16} color="#CBD5E1" /></div>
                        <div style={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '4px solid #F1F5F9', marginBottom: 16 }}>
                           <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80" width={90} height={90} alt="" style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', lineHeight: 1.2, marginBottom: 20 }}>Enterprise<br/>Automation Architect</div>
                        <div style={{ background: '#EA580C', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 6, textTransform: 'uppercase' }}>FUTURE MOVE</div>
                     </div>
                  </div>

                  {/* Card 3 */}
                  <div onClick={() => setPortalActivePath('tech-program-manager')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.4s', cursor: 'pointer' }}>
                     <div style={{ background: '#F59E0B', color: '#fff', fontSize: 11, fontWeight: 900, padding: '4px 16px', borderRadius: 8, border: '2px solid #111827', textTransform: 'uppercase', marginBottom: -10, position: 'relative', zIndex: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>ADJACENT</div>
                     <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '30px 20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', position: 'relative', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } as any }}>
                        <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>JOURNEY</div>
                        <div style={{ position: 'absolute', top: 12, right: 12 }}><Compass size={16} color="#CBD5E1" /></div>
                        <div style={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '4px solid #F1F5F9', marginBottom: 16 }}>
                           <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=80" width={90} height={90} alt="" style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', lineHeight: 1.2, marginBottom: 20 }}>Technical<br/>Program Manager</div>
                        <div style={{ background: '#EA580C', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 6, textTransform: 'uppercase' }}>FUTURE MOVE</div>
                     </div>
                  </div>

                  {/* Card 4 */}
                  <div onClick={() => setPortalActivePath('ai-architect')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.6s', cursor: 'pointer' }}>
                     <div style={{ background: '#8B5CF6', color: '#fff', fontSize: 11, fontWeight: 900, padding: '4px 16px', borderRadius: 8, border: '2px solid #111827', textTransform: 'uppercase', marginBottom: -10, position: 'relative', zIndex: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>WILD CARD</div>
                     <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '30px 20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', position: 'relative', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } as any }}>
                        <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>JOURNEY</div>
                        <div style={{ position: 'absolute', top: 12, right: 12 }}><Compass size={16} color="#CBD5E1" /></div>
                        <div style={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '4px solid #F1F5F9', marginBottom: 16 }}>
                           <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80" width={90} height={90} alt="" style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', lineHeight: 1.2, marginBottom: 20 }}>AI<br/>Architect</div>
                        <div style={{ background: '#9F1239', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 6, textTransform: 'uppercase' }}>WILD CARD</div>
                     </div>
                  </div>

               </div>
           </div>
         )}
         
         {/* CAREER COACHING PORTAL */}
         {showSurprise && portalActivePath && (
           <CareerCoachingPortal overridePath={portalActivePath} onBack={() => setPortalActivePath(null)} />
         )}
       </div>
`;

const startMarker = "{/* CAREER COACHING PORTAL */}";
const endMarker = "</div>\n\n       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 120 }}>";

let startIndex = code.indexOf(startMarker);
let endIndex = code.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  let modified = code.substring(0, startIndex) + treeBlock + code.substring(endIndex + 6);
  
  // Need to add state variable \`const [portalActivePath, setPortalActivePath] = useState(null);\`
  if (!modified.includes('portalActivePath')) {
    modified = modified.replace("const [showSurprise, setShowSurprise] = useState(false);", "const [showSurprise, setShowSurprise] = useState(false);\n  const [portalActivePath, setPortalActivePath] = useState<string | null>(null);");
  }

  fs.writeFileSync('src/components/AIProfileAnalyzer.tsx', modified);
  console.log("Restored tree and linked to portal!");
} else {
  console.log("Markers not found");
}
