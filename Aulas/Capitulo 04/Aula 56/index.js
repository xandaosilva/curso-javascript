function instanciarPessoa(nome, sobrenome, altura, peso){
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,
        
        falar(assunto){
            return `${this.nome} está falando sobre ${assunto} .`;
        },
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(novoNome){
            novoNome = novoNome.split(" ");
            this.nome = novoNome.shift();
            this.sobrenome = novoNome.join(" ");
        },
        
        get imc(){
            return (this.peso/(Math.pow(this.altura,2))).toFixed(2);
        }
    };
}

const pessoa1 = instanciarPessoa("Alexandre", "Rogério", 1.70, 120);

console.log(pessoa1);
console.log(pessoa1.falar("Futebol"));
pessoa1.nomeCompleto = "Alex Silva";
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.imc);
