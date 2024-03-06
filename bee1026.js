const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Esse código está correto, porém estava dando 'Time limit exceeded', mas a lógica é correta.


//Varrendo a entrada
lines.forEach((element, index) => {
    let [n1, n2] = element.split(' ').map(Number);


    //Definindo a ordem dos elementos passados para a função
    if (+toBin(n1) > +toBin(n2)) {
        subTract(toBin(n1), toBin(n2))
    } else {
        subTract(toBin(n2), toBin(n1))
    }
})

//Função que transforma o número em binário
function toBin(x) {
    return (x >>> 0).toString(2)
}

//Função que define o resultado
function subTract(n1, n2) {
    let count = '';


    for (let i = n1.length - 1; i >= 0; i--) {

        //Pegando os valores
        let num1 = n1[n1.length - 1 - i]
        let num2 = n2[n2.length - 1 - i]

        //Se ambos forem 1, soma 0, se não, então soma eles normalmente e adiciona a count
        if (num1 == 1 && num2 == 1) {
            count += 0
        } else {
            count += correctNum(num1) + correctNum(num2)
        }

    }


    //Lendo o resultado
    console.log(parseInt(count, 2));
}

//Função que transforma undefined em 0
function correctNum(num) {
    if (num === undefined) {
        return 0
    }
    return +num
}









//Codigo que passou
// const lines = input.split('\n');

// let arr;
// lines.forEach((valorC) => {
//     if (valorC !== "") {
//         arr = new Uint32Array(3);
        
//         const match1 = valorC.match(/\d+/);
//         arr[0] = match1 ? parseInt(match1[0], 10) : 0;
        
//         const match2 = valorC.match(/\s(\d+)/);
//         arr[1] = match2 ? parseInt(match2[1], 10) : 0;
        
//         arr[2] = arr[0] ^ arr[1];
//         console.log(arr[2]);
//     }
// });
