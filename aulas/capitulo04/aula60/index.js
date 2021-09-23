function contarAteDez(max){
    console.log(max);
    if(max >= 10) return;
    max++;
    contarAteDez(max);
}

contarAteDez(0);