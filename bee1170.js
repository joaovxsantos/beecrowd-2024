const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number)


//Pegando a quantidade de testes para loopar
const iterator = lines.shift();


//Loopando
for (let i = 0; i < iterator; i++) {

    let count = 0;
    let number = lines[i]

    //Enquanto numero for maior que 1, vou dividir ele por 2 e incrementar count
    while (number > 1) {
        number = number / 2
        count++
    }
    console.log(`${count} dias`)
}