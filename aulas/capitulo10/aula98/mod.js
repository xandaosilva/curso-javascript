class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

exports.Pessoa = Pessoa;

/**
 * const nome = "Alexandre";
 * const sobrenome = "Rogério";
 * const retornarNomeCompleto = () => `${nome} ${sobrenome}`;
 * 
 * module.exports.nome = nome;
 * module.exports.sobrenome = sobrenome;
 * module.exports.mostrarNomeCompleto = mostrarNomeCompleto;
 * 
 * exports.nome = nome;
 * exports.sobrenome = sobrenome;
 * exports.retornarNomeCompleto = retornarNomeCompleto;
 * 
 * console.log(module.exports);
 */

