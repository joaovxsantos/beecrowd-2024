const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));

//Pegando a quantidad de testes
const quantTestes = parseInt(lines.shift());


//Loopando
for (let i = 0; i < quantTestes; i++) {
    let vezesAtingido = 0;

    //Desestruturando as entradas
    let [quantJogadas, valorJogadas, movJogadas] = lines.splice(0, 3);

    valorJogadas = valorJogadas.split(' ').map(Number)


    //Loopando as jogadas
    for (let j = 0; j < quantJogadas; j++) {
        //Se for igual a 'S', então
        if (movJogadas[j] === 'S') {
            // Verifica sem é um valor entra 1 e 2, se for então incrementa a variável vezesAtingido
            valorJogadas[j] >= 1 && valorJogadas[j] <= 2 ? vezesAtingido++ : vezesAtingido
        }
        // Se não, se for igual a 'J' e o valor maior que 2, então incrementa a variável
        else if (movJogadas[j] === 'J' && valorJogadas[j] > 2) {
            vezesAtingido++
        }
    }
    console.log(vezesAtingido);
}