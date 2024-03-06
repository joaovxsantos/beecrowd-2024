//BEE2533
// for (let i = 1; i < lines[0]; i++) {
//     discN += lines[i].reduce((accum, el) => accum *= el)
//     discH += lines[i][1]
// }

// console.log(((discN / discH) / 100).toFixed(4))


// lines.forEach((element, indx) => {


//     let discN = 0;
//     let discH = 0;

//     if (element.length === 1) {
//         for (let i = indx; i < (indx + element); i++) {

//             if (lines[i] && lines[i].length > 1) {
//                 // discN += lines[i].reduce((accum, el) => accum *= el)
//                 discN += lines[i][0] * lines[i][1]
//                 discH += lines[i][1] ? lines[i][1] : 0
//             }
//         }
//         console.log(((discN / discH) / 100).toFixed(4))
//     }
// })
