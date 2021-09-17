class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

Pessoa.prototype.retornarNomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa("Testando", "Pessoa 1");
const pessoa2 = new Pessoa("Pessoa", "Da Silva");

console.dir(pessoa1);
console.dir(pessoa2);