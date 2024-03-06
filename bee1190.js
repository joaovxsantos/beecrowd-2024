const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));


//Variáveis iniciais
const [iterator, ...nums] = lines;
const arr = new Array(12).fill([])
let currentIndex = 0;
let k = 1;
let y = 0;
let cont = 0;

//Loop para fazer array 12x12
for (let num of nums) {
    if (arr[currentIndex].length < 12) {
        arr[currentIndex].push(num)
    } else {
        currentIndex++
        arr[currentIndex] = []
        arr[currentIndex].push(num)
    }
}

//Pegando os elementos de acordo com a quantidade nas colunas e linhas
for (let i = 11; i >= 7; i--) {
    y = i - 1

    while (y >= k) {
        cont += parseFloat(arr[y][i])
        y--
    }
    k++
}

//Lendo o resultado
if (iterator === 'S') {
    console.log(cont.toFixed(1))
} else {
    console.log((cont / 30).toFixed(1))
}