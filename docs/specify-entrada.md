# Entrada da equipe para /speckit.specify

Aplicação web educacional "Entre na Roda" para crianças do 3º ao 5º ano (8 a 10 anos), componente Educação Física, unidade temática Lutas. Habilidade principal da BNCC: EF35EF15 — identificar características das lutas de matriz africana, reconhecendo as diferenças entre luta e briga. A luta trabalhada é a capoeira. A aplicação é usada antes da aula prática, em duplas, em celular, tablet ou computador, sem cadastro. Todos os textos pedagógicos (situações, perguntas, pistas, feedbacks, fatos históricos) estão definidos em docs/conteudo-pedagogico.md e devem ser usados exatamente como estão.

## Tela inicial
- Nome da aplicação, objetivo em até duas frases curtas e botão "Começar".
- Botão para ouvir a instrução em voz alta quando o navegador permitir.
- Indicação das etapas: 1 de 2, 2 de 2.

## Etapa 1 — Luta ou briga?
- A criança vê 8 situações curtas, uma por vez, cada uma com uma ilustração simples (emoji ou desenho).
- Para cada situação, escolhe entre dois botões: "É luta" ou "É briga".
- No acerto: o feedback explica o critério.
- No primeiro erro: aparece uma pista e a criança tenta de novo. No segundo erro: a resposta correta é mostrada com a explicação.
- O progresso aparece como "Situação 3 de 8".

## Etapa 2 — Conheça a roda
- 5 desafios de múltipla escolha: três sobre instrumentos (berimbau, atabaque, pandeiro), um sobre quem comanda o jogo e um sobre como entrar na roda.
- Cada acerto mostra o feedback e, quando houver, um fato histórico curto ("Você sabia?").
- Os erros seguem a mesma regra da etapa 1: pista, nova tentativa e, depois, a explicação.

## Tela final
- Resumo de acertos de primeira por etapa, sem nota punitiva.
- Lista das pistas das questões erradas, com o título "Vale rever".
- Mensagem de preparação para a aula prática na quadra.
- Botão "Jogar de novo".

## Para o professor
- Página simples, acessível por um link discreto na tela inicial, com a habilidade da BNCC, o objetivo, o tempo estimado (15 a 20 minutos) e uma sugestão de uso antes e depois da aula prática.

## Restrições
- Sem ranking, sem cronômetro, sem perda de vidas.
- Nenhum dado pessoal coletado ou enviado.
- Interação apenas por botões, sem arrastar e soltar.
- Funciona de 360 px a 1440 px de largura, sem rolagem horizontal.

## Fora do escopo
- Avaliação de movimentos corporais, atividade de ritmo com áudio (versão futura), login, servidor e banco de dados.

Cada requisito deve ter critérios de aceitação verificáveis, que uma pessoa possa marcar como "atende" ou "não atende".
