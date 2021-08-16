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