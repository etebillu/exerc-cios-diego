const input = require('readline-sync')

function executaroperacao(a, b, operacao){
    let resultado = operacao(a, b)
    console.log("resultado", resultado)
}

let n1 = Number(input.question("fale um numero"))
let n2 = Number(input.question("fale o outro numero"))

console.log("testes\n")
executaroperacao(n1, n2, (a, b) => a + b)
executaroperacao(n1, n2, (a, b) => a * b)
executaroperacao(n1, n2, (a, b) => a - b)