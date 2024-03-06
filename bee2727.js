const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Declaraçao das letras
const letras = {
    '.': 'a',
    '..': 'b',
    '...': 'c',
    '. .': 'd',
    '.. ..': 'e',
    '... ...': 'f',
    '. . .': 'g',
    '.. .. ..': 'h',
    '... ... ...': 'i',
    '. . . .': 'j',
    '.. .. .. ..': 'k',
    '... ... ... ...': 'l',
    '. . . . .': 'm',
    '.. .. .. .. ..': 'n',
    '... ... ... ... ...': 'o',
    '. . . . . .': 'p',
    '.. .. .. .. .. ..': 'q',
    '... ... ... ... ... ...': 'r',
    '. . . . . . .': 's',
    '.. .. .. .. .. .. ..': 't',
    '... ... ... ... ... ... ...': 'u',
    '. . . . . . . .': 'v',
    '.. .. .. .. .. .. .. ..': 'w',
    '... ... ... ... ... ... ... ...': 'x',
    '. . . . . . . . .': 'y',
    '.. .. .. .. .. .. .. .. ..': 'z',
};

//Loop para enquanto tiver elementos, iterar
while (lines.length > 0) {
    let iterator = lines.splice(0, 1)
    let elements = lines.splice(0, iterator)

    //Pegando os elementos de acordo com o valor da string
    for (let element of elements) {
        console.log(letras[element])
    }
}