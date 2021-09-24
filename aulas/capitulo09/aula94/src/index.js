import multiplicar, { nome, sobrenome, idade, somar, Pessoa } from "./modulo1";

const pessoa1 = new Pessoa("Nova", "Pessoa");

console.log(pessoa1);
console.log(nome, sobrenome,idade);
console.log(somar(20,2));
console.log(multiplicar(11,2));