const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));



//Varrendo o array
lines.forEach((element, indx) => {
    let str = '';

    //Pegando apenas os elementos a serem iterador
    if (element.length > 2) {
        
        //Pegar apenas os números impares e ordenando de forma crescente
        let oddNums = element.split(' ').map(Number).filter(num => (num % 2) > 0).sort((a, b) => a - b)

        //Se houver números impares, então
        if (oddNums.length) {
            //Vou tirando o ultimo e o primeiro, até acabar o array
            while (oddNums.length > 0) {
                str += `${oddNums.pop()} `
                if (oddNums.length > 0) {
                    str += `${oddNums.shift()} `
                }
            }
        }
        console.log(str.trim())
    }

})