const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

//Desestruturando
let [, ...numbers] = lines;

//Variavel de contagem
let maiorNum = 0;

//Varrendo o array e testando se o número atual e maior que o da variável
numbers.forEach((num) => {
    if (num > maiorNum) {
        maiorNum = num //Se for, atribui
    }
})

//Lendo, se for igual a 0 então 'S', se não então 'N'
console.log(numbers.indexOf(maiorNum) === 0 ? 'S' : 'N');