const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(element => element.replace('\r', ''));



//Enquanto houve números, loopar
while (lines.length > 0) {

    let result = 0;

    //Tirando os elementos de acordo com o número N, +2 para pegar esse número e os passos também.
    let elements = lines.splice(0, parseInt(lines[0]) + 2).map(Number)
    let passo = elements[elements.length - 1]

    //Tirando o primeiro e ultimo elemento do array e removendo o undefined q fica no lugar deles
    let numeros = elements.map((el, indx) => {
        if (indx !== 0 && indx !== elements.length - 1) { return el }
    }).filter(el => el !== undefined)


    //Decrementando e somando de acordo com o passo
    for (let i = numeros.length - 1; i >= 0; i -= passo) {
        result += numeros[i]
    }

    //Verificando se é primo ou não
    if (isPrime(result)) {
        console.log('You’re a coastal aircraft, Robbie, a large silver aircraft.')
    } else {
        console.log('Bad boy! I’ll hit you.')
    }
}



function isPrime(number) {
    // Caso o número seja menor ou igual a 1, não é primo
    if (number <= 1) {
        return false;
    }

    // Verifica se o número é divisível por algum inteiro de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Se for divisível, não é primo
        }
    }

    return true; // Se não foi divisível por nenhum número, é primo
}