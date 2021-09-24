import { CPF } from "./CPF";

class GeradorCPF{
    gerarAleatorio(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatarCpf(cpf){
        return cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
    }

    gerarNovoCpf(){
        const cpfEditado = this.gerarAleatorio();
        const primeiroDigito = CPF.criarDigito(cpfEditado);
        const segundoDigito = CPF.criarDigito(cpfEditado + primeiroDigito);
        const novoCpfGerado = cpfEditado + primeiroDigito + segundoDigito;
        return this.formatarCpf(novoCpfGerado);
    }
}

export { GeradorCPF };