var sumOld = function(a, b){
  return a + b;
}

console.log(sumOld(5, 5));

// Arrow Function
var sumNew = (a, b) => a + b;
//ou
var sum = (a, b) => {
    return a+b;
}
//ou, se tiver somente um argumento
var sum2 = a => a + 10;

console.log(sum(6, 5));

// Arrow function não tem hoisting
// Funções normais tem seu contexto definido onde ela é chamada
// As arrow function tem seu contexto definido onde ela é criada