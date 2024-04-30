const input = require('fs').readFileSync('stdin', 'utf8');
let arr = input.split(' ').map(Number).sort((a, b) => a - b);


let resultArr = [];
let bigNum = 0;

//Varrendo o array
arr.forEach((item, index) => {

    //Verificando a diferença entre o elemento atual e o seu elemento adjacente
    const diferencaPares = Math.abs(item - arr[index + 1])

    //Se a diferença entre eles for menor que bigNum ou bigNum igual a 0 então:
    if (diferencaPares < bigNum || bigNum === 0) {
        bigNum = diferencaPares //bigNum recebe a diferença
        resultArr = [item, arr[index + 1]] //Array recebe o elemento atual e seu elemento adjacente
    } else if (diferencaPares === bigNum) {
        //Se não, se for igual então o elemento atual e seu elemento adjacente são adicionados ao array
        resultArr.push(item, arr[index + 1])
    }
})

console.log(resultArr.join(' '));