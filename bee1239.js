const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n')


//Melhor versão do código

//Declarando variáveis
let index = 0;
let index1 = 0;

//Varrendo array
lines.forEach((line) => {
    //Separando as strings em letras
    let strings = line.split('')

    let stringFinal = strings.map(string => {
        //Se for igual  '_' então substitui de acordo com o index atual
        if (string === '_') {
            string = string.replace(string, `${index % 2 === 0 ? '<i>' : '</i>'}`)
            index++
        }
        //Se for igual  '_' então substitui de acordo com o index1 atual
        if (string === '*') {
            string = string.replace(string, `${index1 % 2 === 0 ? '<b>' : '</b>'}`)
            index1++
        }
        return string
    })
    console.log(stringFinal.join(''))
})









// -----------------------------------------------------------------

//Primeiro código


//Declarando variáveis
// let index = 0;
// let index1 = 0;


// //Varrendo o array
// lines.forEach((line) => {
//     //Separando as strings em letras
//     let strings = line.split('')

//     //Varrendo com map
//     let stringFinal = strings.map(string => {

//         //Se a string for '-' então testa as condições e troca o elemento de acordo com o index1
//         if (string === '_') {
//             if (index1 > 1) {
//                 index1 = 0;
//             }
//             string = string.replace('_', `${index1 === 0 ? '<i>' : '</i>'}`);
//             index1++
//         }

//         //Se a string for '*' então testa as condições e troca o elemento de acordo com o index
//         if (string === '*') {

//             if (index > 1) {
//                 index = 0;
//             }
//             string = string.replace('*', `${index === 0 ? '<b>' : '</b>'}`);
//             index++
//         }

//         return string
//     })
//     console.log(stringFinal.join(''))
// })