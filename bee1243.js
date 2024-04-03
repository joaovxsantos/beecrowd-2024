const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n').map(l => l.replace('\r', ''));



//Varrendo o array
lines.forEach((line) => {

    //Verificando se possui algo nele
    if (line.length > 0) {

        //Declarando variáveis de contagem
        let totalLength = 0;
        let totalWords = 0;

        //Varrendo cada palavra da frase
        line.split(' ').forEach((string) => {

            //Caso especial: tirando o ponto final
            string = string.replace(/\.$/, "")

            //Se a palavra tiver algo e for apenas letras, então:
            if (string.length && /[^a-zA-Z]/.test(string)) {
                totalWords += 1
                totalLength += string.length
            }
        })

        let result = Math.floor(totalLength / totalWords)


        //Testando condições
        if (isNaN(result) || result <= 3) {
            console.log(250)
        } else if (result >= 4 && result <= 5) {
            console.log(500)
        } else if (result >= 6) {
            console.log(1000)
        }
    }

})