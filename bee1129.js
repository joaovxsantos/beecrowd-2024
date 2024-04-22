const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(line => line.replace('\r', ''));



//Loopando até haver elementos
while (lines.length) {
    const iterator = +lines.shift()

    if (!iterator) break

    //Pegando os elementos de acordo com o iterator
    lines.splice(0, iterator)
        //Varrendo com forEach 
        .forEach((num) => {
            //separando com split
            const options = num.split(' ');

            //utilizando filter para filtrar de acordo com o solicitado
            const optionChoice = options.filter((option) => option <= 127)

            //Testando casos para leitura
            if (optionChoice.length === 1) {
                let indexOption = options.indexOf(optionChoice[0]);
                console.log(String.fromCharCode(65 + indexOption))
            } else {
                console.log('*')
            }
        })
}