const input = require('readline-sync')

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

let numero1 = Number(input.question("fale um numero\n"))
let numero2 = Number(input.question("fale outro numero\n"))

let op = input.question("escolha + - * /\n")

if (op == "+") {
    console.log(soma(numero1, numero2))
} 
if (op == "-") {
    console.log(subtracao(numero1, numero2))
} 
if (op == "*") {
    console.log(multiplicacao(numero1, numero2))
} 
if (op == "/") {
    console.log(divisao(numero1, numero2))
}