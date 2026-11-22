import React from 'react';
import { useDiagramVisibility } from '@/lib/motion';
import { AnimatedLine } from '@/components/motion';
import { cn } from '@/lib/utils';

const DiagramBox = ({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent = false,
  delay = 0,
  pulseDelay = 0,
}) => (
  <g className="diagram-node" style={{ animationDelay: `${delay}ms` }}>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="8"
      fill={accent ? '#171D25' : '#12161C'}
      stroke={accent ? '#A5B9FF' : '#242B35'}
      strokeWidth={accent ? '1.25' : '1'}
    />
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="8"
      fill="rgba(165, 185, 255, 0.06)"
      stroke="#A5B9FF"
      strokeWidth="1.25"
      className="diagram-node-pulse pointer-events-none"
      style={{ animationDelay: `${pulseDelay}ms` }}
    />
    <text
      x={x + w / 2}
      y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
      textAnchor="middle"
      fill="#F2F4F7"
      fontSize="11.5"
      fontFamily="Inter, system-ui, sans-serif"
      fontWeight="500"
    >
      {title}
    </text>
    {sub && (
      <text
        x={x + w / 2}
        y={y + h / 2 + 12}
        textAnchor="middle"
        fill="#98A2B3"
        fontSize="9.5"
        fontFamily="JetBrains Mono, monospace"
      >
        {sub}
      </text>
    )}
  </g>
);

const FlowConnector = ({
  d,
  x1,
  y1,
  x2,
  y2,
  stroke = '#343E4D',
  strokeWidth = '1.25',
  delay = 0,
  flowDelay = 0,
  dashed = false,
  glowId,
}) => (
  <g>
    <AnimatedLine
      d={d}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      delay={delay}
      dashed={dashed}
    />
    {d ? (
      <path
        d={d}
        fill="none"
        stroke="#A5B9FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength="100"
        filter={glowId ? `url(#${glowId})` : undefined}
        className="diagram-flow-pulse"
        style={{ animationDelay: `${flowDelay}ms` }}
      />
    ) : (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#A5B9FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength="100"
        filter={glowId ? `url(#${glowId})` : undefined}
        className="diagram-flow-pulse"
        style={{ animationDelay: `${flowDelay}ms` }}
      />
    )}
  </g>
);

const Arrow = ({ x1, y1, x2, y2, delay = 0, flowDelay = 0, glowId }) => (
  <g>
    <FlowConnector
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      delay={delay}
      flowDelay={flowDelay}
      glowId={glowId}
    />
    <polygon
      points={`${x2},${y2} ${x2 - 6},${y2 - 3.5} ${x2 - 6},${y2 + 3.5}`}
      fill="#98A2B3"
      className="diagram-node"
      style={{ animationDelay: `${delay + 120}ms` }}
    />
  </g>
);

const ProjectDiagram = ({ type, compact = false }) => {
  const { ref, isVisible, isPaused } = useDiagramVisibility();

  const glowId = `pulse-glow-${type}`;

  const labelMap = {
    rag: 'RAG-Based AI Document Chatbot architecture diagram',
    graphrag: 'GraphRAG hybrid retrieval architecture diagram',
    mri: 'Brain Tumor Detection PyTorch workflow diagram (experimental)',
    fashion: 'Fashion Trend Extraction CNN and AWS research workflow diagram',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full h-full bg-base flex flex-col justify-between p-4 sm:p-5 select-none',
        isVisible && 'diagram-active',
        isPaused && 'diagram-paused'
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
          Pipeline Schematic
        </span>
        <span className="font-mono text-[10px] text-muted/80">
          {type === 'mri' ? 'Experimental · Non-clinical' : 'Documented workflow'}
        </span>
      </div>

      <svg
        viewBox="0 0 560 220"
        role="img"
        aria-label={labelMap[type] || 'System workflow diagram'}
        className="w-full h-auto my-auto"
      >
        <defs>
          <pattern
            id={`grid-${type}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="#171D25"
              strokeWidth="1"
            />
          </pattern>
          <filter id={glowId} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="1.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="560" height="220" rx="8" fill={`url(#grid-${type})`} />

        {type === 'rag' && (
          <>
            <DiagramBox x={18} y={36} w={112} h={56} title="PDF Upload" sub="FastAPI /upload" delay={0} pulseDelay={350} />
            <Arrow x1={130} y1={64} x2={156} y2={64} delay={60} flowDelay={480} glowId={glowId} />
            <DiagramBox x={156} y={36} w={120} h={56} title="Chunk & Embed" sub="Text Splits" delay={80} pulseDelay={760} />
            <Arrow x1={276} y1={64} x2={302} y2={64} delay={140} flowDelay={880} glowId={glowId} />
            <DiagramBox x={302} y={36} w={116} h={56} title="Vector Store" sub="Semantic Index" accent delay={160} pulseDelay={1150} />
            <Arrow x1={418} y1={64} x2={440} y2={64} delay={220} flowDelay={1270} glowId={glowId} />
            <DiagramBox x={440} y={36} w={104} h={56} title="Context Chunks" sub="Top-K Match" delay={240} pulseDelay={1540} />

            <DiagramBox x={18} y={132} w={138} h={56} title="User Query" sub="FastAPI /query" delay={140} pulseDelay={1540} />
            <Arrow x1={156} y1={160} x2={198} y2={160} delay={220} flowDelay={1660} glowId={glowId} />
            <DiagramBox x={198} y={132} w={164} h={56} title="LangChain + LLM" sub="Prompt Grounding" accent delay={280} pulseDelay={2050} />
            <Arrow x1={362} y1={160} x2={402} y2={160} delay={340} flowDelay={2200} glowId={glowId} />
            <DiagramBox x={402} y={132} w={142} h={56} title="Grounded Answer" sub="JSON Response" delay={380} pulseDelay={2480} />

            <FlowConnector
              d="M 492 92 L 492 112 L 280 112 L 280 132"
              stroke="#A5B9FF"
              strokeWidth="1.15"
              dashed
              delay={300}
              flowDelay={1680}
              glowId={glowId}
            />
          </>
        )}

        {type === 'graphrag' && (
          <>
            <DiagramBox x={20} y={82} w={108} h={56} title="Query API" sub="Python Endpoint" delay={0} pulseDelay={350} />
            <FlowConnector
              d="M 128 110 L 154 110 L 154 58 L 178 58"
              delay={70}
              flowDelay={520}
              glowId={glowId}
            />
            <FlowConnector
              d="M 128 110 L 154 110 L 154 162 L 178 162"
              delay={100}
              flowDelay={560}
              glowId={glowId}
            />

            <DiagramBox x={178} y={30} w={146} h={56} title="Neo4j Graph Store" sub="Entity Relations" accent delay={140} pulseDelay={1050} />
            <DiagramBox x={178} y={134} w={146} h={56} title="Vector Search" sub="Semantic Match" delay={170} pulseDelay={1090} />

            <FlowConnector
              d="M 324 58 L 354 58 L 354 110 L 378 110"
              stroke="#A5B9FF"
              strokeWidth="1.15"
              delay={230}
              flowDelay={1360}
              glowId={glowId}
            />
            <FlowConnector
              d="M 324 162 L 354 162 L 354 110 L 378 110"
              delay={250}
              flowDelay={1400}
              glowId={glowId}
            />

            <DiagramBox x={378} y={82} w={162} h={56} title="Hybrid Context" sub="Graph + Vector Result" accent delay={300} pulseDelay={1920} />
          </>
        )}

        {type === 'mri' && (
          <>
            <DiagramBox x={18} y={40} w={118} h={56} title="MRI Dataset" sub="Norm + Balance" delay={0} pulseDelay={350} />
            <Arrow x1={136} y1={68} x2={162} y2={68} delay={60} flowDelay={480} glowId={glowId} />
            <DiagramBox x={162} y={40} w={132} h={56} title="PyTorch CNN" sub="Transfer Learning" accent delay={90} pulseDelay={760} />
            <Arrow x1={294} y1={68} x2={320} y2={68} delay={150} flowDelay={880} glowId={glowId} />
            <DiagramBox x={320} y={40} w={106} h={56} title="Regularization" sub="Val Loop" delay={180} pulseDelay={1150} />
            <Arrow x1={426} y1={68} x2={448} y2={68} delay={240} flowDelay={1270} glowId={glowId} />
            <DiagramBox x={448} y={40} w={96} h={56} title="Predictions" sub="Test Split" delay={260} pulseDelay={1540} />

            <DiagramBox x={72} y={134} w={196} h={52} title="Metrics Evaluation" sub="Precision · Recall · F1 · Matrix" delay={320} pulseDelay={2150} />
            <DiagramBox x={294} y={134} w={196} h={52} title="Visual Inspection" sub="Grad-CAM · Streamlit Study" delay={360} pulseDelay={2100} />
            <FlowConnector
              d="M 496 96 L 496 116 L 170 116 L 170 134"
              strokeWidth="1.15"
              delay={280}
              flowDelay={1720}
              glowId={glowId}
            />
            <FlowConnector
              d="M 496 96 L 496 116 L 392 116 L 392 134"
              strokeWidth="1.15"
              delay={320}
              flowDelay={1720}
              glowId={glowId}
            />
          </>
        )}

        {type === 'fashion' && (
          <>
            <DiagramBox x={18} y={82} w={114} h={56} title="Social Imagery" sub="Preprocess + NLP" delay={0} pulseDelay={350} />
            <Arrow x1={132} y1={110} x2={158} y2={110} delay={60} flowDelay={520} glowId={glowId} />
            <DiagramBox x={158} y={82} w={122} h={56} title="CNN Classifier" sub="Trend Features" accent delay={90} pulseDelay={840} />
            <Arrow x1={280} y1={110} x2={306} y2={110} delay={150} flowDelay={1020} glowId={glowId} />
            <DiagramBox x={306} y={82} w={110} h={56} title="AWS Runs" sub="Cloud Compute" delay={180} pulseDelay={1340} />
            <Arrow x1={416} y1={110} x2={438} y2={110} delay={240} flowDelay={1520} glowId={glowId} />
            <DiagramBox x={438} y={82} w={106} h={56} title="SciTechPress" sub="2025 Paper" accent delay={270} pulseDelay={1840} />
          </>
        )}
      </svg>

      {!compact && (
        <p className="font-mono text-[10px] text-muted mt-2">
          Conceptual schematic based on documented repo/resume architecture.
        </p>
      )}
    </div>
  );
};

export default ProjectDiagram;
