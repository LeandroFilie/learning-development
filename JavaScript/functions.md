# Functions

- Explicar um bloco de código (através de seu nome)
- Agrupar um bloco de código
- Repetir um bloco de código todas as vezes necessárias

## Sintaxe
```js
// Function statement
function nameFunction(){

  //code here

}

// Execute, run, call, invoke
nameFunction()
```

Podemos declarar funções dentro de variáveis
```js
// Function Expression | Função Anónima

const sum = function(){

}

sum()
```

## Argumentos e Parâmetros
Parâmetros são definidos no momentos da criação da função
  - Essas variáveis só existem no escopo da função
```js
const sum = function(number1, number2){
  // number1 e number2 são parâmetros
}
```

Argumentos é o que passamos para os parâmetros da função
```js
sum(2,3)
// 2 e 3 são argumentos
```

## Function Hoisting
- Funções statements sofrem hoisting, exceto funções anónimas
  - Mesmo com a declaração var, irá dar erro

## Arrow Function
```js
const nameFunction = () => {
  // code here
}

const nameFunction2 = (param) => {
  // pode passar parâmetros
}
```

## Callback Function
- São funções passadas como argumento para outras funções

```js
function sayMyName(name){
  name();
  //executara a função passada no momento da chamada da função
}

sayMyName(
  () => {
    //code
  }
)
```

## Function Constructor
 ```js
function Person(name){
  //this sempre referencia ao que chamou a função com o new
  this.name = name
}

const Leandro = new Person('Leandro')
const Julia = new Person('Julia')
// retorna um novo objeto
// os dois tem as mesmas propriedades definidas na function Person
 ```