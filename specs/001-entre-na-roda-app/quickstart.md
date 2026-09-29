# Quickstart Validation Guide: Entre na Roda Web App

**Branch**: `001-entre-na-roda-app` | **Date**: 2026-09-29

## Prerequisites

- Navegador web moderno (Chrome, Firefox, Safari ou Edge) instalado.
- Repositório clonado localmente.

## Setup & Execution

Como a aplicação é um site estático puro em HTML/CSS/JavaScript sem etapas de build ou servidores, você pode executá-la de duas formas:

1. **Abertura Direta**:
   - Dê um duplo clique no arquivo `index.html` na raiz do repositório, ou abra-o diretamente no seu navegador.
2. **Servidor Local Simples (Opcional)**:
   - Se preferir via Python: `python -m http.server 8000` e acesse `http://localhost:8000`.

## End-to-End Validation Scenarios

### Scenario 1: Tela Inicial e Acessibilidade
1. Abra `index.html`.
2. Verifique se o título "Entre na Roda", o objetivo e o botão "Começar" aparecem visíveis.
3. Teste o botão de leitura em voz alta (se o navegador suportar síntese de voz).
4. Verifique a indicação "Etapa 1 de 2".

### Scenario 2: Etapa 1 (Luta ou briga?)
1. Clique em "Começar".
2. Responda incorretamente a primeira situação para verificar a exibição da pista e o botão de nova tentativa.
3. Responda corretamente na segunda tentativa e verifique o feedback pedagógico.
4. Avance pelas 8 situações verificando o progresso ("Situação X de 8").

### Scenario 3: Etapa 2 (Conheça a roda) e Tela Final
1. Conclua a Etapa 1 para transitar automaticamente para a Etapa 2.
2. Responda aos 5 desafios sobre instrumentos e capoeira, observando os fatos históricos ("Você sabia?").
3. Chegue à Tela final e verifique o resumo de acertos, a seção "Vale rever" (se houver erros anteriores), a mensagem para a aula prática e o botão "Jogar de novo".

### Scenario 4: Página do Professor e Responsividade
1. Retorne à tela inicial e clique no link discreto para o professor (`professor.html`).
2. Verifique a presença da habilidade BNCC EF35EF15, objetivos e tempo estimado.
3. Teste a responsividade redimensionando a janela para 360px, 768px e 1280px, confirmando a ausência de rolagem horizontal.
