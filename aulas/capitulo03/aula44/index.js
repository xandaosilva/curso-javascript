function somar(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new Error("x e y precisam ser números.");
    }
    return x + y;
}

try {
    console.log(somar(1, 2));
    console.log(somar(1, "2"));
} catch (error) {
    console.log("Operação inválida .");
}