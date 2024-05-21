const input = require('fs').readFileSync('stdin', 'utf8');
var lines = +input;


//Inicia-se com 1 e 1
let nums = [1, 1]


//Loopando até ter a quantidade de números solicitada
for (let i = 2; i < lines; i++) {

    //Pegando os dois números anteriores para saber qual será o atual
    nums.push(nums[i - 1] + nums[i - 2])
}

//Se a quantidade de números solicitada for 1, então lê 1, se não lê os valores do array de modo inverso, na ordem correta 
console.log(lines === 1 ? 1 : nums.reverse().join(' '))