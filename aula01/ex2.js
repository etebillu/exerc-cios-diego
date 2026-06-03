const input = require ('readline-sync')

let num1 = Number(input.question("fale um numero\n"));
let num2 = Number(input.question("fale outro numero\n"));

console.log(`a soma dos numeros é ${num1+num2}\n`)
console.log(`a subtração dos numeros é ${num1-num2}\n`)
console.log(`a multiplicação dos numeros é ${num1*num2}\n`)

if(num2===0){
    console.log(`não é possivel fazer multiplicação por 0\n`)
}
else{
    console.log(`a divisão é ${num1/num2}\n`)
}