# Expressões

Expressões são quaisquer linha de código
Pode terminar com ; ou não

# Operadores

## New
Left-hand-side expression
Serve para criar um novo objeto

```js
let name = new String('Leandro')
let age = new Number(23)
```

## Typeof
Retorna o tipo
```js
let number = 123
typeof number
```

## Delete
Deleta uma propriedade dentro de um objeto
```js
const person = {
  name: 'Leandro',
  age: 18
}

delete person.age
```

## Operadores Aritméticos
- Multiplicação (*)
- Divisão (/)
- Soma (+)
- Subtração (-)
- Resto da Divisão (%)
- Incremento (++)
- Decremento (--)
- Exponencial (**)

## Grouping Operator
()
- Utilizado para operações Matemáticas, principalmente

## Operadores de Comparação
- Igual a (==)
  - Estritamente igual (===)
    - Compara até o tipo
- Diferente de (!=)
  - Estritamente igual (!==)
    - Compara até o tipo
- Maior que (>)
- Menor que (<)
- Maior ou igual a (>=)
- Menor ou igual que (<=)

## Operadores de Atribuição (Assignment)
- Assignment (=)
- Addition Assignment (+=)
- Subtraction Assignment (-=)
- Multiplication Assignment (*=)
- Division Assignment (/=)
- Remainder Assignment (%=)
- Division Exponentiation (**=)

## Operadores Lógicos
Dois valores booleanos, que quando verificados, resultará em verdadeiro ou falso

- AND &&

- OR ||

- NOT !

## Operador Condicional Ternário

Condição ? ação se condição true : ação se condição false


## String Operator

### Concatenação
```js
console.log('a' + 'a') //aa
```

## Falsy e Truthy

### Falsy
Em contextos onde um valor booleano é obrigatório
  - false
  - 0
  - -0
  - ""
  - null
  - undefined
  - NaN

### Truthy
Em contextos onde um valor booleano é obrigatório
  - true
  - {}
  - []
  - 1
  - qualquer número, com exceção do 0
  - "string não vazia"
  - -1
  - Infinity
  - -Infinity

## Procedência de Operadores
* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 