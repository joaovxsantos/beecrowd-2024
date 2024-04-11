const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n').map(l => l.replace('\r', ''));




//Código mais otimizado
for (let i = 1; i <= +lines[0]; i++) {
    let response = '';
    lines[i].split(/·|\s+/).forEach(words => {
        if (words.length > 0) {
            response += words[0]
        }
    })
    console.log(response);
}






//Segunda versão do código que tambem funciona
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.trim().split('\n');
// for (let i = 1; i <= +lines[0]; i++) {
//     let response = '';
//     lines[i].split('·').filter(el => el.length > 0).forEach(word => {
//         word.split(/\s+/).filter(el2 => el2.length > 0).forEach(words => {
//             console.log(words[0])
//         })

//     })
//     console.log(response)
// }






//Primeira versão do código
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.trim().split('\n');

// for (let i = 1; i <= +lines[0]; i++) {
//     let response = '';
//     lines[i].split('·').filter(el => el.length > 0).forEach(word => {
//         word.split(/\s+/).forEach((words) => {
//             if(words.length > 0) {
//                 response+= words[0]
//             }
//         })
//     })
//     console.log(response)
// }