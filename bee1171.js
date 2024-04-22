const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number);

//Declarando objeto
let nums = {}

//Loopando os números
for (let i = 1; i <= lines[0]; i++) {
    //Utilizando curto circuito para contar a quantidade de números
    nums[lines[i]] = ++nums[lines[i]] || 1
}

//Varrendo o objeto
for(let num in nums) {
    console.log(`${num} aparece ${nums[num]} vez(es)`)
}