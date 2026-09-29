# Entrada da equipe para /speckit.plan

Decisões técnicas tomadas pela equipe:

- Site estático em HTML, CSS e JavaScript puros, sem framework, sem dependências externas e sem etapa de build.
- Estrutura de arquivos:
  - `index.html` na raiz (aplicação);
  - `professor.html` na raiz (página do professor);
  - `css/estilo.css`;
  - `js/conteudo.js`, com todos os textos de `docs/conteudo-pedagogico.md` em um objeto JavaScript. O objetivo é que a aplicação funcione abrindo o `index.html` direto no navegador, sem servidor. Não usar `fetch` de JSON;
  - `js/app.js` (lógica das telas e do feedback);
  - arquivo vazio `.nojekyll` na raiz;
  - `docs/roteiro-testes.md` (roteiro de testes manual).
- Leitura em voz alta com a Web Speech API (`speechSynthesis`), em pt-BR, apenas se o navegador suportar. Caso contrário, o botão não aparece.
- Ilustrações: emojis ou SVG simples desenhados no próprio código. Nenhuma imagem externa.
- Publicação: GitHub Pages, branch `main`, pasta raiz. Endereço: https://jmmradbb26-arch.github.io/entre-na-roda/
- Verificação: roteiro de testes manual em 360 px, 768 px e 1280 px de largura, mais um celular real.
