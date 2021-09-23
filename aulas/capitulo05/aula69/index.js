const vet = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let soma = 0;

vet.forEach((valor) => soma += valor);
vet.forEach((valor, indice) => console.log(`Indice: ${indice} --- Valor: ${valor}`));

console.log(`Soma total: ${soma}`);