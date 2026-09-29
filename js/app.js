// Lógica da aplicação — Entre na Roda (Etapa 1 & Setup)

document.addEventListener("DOMContentLoaded", () => {
  // Estado da Sessão
  const estado = {
    etapa: 0, // 0: Inicial, 1: Etapa 1
    indiceSituacao: 0,
    tentativas: 1,
    acertosDePrimeira: 0
  };

  // Elementos do DOM
  const telaInicial = document.getElementById("tela-inicial");
  const telaEtapa1 = document.getElementById("etapa-1");
  const btnComecar = document.getElementById("btn-comecar");
  const btnAudio = document.getElementById("btn-audio");
  
  const progressoEtapa1 = document.getElementById("progresso-etapa1");
  const cardSituacao = document.getElementById("card-situacao");
  const botoesResposta = document.getElementById("botoes-resposta");
  const btnLuta = document.getElementById("btn-luta");
  const btnBriga = document.getElementById("btn-briga");
  const feedbackBox = document.getElementById("feedback-box");
  const btnAvancar = document.getElementById("btn-avancar");

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
    estado.indiceSituacao = 0;
    estado.tentativas = 1;
    estado.acertosDePrimeira = 0;

    telaInicial.classList.add("escondido");
    telaEtapa1.classList.remove("escondido");

    carregarSituacao();
  });

  // Carregar situação atual da Etapa 1
  function carregarSituacao() {
    const situacoes = CONTEUDO_PEDAGOGICO.etapa1.situacoes;
    const sitAtual = situacoes[estado.indiceSituacao];

    progressoEtapa1.textContent = `Situação ${estado.indiceSituacao + 1} de ${situacoes.length}`;
    cardSituacao.textContent = sitAtual.texto;

    feedbackBox.className = "feedback-container";
    feedbackBox.textContent = "";
    feedbackBox.style.display = "none";

    botoesResposta.classList.remove("escondido");
    btnAvancar.classList.add("escondido");
    estado.tentativas = 1;
  }

  // Tratar clique em resposta ("É luta" / "É briga")
  function responder(escolha) {
    const situacoes = CONTEUDO_PEDAGOGICO.etapa1.situacoes;
    const sitAtual = situacoes[estado.indiceSituacao];

    botoesResposta.classList.add("escondido");

    if (escolha === sitAtual.respostaCorreta) {
      // Acertou
      if (estado.tentativas === 1) {
        estado.acertosDePrimeira++;
      }
      feedbackBox.textContent = sitAtual.acertou;
      feedbackBox.className = "feedback-container sucesso";
      feedbackBox.style.display = "block";
      btnAvancar.classList.remove("escondido");
    } else {
      // Errou
      if (estado.tentativas === 1) {
        // Primeiro erro: dar pista e tentar de novo
        estado.tentativas = 2;
        feedbackBox.textContent = `Pista: ${sitAtual.pista}`;
        feedbackBox.className = "feedback-container pista";
        feedbackBox.style.display = "block";
        
        // Mostrar botão de tentar de novo ou reativar botões
        // Na prática, reapresentamos os botões para a segunda tentativa
        setTimeout(() => {
          botoesResposta.classList.remove("escondido");
          btnAvancar.classList.add("escondido");
        }, 500);
      } else {
        // Segundo erro: revelar resposta correta com explicação
        feedbackBox.textContent = `Explicação: ${sitAtual.explicacao}`;
        feedbackBox.className = "feedback-container explicacao";
        feedbackBox.style.display = "block";
        btnAvancar.classList.remove("escondido");
      }
    }
  }

  btnLuta.addEventListener("click", () => responder("É luta"));
  btnBriga.addEventListener("click", () => responder("É briga"));

  // Botão Avançar / Próxima Situação
  btnAvancar.addEventListener("click", () => {
    estado.indiceSituacao++;
    const situacoes = CONTEUDO_PEDAGOGICO.etapa1.situacoes;

    if (estado.indiceSituacao < situacoes.length) {
      carregarSituacao();
    } else {
      // Fim da Etapa 1 (por ora, transição simples ou alerta até implementar Etapa 2)
      alert(`Parabéns! Você concluiu a Etapa 1. Acertos de primeira: ${estado.acertosDePrimeira} de ${situacoes.length}. (Etapa 2 em desenvolvimento).`);
      location.reload();
    }
  });
});
