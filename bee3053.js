const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Desestruturando 
const [iterator, moedaLetra, ...jogadas] = lines;

//Definindo objeto com valores
let copos = {
    A: { moeda: false },
    B: { moeda: false },
    C: { moeda: false }
}
//Atribuindo true ao elemento que é fornecido na entrada
copos[moedaLetra].moeda = true

let temp;

//Loopando
for (let i = 0; i < iterator; i++) {
    let jogada = +jogadas[i]

    //Switch, executa determinada ação de acordo com o case encontrado
    switch (jogada) {
        case 1: {
            temp = copos.A.moeda;
            copos.A.moeda = copos.B.moeda;
            copos.B.moeda = temp
            break
        }
        case 2: {
            temp = copos.B.moeda;
            copos.B.moeda = copos.C.moeda;
            copos.C.moeda = temp
            break
        }
        case 3: {
            temp = copos.A.moeda;
            copos.A.moeda = copos.C.moeda
            copos.C.moeda = temp
        }
    }
}
//Varrendo o objeto e verificando qual está com a moeda
for (let copo in copos) {
    copos[copo].moeda === true ? console.log(copo) : ''
}


// ------------------------------------------------------------------------//

//Segundo código (mais otimizado, menos linhas) também aceito


// const input = require('fs').readFileSync('stdin', 'utf8');
// const lines = input.split('\n').map(el => el.replace('\r', ''));

// //Desestruturando 
// const [iterator, moedaLetra, ...jogadas] = lines;

// //Definindo objeto com valores
// let copos = {
//     A: { moeda: false },
//     B: { moeda: false },
//     C: { moeda: false }
// }
// //Atribuindo true ao elemento que é fornecido na entrada
// copos[moedaLetra].moeda = true

// let temp;

// //Loopando
// for (let i = 0; i < iterator; i++) {
//     let jogada = +jogadas[i]
//     toggleObject(jogada)
// }

// //Função que testa as condições
// function toggleObject(n) {
//     if (n === 1) {
//         temp = copos.A.moeda;
//         copos.A.moeda = copos.B.moeda;
//         copos.B.moeda = temp
//     } else if (n === 2) {
//         temp = copos.B.moeda;
//         copos.B.moeda = copos.C.moeda;
//         copos.C.moeda = temp
//     } else if (n === 3) {
//         temp = copos.A.moeda;
//         copos.A.moeda = copos.C.moeda
//         copos.C.moeda = temp
//     }
// }

// //Varrendo o objeto e verificando qual está com a moeda
// for (let copo in copos) {
//     copos[copo].moeda === true ? console.log(copo) : ''
// }


