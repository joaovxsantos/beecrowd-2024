const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input;

//Lendo a posição da letra no alfabeto
console.log(lines.charCodeAt() - 64)