const nomes = ["A", "B", "C", "D", "E"];
const removidos = nomes.splice(3, 2);
const adicionado = nomes.splice(3, 2, "F", "G");

/**
 * pop -> removidos = nomes.splice(-1, 1);
 * shift -> removidos = nomes.splice(0, 1);
 * push -> nomes.splice(nomes.length, 1, "H", "I", "J", "K");
 * unshift -> nomes.splice(0, 0, "H", "I", "J", "K");
 * 
 */

console.log(nomes);
console.log(removidos);
console.log(adicionado);
console.log(nomes);
