const input = require ('readline-sync')

let nome=input.question("qual seu nome\n")
let idade=input.question("qual sua idade\n")
let cidade=input.question("qual cidade voce mora\n")

console.log(`oi sou o ${nome} tenho ${idade} e moro em ${cidade}`)