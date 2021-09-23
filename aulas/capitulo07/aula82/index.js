class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) console.log(`O dispositivo ${this.nome} está ligado`);
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) console.log(`O dispositivo ${this.nome} está desligado`);
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }
}

const smart = new Smartphone("Smart 01", "Azul", "ST01");
const tablet = new Tablet("Tbt", true);

console.log(smart);
console.log(tablet);

smart.ligar();
console.log(smart);
smart.ligar();
console.log(smart);

smart.desligar();
console.log(smart);
smart.desligar();
console.log(smart);
