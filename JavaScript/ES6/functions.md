# Functions ES6

# This
## Função normal
```js
function myFunction(){
  // Seu próprio this
  this.name = 'Leandro'
  const myArrowFunction = () => {
    // this do escopo em que foi criada
    this.lastName = 'Filie'
  }
  
  myArrowFunction();
}

console.log(typeof myFunction()); // uma função, por padrão, é undefined
console.log(typeof new myFunction()); // o método construtor NEW transforma essa função em um objeto
console.log(new myFunction()); //sendo um objeto, podemos usar o this para definir propriedades dentro dela
console.log(this); //{}, pois esse é this do escopo global
```

## Arrow Function
```js
const myArrowFunction = () => {
  // this do escopo em que foi criada
  this.name = 'Leandro'
}

myArrowFunction();
console.log(this);

console.log(myArrowFunction()); // não pode usar o NEW, portando não é um objeto e, por isso, não tem um this próprio
```

# Argumentos de Funções
- arguments é uma variável especial do JS
- reconhece automaticamente todos os argumentos passados para a função
```js
function soma(){
  console.log(arguments);
  // 1, 2, 3, 4, 5
}

soma(1, 2, 3, 4, 5)
```

## Default arguments
```js
function multiplyWithDefaultArgument(a, b = a){
  // caso b seja undefined, ele assumira o valor a
  return a * b;
}
```

## Usando rest operator
```js
function soma2(...argumentos){
  console.log(argumentos);
}

soma2(1, 2, 3, 4, 5)
```

OBS: nas arrow functions, só podemos fazer usando o rest operator, _arguments_ funciona da mesma forma do this

# Arrow Functions
```js
const hello = () => {
  return 'Hello Word'
}
```

Short Syntax
```js
const helloShort = () => 'Hello Word'

const algumNumero = 10;
const short2 = () => (
  algumNumero >= 10
  ? 'Maior ou igual a 10'
  : 'Menor que 10'
)
```

retornando objeto
```js
const getUser = () => ({
  id: '123',
  name: 'Leandro'
})
```