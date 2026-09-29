# Data Model: Entre na Roda Web App

**Branch**: `001-entre-na-roda-app` | **Date**: 2026-09-29

## Entities

### 1. AtividadePedagogica (Definida em `js/conteudo.js`)
Representa uma situação da Etapa 1 ou um desafio da Etapa 2.
- **id**: String (ex: `"etapa1_sit1"`, `"etapa2_a1"`)
- **etapa**: Number (`1` ou `2`)
- **textoEnunciado**: String (Situação ou pergunta)
- **opcoes**: Array de Strings (Ex: `["É luta", "É briga"]` ou alternativas de múltipla escolha)
- **respostaCorreta**: String ou Number (Índice ou texto da resposta correta)
- **feedbackAcertou**: String (Texto exibido ao acertar de primeira)
- **pista**: String (Texto exibido no primeiro erro)
- **explicacaoErro**: String (Explicação exibida no segundo erro)
- **fatoHistorico**: String (Opcional, usado na Etapa 2 como "Você sabia?")

### 2. SessaoProgresso (Gerenciada em memória durante a execução)
Rastreia o estado atual da dupla de alunos.
- **etapaAtual**: Number (`0` para tela inicial, `1` para Etapa 1, `2` para Etapa 2, `3` para Tela final)
- **indiceQuestao**: Number (Índice atual na etapa, de 0 a N-1)
- **tentativasAtuais**: Number (`1` ou `2` para a questão ativa)
- **acertosDePrimeiraEtapa1**: Number (Contador de 0 a 8)
- **acertosDePrimeiraEtapa2**: Number (Contador de 0 a 5)
- **questoesComErro**: Array de Objetos `{ id, enunciado, pista }` (Registradas para exibição na seção "Vale rever" da Tela final)
