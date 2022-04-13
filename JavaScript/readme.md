# JavaScript
Javascript é como nós chamamos a linguagem (mas isso é o trademark da Oracle), o nome oficial da linguagem é ECMAScript (ES) é a abreviação.

## Conceitos
- [Programação Orientada a Objetos](./Conceitos/poo.md)
- [JS6](ES6/README.md)
- [Prototype](prototype.md)
- [DOM - Document Object Model](dom.md)

### Hoisting
Içamento de funções e variáveis para o topo do código, isso declara as variáveis e funções em memória e permite que você use uma função/variável antes mesmo de declara-la.

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

### Imutabilidade
- Uma variável nunca se altera, se precisar mudar, cria outra variável

```js
const user = {
  name: 'Leandro',
  lastName: 'Gomes Filié'
}

function getUserFullName(user){
  return{
    ...user, //spread operator => para cada propriedade que receber do 'user', vai colocar no novo objeto
    fullName: `${user.name} ${user.lastName}`
  }
}

const userFullName = getUserFullName(user)

console.log(userFullName);
```

### Currying
Transformar uma função com n parâmetros em uma função que recebe apenas um parâmetro

```js
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
```

## Design Patterns
Padrões de projeto reutilizáveis para problemas comuns

[Ver todos](design_patterns.md)

## Tipos de Dados

### Primitive
- String: conjunto de caracteres
  - " " aspas duplas
  - ' ' aspas simples
  - \` \` template string

- Number: números
  - Int
  - Float
  - NaN: not a number
  - Infinity: infinito

- Boolean: true ou false

- Undefined: indefinido

- [Symbol](symbol.md)

- BigInt

### Structural
- Objeto: {propriedade: "valor"}
  - [Funções de Objetos](objects.md)

- Array: [ ]
  - [Iterando Arrays](ES6/09-hof.md)

- [Functions](functions.md)
  - [Functions no JS ES6](ES6/01-functions.md)

### Structural Root Primitive
- Null: nulo

## Variáveis
JS é fracamente tipada
- [Var](#var), [Let e const](#Let-e-Const)
- Destructuring
  - Arrays e Objetos

### Statements do JavaScript
  - [Controle de Fluxo](control_flow.md)
    - If, Switch, Throw e try/catch
  - [Estruturas de Repetição](repeticao.md)
    - For, While, For of, For in
  - Array, Objeto
  - Métodos de array e objeto

### [Expressões e Operadores](expressions_operators.md)



### Promises
  - Fetch
  - Async/Await

## Scope
- Determina a visibilidade de alguma variável
```js
// escopo global
{
  //escopo local
  //block statement
}
```

### Var
- Tem o escopo global

```js
(() => {
  console.log(`Valor dentro da função ${test}`);

  if(true){
    var test = 'example';
    console.log(`Valor dentro do if ${test}`);
  }

  console.log(`Valor após execução do if ${test}`);
})();
```

### Let e Const
- Escopo de bloco
- Sofrem hoisting para o topo do bloco que foram definidas
  - Diferente do var, ao ser chamada antes de sua criação, é apontado um erro
- Const não pode ter seu valor reatribuido, enquanto let pode

```js
// LET
(() => {
  let testLet = 'valor função'
  console.log(`Valor dentro da função ${testLet}`);

  if(true){
    let testLet = 'valor if';
    console.log(`Valor dentro do if ${testLet}`);
  }

  console.log(`Valor após execução do if ${testLet}`);
})();

// CONST
const name = 'Leandro'; //não pode alterar o nome

const user = {
  name: 'Leandro'
}

user.name = 'Outro Nome'; //se for objeto, pode alterar

const persons = ['Pessoa 1', 'Pessoa 2', 'Pessoa 3'];

persons[1] = 'Pessoa X'; // array também pode alterar
console.log(persons);
```