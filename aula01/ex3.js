const input = require("readline-sync")

let quantidade=5
let numeros
let total=0

for(let i = 0; i <= 4;){
    numeros = Number(input.question(`fale ${quantidade} numeros\n`))
    total=total+numeros
    i++; quantidade--
}

let media=(total/5);

console.clear();

if(media > 7){
    console.log(`aprovado`)
}
else if(media<7 && media>5){
    console.log(`recuperação`)
}
else{
    console.log(`reprovado`)
}