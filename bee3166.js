const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));

// BEE 3166 TERMINAR AMANHA (27/03)


let [quantPalavras, l, c] = lines.splice(0, 1).join('').split(' ');
let palavras = lines.splice(0, quantPalavras)

let diagonalPrincipal = '';
let acimaDiagonalPrincipal = '';
let abaixoDiagonalPrincipal = '';



loops()


function loops() {
    for (let i = 0; i < lines.length; i++) {
        diagonalPrincipal += lines[i][i]
        acimaDiagonalPrincipal += lines[i][i + 1 <= lines.length - 1 ? i + 1 : i]
    }

    // for (let j = 0; j < lines.length; j++) {
    //     acimaDiagonalPrincipal += lines[j][j + 1 <= lines.length - 1 ? j + 1 : j]
    // }

    for (let k = 3; k < lines.length; k++) {
        abaixoDiagonalPrincipal += lines[k][k - 2]
    }
    console.log(diagonalPrincipal);
    resultadoBusca([diagonalPrincipal, acimaDiagonalPrincipal, abaixoDiagonalPrincipal])
}

function resultadoBusca(diagonais) {

    diagonais.forEach((diagonal, index) => {
        diagonal = diagonal.toLowerCase()
        // palavras.forEach(palavra => {
        //     let palavraReverse = palavra.split('').reverse().join('')
        //     if (diagonal.includes(palavra) || diagonal.includes(palavraReverse)) {
        //         console.log(palavra)
        //     }
        // })
        // console.log(diagonal)
    })
}

