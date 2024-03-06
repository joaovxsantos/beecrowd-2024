const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', '').split(' '));



//Varrendo o array
lines.forEach(element => {

    //Desestruturando
    let [digitoFalho, valorContrato] = element;

    //Se os elementos forem maiores que 0, então
    if (digitoFalho > 0 && valorContrato > 0) {

        //Filtrando os valores e deixando apenas valores cheios
        let resultEl = valorContrato.split(digitoFalho).filter(el => el !== '')

        //Se for 0 então lê 0
        if (resultEl.join('') == 0) {
            console.log('0')
        } else { //Se não, tira os zeros a esquerda e lê
            let posicaoSemZero = resultEl.join('').search(/[1-9]/)
            console.log(resultEl.join('').slice(posicaoSemZero))
        }
    }
})