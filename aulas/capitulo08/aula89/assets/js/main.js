const request = (object) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(object.method, object.url, true);
        xhr.send();

        xhr.addEventListener("load", () => {
            if(xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText);
            else reject(xhr.statusText);
        });
    });
}

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
    
        const obj = {
            method:"GET",
            url: href
        };

        const response = await request(obj);
        loadResultado(response);   
    } catch (error) {
        console.log(error);
    }
}

function loadResultado(response){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
}