export const stages = {
  sheets: {
    name: 'Google Sheets',
    role: 'Origem dos dados',
    description: 'A equipe marca STATUS nas linhas que precisam de inclusão, edição ou remoção.',
    example: 'Exemplo fictício: uma organização de tecnologia educacional recebe o status EDITAR.',
  },
  apps: {
    name: 'Apps Script',
    role: 'Triagem de pendências',
    description: 'O script verifica os valores de STATUS e registra na aba CHECAR ABAS os nomes das abas com pendências.',
    example: 'A aba fictícia Educação aparece na lista de abas a republicar.',
  },
  actions: {
    name: 'GitHub Actions',
    role: 'Execução dos workflows',
    description: 'O workflow de atualização pode rodar por agendamento ou disparo manual. A execução salva o conteúdo atual das páginas antes de atualizá-las.',
    example: 'O workflow prepara um backup da página fictícia Educação.',
  },
  python: {
    name: 'Python',
    role: 'Leitura e composição',
    description: 'O orquestrador lê as abas selecionadas e gera o HTML das tabelas com os filtros previstos para cada página.',
    example: 'As linhas fictícias viram uma tabela filtrável por cidade e categoria.',
  },
  groq: {
    name: 'Groq · GPT-OSS',
    role: 'Geração de texto',
    description: 'O modelo padrão openai/gpt-oss-120b escreve descrições ancoradas nas categorias da aba, sugere buscas para capas e reescreve legendas em português para texto alternativo.',
    example: 'A categoria fictícia Plataformas de ensino orienta a descrição da página.',
  },
  nsfw: {
    name: 'Classificador NSFW',
    role: 'Filtro de conteúdo',
    description: 'Após uma verificação de saturação por pixels, o modelo Falconsai/nsfw_image_detection filtra imagens candidatas com conteúdo impróprio.',
    example: 'Uma candidata fictícia reprovada sai da seleção antes da análise com CLIP.',
  },
  clip: {
    name: 'CLIP',
    role: 'Relevância e ordenação',
    description: 'O CLIP verifica a relevância temática e ajuda a ordenar as imagens aprovadas por similaridade. Imagens com pessoa em destaque são colocadas no fim da fila.',
    example: 'Uma foto fictícia de materiais didáticos é comparada ao tema Educação.',
  },
  blip: {
    name: 'BLIP',
    role: 'Legenda para capa existente',
    description: 'No modo --legendar, o BLIP descreve a imagem já recortada e publicada quando ela precisa de texto alternativo. O modelo de linguagem transforma a legenda em alt em português.',
    example: 'Para uma capa fictícia já publicada, o BLIP descreve um caderno e um lápis sobre uma mesa.',
  },
  wordpress: {
    name: 'WordPress REST API',
    role: 'Páginas e mídia',
    description: 'As rotinas atualizam as páginas e a biblioteca de mídia do site institucional por meio da API.',
    example: 'Na demonstração, a página fictícia recebe o HTML ou o texto alternativo produzido no caminho selecionado.',
  },
} as const;

export type StageId = keyof typeof stages;

type Flow = { name: string; description: string; steps: readonly StageId[]; related?: readonly StageId[] };

export const flows: readonly Flow[] = [
  {
    name: 'Atualização de páginas',
    description: 'Da sinalização na planilha à republicação das tabelas.',
    steps: ['sheets', 'apps', 'actions', 'python', 'wordpress'],
    related: ['groq'],
  },
  {
    name: 'Seleção de capa',
    description: 'Após buscar candidatas no Pexels e checar a saturação, o workflow filtra, ordena, recorta e envia a capa escolhida. O alt vem da legenda do Pexels, reescrita em português.',
    steps: ['nsfw', 'clip', 'wordpress'],
    related: ['groq'],
  },
  {
    name: 'Legenda de capa existente',
    description: 'A rotina de legendagem descreve a capa existente, prepara o texto em português e grava o alt no WordPress.',
    steps: ['blip', 'groq', 'wordpress'],
  },
];
