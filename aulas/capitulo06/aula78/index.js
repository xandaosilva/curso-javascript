function Conta(agencia, numeroConta, saldo) {
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
}

function ContaCorrente(agencia, numeroConta, saldo, limite) {
    Conta.call(this, agencia, numeroConta, saldo);
    this.limite = limite;
}

function ContaPoupanca(agencia, numeroConta, saldo) {
    Conta.call(this, agencia, numeroConta, saldo);
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente . O saldo atual é de ${this.saldo}R$`);
        return;
    }
    this.saldo -= valor;
    this.consultarSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.consultarSaldo();
};

Conta.prototype.consultarSaldo = function(){
    console.log(`Informações da conta`)
    console.log(`Agência: ${this.agencia}`);
    console.log(`Número da conta: ${this.numeroConta}`);
    console.log(`Saldo ${this.saldo}R$`);
};

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente . O saldo atual é de ${this.saldo}R$`);
        return;
    }
    this.saldo -= valor;
    this.consultarSaldo();
};

const conta = new Conta("Agencia A", 123, 100);
const contaCorrente = new ContaCorrente("Agencia B", 1234, 0, 100);
const contaPoupanca = new ContaPoupanca("Agencia C", 123456789, 0);

conta.depositar(10);
conta.sacar(120);
conta.consultarSaldo();

contaCorrente.depositar(10);
contaCorrente.sacar(90);

contaPoupanca.depositar(10);
contaPoupanca.sacar(5);
contaPoupanca.sacar(5);
