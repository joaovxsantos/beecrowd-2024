var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(Number);


const [a, b] = lines;

//Calculando variação do PIB
console.log(((((1.0 + a/100.00) * (1.0 + b/100.00)) - 1.0) * 100.0).toFixed(6))