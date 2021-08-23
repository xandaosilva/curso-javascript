const num1 = 5;
const num2 = 10;
const num3 = 2;

console.log("SOMA :", num1 + num2);
console.log("SUBTRAÇÃO :", num1 - num2);
console.log("MULTIPLICAÇÃO :", num1 * num2);
console.log("DIVISÃO :", num1 / num2);
console.log("EXPONENCIAL :", num3 ** num2);
console.log("MÓDULO :", num2 % num1);
console.log("PRECEDÊNCIA :", num1 + num2 * num3);
console.log("PRECEDÊNCIA :", (num1 + num2) * num3);

let contador = 1;
console.log("CONTADOR :", contador);

contador++;
contador++;
contador++;
contador += 1;
console.log("CONTADOR INCREMENTADO :",contador);

contador--;
contador--;
contador -= 1;
console.log("CONTADOR DECREMENTADO :",contador);

let contadorAux = 1;
console.log("CONTADOR AUX ATUALIZADO E MOSTRADO NA TELA:",++contadorAux);
console.log("CONTADOR AUX :",contadorAux);
console.log("CONTADOR AUX MOSTRADO NA TELA E ATUALIZADO:",contadorAux++);
console.log("CONTADOR AUX :",contadorAux);