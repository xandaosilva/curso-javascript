function CPF(cpf) {
    Object.defineProperty(this, "cpfEditado", {
        enumerable: true,

        get: function(){
            return cpf.replace(/\D+/g, "");
        }
    });
}

CPF.prototype.criarDigito = function(cpfParcial){
    const vetCpf = Array.from(cpfParcial);
    let contadorRegressivo = vetCpf.length + 1;
    const total = vetCpf.reduce((acumulador, valor) => {
        acumulador += (contadorRegressivo * Number(valor));
        contadorRegressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito); 
};

CPF.prototype.verificarSequencia = function(){
    return this.cpfEditado[0].repeat(this.cpfEditado.length) === this.cpfEditado;
};

CPF.prototype.validarCpf = function() {
    if(typeof this.cpfEditado === "undefined") return false;
    if(this.cpfEditado.length !== 11) return false;
    if(this.verificarSequencia()) return false;
    
    const cpfParcial = this.cpfEditado.slice(0, -2);
    const primeiroDigito = this.criarDigito(cpfParcial);
    const segundoDigito = this.criarDigito(cpfParcial + primeiroDigito);
    const cpfGerado = cpfParcial + primeiroDigito + segundoDigito;

    return cpfGerado === this.cpfEditado;
};

CPF.prototype.retornarMensagemValidacao = function(){
    if(this.validarCpf()) console.log("CPF válido");
    else console.log("CPF inválido");
}

const cpf = new CPF("705.484.450-52");
const cpf2 = new CPF("070.987.720-03");
const cpf3 = new CPF("111.111.111-11");

cpf.retornarMensagemValidacao();
cpf2.retornarMensagemValidacao();
cpf3.retornarMensagemValidacao();
