const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));

//Pegando o iterator
const iterator = +lines.splice(0, 1)


//Loop
for (let i = 0; i < iterator; i++) {
    let element = lines[i];

    //Testando entradas para saidas
    if (element === 'P=NP') {
        console.log('skipped')
    } else {
        //Eval resolve expressões matemáticas q estão como string
        console.log(eval(element))
    }
}