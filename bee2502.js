const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.replace('\r', ''));


let result = ''

//Enquanto houve elementos em lines
while (lines.length) {
    const [, totalFrasesDecifrar] = lines.shift().split(' ').map(Number)
    const [letrasCorretas, letrasCriptografadas, ...frases] = lines.splice(0, totalFrasesDecifrar + 2)

    //Varrendo as frases
    frases.forEach((frase) => {
        result = ''

        //Varrendo as letras da frase
        for (let letter of frase) {

            //Verificando se a letra contém em uma das palavras padroes
            let indice = letrasCriptografadas.indexOf(letter.toLocaleUpperCase())
            let indice2 = letrasCorretas.indexOf(letter.toLocaleUpperCase())

            if (indice !== -1) {
                addLetter(letrasCorretas[indice], letter)
                continue //Continue faz com que o loop volte para o começo, continuando o loop
            } else if (indice2 !== -1) {
                addLetter(letrasCriptografadas[indice2], letter)
                continue
            }
            result += letter
        }
        console.log(result)
    })
    //Se o tamanho for 0 então acaba com o loop
    if (lines.length === 0) break
    console.log('')
}


function addLetter(elementIndice, letter) {
    //Verificando se a letra é minuscula, se for a letra que irá substitui-la tbm será
    if (letter === letter.toLowerCase()) {
        result += elementIndice.toLowerCase()
        //Retornando para finalizar o código
        return
    }
    //Se n for só adiciona
    result += elementIndice
} 