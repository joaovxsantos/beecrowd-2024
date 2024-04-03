const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Pegando a quantidade de elementos para loop
let iterator = +lines[0]

//Loop
for (let i = 1; i <= iterator; i++) {

    let resultStr = '';

    //Salvando a ordem original dos elementos 
    let str = lines[i].split(' ');

    //Pegando o maior 
    let maiorStr = lines[i].split(' ').sort((a, b) => a.length - b.length)[1];

    let letter = 0;

    //Loop, enquanto letter for menor que o maior elemento
    while (letter < maiorStr.length) {
        //Se letter for maior que o elemento 0, então só adiciona o 1
        if (letter >= str[0].length) {
            resultStr += str[1][letter]
        }
        //Se letter for maior que o elemento 1, então só adiciona o 0
        else if (letter >= str[1].length) {
            resultStr += str[0][letter]
        }
        //Se não, adiciona todos
        else {
            resultStr += str[0][letter] + str[1][letter]
        }
        letter++
    }
    console.log(resultStr)
}
