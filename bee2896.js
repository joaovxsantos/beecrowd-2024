const input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(el => el.replace('\r', ''));


//Varrendo o array
lines.forEach((element, index) => {
    if (element.length > 1) {
        let [n, k] = element.split(' ');
        n = parseFloat(n)
        k = parseFloat(k)

        if (!isNaN(n) && !isNaN(k)) {
            let result = Math.trunc((n % k) + (n / k))
            console.log(result)
        }
    }
})
