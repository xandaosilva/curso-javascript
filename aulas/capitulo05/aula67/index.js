const vetNumeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = vetNumeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;    
}, 0);

const vetPares = vetNumeros.reduce(function (acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;    
}, []);

const vetDobro = vetNumeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;    
}, []);

const vetPessoas = [
    { nome: "Luiz", idade: 62 },{ nome: "Maria", idade: 23 },{ nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },{ nome: "Rosana", idade: 32 },{ nome: "Wallace", idade: 47 },
];

const pessoaMaisVelha = vetPessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(total);
console.log(vetPares);
console.log(vetDobro);
console.log(pessoaMaisVelha);
