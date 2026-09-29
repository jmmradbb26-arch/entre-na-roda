# Constitution — Entre na Roda

Princípios que governam todas as decisões de especificação, planejamento e implementação desta aplicação. Em caso de conflito entre um pedido ao agente de codificação e esta Constitution, prevalece a Constitution, até que a equipe a altere formalmente (ver Governança).

## Princípios fundamentais

### I. Adequação pedagógica (NÃO NEGOCIÁVEL)

- Toda interação da aplicação DEVE estar ligada à habilidade principal EF35EF15 ou a um dos três descritores de desempenho registrados no README (sócio-afetivo, cognitivo, motor). Funcionalidade sem esse vínculo não entra no escopo.
- Todo feedback DEVE explicar o critério por trás da resposta. Um feedback que diga apenas "certo" ou "errado" não é permitido.
- Após um erro, a criança DEVE receber uma pista e a oportunidade de tentar de novo antes de a resposta correta ser revelada.
- A aplicação NÃO DEVE usar ranking, comparação entre alunos, cronômetro de pressão nem perda de "vidas". O progresso é mostrado em relação ao próprio percurso da criança.
- Ao final de cada atividade, a criança DEVE ver o que acertou, quais critérios precisa rever e uma orientação para prosseguir.

**Justificativa:** o público tem de 8 a 10 anos, e o objetivo é compreender um conceito (luta versus briga) e um patrimônio cultural, não competir.

### II. Respeito cultural e precisão histórica (NÃO NEGOCIÁVEL)

- A capoeira DEVE ser apresentada como prática de resistência e expressão cultural da população negra no Brasil e como patrimônio cultural reconhecido.
- Afirmações históricas DEVEM ter fonte registrada no repositório. Afirmações debatidas pelos historiadores, como um local ou data única de origem da capoeira, NÃO DEVEM ser apresentadas como fato.
- Textos e ilustrações NÃO DEVEM reproduzir estereótipos sobre pessoas negras, sobre a capoeira ou sobre as religiões de matriz africana. As personagens DEVEM incluir crianças negras representadas de forma positiva e protagonista.
- Todos os textos pedagógicos e culturais (situações, perguntas, feedbacks, frases históricas) DEVEM ficar em um arquivo de conteúdo separado do código, para que possam ser revisados por uma pessoa sem conhecimento de programação.
- Textos culturais e históricos gerados pelo agente de codificação DEVEM ser revisados por uma pessoa da equipe antes da publicação. A revisão DEVE ser registrada.

**Justificativa:** um conteúdo culturalmente impreciso ensinaria o oposto do que o projeto pretende.

### III. Clareza da interface para crianças

- Cada tela DEVE ter um único objetivo, apresentado em no máximo duas frases curtas, com vocabulário adequado a crianças de 8 a 10 anos.
- Instruções DEVEM combinar texto e ícone ou imagem. Sempre que o navegador oferecer síntese de voz em português, as instruções DEVEM poder ser ouvidas por meio de um botão.
- A criança DEVE saber sempre em que etapa está e quantas etapas faltam.
- Nenhuma ação importante pode depender de gestos escondidos, menus ocultos ou leitura de textos longos.

**Justificativa:** as crianças dessa faixa etária estão em fases diferentes de fluência leitora.

### IV. Acessibilidade

- O contraste de texto DEVE atender ao nível AA das WCAG 2.1.
- Alvos de toque DEVEM ter no mínimo 44 × 44 px. O texto de leitura DEVE ter no mínimo 18 px.
- A informação NÃO DEVE depender apenas de cor: acerto e erro DEVEM ter também ícone e texto.
- Toda interação de arrastar DEVE ter uma alternativa por toque ou clique (selecionar e depois escolher o destino) e DEVE ser operável pelo teclado.
- Imagens com significado DEVEM ter texto alternativo. Todo áudio DEVE ter equivalente visual.
- A aplicação DEVE funcionar em telas de 360 px a 1440 px de largura, sem rolagem horizontal.

### V. Simplicidade e escopo controlado

- A aplicação DEVE ser um site estático em HTML, CSS e JavaScript, sem framework e sem etapa de build, publicado diretamente pelo GitHub Pages.
- NÃO DEVE haver servidor próprio, banco de dados, login, chaves de API nem credenciais no navegador.
- A aplicação NÃO DEVE coletar, enviar ou armazenar dados pessoais das crianças. O progresso, quando mantido, fica apenas no navegador do dispositivo.
- Dependências externas só são aceitas quando indispensáveis e justificadas no plan.md. Recursos como imagens e sons DEVEM estar no repositório, com licença de uso registrada.
- As etapas 1 ("Luta ou briga?") e 2 ("Conheça a roda") são essenciais. A etapa 3 ("No ritmo do berimbau") só pode ser implementada depois que as essenciais estiverem publicadas e testadas.

**Justificativa:** o prazo é curto, e o público é infantil, o que exige proteção de dados.

### VI. Verificabilidade

- Todo requisito da especificação DEVE ter ao menos um critério de aceitação observável, redigido de forma que uma pessoa possa marcar "atende" ou "não atende".
- DEVE existir um roteiro de testes manual cobrindo o fluxo completo de cada etapa em três tamanhos de tela: celular (360–414 px), tablet (768–834 px) e desktop (≥ 1280 px). Os resultados DEVEM ser registrados no README.
- Antes da entrega, a aplicação DEVE ser verificada no endereço público do GitHub Pages, em outro navegador ou em janela privada.
- Problemas encontrados no teste, no Converge ou na revisão DEVEM ser classificados pela origem (especificação, plano, tarefas ou código) e corrigidos nessa origem.

## Restrições adicionais

- **Idioma:** português do Brasil em toda a interface e no conteúdo.
- **Compatibilidade:** versões atuais do Chrome, Firefox, Safari e Edge, inclusive em dispositivos móveis.
- **Desempenho:** a primeira tela deve carregar em conexão móvel comum sem espera perceptível. Imagens devem ser otimizadas.
- **Funcionamento em sala:** a aplicação deve funcionar em duplas, em um único dispositivo, sem exigir cadastro.

## Fluxo de desenvolvimento

- As decisões pedagógicas (habilidade, descritores, conteúdo, critérios de feedback) são tomadas e revisadas pela equipe **antes** de qualquer implementação.
- O agente de codificação implementa somente tarefas registradas em tasks.md. Toda alteração feita pelo agente é revisada pela equipe antes do commit.
- Os commits devem ser pequenos e descritivos, e referenciar a tarefa correspondente quando possível.
- Ambiguidades descobertas durante a implementação voltam para a especificação (Clarify) em vez de serem resolvidas silenciosamente no código.

## Governança

- Esta Constitution prevalece sobre as demais práticas do projeto.
- Alterações exigem decisão da equipe, registro do motivo e atualização do número de versão.
- Todo plano e toda revisão (Analyze, Converge) devem verificar a conformidade com estes princípios.

**Versão:** 1.0.0 | **Ratificada em:** 2026-09-29 | **Última alteração:** 2026-09-29
