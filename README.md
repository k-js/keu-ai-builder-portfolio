# Keu Araújo · AI Builder Portfolio

Portfólio pessoal responsivo, desenvolvido em Next.js, React e TypeScript. A homepage contém o case **INOVA Automation (UFPR)** com uma demonstração interativa e pública da arquitetura — sem executar rotinas ou expor credenciais institucionais.

## Rodar localmente

Requisitos: Node.js 20.9+ e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Verificações

```bash
npm run typecheck
npm run build
```

## Conteúdo

- `app/page.tsx` — homepage e demais seções
- `app/globals.css` — estilos e responsividade
- `components/ArchitectureExplorer.tsx` — explorador interativo por etapas
- `lib/inova.ts` — dados das etapas e textos técnicos
- `docs/` — decisões e próximos passos

## Importante

- A interface **não** monitora o sistema institucional em tempo real.
- Efeitos demonstrativos são visuais e não executam a automação.
- Informações sobre desempenho e tempo economizado ainda dependem de medição verificável.
- Imagens de pessoas geradas por IA não foram utilizadas como fotos reais.
- Previsões de formatura não são exibidas porque o mês/ano antecipado ainda precisa ser definido com precisão.
