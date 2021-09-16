class Pessoa{
    constructor(nome, sobrenome, idade, altura, peso){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;

        this.getDataNascimento = function(){
            const data = new Date();
            return `Data de nascimento ${data.getFullYear() - this.idade}`;
        }

        this.calcularImc = function(){
            const imc = (this.peso/(Math.pow(this.altura,2)));
            return imc.toFixed(2);
        }
        
        this.mostrarNivelImc = function(){
            const imc = this.calcularImc();
            if(imc < 18.5) return `${this.nome} está com o IMC de ${imc} e está abaixo do peso`;
            else if(imc < 25) return `${this.nome} está com o IMC de ${imc} e está peso normal`;
            else if(imc < 30) return `${this.nome} está com o IMC de ${imc} e está com sobrepeso`;
            else if(imc < 35) return `${this.nome} está com o IMC de ${imc} e está com Obesidade grau 1`;
            else if(imc < 40) return `${this.nome} está com o IMC de ${imc} e está com obesidade grau 2`;
            else return `${this.nome} está com o IMC de ${imc} e está com obesidade grau 3`;
        }

        this.mostrarInformacoes = function(){
            let informacoes = ``;
            informacoes += `Nome da pessoa: ${this.nome}`;
            informacoes += `\nSobrenome da pessoa: ${this.sobrenome}`
            informacoes += `\nIdade da pessoa: ${this.idade}`;
            informacoes += `\nAltura da pessoa: ${this.altura} metros`;
            informacoes += `\nPeso da pessoa: ${this.peso} Kg`;
            return informacoes;
        }
    }
}

const pessoa = new Pessoa("Alexandre", "Rogério", 28, 1.70, 120);
console.log(pessoa.mostrarInformacoes());
console.log(pessoa.getDataNascimento());
console.log(pessoa.mostrarNivelImc());