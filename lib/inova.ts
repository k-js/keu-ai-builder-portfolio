export type NodeId = 'sheets'|'apps'|'actions'|'python'|'groq'|'vision'|'wordpress';
export type WorkflowStage = {id: NodeId; name:string; label:string; description:string; technologies:string[]; category:'data'|'orchestration'|'language'|'vision'|'delivery'};
export const stages:WorkflowStage[] = [
  {id:'sheets',name:'Google Sheets',label:'Fonte de dados',description:'Planilhas com informações e sinalização de quais páginas precisam de inclusão, edição ou remoção.',technologies:['Google Sheets API','gspread'],category:'data'},
  {id:'apps',name:'Google Apps Script',label:'Sinalização e controle',description:'Scripts na planilha organizam alterações e sinalizam pendências para o pipeline.',technologies:['JavaScript','Apps Script'],category:'orchestration'},
  {id:'actions',name:'GitHub Actions',label:'Execução agendada',description:'Workflows iniciam tarefas automáticas com controle de permissões, cache e backups.',technologies:['GitHub Actions','YAML'],category:'orchestration'},
  {id:'python',name:'Python',label:'Orquestração',description:'Scripts fazem a leitura, validação, composição de conteúdo e integração com serviços externos.',technologies:['Python 3.11','pandas','requests'],category:'orchestration'},
  {id:'groq',name:'Groq · GPT-OSS',label:'Processamento de linguagem',description:'O modelo cria descrições apoiadas nas categorias das tabelas, gera termos de busca e auxilia a redação de textos alternativos.',technologies:['Groq API','gpt-oss-120b'],category:'language'},
  {id:'vision',name:'CLIP · BLIP · NSFW',label:'Visão computacional',description:'O pipeline avalia imagens candidatas com verificações leves, filtros de segurança e similaridade; BLIP também descreve imagens existentes sem texto alternativo. As etapas são condicionais, não uma cadeia única.',technologies:['Pillow','CLIP','BLIP','Falconsai','CPU'],category:'vision'},
  {id:'wordpress',name:'WordPress REST API',label:'Publicação',description:'Páginas, mídias e elementos do site são atualizados via API, com etapas de verificação e salvaguardas.',technologies:['WordPress API','Gutenberg'],category:'delivery'},
];
