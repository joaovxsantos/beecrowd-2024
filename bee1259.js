const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number);


//Primeiro e Melhor código
lines.filter((line) => (line % 2) === 0 && line !== 0).sort((a, b) => a - b).forEach(num => console.log(num))
lines.filter((line) => (line % 2) > 0).sort((a, b) => b - a).forEach(num => console.log(num))




//Segundo código
// let par = []
// let impar = []


// for (let i = 1; i <= lines[0]; i++) {
//     if (lines[i] % 2 === 0) {
//         par.push(lines[i])
//     } else if (lines[i] % 2 > 0) {
//         impar.push(lines[i])
//     }
// }
// par.sort((a, b) => a - b).forEach(num => console.log(num))
// impar.sort((a, b) => b - a).forEach(num => console.log(num))