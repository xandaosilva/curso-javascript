class Pessoa{
    constructor(nome, sobrenome, idade, altura, peso){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }

    mostrarInformacoes(){
        let informacoes = "";

        informacoes += `INFORMAÇÕES DA PESSOA`;
        informacoes += `\nNome completo: ${this.nome} ${this.sobrenome} .`;
        informacoes += `\nIdade: ${this.idade} anos.`;
        informacoes += `\nAltura: ${this.altura} metros.`;
        informacoes += `\nPeso: ${this.peso}Kg`;

        return informacoes;
    }
}

const pessoa = new Pessoa("Maria", "Eduarda", 25, 1.70, 63);

pessoa.falar();
pessoa.comer();
pessoa.beber();
console.log(pessoa.mostrarInformacoes());
