const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.trim().split('\n').map(element => element.replace('\r', ''));

//Desestruturando
const iterator = lines[0]

//Loopando o array
for (let i = 1; i <= iterator; i++) {
    let count = 0;

    //Loopando as letras da string e fazendo os testes
    for (let letter of lines[i]) {
        switch (letter) {
            case '0':
            case '6':
            case '9':
                count += 6;
                break;

            case '1':
                count += 2;
                break;

            case '2':
            case '3':
            case '5':
                count += 5;
                break

            case '4':
                count += 4;
                break;
            case '7':
                count += 3;
                break;

            case '8':
                count += 7;
                break;
        }
    }

    //Lendo valor
    console.log(`${count} leds`);
}