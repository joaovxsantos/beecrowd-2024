const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number);

//Desestruturando
const [bolinhas, galhos] = lines;

//Calculando o total de bolinhas a serem colocadas na arvore
const totalBolinhas = galhos / 2;

//Se for maior que as que ela tem, então:
if (totalBolinhas > bolinhas) {
    console.log(`Faltam ${Math.trunc(totalBolinhas - bolinhas)} bolinha(s)`)
} else {
    console.log('Amelia tem todas bolinhas!')
}