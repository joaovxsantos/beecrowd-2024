const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));



//Pegando o primeiro elemento do array
const quantidadeNums = +lines.shift();

//Loopando
for (let i = 0; i < quantidadeNums; i++) {
    const [n, m] = lines[i].split(' ').map(Number)
    
    //Utilizando log de 10 para que não haja notação cientifica, e somando com +1 para chegar o resultado correto
    const valorElevado = Math.trunc((Math.log10(n) * m) + 1)
    console.log(valorElevado)
}
