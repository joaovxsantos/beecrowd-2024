const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(Number).sort((a, b) => a - b);



let count = 0;


//Varrendo o array
lines.forEach((num, indx) => {
    let nums = [];
    nums.push(num)

    //Pegando todos os números após o numero atual do forEach
    for (let i = indx + 1; i < lines.length; i++) {

        //Se a diferença entre o número atual e o numero testado for menor ou igual a 1, adiciona ao array
        if ((lines[i] - num) <= 1) {
            nums.push(lines[i])
        }
    }

    //Se o tamanho atual do array for maior que count, então atualiza count
    if (nums.length > count) {
        count = nums.length
    }
})
console.log(count)