class CPF{
    constructor(cpf){
        Object.defineProperty(this, "cpfEditado", {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, "")
        });
    }

    verificarSequencia(){
        return this.cpfEditado[0].repeat(this.cpfEditado.length) === this.cpfEditado;
    };

    static criarDigito(cpfParcial){
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

    gerarCpf(){
        const cpfParcial = this.cpfEditado.slice(0, -2);
        const primeiroDigito = CPF.criarDigito(cpfParcial);
        const segundoDigito = CPF.criarDigito(cpfParcial + primeiroDigito);
        this.cpfGerado = cpfParcial + primeiroDigito + segundoDigito;
    };

    validarCpf() {
        if(!this.cpfEditado) return false;
        if(typeof this.cpfEditado === "undefined") return false;
        if(this.cpfEditado.length !== 11) return false;
        if(this.verificarSequencia()) return false;
        this.gerarCpf();
        
        return this.cpfGerado === this.cpfEditado;
    };

    retornarMensagemValidacao(){
        if(this.validarCpf()) console.log("CPF válido");
        else console.log("CPF inválido");
    };
}

export { CPF };
