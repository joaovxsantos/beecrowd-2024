const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));



//BEE 3065


//Ambos os codigos dão o mesmo 5% error

// let index = 0;

// lines.forEach((element) => {
//     if (isNaN(+element)) {
//         index++
//         console.log(`Teste ${index}\n${eval(element)}\n`)
//     }
// })



// let index = 0;

// lines.forEach((element) => {
//     if (isNaN(+element)) {
//         let stringElements = element.match(/(\d+)|([+-])/g)
//         let calc = +stringElements[0]

//         for (let i = 1; i < stringElements.length; i++) {
//             if (isNaN(+stringElements[i])) {
//                 if (stringElements[i] === '+') {
//                     calc += +stringElements[i + 1]
//                 } else if (stringElements[i] === '-') {
//                     calc -= +stringElements[i + 1]
//                 }
//             }
//         }
//         index++
//         console.log(`Teste ${index}\n${correge(calc)}\n`)
//     }
// })