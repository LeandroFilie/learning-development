//Transformar uma função com n parâmetros em uma função que recebe apenas um parâmetro

// SEM CURRYING
function somaSemCurrying(a, b){
  return a + b;
}

somaSemCurrying(2, 2);
somaSemCurrying(2, 3);
somaSemCurrying(2, 4);
somaSemCurrying(2, 5);

// COM CURRYING 
function somaComCurrying(x){
  return function(y){
    return x + y;
  }
}

const soma = somaComCurrying(2);
console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));