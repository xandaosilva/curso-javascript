const nome = "Alexandre";
const sobrenome = "Rogério";
const idade = 28;

function somar(x, y){
    return x + y;
}

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


export default (x, y) => x * y;
export { nome, sobrenome, idade, somar, Pessoa };
