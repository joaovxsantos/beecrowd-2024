const input = require('fs').readFileSync('stdin', 'utf8');
const n = +input.trim();

//Aplicando a formula
let R = 1 + (((n-1) * n) / 2) + (((n) * (n - 1) * (n-2) * (n - 3)) / 24)

console.log(R)