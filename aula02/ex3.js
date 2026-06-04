const input = require('readline-sync')

function soma(a, b){
    return a+b
}

function bustração(a, b){
    return a-b
}
function multiplicação(a, b){
    return a*b
}
function divisão(a, b){
    return a/b
}

let soma2 = (a, b) => a+b
let subtração2 = (a, b) => a-b
let multiplicação2 = (a, b) => a*b
let divisão2 = (a, b) => a/b

let n1 = Number(input.question("fale um numero\n"))
let n2 = Number(input.question("fale o segundo numero\n"))

console.log("soma", soma2(n1, n2))
console.log("subtração", subtração2(n1, n2))
console.log("multiplicação", multiplicação2(n1, n2))
console.log("divisão", divisão2(n1, n2))