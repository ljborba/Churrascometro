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

    resultado.innerHTML = `<h3>A quantidade ideal é</h3>`
    resultado.innerHTML += `<div class="bloco-resultado"><img src="../assets/beef.png"><p>${qntCarne / 1000} Kg de carne.</p></div>`
    resultado.innerHTML += `<div class="bloco-resultado"><img src="../assets/cans.png"><p>${Math.ceil(qntCerveja/350)} Latinhas de cerveja.</p></div>`
    resultado.innerHTML += `<div class="bloco-resultado"><img src="../assets/bottle.png"><p>${Math.ceil(qntBebidas/2000)} Garrafas de refrigerante ou água.</p></div>`
}

function carnePessoa(duracao) {
    if(duracao >= 2) {
        return 300;
    }
    else {
        return 200;
    }
}

function cervejaPessoa(duracao) {
    if(duracao >= 2) {
        return 3000;
    }
    else {
        return 2600;
    }
}

function bebidasPessoa(duracao) {
    if(duracao >= 2) {
        return 2000;
    }
    else {
        return 1000;
    }
}