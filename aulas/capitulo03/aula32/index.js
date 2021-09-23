// ... rest ou spread

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosAux = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
const [primeiraLista, segundaLista, terceiraLista] = numerosAux;

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);
console.log(terceiraLista[2]);
