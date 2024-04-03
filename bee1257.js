const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n').map(l => l.replace('\r', ''));


//Desestruturando
let [, ...nums] = lines

//Enquanto houver elementos em nums
while (nums.length > 0) {

    let count = 0;

    //A quantidade a ser testada sempre será o index 0
    let num = +nums[0]

    //Retirando a quantidade de testes do array 
    nums.splice(0, num + 1).forEach((item, indx) => {
        if (indx > 0) {

            //Pegando em qual index está o caso de teste atual
            let elementoEntrada = indx - 1

            item.split('').forEach((letter, indx2) => {

                //Pegando em qual posição do caso de teste atual está
                let posicaoElemento = indx2;

                letter = letter.toLowerCase()

                //Testando se o elemento é uma letra e fazendo a conta solicitada
                if (/[a-z]/.test(letter)) {
                    letter = letter.charCodeAt(0) - 97
                    count += letter + elementoEntrada + posicaoElemento
                }
            })

        }
    })
    console.log(count);
}