# Manipulação de Dados

## Prototype

- JS é chamado de prototype-based language
  - Linguagem baseada em protótipos

- __proto__

- Há uma cadeia de prototypes com diversas funções ja prontas

- Permite a manipulação dos dados

## Type Conversion (typercasting) vs Type Coersion
- Alteração de um tipo de dado para outro dado

### Type Conversion (typercasting)
- A troca acontece explicitamente
Exemplo:
```js
console.log(Number('9') + 5)
//saida: 14
```
### Type Coersion
- O JS faz a troca por baixo dos panos
Exemplo:
```js
console.log('9' + 5)
// Saída: 95
// Transformou o tipo number (5) em string
```

## Manipulação de Strings e Numbers

### Transformar String em Número e Número em String
```js
// String em Número
let string = '123'
Number(string)

// Número em String
let number = 321
String(number)
```

### Contar caracteres e dígitos
String
```js
let word = 'Paralelepipedo'
word.length
```

Number
```js
let number = 1234
String(number).length
```