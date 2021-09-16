const vetNumeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const vetNumerosMaioresDoQueDez = vetNumeros.filter((valor) => valor > 10);

const vetPessoas = [
    { nome: "Luiz", idade: 62 },{ nome: "Maria", idade: 23 },{ nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },{ nome: "Rosana", idade: 32 },{ nome: "Wallace", idade: 47 },
];
const maioresNomes = vetPessoas.filter((obj) => obj.nome.length >= 5);
const maioresDeCinquentaAnos = vetPessoas.filter((obj) => obj.idade > 50);
const nomesQueTerminamEmA = vetPessoas.filter((obj) => obj.nome.toLowerCase().endsWith("a"));

console.log(vetNumerosMaioresDoQueDez);

console.log(maioresNomes);
console.log(maioresDeCinquentaAnos);
console.log(nomesQueTerminamEmA);
