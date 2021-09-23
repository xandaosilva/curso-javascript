const vetNumeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const vetDobro = vetNumeros.map((valor) => valor * 2);

const vetPessoas = [
    { nome: "Luiz", idade: 62 },{ nome: "Maria", idade: 23 },{ nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },{ nome: "Rosana", idade: 32 },{ nome: "Wallace", idade: 47 },
];
const vetNomes = vetPessoas.map((obj) => obj.nome);
const vetIdades = vetPessoas.map((obj) => ({ idade:obj.idade}));
const vetPessoasComId = vetPessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(vetDobro);

console.log(vetNomes);
console.log(vetIdades);
console.log(vetPessoasComId);
