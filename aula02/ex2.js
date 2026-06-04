const input = require('readline-sync')

let senha = input.question("digite sua senha\n")

if(senha.length < 8){
    console.log("senha curta")
}else {
    console.log("senha okay")
}