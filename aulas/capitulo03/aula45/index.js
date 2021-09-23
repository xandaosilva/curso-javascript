// try será executado quando não ocorrer erro
// catch será executado quando ocorrer erro
// finally sempre será executado

function retornarHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instância do tipo Date");
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {

    });
}

try {
    console.log(retornarHora());
    console.log(retornarHora(new Date("04-03-1993 11:47:00")));
    console.log(retornarHora(11));
} catch (error) {
    console.log("Data inválida .");
} finally{
    console.log("Bom dia");
}
