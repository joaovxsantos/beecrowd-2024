const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


//Varrendo
lines.forEach((line) => {

    //Desestruturando
    const [v, t] = line.split(' ').map(Number)

    //Aplicando a formula
    const deslocamento = (v * 2) * t

    //Validando
    if (!isNaN(deslocamento)) {
        console.log(deslocamento === -0 ? 0 : deslocamento)
    }
})