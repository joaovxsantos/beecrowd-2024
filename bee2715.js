const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));



//Varrendo array
lines.forEach((trabalhos) => {
    //Iniciando a variável
    let count = 0;

    //Se trabalhso for maior que 1, então:
    if (trabalhos.length > 1) {

        //Separando os elementos
        let trabalhosNums = trabalhos.split(' ').map(Number)

        //Pegando a soma total dos números
        let totalNums = trabalhosNums.reduce((accum, el) => accum += el, 0)

        //Loop while
        while (count < (totalNums - 1)) {
            //Somando o primeiro elemento a count 
            count += +trabalhosNums.shift()
            //E redefinindo a soma total dos números
            totalNums = trabalhosNums.reduce((accum, el) => accum += el, 0)
        }
        //Leitura da diferença dos elementos
        console.log(totalNums - count)
    }
})