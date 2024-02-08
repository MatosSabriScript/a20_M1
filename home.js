// let users = [
//     { nome: "Bia", idade: 23},
//     { nome: "Dan", idade: 26 },
//     { nome: "Diego", idade: 16 },
//     { nome: "Roberta", idade: 16 }
// ];

// let couter= 0

// while (couter<= users. length){
//     document.write(users[couter]. nome + ""+ users [couter])
//     couter++
// }

function imprimirFor() {
    for(let x = 0; x <= 10; x++)
    document.write(`<h1>${x}</h1>`);
}
imprimirFor();
let y = 0;
while(y <= 10){
    document.write(`<h1>${y}</h1>`);
    y++;
}