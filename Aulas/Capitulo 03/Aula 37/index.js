const texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
const vetor = ["A", "B", "C", "D", "E"];

for(let i of texto){
    console.log(i);
}

console.log("##########");

for(let i of vetor){
    console.log(i);
}

console.log("##########");

vetor.forEach(function(elemento){
    console.log(elemento);
});