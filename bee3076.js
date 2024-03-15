const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Varrendo array

lines.forEach((ano) => {
    //Testando condição e usando a formula para calcular o século
    if (ano > 0) {
        console.log(parseInt(((ano - 1) / 100) + 1))
    }
})


