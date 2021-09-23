class Pessoa {
    constructor(nome, sobrenome, idade, altura, peso) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

const p1 = new Pessoa("Pessoa", "Sem Nome", 35, 1.90, 90);
console.log(p1);