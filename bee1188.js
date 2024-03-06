const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));

//Iniciando um array 12x12
const arr = new Array(12).fill([])
let index = 0;

//Passando os valores de lines para o array 12x12
for (i = 1; i < lines.length; i++) {
    if (arr[index].length < 12) {
        arr[index].push(lines[i])
    } else {
        index++
        arr[index] = []
        arr[index].push(lines[i])
    }
}

//Função que separa os número de acordo com o pedido do exercicio e soma
const result = () => {
    let contN = 1;
    let sum = 0;
    for (i = 11; i >= 7; i--) {
        sum += arr[i].slice(contN, arr[i].length - contN).reduce((accumulator, element) => {
            accumulator += Number(element)
            return accumulator
        }, 0)
        contN++
    }

    //Função que lê o resultado
    defineMsg(sum)
}

const defineMsg = (sum) => {
    //Se for 'S' então lê a soma já feita, se não então faz a média e lê
    if (lines[0] === 'S') {
        console.log(sum.toFixed(1))
    } else {
        console.log((sum / 30).toFixed(1))
    }
}
result()