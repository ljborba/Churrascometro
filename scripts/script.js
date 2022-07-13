let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("monitor");

function calcular() {
    let qntAdultos = inputAdultos.value;
    let qntCriancas = inputCriancas.value;
    let qntDuracao = inputDuracao.value;

    let qntCarne = carnePessoa(qntDuracao) * qntAdultos + (carnePessoa(qntDuracao) / 2 * qntCriancas);
    let qntCerveja = cervejaPessoa(qntDuracao) * qntAdultos;
    let qntBebidas = bebidasPessoa(qntDuracao) * qntAdultos + (bebidasPessoa(qntDuracao) / 2 * qntCriancas);

    resultado.innerHTML = `<p>${qntCarne / 1000} Kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja/350)} Latinhas de cereveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntBebidas/2000)} Garrafas de refrigerante ou água.</p>`
}

function carnePessoa(duracao) {
    if(duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPessoa(duracao) {
    if(duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPessoa(duracao) {
    if(duracao >= 6) {
        return 2000;
    }
    else {
        return 1000;
    }
}