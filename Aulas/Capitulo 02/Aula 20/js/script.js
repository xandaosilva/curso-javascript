function cadastrarPessoa(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    function instanciarPessoa(nome, sobrenome, peso, altura){
        return{
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
    }

    function recebeEventoForm(evento){
        evento.preventDefault();
        
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        const pessoa = instanciarPessoa(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(pessoa);

        console.log(pessoas);

        resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener("submit", recebeEventoForm);
}

cadastrarPessoa();