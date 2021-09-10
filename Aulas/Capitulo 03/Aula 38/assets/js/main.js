const divParagrafos = document.querySelector(".paragrafos");
const paragrafos = divParagrafos.querySelectorAll("p");
const estilos = getComputedStyle(document.body);
const corDeFundo = estilos.backgroundColor;

for(let p of paragrafos){
    p.style.backgroundColor = corDeFundo;
    p.style.color = "#FFFFFF";
}
