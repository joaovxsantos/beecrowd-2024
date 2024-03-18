const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));


//Desestruturando
const [iterator, ...placas] = lines;


//Loop
for (i = 0; i < iterator; i++) {

    //Desestruturando
    let [letters, nums] = placas[i].split('-')

    //Testando todas as condições
    if (nums && letters) {

        if (nums.length === 4 && letters.length === 3 && /^[a-z]+$/i.test(letters) && letters === letters.toLocaleUpperCase()) {

            let numtest = (nums.split('').map(el => { return el >= 0 & el <= 9 ? Number(el) : '' }).join(''));

            if (numtest.length === 4) {
                let lastNumber = +numtest[3]

                if (lastNumber === 1 || lastNumber === 2) {
                    console.log('MONDAY')
                } else if (lastNumber === 3 || lastNumber === 4) {
                    console.log('TUESDAY')
                } else if (lastNumber === 5 || lastNumber === 6) {
                    console.log('WEDNESDAY')
                } else if (lastNumber === 7 || lastNumber === 8) {
                    console.log('THURSDAY')
                } else if (lastNumber === 9 || lastNumber === 0) {
                    console.log('FRIDAY')
                }

            } else {
                console.log('FAILURE')
            }
        } else {
            console.log('FAILURE')
        }
    } else {
        console.log('FAILURE')
    }
}