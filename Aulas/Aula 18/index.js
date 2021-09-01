function instanciarPessoa(nome, sobrenome, idade){
    return{
        //nome, sobrenome, idade
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = instanciarPessoa("Alexandre", "Rogério", 28);
const pessoa2 = instanciarPessoa("Maria", "Luiza", 42);

console.log(pessoa1);
console.log(pessoa2);