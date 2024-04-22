const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));


//Loop
while (lines) {
    const results = {}
    let trueOrFalse = false
    const [N, D] = lines.shift().split(' ').map(Number)


    //Se os valores forem igual a 0 interrompe o loop
    if (N === 0 && D === 0) {
        break
    }

    //Pegando as entradas de acordo com o valor na variável D
    lines.splice(0, D).forEach((line) => {
        line.split(' ')
            .map(Number)
            .forEach((line2, indx) => {
                if (line2 === 1) {
                    //Contando
                    results[indx] = ++results[indx] || 1
                }
            })
    })

    //Loopando o resultado e lendo de acordo com a condição
    for (let result in results) {
        if (results[result] === D) {
            console.log('yes')
            trueOrFalse = true;
            break
        }
    }

    if (!trueOrFalse) console.log('no')
}