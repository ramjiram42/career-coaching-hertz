const fs = require('fs');
let code = fs.readFileSync('src/components/AIProfileAnalyzer.tsx', 'utf8');

code = code.replace(/<Image src="https:\/\/images.unsplash.com\/photo-1497366216548-37526070297c\?w=400&q=80" alt="Future Move" width=\{120\} height=\{120\} style={{ objectFit: 'cover' }} \/>/g, `
<style>{\`
  .strat-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; animation: stratCrossfade 15s infinite; }
  .ss-1 { animation-delay: 0s; }
  .ss-2 { animation-delay: 5s; }
  .ss-3 { animation-delay: 10s; }
  @keyframes stratCrossfade {
    0% { opacity: 0; transform: scale(1.05); }
    10% { opacity: 1; transform: scale(1.0); }
    33% { opacity: 1; transform: scale(1.0); }
    43% { opacity: 0; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(1.05); }
  }
\`}</style>
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" className="strat-slide ss-1" alt="Strategic Global" />
  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80" className="strat-slide ss-2" alt="Strategic Future Server" />
  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80" className="strat-slide ss-3" alt="Strategic Pathing" />
</div>
`);

// The wrapper div had padding, let's fix its background and make it relative
code = code.replace(/<div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: '4px solid #F59E0B', background: '#f8fafc' }}>/g,
  `<div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: '4px solid #F59E0B', background: '#1e293b', position: 'relative' }}>`
);

fs.writeFileSync('src/components/AIProfileAnalyzer.tsx', code);
console.log('Right replacement successful!');
