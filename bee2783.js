const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(el => el.replace('\r', ''));

//Desestruturando
let [, numsSearch, numsBuy] = lines

//Transformando em array
numsSearch = numsSearch.split(' ')
numsBuy = numsBuy.split(' ')

//Fazendo loops aninhados e testando condição
numsBuy.forEach(num => {
    for (let i = 0; i < numsSearch.length; i++) {
        if (num === numsSearch[i]) {
            //Removendo o elemento encontrado do array
            numsSearch.splice(i, 1)
        }
    }
})
console.log(numsSearch.length)