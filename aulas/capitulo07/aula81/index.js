const _velocidade = Symbol("velocidade");
class Carro{
    constructor(nome, velocidadeMaxima){
        this.nome = nome;
        this[_velocidade] = 0;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(novaVelocidade){
        if(typeof novaVelocidade !== "number") return;
        if(novaVelocidade < 0 || novaVelocidade > this.velocidadeMaxima) return;
        this[_velocidade] = novaVelocidade;
    }

    acelerar(){
        if(this[_velocidade] === this.velocidadeMaxima) return;
        this[_velocidade]++;
    }

    reduzir(){
        if(this[_velocidade] === 0) return;
        this[_velocidade]--;
    }
}

const carro = new Carro("Ferrari", 320);

for(let i = 0; i <= 400; i++){
    carro.acelerar();
}

console.log(carro);

for(let i = 1; i <= 10; i++){
    carro.reduzir();
}

console.log(carro);

