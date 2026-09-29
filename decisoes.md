# Registro de decisões e problemas

Registro das decisões humanas, das intervenções no agente de codificação e dos problemas encontrados ao longo do processo.

| Data | Etapa | O que aconteceu / o que o agente propôs | O que a equipe decidiu | Por quê |
|---|---|---|---|---|
| 29/09 | Investigar | Primeira ideia: EF89EF04 (classificação de esportes, 8º–9º ano) | Mudança para capoeira, 3º–5º ano, habilidade principal EF35EF15 | Tema étnico-racial ligado à prática da professora e à Lei 10.639/2003; a EF35EF15 é verificável em uma aplicação |
| 29/09 | Investigar | Rascunho inicial indicava a EF35EF13 como principal, com redação misturada com a de Danças | EF35EF15 como principal; EF35EF13 e EF35EF14 como associadas (aula prática) | A EF35EF13 é corporal (experimentar e fruir) e não se verifica em aplicação |
| 29/09 | Investigar | Descritor cognitivo falava em "estratégia de libertação" | Reformulado para "prática de resistência e expressão cultural" | Evitar afirmação histórica debatida sobre a origem da capoeira |
| 29/09 | Investigar | Descritor motor (ginga) | Declarado como limite: avaliado pelo professor na quadra | Uma aplicação web não avalia coordenação corporal |
| 29/09 | Ambiente | `specify init --ai` não existia na versão 1.0.14 do Spec Kit | Uso de `--integration gemini` após consultar `specify init --help` | A ferramenta mudou; conferimos os comandos no próprio ambiente, como pede o enunciado |
| 29/09 | Constitution | Cota diária do modelo gemini-3.8-flash esgotada durante a Constitution | Troca manual para gemini-3.5-flash-lite | Limite da conta gratuita |
| 29/09 | Constitution | O agente gerou a Constitution v1.0.0 a partir de `docs/constitution-entrada.md` | Cada gravação aprovada individualmente ("Allow once"); os 6 princípios foram conferidos no relatório | Supervisão do agente; o texto-base ficou versionado |
| 29/09 | Specify | A spec gerada trazia o SC-003 com "opera perfeitamente" | O termo foi marcado como não verificável e levado ao Clarify | Um critério precisa poder ser marcado como "atende / não atende" |
| 29/09 | Clarify | O agente recomendou a opção A (sem rolagem horizontal e carregamento < 2 s) | A equipe escolheu a opção B (sem sobreposição em 360, 768 e 1280 px) + sem rolagem horizontal | As três larguras coincidem com o roteiro de testes; o tempo de carregamento depende da rede e não é verificável manualmente |
| 29/09 | Checklist | O Gemini emitiu um "alerta crítico de segurança" sobre parâmetros de um comando shell | A equipe verificou que era o script local `check-prerequisites.ps1` do Spec Kit e aprovou uma única vez | Ler o que o agente pede antes de aprovar, sem aprovar às cegas nem recusar por medo |
| 29/09 | Checklist / Tasks | O agente escreveu partes do checklist e do tasks.md em inglês, apesar da instrução em português | Mantido, para economizar cota; registrado como instrução não seguida | O conteúdo técnico estava correto; a prioridade era o prazo |
| 29/09 | Analyze | O relatório indicou 100% de cobertura, 0 problemas críticos e 1 achado LOW (L1: estrutura do conteudo.js pouco detalhada) | L1 corrigido: a T004 passou a detalhar a estrutura do objeto de conteúdo | Garantir fidelidade aos textos pedagógicos |
| 29/09 | Analyze (revisão humana) | O Analyze declarou "nenhum conflito com a Constitution", mas nenhum requisito tratava das regras de acessibilidade do princípio IV | Criado o FR-013 (acessibilidade) na spec e incluídas as verificações nas tarefas T005 e T016 | A revisão humana encontrou uma lacuna que a análise automática não apontou |
