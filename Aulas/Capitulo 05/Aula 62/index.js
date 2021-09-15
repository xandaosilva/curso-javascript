const nomes = ["A", "B", "C", "D", "E", "F"];
const nomeRemovido = nomes.pop();
const novoVetNome = nomes.slice(0, -1);

console.log(nomes);
console.log(nomeRemovido);

nomes.push("G");
nomes.shift();
nomes.unshift("Z");
console.log(nomes);

console.log(novoVetNome);