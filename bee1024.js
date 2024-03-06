const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Desestruturando
const [iterator, ...strings] = lines;


//Loopando
for (let i = 0; i < iterator; i++) {
    let elements = strings[i].split('')

    //Alterando as letras para 3 posições a frente
    //A vira D 
    //J vira M e assim por diante
    let arr = elements.map((element) => {
        if (/^[a-z]$/.test(element) || /^[A-Z]$/.test(element)) {
            let value = element.charCodeAt() + 3;
            return String.fromCharCode(value)
        }
        return element
    })


    //Invertendo a ordem do array
    arr.reverse()

    //Alterando todos os caracteres para 1 posição anterior
    //B vira A
    //J vira I e assim por diante
    arr = arr.map((el, indx) => {
        if (indx >= Math.trunc(arr.length / 2)) {
            let value = el.charCodeAt() - 1;
            return String.fromCharCode(value)
        }
        return el
    })

    //Lendo
    console.log(arr.join(''))
}