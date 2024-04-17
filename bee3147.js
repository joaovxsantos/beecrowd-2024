const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(Number);

//Desestruturando
const [H, E, A, O, W, X] = lines


//Testando condições
if ((H + E + A + X) > (O + W)) {
    console.log('Middle-earth is safe.')
} else {
    console.log('Sauron has returned.') 
}