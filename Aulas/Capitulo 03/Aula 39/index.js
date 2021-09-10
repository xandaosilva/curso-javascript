function random(min, max){
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

const min = 1;
const max = 50;
let rnd = random(min, max);

/*while(rnd !== 10){
    rnd = random(min, max);
    console.log(rnd);
}*/

do{
    rnd = random(min, max);
    console.log(rnd);
}while(rnd !== 3);