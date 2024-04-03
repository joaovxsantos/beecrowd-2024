const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim(); //Sem o trim estava dando uma quebra de linha depois do lines
console.log(lines.includes('13') ? `${lines} es de Mala Suerte` : `${lines} NO es de Mala Suerte`)