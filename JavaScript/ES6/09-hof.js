const array = [
  { name: 'iPhone', prince: 5000, quantity: 2},
  { name: 'MacBook Pro', prince: 20000, quantity: 1},
  { name: 'Magic Mouse', prince: 1000, quantity: 5},
]

// .find & findIndex--> pesquisar
const find = array.find((product) => {
  // Percorre todos os elementos
  // No momento que é retornado o true, o elemento que está sendo iterado é jogado para a variável
  // Sempre retorna o primeiro elemento em que a condição retornou true
  
  // ex: retornar o magic mouse
  return product.name === 'Magic Mouse';
});

console.log({find});

const findIndex = array.findIndex((product) =>  product.name === 'Magic Mouse');
console.log({findIndex});

// some & every
const some = array.some((product) => product.prince < 1000)

console.log({some});

const every = array.every((product) => product.prince > 1000)

console.log({every});

// map
const map = array.map((product) => ({ 
  ...product,
  subtotal: product.quantity * product.prince
}));
console.log({map});

/* 
Por baixo dos panos do map
const novoArray = []
novoArray[index] = mapeiaArray(array[index]) 
*/

// Filter

const filter = array.filter((product) => product.quantity > 1)
console.log({filter});

// reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.prince * product.quantity)
}, 0)

console.log({reduce});