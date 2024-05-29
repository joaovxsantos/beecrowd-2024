const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('.').map(Number);


//Invertendo a ordem dos números colocando ponto e lendo
console.log(`${lines[1]}.${lines[0]}`);