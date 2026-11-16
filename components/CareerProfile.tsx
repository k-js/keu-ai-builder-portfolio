import { ArrowUpRight, ChevronDown } from 'lucide-react';

const experiences = [
  {
    area: 'Formação',
    title: 'Sistemas e Economia',
    description: 'Estudo Análise e Desenvolvimento de Sistemas na UNIFESO e Ciências Econômicas na UFPR. Em Sistemas, aprofundo o desenvolvimento de aplicações. Em Economia, trabalho com perguntas de pesquisa, análise de dados e interpretação de resultados.',
  },
  {
    area: 'Extensão · UFPR',
    title: 'Automação em uso institucional',
    description: 'No projeto Inovação e Desenvolvimento Territorial, mantenho uma automação que conecta a planilha da equipe ao portal INOVA. Desenvolvo rotinas para criar páginas, preparar descrições e selecionar e legendar capas.',
    href: '#architecture',
    link: 'Explorar a arquitetura',
  },
  {
    area: 'Pesquisa · Economia',
    title: 'Da auditoria dos dados ao modelo',
    description: 'Na monografia de Economia, uso modelos VAR no Gretl para estudar relações entre variáveis macroeconômicas. O trabalho passa pela auditoria da base, pela comparação de especificações e pela interpretação de respostas a choques.',
  },
  {
    area: 'Desenvolvimento · PUCRS',
    title: 'Aprendizado por experimentação',
    description: 'Minha trajetória inclui a Aceleradora Ágil da PUCRS. Também desenvolvi um jogo voltado a habilidades socioemocionais, experiência que me levou a pesquisar, testar ideias e corrigir problemas durante a implementação.',
  },
];

export default function CareerProfile() {
  return (
    <section className="shell section career" id="sobre" aria-labelledby="about-title">
      <div className="career-intro">
        <h2 id="about-title">Sobre <em>mim.</em></h2>
        <p className="career-lead">Investigo problemas com dados e construo ferramentas para resolvê-los.</p>
        <p>Sou Keu Araújo. Minha formação em tecnologia e Economia me ajuda a entender como um processo funciona, identificar onde ele pode melhorar e testar soluções com quem vai usá-las.</p>
      </div>
      <div className="career-path" aria-label="Experiências e formação">
        {experiences.map(({ area, title, description, href, link }, index) => (
          <details className="career-item" key={title} open={index === 0 ? true : undefined}>
            <summary>
              <span className="label text-coral">{area}</span>
              <span className="career-title">{title}</span>
              <ChevronDown size={20} className="career-chevron" aria-hidden="true" />
            </summary>
            <div className="career-detail">
              <p>{description}</p>
              {href && <a className="architecture-link" href={href}>{link}<ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
