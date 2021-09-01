// ======================== REST OPERATOR ==================

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


// ======================== SPREAD OPERATOR ==================

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
  return multiply(...rest);
  // pega todos os itens de um array e transformar em parâmetros
  // Diferente do rest operator, que pega todos os parâmetros e transforma em um array
}

console.log(sum(5, 5, 5, 2, 3));

// Pode ser utilizado em strings, arrays, literal objects e objects iteraveis

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args){
  console.log(args);
}

logArgs(...str);
logArgs(...arr);

const arr2 = [...arr, 5, 6, 7]
console.log(arr2);

const obj = {
  teste: 123
}

const obj2 = {
  ...obj,
  test2: 'hello'
}

console.log(obj2);