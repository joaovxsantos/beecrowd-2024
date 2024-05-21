const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));

//Código está certo, porém enviei em C99 pois em JS está bugado

const [numA, numB] = lines[0].split(' ').map(Number)
const [numC, numD] = lines[1].split(' ').map(Number)
const casasDecimais = [6, 1, 2, 3, 'exponencial', 0]

let result = ''


for (let i = 0; i < casasDecimais.length; i++) {
    const index = casasDecimais[i]
    if (index === 'exponencial') {
        result += `A = ${formatarParaNotacaoCientifica(numA)}, B = ${formatarParaNotacaoCientifica(numB)}\nC = ${formatarParaNotacaoCientifica(numC)}, D = ${formatarParaNotacaoCientifica(numD)}\n`
        continue
    }
    result += `A = ${numA.toFixed(index)}, B = ${numB.toFixed(index)}\nC = ${numC.toFixed(index)}, D = ${numD.toFixed(index)}\n`
}

console.log(result)


function formatarParaNotacaoCientifica(numero) {
    // Converte o número para notação científica com 3 casas decimais
    let notacaoCientifica = numero.toExponential(3);
    // Substitui 'e' por 'E'
    notacaoCientifica = notacaoCientifica.replace('e', 'E');
    // Garante que o expoente tenha dois dígitos
    let partes = notacaoCientifica.split('E');
    let mantissa = partes[0];
    let expoente = parseInt(partes[1], 10); // Converte para inteiro para remover zeros à esquerda
    let sinal = expoente >= 0 ? "+" : ""; // Adiciona sinal positivo para expoentes positivos
    let expoenteFormatado = sinal + ("00" + Math.abs(expoente)).slice(-2); // Formata para dois dígitos
    return `${mantissa}E${expoenteFormatado}`;
}
