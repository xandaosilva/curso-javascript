const alunos = ["Caio", "Peninha", "Daniela"];

//adiciona no início
alunos.unshift("Alexandre");

alunos[1] = "Cazé";

//adiciona no final
alunos.push("Maria");
alunos.push("Fábio");
alunos.push("Luana");

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[3]);
console.log(alunos.length);

//remove no início
alunos.shift();

//remove no final
alunos.pop();

console.log(alunos);
console.log(alunos.length);
//console.log(alunos.slice(0, 3));
//console.log(alunos.slice(0, -1));
//console.log(typeof alunos);
//console.log(alunos instanceof Array);