//Forma 1

const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split(' ').map(Number);

//Declarando os nomes de acordo com 'Rudolph' em primeiro (diferente do enunciado)
const renas = ['Rudolph', 'Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen']

//Somando todos os números, e vendo o resto da soma dividido por 9
let indexRena = lines.reduce((accum, element) => {
    return accum += element
}) % 9

//Passando o resultado para buscar a rena do index correspondente
console.log(renas[indexRena])


//Forma 2

//Declarando os nomes de acordo com 'Rudolph' em ultima (igual do enunciado)

// const renas = ['Dasher', 'Dancer', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen', 'Rudolph']

// //Somando todos os números, e vendo o resto da soma dividido por 9
// let indexRena = lines.reduce((accum, element) => {
//     return accum += element
// }) % 9

// //Como está de acordo com o enunciado, devo diminuir de 1, porém se for 0, então ele passa como index o ultimo valor do array (length - 1)
// console.log(renas[indexRena - 1 < 0 ? renas.length - 1 : indexRena - 1])