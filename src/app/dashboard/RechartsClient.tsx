"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function ReadinessChart({ learning, mentor, certs }: { learning: number, mentor: number, certs: number }) {
  const chartData = [
    { name: "Learning Path", value: learning, color: "#3b82f6" },
    { name: "Mentorship", value: mentor, color: "#8b5cf6" },
    { name: "Certifications", value: certs, color: "#10B981" },
    { name: "Missing Gap", value: 100 - (learning + mentor + certs), color: "#1e293b" }
  ];

  return (
    <div style={{ width: '100%', height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
