const input = require('fs').readFileSync('stdin', 'utf8');
var lines = +input;


//Valor inicial para começar a sequencia
let nums = [1, 1]
let sobra = []

//Loopando
for (let i = 2; i < 30; i++) {
    const actualElement = nums[i - 1] + nums[i - 2];
    const lastElement = nums[i - 1]

    //Se houver uma diferença maior que 1 entre o ultimo elemento adicionado ao array e o atual, significa que o valor que fico entre esse não é da sequencia de fibonnaci, adiciono ao array sobra
    if ((actualElement - lastElement) > 1) {
        for (let i = lastElement + 1; i < actualElement; i++) {
            sobra.push(i)
        }
    }

    nums.push(actualElement)
}
console.log(sobra[lines - 1])