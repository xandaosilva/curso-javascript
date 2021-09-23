const elementos = [
    {tag: "p", texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {tag: "div", texto: "Repellendus nisi explicabo saepe voluptatibus consequuntur et corporis"},
    {tag: "section", texto: "maxime quos, doloribus vitae voluptatum quisquam necessitatibus"},
    {tag: "footer", texto: "pariatur veritatis exercitationem beatae officiis suscipit Ea!"},
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let elementoCriado = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    elementoCriado.appendChild(textoCriado);
    div.appendChild(elementoCriado);
}

container.appendChild(div);