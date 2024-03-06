const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(Number);

//Desestruturando
let [total, totalCompradas, ...recebidas] = lines;

//Criando um Set
let adquiridas = new Set()

//Adicionando os números ao Set
for (let i = 0; i < recebidas.length; i++) {
    adquiridas.add(recebidas[i])
}

//Ocorreto seria (total - adquiridas.size) e não (total - adquiridas.size + 1), 
//porém o beecrowd só aceitou com o +1
console.log(total - adquiridas.size + 1)