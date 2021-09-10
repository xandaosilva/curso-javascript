const retornarMaiorNumero = (x, y) => x > y ? x : y;
const ehPaisagem = (largura, altura) => largura >= altura;

function fizzBuzz(numero){
    if(typeof numero !== "number") return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if(numero % 3 === 0) return "Fizz";
    if(numero % 5 === 0) return "Buzz";
    return numero;
}

function testarFizzBuzz(){
    for(let i = 0; i <= 100; i++){
        console.log(i, fizzBuzz(i));
    }
}

/*console.log(retornarMaiorNumero(1,2));
console.log(retornarMaiorNumero(3,3));
console.log(retornarMaiorNumero(12,7));
console.log(ehPaisagem(1920,1080));
console.log(ehPaisagem(1080,1920));
console.log(ehPaisagem(1920,1920));*/
testarFizzBuzz();