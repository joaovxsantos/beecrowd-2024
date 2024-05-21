const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));


//Desestruturando
let [iterator, nums] = lines


nums = nums.split(' ').map(Number)
let lastNum = 0;
let totalEscadinhas = []


//Se a quantidade de número for entre 1 e 2, então é impresso o número 1
if (iterator >= 1 && iterator <= 2) {
    console.log(1)
} else { //Se não for...

    //Loopando o array
    for (let i = 0; i < +iterator; i++) {
        const element = nums[i]

        //Se estivermos iterando sob elementos que nao sejam o primeiro, então
        if (i > 0) {
            //Calculo a diferença entre o atual elemento e o elemento anterior
            const diferenca = element - lastNum;

            //Se a diferença atual, for diferença da ultima diferença que consta no array, então da push
            if (totalEscadinhas[totalEscadinhas.length - 1] !== diferenca) {
                totalEscadinhas.push(diferenca)
            }
        }

        //Salvando o último elemento
        lastNum = element
    }
    console.log(totalEscadinhas.length)
}
