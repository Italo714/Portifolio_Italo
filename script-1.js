
var frases = [
    "Um profissional que sabe trabalher em equipe visando sempre a harmonia.",
    "Um profissional que sempre tenta fazer além, pois gosta de um desafio.",
    "Um profissional curioso que sempre busca aprender cada vez mais."
];

var indexAtual = 0;
var intervalo;


function mudarFrase(novaFrase) {
    indexAtual = novaFrase;

    fraseElemento.textContent = frases[indexAtual];
};

function exibirFrase() {
    var fraseElemento = document.getElementById('frase');
    fraseElemento.textContent = frases[indexAtual];
}

function fraseAnterior() {
    indexAtual = (indexAtual - 1 + frases.length) % frases.length;
    exibirFrase();
}

function fraseSeguinte() {
    indexAtual = (indexAtual + 1) % frases.length;
    exibirFrase();
}


function iniciarAlteracaoAutomatica() {
    intervalo = setInterval(fraseSeguinte, 4000); // Altera a frase a cada 2 segundos (2000 milissegundos)
}


// Inicia a alteração automática ao carregar a página
iniciarAlteracaoAutomatica();

