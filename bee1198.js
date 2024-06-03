const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


//Varrendo
lines.forEach((line) => {

    //Desestruturando
    const [a, b] = line.split(' ').map(Number)

    //Calculando a diferença
    const diferenca = Math.abs(b - a)

    //Validando
    if (!isNaN(diferenca)) {
        console.log(diferenca)
    }
})