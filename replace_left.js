const fs = require('fs');
let code = fs.readFileSync('src/components/AIProfileAnalyzer.tsx', 'utf8');
code = code.replace(/<Image src="https:\/\/images.unsplash.com\/photo-1543269865-cbf427effbad\?w=400&q=80" alt="Next Step" width=\{120\} height=\{120\} style={{ objectFit: 'cover' }} \/>/g, `
<style>{\`
  .tech-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; animation: techCrossfade 15s infinite; }
  .ts-1 { animation-delay: 0s; }
  .ts-2 { animation-delay: 5s; }
  .ts-3 { animation-delay: 10s; }
  @keyframes techCrossfade {
    0% { opacity: 0; transform: scale(1.05); }
    10% { opacity: 1; transform: scale(1.0); }
    33% { opacity: 1; transform: scale(1.0); }
    43% { opacity: 0; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(1.05); }
  }
\`}</style>
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80" className="tech-slide ts-1" alt="Tech Code" />
  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80" className="tech-slide ts-2" alt="Tech Team" />
  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80" className="tech-slide ts-3" alt="Tech Engineer" />
</div>
`);

// The wrapper div had overflow hidden but position static, need position relative!
code = code.replace(/<div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: '4px solid #10B981', background: '#f8fafc' }}>/g,
  `<div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: '4px solid #10B981', background: '#1e293b', position: 'relative' }}>`
);

fs.writeFileSync('src/components/AIProfileAnalyzer.tsx', code);
console.log('Replacement successful!');
