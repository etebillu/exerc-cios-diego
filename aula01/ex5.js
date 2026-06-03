const input = require("readline-sync");

let numeros=0
let impares=0
let pares=0

for(let i=1; i<=10;){
    numeros = Number(input.question("escreva 10 numero(s):"))
    i++;

    if(numeros % 2===0){
        pares++
    }
    else{
        impares++
    }
}

    console.log(`Sua sequencia tem ${impares} numeros impares e ${pares} numeros pares`);