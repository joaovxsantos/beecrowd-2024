const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(Number);


//Declarando array
let tempo_gasto = []


//Fazendo todos os testes, se colocar no 1 andar quanto tempo gasta, se colocar no 2, no 3 e assim por diante
tempo_gasto.push(lines[0] * 4 + lines[1] * 2)
tempo_gasto.push(lines[0] * 2 + lines[2] * 2)
tempo_gasto.push(lines[1] * 2 + lines[2] * 4)

//Pegando o menor e lendo
tempo_gasto.sort((a, b) => a - b)
console.log(tempo_gasto[0])