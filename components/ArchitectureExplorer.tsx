'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, BrainCircuit, Database, GitBranch, Image, ScanEye, ShieldCheck, Workflow, Globe } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { flows, stages, type StageId } from '@/lib/inova';

const icons = {
  sheets: Database, apps: Workflow, actions: GitBranch, python: Workflow,
  groq: BrainCircuit, nsfw: ShieldCheck, clip: ScanEye, blip: Image, wordpress: Globe,
};

export default function ArchitectureExplorer() {
  const [flowIndex, setFlowIndex] = useState(0);
  const [active, setActive] = useState<StageId>('sheets');
  const reduceMotion = useReducedMotion();
  const flow = flows[flowIndex];
  const stage = stages[active];

  function stageButton(id: StageId) {
    const Icon = icons[id];
    return (
      <button type="button" className="stage-button" aria-pressed={active === id}
        aria-controls="stage-details" onClick={() => setActive(id)}>
        <Icon size={19} aria-hidden="true" />
        <span>{stages[id].name}</span>
      </button>
    );
  }

  return (
    <section className="explorer" aria-labelledby="explorer-title" id="architecture">
      <div className="explorer-heading">
        <h3 id="explorer-title">Explore a arquitetura</h3>
        <span className="label">Demonstração interativa</span>
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Caminhos da arquitetura">
        {flows.map(({ name, steps }, index) => (
          <button key={name} type="button" className="flow-button" aria-pressed={flowIndex === index}
            onClick={() => { setFlowIndex(index); setActive(steps[0]); }}>
            {name}
          </button>
        ))}
      </div>
      <p className="flow-description">{flow.description}</p>
      <ol className="stage-list" aria-label={flow.name}>
        {flow.steps.map((id, index) => (
          <li key={id}>
            {stageButton(id)}
            {index < flow.steps.length - 1 && <>
              <ArrowDown size={16} className="stage-arrow md:hidden" aria-hidden="true" />
              <ArrowRight size={16} className="stage-arrow hidden md:block" aria-hidden="true" />
            </>}
          </li>
        ))}
      </ol>
      {flow.related && (
        <div className="related">
          <span className="label">Apoio de linguagem</span>
          {flow.related.map(id => <div key={id}>{stageButton(id)}</div>)}
        </div>
      )}
      <div id="stage-details" className="stage-details" aria-live="polite" aria-atomic="true">
        <motion.div key={flowIndex + active} initial={reduceMotion ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
          <div className="label text-coral">{stage.role}</div>
          <h4>{stage.name}</h4>
          <p>{stage.description}</p>
          <p className="example">{stage.example}</p>
        </motion.div>
      </div>
    </section>
  );
}
