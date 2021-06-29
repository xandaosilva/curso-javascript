const nome = "Alexandre";
const sobrenome = "Rogério";
const idade = 28;
const peso = 110;
const altura = 1.70;

let imc = peso/(altura * altura);
let anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`); 
console.log(`tem ${altura} de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento} .`);