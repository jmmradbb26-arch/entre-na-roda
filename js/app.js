// Lógica da aplicação — Entre na Roda (Etapa 1, Etapa 2 e Tela Final)

document.addEventListener("DOMContentLoaded", () => {
  // Estado da Sessão
  const estado = {
    etapa: 0, // 0: Inicial, 1: Etapa 1, 2: Etapa 2, 3: Final
    indiceQuestao: 0,
    tentativas: 1,
    acertosDePrimeiraEtapa1: 0,
    acertosDePrimeiraEtapa2: 0,
    questoesComErro: []
  };

  // Elementos DOM - Geral e Tela Inicial
  const telaInicial = document.getElementById("tela-inicial");
  const btnComecar = document.getElementById("btn-comecar");
  const btnAudio = document.getElementById("btn-audio");

  // Elementos DOM - Etapa 1
  const telaEtapa1 = document.getElementById("etapa-1");
  const progressoEtapa1 = document.getElementById("progresso-etapa1");
  const cardSituacao = document.getElementById("card-situacao");
  const botoesResposta = document.getElementById("botoes-resposta");
  const btnLuta = document.getElementById("btn-luta");
  const btnBriga = document.getElementById("btn-briga");
  const feedbackBox = document.getElementById("feedback-box");
  const btnAvancar = document.getElementById("btn-avancar");

  // Elementos DOM - Etapa 2
  const telaEtapa2 = document.getElementById("etapa-2");
  const progressoEtapa2 = document.getElementById("progresso-etapa2");
  const cardDesafio = document.getElementById("card-desafio");
  const botoesOpcoes = document.getElementById("botoes-opcoes");
  const feedbackBoxEtapa2 = document.getElementById("feedback-box-etapa2");
  const btnAvancarEtapa2 = document.getElementById("btn-avancar-etapa2");

  // Elementos DOM - Tela Final
  const telaFinal = document.getElementById("tela-final");
  const resumoPontos = document.getElementById("resumo-pontos");
  const secaoValeRever = document.getElementById("secao-vale-rever");
  const listaValeRever = document.getElementById("lista-vale-rever");
  const btnReiniciar = document.getElementById("btn-reiniciar");

  // Suporte a síntese de voz (Web Speech API)
  if ("speechSynthesis" in window) {
    btnAudio.classList.remove("escondido");
    btnAudio.addEventListener("click", () => {
      const textoFala = "Entre na Roda. Descubra como a capoeira ensina a diferença entre luta e briga.";
      const utterance = new SpeechSynthesisUtterance(textoFala);
      utterance.lang = "pt-BR";
      window.speechSynthesis.speak(utterance);
    });
  }

  // Iniciar Etapa 1
  btnComecar.addEventListener("click", () => {
    estado.etapa = 1;
    estado.indiceQuestao = 0;
    estado.tentativas = 1;
    estado.acertosDePrimeiraEtapa1 = 0;
    estado.acertosDePrimeiraEtapa2 = 0;
    estado.questoesComErro = [];

    telaInicial.classList.add("escondido");
    telaEtapa1.classList.remove("escondido");

    carregarSituacaoEtapa1();
  });

  // --- ETAPA 1 LOGIC ---
  function carregarSituacaoEtapa1() {
    const situacoes = CONTEUDO_PEDAGOGICO.etapa1.situacoes;
    const sitAtual = situacoes[estado.indiceQuestao];

    progressoEtapa1.textContent = `Situação ${estado.indiceQuestao + 1} de ${situacoes.length}`;
    cardSituacao.textContent = sitAtual.texto;

    feedbackBox.className = "feedback-container";
    feedbackBox.textContent = "";
    feedbackBox.style.display = "none";

    botoesResposta.classList.remove("escondido");
    btnAvancar.classList.add("escondido");
    estado.tentativas = 1;
  }

  function responderEtapa1(escolha) {
    const situacoes = CONTEUDO_PEDAGOGICO.etapa1.situacoes;
    const sitAtual = situacoes[estado.indiceQuestao];

    botoesResposta.classList.add("escondido");

    if (escolha === sitAtual.respostaCorreta) {
      if (estado.tentativas === 1) {
        estado.acertosDePrimeiraEtapa1++;
      }
      feedbackBox.textContent = sitAtual.acertou;
      feedbackBox.className = "feedback-container sucesso";
      feedbackBox.style.display = "block";
      btnAvancar.classList.remove("escondido");
    } else {
      if (estado.tentativas === 1) {
        estado.tentativas = 2;
        if (!estado.questoesComErro.includes(sitAtual.pista)) {
          estado.questoesComErro.push(sitAtual.pista);
        }
        feedbackBox.textContent = `Pista: ${sitAtual.pista}`;
        feedbackBox.className = "feedback-container pista";
        feedbackBox.style.display = "block";
        
        setTimeout(() => {
          botoesResposta.classList.remove("escondido");
          btnAvancar.classList.add("escondido");
        }, 300);
      } else {
        feedbackBox.textContent = `Explicação: ${sitAtual.explicacao}`;
        feedbackBox.className = "feedback-container explicacao";
        feedbackBox.style.display = "block";
        btnAvancar.classList.remove("escondido");
      }
    }
  }

  btnLuta.addEventListener("click", () => responderEtapa1("É luta"));
  btnBriga.addEventListener("click", () => responderEtapa1("É briga"));

  btnAvancar.addEventListener("click", () => {
    estado.indiceQuestao++;
    const situacoes = CONTEUDO_PEDAGOGICO.etapa1.situacoes;

    if (estado.indiceQuestao < situacoes.length) {
      carregarSituacaoEtapa1();
    } else {
      // Transição para Etapa 2
      estado.etapa = 2;
      estado.indiceQuestao = 0;
      estado.tentativas = 1;

      telaEtapa1.classList.add("escondido");
      telaEtapa2.classList.remove("escondido");

      carregarDesafioEtapa2();
    }
  });

  // --- ETAPA 2 LOGIC ---
  function carregarDesafioEtapa2() {
    const desafios = CONTEUDO_PEDAGOGICO.etapa2.desafios;
    const desAtual = desafios[estado.indiceQuestao];

    progressoEtapa2.textContent = `Desafio ${estado.indiceQuestao + 1} de ${desafios.length}`;
    cardDesafio.textContent = desAtual.pergunta;

    feedbackBoxEtapa2.className = "feedback-container";
    feedbackBoxEtapa2.textContent = "";
    feedbackBoxEtapa2.style.display = "none";

    botoesOpcoes.innerHTML = "";
    botoesOpcoes.classList.remove("escondido");
    btnAvancarEtapa2.classList.add("escondido");
    estado.tentativas = 1;

    desAtual.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.style.margin = "0.5rem 0";
      btn.addEventListener("click", () => responderEtapa2(opcao));
      botoesOpcoes.appendChild(btn);
    });
  }

  function responderEtapa2(escolha) {
    const desafios = CONTEUDO_PEDAGOGICO.etapa2.desafios;
    const desAtual = desafios[estado.indiceQuestao];

    botoesOpcoes.classList.add("escondido");

    if (escolha === desAtual.respostaCorreta) {
      if (estado.tentativas === 1) {
        estado.acertosDePrimeiraEtapa2++;
      }
      let textoMsg = desAtual.acertou;
      if (desAtual.voceSabia) {
        textoMsg += ` Você sabia? ${desAtual.voceSabia}`;
      }
      feedbackBoxEtapa2.textContent = textoMsg;
      feedbackBoxEtapa2.className = "feedback-container sucesso";
      feedbackBoxEtapa2.style.display = "block";
      btnAvancarEtapa2.classList.remove("escondido");
    } else {
      if (estado.tentativas === 1) {
        estado.tentativas = 2;
        if (!estado.questoesComErro.includes(desAtual.pista)) {
          estado.questoesComErro.push(desAtual.pista);
        }
        feedbackBoxEtapa2.textContent = `Pista: ${desAtual.pista}`;
        feedbackBoxEtapa2.className = "feedback-container pista";
        feedbackBoxEtapa2.style.display = "block";
        
        setTimeout(() => {
          botoesOpcoes.classList.remove("escondido");
          btnAvancarEtapa2.classList.add("escondido");
        }, 300);
      } else {
        feedbackBoxEtapa2.textContent = `Explicação: ${desAtual.explicacao}`;
        feedbackBoxEtapa2.className = "feedback-container explicacao";
        feedbackBoxEtapa2.style.display = "block";
        btnAvancarEtapa2.classList.remove("escondido");
      }
    }
  }

  btnAvancarEtapa2.addEventListener("click", () => {
    estado.indiceQuestao++;
    const desafios = CONTEUDO_PEDAGOGICO.etapa2.desafios;

    if (estado.indiceQuestao < desafios.length) {
      carregarDesafioEtapa2();
    } else {
      // Transição para Tela Final
      estado.etapa = 3;
      telaEtapa2.classList.add("escondido");
      telaFinal.classList.remove("escondido");

      exibirTelaFinal();
    }
  });

  // --- TELA FINAL LOGIC ---
  function exibirTelaFinal() {
    resumoPontos.textContent = `Etapa 1: ${estado.acertosDePrimeiraEtapa1} de 8 de primeira · Etapa 2: ${estado.acertosDePrimeiraEtapa2} de 5 de primeira`;

    if (estado.questoesComErro.length > 0) {
      secaoValeRever.classList.remove("escondido");
      listaValeRever.innerHTML = "";
      estado.questoesComErro.forEach(pista => {
        const li = document.createElement("li");
        li.textContent = pista;
        listaValeRever.appendChild(li);
      });
    } else {
      secaoValeRever.classList.add("escondido");
    }
  }

  btnReiniciar.addEventListener("click", () => {
    location.reload();
  });
});
