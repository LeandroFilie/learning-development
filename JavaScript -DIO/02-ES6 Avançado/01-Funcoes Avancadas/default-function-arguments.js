function multiply(a, b){
  return a * b;
}

console.log(multiply(5)); //daria NaN, pois a função pede dois parâmetros 
//e só um está sendo passado, então ele é definido com undefined

function multiplyWithDefaultArgument(a, b = a){
  // caso b seja undefined, ele assumira o valor a
  return a * b;
}

console.log(multiplyWithDefaultArgument(5));

// lazy evaluation
function randomNumber(){
  return Math.random() * 10;
}

function multiplyWithLazyEvaluation(a, b = randomNumber()){
  return a * b;
}
console.log(multiplyWithLazyEvaluation(5));