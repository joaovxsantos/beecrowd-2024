const input = require('fs').readFileSync('stdin', 'utf8');
// let lines = input.split('\n');

var lines = input.split('\n').map(element => element.replace('\r', ''));

let [iterator, quantidade] = lines;


let fazendas = quantidade.split(' ').map(Number);
let count = new Set()




let i = 0;

while (i < iterator) {
    const element = fazendas[i]

    if (i < 0) {
        i = iterator
        break
    }
    count.add(i)


    fazendas[i] = fazendas[i] - 1 >= 0 ? fazendas[i] - 1 : fazendas[i]


    if (element % 2 === 0) {
        i = i - 1
    } else {
        i = i + 1
    }

}
let sobra = fazendas.reduce((accumulator, currentElement) => accumulator += currentElement, 0)
console.log(`${count.size} ${sobra}`)






// const iterator = parseInt(lines.shift())
// lines = lines[0].split(' ').map(Number);
// let count = new Set()


// for (let i = 0; i < iterator; i++) {
//     if (i < 0) {
//         break
//     }

//     const element = lines[i]

//     lines[i] = lines[i] - 1 >= 0 ? lines[i] - 1 : lines[i]

//     count.add(i)

//     if ((element % 2) === 0) {
//         i -= 2
//     }
// }
// console.log(`${count.size} ${lines.reduce((accum, num) => accum += num, 0)}`)