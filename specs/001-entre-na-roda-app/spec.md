# Feature Specification: Entre na Roda Web App

**Feature Branch**: `001-entre-na-roda-app`

**Created**: 2026-09-29

**Status**: Draft

**Input**: User description: "Aplicação web educacional "Entre na Roda" para crianças do 3º ao 5º ano (8 a 10 anos), componente Educação Física, unidade temática Lutas. Habilidade principal da BNCC: EF35EF15 — identificar características das lutas de matriz africana, reconhecendo as diferenças entre luta e briga. A luta trabalhada é a capoeira. A aplicação é usada antes da aula prática, em duplas, em celular, tablet ou computador, sem cadastro. Todos os textos pedagógicos (situações, perguntas, pistas, feedbacks, fatos históricos) estão definidos em docs/conteudo-pedagogico.md e devem ser usados exatamente como estão."

## Clarifications

### Session 2026-09-29
- Q: Qual métrica quantitativa específica deve substituir o termo vago "opera perfeitamente" no critério de sucesso SC-003 para garantir a validação objetiva em diferentes larguras de tela? → A: B sem rolagem horizontal

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Realizar a Etapa 1: Luta ou briga? (Priority: P1)

Como uma dupla de alunos do 3º ao 5º ano, quero analisar situações do cotidiano e diferenciá-las entre luta e briga, recebendo orientações e pistas quando errar, para compreender o conceito fundamentado na capoeira (habilidade EF35EF15).

**Why this priority**: É o núcleo pedagógico essencial da aplicação, permitindo que os alunos cumpram o objetivo principal da unidade temática sem competição.

**Independent Test**: Pode ser testado acessando a aplicação, passando pela tela inicial e respondendo às 8 situações da Etapa 1 com verificação dos feedbacks explicativos e do sistema de pistas/novas tentativas.

**Acceptance Scenarios**:

1. **Given** que a dupla está na tela inicial, **When** clica no botão "Começar", **Then** o sistema exibe a Etapa 1 com a primeira situação e o indicador "Situação 1 de 8".
2. **Given** que a dupla visualiza uma situação na Etapa 1, **When** seleciona a resposta correta (ex: "É luta" ou "É briga"), **Then** o sistema exibe um feedback explicando o critério pedagógico por trás da resposta.
3. **Given** que a dupla erra uma situação na Etapa 1 pela primeira vez, **When** submete a resposta incorreta, **Then** o sistema exibe uma pista e oferece a oportunidade de tentar de novo.
4. **Given** que a dupla erra a mesma situação pela segunda vez, **When** submete a resposta incorreta novamente, **Then** o sistema revela a resposta correta junto com a explicação.

---

### User Story 2 - Realizar a Etapa 2: Conheça a roda e consultar a Tela final (Priority: P2)

Como uma dupla de alunos, quero responder a desafios sobre os instrumentos e a dinâmica da roda de capoeira e ver o resumo do meu percurso ao final, para consolidar o aprendizado e me preparar para a aula prática na quadra.

**Why this priority**: Completa a experiência educacional abordando os instrumentos e a cultura da capoeira, oferecendo um fechamento construtivo sem notas punitivas.

**Independent Test**: Pode ser testado concluindo a Etapa 1, avançando para a Etapa 2 (5 desafios de múltipla escolha com fatos históricos), e visualizando a Tela final com o resumo e a seção "Vale rever".

**Acceptance Scenarios**:

1. **Given** que a dupla concluiu a Etapa 1, **When** transita para a Etapa 2, **Then** o sistema apresenta os desafios sobre instrumentos e comando da roda com acompanhamento de fatos históricos ("Você sabia?") nos acertos.
2. **Given** que a dupla concluiu todas as etapas, **When** atinge a Tela final, **Then** o sistema exibe o resumo de acertos de primeira por etapa, a lista de pistas revisadas ("Vale rever"), a mensagem de preparação para a aula prática e o botão "Jogar de novo".

---

### User Story 3 - Consultar a página de orientação para o professor (Priority: P3)

Como um professor de Educação Física, quero acessar informações pedagógicas complementares, para entender o alinhamento com a BNCC e como utilizar a ferramenta antes e depois da aula prática.

**Why this priority**: Garante o suporte ao docente sem interferir no fluxo direto dos alunos.

**Independent Test**: Pode ser testado clicando no link discreto na tela inicial e verificando a exibição da habilidade BNCC, objetivos, tempo estimado e orientações de uso.

**Acceptance Scenarios**:

1. **Given** que o usuário está na tela inicial, **When** clica no link discreto para o professor, **Then** o sistema abre a página contendo a habilidade EF35EF15, objetivo, tempo estimado (15 a 20 min) e sugestões de uso na quadra.

---

### Edge Cases

- O que acontece quando o navegador não suporta síntese de voz para a leitura em voz alta? O botão de áudio fica oculto ou desativado de forma graciosa, sem quebrar a interface.
- Como o sistema lida com diferentes tamanhos de tela (de 360 px a 1440 px)? A interface se redimensiona fluidamente em CSS sem rolagem horizontal ou elementos cortados.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A tela inicial DEVE exibir o nome da aplicação ("Entre na Roda"), o objetivo em até duas frases curtas, o botão "Começar", um botão para ouvir a instrução em voz alta (quando suportado pelo navegador) e a indicação das etapas (1 de 2, 2 de 2).
- **FR-002**: Na Etapa 1 ("Luta ou briga?"), o sistema DEVE apresentar exatamente as 8 situações descritas em `docs/conteudo-pedagogico.md`, uma por vez, com ilustração simples, permitindo à dupla escolher entre os botões "É luta" ou "É briga".
- **FR-003**: No acerto da Etapa 1, o sistema DEVE exibir o feedback pedagógico correspondente exato definido em `docs/conteudo-pedagogico.md`.
- **FR-004**: No primeiro erro da Etapa 1, o sistema DEVE apresentar a pista correspondente e permitir nova tentativa; no segundo erro, a resposta correta e a explicação DEVEM ser reveladas.
- **FR-005**: O progresso na Etapa 1 e Etapa 2 DEVE ser exibido claramente (ex: "Situação 3 de 8").
- **FR-006**: Na Etapa 2 ("Conheça a roda"), o sistema DEVE apresentar os 5 desafios de múltipla escolha especificados em `docs/conteudo-pedagogico.md`, aplicando a mesma regra de feedback, pista e nova tentativa em caso de erro.
- **FR-007**: Na Etapa 2, cada acerto DEVE exibir o feedback e o fato histórico correspondente ("Você sabia?") quando previsto no conteúdo pedagógico.
- **FR-008**: Na Tela final, o sistema DEVE apresentar o resumo de acertos de primeira por etapa, a lista das questões erradas com o título "Vale rever", a mensagem de preparação para a aula prática na quadra e o botão "Jogar de novo".
- **FR-009**: A aplicação DEVE disponibilizar uma página para o professor, acessível por um link discreto na tela inicial, contendo a habilidade da BNCC (EF35EF15), o objetivo, o tempo estimado (15 a 20 minutos) e sugestões de uso antes e depois da aula prática.
- **FR-010**: A interface NÃO DEVE conter ranking, cronômetro de pressão ou perda de "vidas".
- **FR-011**: A aplicação NÃO DEVE coletar, enviar ou armazenar dados pessoais das crianças (todo progresso reside exclusivamente na memória de sessão do navegador).
- **FR-012**: A interação DEVE ser realizada exclusivamente por cliques ou toques em botões (sem arrastar e soltar), com suporte a larguras de 360 px a 1440 px sem rolagem horizontal.

### Key Entities *(include if feature involves data)*

- **Atividade Pedagógica**: Representa uma situação (Etapa 1) ou pergunta de múltipla escolha (Etapa 2) contendo enunciado, opções de resposta, critério correto, pista, feedback de acerto e explicação de erro.
- **Sessão de Aprendizagem**: Estado local no navegador que rastreia a etapa atual, índice da questão, acertos de primeira e histórico de pistas para a seção "Vale rever".

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Alunos de 8 a 10 anos concluem o fluxo interativo completo (Etapas 1 e 2) em 15 a 20 minutos, sem necessidade de suporte técnico.
- **SC-002**: 100% dos textos pedagógicos, feedbacks, pistas e fatos históricos exibidos coincidem exatamente com o conteúdo oficial ratificado em `docs/conteudo-pedagogico.md`.
- **SC-003**: A aplicação renderiza corretamente sem sobreposição de elementos e sem rolagem horizontal em resoluções de 360px, 768px e 1280px.
- **SC-004**: Zero dados pessoais ou de telemetria de crianças são coletados, gravados em banco de dados ou transmitidos pela rede.

## Assumptions

- Os textos e dados pedagógicos estáticos fornecidos em `docs/conteudo-pedagogico.md` são definitivos e suficientes para a implementação de todo o conteúdo da aplicação.
- A aplicação será executada diretamente como páginas HTML/CSS/JS estáticas sem necessidade de servidor de backend ou banco de dados relacional/NoSQL.
- O navegador do usuário dispõe de suporte básico para manipulação de DOM e, opcionalmente, API de síntese de fala (`window.speechSynthesis`).
