var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [posicaoInicial, posicaoFinal] = input.split(' ');

//Separando letras de números
let [letraA, numero1] = posicaoInicial.split('');
let [letraB, numero2] = posicaoFinal.split('');


//Testando condições
if (posicaoInicial === posicaoFinal) {
    console.log('INVALIDO')
} else if (Math.abs(letraA.charCodeAt() - letraB.charCodeAt()) === 2 && Math.abs(numero1 - numero2) === 1 || Math.abs(letraA.charCodeAt() - letraB.charCodeAt()) === 1 && Math.abs(numero1 - numero2) === 2) {
    console.log('VALIDO')
} else {
    console.log('INVALIDO')
}