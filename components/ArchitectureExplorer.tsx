'use client';
import {useState} from 'react';
import { ArrowRight, Check, Database, Layers3, Rocket, ShieldCheck, Workflow } from 'lucide-react';
import {stages, type NodeId} from '@/lib/inova';
const icons = [Database, Workflow, Layers3, Workflow, Layers3, ShieldCheck, Rocket];
export default function ArchitectureExplorer(){
 const [active,setActive]=useState<NodeId>('python');
 const node=stages.find(n=>n.id===active)!;
 return <div className="explorer" aria-label="Explorador da arquitetura do INOVA Automation">
   <div className="explorer-top"><span className="eyebrow">INTERACTIVE SYSTEM MAP</span><span className="system-live"><span className="live-dot"/> Case documentado · não é monitoramento ao vivo</span></div>
   <div className="workflow-nodes" role="group" aria-label="Etapas da automação">
   {stages.map((stage,i)=>{const Icon=icons[i]; return <div className="node-cell" key={stage.id}>
    <button type="button" onClick={()=>setActive(stage.id)} aria-pressed={active===stage.id} className={`node ${active===stage.id?'selected':''} ${stage.category}`}>
      <Icon size={19} aria-hidden="true"/><span>{stage.name}</span><small>{stage.label}</small>
    </button>{i<stages.length-1&&<ArrowRight className="node-arrow" size={17} aria-hidden="true"/>}
   </div>})}
   </div>
   <div className="node-panel" aria-live="polite"><div><div className="eyebrow coral">SELECTED NODE / {node.category.toUpperCase()}</div><h3>{node.name}</h3><p>{node.description}</p></div><div className="chips">{node.technologies.map(t=><span key={t}>{t}</span>)}</div></div>
   <div className="diagram-note"><Check size={15}/> Groq e os modelos de visão atuam em etapas específicas, não como uma cadeia linear obrigatória.</div>
 </div>
}
