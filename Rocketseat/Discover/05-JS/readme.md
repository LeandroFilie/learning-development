# JavaScript
Javascript é como nós chamamos a linguaguem (mas isso é o trademark da Oracle), o nome oficial da linguagem é ECMAScript (ES) é a abreviação.

## Tipos de Dados

### Primitive
- String: conjunto de caracteres
  - (" ") aspas duplas
  - (' ') aspas simples
  - (` `) template string

- Number: números
  - Int
  - Float
  - NaN: not a number
  - Infinity: infinito

- Boolean: true ou false

- Undefined: indefinido

- Symbol

- BigInt

### Structural
- Objeto: {propriedade: "valor"}
  - [Funções de Objetos](object.js)

- Array: []
  - [Iterando Arrays](array.js)

- Function

### Structural Root Primitive
- Null: nulo

## Variáveis
JS é fracamente tipada

### Scope
- Determina a visibilidade de alguma variável
```js
// escopo global
{
  //escopo local
  //block statement
}
```

Hoisting
  - Içamento de funções e variáveis para o topo do código, isso declara as variáveis e funções em memória e permite que você use uma função/variável antes mesmo de declara-la.

```js
console.log(x);
// saída será undefined
{
  var x = 1;
}

//Por baixo dos panos, com hoisting
var x;
console.log(x);
{
  x = 1;
}
```

### Var
- Tem o escopo global

### Let e Const
- Escopo de bloco
- Sofrem hoisting para o topo do bloco que foram definidas
  - Diferente do var, ao ser chamada antes de sua criação, é apontado um erro
- Const não pode ter seu valor reatribuido, enquanto let pode


