const numeros = []
let tipoConta = 'null'

function setNumber(number) {
    numeros.push(number)
    console.log(numeros)
}

function setConta(conta) {
    tipoConta = conta
    console.log(conta)
}
function limparArray(){
    while (numeros.length) {
        numeros.pop()
        console.log('limpando Array')
    }
}


function adicionarNumber(valor) {
    document.querySelector('#visor').innerHTML +=  ' '+ valor + ' '
    let valorConvertido = parseInt(valor)
    setNumber(valorConvertido)
}
function adicionarConta(conta) {
    document.querySelector('#visor').innerHTML += conta
    setConta(conta)
}
function limparVisor() { 
    document.querySelector('#visor').innerHTML = ''
    limparArray()
}

function somar() {
    let total = 0;
    for (let index = 0; index < numeros.length; index++) {
        total += numeros[index]
    }
    document.querySelector('#visor').innerHTML += '='
    document.querySelector('#visor').innerHTML += total
}

function multiplicar() {
    let total = 1;
    for (let index = 0; index < numeros.length; index++) {
        total = total * numeros[index]
    }
    document.querySelector('#visor').innerHTML += '='
    document.querySelector('#visor').innerHTML += total
}

function subtracao() {
    let total = numeros[0] * 2;
    for (let index = 0; index < numeros.length; index++) {
        total = total - numeros[index]
        console.log(total)
    }
    document.querySelector('#visor').innerHTML += '= '
    document.querySelector('#visor').innerHTML += total
}

function divisao() {

    let total = numeros[0] * numeros[0];
    for (let index = 0; index < numeros.length; index++) {
        total = total / numeros[index]
        console.log(total)
    }
    document.querySelector('#visor').innerHTML += '= '
    document.querySelector('#visor').innerHTML += total

}

function fazerConta() {

    switch (tipoConta) {
        case '+':
            somar()
            setConta('')
        break;

        case '*':
            multiplicar()
            setConta('')
        break;

        case '-':
            subtracao()
        break;

        case '/':
            divisao()
        break;

        default:
            return;
        break;
    }
    console.log('fazerConta')
}