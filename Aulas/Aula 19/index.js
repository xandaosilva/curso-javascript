let a = [1,2,3];
let b = [...a];
let c = b;

const pessoa = {
    nome: "Alexandre",
    sobrenome: "Rogério"
}

const novaPessoa = {...pessoa};
pessoa.nome = "Alex";

console.log(a, b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push("Teste");
console.log(a,c);

console.log(pessoa);
console.log(novaPessoa);