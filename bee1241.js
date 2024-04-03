const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n').map(l => l.replace('\r', ''));


//Loopando o array
for (let i = 1; i <= +lines[0]; i++) {

    //Desestruturando
    const [a, b] = lines[i].split(' ');

    //Vendo se a contem b
    const contain = a.split(b);

    //Se b for maior que a, ou contain nao houver segundo slot, ou se houver e for maior que 0, então:
    if (b.length > a.length || contain.length < 2 || contain[1].length > 0) {
        console.log('nao encaixa')
    } else { //Se não:
        console.log('encaixa')
    }
}