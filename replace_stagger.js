const fs = require('fs');
let code = fs.readFileSync('src/components/AIProfileAnalyzer.tsx', 'utf8');

// 1. Remove animation from wrapper 
code = code.replace(
  /<div style={{ marginTop: 20, animation: 'cardIn 0.8s cubic-bezier\(0.16, 1, 0.3, 1\) forwards' }}>/g,
  `<div style={{ marginTop: 20 }}>`
);

// 2. Animate SVG container in first
code = code.replace(
  /<div style={{ position: 'relative', height: 120, width: '100%', marginBottom: 40, marginTop: -10 }}>/g,
  `<div style={{ position: 'relative', height: 120, width: '100%', marginBottom: 40, marginTop: -10, opacity: 0, animation: 'cardIn 0.5s ease forwards' }}>`
);

// 3. Add dotted line flow animations to SVGs
code = code.replace(
  /<path d="M 50% 0 Q 50% 60, 20% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6" \/>/,
  `<path d="M 50% 0 Q 50% 60, 20% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>`
);
code = code.replace(
  /<path d="M 50% 0 Q 50% 60, 40% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6" \/>/,
  `<path d="M 50% 0 Q 50% 60, 40% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>`
);
code = code.replace(
  /<path d="M 50% 0 Q 50% 60, 60% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6" \/>/,
  `<path d="M 50% 0 Q 50% 60, 60% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>`
);
code = code.replace(
  /<path d="M 50% 0 Q 50% 60, 80% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6" \/>/,
  `<path d="M 50% 0 Q 50% 60, 80% 100" fill="none" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 6"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></path>`
);

// 4. Stagger the cards. We'll replace the first 4 instances of the card wrapper.
let matchCount = 0;
code = code.replace(/<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>/g, (match) => {
  matchCount++;
  if (matchCount === 2) {
    return `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.2s' }}>`;
  } else if (matchCount === 3) {
    return `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.4s' }}>`;
  } else if (matchCount === 4) {
    return `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.6s' }}>`;
  } else if (matchCount === 5) {
    return `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: 'cardIn 0.5s ease forwards', animationDelay: '0.8s' }}>`;
  }
  return match;
});

fs.writeFileSync('src/components/AIProfileAnalyzer.tsx', code);
console.log('Staggering applied! ' + matchCount + ' matches modified.');
