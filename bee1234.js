const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.trim().split('\n').map(element => element.replace('\r', ''));


//Varrendo o array
lines.forEach((element) => {

    //Declarando variáveis de controle
    let text = ''
    let realIndex = 0;

    //Varrendo a string
    for (let letter of element) {
        if (letter !== ' ') { //Se for diferente de espaço vazio, então:
            //Verifica se o realIndex é par, se for é letra maiuscula, se n for minuscula
            text += (realIndex % 2) === 0 ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase()
            realIndex++
        } else { //Se for espaço vazio, então só concatena.
            text += letter
        }
    }

    //Leitura
    console.log(text);
})