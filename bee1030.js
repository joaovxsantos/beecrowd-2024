const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n').map(el => el.replace('\r', ''));


const sobrevivente = (n, k) => {
    if (n == 1) return 0;
    return (sobrevivente(n - 1, k) + k) % n;
};

let NC = parseInt(lines.shift());

for (let i = 1; i <= NC; ++i) {
    let [n, k] = lines.shift().trim().split(' ').map((x) => parseInt(x));

    console.log(`Case ${i}: ${sobrevivente(n, k) + 1}`);
}




