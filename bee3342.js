const input = require('fs').readFileSync('stdin', 'utf8');
let lines = +input


//Formula: 
//Arredondar para cima((tamanho * tamanho) / 2) = Resultado casas brancas
//tamanho * tamanho - Arredondar para cima((tamanho * tamanho) / 2)

console.log(`${Math.round((lines * lines) / 2)} casas brancas e ${(lines * lines) - Math.round((lines * lines) / 2)} casas pretas`)    