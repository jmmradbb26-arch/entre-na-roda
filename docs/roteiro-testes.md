# Roteiro de Testes Manual — Entre na Roda

**Objetivo**: Validar a usabilidade, acessibilidade (WCAG 2.1 AA) e o fluxo pedagógico da Etapa 1 em três tamanhos de tela e em dispositivo móvel real.

## Dispositivos e Resoluções de Teste
1. **Celular (Viewport estreito)**: 360px a 414px de largura (ex: iPhone SE / Moto G).
2. **Tablet (Viewport intermediário)**: 768px a 834px de largura (ex: iPad).
3. **Desktop (Viewport amplo)**: >= 1280px de largura.

---

## Casos de Teste

### CT01: Responsividade e Ausência de Rolagem Horizontal
- **Ação**: Abrir a aplicação em 360px, 768px e 1280px.
- **Resultado Esperado**: Todos os elementos (títulos, botões, caixas de texto) ajustam-se perfeitamente à largura, sem quebrar layout e **sem rolagem horizontal**.

### CT02: Acessibilidade e Tamanho de Alvos de Toque
- **Ação**: Inspecionar os botões ("Começar", "É luta", "É briga", "Tentar de novo", "Avançar") e o texto de leitura.
- **Resultado Esperado**: Fontes de leitura com pelo menos 18px, botões com dimensões mínimas de 44x44px e contraste de cores atendendo ao nível AA da WCAG 2.1.

### CT03: Fluxo da Tela Inicial e Instrução por Voz
- **Ação**: Acessar a tela inicial (`index.html`).
- **Resultado Esperado**: O título "Entre na Roda" e o objetivo são exibidos. Se o navegador suportar `speechSynthesis`, o botão de áudio está visível e lê o texto em voz alta ao ser clicado.

### CT04: Fluxo da Etapa 1 (Acerto de Primeira)
- **Ação**: Clicar em "Começar", visualizar a Situação 1 e responder corretamente ("É luta").
- **Resultado Esperado**: O sistema exibe o feedback oficial: "Isso! Eles jogam juntos, seguindo as regras da capoeira e cuidando um do outro." e avança para a próxima situação. O progresso mostra "Situação 1 de 8".

### CT05: Fluxo da Etapa 1 (Primeiro Erro e Pista)
- **Ação**: Em uma situação, escolher a resposta incorreta na primeira tentativa.
- **Resultado Esperado**: O sistema exibe a pista oficial correspondente e o botão "Tentar de novo", permitindo nova seleção.

### CT06: Fluxo da Etapa 1 (Segundo Erro e Revelação)
- **Ação**: Após receber a pista, errar a mesma situação pela segunda vez.
- **Resultado Esperado**: O sistema exibe a explicação correta e o botão para avançar para a próxima situação.
