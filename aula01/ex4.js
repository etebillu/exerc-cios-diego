const input = require("readline-sync")

const numero = Number(input.question("fale um numero\n"));

console.clear();

for(let i=1; i<=10; i++) {
    console.log(`${numero} x ${i} = ${numero*i}`);
}