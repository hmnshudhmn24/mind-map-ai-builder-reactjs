import React, { useCallback } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Main Topic' }, position: { x: 250, y: 5 } },
];

function MindMap() {
  const [elements, setElements] = React.useState(initialElements);

  const onConnect = useCallback((params) =>
    setElements((els) => addEdge(params, els)), []);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow elements={elements} onConnect={onConnect}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default MindMap;
