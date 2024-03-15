var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

//Calculando resto
console.log(parseInt(lines[0] % lines[1]))