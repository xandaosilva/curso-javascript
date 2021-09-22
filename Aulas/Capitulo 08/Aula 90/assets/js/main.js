document.addEventListener("click", e =>{
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === "a"){
        e.preventDefault();
        loadPagina(elemento);
    }
});

async function loadPagina(e){
    try {
        const href = e.getAttribute("href");
        const response = await fetch(href);

        if(response.status !== 200) throw new Error("Erro 404");

        const html = await response.text();

        loadResultado(html);
    } catch (error) {
        console.log(error);
    }
    
}

function loadResultado(response){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
}