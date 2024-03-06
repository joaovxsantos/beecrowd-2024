var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(Number);


//Procurando o index do elemento 1
let res = lines.findIndex(element => element === 1);
console.log(res + 1);