var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);



//Desestruturando
let [L, C] = lines;

//Testando a condição e lendo
console.log((L + C) % 2 === 0 ? 1 : 0);