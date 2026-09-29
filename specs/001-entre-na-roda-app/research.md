# Research: Entre na Roda Web App

**Branch**: `001-entre-na-roda-app` | **Date**: 2026-09-29

## 1. Web Speech API (`speechSynthesis`) Support
- **Decision**: Utilizar `window.speechSynthesis` para leitura em voz alta das instruções da interface em pt-BR.
- **Rationale**: A API é nativa dos navegadores modernos em desktop e mobile (Chrome, Safari, Edge, Firefox), cumprindo o requisito de acessibilidade para crianças em diferentes fases de alfabetização sem exigir bibliotecas externas.
- **Alternatives Considered**: Gravar arquivos de áudio locais (MP3). Rejeitado porque aumentaria o tamanho do repositório, exigiria licenças de áudio e geraria complexidade de carregamento de mídia na rede. A síntese nativa é leve e imediata. Tratamento de falhas: se `window.speechSynthesis` não estiver disponível ou falhar ao carregar as vozes, o botão de áudio simplesmente oculta-se de forma graciosa.

## 2. Content Structure (`js/conteudo.js`)
- **Decision**: Armazenar todos os textos estáticos, perguntas, situações, pistas, feedbacks, explicações e fatos históricos em um único arquivo JavaScript estruturado como objeto (`js/conteudo.js`), refletindo fielmente `docs/conteudo-pedagogico.md`.
- **Rationale**: Evita chamadas `fetch()` de arquivos JSON, permitindo que o arquivo `index.html` seja aberto diretamente (`file://` ou servidor local simples) sem restrições de política de origem cruzada (CORS) ou dependência de servidor web local. Facilita revisões por pessoas sem conhecimento de programação.
- **Alternatives Considered**: Carregar JSON via `fetch()`. Rejeitado por falhar ao abrir o arquivo estático diretamente no navegador devido a políticas de segurança de CORS em muitos navegadores modernos.

## 3. State Management & Session Flow
- **Decision**: Gerenciar o estado da sessão (etapa atual, índice da questão, acertos de primeira, histórico de erros para "Vale rever") em memória volátil (`sessionStorage` / objetos JS na sessão).
- **Rationale**: Atende rigorosamente ao princípio de proteção de dados infantis (nenhum dado pessoal coletado ou enviado) e garante simplicidade sem banco de dados.
- **Alternatives Considered**: Armazenar em `localStorage` permanente. Rejeitado por desnecessário e indesejado para dados de sessão de uma atividade escolar rápida de 15 minutos em duplas.

## 4. Responsive Layout & Accessibility (WCAG 2.1 AA)
- **Decision**: Empregar Vanilla CSS com Flexbox/Grid, unidades relativas (`rem`, `%`), media queries para telas de 360px a 1440px, alvos de toque mínimos de 44x44px, tamanhos de fonte mínimos de 18px e contraste adequado.
- **Rationale**: Garante usabilidade perfeita em celulares (360px–414px), tablets (768px–834px) e desktops (>= 1280px) sem rolagem horizontal, atendendo às exigências da Constituição.
- **Alternatives Considered**: Utilizar TailwindCSS ou Bootstrap. Rejeitado para manter o escopo estrito de site puro sem build e sem dependências externas.
