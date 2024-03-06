const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(Number);


//Pegando as entradas
const [A, B, C] = lines;




//Função que formata os números de acordo com o solicitado
const formaterNumber = (number, typeEspac) => {
    let numStr = number.toString()
    let deficit = 10 - numStr.length;

    if (typeEspac === 'left') {
        return numStr[0] === '-' ? ' '.repeat(deficit) + '-' + numStr.slice(1) : ' '.repeat(deficit) + numStr;
    } else if (typeEspac === 'right') {
        return numStr[0] === '-' ? '-' + numStr.slice(1) + ' '.repeat(deficit) : numStr + ' '.repeat(deficit);
    } else {
        return numStr[0] === '-' ? '-' + '0'.repeat(deficit) + numStr.slice(1) : '0'.repeat(deficit) + numStr;
    }
}


//Lendo as strings
console.log(`A = ${A}, B = ${B}, C = ${C}`);
console.log(`A = ${formaterNumber(A, 'left')}, B = ${formaterNumber(B, 'left')}, C = ${formaterNumber(C, 'left')}`);
console.log(`A = ${formaterNumber(A)}, B = ${formaterNumber(B)}, C = ${formaterNumber(C)}`);
console.log(`A = ${formaterNumber(A, 'right')}, B = ${formaterNumber(B, 'right')}, C = ${formaterNumber(C, 'right')}`);