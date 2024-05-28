const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

// Pegando a quantidade de números
const quantNums = lines.shift()

//Variável de contagem
let count = 0;

for (let i = 0; i < quantNums; i++) {
    //Se for maior que 1, então incrementa o contador
    if (lines[i] > 1) count++
}

console.log(count)