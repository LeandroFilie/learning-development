// Sem Rest Operator

function sum(a, b){
  var value = 0;

  for(let i = 0; i < arguments.length; i++){
    value += arguments[i];
    //arguments retornam um objeto
  }

  return value;
}

console.log((sum(1, 2, 3, 4, 5)));

// Com rest operator
// rest retorna um array, que vem junto com os métodos de array
function sum2(...args){
  return args.reduce((acc, value) => acc + value, 0);
}
console.log((sum2(1, 2, 3, 4, 5)));

// arguments são inexistentes em arrow functions, o rest operator resolve isso
const sum3 = (...args) => {
  return args.reduce((acc, value) => acc + value, 0);
}
console.log((sum3(1, 2, 3, 4, 5)));

const sum4 = (a, b, ...rest) => {
  console.log(a, b, rest);
  //pega os dois primeiros valores e o resto coloca em um array
}
sum4(1, 2, 3, 4, 5);


