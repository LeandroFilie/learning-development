# High Order Functions

```js
const array = [
  { name: 'iPhone', prince: 5000, quantity: 2},
  { name: 'MacBook Pro', prince: 20000, quantity: 1},
  { name: 'Magic Mouse', prince: 1000, quantity: 5},
]
```

### find e findIndex

- find: busca dentro do array, alguma coisa
  - Percorre todos os elementos
  - No momento que é retornado o true, o elemento que está sendo iterado é jogado para a variável
  - Sempre retorna o primeiro elemento em que a condição retornou true

```js
const find = array.find((product) => {
  // Percorre todos os elementos
  // No momento que é retornado o true, o elemento que está sendo iterado é jogado para a variável
  // Sempre retorna o primeiro elemento em que a condição retornou true
  
  // ex: retornar o magic mouse
  return product.name === 'Magic Mouse';
});
```

- findIndex: a mesma coisa que o find, porém retorna a posição
```js
const findIndex = array.findIndex((product) =>  product.name === 'Magic Mouse');
```

## some & every
- some: verifica se algum elemento do array bate com a condição
  - Retorna um boolean
```js
const some = array.some((product) => product.prince < 1000)
```

- every: igual ao some, porém todos os itens tem que retornar true para a condição
```js
const every = array.every((product) => product.prince > 1000)
```

## map
- map: cria um novo array baseado no anterior, porém, modificando alguma propriedade
  - O retorno sempre será um array com o mesmo número de posições do array base

```js
const map = array.map((product) => ({ 
  ...product,
  subtotal: product.quantity * product.prince
}));
```

Por baixo dos panos do map
```js
const novoArray = []
novoArray[index] = mapeiaArray(array[index]) 
```


## Filter
filtrar array
  - Toda vez que um item satisfazer a condição, este item é jogado para o novo array

```js
const filter = array.filter((product) => product.quantity > 1)
```

## reduce
pegar o array e transformar em um outro tipo de dados
```js
array.reduce((acumulador, momento) => {

}, valorInicial)
```

```js
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.prince * product.quantity)
}, 0)
```

# forEach
Iterar os itens do array

```js
persons.forEach(person => {
  console.log(`Nome: ${person.name}`);
})
```

## sort
Ordena os elementos do próprio array e retorna o array
```js
const order = persons.sort((current, next) => current.grade - next.grade);
```
[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## reverse
Inverte o array

```js
const reverse = arr.reverse()
```