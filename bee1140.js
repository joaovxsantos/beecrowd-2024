const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));


//Declarando variável
let i = 0;

//Loop
while (lines[i] !== '*') {

    //Separando as palavras e colocando todas em letras minusculas
    const elemento = lines[i].split(' ').map(palavras => palavras.toLowerCase());

    //Armazenando a quantidade de palavras
    const tamanho = elemento.length;

    //Armazenando a letra inicial da primeira palavra
    const letraInicial = elemento[0][0];

    //Variável de contagem
    let count = 0;

    //Loopando palavra por palavra
    for (let palavras of elemento) {
        //Se a primeira letra da palavra for igual letraInicial, então soma a contagem
        if (palavras[0] === letraInicial) {
            count += 1
        }
    }

    //Se a contagem for igual ao tamanho, imprime Y, se não imprime N
    if (count === tamanho) {
        console.log('Y')
    } else {
        console.log('N')
    }

    //Incrementando
    i++
}