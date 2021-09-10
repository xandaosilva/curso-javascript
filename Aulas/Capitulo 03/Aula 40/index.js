const vetNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of vetNumeros){
    if(numero % 2 === 0) continue; // continue sempre antes da ação que será executada
    console.log(numero);
}

for(let numero of vetNumeros){
    if(numero === 3) {
        console.log(numero);
        break;
    }
}
