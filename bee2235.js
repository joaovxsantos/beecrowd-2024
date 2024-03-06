const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split(' ').map(Number);

//Declaração da variável de resultado com um valor inicial 'N'
let result = 'N'

//Varrendo o array duas vezes para comparar um elemento com os restantes
lines.forEach((element, indx) => {
    lines.forEach((el, indx1) => {
        if (indx !== indx1) { //Se forem diferentes, então:
            //Se houverem elementos repetidos, então result = 'S'
            //Se a soma de dois elementos for igual ao número que resto, então result = 'S'
            //A soma dos index's dos elementos somados, diminuidos do length do array, resultam no número que restou
            if (element === el || element + el === lines[lines.length - (indx + indx1)]) {
                result = 'S'
            }
        }
    })
})
console.log(result)