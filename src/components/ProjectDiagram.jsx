import React from 'react';
import { useInViewOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

const DiagramBox = ({ x, y, w, h, title, sub, accent = false, delay = 0 }) => (
  <g
    className="diagram-node"
    style={{ animationDelay: `${delay}ms` }}
  >
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

const Arrow = ({ x1, y1, x2, y2, delay = 0 }) => (
  <g>
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#343E4D"
      strokeWidth="1.25"
      pathLength="1"
      className="diagram-connector"
      style={{ animationDelay: `${delay}ms` }}
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
  const [ref, isVisible] = useInViewOnce({ threshold: 0.15 });

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
        isVisible && 'diagram-active'
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
        </defs>
        <rect width="560" height="220" rx="8" fill={`url(#grid-${type})`} />

        {type === 'rag' && (
          <>
            <DiagramBox x={18} y={36} w={112} h={56} title="PDF Upload" sub="FastAPI /upload" delay={0} />
            <Arrow x1={130} y1={64} x2={156} y2={64} delay={60} />
            <DiagramBox x={156} y={36} w={120} h={56} title="Chunk & Embed" sub="Text Splits" delay={80} />
            <Arrow x1={276} y1={64} x2={302} y2={64} delay={140} />
            <DiagramBox x={302} y={36} w={116} h={56} title="Vector Store" sub="Semantic Index" accent delay={160} />
            <Arrow x1={418} y1={64} x2={440} y2={64} delay={220} />
            <DiagramBox x={440} y={36} w={104} h={56} title="Context Chunks" sub="Top-K Match" delay={240} />

            <DiagramBox x={18} y={132} w={138} h={56} title="User Query" sub="FastAPI /query" delay={140} />
            <Arrow x1={156} y1={160} x2={198} y2={160} delay={220} />
            <DiagramBox x={198} y={132} w={164} h={56} title="LangChain + LLM" sub="Prompt Grounding" accent delay={280} />
            <Arrow x1={362} y1={160} x2={402} y2={160} delay={340} />
            <DiagramBox x={402} y={132} w={142} h={56} title="Grounded Answer" sub="JSON Response" delay={380} />

            <path
              d="M 492 92 L 492 112 L 280 112 L 280 132"
              fill="none"
              stroke="#A5B9FF"
              strokeWidth="1.15"
              strokeDasharray="4 3"
              className="diagram-dashed"
              style={{ animationDelay: '300ms' }}
            />
          </>
        )}

        {type === 'graphrag' && (
          <>
            <DiagramBox x={20} y={82} w={108} h={56} title="Query API" sub="Python Endpoint" delay={0} />
            <path
              d="M 128 110 L 154 110 L 154 58 L 178 58"
              fill="none"
              stroke="#343E4D"
              strokeWidth="1.25"
              pathLength="1"
              className="diagram-connector"
              style={{ animationDelay: '70ms' }}
            />
            <path
              d="M 128 110 L 154 110 L 154 162 L 178 162"
              fill="none"
              stroke="#343E4D"
              strokeWidth="1.25"
              pathLength="1"
              className="diagram-connector"
              style={{ animationDelay: '100ms' }}
            />

            <DiagramBox x={178} y={30} w={146} h={56} title="Neo4j Graph Store" sub="Entity Relations" accent delay={140} />
            <DiagramBox x={178} y={134} w={146} h={56} title="Vector Search" sub="Semantic Match" delay={170} />

            <path
              d="M 324 58 L 354 58 L 354 110 L 378 110"
              fill="none"
              stroke="#A5B9FF"
              strokeWidth="1.15"
              pathLength="1"
              className="diagram-connector"
              style={{ animationDelay: '230ms' }}
            />
            <path
              d="M 324 162 L 354 162 L 354 110 L 378 110"
              fill="none"
              stroke="#343E4D"
              strokeWidth="1.25"
              pathLength="1"
              className="diagram-connector"
              style={{ animationDelay: '250ms' }}
            />

            <DiagramBox x={378} y={82} w={162} h={56} title="Hybrid Context" sub="Graph + Vector Result" accent delay={300} />
          </>
        )}

        {type === 'mri' && (
          <>
            <DiagramBox x={18} y={40} w={118} h={56} title="MRI Dataset" sub="Norm + Balance" delay={0} />
            <Arrow x1={136} y1={68} x2={162} y2={68} delay={60} />
            <DiagramBox x={162} y={40} w={132} h={56} title="PyTorch CNN" sub="Transfer Learning" accent delay={90} />
            <Arrow x1={294} y1={68} x2={320} y2={68} delay={150} />
            <DiagramBox x={320} y={40} w={106} h={56} title="Regularization" sub="Val Loop" delay={180} />
            <Arrow x1={426} y1={68} x2={448} y2={68} delay={240} />
            <DiagramBox x={448} y={40} w={96} h={56} title="Predictions" sub="Test Split" delay={260} />

            <DiagramBox x={72} y={134} w={196} h={52} title="Metrics Evaluation" sub="Precision · Recall · F1 · Matrix" delay={320} />
            <DiagramBox x={294} y={134} w={196} h={52} title="Visual Inspection" sub="Grad-CAM · Streamlit Study" delay={360} />
            <path
              d="M 496 96 L 496 116 L 170 116 L 170 134"
              fill="none"
              stroke="#343E4D"
              strokeWidth="1.15"
              pathLength="1"
              className="diagram-connector"
              style={{ animationDelay: '280ms' }}
            />
            <path
              d="M 392 116 L 392 134"
              fill="none"
              stroke="#343E4D"
              strokeWidth="1.15"
              pathLength="1"
              className="diagram-connector"
              style={{ animationDelay: '320ms' }}
            />
          </>
        )}

        {type === 'fashion' && (
          <>
            <DiagramBox x={18} y={82} w={114} h={56} title="Social Imagery" sub="Preprocess + NLP" delay={0} />
            <Arrow x1={132} y1={110} x2={158} y2={110} delay={60} />
            <DiagramBox x={158} y={82} w={122} h={56} title="CNN Classifier" sub="Trend Features" accent delay={90} />
            <Arrow x1={280} y1={110} x2={306} y2={110} delay={150} />
            <DiagramBox x={306} y={82} w={110} h={56} title="AWS Runs" sub="Cloud Compute" delay={180} />
            <Arrow x1={416} y1={110} x2={438} y2={110} delay={240} />
            <DiagramBox x={438} y={82} w={106} h={56} title="SciTechPress" sub="2025 Paper" accent delay={270} />
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
