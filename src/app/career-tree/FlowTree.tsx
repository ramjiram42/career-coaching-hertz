"use client";

import { useCallback, useState } from 'react';
import ReactFlow, { 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState,
  Edge,
  Node
} from 'reactflow';
import 'reactflow/dist/style.css';

export function FlowTree({ roles }: { roles: any[] }) {
  // Translate Prisma roles into React Flow nodes and edges
  const roleNodes: Node[] = roles.map((role, idx) => ({
    id: role.id,
    position: { x: 300 + (idx % 3) * 250, y: 100 + Math.floor(idx / 3) * 150 },
    data: { label: role.title },
    style: { background: 'var(--card)', color: 'var(--foreground)', border: '1px solid var(--card-border)', borderRadius: '8px', padding: '10px' }
  }));

  const roleEdges: Edge[] = roles
    .filter(r => r.parentRoleId)
    .map(r => ({
      id: `e-${r.parentRoleId}-${r.id}`,
      source: r.parentRoleId,
      target: r.id,
      animated: true,
      style: { stroke: 'var(--primary)' }
    }));

  const [nodes, setNodes, onNodesChange] = useNodesState(roleNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(roleEdges);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(roles.find(r => r.id === node.id));
  }, [roles]);

  return (
    <div className="flex" style={{ height: '70vh' }}>
      <div style={{ flex: selectedNode ? '0 0 70%' : '1 1 100%', height: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--card-border)', borderRadius: '12px', overflow: 'hidden' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
        >
          <Controls style={{ fill: 'var(--foreground)' }} />
          <Background color="var(--card-border)" gap={24} />
        </ReactFlow>
      </div>

      {selectedNode && (
        <div className="premium-card flex-col" style={{ marginLeft: '1rem', flex: '0 0 30%', overflowY: 'auto' }}>
          <h3>{selectedNode.title}</h3>
          <p style={{ fontSize: '0.875rem' }}>{selectedNode.description}</p>
          
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Salary Growth</h4>
            <span className="badge badge-accent">{selectedNode.salaryGrowth}</span>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Difficulty</h4>
            <span className="badge">{selectedNode.difficultyLevel}</span>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Transition Est.</h4>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>{selectedNode.estimatedMonths} Months</span>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
            Select This Path
          </button>
        </div>
      )}
    </div>
  );
}
