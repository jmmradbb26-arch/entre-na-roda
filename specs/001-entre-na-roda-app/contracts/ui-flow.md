# UI Flow & Interaction Contracts: Entre na Roda Web App

**Branch**: `001-entre-na-roda-app` | **Date**: 2026-09-29

## Screen Contracts

### 1. Tela Inicial (`index.html` - Estado Inicial)
- **Elementos Obrigatórios**:
  - Título: "Entre na Roda"
  - Objetivo pedagógico (duas frases curtas)
  - Botão "Começar" (Alvo de toque >= 44px)
  - Botão de áudio / leitura em voz alta (exibido condicionalmente se `window.speechSynthesis` disponível)
  - Indicador de etapas: "Etapa 1 de 2"
  - Link discreto para a página do professor (`professor.html`)
- **Ações do Usuário**:
  - Clicar em "Começar" transiciona o estado para a Etapa 1, Questão 1.
  - Clicar no botão de áudio dispara a leitura em voz alta do título e objetivo.
  - Clicar no link do professor abre `professor.html`.

### 2. Etapa 1 — Luta ou briga? (`index.html` - Etapa 1)
- **Elementos Obrigatórios**:
  - Indicador de progresso (ex: "Situação 1 de 8")
  - Texto da situação pedagógica
  - Dois botões de resposta: "É luta" e "É briga"
- **Comportamento de Feedback e Erro**:
  - Acerto de primeira: Exibe o texto de acerto e botão "Avançar".
  - Primeiro erro: Exibe a pista e botão "Tentar de novo".
  - Segundo erro: Exibe a resposta correta, a explicação e botão "Avançar".

### 3. Etapa 2 — Conheça a roda (`index.html` - Etapa 2)
- **Elementos Obrigatórios**:
  - Indicador de progresso (ex: "Desafio 1 de 5")
  - Pergunta e 3 botões de opção de múltipla escolha
- **Comportamento de Feedback e Erro**:
  - Acerto: Exibe o feedback de acerto e o fato histórico ("Você sabia?") quando aplicável.
  - Erro: Segue a mesma regra de pista / nova tentativa / explicação da Etapa 1.

### 4. Tela Final (`index.html` - Tela Final)
- **Elementos Obrigatórios**:
  - Título: "Você completou a roda!"
  - Resumo de acertos de primeira por etapa
  - Seção "Vale rever" (com pistas das questões erradas, se houver)
  - Mensagem de preparação para a aula prática na quadra
  - Botão "Jogar de novo" (reinicia o fluxo)

### 5. Página do Professor (`professor.html`)
- **Elementos Obrigatórios**:
  - Título e alinhamento com a habilidade BNCC EF35EF15
  - Objetivos pedagógicos e tempo estimado (15 a 20 minutos)
  - Orientações de uso antes e depois da aula prática
  - Botão / link para retornar à aplicação principal (`index.html`)
