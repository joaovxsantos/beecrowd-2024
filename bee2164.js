const input = require('fs').readFileSync('stdin', 'utf8')
const lines = parseInt(input);


//Primeira parte da formula
let element1 = Math.pow((1 + Math.sqrt(5)) / 2, lines)

//Segunda parte da formula
let element2 = Math.pow((1 - Math.sqrt(5)) / 2, lines)

//Subtraindo ambas as pares, dividino pela raiz de 5 e arredondando para o inteiro mais proxímo
console.log(Math.round((element1 - element2) / Math.sqrt(5)).toFixed(1));