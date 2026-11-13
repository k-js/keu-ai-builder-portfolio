import { ArrowDown, ArrowUpRight, BrainCircuit, Github, Workflow } from 'lucide-react';
import ArchitectureExplorer from '@/components/ArchitectureExplorer';
import { ActionLink, Tag } from '@/components/ui';

const github = 'https://github.com/k-js';
const inovaCode = `${github}/INOVA-AUTOMACAO`;

const projects = [
  { name: 'INOVA Status Check', area: 'Monitoramento', description: 'Verificação de disponibilidade de URLs, individualmente ou em lote.', href: `${github}/Inova-Status-Chek` },
  { name: 'Dashboards com Power BI', area: 'Dados', description: 'Projetos de organização e visualização de dados no Power BI.', href: `${github}/dashboards_com_power_BI` },
  { name: 'CRUD API', area: 'Software', description: 'Projeto de API para operações de criação, consulta, atualização e exclusão.', href: `${github}/crud-api` },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="shell site-header">
        <a className="brand" href="#inicio"><span aria-hidden="true">K/</span> Keu Araújo</a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#architecture">Arquitetura</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="header-contact" href={github} aria-label="GitHub de Keu Araújo"><Github size={19} aria-hidden="true" /></a>
      </header>

      <main id="conteudo">
        <section className="shell hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="label hero-kicker">Keu Araújo · AI Builder</div>
            <h1 id="hero-title">Building real <em>AI-powered</em> solutions for real problems<span>.</span></h1>
            <p>Sou Keu Araújo. Conecto desenvolvimento de software, economia e inteligência artificial para automatizar processos e transformar dados em ferramentas úteis.</p>
            <div className="flex flex-wrap gap-3">
              <ActionLink href="#projetos" primary>Explorar projetos</ActionLink>
              <ActionLink href="#sobre">Minha trajetória</ActionLink>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="visual-core"><BrainCircuit size={56} strokeWidth={1.15} /></div>
            <span className="visual-label visual-label-top">Automation</span>
            <span className="visual-label visual-label-bottom">AI systems</span>
          </div>
          <a className="hero-scroll label" href="#projetos"><ArrowDown size={16} aria-hidden="true" /> Projetos selecionados</a>
        </section>

        <section className="shell section" id="projetos" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Projetos <em>selecionados.</em></h2>
            <p>Automação, dados e software aplicados a problemas reais.</p>
          </div>
          <article className="case-card" aria-labelledby="case-title">
            <div className="case-intro">
              <div>
                <div className="label text-coral">Case em destaque · UFPR</div>
                <h3 id="case-title">INOVA <em>Automation</em></h3>
                <p>Automação da publicação de páginas do projeto de extensão Inovação e Desenvolvimento Territorial da UFPR. A equipe registra alterações no Google Sheets, e a automação transforma os dados em tabelas no WordPress.</p>
                <div className="flex flex-wrap gap-2">
                  <Tag>Python</Tag><Tag>Google Sheets</Tag><Tag>GitHub Actions</Tag><Tag>Groq</Tag><Tag>CLIP</Tag><Tag>BLIP</Tag><Tag>WordPress</Tag>
                </div>
              </div>
              <Workflow className="case-icon" size={66} strokeWidth={1} aria-hidden="true" />
            </div>
            <div className="case-overview">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><h4>O desafio</h4><p>Manter as páginas do portal em sincronia com as alterações que a equipe registra na planilha.</p></div>
                <div><h4>Minha atuação</h4><p>Mantenho a automação e desenvolvo rotinas de criação de páginas, descrição de conteúdo e seleção e legendagem de capas.</p></div>
              </div>
              <a className="architecture-link" href="#architecture">Explorar arquitetura <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <ArchitectureExplorer />
            <details className="case-decisions">
              <summary>Decisões de arquitetura</summary>
              <ul>
                <li>Verificar saturação antes de executar os classificadores de imagem.</li>
                <li>Separar as dependências de visão das usadas na publicação diária.</li>
                <li>Salvar o conteúdo atual das páginas antes de republicá-las.</li>
              </ul>
            </details>
            <div className="case-links flex flex-wrap gap-3">
              <ActionLink href={inovaCode} primary>Ver código no GitHub</ActionLink>
              <ActionLink href="https://inova.ufpr.br/">Visitar INOVA UFPR</ActionLink>
            </div>
          </article>

          <div className="more-work">
            <h3>Outros projetos</h3>
            <div className="grid gap-3 md:grid-cols-3">
              {projects.map(project => (
                <a className="project-card" href={project.href} key={project.name}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="label text-coral">{project.area}</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="shell section about" id="sobre" aria-labelledby="about-title">
          <div>
            <h2 id="about-title">Sobre <em>mim.</em></h2>
            <p>Minha trajetória reúne desenvolvimento de software, Economia e pesquisa aplicada. No INOVA UFPR, atuo na manutenção e evolução da automação que conecta a planilha da equipe ao site institucional.</p>
          </div>
          <div className="about-list">
            <div><h3>Análise e Desenvolvimento de Sistemas</h3><p>UNIFESO</p></div>
            <div><h3>Ciências Econômicas</h3><p>Universidade Federal do Paraná</p></div>
            <div><h3>Desenvolvimento e inovação</h3><p>Aceleradora Ágil (PUCRS) · Pesquisa e extensão na UFPR</p></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-content">
          <div><h2>Vamos <em>conversar.</em></h2><p>Keu Araújo · Software, dados e IA aplicada</p></div>
          <div className="flex flex-wrap gap-3">
            <ActionLink href="https://www.linkedin.com/in/keu-araujo/" primary>LinkedIn</ActionLink>
            <ActionLink href={github}>GitHub</ActionLink>
          </div>
        </div>
      </footer>
    </>
  );
}
