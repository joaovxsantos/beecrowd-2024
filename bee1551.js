const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));


//Declarando número total de letras
let totalLettersIndex = 26;


//Varrendo o array
for (let i = 1; i <= +lines[0]; i++) {
    let totalLetters = new Set();

    const phrase = lines[i];


    //Varrendo os caracteres da frase contida no array e verificando se são letras 
    for (let letter of phrase) {
        if (/^[a-zA-Z]$/.test(letter)) {
            //Se forem, são adicionadas ao set
            totalLetters.add(letter)
        }
    }

    //Testando condições para leitura
    if (totalLetters.size === totalLettersIndex) {
        console.log('frase completa');
    } else if (totalLetters.size >= (totalLettersIndex / 2)) {
        console.log('frase quase completa')
    } else {
        console.log('frase mal elaborada')
    }

}