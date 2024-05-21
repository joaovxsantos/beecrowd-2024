const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));



const [iterator, ...nums] = lines
let soma = 0;

for (let i = 0; i < +iterator; i++) {
    const [n1, n2] = nums[i].split(' ').map(Number);

    soma += n1 / n2
}

console.log(soma <= 1 ? 'OK' : 'FAIL')