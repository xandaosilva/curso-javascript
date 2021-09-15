function* gerador1(){
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}

function* gerador2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4(){
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}

function* gerador5(){
    yield function(){ 
        console.log("Bom dia");
    }

    yield function(){
        console.log("Boa noite");
    }
}

const g1 = gerador1();
const g2 = gerador2();
const g4 = gerador4();
const g5 = gerador5();

for(let valor of g1) console.log(valor);

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

for(let valor of g4) console.log(valor);

const funcao1 = g5.next().value;
const funcao2 = g5.next().value;

funcao1();
funcao2();