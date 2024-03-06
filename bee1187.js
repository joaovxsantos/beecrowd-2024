const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));

//Declarando variáveis
let soma = 0;
let index = 0;
let j = 1;


//Criando array 12x12
const newArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]


//Passando os valores para o array 12x12
for (i = 1; i < lines.length; i++) {
    if (newArr[index].length < 12) {
        newArr[index].push(parseFloat(lines[i]))
    } else {
        index += 1
        newArr[index] = [];
        newArr[index].push(parseFloat(lines[i]))
    }
}

//Pegando os números de acordo com a quantidade, coluna e linhas solicitada no problema.
for (k = 0; k < 5; k++) {
    let item = newArr[k]
    soma += item.slice(j, item.length - j).reduce((accumulator, element) => accumulator += element, 0)
    j++
}

//Definindo qual será a leitura

if (lines[0] === 'S') {
    console.log(soma.toFixed(1))
} else {
    console.log((soma / 66).toFixed(1))
}