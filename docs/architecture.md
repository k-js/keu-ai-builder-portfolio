# Arquitetura do portfólio

A homepage usa o App Router. O explorador é um componente cliente com estado local e dados tipados em `lib/inova.ts`. Selecionar um caminho ou uma etapa altera apenas a interface. Os exemplos fictícios são definidos no código e dispensam backend e credenciais institucionais.

## Fluxos documentados no INOVA

A leitura está fixada no [commit auditado](https://github.com/k-js/INOVA-AUTOMACAO/commit/3ba94590c64a1c93b39fa206c00038f7bb752aa3).

| Caminho | Comportamento | Código consultado |
| --- | --- | --- |
| Atualização de páginas | A equipe marca STATUS. O Apps Script escreve os nomes das abas pendentes em CHECAR ABAS. O workflow agendado ou manual faz backup e roda o Python, que lê as abas, gera as tabelas e atualiza as páginas pela API REST. A rotina de descrições usa as categorias da aba quando precisa gerar uma apresentação. | [Apps Script](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/apps-script/Codigo.gs), [workflow](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/.github/workflows/atualizar.yml), [orquestrador](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/main.py), [WordPress](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/src/atualizador_WP.py) |
| Capa nova | O GPT-OSS auxilia nos termos de busca. A rotina busca candidatas no Pexels e usa saturação, NSFW e CLIP para filtrar e ordenar. A capa selecionada é recortada. O texto alternativo usa a legenda fornecida pelo Pexels, reescrita em português pelo GPT-OSS. | [Capas](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/gerar_capas.py), [busca](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/src/banco_imagens.py), [visão](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/src/visao.py) |
| Capa existente | No modo `--legendar`, o BLIP descreve a capa já recortada e publicada que precisa de alt. O GPT-OSS prepara o alt em português antes de a rotina gravar o resultado. | [Capas](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/gerar_capas.py), [visão](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/src/visao.py), [descrição](https://github.com/k-js/INOVA-AUTOMACAO/blob/3ba94590c64a1c93b39fa206c00038f7bb752aa3/src/descricao.py) |

## Papéis dos modelos

- **GPT-OSS via Groq** (`openai/gpt-oss-120b` por padrão) gera texto a partir de categorias, termos e legendas.
- **NSFW** (`Falconsai/nsfw_image_detection`) filtra conteúdo impróprio na seleção de capas.
- **CLIP** (`openai/clip-vit-base-patch32`) avalia relevância, mede similaridade e identifica pessoas em destaque. A ordenação coloca essas imagens no fim da fila.
- **BLIP** (`Salesforce/blip-image-captioning-base`) descreve imagens existentes no modo de legendagem.

As dependências de visão ficam separadas das dependências da publicação diária. A demonstração representa cada caminho com os modelos pertinentes.
