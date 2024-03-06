const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(Number);


//Desestruturando
let [nota1, media] = lines;

//Recuperando a nota perdida
console.log((media * 2) - nota1);