const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));

//Declanraod variáveis
let indexCurrent = 0;
let k = 10;
let soma = 0;
let [operation, ...nums] = lines;


//Criando array 12x12 vazio
const arr = new Array(12).fill([])

//Passando os valores para o array 12x12
for (let num of nums) {
    if (arr[indexCurrent].length < 12) {
        arr[indexCurrent].push(num)
    } else {
        indexCurrent++
        arr[indexCurrent] = []
        arr[indexCurrent].push(num)
    }
}

//Pegando através de loop o elementos de acordo com as colunas e a quantidade solicitada por coluna
for (j = 0; j <= 4; j++) {
    let iterator = k

    while (iterator >= (j + 1)) {
        soma += parseFloat(arr[iterator][j])
        iterator--
    }
    k -= 1
}

//Definindo qual será a leitura
if (operation === 'S') {
    console.log(soma.toFixed(1))
} else {
    console.log((soma / 30).toFixed(1))
}