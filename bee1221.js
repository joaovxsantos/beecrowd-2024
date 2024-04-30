const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number)




const iterator = lines.shift()

//Loopando para pegar os números e executando a função
for (let i = 0; i < iterator; i++) {
    const num = lines[i];

    console.log(!isPrime(num) ? 'Not Prime' : 'Prime')
}

//Função que define se um número é primo
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num !== 1
}