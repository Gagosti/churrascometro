

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular () {
    console.log('Calculando...')

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarnes = carnePP(duracao) * adultos + ( carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + ( carnePP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarnes / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas /1000}L de Bebidas</p>`





}

function carnePP (duracao) {
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP (duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP (duracao) {
    if(duracao >= 6) {
        return 1000;
    } else {
        return 1500;
    }
}
