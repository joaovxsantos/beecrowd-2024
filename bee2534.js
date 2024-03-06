const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));
let [cidadoes, quantidade] = lines[0].split(' ')
let notasARR = [];

for (i = 1; i <= cidadoes; i++) {
    notasARR.push(parseInt(lines[i]))
}

let arrayInOrder = notasARR.sort((a, b) => b - a)

for (let j = parseInt(cidadoes) + 1; j < lines.length; j++) {
    
    let iterator = lines[j] - 1

    console.log(arrayInOrder[iterator]);
    // console.log(notasARR.sort((a, b) => b - a)[lines[j] - 1])
}


//     lines.forEach((element, index) => {
//         if (index > 0 && index <= cidadoes) {
//             notasARR.push(element)
//         }
//     })
// for (let j = parseInt(cidadoes) + 1; j < lines.length; j++) {
//     console.log(notasARR.map(Number).sort((a, b) => b - a)[lines[j] - 1])
// }