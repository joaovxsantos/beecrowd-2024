const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input;

//Aplicando a formula
console.log(((2 * 3.14) * lines).toFixed(2))