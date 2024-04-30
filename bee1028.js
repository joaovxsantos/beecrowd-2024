const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''))



//Pegando elementos da entrada
for (let i = 1; i <= +lines[0]; i++) {
    const [num1, num2] = lines[i].split(' ').map(Number)
    console.log(calcularMDC(num1, num2))
}

//Função que calcula o MDC
function calcularMDC(num1, num2) {
    let resto;
    do {

        resto = num1 % num2;

        num1 = num2;

        num2 = resto;

    } while (resto != 0);
    return num1;
}