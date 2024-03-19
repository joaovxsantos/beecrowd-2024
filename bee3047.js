const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');


//Desestruturando
let [idade, filho1, filho2] = lines.map(Number);

//Pegando a idade do filho3
let filho3 = idade - (filho1 + filho2)

//Ordenando de forma decrescente para ler a idade do filho mais velho
console.log([filho1, filho2, filho3].sort((a, b) => b - a)[0])