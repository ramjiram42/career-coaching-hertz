const fs = require('fs');
let code = fs.readFileSync('src/components/AIProfileAnalyzer.tsx', 'utf8');

if (!code.includes('CareerCoachingPortal')) {
  code = code.replace(/import React, { useState, useEffect } from 'react';/, "import React, { useState, useEffect } from 'react';\nimport CareerCoachingPortal from './pathways/CareerCoachingPortal';");
}

// Ensure the massive old wrapper block starting from `{/* SURPRISE ME ANIMATED TREE */}` down to just before `{/* LEFT SIDE: SKILL PROGRESS BARS */}` is cleanly replaced by the portal.
const startMarker = "{/* SURPRISE ME ANIMATED TREE */}";
const endMarker = "<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 120 }}>";

let startIndex = code.indexOf(startMarker);
let endIndex = code.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  let replacement = `
         {/* CAREER COACHING PORTAL */}
         {showSurprise && (
           <CareerCoachingPortal />
         )}
       </div>

       `;
  code = code.substring(0, startIndex) + replacement + code.substring(endIndex);
}

fs.writeFileSync('src/components/AIProfileAnalyzer.tsx', code);
console.log('Portal injected effectively!');
