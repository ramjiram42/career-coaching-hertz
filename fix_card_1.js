const fs = require('fs');
let code = fs.readFileSync('src/components/AIProfileAnalyzer.tsx', 'utf8');

code = code.replace(
  /{[\s]*\/\* Card 1 \*\/[\s]*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>/, 
  `{/* Card 1 */}
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0s' }}>`
);

fs.writeFileSync('src/components/AIProfileAnalyzer.tsx', code);
console.log('Fixed card 1');
