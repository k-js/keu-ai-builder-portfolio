# Design system

| Token | Valor | Uso |
| --- | --- | --- |
| `graphite` | `#0B0D10` | Fundo e painel do explorador |
| `surface` | `#171A20` | Cartões e controles |
| `coral` | `#FF7467` | Destaques, ação principal e foco |
| `ink` | `#F7F8FA` | Texto principal |
| `muted` | `#A9B0BD` | Texto secundário |
| `stroke` | `#343842` | Bordas |

O tema Tailwind fica em `app/globals.css`. Space Grotesk compõe os títulos, DM Sans o corpo e a fonte monoespaçada do sistema os rótulos técnicos. As fontes externas têm alternativas locais. `ActionLink` e `Tag` ficam em `components/ui.tsx`.

A navegação permanece visível em duas linhas no celular. As etapas do explorador aparecem na vertical em telas menores e em linha a partir de 768 px. Os botões indicam seleção com `aria-pressed`, e o detalhe da etapa é anunciado com `aria-live`. Motion anima a troca de detalhes e respeita a preferência por movimento reduzido.

A composição usa o hero tipográfico, o contraste grafite e coral, o case em destaque e a exploração por etapas dos mockups. O grafismo abstrato do hero é construído com CSS e ícones.
