const vetA = [1, 2, 3];
const vetB = [4, 5, 6];
const vetC = vetA.concat(vetB, [7, 8, 9]);
const vetD = [...vetA, ...vetB];

console.log(vetC);
console.log(vetD);
