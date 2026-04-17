'use client';

import { AIProfileAnalyzer } from "@/components/AIProfileAnalyzer"

export default function YourMovePage() {
  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container">
        <AIProfileAnalyzer />
      </div>
    </main>
  );
}
