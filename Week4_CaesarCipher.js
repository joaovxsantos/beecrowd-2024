//Variáveis
const s = 'Hello_World!'
const k = 4
let string = '';


//Loopando a string
s.split('').forEach((letter) => {

    //Definindo o alfabeto
    let letters = 'abcdefghijklmnopqrstuvwxyz'

    //Se o elemento não for uma letra, então é diretamente adicionado a string e retorna o loop
    if (!/^[a-zA-Z]$/.test(letter)) {
        string += letter
        return
    }


    //Se a letra for maiuscula, entao passo o alfabeto para maiusculo
    if (letter === letter.toUpperCase()) {
        letters = letters.toUpperCase()
    }

    //Pegando em qual posição a letra está no alfabeto
    let charCode = letters.indexOf(letter);

    //Somando a posição da letra com a quantidade solicitada
    for (let i = 0; i < k; i++) {
        charCode += 1

        //Se for igual a 26 que é o tamanho do alfabeto, então reseta e continua o loop
        if (charCode === 26) {
            charCode = 0
        }

    }

    //Adicionando a string a nova letra
    string += letters[charCode]
})
console.log(string)