const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');


const iterator = parseInt(lines.shift())
lines = lines[0].split(' ').map(Number);
let count = new Set()


//Varrendo o array
for (let i = 0; i < iterator; i++) {

    //Se i for menor que 0, então quebra o loop
    if (i < 0) {
        break
    }

    //Variável que contém o elemento
    const element = lines[i]

    //Se diminuir 1 do elemento for maior ou igual a 0, então faz, se não se mantém
    lines[i] = lines[i] - 1 >= 0 ? lines[i] - 1 : lines[i]

    //Adicionando o index a variável count para contarmos por quantos elementos passamos
    count.add(i)

    //Se o element for par, então o i volta 2 números
    if ((element % 2) === 0) {
        i -= 2
    }
}
console.log(`${count.size} ${lines.reduce((accum, num) => accum += num, 0)}`)




// --------------------------------------------------------
//Primeiro código que fiz, no ano passado, fiz manutenção e fiz funcionar



// var lines = input.split('\n').map(element => element.replace('\r', ''));

// let [iterator, quantidade] = lines;


// let fazendas = quantidade.split(' ').map(Number);
// let count = new Set()




// let i = 0;

// while (i < iterator) {
//     const element = fazendas[i]

//  Se o i for menor que 0, o i vira iterator e quebra o loop
//     if (i < 0) {
//         i = iterator
//         break
//     }
//Adicionando o index a variável count para contarmos por quantos elementos passamos
//     count.add(i)

    //Se diminuir 1 do elemento for maior ou igual a 0, então faz, se não se mantém

//     fazendas[i] = fazendas[i] - 1 >= 0 ? fazendas[i] - 1 : fazendas[i]

//Se o element for par, tira 1 do i, se for impar adiciona 1
//     if (element % 2 === 0) {
//         i = i - 1
//     } else {
//         i = i + 1
//     }

// }
// let sobra = fazendas.reduce((accumulator, currentElement) => accumulator += currentElement, 0)
// console.log(`${count.size} ${sobra}`)