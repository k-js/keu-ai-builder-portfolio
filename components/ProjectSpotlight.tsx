'use client';

import { useState } from 'react';
import { ArrowUpRight, BarChart3, Code2, Workflow } from 'lucide-react';

type Project = { name: string; area: string; description: string; href: string };

const icons = [Workflow, BarChart3, Code2];

export default function ProjectSpotlight({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  const Icon = icons[selected];

  return (
    <section className="spotlight" aria-labelledby="spotlight-title">
      <h2 id="spotlight-title" className="label">Explore meu trabalho</h2>
      <div className="spotlight-controls" role="group" aria-label="Área do projeto">
        {projects.map(({ area }, index) => (
          <button key={area} type="button" aria-pressed={selected === index}
            aria-controls="spotlight-preview" onClick={() => setSelected(index)}>
            {area}
          </button>
        ))}
      </div>
      <div id="spotlight-preview" aria-live="polite">
        <div className="spotlight-screen" key={project.name}>
          <Icon className="spotlight-icon" size={34} strokeWidth={1.5} aria-hidden="true" />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a className="architecture-link" href={project.href}>
            {project.href.startsWith('#') ? 'Ler o case' : 'Ver no GitHub'}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
