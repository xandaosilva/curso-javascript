exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label>Nome do cliente:</label> <input type="text" name="nome" />
            <button>Cadastrar cliente</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
}