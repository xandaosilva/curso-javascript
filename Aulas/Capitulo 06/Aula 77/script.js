// funcoes exemplos
function editarCpf(cpf){
    return cpf.replace(/\D+/g, "");
}

const cpf = "705.484.450-52";
const cpfEditado = editarCpf(cpf);
const cpfArray = Array.from(cpfEditado);

console.log(cpfEditado);
console.log(cpfArray.reduce((acumulador, valor) => acumulador + Number(valor), 0));
